window.onload = function () {
    var OriginTitile = document.title;
    var titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            document.title = '🚀您已离开R1ck的秘密基地！';
            clearTimeout(titleTime);
        }
        else {
            document.title = '🌌欢迎传送回来！' + OriginTitile;
            titleTime = setTimeout(function () {
                document.title = OriginTitile;
            }, 3000);
        }
    });
};
