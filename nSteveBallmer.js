//nSteveBallmer
(function($) {

  //initialize options
  var changeImages = false;
  var changeBgColor = false;

  chrome.storage.sync.get("replaceImagesValue", function(items) {
    if (!chrome.runtime.error) {
      changeImages = items.replaceImagesValue;
    }
  });

  chrome.storage.sync.get("blueBgValue", function(items) {
    if (!chrome.runtime.error) {
      changeBgColor = items.blueBgValue;
    }
  });

  var self = ($.nSteveBallmer = new function() {}());

  //populate array of Ballmer images
  var nSteveBallmerImgs = [];

  for (i = 1; i <= 30; i++) {
    nSteveBallmerImgs.push(
      chrome.extension.getURL("images/ballmer-" + zeroPad(i, 2) + ".jpg")
    );
  }

  function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
  }

  //core - JQuery
  $.extend(self, {
    handleImages: function(lstImgs, time) {
      if (!changeImages) return;

      //ToDo: Loop for picture tag
      // $.each($("picture"), function(i, item) {
      //   $(item).html('<img src="' + lstImgs[Math.floor(Math.random() * lstImgs.length)] +
      //   '" class="" alt="" style="object-fit: cover;">');
      // });

      $.each($("img"), function(i, item) {
        //Skip if image is already replaced
        if ($.inArray($(item).attr("src"), lstImgs) == -1) {
          var h = $(item).height();
          var w = $(item).width();

          //If image loaded
          if (h > 0 && w > 0) {
            //Replace
            $(item)
              .css("width", w + "px")
              .css("height", h + "px")
              .css("object-fit", "cover");
            $(item).attr(
              "src",
              lstImgs[Math.floor(Math.random() * lstImgs.length)]
            );
          } else {
            //Replace when loaded
            $(item).load(function() {
              //Prevent 'infinite' loop
              if ($.inArray($(item).attr("src"), lstImgs) == -1) {
                var h = $(item).height();
                var w = $(item).width();
                $(item)
                  .css("width", w + "px")
                  .css("height", h + "px")
                  .css("object-fit", "cover");
                $(item).attr(
                  "src",
                  lstImgs[Math.floor(Math.random() * lstImgs.length)]
                );
              }
            });
          }
        }
      });

      //Keep replacing
      if (time > 0) {
        setTimeout(function() {
          self.handleImages(lstImgs, time);
        }, time);
      }
    },

    handleLogo: function(bgImgs, time) {
      if (!changeBgColor) return;

      $backgroundImages = $(
        "[class*=logo], [class*=header], [id*=header], [id*=logo], [class*=container]" +
          "[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span," +
          "[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1," +
          "[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a," +
          "[class*=container] div, html, body, div, picture"
      ).filter(function() {
        backgroundImg = $(this).css("background-image");
        return backgroundImg && backgroundImg != "none";
      });

      $backgroundImages.each(function(i, item) {
        $(item).css("background", "blue");
        $(item).css("color", "white");
        $(item).css("font-family", "monospace");
      });
    },

    handleBackground: function() {
      if (!changeBgColor) return;

      document.body.style.background = "blue";
      document.body.style.color = "white";
      document.body.style.fontFamily = "monospace";

      tags = ["a", "p", "h1", "h2", "h3", "h4", "h5", "h6", "div", "span", "cite", "em", "strong", "table",
              "th", "ul", "il", "input", "body", "button", "dd", "dl", "dt", "em", "fieldset", "form", "i", 
              "label", "li", "ol", "header", "footer", "img", "section", "content", "nav", "main", "pre", 
              "code", "blockquote", "textarea", "fb-appbar", "md-card", "console-footer", "Trends", "picture"];
      

      tags.forEach(function(element) {
        self.setColorOnTag("white", element);
        self.setBackgroundColorOnTag("blue", element);
        self.setFontOnTag("monospace", element);
      }, this);
    },

    setColorOnTag: function(color, tag) {
      var itens = document.getElementsByTagName(tag);

      for (var i = 0; i < itens.length; i++) {
        itens[i].style.color = color;
      }
    },

    setBackgroundColorOnTag: function(bgColor, tag) {
      var itens = document.getElementsByTagName(tag);

      for (var i = 0; i < itens.length; i++) {
        itens[i].style.background = bgColor;
        itens[i].style.background.color = bgColor;
        itens[i].style.border = bgColor;
      }
    },

    setFontOnTag: function(fontName, tag) {
      var itens = document.getElementsByTagName(tag);

      for (var i = 0; i < itens.length; i++) {
        itens[i].style.fontFamily = fontName;
      }
    }
  });

  //Run on jQuery ready
  $(function() {
    self.handleImages(nSteveBallmerImgs, 2000);
    //self.handleLogo(self.nSteveBallmerBackgrounds, 2000);
    self.handleBackground();
  });
})(jQuery);
