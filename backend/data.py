"""Seed data for MSS Realtors."""

PROPERTIES = [
    {
        "id": 1,
        "title": "Villa Plot 200 Sq Yards - Palm Meadows",
        "type": "plot",
        "category": "Residential Plot",
        "location": "Palm Meadows Layout, Ponnur, Guntur",
        "district": "Guntur",
        "area": 200,
        "area_unit": "Sq Yards",
        "price": 2400000,
        "price_per_sqyd": 12000,
        "beds": None,
        "baths": None,
        "status": "available",
        "featured": True,
        "description": "Prime residential corner plot in Palm Meadows gated layout with registration-ready documents. Ideal for independent house construction with all approvals and clear titles.",
        "features": ["Corner Plot", "East Facing", "Clear Title", "Water & Power", "Registered Layout", "Near NH-16"],
        "image": "/images/property-1.jpg",
        "posted_on": "2026-09-01"
    },
    {
        "id": 2,
        "title": "2 BHK Flat - MSS Heights (3rd Floor)",
        "type": "flat",
        "category": "Flat",
        "location": "MSS Heights, Ponnur, Guntur",
        "district": "Guntur",
        "area": 980,
        "area_unit": "Sq Ft",
        "price": 2650000,
        "price_per_sqyd": None,
        "beds": 2,
        "baths": 2,
        "status": "available",
        "featured": True,
        "description": "Ready-to-move 2 BHK flat with all modern amenities. Corner unit with ample ventilation, covered car parking, lift, generator backup and clear owner documents.",
        "features": ["Lift", "Car Parking", "Genset Backup", "Modular Kitchen", "Balcony", "Property Tax Paid"],
        "image": "/images/property-2.jpg",
        "posted_on": "2026-09-05"
    },
    {
        "id": 3,
        "title": "Commercial Plot 500 Sq Yards - NH-16 Front",
        "type": "plot",
        "category": "Commercial Plot",
        "location": "NH-16 Service Road, Ponnur, Guntur",
        "district": "Guntur",
        "area": 500,
        "area_unit": "Sq Yards",
        "price": 9000000,
        "price_per_sqyd": 18000,
        "beds": None,
        "baths": None,
        "status": "available",
        "featured": True,
        "description": "High-visibility commercial plot facing NH-16 with excellent road access. Perfect for petrol bunk, showrooms, hotels or godowns. Electric and water available.",
        "features": ["NH-16 Frontage", "Commercial Zone", "All Approvals", "High Visibility", "Electric & Water"],
        "image": "/images/property-3.jpg",
        "posted_on": "2026-08-20"
    },
    {
        "id": 4,
        "title": "3 BHK Villa - Surya Greens (Ground Floor + First)",
        "type": "flat",
        "category": "Villa",
        "location": "Surya Greens, Guntur City",
        "district": "Guntur",
        "area": 1650,
        "area_unit": "Sq Ft",
        "price": 9200000,
        "price_per_sqyd": None,
        "beds": 3,
        "baths": 3,
        "status": "booked",
        "featured": False,
        "description": "Independent gated-community villa with three spacious bedrooms, attached bathrooms, and a private sit-out. Community clubhouse, park and 24x7 security.",
        "features": ["Gated Community", "Clubhouse", "Security", "Park", "Compound Wall", "Sit-out"],
        "image": "/images/property-4.jpg",
        "posted_on": "2026-07-15"
    },
    {
        "id": 5,
        "title": "1 BHK Budget Flat - Annapurna Residency",
        "type": "flat",
        "category": "Flat",
        "location": "Annapurna Residency, Ponnur, Guntur",
        "district": "Guntur",
        "area": 520,
        "area_unit": "Sq Ft",
        "price": 1250000,
        "price_per_sqyd": None,
        "beds": 1,
        "baths": 1,
        "status": "available",
        "featured": True,
        "description": "Affordable 1 BHK apartment ideal for bachelors and small families. Near bus stand, schools and market. Loan assistance available.",
        "features": ["Near Bus Stand", "Loan Assistance", "Water & Power", "Ready to Move"],
        "image": "/images/property-5.jpg",
        "posted_on": "2026-09-08"
    },
    {
        "id": 6,
        "title": "Agricultural Land 1.5 Acres - Kondepadu",
        "type": "plot",
        "category": "Agricultural Land",
        "location": "Kondepadu Village, Near Ponnur",
        "district": "Guntur",
        "area": 7260,
        "area_unit": "Sq Yards",
        "price": 3000000,
        "price_per_sqyd": None,
        "beds": None,
        "baths": None,
        "status": "available",
        "featured": False,
        "description": "Wet agricultural land with canal water facility. Registered clear title, suitable for mango/palm cultivation or future conversion. 5 km from Ponnur town.",
        "features": ["Canal Water", "Clear Title", "Wet Land", "Near Town"],
        "image": "/images/property-6.jpg",
        "posted_on": "2026-08-02"
    },
    {
        "id": 7,
        "title": "2 BHK Flat - Rose Garden Apartments (4th Floor)",
        "type": "flat",
        "category": "Flat",
        "location": "Rose Garden, Guntur City",
        "district": "Guntur",
        "area": 1120,
        "area_unit": "Sq Ft",
        "price": 3850000,
        "price_per_sqyd": None,
        "beds": 2,
        "baths": 2,
        "status": "available",
        "featured": False,
        "description": "Semi-furnished 2 BHK flat in a well-known society with lift, covered parking, and landscaped garden. Close to hospitals and IT parks.",
        "features": ["Lift", "Semi Furnished", "Children Play Area", "Power Backup"],
        "image": "/images/property-7.jpg",
        "posted_on": "2026-09-02"
    },
    {
        "id": 8,
        "title": "Open Plot 300 Sq Yards - Venkata Nagar Extension",
        "type": "plot",
        "category": "Residential Plot",
        "location": "Venkata Nagar Extension, Ponnur",
        "district": "Guntur",
        "area": 300,
        "area_unit": "Sq Yards",
        "price": 3300000,
        "price_per_sqyd": 11000,
        "beds": None,
        "baths": None,
        "status": "sold",
        "featured": False,
        "description": "Well-located residential plot in a fully developed colony with tarred internal roads, drainage and street lights. Documents handed over.",
        "features": ["Developed Colony", "Tar Roads", "Drainage", "Street Lights"],
        "image": "/images/property-8.jpg",
        "posted_on": "2026-06-10"
    },
    {
        "id": 9,
        "title": "4 BHK Luxury Penthouse - Krishna Towers",
        "type": "flat",
        "category": "Apartment",
        "location": "Krishna Towers, Guntur City",
        "district": "Guntur",
        "area": 2400,
        "area_unit": "Sq Ft",
        "price": 15600000,
        "price_per_sqyd": None,
        "beds": 4,
        "baths": 5,
        "status": "available",
        "featured": True,
        "description": "Luxury penthouse with panoramic city views, private terrace, servant room and premium fittings. Vastu compliant with two parking slots.",
        "features": ["Private Terrace", "City View", "Vastu Compliant", "2 Parkings", "Servant Room", "Premium Fittings"],
        "image": "/images/property-9.jpg",
        "posted_on": "2026-09-10"
    },
    {
        "id": 10,
        "title": "Industrial Land 2 Acres - Tenali Road",
        "type": "plot",
        "category": "Industrial Land",
        "location": "Tenali Road, Near Ponnur",
        "district": "Guntur",
        "area": 9680,
        "area_unit": "Sq Yards",
        "price": 14000000,
        "price_per_sqyd": None,
        "beds": None,
        "baths": None,
        "status": "available",
        "featured": False,
        "description": "Industrial land suitable for warehouses, factories or agricultural processing units. On Tenali Road with three-phase power line.",
        "features": ["3-Phase Power", "Main Road Access", "Industrial Zone"],
        "image": "/images/property-10.jpg",
        "posted_on": "2026-08-25"
    }
]

