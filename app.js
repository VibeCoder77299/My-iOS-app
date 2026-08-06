let count = 0;
const button = document.getElementById('clickBtn');

button.addEventListener('click', () => {
    count++;
    button.textContent = `Clicks: ${count}`;
});

// Register a basic service worker for offline support
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
}
