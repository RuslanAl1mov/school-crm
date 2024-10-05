#!/bin/bash

echo "Switching to branch frontend"
git checkout frontend

echo "Setting environment"
export NODE_ENV=production

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* lms@server_domain:/var/www/lms/

echo "Done!"
