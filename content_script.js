window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 68:
            console.log('d pressed');
            chrome.runtime.sendMessage({action: "open download tab"});
            break;
        case 69:
            console.log('e pressed');
            chrome.runtime.sendMessage({action: "open extension tab"});
            break;
        case 74:
            console.log('j pressed');
            window.scrollBy(0, 800);
            break;
        case 75:
            console.log('k pressed');
            window.scrollBy(0, -800);
            break;
        case 88:
            console.log('x pressed');
            chrome.runtime.sendMessage({action: "close download shelf"});
            break;
    }
});
