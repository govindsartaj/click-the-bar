// set value of switch in chrome storage
function setSwitchVal(val) {
  chrome.storage.sync.set({ switchValue: val }, function () {
      // value is set; do nothing
  });
}

// listen for message from popup.js signaling change in switch value
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.switchValue) {
    setSwitchVal(request.switchValue);
  }
  sendResponse("received");
});
