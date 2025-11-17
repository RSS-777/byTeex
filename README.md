# byTeex - Product Page Replica

## Objective
This project is a responsive product page implemented based on the design provided in Figma.  
The main goal was to replicate the design as closely as possible while using a JavaScript framework of choice (React in this case) and dynamic content from a Headless CMS (Sanity).

---

## Live Demo
You can view the live version of the site here: [byTeex Live Site](https://rss-777.github.io/byTeex/)

---

## Features & Implementation

### Figma to Web
- The product page design from Figma has been converted into responsive web components.
- TailwindCSS is used for styling and ensuring responsiveness.
- Components are modular and reusable, matching the layout and style of the mockup.

### Headless CMS
- Sanity CMS is used to manage dynamic content such as product details, images, and testimonials.
- The `@sanity/client` and `@sanity/image-url` packages are used to fetch and render CMS data dynamically.
- The site reflects changes in the CMS automatically without rebuilding.

### Frontend Stack & Optimization
- **Framework:** React
- **Bundler:** Vite
- **Styling:** TailwindCSS
- **Dynamic content:** Sanity (Headless CMS)
- **Image handling:** Sanity image builder
- **SEO:** React Helmet is used to manage the document head dynamically (titles, meta descriptions, etc.).
- **Code Splitting / Lazy Loading:** Major sections (`Founder`, `ProductWorks`, `UserGenerated`, `Faq`, `Banner`, `Final`) are loaded lazily with `React.lazy` and wrapped in `Suspense` to split the app into chunks and improve initial load performance.
- **Slider/Carousel:** SwiperJS
