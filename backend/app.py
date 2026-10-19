"""MSS Realtors - FastAPI backend service."""

import os
import json
import time
from typing import List, Optional

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

from .data import (
    PROPERTIES,
    PROJECTS,
    TESTIMONIALS,
    SERVICES,
    COMPANY,
    STATS,
    AMENITY_ICONS,
    WHY_US,
    LOAN_PARTNERS,
    TIMELINE,
    GALLERY,
    BLOGS,
)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(BASE_DIR, "enquiries.json")

app = FastAPI(
    title="MSS Realtors API",
    description="Backend API for MSS Realtors - plots, flats, construction and services.",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class EnquiryCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    phone: str = Field(..., min_length=10, max_length=15)
    email: str = Field(default="", max_length=120)
    property_id: Optional[int] = None
    property_title: str = Field(default="", max_length=200)
    service: str = Field(default="General Enquiry", max_length=100)
    message: str = Field(default="", max_length=1000)


class Enquiry(EnquiryCreate):
    id: int
    created_at: float


def _load_enquiries() -> list:
    if os.path.exists(DATA_FILE):
        try:
            with open(DATA_FILE, "r", encoding="utf-8") as f:
                return json.load(f)
        except (json.JSONDecodeError, OSError):
            return []
    return []


def _save_enquiries(enquiries: list) -> None:
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(enquiries, f, ensure_ascii=False, indent=2)


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "MSS Realtors API"}


@app.get("/")
def api_root():
    return {
        "service": "MSS Realtors API",
        "docs": "/docs",
        "health": "/api/health",
        "website": "Deploy the frontend as a separate Vercel project rooted at frontend.",
    }


@app.get("/api/company")
def get_company():
    return COMPANY


@app.get("/api/stats")
def get_stats():
    return STATS


@app.get("/api/properties")
def get_properties(
    type: Optional[str] = None,
    status: Optional[str] = None,
    min_price: Optional[int] = None,
    max_price: Optional[int] = None,
    location: Optional[str] = None,
    search: Optional[str] = None,
):
    results = PROPERTIES
    if type:
        results = [p for p in results if p["type"] == type]
    if status:
        results = [p for p in results if p["status"] == status]
    if min_price is not None:
        results = [p for p in results if p["price"] >= min_price]
    if max_price is not None:
        results = [p for p in results if p["price"] <= max_price]
    if location:
        results = [p for p in results if location.lower() in p["location"].lower()]
    if search:
        term = search.lower()
        results = [
            p
            for p in results
            if term in p["title"].lower()
            or term in p["category"].lower()
            or term in p["location"].lower()
            or term in p["description"].lower()
        ]
    return {"total": len(results), "properties": results}


@app.get("/api/properties/{property_id}")
def get_property(property_id: int):
    for p in PROPERTIES:
        if p["id"] == property_id:
            return p
    raise HTTPException(status_code=404, detail="Property not found")


@app.get("/api/properties/types")
def get_property_types():
    types = {}
    for p in PROPERTIES:
        if p["type"] not in types:
            types[p["type"]] = {"label": p["category"]}
    return types


@app.get("/api/projects")
def get_projects(status: Optional[str] = None):
    results = PROJECTS
    if status:
        results = [p for p in results if p["status"] == status]
    return {"total": len(results), "projects": results}


@app.get("/api/projects/{project_id}")
def get_project(project_id: int):
    for p in PROJECTS:
        if p["id"] == project_id:
            return p
    raise HTTPException(status_code=404, detail="Project not found")


@app.get("/api/services")
def get_services():
    return SERVICES


@app.get("/api/testimonials")
def get_testimonials():
    return TESTIMONIALS


@app.get("/api/why-us")
def get_why_us():
    return WHY_US


@app.get("/api/amenities")
def get_amenities():
    return AMENITY_ICONS


@app.get("/api/loan-partners")
def get_loan_partners():
    return LOAN_PARTNERS


@app.get("/api/timeline")
def get_timeline():
    return TIMELINE


@app.get("/api/gallery")
def get_gallery(category: Optional[str] = None):
    results = GALLERY
    if category:
        results = [g for g in results if g["category"].lower() == category.lower()]
    categories = sorted({g["category"] for g in GALLERY})
    return {"categories": categories, "items": results}


@app.get("/api/blogs")
def get_blogs():
    return BLOGS


@app.get("/api/blogs/{blog_id}")
def get_blog(blog_id: int):
    for b in BLOGS:
        if b["id"] == blog_id:
            return b
    raise HTTPException(status_code=404, detail="Blog post not found")


@app.post("/api/enquiries", response_model=Enquiry, status_code=201)
def create_enquiry(enquiry: EnquiryCreate):
    enquiries = _load_enquiries()
    record = enquiry.model_dump()
    record["id"] = int(time.time() * 1000) % 1000000
    record["created_at"] = time.time()
    enquiries.append(record)
    _save_enquiries(enquiries)
    return record


@app.get("/api/enquiries")
def list_enquiries():
    return _load_enquiries()


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("PORT", 8000))
    uvicorn.run("app:app", host="0.0.0.0", port=port, reload=False)
