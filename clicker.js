function onLoad() {
  // when youtube loads, check if extension enabled & click!
  var defaultValue = "on";
  chrome.storage.sync.get({ switchValue: defaultValue }, function (data) {
    if (data.switchValue == "on") {
      document
        .getElementById("search")
        .getElementsByTagName("input")[0]
        .focus();
    }
  });
}

window.onload = onLoad;
