# Framez - Social Media Mobile App

A React Native social application where users can share posts with images.

## Features

- Secure Email/Password Authentication
- Create posts with text and images
- Real-time feed updates
- User profiles with post history
- Persistent authentication sessions

## Tech Stack

### Frontend

- **Framework**: React Native (Expo)
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Icons**: Expo Vector Icons
- **Image Picker**: Expo Image Picker

### Backend

- **Database**: Convex (Real-time database)
- **Authentication**: Custom auth with Convex mutations
- **Image Storage**: Cloudinary (Free 25GB storage)

### State Management

- **Auth State**: React Context API
- **Data Fetching**: Convex React hooks (useQuery, useMutation)

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Git

### Step 1: Clone Repository

```bash
git clone https://github.com/Dcomputer22/framez-social-app.git
cd framez-social-app
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Set Up Convex

#### 3.1 Install Convex CLI

```bash
npm install -g convex
```

#### 3.2 Initialize Convex

```bash
npx convex dev
```

This will:

- Prompt you to log in/sign up to Convex (free account)
- Create a new Convex project
- Generate the `convex/_generated/` folder
- Start the Convex development server

**Keep this terminal running!**

#### 3.3 Get Your Convex URL

After running `npx convex dev`, you'll see output like:

```
Convex functions ready! (xyz.convex.cloud)
```

Copy the URL (e.g., `https://happy-animal-123.convex.cloud`)

### Step 4: Set Up Cloudinary

#### 4.1 Create Account

1. Go to: https://cloudinary.com/users/register/free
2. Sign up (free - no credit card needed)
3. Verify your email and log in

#### 4.2 Get Credentials

1. Go to your **Dashboard**
2. Copy your **Cloud Name** (e.g., `dxxxxxxxxx`)

#### 4.3 Create Upload Preset

1. Go to **Settings** → **Upload**
2. Scroll to **Upload presets** section
3. Click **"Add upload preset"**
4. Configure:
   - **Preset name**: `framez_posts`
   - **Signing Mode**: **Unsigned** (Important!)
   - **Folder**: `framez/posts`
5. Click **Save**

### Step 5: Configure Environment Variables

Create a `.env` file in the root directory:

```bash
# Convex
EXPO_PUBLIC_CONVEX_URL=https://your-project.convex.cloud

# Cloudinary
EXPO_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
EXPO_PUBLIC_CLOUDINARY_UPLOAD_PRESET=framez_posts
```

**Replace with your actual values!**

### Step 6: Update Cloudinary Config

Open `utils/cloudinary.ts` and update:

```typescript
export const CLOUDINARY_CONFIG: CloudinaryConfig = {
  cloudName: 'your_actual_cloud_name',
  uploadPreset: 'framez_posts',
};
```

### Step 7: Run the App

```bash
# In one terminal (keep running)
npx convex dev

# In another terminal
npx expo start
```

Then:

- Press `a` for Android emulator
- Press `i` for iOS simulator (Mac only)
- Scan QR code with Expo Go app on your phone

## Hosting

- This app was hosted in https://appetize.io/
- url link - [https://appetize.io/apps/android/com.oyiza25.framezsocialapp](https://appetize.io/app/b_uj7sv3apbj5bzrbishcel3o5pm)

## Author

Fatima - HNG Stage 4 Frontend Task
