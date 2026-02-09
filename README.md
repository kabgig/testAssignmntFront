# DiveSea - NFT Marketplace

A modern, responsive NFT marketplace application showcasing weekly top NFTs with real-time auction timers and dynamic bidding information.

## 🎯 Features

- **NFT Slider**: Interactive carousel displaying NFT collections
- **Real-time Auction Timers**: Countdown timers showing time remaining for each auction
- **Dynamic Bidding**: Randomly generated current bid amounts in ETH
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid user experience
- **Redux State Management**: Centralized state management with Redux Toolkit
- **API Integration**: Fetches real NFT data from CoinGecko API

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Styling**: SCSS with CSS Modules
- **Animations**: Framer Motion
- **API Client**: Axios
- **HTTP API**: CoinGecko Public API

## 📋 Prerequisites

- Node.js 20.x or higher
- npm or yarn package manager
- Docker (optional, for containerized deployment)

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd testfrontendassignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Production

### Build for production
```bash
npm run build
```

### Start production server
```bash
node .next/standalone/server.js
```

**Note**: This project uses Next.js standalone output for optimized Docker deployment. Use the command above instead of `npm start`.

### Run production build locally
```bash
npm run build && node .next/standalone/server.js
```

## 🐳 Docker Deployment

### Build Docker image
```bash
docker build -t divesea-nft .
```

### Run Docker container
```bash
docker run -p 3000:3000 divesea-nft
```

### Access the application
Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
testfrontendassignment/
├── app/
│   ├── animations/
│   │   └── variants.ts          # Framer Motion animation variants
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.tsx
│   │   │   └── Footer.module.scss
│   │   ├── Header/
│   │   │   ├── Header.tsx
│   │   │   └── Header.module.scss
│   │   ├── NFTCard/
│   │   │   ├── NFTCard.tsx
│   │   │   └── NFTCard.module.scss
│   │   ├── NFTSlider/
│   │   │   ├── NFTSlider.tsx
│   │   │   └── NFTSlider.module.scss
│   │   └── Timer/
│   │       ├── Timer.tsx
│   │       └── Timer.module.scss
│   ├── services/
│   │   └── coingecko.ts         # API service layer
│   ├── store/
│   │   ├── slices/
│   │   │   └── nftSlice.ts      # Redux NFT slice
│   │   ├── hooks.ts             # Typed Redux hooks
│   │   ├── provider.tsx         # Redux Provider component
│   │   └── store.ts             # Redux store configuration
│   ├── styles/
│   │   ├── _mixins.scss         # SCSS mixins
│   │   ├── _typography.scss     # Typography definitions
│   │   └── _variables.scss      # Design tokens
│   ├── utils/
│   │   ├── generators.ts        # Random data generators
│   │   └── imagePool.ts         # Image randomization
│   ├── globals.scss             # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.module.scss         # Page styles
│   └── page.tsx                 # Home page
├── public/
│   └── images/
│       └── nft/                 # NFT gradient images
├── .dockerignore
├── Dockerfile
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## 🎨 Design

The design follows the Figma specifications with:
- **Desktop (1440px+)**: 4-5 visible cards
- **Tablet (768-1023px)**: 3-4 visible cards
- **Mobile (<768px)**: 1-2 visible cards with swipe navigation

### Color Palette
- Background: `#F8F9FA`
- Card Background: `#FFFFFF`
- Primary Text: `#1A1A1A`
- Secondary Text: `#7D7D7D`
- Button: `#000000`
- Active Navigation: `#00D47E`

## 📡 API Information

The application uses the [CoinGecko NFT API](https://api.coingecko.com/api/v3/nfts/list):
- **Endpoint**: `https://api.coingecko.com/api/v3/nfts/list`
- **Method**: GET
- **Authentication**: None required
- **Data Used**: Only the `name` field from each NFT object

**Note**: Bid amounts and auction end times are randomly generated on the client side and are not from the API.

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## ⚙️ Technical Requirements Met

✅ **Framework**: Next.js 16 (React 19)  
✅ **State Management**: Redux Toolkit with typed hooks  
✅ **Styling**: SCSS with CSS Modules  
✅ **Animations**: Framer Motion for smooth transitions  
✅ **API Integration**: CoinGecko NFT API with axios  
✅ **Responsive Design**: Mobile, tablet, and desktop layouts  
✅ **Async Loading**: Loading states, error handling, and success states  
✅ **Cross-device Slider**: Navigation buttons + touch swipe support  
✅ **Dockerization**: Complete Docker setup for deployment  

## 🐛 Troubleshooting

### Port already in use
If port 3000 is already in use, you can specify a different port:
```bash
PORT=3001 npm run dev
```

### Docker build fails
Ensure Docker is running and you have sufficient disk space:
```bash
docker system prune -a
```

### API request fails
The CoinGecko API is public and requires no authentication. If requests fail:
- Check your internet connection
- Verify the API endpoint is accessible
- Check browser console for CORS errors (should not occur with this API)

## 📝 Assignment Notes

- **Estimated Development Time**: 18-20 hours
- **Completion Date**: February 11, 2026
- **NFT Names**: Fetched from CoinGecko API
- **Auction Timers**: Client-side generated (1-72 hours)
- **Bid Amounts**: Client-side generated (0.5-10 ETH)
- **Images**: Gradient placeholders (6 variants randomly assigned)

## 📄 License

This project is created as a frontend assignment and is for demonstration purposes.

## 👤 Author

Developed as a frontend development assignment showcasing Next.js, Redux, SCSS, and Framer Motion expertise.
# testAssignmntFront
