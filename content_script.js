function isEditable(element) {
  return element.localName === 'textarea'
      || element.localName === 'select'
      || element.isContentEditable
      || (element.localName === 'input' && /^(?!button|checkbox|file|hidden|image|radio|reset|submit)/i.test(element.type));
}

var main = (function() {
  var statusDiv=document.createElement('div');
  document.body.appendChild(statusDiv);
  statusDiv.innerText='normal';
  statusDiv.id = 'StatusDiv';
  statusDiv.style.position = 'fixed';
  statusDiv.style.bottom = '0%';
  statusDiv.style.left = '50%';
  statusDiv.style.width = '100px';
  statusDiv.style.height = '30px';
  statusDiv.style.backgroundColor = 'red';

  window = {};
  var insertMode = new InsertMode();
  window.addEventListener('mousedown', function(event) {
    if (isEditable(event.target)) {
        insertMode.enter();
      } else {
        insertMode.exit();
      }
  });
  window.addEventListener('keydown', function(event) {
    if (event.keyCode == 27) { // <Esc>
      document.activeElement.blur();
      insertMode.exit();
    }
  });
})();

function InsertMode() {
  this.enter = function() {
    $('#StatusDiv').text('insert');
  }
  this.exit = function() {
    $('#StatusDiv').text('normal');
  }
}


// window.addEventListener('keydown', function(event) {
//     switch (event.keyCode) {
//         case 27:
//             console.log('<ESC> pressed');
//      document.activeElement.blur();
//             break;
//         case 68:
//             console.log('d pressed');
//             chrome.runtime.sendMessage({action: "open download tab"});
//             break;
//         case 69:
//             console.log('e pressed');
//             chrome.runtime.sendMessage({action: "open extension tab"});
//             break;
//         case 74:
//             console.log('j pressed');
//             window.scrollBy(0, 400);
//             break;
//         case 75:
//             console.log('k pressed');
//             window.scrollBy(0, -400);
//             break;
//         case 88:
//             console.log('x pressed');
//             chrome.runtime.sendMessage({action: "close download shelf"});
//             break;
//     }
// });
