#!/bin/bash

# Build the project with the correct base URL for GitHub Pages
echo "Building the project..."
VITE_BASE_URL="/web" npm run build

# Create a new directory for GitHub Pages
echo "Preparing GitHub Pages deployment..."
rm -rf gh-pages
mkdir gh-pages

# Copy the built files to root of gh-pages
echo "Copying built files..."
cp -r dist/public/* gh-pages/
cp client/404.html gh-pages/404.html

# Create necessary GitHub Pages files
echo "Creating GitHub Pages files..."
touch gh-pages/.nojekyll

echo "Files prepared for GitHub Pages deployment."
echo ""
echo "Next steps:"
echo "1. Stage all files in the gh-pages directory"
echo "2. Push to the gh-pages branch on GitHub"
echo "3. Ensure GitHub Pages is enabled in repository settings with gh-pages branch"