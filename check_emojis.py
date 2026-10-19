import os
files_to_check = [
    'frontend/src/pages/Home.jsx',
    'frontend/src/pages/Contact.jsx',
    'frontend/src/pages/Properties.jsx',
    'frontend/src/pages/About.jsx',
    'frontend/src/components/Navbar.jsx',
    'frontend/src/components/Footer.jsx',
    'frontend/src/components/FloatingActions.jsx',
    'frontend/src/components/EnquiryModal.jsx',
    'frontend/src/components/ProjectCard.jsx',
    'frontend/src/pages/Projects.jsx',
    'frontend/src/pages/PropertyDetail.jsx',
    'frontend/src/pages/BlogDetail.jsx',
    'backend/data.py',
    'frontend/src/App.jsx',
    'frontend/src/components/HeroSlider.jsx',
    'frontend/src/pages/Gallery.jsx',
]
for f in files_to_check:
    if not os.path.exists(f):
        print(f"  {f}: MISSING")
        continue
    t = open(f, encoding='utf-8', errors='replace').read()
    sms = t.count('\U0001F4E6')  # 📞
    # Count any emoji-like supplementary chars
    sup = sum(1 for c in t if ord(c) > 0x1F000)
    print(f"  {f}: supplementary_chars={sup}")
