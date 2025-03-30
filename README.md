# AI Girlfriend Chat Application

A personalized AI chat companion with customizable personality, memory, and emotional responses.

## Features

- Text-based conversations with AI
- Customizable AI personality and avatar
- Memory of past conversations
- Emotional intelligence and response adaptation
- Secure user data handling

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Node.js/Next.js API routes
- **AI**: Llama API, Hugging Face
- **Data Storage**: Google Sheets API, MongoDB
- **Authentication**: NextAuth.js

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure environment variables:
   - Create a `.env.local` file with required API keys
4. Run the development server:
   ```
   npm run dev
   ```

## Project Structure

- `/pages` - Next.js pages and API routes
- `/components` - Reusable React components
- `/lib` - Utility functions and API clients
- `/styles` - Global CSS and styling
- `/public` - Static assets

## Security Notes

- API keys must be stored securely
- User data should be encrypted
- Consider implementing proper authentication 