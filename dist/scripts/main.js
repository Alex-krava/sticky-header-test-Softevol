(function () {
    var bars = document.getElementsByClassName('bar'),
        barsPos = [],
        i;
    window.onload = function () {
        for(i = 0; i < bars.length; i++) barsPos[i] = bars[i].offsetTop;
        eventScroll(barsPos);
        window.addEventListener('scroll', function () {
            eventScroll(barsPos);
        });
    };
    function eventScroll(pos) {
        var oldPos = pos;
        setTimeout(function() {
            for(i = 0; i < bars.length; i++){
                if(bars[i].offsetTop - window.pageYOffset < 5) {
                    addClass(bars[i], "bar--fixed");
                    bars[i].style.marginTop = window.pageYOffset + 'px';
                }else {
                    if(window.pageYOffset <= oldPos[i]) {
                        removeClass(bars[i], "bar--fixed");
                        bars[i].style.marginTop = '0px';
                    }else{
                        bars[i].style.marginTop = window.pageYOffset + 'px';
                    }
                }
            }
        }, 250);
    }
    function addClass(o, c) {
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        if (re.test(o.className)) return;
        o.className = (o.className + " " + c).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    }
    function removeClass(o, c){
        var re = new RegExp("(^|\\s)" + c + "(\\s|$)", "g");
        o.className = o.className.replace(re, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "");
    }
})();