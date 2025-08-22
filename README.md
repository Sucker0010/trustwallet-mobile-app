# TrustWallet Mobile App

A secure, multi-chain cryptocurrency wallet built with React Native.

## Features

- 🔐 Secure wallet creation and import
- 💰 Multi-chain support (Ethereum, Polygon, BSC, etc.)
- 📱 Biometric authentication
- 🔄 Real-time balance updates
- 📊 Transaction history
- 🎨 Modern, intuitive UI
- 🌙 Dark mode support

## Getting Started

### Prerequisites

- Node.js 16+
- React Native CLI
- Android Studio (for Android)
- Xcode (for iOS)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd trustwallet-mobile-app
```

2. Install dependencies:
```bash
npm install
```

3. Install iOS dependencies:
```bash
cd ios && pod install && cd ..
```

4. Start the Metro bundler:
```bash
npm start
```

5. Run on device/simulator:

For Android:
```bash
npm run android
```

For iOS:
```bash
npm run ios
```

## Building for Production

### Android

1. Generate release APK:
```bash
npm run build:android
```

2. The APK will be generated in `android/app/build/outputs/apk/release/`

### iOS

1. Open the project in Xcode:
```bash
open ios/TrustWallet.xcworkspace
```

2. Select "Any iOS Device" as target
3. Go to Product > Archive
4. Follow the App Store submission process

## Security Features

- Biometric authentication
- Encrypted key storage
- Secure transaction signing
- Anti-phishing measures
- Certificate pinning

## Supported Networks

- Ethereum (ETH)
- Polygon (MATIC)
- Binance Smart Chain (BSC)
- Arbitrum (ARB)
- Optimism (OP)
- And more...

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, email support@trustwallet.com or join our Discord community.
