import { getApp, getApps, initializeApp } from "firebase/app";
import { getMessaging, getToken, isSupported } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyC8VknWY93d3aGgWUz42yAf9P3CdwxlpwI",
  authDomain: "digilabs-d563b.firebaseapp.com",
  projectId: "digilabs-d563b",
  storageBucket: "digilabs-d563b.firebasestorage.app",
  messagingSenderId: "1024969285378",
  appId: "1:1024969285378:web:b0b6026c5a75244832ec1b",
  measurementId: "G-58V88THF47"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const messaging = async () => {
  const supported = await isSupported();
  return supported ? getMessaging(app) : null;
};

export const fetchToken = async () => {
  try {
    const fcmMessaging = await messaging();
    if (fcmMessaging) {
      const token = await getToken(fcmMessaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_FCM_VAPID_KEY,
      });
      return token;
    }
    return null;
  } catch (err) {
    console.error("An error occurred while fetching the token:", err);
    return null;
  }
};

export { app, messaging };
