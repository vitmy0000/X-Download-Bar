window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 13:
            console.log('Enter key pressed');
            chrome.runtime.sendMessage({action: "close download shelf"});
            event.preventDefault();
            break;
    }
});
