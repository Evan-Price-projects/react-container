#!/bin/bash

# Replace env vars in JavaScript files
echo "Replacing environment variables"
for file in /usr/share/nginx/html/**/*.js; do
  echo "Processing $file..."
  
  # Replace VITE_API_URL with actual value from environment
  sed -i "s|VITE_API_URL|${VITE_API_URL}|g" $file
done

echo "Environment variables replaced"

exec "$@"