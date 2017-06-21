function isEditable(element) {
    return element.localName === 'textarea'
        || element.localName === 'select'
        || element.isContentEditable
        || (element.localName === 'input' && /^(?!button|checkbox|file|hidden|image|radio|reset|submit)/i.test(element.type));
}

window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 88:
            console.log('x key pressed');
            var elm = document.activeElement;
            if (!isEditable(elm)) {
              chrome.runtime.sendMessage({action: "close download shelf"});
            }
            break;
    }
});
