export const sendNotification = async (title, message) => {
    if ('Notification' in window) {
        if (Notification.permission !== 'granted') {
            return;
        }

        navigator.serviceWorker.ready.then(registration => {
            registration.showNotification(title, {
                body: message,
                tag: 'vibration-sample'
            });
        });
    }
}
