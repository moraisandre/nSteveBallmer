//nSteveBallmer 
(function ($) {

    // chrome.storage.local.set({
    //     kitten:  {name:"Mug", eats:"mice"},
    //     monster: {name:"Kraken", eats:"people"}
    //   });

    // //   let gettingItem = chrome.storage.local.get();
    // //   gettingItem.then(onGot, onError);

    //   chrome.storage.local.get("kitten", function(items){
    //     console.log(items.kitten);  // -> {name:"Mog", eats:"mice"}
    //   });

      // Save it using the Chrome extension storage API.
    // chrome.storage.sync.set({'foo': 'hello', 'bar': 'hi'}, function() {
    //     console.log('Settings saved');
    //   });
  
    //   // Read it using the storage API
    //   chrome.storage.sync.get(['foo', 'bar'], function(items) {
    //     message('Settings retrieved', items);
    //   });

    chrome.storage.sync.get("data", function(items) {
        if (!chrome.runtime.error) {
            console.log('data: ' + items.data);
        }
      });

    

    /*
    var self = $.nSteveBallmer = new function () { };

    $.extend(self, {

        nSteveBallmerBackgrounds: [
            'http://cdn.techpatio.com/wp-content/uploads/2010/03/steve_ballmer_sweating.jpg',
            'http://cdn.ttgtmedia.com/rms/computerweekly/Steve_Ballmer.jpg',
            'http://pocketnow.com/wp-content/uploads/2015/10/ballmer-sweats.jpg',
            'http://images.dailytech.com/nimage/14790_Steve_Ballmer_Developers.png'
        ],

        nSteveBallmerImgs: [
            'http://i2.cdn.cnn.com/cnnnext/dam/assets/130823121452-02-steve-ballmer-horizontal-large-gallery.jpg',
            'https://www.tudocelular.com/img/id72955.jpg',
            'http://cdn.techpatio.com/wp-content/uploads/2010/03/steve_ballmer_sweating.jpg',
            'http://mediad.publicbroadcasting.net/p/kplu/files/201201/Steve_Ballmer.jpg',
            'http://static4.businessinsider.com/image/544e461d69bedda80ec891c4-1190-625/steve-ballmer-paid-2-billion-for-the-clippers-but-he-might-get-half-that-back-in-tax-breaks.jpg',
            'https://i.ytimg.com/vi/csBhtYMC_88/hqdefault.jpg',
            'http://images.dailytech.com/nimage/14790_Steve_Ballmer_Developers.png',
            'https://i.ytimg.com/vi/Vhh_GeBPOhs/hqdefault.jpg',
            'https://i1.sndcdn.com/artworks-000006621616-ej5015-t500x500.jpg',
            'http://winphone.ir/wp-content/uploads/2015/10/ballmer-sweats.jpg',
            'http://static2.businessinsider.com/image/56d5ae73dd089536178b46f0-1435-902/screen%20shot%202016-03-01%20at%209.46.56%20am.png',
            'https://www.google.com.br/imgres?imgurl=https%3A%2F%2Fwww.bloomberg.com%2Fgraphics%2F2015-paul-ford-what-is-code%2Fimages%2Fballmer.gif&imgrefurl=https%3A%2F%2Fwww.bloomberg.com%2Fgraphics%2F2015-paul-ford-what-is-code%2F&docid=ux_R1DOqOEhgKM&tbnid=ozQVuuHuHHdKFM%3A&vet=1&w=300&h=229&bih=798&biw=1440&ved=0ahUKEwixiI7ii9jVAhWHnJAKHQWTDbEQxiAIGSgB&iact=c&ictx=1',
            'http://s1.storage.akamai.coub.com/get/b44/p/coub/simple/cw_timeline_pic/5cea7b533ee/7a586b49f5662d9636e64/med_1409268665_1382461532_image.jpg',
            'https://i.ytimg.com/vi/7pfzUk8x9XU/hqdefault.jpg',
            'https://cdn-images-1.medium.com/max/1200/1*KvhM-ArA5RkpYLi7L_Qtdw.jpeg',
            'https://i-cdn.phonearena.com/images/article/46704-image/Heres-what-well-remember-Steve-Ballmer-for-best-and-weirdest-moments.jpg',
            'http://www.techmynd.com/wp-content/uploads/2012/06/Steve-Ballmer-funny-4.jpg',
            'http://cdn.ttgtmedia.com/rms/computerweekly/Steve_Ballmer.jpg',
            'https://www.washingtonpost.com/news/morning-mix/wp-content/uploads/sites/21/2014/05/Merlin_284282-781x1024.jpg',
            'http://pocketnow.com/wp-content/uploads/2015/10/ballmer-sweats.jpg',
            'http://static3.businessinsider.com/image/53ea56a0eab8ea7925e15503-1190-625/meet-steve-ballmer-the-former-microsoft-ceo-who-paid-2-billion-for-the-clippers.jpg',
            'https://betanews.com/wp-content/uploads/media/14/1458.jpg',
            'http://boston.barstoolsports.com/wp-content/blogs.dir/2/files/2014/09/ballmer.jpg',
            'https://i.ytimg.com/vi/EtuDS0ntaJY/hqdefault.jpg',
            'https://i.ytimg.com/vi/RPQz0iOZXdE/hqdefault.jpg',
            'http://www.numerama.com/content/uploads/2015/07/steveballmer-675.jpg',
            'http://images.dailytech.com/nimage/Ballmer_Basketball_Wide.png'
        ],

        handleImages: function (lstImgs, time) {
            $.each($('img'), function (i, item) {
                //Skip if image is already replaced
                if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                    var h = $(item).height();
                    var w = $(item).width();

                    //If image loaded
                    if (h > 0 && w > 0) {
                        //Replace
                        $(item).css('width', w + 'px').css('height', h + 'px');
                        $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                    }
                    else {
                        //Replace when loaded
                        $(item).load(function () {
                            //Prevent 'infinite' loop
                            if ($.inArray($(item).attr('src'), lstImgs) == -1) {
                                var h = $(item).height();
                                var w = $(item).width();
                                $(item).css('width', w + 'px').css('height', h + 'px');
                                $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]);
                            }
                        });
                    }
                }
            });

            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        },

        handleLogo: function (bgImgs, time) {
            $backgroundImages = $(
                '[class*=logo], [class*=header], [id*=header], [id*=logo], [class*=container]' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a,' +
                '[class*=container] div, html, body, div'
            )
                .filter(function () {
                    backgroundImg = $(this).css('background-image');
                    return backgroundImg && backgroundImg != 'none';
                }
                );

            $backgroundImages.each(function (i, item) {
                $(item).css('background', 'blue');
                $(item).css('color', 'white');
                $(item).css('font-family', 'monospace');
            });
        },

        handleBackground: function () {
            document.body.style.background = 'blue';
            document.body.style.color = 'white';
            document.body.style.fontFamily = 'monospace';

            self.setColorOnTag('white', 'a');
            self.setColorOnTag('white', 'p');
            self.setColorOnTag('white', 'h1');
            self.setColorOnTag('white', 'h2');
            self.setColorOnTag('white', 'h3');
            self.setColorOnTag('white', 'h4');
            self.setColorOnTag('white', 'h5');
            self.setColorOnTag('white', 'h6');
            self.setColorOnTag('white', 'div');
            self.setColorOnTag('white', 'span');
            self.setColorOnTag('white', 'cite');
            self.setColorOnTag('white', 'em');
            self.setColorOnTag('white', 'strong');
            self.setColorOnTag('white', 'table');
            self.setColorOnTag('white', 'th');
            self.setColorOnTag('white', 'ul');
            self.setColorOnTag('white', 'il');
            self.setColorOnTag('white', 'input');
            self.setColorOnTag('white', 'body');
            self.setColorOnTag('white', 'button');
            self.setColorOnTag('white', 'dd');
            self.setColorOnTag('white', 'dl');
            self.setColorOnTag('white', 'dt');
            self.setColorOnTag('white', 'em');
            self.setColorOnTag('white', 'fieldset');
            self.setColorOnTag('white', 'form');
            self.setColorOnTag('white', 'i');
            self.setColorOnTag('white', 'label');
            self.setColorOnTag('white', 'li');
            self.setColorOnTag('white', 'ol');
            self.setBackgroundColorOnTag('blue', 'div');
            self.setBackgroundColorOnTag('blue', 'ul');
            self.setBackgroundColorOnTag('blue', 'li');
            self.setBackgroundColorOnTag('blue', 'body');
            self.setBackgroundColorOnTag('blue', 'a');
            self.setBackgroundColorOnTag('blue', 'button');
            self.setBackgroundColorOnTag('blue', 'span');
            self.setBackgroundColorOnTag('blue', 'header');
            self.setBackgroundColorOnTag('blue', 'footer');
            self.setBackgroundColorOnTag('blue', 'img');
            self.setBackgroundColorOnTag('blue', 'table');
            self.setBackgroundColorOnTag('blue', 'th');
            self.setBackgroundColorOnTag('blue', 'input');
            self.setBackgroundColorOnTag('blue', 'h1');
            self.setBackgroundColorOnTag('blue', 'h2');
            self.setBackgroundColorOnTag('blue', 'h3');
            self.setBackgroundColorOnTag('blue', 'h4');
            self.setBackgroundColorOnTag('blue', 'h5');
            self.setBackgroundColorOnTag('blue', 'h6');
            self.setBackgroundColorOnTag('blue', 'section');
            self.setFontOnTag('monospace', 'div');
            self.setFontOnTag('monospace', 'p');
            self.setFontOnTag('monospace', 'a');
            self.setFontOnTag('monospace', 'button');
            self.setFontOnTag('monospace', 'span');
            self.setFontOnTag('monospace', 'ul');
            self.setFontOnTag('monospace', 'li');
            self.setFontOnTag('monospace', 'h1');
            self.setFontOnTag('monospace', 'h2');
            self.setFontOnTag('monospace', 'h3');
            self.setFontOnTag('monospace', 'h4');
            self.setFontOnTag('monospace', 'h5');
            self.setFontOnTag('monospace', 'h6');
            self.setFontOnTag('monospace', 'table');
            self.setFontOnTag('monospace', 'input');

        },

        setColorOnTag: function (color, tag) {
            var itens = document.getElementsByTagName(tag);

            for (var i = 0; i < itens.length; i++) {
                itens[i].style.color = color;
            }
        },

        setBackgroundColorOnTag: function (bgColor, tag) {
            var itens = document.getElementsByTagName(tag);

            for (var i = 0; i < itens.length; i++) {
                itens[i].style.background = bgColor;
                itens[i].style.background.color = bgColor;
                itens[i].style.border = bgColor;
            }
        },

        setFontOnTag: function (fontName, tag) {
            var itens = document.getElementsByTagName(tag);

            for (var i = 0; i < itens.length; i++) {
                itens[i].style.fontFamily = fontName;
            }
        }

    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nSteveBallmerImgs, 2000);
        self.handleLogo(self.nSteveBallmerBackgrounds, 2000);
        self.handleBackground();
    });
*/
    chrome.storage.onChanged.addListener(function(changes, namespace) {
        console.log('chrome.storage.onChanged.addL');
        for (key in changes) {
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
        }
      });
})(jQuery);