# Fixing "Page Not Found" After Stripe Redirect

## Issue
After completing payment on Stripe, users are redirected back but see a "Page not found" error.

## Possible Causes

### 1. Server Not Configured for Client-Side Routing

If your site is deployed on a static host (like Netlify, Vercel, GitHub Pages, etc.), the server needs to be configured to serve `index.html` for all routes (SPA routing).

### 2. Solution by Deployment Platform

#### Netlify
Create a `public/_redirects` file (or `netlify.toml`):
```
/*    /index.html   200
```

Or in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

#### Vercel
Create a `vercel.json` file:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### GitHub Pages
If using GitHub Pages, you may need to use HashRouter instead of BrowserRouter, or configure a 404.html that redirects to index.html.

#### Apache
Create a `.htaccess` file in the `public` folder:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

#### Nginx
```nginx
try_files $uri $uri/ /index.html;
```

### 3. Check the Actual Redirect URL

When testing, check the browser console for the logged URL. The redirect URL should be:
- `https://kaseyfu.com/career-support?payment=success`

Make sure there are no:
- Trailing slashes: `/career-support/` (should be `/career-support`)
- Extra paths
- Case sensitivity issues

### 4. Verify Route Configuration

The route is correctly configured in `src/App.tsx`:
```tsx
<Route path="/career-support" element={<CareerSupport />} />
```

This should match URLs like:
- `/career-support`
- `/career-support?payment=success`
- `/career-support?payment=canceled`

### 5. Test the Route Directly

Try navigating directly to:
- `https://kaseyfu.com/career-support`
- `https://kaseyfu.com/career-support?payment=success`

If these work, the route is fine and the issue is with the redirect URL format.

### 6. Alternative: Use HashRouter (Temporary Fix)

If you can't configure the server, you could temporarily switch to HashRouter:

In `src/App.tsx`, change:
```tsx
import { HashRouter, Routes, Route } from "react-router-dom";
// ...
<HashRouter>
```

Then URLs would be:
- `https://kaseyfu.com/#/career-support?payment=success`

But this is not ideal for SEO.

## Quick Debug Steps

1. **Check browser console** - Look for the logged URL when the page loads
2. **Check Network tab** - See what URL is actually being requested
3. **Check the redirect URL in Stripe Dashboard** - Make sure it matches your domain exactly
4. **Test the route directly** - Navigate to `/career-support` manually

## Most Likely Solution

For most static hosting platforms, you need to configure the server to serve `index.html` for all routes. This is a standard SPA (Single Page Application) configuration requirement.

