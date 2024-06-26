# Public API Coding Test

### Objective
Create a simple app that interfaces with a public open API.

Bonus points for including:
- API error handling
- State management
- ES6+ features (example: async/await)
- Modern CSS patterns
- Server Side Rendering
- Page performance/Lighthouse
- Accessibility and SEO
- Performance-optimized API usage
- Lazy-loading non critical UI components
- Unit tests
- CSS UI Patterns
- Usage of webpack for bundling and code splitting

### About
Fetch quote of the day, random quotes, and save your favorite quotes from this small app using the https://zenquotes.io/ API. 

App link here: https://public-api-project.netlify.app/

### Tech Stack
Isomorphic app built with:
- Nuxt
- Vue 3
- Vite
- TypeScript
- Tailwind CSS
- Netlify

Why Nuxt? Nuxt offers the easiest way to leverage Server Side Rendering (SSR). SSR is a great approach when optimizing for search engines and performance, providing a fast initial page render from the server and then hydrating after on the client side.

This app also demonstrates the ability to do hybrid rendering, allowing each route to render server side, client side only, or even statically generated at build time.

The public API is always fetched from the server (see Nuxt's server / api directory) and that response (or error) is then formatted and sent to the component on either the server or client.

Rather than connecting a database, localStorage is used on the client for simple quote storage.

Nuxt uses Vite under the hood by default. Nuxt also offers auto-imports so that composables and components are available automatically.  

### Get Started with Nuxt

```
npm run dev
```

Each commit made to repository automatically deploys new version with netlify.