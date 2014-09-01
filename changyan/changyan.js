require(["gitbook", "jQuery"], function(gitbook, $) {

    var loadChangyanDynamic = function() {
        var sourceId = location.pathname.replace(/\//g,'-');
        if (sourceId.charAt(sourceId.length - 1) == '-') {
            sourceId = sourceId + 'index.html';
        }
        $(".book-body .page-inner").append('<div id="SOHUCS" sid="' + sourceId + '"></div>');
        var appid = window.changyan.appid, conf = window.changyan.conf;
        var doc = document,
        s = doc.createElement('script'),h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
        s.type = 'text/javascript';
        s.charset = 'utf-8';
        s.src =  'http://assets.changyan.sohu.com/upload/changyan.js?conf='+ conf +'&appid=' + appid;
        h.insertBefore(s,h.firstChild);
    }

    gitbook.events.bind("start", function(e, config){
        document.location.protocol == 'https:' ? 'https:' : 'http:';
        window.changyan = config;
    });

    gitbook.events.bind("page.change", function(e){
        loadChangyanDynamic()
    });

});
