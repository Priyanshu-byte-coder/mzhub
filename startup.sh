#!/bin/bash

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
  echo "Installing dependencies..."
  npm install --production
fi

# Build the Next.js app if .next doesn't exist
if [ ! -d ".next" ]; then
  echo "Building Next.js app..."
  npm run build
fi

# Start the application
echo "Starting Next.js application..."
npm start
