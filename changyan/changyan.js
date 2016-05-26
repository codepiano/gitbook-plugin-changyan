require(["gitbook", "jQuery"], function(gitbook, $) {

    var loadChangyanDynamic = function() {
        var sourceId = location.pathname.replace(/\//g,'-');
        if (sourceId.charAt(sourceId.length - 1) == '-') {
            sourceId = sourceId + 'index.html';
        }
        $(".book-body .page-inner").append('<div id="SOHUCS" sid="' + sourceId + '"></div>');
        if (window.changyan && window.changyan.api) {
            window.changyan.api.config = window.gitbookChangyanConfig;
            var appid = window.changyan.api.config.appid;
            var conf = window.changyan.api.config.conf;
            var doc = document,
            s = doc.createElement('script'),h = doc.getElementsByTagName('head')[0] || doc.head || doc.documentElement;
            s.type = 'text/javascript';
            s.charset = 'utf-8';
            s.src =  'http://assets.changyan.sohu.com/upload/changyan.js?conf='+ conf +'&appid=' + appid;
            h.insertBefore(s,h.firstChild);
        } else {
            console.log('无法获取畅言config');
        }
    };

    gitbook.events.bind("start", function(e, config){
        window.gitbookChangyanConfig = config.changyan;
        window.changyan = {};
        window.changyan.api = {};
        window.changyan.api.config = config.changyan;
    });

    gitbook.events.bind("page.change", function(e){
        loadChangyanDynamic();
    });

});
