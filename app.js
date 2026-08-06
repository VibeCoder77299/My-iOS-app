const urlInput = document.getElementById('urlInput');
const goBtn = document.getElementById('goBtn');
const browserFrame = document.getElementById('browserFrame');

function navigateToUrl() {
    let url = urlInput.value.trim();
    
    if (!url) return;

    // Automatically add https:// if the user forgets to type it
    if (!/^https?:\/\//i.test(url)) {
        url = 'https://' + url;
    }

    browserFrame.src = url;
}

// Listen for the Go button click
goBtn.addEventListener('click', navigateToUrl);

// Listen for the "Return/Enter" key on the iPhone keyboard
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        navigateToUrl();
        urlInput.blur(); // Hides the keyboard
    }
});