PROJECTS = [
    {
        "id": 1,
        "name": "MSS Heights",
        "category": "Residential Apartments",
        "type": "apartment",
        "location": "Ponnur, Guntur",
        "units": 48,
        "configuration": "2 & 3 BHK",
        "status": "ongoing",
        "progress": 65,
        "estimated_completion": "March 2027",
        "description": "G+5 premium apartment with 48 residential units, dedicated car parking, modern amenities and a spacious community hall. Being constructed with RCC framed structure and premium finishes.",
        "overview": {
            "Status": "Ongoing Project",
            "Location": "Ponnur, Guntur",
            "Type": "Residential Apartments",
            "Configuration": "2 & 3 BHK",
            "No. of Units": "48",
            "Unit Sizes": "980 - 1,560 Sq. Ft",
            "Structure": "G+5 RCC Framed"
        },
        "amenities": ["Lift", "Power Backup", "Car Parking", "Community Hall", "Children Play Area", "24x7 Water", "CCTV Surveillance", "Rainwater Harvesting"],
        "image": "/images/project-1.jpg"
    },
    {
        "id": 2,
        "name": "Palm Meadows Layout",
        "category": "Gated Plot Layout",
        "type": "layout",
        "location": "Ponnur, Guntur",
        "units": 132,
        "configuration": "160 - 300 Sq. Yards",
        "status": "completed",
        "progress": 100,
        "estimated_completion": "Completed",
        "description": "Fully developed gated plot layout with tarred roads, drainage, water lines, street lights and park. Most plots sold; limited corner plots available.",
        "overview": {
            "Status": "Completed",
            "Location": "Ponnur, Guntur",
            "Type": "Gated Plot Layout",
            "No. of Plots": "132",
            "Plot Sizes": "160 - 300 Sq. Yards",
            "Approval": "Registered Layout"
        },
        "amenities": ["Tarred Roads", "Street Lights", "Landscaped Garden", "Drainage", "Compound Wall", "24x7 Security", "Water Lines", "Park"],
        "image": "/images/project-2.jpg"
    },
    {
        "id": 3,
        "name": "Surya Greens Villas",
        "category": "Independent Villas",
        "type": "villa",
        "location": "Guntur City",
        "units": 36,
        "configuration": "3 & 4 BHK",
        "status": "ongoing",
        "progress": 45,
        "estimated_completion": "June 2027",
        "description": "36 premium independent villas in a gated community with clubhouse, swimming pool and landscaped gardens. Vastu compliant designs with individual compound walls.",
        "overview": {
            "Status": "Ongoing Project",
            "Location": "Guntur City",
            "Type": "Independent Villas",
            "Configuration": "3 & 4 BHK",
            "No. of Villas": "36",
            "Unit Sizes": "1,650 - 2,400 Sq. Ft"
        },
        "amenities": ["Clubhouse", "Swimming Pool", "Landscaped Gardens", "Gated Security", "Children Play Area", "Jogging Track", "Indoor Games", "Temple"],
        "image": "/images/project-3.jpg"
    },
    {
        "id": 4,
        "name": "Annapurna Residency",
        "category": "Budget Apartments",
        "type": "apartment",
        "location": "Ponnur, Guntur",
        "units": 30,
        "configuration": "1 & 2 BHK",
        "status": "completed",
        "progress": 100,
        "estimated_completion": "Completed",
        "description": "Completed budget-friendly apartment for middle-income families. All units occupied; few resale units available under our brokerage.",
        "overview": {
            "Status": "Completed",
            "Location": "Ponnur, Guntur",
            "Type": "Budget Apartments",
            "Configuration": "1 & 2 BHK",
            "No. of Units": "30",
            "Structure": "G+3 RCC Framed"
        },
        "amenities": ["Lift", "Overhead Tank", "Car Parking", "Near School", "Power Backup", "24x7 Water"],
        "image": "/images/project-4.jpg"
    },
    {
        "id": 5,
        "name": "Krishna Commercial Complex",
        "category": "Commercial Complex",
        "type": "commercial",
        "location": "NH-16 Service Road, Ponnur",
        "units": 24,
        "configuration": "Shops & Offices",
        "status": "ongoing",
        "progress": 20,
        "estimated_completion": "December 2027",
        "description": "Upcoming commercial complex with 24 shops and office spaces facing NH-16. High footfall location ideal for retail, clinics, banks and restaurants.",
        "overview": {
            "Status": "Ongoing / Booking Open",
            "Location": "NH-16 Service Road, Ponnur",
            "Type": "Commercial Complex",
            "No. of Units": "24 Shops & Offices",
            "Unit Sizes": "300 - 1,200 Sq. Ft",
            "Frontage": "NH-16 Highway"
        },
        "amenities": ["NH-16 Frontage", "Lift", "Basement Parking", "Generator", "Fire Safety", "CCTV Surveillance"],
        "image": "/images/project-5.jpg"
    }
]

