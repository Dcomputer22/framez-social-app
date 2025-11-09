# Framez - Social Media Mobile App

A React Native social application where users can share posts with images.

## Features

- Secure Email/Password Authentication
- Create posts with text and images
- Real-time feed updates
- User profiles with post history
- Persistent authentication sessions

## Tech Stack

- **Framework**: React Native (Expo)
- **Backend**: Firebase
  - Authentication
  - Firestore Database
  - Cloud Storage
- **Navigation**: React Navigation v6
- **State Management**: React Context API

## Installation

### Prerequisites

- Node.js (v16+)
- Expo CLI
- Firebase account

### Setup

\`\`\`bash

# Clone repository

git clone https://github.com/Dcomputer22/framez-social-app.git
cd framez

# Install dependencies

npm install

# Start development server

npx expo start
\`\`\`

### Firebase Configuration

1. Create Firebase project
2. Enable Authentication, Firestore, and Storage
3. Copy your Firebase config to \`App.js\`

## Demo

- **Video Demo**: [Watch on YouTube](your-youtube-link)
- **Live App**: [Try on Appetize.io](your-appetize-link)

## Building

\`\`\`bash

# Build APK

eas build --platform android --profile preview

# Build iOS

eas build --platform ios --profile preview
\`\`\`

## License

MIT License

## Author

Fatima - HNG Stage 4 Frontend Task
