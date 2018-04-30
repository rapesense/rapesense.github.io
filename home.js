(function titleScroller(text) {
    document.title = text;
    setTimeout(function () {
        titleScroller(text.substr(1) + text.substr(0, 1));
    }, 500);
}(" *  r a p e s e n s e . t k  * "));

var audio = document.getElementById("song");
  audio.volume = 0.1;