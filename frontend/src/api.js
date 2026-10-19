const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000/api'

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })
  if (!res.ok) {
    const detail = await res.json().catch(() => ({}))
    throw new Error(detail.detail || `Request failed (${res.status})`)
  }
  return res.json()
}

export const api = {
  company: () => request('/company'),
  stats: () => request('/stats'),
  properties: (params = {}) => {
    const qs = new URLSearchParams()
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') qs.set(k, v)
    })
    const q = qs.toString()
    return request(`/properties${q ? `?${q}` : ''}`)
  },
  property: (id) => request(`/properties/${id}`),
  projects: (params = {}) => {
    const qs = new URLSearchParams()
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && v !== '') qs.set(k, v)
    })
    const q = qs.toString()
    return request(`/projects${q ? `?${q}` : ''}`)
  },
  services: () => request('/services'),
  testimonials: () => request('/testimonials'),
  whyUs: () => request('/why-us'),
  amenities: () => request('/amenities'),
  loanPartners: () => request('/loan-partners'),
  timeline: () => request('/timeline'),
  gallery: (category) => request(`/gallery${category ? `?category=${encodeURIComponent(category)}` : ''}`),
  blogs: () => request('/blogs'),
  blog: (id) => request(`/blogs/${id}`),
  createEnquiry: (payload) =>
    request('/enquiries', { method: 'POST', body: JSON.stringify(payload) }),
}

export const formatPrice = (value) => {
  if (value === undefined || value === null) return '—'
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} Lakh`
  if (value >= 1000) return `₹${(value / 1000).toFixed(1)}K`
  return `₹${value}`
}