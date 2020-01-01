var fffloaded = false;

document.addEventListener('DOMContentLoaded', function () {
    if (fffloaded) return;
    else fffloaded = true;

    function addDockButtons() {
        document.querySelector("section#comments div.subhead").innerHTML +=
        `<span class="comments-docked-toggle">
            <span class="comments-docked-close comments-docked-hidden">bezár<svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMidYMid" class="icon icon-close"><use xlink:href="/assets/blog/static/icon-defs.svg#icon-close"></use></svg></span>
            <span class="comments-docked-open">Hozzászólások megjelenítése oldalsávban<svg xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="xMidYMid" class="icon icon-chevron-down"><use xlink:href="/assets/blog/static/icon-defs.svg#icon-chevron-down"></use></svg></span>
        </span>`;
        document.querySelector('.comments-docked-toggle').addEventListener('click', () => {
            document.getElementById('comments').classList.toggle('docked-comments');
            document.querySelector('.comments-docked-open').classList.toggle('comments-docked-hidden');
            document.querySelector('.comments-docked-close').classList.toggle('comments-docked-hidden');
            document.getElementById('comments').style.width = 'var(--docked-comments-width)';
            document.querySelector("section#comments .comments-docked-resizer").style.right = "calc(var(--docked-comments-width) - var(--docked-comments-resizer-width))";
        });
    }

    function addResizeBar() {
        var sc = document.querySelector("section#comments").innerHTML;
        var ce = document.querySelector("section#comments");
        ce.innerHTML = 
            '<div class="comments-docked-resizer">' +
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAABkCAYAAABOx/oaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNrs1jEKwCAMBVCt6CjO4v2P4yWc9AYqYocWC34LQoc6mCXwEkjIFGqtreQKemdykCfqCFuhR/KGdbrzB2SMIXLOEWOMiN57ROccYggBMaWEKISY3HPBe27cuHHjF8w5I5ZSEKWUiFprRGMMolJqcqXh9CGufWQ61Ul7bO/BKcAAgRIiMqCaF2AAAAAASUVORK5CYII=">' +
            '</div>' + sc;
        var re = document.querySelector("section#comments .comments-docked-resizer");
        re.addEventListener('mousedown', initResize, false);

        function initResize(e) {
            e.preventDefault();
            document.getElementById("disqus_thread").style.pointerEvents = "none";
            ce.classList.toggle("dragged");
            window.addEventListener('mousemove', Resize, false);
            window.addEventListener('mouseup', stopResize, false);
        }
        function Resize(e) {
            e.preventDefault();
            var w = document.body.clientWidth - e.clientX;
            if (w > 250) {
                ce.style.width =  w + 'px';
                re.style.right =  (w - 8) + 'px';
            }
        }
        function stopResize(e) {
            window.removeEventListener('mousemove', Resize, false);
            window.removeEventListener('mouseup', stopResize, false);
            document.getElementById("disqus_thread").style.pointerEvents = "";
            ce.classList.toggle("dragged");
        }

    }

    function initCommentButton() {
        // init comments button after load
        var script = document.createElement('script');
        script.textContent = "window.addEventListener('load', () => {require('blog/comment').default();});";
        (document.head || document.documentElement).prepend(script);
    }

    function init() {
        addResizeBar();
        addDockButtons();
        initCommentButton();
    }

    // article check
    var af = document.querySelector("article footer.hide-print");
    if (null === af) {
        return;
    }

    // comments enabled check
    if (null !== document.getElementById("disqus_thread")) {
        init();
        console.debug("[444comments] comments enabled by 444.hu");
        return;
    }

    // readd comments html
    af.innerHTML +=
    '<section id="comments"><!-- comments -->' +
        '<div class="subhead"><span>Uralkodj magadon!</span></div>' +
        '<div>' +
            '<b>Új kommentelési szabályok érvényesek 2019. december 2-től.</b>' +
            '<a href="https://444.hu/2019/12/02/valtoznak-a-kommenteles-szabalyai-a-444-en" target="_blank">Itt olvashatod el</a>, hogy mik azok, és <a href="https://444.hu/2019/12/02/ezert-valtoztatunk-a-kommenteles-szabalyain" target="_blank">itt azt</a>, hogy miért vezettük be őket.' +
        '</div>' +
        '<button class="gae-comment-click-open comments-toggle">Hozzászólások</button>' +
        '<div class="ad"><div id="444_aloldal_kommentek"></div></div>' +
        '<div id="disqus_thread" class="freehand layout"></div>' +
    '</section>';

    init();
    console.debug("[444comments] comments enabled by extension");
});
