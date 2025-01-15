#!/bin/bash

echo "Initializing Git repository..."
git init

echo "Creating .gitignore file..."
cat > .gitignore << EOF
node_modules
dist
.DS_Store
server/public
vite.config.ts.*
*.tar.gz
.env
*.log
EOF

echo "Staging files..."
git add .

echo "Creating initial commit..."
git commit -m "Initial commit: Project setup"

echo "Git repository initialized successfully!"
echo ""
echo "Next steps:"
echo "1. Create a new repository on GitHub (if you haven't already)"
echo "2. Run the following commands to push to GitHub:"
echo "   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git"
echo "   git push -u origin main"