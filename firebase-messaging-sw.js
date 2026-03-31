importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyCz9cM7bUCAJnW2cr0qIZxaS60mWgRVAyM",
    projectId: "wyr-olympics",
    messagingSenderId: "5860419843",
    appId: "1:5860419843:web:45f65b48d42c36850ae136"
});

const messaging = firebase.messaging();

// This allows the notification to show when the app is in the background
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://wyr-official.github.io/icon.png' // Use absolute URL for the icon
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
