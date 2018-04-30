(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
}(" *  r a p e s e n s e . t k  * "));

window.onbeforeunload = function() { return "Your progress will be lost."; };