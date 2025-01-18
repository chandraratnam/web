#!/bin/bash

# Define GitHub Pages URL
REPO_NAME="web"
BASE_URL="/web"

# Build the project with the correct base URL for GitHub Pages
echo "Building the project..."
VITE_BASE_URL="${BASE_URL}" npm run build

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

# Update asset paths in index.html to be relative
echo "Updating asset paths..."
sed -i.bak 's|src="/assets/|src="./assets/|g' gh-pages/index.html
sed -i.bak 's|href="/assets/|href="./assets/|g' gh-pages/index.html
rm gh-pages/index.html.bak

# Verify the build output
echo "Verifying build output..."
if [ -f "gh-pages/index.html" ] && [ -d "gh-pages/assets" ]; then
  echo "✓ Build files verified successfully"
else
  echo "Error: Build files are missing"
  exit 1
fi

# Print configuration info
echo ""
echo "Build Configuration:"
echo "Repository: chandraratnam/web"
echo "Base URL: ${BASE_URL}"
echo "GitHub Pages URL: https://chandraratnam.github.io${BASE_URL}"
echo ""
echo "Files prepared for GitHub Pages deployment."
echo ""
echo "Next steps:"
echo "1. Stage all files in the gh-pages directory"
echo "2. Push to the gh-pages branch on GitHub"
echo "3. Ensure GitHub Pages is enabled in repository settings with gh-pages branch"