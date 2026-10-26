# LORA — Fine Jewellery Website
### AI Case Study Documentation

---

## 1. Project Introduction & Objectives

**LORA** is a premium jewellery e-commerce website built as an AI-assisted case study project. The objective was to design and build a production-ready luxury jewellery brand website that demonstrates:

- Sophisticated frontend design inspired by brands such as Cartier, Tiffany & Co., and Bvlgari
- A complete, functional e-commerce experience (cart, wishlist, filters, search, quick-view)
- A live API integration with real data fetching, loading states, and error handling
- Accessibility, responsiveness, and performance best practices
- How AI coding tools accelerate the development of complex, high-quality UIs

---

## 2. API Integration

### Endpoint
```
GET https://dummyjson.com/products?limit=8&skip=0&select=id,title,description,price,thumbnail,category
```

### Method
`fetch()` — native browser API, no dependencies required.

### Request
```javascript
const res = await fetch('https://dummyjson.com/products?limit=8&...');
```

### Response Format (JSON)
```json
{
  "products": [
    {
      "id": 1,
      "title": "Product Name",
      "description": "Description text",
      "price": 549.99,
      "thumbnail": "https://cdn.dummyjson.com/...",
      "category": "womens-jewellery"
    }
  ]
}
```

### Price Conversion
USD prices are converted to Indian Rupees at an indicative rate of ×83:
```javascript
const priceInr = Math.round(p.price * 83);
```

### Loading State
Skeleton card animations (shimmer effect) are shown while the request is in-flight.

### Error Handling
A try/catch block catches network failures and HTTP errors. A friendly error message and **"Try Again"** button are rendered. The retry calls `fetchApiProducts()` again.

```javascript
try {
  const res = await fetch(URL);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  // render cards
} catch (err) {
  // render error UI + retry button
}
```

---

## 3. AI-Assisted Development

This project used **Antigravity (powered by Google DeepMind)** as the primary AI coding assistant:

- Generated the complete HTML structure (1,200+ lines) from a natural-language specification
- Wrote all CSS design tokens, layout systems, component styles, and animations (~1,400 lines)
- Implemented all JavaScript modules: cart, wishlist, filters, quick-view modal, testimonials carousel, contact form validation, FAQ accordion, scroll animations, and API fetch logic (~700 lines)
- Provided luxury-calibre design decisions: Cormorant Garamond typography, champagne/gold/ivory palette, editorial grid layouts, and micro-animation system
- Generated AI product photography using the `generate_image` tool for 6 collection images and the hero background

---

## 4. Testimonial Component — Inspired by 21st.dev

The testimonial section draws design inspiration from modern component libraries on **21st.dev**, specifically their card-based testimonial patterns:

- Clean card layout with subtle border and ivory background
- Quotation icon positioned in the top-right corner as a decorative element
- Author avatar using initials in a champagne-toned circle (no fake profile photos)
- Five-star rating using gold SVG stars
- Horizontal carousel with dot navigation and arrow controls
- Auto-advancing carousel that pauses on hover
- All testimonials are clearly marked as **demonstration content**

---

## 5. Promotional Video — Google Flow / Higgsfield AI

The video section is fully built and ready to receive a generated video. The HTML includes a styled placeholder with clear instructions.

**To add your video:**
1. Generate a 10–20 second luxury jewellery campaign using Google Flow or Higgsfield AI.
   - Suggested prompt: "A gold necklace resting on champagne silk. Macro diamonds catching studio light. Slow cinematic panning. Warm golden reflections. Minimal LORA logo reveal."
2. Export as MP4 (H.264, 1920×1080 recommended)
3. Save to: `video/lora-promo.mp4`
4. In `index.html`, find the `<video id="promo-video">` element and add:
   ```html
   src="video/lora-promo.mp4" poster="images/video-poster.jpg"
   ```
5. Remove or hide the `.video-placeholder` div above it.

The custom video controls (play/pause, mute, progress bar, time display) will activate automatically when a valid `src` is present.

---

## 6. Role of a Forward Deployed Engineer

As the Forward Deployed Engineer (FDE) on this project:

**Requirements Gathering:** Translated a 3,000-word project specification into a structured implementation plan, identifying ambiguous requirements (e.g., the video asset dependency) and documenting them clearly.

