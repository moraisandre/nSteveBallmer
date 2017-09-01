
// popup.js

window.onload = function () {
  console.log('document.body.onload ');

  chrome.storage.sync.get("replaceImages", function (items) {
    if (!chrome.runtime.error) {
      console.log(items);
      console.log(items.data);
      console.log(items.value);
      document.getElementById("replaceImagesCb").checked = items.data;
    }
  });

  document.getElementById("TESTE").addEventListener("click", function () {

    //asdasdas

    chrome.storage.sync.get("replaceImages", function (items) {
      if (!chrome.runtime.error) {
        console.log(items);
        console.log(items[0]);
        console.log(items.value);
        document.getElementById("replaceImagesCb").checked = items.data;
      }
    });

    //asdas


    console.log('in ');

    var value = document.getElementById("replaceImagesCb").checked;

    console.log('value ' + value);

    chrome.storage.sync.set({ "replaceImages": value }, function () {
      if (chrome.runtime.error) {
        console.log("Runtime error.");
      }
    });
  }
  );
}

