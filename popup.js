document.getElementById("activateOverlay").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: "showOverlay" });
  });
});

  document.getElementById('create-button').addEventListener('click', () => {
    const linkName = document.getElementById('link-name').value;
    const linkUrl = document.getElementById('link-url').value;

    if (linkName && linkUrl) {
        // Send message to content script to inject the button
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {name: linkName, url: linkUrl});
        });
    } else {
        alert('Please fill out both fields.');
    }
});
// popup.js
