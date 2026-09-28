importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");
try{
firebase.initializeApp({apiKey:"AIzaSyDykDdg_PUE-uNXEFMGkOqGTIS9r9UkaRM",authDomain:"massenger-v20.firebaseapp.com",databaseURL:"https://massenger-v20-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"massenger-v20",storageBucket:"massenger-v20.firebasestorage.app",messagingSenderId:"756660049752",appId:"1:756660049752:web:7cea19cf70840dacbc372d"});
var messaging=firebase.messaging();
messaging.onBackgroundMessage(function(payload){var t=(payload.notification&&payload.notification.title)||"SM TV";var b=(payload.notification&&payload.notification.body)||"Match update";self.registration.showNotification(t,{body:b,icon:"icon-192.png",badge:"icon-192.png"})});
}catch(e){}
self.addEventListener("notificationclick",function(e){e.notification.close();e.clients.openWindow("./index.html")});
