// popup.js

window.onload = function () {
  //console.log('document.body.onload ');

  chrome.storage.sync.get("replaceImgValue", function (items) {
    if (!chrome.runtime.error) {
      console.log('items.value ' + items.replaceImgValue);
      document.getElementById("replaceImagesCbx").checked = items.replaceImgValue;
    }
  });

  document.getElementById("replaceImagesCbx").addEventListener("click", function () {
    //asdasdas

    var value = document.getElementById("replaceImagesCbx").checked;

    console.log('value ' + value);

    chrome.storage.sync.set({ "replaceImgValue": value }, function () {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });

    chrome.storage.sync.get("replaceImgValue", function (items) {
      if (!chrome.runtime.error) {
        console.log('items.replaceImgValue ' + items.replaceImgValue);
        document.getElementById("replaceImagesCbx").checked = items.replaceImgValue;
      }
    });

  });
}

