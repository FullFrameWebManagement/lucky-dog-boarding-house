#!/bin/bash

# Lucky Dog Boarding House - Deployment Script
# This script builds and deploys the website to Firebase Hosting

echo "🐕 Building Lucky Dog Boarding House website..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🚀 Deploying to Firebase Hosting..."
    firebase deploy --only hosting
    
    if [ $? -eq 0 ]; then
        echo "✅ Deployment complete!"
        echo "🌐 Website URL: https://lucky-dog-boarding-house.web.app"
    else
        echo "❌ Deployment failed!"
        exit 1
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
