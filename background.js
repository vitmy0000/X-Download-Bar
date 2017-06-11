chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action == "close download shelf") {
        chrome.downloads.setShelfEnabled(false);
        chrome.downloads.setShelfEnabled(true);
    } else if (request.action == "open extension tab") {
        chrome.tabs.create({ 'url': 'chrome://extensions/' });
    } else if (request.action == "open download tab") {
        chrome.tabs.create({ 'url': 'chrome://downloads/' });
    }
  });
