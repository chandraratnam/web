#!/bin/bash

# Get repository name from git config
REPO_NAME=$(basename `git rev-parse --show-toplevel`)

# Build the project with the correct base URL for GitHub Pages
echo "Building the project..."
VITE_BASE_URL="/${REPO_NAME}" npm run build

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

# Verify the build output
echo "Verifying build output..."
if [ -f "gh-pages/index.html" ] && [ -d "gh-pages/assets" ]; then
  echo "✓ Build files verified successfully"
else
  echo "Error: Build files are missing"
  exit 1
fi

# Verify assets paths in index.html
echo "Verifying asset paths in index.html..."
if grep -q "\"/${REPO_NAME}/assets/" gh-pages/index.html; then
  echo "✓ Asset paths are correctly prefixed with repository name"
else
  echo "Warning: Asset paths might not be correctly prefixed. Please verify the deployment."
fi

# Print the repository name and base URL for verification
echo ""
echo "Build Configuration:"
echo "Repository Name: ${REPO_NAME}"
echo "Base URL: /${REPO_NAME}"
echo ""
echo "Files prepared for GitHub Pages deployment."
echo ""
echo "Next steps:"
echo "1. Stage all files in the gh-pages directory"
echo "2. Push to the gh-pages branch on GitHub"
echo "3. Ensure GitHub Pages is enabled in repository settings with gh-pages branch"