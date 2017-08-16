//nSteveBallmer 
(function ($) {

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
                '[class*=logo], [class*=header], [id*=header], [id*=logo],' +
                '[class*=logo] span, [class*=header] span, [id*=header] span, [id*=logo] span,' +
                '[class*=logo] h1, [class*=header] h1, [id*=header] h1, [id*=logo] h1,' +
                '[class*=logo] a, [class*=header] a, [id*=header] a, [id*=logo] a,' +
                'html, body, div'
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
            console.log('antes');
            self.setColorOnTag('white', 'a');
            self.setColorOnTag('white', 'p');
            self.setColorOnTag('white', 'h1');
            self.setColorOnTag('white', 'h2');
            self.setColorOnTag('white', 'h3');
            self.setColorOnTag('white', 'h4');
            self.setColorOnTag('white', 'h5');
            self.setColorOnTag('white', 'h6');
            self.setColorOnTag('div', 'blue');
            console.log('depois');
        },

        setColorOnTag: function (color, tag) {
            var itens = document.getElementsByTagName(tag);
            
                        for (var i = 0; i < itens.length; i++) {
                            // if (itens[i].href) {
                            //     itens[i].style.color = color;
                            // }
                            itens[i].style.color = color;
                        }
        }


    });

    //Run on jQuery ready
    $(function () {
        self.handleImages(self.nSteveBallmerImgs, 2000);
        self.handleLogo(self.nSteveBallmerBackgrounds, 2000);
        self.handleBackground();
    });
})(jQuery);