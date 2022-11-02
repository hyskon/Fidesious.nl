(function (exports, d) {
    var _isReady = false,
        _event,
        _fns = [];

    function onReady(event) {
        d.removeEventListener("DOMContentLoaded", onReady);
        _isReady = true;
        _event = event;
        _fns.forEach(function (_fn) {
            var fn = _fn[0],
                context = _fn[1];
            fn.call(context || exports, window.jQuery);
        });
    }

    function onReadyIe(event) {
        if (d.readyState === "complete") {
            d.detachEvent("onreadystatechange", onReadyIe);
            _isReady = true;
            _event = event;
            _fns.forEach(function (_fn) {
                var fn = _fn[0],
                    context = _fn[1];
                fn.call(context || exports, event);
            });
        }
    }

    d.addEventListener && d.addEventListener("DOMContentLoaded", onReady) ||
    d.attachEvent && d.attachEvent("onreadystatechange", onReadyIe);

    function domReady(fn, context) {
        if (_isReady) {
            fn.call(context, _event);
        }

        _fns.push([fn, context]);
    }

    exports.mesmerizeDomReady = domReady;
})(window, document);

(function () {
    function setHeaderTopSpacing() {

        setTimeout(function() {
          var headerTop = document.querySelector('.header-top');
          var headers = document.querySelectorAll('.header-wrapper .header,.header-wrapper .header-homepage');

          for (var i = 0; i < headers.length; i++) {
              var item = headers[i];
              item.style.paddingTop = headerTop.getBoundingClientRect().height + "px";
          }

            var languageSwitcher = document.querySelector('.mesmerize-language-switcher');

            if(languageSwitcher){
                languageSwitcher.style.top = "calc( " +  headerTop.getBoundingClientRect().height + "px + 1rem)" ;
            }
            
        }, 100);

     
    }

    window.addEventListener('resize', setHeaderTopSpacing);
    window.mesmerizeSetHeaderTopSpacing = setHeaderTopSpacing
    mesmerizeDomReady(setHeaderTopSpacing);
})();

window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/www.fidesious.nl\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.7.8"}};
			!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
		