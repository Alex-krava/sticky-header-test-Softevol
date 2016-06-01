(function () {
    var bars = document.getElementsByClassName('bar'),
        barsPos = [],
        i;
    window.onload = function () {
        var isFixedSupported = (function(){
            var isSupported = null;
            if (document.createElement) {
                var el = document.createElement("div");
                if (el && el.style) {
                    el.style.position = "fixed";
                    el.style.top = "10px";
                    var root = document.body;
                    if (root && root.appendChild && root.removeChild) {
                        root.appendChild(el);
                        isSupported = el.offsetTop === 10;
                        root.removeChild(el);
                    }
                }
        }
        return isSupported;
    })();
        for(i = 0; i < bars.length; i++) barsPos[i] = bars[i].offsetTop;
        eventScroll(barsPos, isFixedSupported);
        window.addEventListener('scroll', function () {
            eventScroll(barsPos, isFixedSupported);
        });
        window.scrollBy(0, 1);
    };
    function eventScroll(pos, flag) {
        var oldPos = pos;
            for(i = 0; i < bars.length; i++){
                if(bars[i].offsetTop - window.pageYOffset < 0) {
                    if(flag) addClass(bars[i], "bar--fixed");
                    else{
                        addClass(bars[i], "bar--no-fixed");
                        bars[i].style.marginTop = window.pageYOffset + 'px';
                    }
                }
                if(window.pageYOffset <= oldPos[i]) {
                    if(flag) removeClass(bars[i], "bar--fixed");
                    else{
                        removeClass(bars[i], "bar--no-fixed");
                        bars[i].style.marginTop = '0px';
                    }
                 }
                else{
                     if(!flag) bars[i].style.marginTop = window.pageYOffset + 'px';
                }
            }
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