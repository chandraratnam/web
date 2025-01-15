# Dave Chandraratnam Acupuncture Website

A professional acupuncture website built with React.js and TypeScript, offering a comprehensive digital platform for patients to explore personalized acupuncture treatments.

## Tech Stack

- React.js with TypeScript
- Tailwind CSS for styling
- shadcn/ui for UI components
- Wouter for routing
- Vite for development and building

## File Structure

```
client/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/        # shadcn/ui components
│   │   └── [...]      # Custom components
│   ├── pages/         # Page components
│   │   ├── Home.tsx
│   │   ├── WhatITreat.tsx
│   │   ├── FAQ.tsx
│   │   └── Blog.tsx
│   ├── lib/           # Utility functions and configurations
│   │   ├── analytics.ts
│   │   └── schema.ts
│   └── App.tsx        # Main application component
```

## Content Management

### Adding Blog Posts

1. Navigate to `client/src/pages/Blog.tsx`
2. Add new blog post to the `blogPosts` array:
```typescript
{
  id: [unique_number],
  title: "Your Blog Title",
  date: "Month DD, YYYY",
  category: "category-name", // "pain-management" or "wellness"
  content: `
    <p>Your content here. HTML formatting is supported.</p>
    <h3>Subheadings</h3>
    <ul>
      <li>List items</li>
    </ul>
  `,
  imageUrl: "path-to-image" // Store images in public/images/
}
```

### Adding Static Assets

1. Create folders in `public/` for different asset types:
   - `public/images/` - For image assets
   - `public/documents/` - For downloadable content

2. Reference assets in your components:
```typescript
<img src="/images/your-image.jpg" alt="Descriptive alt text" />
```

### Updating Page Content

1. Each page is located in `client/src/pages/`
2. To update content:
   - Edit the respective page component
   - Use existing UI components from `components/ui/`
   - Follow the established styling patterns

## Google Analytics Setup

1. Open `client/index.html`
2. Locate the Google Analytics script tag
3. Replace the placeholder ID with your tracking ID:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA4-ID"></script>
```

4. Update the tracking ID in `client/src/lib/analytics.ts`:
```typescript
gtag('config', 'YOUR-GA4-ID');
```

## SEO Optimization Guide

### Meta Tags

1. Update meta tags in `client/index.html` for each page:
```html
<meta name="description" content="Your description" />
<meta name="keywords" content="relevant, keywords, here" />
```

2. Include Open Graph tags for social sharing:
```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page Description" />
<meta property="og:image" content="URL to Image" />
```

### Image Optimization

1. Always include alt text for images:
```typescript
<img src="/path/to/image.jpg" alt="Descriptive text about the image" />
```

2. Use appropriate image sizes and formats:
   - Compress images before uploading
   - Use WebP format when possible
   - Keep image files under 200KB for optimal loading

### Schema Markup

1. Update schema data in `client/src/lib/schema.ts`
2. Customize the local business information:
   - Business hours
   - Contact details
   - Services offered

### URL Structure

- Use descriptive URLs for better SEO
- Keep URLs short and relevant
- Use hyphens to separate words

### Performance Tips

1. Lazy load images using the `loading="lazy"` attribute
2. Use appropriate heading hierarchy (h1, h2, h3)
3. Keep text content readable and well-structured
4. Ensure responsive design works across all devices

## Development Workflow

1. Start the development server:
```bash
npm run dev
```

2. Build for production:
```bash
npm run build
```

3. Deploy:
   - The built files will be in the `dist/` directory
   - Deploy to your preferred static hosting platform

## GitHub Repository Setup

### Initial Setup

1. Initialize Git repository (if not already initialized):
```bash
git init
```

2. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/username/repository-name.git
```

3. Create and switch to main branch:
```bash
git checkout -b main
```

### Configuration

1. Create `.gitignore` file to exclude build artifacts and dependencies:
```
node_modules/
dist/
.env
*.log
```

2. Stage and commit your files:
```bash
git add .
git commit -m "Initial commit: Project setup"
```

3. Push to GitHub:
```bash
git push -u origin main
```

### Best Practices

1. Branch Management:
   - Use `main` for production-ready code
   - Create feature branches for new developments
   - Use meaningful branch names (e.g., `feature/add-booking-system`)

2. Commit Guidelines:
   - Write clear, descriptive commit messages
   - Keep commits focused and atomic
   - Reference issue numbers if applicable

3. Protected Branches:
   - Enable branch protection rules on GitHub
   - Require pull request reviews
   - Enable status checks before merging

4. Environment Variables:
   - Never commit sensitive data
   - Use environment variables for API keys
   - Document required environment variables in `.env.example`

### Deployment

1. Setup deployment from GitHub:
   - Connect your repository to your hosting platform
   - Configure build settings
   - Set up environment variables

2. Automated Deployments:
   - Configure automatic deployments on push to main
   - Set up preview deployments for pull requests

## GitHub Pages Deployment

To deploy this site to GitHub Pages:

1. Build and prepare the files:
```bash
# Make the deploy script executable
chmod +x deploy-gh-pages.sh
# Run the deploy script
./deploy-gh-pages.sh
```

2. Create and push to gh-pages branch:
```bash
git checkout -b gh-pages
cp -r gh-pages/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

3. Configure GitHub Pages:
- Go to your repository settings
- Navigate to "Pages"
- Select "gh-pages" branch as the source
- Save the changes

4. Custom Domain (Optional):
- Add your domain in the repository settings
- Create a CNAME file in the root of gh-pages branch
- Update your DNS settings with your domain provider

Note: The site will be available at `https://[username].github.io/[repository-name]` or your custom domain if configured.