AMENITY_ICONS = {
    "Lift": "🛗",
    "Power Backup": "🔋",
    "Car Parking": "🚗",
    "Community Hall": "🏛️",
    "Children Play Area": "🛝",
    "24x7 Water": "💧",
    "CCTV Surveillance": "📹",
    "Rainwater Harvesting": "🌧️",
    "Tarred Roads": "🛣️",
    "Street Lights": "💡",
    "Landscaped Garden": "🌳",
    "Drainage": "🚰",
    "Compound Wall": "🧱",
    "24x7 Security": "🛡️",
    "Water Lines": "🚿",
    "Park": "🏞️",
    "Clubhouse": "🏢",
    "Swimming Pool": "🏊",
    "Gated Security": "🔒",
    "Jogging Track": "🏃",
    "Indoor Games": "🎯",
    "Temple": "🛕",
    "Overhead Tank": "🛢️",
    "Near School": "🏫",
    "NH-16 Frontage": "🛣️",
    "Basement Parking": "🅿️",
    "Generator": "⚡",
    "Fire Safety": "🧯",
}

TESTIMONIALS = [
    {
        "id": 1,
        "name": "Ravi Kiran",
        "location": "Ponnur",
        "rating": 5,
        "message": "MSS garu helped me buy a plot in Palm Meadows within a week. Genuine documents, transparent pricing and complete assistance with registration. Highly recommended!"
    },
    {
        "id": 2,
        "name": "Lakshmi Prasanna",
        "location": "Guntur",
        "rating": 5,
        "message": "We bought our 2 BHK flat at MSS Heights. The construction quality is excellent and the team was honest about every detail. Home loan processing was also smooth."
    },
    {
        "id": 3,
        "name": "Srinivasa Rao",
        "location": "Tenali",
        "rating": 4,
        "message": "Professional and trustworthy realtor. They handled the sale of my agricultural land and got me a very good price. Will use their services again."
    },
    {
        "id": 4,
        "name": "Divya Sree",
        "location": "Ponnur",
        "rating": 5,
        "message": "Very responsive team. They showed me multiple options within my budget and patiently answered all my questions. Got my dream villa at Surya Greens!"
    },
    {
        "id": 5,
        "name": "Mohammed Ilyas",
        "location": "Guntur",
        "rating": 5,
        "message": "Booked a commercial shop in the Krishna Commercial Complex. MSS garu explained the ROI clearly and helped with the agreement. Very trustworthy people."
    },
    {
        "id": 6,
        "name": "Anitha Reddy",
        "location": "Bapatla",
        "rating": 5,
        "message": "As a first-time buyer I was nervous, but the team guided me through every document and bank process. I felt like family. Thank you MSS Realtors!"
    }
]

