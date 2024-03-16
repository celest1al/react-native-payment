# Payment card

## Description

This is a simple payment card application using Omise payment API. It allows you to create a card and charge the card in random amount. The default currency is "THB". This application will need Omise public key and secret key to work, and the Proxy server to run the API. The Omise proxy can be found [here](https://github.com/celest1al/omise-proxy).

## Stack

- React Native with expo
- TypeScript
- React Navigation
- Zustand
- Tanstack Query
- Bun

## How to run

- Clone the repository
- Install the dependencies

```bash
bun install
```

or

```bash
npm install
```

- rename the `.env.example` to `.env` and fill in the `EXPO_PUBLIC_OMISE_PUBLIC_KEY`, `EXPO_PUBLIC_OMISE_SECRET_KEY`, and `EXPO_PUBLIC_OMISE_PROXY_URL` (default is `http://localhost:8000`)

- Clone the Omise proxy server and follow the instruction to run the server

- Run the application

```bash
bun start
```

- Open the application by scanning the QR code using Expo Go app on your mobile device. Or run the application on the web by pressing "w", pressing "i" for iOS, or pressing "a" for Android.
