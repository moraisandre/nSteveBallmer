// settings.js

window.onload = function() {
  //Clear storage
  // chrome.storage.sync.clear(function() {
  //     var error = chrome.runtime.lastError;
  //     if (error) {
  //         console.error(error);
  //     }
  // });

  //Populating Checkboxes
  populateElement("replaceImages", "replaceImagesValue");
  populateElement("blueBg", "blueBgValue");

  //adding Listener to elements
  addListenerToElement("click", "replaceImages");
  addListenerToElement("click", "blueBg");
};

function addListenerToElement(listenerName, element) {

  document.getElementById(element).addEventListener(listenerName, function() {
    setStorageValue(
      element + "Value",
      document.getElementById(element).checked
    );
  });
}

function setStorageValue(storageName, value) {
  var save = {};
  save[storageName] = value;


  chrome.storage.sync.set(save, function() {});
}

function populateElement(elementId, storageName) {

  chrome.storage.sync.get(storageName, function(items) {
    if (!chrome.runtime.error) {
      //initializing keys for the first time
      if (items[storageName] == undefined) {
        setStorageValue(storageName, true);

        document.getElementById(elementId).checked = true;
        return;
      }

      document.getElementById(elementId).checked = items[storageName];
    }
  });
}