SERVICES = [
    {
        "id": 1,
        "name": "Plot & Land Sales",
        "icon": "land",
        "short": "Residential, commercial and agricultural plots with clear titles in and around Guntur district.",
        "points": ["Verified clear titles", "Residential & commercial plots", "Agricultural land assistance", "Registration guidance"]
    },
    {
        "id": 2,
        "name": "Flats & Apartments",
        "icon": "building",
        "short": "Ready-to-move and under-construction flats and villas across Ponnur and Guntur city.",
        "points": ["Verified builder approvals", "Loan assistance", "2BHK, 3BHK & luxury options", "Stage-wise payment plans"]
    },
    {
        "id": 3,
        "name": "Building Construction",
        "icon": "construction",
        "short": "End-to-end construction of individual houses, apartments and commercial buildings.",
        "points": ["RCC framed structures", "Civil & finishing works", "Transparent costing", "On-time delivery"]
    },
    {
        "id": 4,
        "name": "Rent & Leasing",
        "icon": "rent",
        "short": "Reliable rental management for owners and verified rental options for tenants.",
        "points": ["Verified tenants", "Agreement assistance", "Monthly rent collection", "Property maintenance"]
    },
    {
        "id": 5,
        "name": "Valuation Services",
        "icon": "value",
        "short": "Fair market valuation for buying, selling, loan sanction and taxation purposes.",
        "points": ["Government-rate guidance", "Market comparisons", "Loan valuation reports", "Property tax help"]
    },
    {
        "id": 6,
        "name": "Document & Legal Help",
        "icon": "legal",
        "short": "Complete paperwork support from agreement to sub-registrar registration.",
        "points": ["Title verification", "GPA & sale deeds", "Sub-registrar coordination", "Stamp duty guidance"]
    }
]