**System Integration:** Connected the DummyJSON public API to the frontend product grid, handling data mapping, INR conversion, and graceful degradation.

**Testing:** Verified cart persistence across page refreshes, filter/sort combinations, API error states (simulated via DevTools network throttling), form validation edge cases, and mobile layout on multiple viewport sizes.

**Deployment Prep:** Created a deployment checklist, relative asset paths, and Hostinger-specific upload instructions.

**Issue Resolution:** Identified image quota limitations early and pivoted to high-quality Unsplash URLs as a fallback for product photography, ensuring no broken images.

---

## 7. Testing

### Desktop Testing
- ✅ Chrome, Edge, Firefox — all layouts render correctly
- ✅ Cart add/remove/quantity — persists across refresh via localStorage
- ✅ Wishlist toggle — state preserved
- ✅ Filter tabs — all categories filter correctly
- ✅ Sort — price ascending/descending, popularity, new arrivals
- ✅ Search — live filter over product names and materials
- ✅ Quick-view modal — opens, option selection, add-to-cart, close
- ✅ API section — loads products, shows skeletons, handles network error
- ✅ Contact form — required field validation, email format check, success state
- ✅ FAQ accordion — open/close, only one open at a time
- ✅ Newsletter — email validation, success state
- ✅ Testimonials carousel — autoplay, manual navigation, pauses on hover

### Mobile Testing
- ✅ Hamburger menu opens/closes with animation
- ✅ Product grid collapses to 2-column → 1-column
- ✅ Cart drawer full-width on mobile
- ✅ Quick-view modal single column on small screens
- ✅ Hero stacks vertically on mobile
- ✅ No horizontal overflow anywhere
- ✅ Touch-friendly hit areas (min 44×44px)

---

## 8. Hostinger Deployment

### For Static HTML/CSS/JS (recommended)

1. **Build** — No build step required. All files are ready.

2. **File Structure to Upload**
   ```
   lora/
   ├── index.html       ← Main entry point
   ├── css/style.css
   ├── js/main.js
   ├── images/          ← All image assets
   └── video/           ← MP4 file (when ready)
   ```

3. **Upload via Hostinger File Manager**
   - Log in to hPanel at hpanel.hostinger.com
   - Go to **Files → File Manager**
   - Navigate to `public_html/`
   - Upload all files (you can zip the folder and extract there)
   - Ensure `index.html` is directly inside `public_html/`

4. **Upload via FTP**
   - Use FileZilla or any FTP client
   - Credentials: hPanel → **Files → FTP Accounts**
   - Connect and upload everything to `public_html/`

5. **Domain & HTTPS**
   - hPanel → **Domains** → point your domain to the hosting
   - hPanel → **SSL** → Enable free Let's Encrypt SSL
   - HTTPS will be active within minutes

### Pre-Launch Checklist
- [ ] Replace placeholder email (hello@lora.com) with real address
- [ ] Replace placeholder phone number
- [ ] Add real social media links
- [ ] Wire contact form to Formspree or backend API
- [ ] Add promotional video (`video/lora-promo.mp4`)
- [ ] Test all links on live URL
- [ ] Verify API loads correctly on live domain
- [ ] Test on real mobile devices
- [ ] Enable HTTPS and verify redirect from HTTP
- [ ] Add Google Analytics or similar

---

## 9. Limitations & Future Improvements

| Area | Current State | Future Improvement |
|------|--------------|-------------------|
| Video | Placeholder only | Add generated MP4 from Google Flow |
| Contact form | Demo mode (no email sent) | Integrate Formspree or Node.js backend |
| Checkout | Alert placeholder | Integrate Razorpay or Stripe |
| Product data | Hardcoded JS array | Connect to headless CMS (Contentful, Sanity) |
| Authentication | None | Add user accounts (Firebase Auth) |
| Product images | Unsplash + AI generated | Commission real product photography |
| Reviews | Demo testimonials | Collect real customer reviews |
| Analytics | None | Add Google Analytics 4 |
| Search | Client-side only | Add Algolia for full-text search at scale |
| Wishlist | localStorage only | Sync to user account with backend |
