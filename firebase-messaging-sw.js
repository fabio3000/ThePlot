importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

// Deine exakten Projekt-Daten
firebase.initializeApp({
  apiKey: "AIzaSyDtwsvmYSONjFufhbJ5I8G_RAMffnh7re0",
  projectId: "theplot-app",
  messagingSenderId: "550703275210",
  appId: "1:550703275210:web:81bc0e5a373f87a3c92833"
});

const messaging = firebase.messaging();

// Dieser Block fängt Nachrichten ab, wenn die App im Hintergrund ist
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title || 'The Plot.';
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/P. Logo.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