WHY_US = [
    {"icon": "🏅", "title": "15+ Years of Legacy", "text": "Serving families across Guntur district since 2010 with 850+ successful deals."},
    {"icon": "🔍", "title": "Verified & Clear Titles", "text": "Every property is legally checked before it reaches you — no surprises."},
    {"icon": "🏗️", "title": "In-House Construction", "text": "We are builders too, so you get end-to-end quality from plot to possession."},
    {"icon": "💰", "title": "Transparent Pricing", "text": "Honest, rational pricing and a convenient, stage-wise payment schedule."},
    {"icon": "🏦", "title": "Loan Assistance", "text": "Tie-ups with leading banks for quick home-loan sanction and documentation."},
    {"icon": "🤝", "title": "Family-Like Service", "text": "Personal attention from MSS himself — we treat clients like our own."}
]

LOAN_PARTNERS = [
    "State Bank of India",
    "HDFC Bank",
    "Axis Bank",
    "ICICI Bank",
    "LIC Housing Finance",
    "Canara Bank",
    "Bajaj Housing Finance",
    "Union Bank of India"
]

TIMELINE = [
    {"year": "2010", "title": "Journey Begins", "text": "MSS Realtors founded in Ponnur, dealing in residential plots and land."},
    {"year": "2014", "title": "First Layout Project", "text": "Developed our first gated plot layout with roads, drainage and street lights."},
    {"year": "2017", "title": "Entered Construction", "text": "Completed our first residential apartment — Annapurna Residency in Ponnur."},
    {"year": "2020", "title": "Villas & Gated Communities", "text": "Launched Surya Greens, our premium independent-villa gated community."},
    {"year": "2023", "title": "Commercial Expansion", "text": "Began Krishna Commercial Complex on NH-16 with shops and office spaces."},
    {"year": "2026", "title": "850+ Happy Families", "text": "Crossed 850 property sales and 40 completed construction projects."}
]

GALLERY = [
    {"id": 1, "image": "/images/gallery-1.jpg", "title": "Modern Living Room", "category": "Interiors"},
    {"id": 2, "image": "/images/gallery-2.jpg", "title": "Premium Villa Interior", "category": "Interiors"},
    {"id": 3, "image": "/images/gallery-3.jpg", "title": "Spacious Kitchen", "category": "Interiors"},
    {"id": 4, "image": "/images/gallery-4.jpg", "title": "Elegant Bedroom", "category": "Interiors"},
    {"id": 5, "image": "/images/project-1.jpg", "title": "MSS Heights", "category": "Apartments"},
    {"id": 6, "image": "/images/property-4.jpg", "title": "Surya Greens Villa", "category": "Villas"},
    {"id": 7, "image": "/images/hero-1.jpg", "title": "Contemporary Duplex", "category": "Elevations"},
    {"id": 8, "image": "/images/gallery-7.jpg", "title": "Independent House", "category": "Elevations"},
    {"id": 9, "image": "/images/gallery-8.jpg", "title": "Gated Community Homes", "category": "Elevations"},
    {"id": 10, "image": "/images/construction-1.jpg", "title": "Construction In Progress", "category": "Construction"},
    {"id": 11, "image": "/images/gallery-10.jpg", "title": "Site Development", "category": "Construction"},
    {"id": 12, "image": "/images/gallery-11.jpg", "title": "Luxury Residence", "category": "Elevations"},
    {"id": 13, "image": "/images/project-5.jpg", "title": "Commercial Complex", "category": "Commercial"},
    {"id": 14, "image": "/images/gallery-12.jpg", "title": "Interior Finishing", "category": "Interiors"},
    {"id": 15, "image": "/images/project-2.jpg", "title": "Palm Meadows Layout", "category": "Layouts"},
    {"id": 16, "image": "/images/gallery-6.jpg", "title": "Open Plan Living", "category": "Interiors"},
]

