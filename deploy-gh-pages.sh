#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Create a new directory for GitHub Pages
echo "Preparing GitHub Pages deployment..."
rm -rf gh-pages
mkdir gh-pages

# Copy the built files
echo "Copying built files..."
cp -r dist/public/* gh-pages/

# Create necessary GitHub Pages files
echo "Creating GitHub Pages files..."
touch gh-pages/.nojekyll
cat > gh-pages/404.html << EOF
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Redirecting...</title>
  <script>
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/'">
</head>
<body>
</body>
</html>
EOF

echo "Files prepared for GitHub Pages deployment."
echo ""
echo "Next steps:"
echo "1. Create a new branch called 'gh-pages'"
echo "2. Copy the contents of the gh-pages directory to the gh-pages branch"
echo "3. Push the gh-pages branch to GitHub"
echo "4. Enable GitHub Pages in your repository settings"
