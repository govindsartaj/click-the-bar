document.addEventListener("DOMContentLoaded", function () {
  var defaultValue = "on";

  // check if switchValue in storage, else set switch in popup to default val
  chrome.storage.sync.get({ switchValue: defaultValue }, function (data) {
    document.getElementById("cify-switch").checked = data.switchValue == "on";
  });

  // send message to background.js to store new switch value
  document.getElementById("cify-switch").addEventListener("click", () => {
    chrome.runtime.sendMessage(
      {
        switchValue: document.getElementById("cify-switch").checked
          ? "on"
          : "off",
      },
      function (response) {
        // do nothing with response
      }
    );
  });
});