BLOGS = [
    {
        "id": 1,
        "title": "Why Buying a Plot in Ponnur is a Smart Investment in 2026",
        "category": "Investment",
        "date": "14 August 2026",
        "image": "/images/blog-1.jpg",
        "excerpt": "With NH-16 expansion and growing infrastructure, Ponnur is fast becoming one of Guntur district's most promising real estate markets.",
        "content": [
            "Ponnur has quietly emerged as one of the most attractive real estate destinations in Guntur district. Its location on NH-16, proximity to Guntur city and strong agricultural economy make it ideal for both end-users and investors.",
            "Plot prices in well-developed layouts have appreciated steadily over the last five years. Buying early in a registered layout with clear title gives you the best long-term value.",
            "Before you buy, always verify the layout approval, title deed, encumbrance certificate and road access. Our team verifies every document before we list a plot."
        ]
    },
    {
        "id": 2,
        "title": "2 BHK vs 3 BHK: Which Flat Should You Buy?",
        "category": "Buyer Guide",
        "date": "22 July 2026",
        "image": "/images/blog-2.jpg",
        "excerpt": "Choosing between a 2 BHK and a 3 BHK depends on family size, budget and future plans. Here is a simple breakdown.",
        "content": [
            "A 2 BHK is the sweet spot for young couples, small families and investors looking for rental yield. It offers lower maintenance and a lower entry price.",
            "A 3 BHK suits growing families who need an extra room for children, parents or a home office. Resale value and rental demand for 3 BHKs are usually stronger in prime locations.",
            "Our advice: buy the largest configuration your budget comfortably allows in the best location you can afford — location appreciates faster than size."
        ]
    },
    {
        "id": 3,
        "title": "Home Loan Checklist: Documents You Need Before Applying",
        "category": "Home Loans",
        "date": "30 June 2026",
        "image": "/images/blog-3.jpg",
        "excerpt": "Getting your documents ready in advance can cut your home-loan approval time in half. Here is the complete checklist.",
        "content": [
            "For salaried applicants: last 3 months' salary slips, 6 months' bank statements, Form 16, PAN and Aadhaar.",
            "For self-employed: 2-3 years' ITR, business proof, audited financials and 12 months' bank statements.",
            "Property documents: sale agreement, title deed, approved plan and encumbrance certificate. We assist our clients with the entire loan and documentation process."
        ]
    }
]

COMPANY = {
    "name": "MSS Realtors",
    "owner": "MSS",
    "tagline": "Plots · Flats · Construction",
    "phone": "+16109680033",
    "alt_phone": "+16109680033",
"email": "mssrealtrs@gmail.com",
    "address": "Bapatla, Akber Colony, Andhra Pradesh, India",
    "address_lines": ["Akber Colony", "Bapatla, Andhra Pradesh, India"],
    "hours": "Mon - Sun: 9:00 AM - 8:00 PM",
    "since": 2010,
    "credai_member": True,
    "rera_registered": True
}

STATS = {
    "years_experience": 15,
    "properties_sold": 850,
    "projects_completed": 40,
    "happy_clients": 1200,
    "sqft_delivered": "10 Lakh+"
}
