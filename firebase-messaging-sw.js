importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-bootstrap.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-sw.js');

firebase.initializeApp({
    apiKey: "AIzaSyCz9cM7bUCAJnW2cr0qIZxaS60mWgRVAyM",
    projectId: "wyr-olympics",
    messagingSenderId: "5860419843",
    appId: "1:5860419843:web:45f65b48d42c36850ae136"
});

const messaging = firebase.messaging();

// Background listener
messaging.onBackgroundMessage((payload) => {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // Add an icon path here if you have one
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
