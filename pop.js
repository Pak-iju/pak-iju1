document.getElementById("click-catcher").addEventListener("click", function() {
    if (document.cookie.indexOf("popunder") === -1) {
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 3600 * 1000; // 1 jam
        now.setTime(expireTime);
        document.cookie = "popunder=true; expires=" + now.toUTCString() + "; path=/";

        var popunder = window.open("http://mimpidewasa.com", "_blank");
        if (popunder) {
            popunder.blur();
            window.focus();
        }
    }

    // Autoplay video after triggering popunder
    var iframe = document.getElementById("video-iframe");
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

    // Remove click catcher to allow further interaction with the video
    document.getElementById("click-catcher").style.display = "none";
});
