(function () {
  function waitForRouter() {
    let app = Ember.A(Ember.Namespace.NAMESPACES).filter((n) => {
      return n.name === "n3";
    })[0];
    if (app) {
      let router = app.__container__.lookup("router:main");
      if (router.currentRouteName != null) {
        start444hsz();
      } else {
        setTimeout(waitForRouter, 200);
      }
    } else {
      setTimeout(waitForRouter, 200);
    }
  }

  function waitForEmber() {
    if (typeof Ember === "undefined") {
      setTimeout(waitForEmber, 200);
    } else {
      waitForRouter();
    }
  }

  waitForEmber();

  function start444hsz() {
    var _emberApp = Ember.A(Ember.Namespace.NAMESPACES).filter((n) => {
      return n.name === "n3";
    })[0];
    if (_emberApp) {
      var _emberRouter = _emberApp.__container__.lookup("router:main"),
        _lastUrl; // = _emberRouter.get("url");
    } else {
      log("frontend app not found, extension is disabled");
      return;
    }

    var _commentsSectionEl = document.createElement("div"),
      _commentsSectionTempEl = null,
      _commentsSectionInsertMethod = 0,
      _commentsLoaded = false,
      _commentsSectionLoadRetries,
      _commentsButtonTopEl = null,
      _defaultForumShortName = "444hu",
      _defaultUserForumShortName = "444hsz",
      _currentForumShortName = _defaultForumShortName,
      _userForumShortName = _defaultUserForumShortName,
      _parentEl = null,
      _headContentAvailable = false,
      _baseUrl = document.querySelector(
        'meta[name="444hsz-extension-baseurl"]'
      )["content"],
      _version = document.querySelector(
        'meta[name="444hsz-extension-version"]'
      )["content"];

    _commentsSectionEl.id = "comments_wrapper";
    _commentsSectionElInnerHTML =
      `
            <div class="comments-resizer"><div></div></div>
            <div class="comments-resizer-right"><div></div></div>
            <div class="comments-main">
            <div id="comments_tabs">
                <div class="titlebar">
                    <span class="title">Kommentek</span>
                    <span class="spacer"></span>
                    <button class="button-sidebar" title="Oldalsáv"><img draggable="false" src="` +
      _baseUrl +
      `images/view_sidebar_black_24dp.svg"></button>
                    <button class="button-settings" title="Beállítások"><img draggable="false" src="` +
      _baseUrl +
      `images/settings_black_24dp.svg"></button>
                </div>
    
                <div class="comments-settings collapse">
                    <div class="ext-wrapper">
                        <div class="wrapper">
                            <div class="version">444hsz bővítmény verzió<span>` +
      _version +
      `</span></div>
                            <div class="slider-switch-wrapper"><label class="slider-switch" for="autoloadToggle">Kommentek auto betöltése<input type="checkbox" id="autoloadToggle"><span class="slider"></span></label></div>
                            <div class="slider-switch-wrapper"><label class="slider-switch" for="rulesToggle">Szolgálati közlemény<input type="checkbox" id="rulesToggle" checked><span class="slider"></span></label></div>
                            <div class="slider-switch-wrapper"><label class="slider-switch" for="recommendationsToggle">Disqus ajánlások<input type="checkbox" id="recommendationsToggle"><span class="slider"></span></label></div>
                            <div class="slider-switch-wrapper">
                                <label class="" for="userForumShortName">Nem hivatalos Disqus fórum<span><input type="text" id="userForumShortName" placeholder="444hsz"></span></label>
                            </div>
                        </div>
                    </div>
                </div>
    
                <div class="toolbar">
                    <div class="tab-1">
                        <div class="borderline"></div>
                        <button id="tab-444hu" class="tab" title="Hivatalos kommentek"><img draggable="false" class="invert" src="/logo-444.svg"></button>
                    </div>
                    <div class="tab-2">
                        <button id="tab-user" class="tab" title="Nem hivatalos kommentek"><img draggable="false" src="` +
      _baseUrl +
      `images/444hsz.svg"></button>
                    </div>
                    <span class="toolbar-spacer"></span>
                </div>
            </div>` +
      `<div class="comments-wrapper">` +
      `<section id="comments">` +
      `<div class="comments-contents">
                <div class="forum-rules">
                    <div title="Bezár" class="close-button"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg></div>
                    <ul>
                        <h1 class="title"><img draggable="false" src="` +
      _baseUrl +
      `images/444hsz.svg">Szolgálati közlemény</h1>
                        <b>
                            <p>Ezt üzenetet azért látod itt, mert telepítetted a "444hsz" böngésző bővítményt.</p>
                            <p>2021. augusztus 12-én a 444 megszüntette a cikkek szabad kommentelhetőségét, így innentől kezdve csak a Kör tagsággal rendelkező előfizetők írhatnak kommenteket.</p>
                            <p>A "444hsz" böngésző bővítmény a hivatalossal párhuzamosan egy nem hivatalos, mindenki által szabadon használható Disqus fórumot is képes kezelni. Erről a következőket kell tudni:</p>
                            <li>A hivatalos és a nem hivatalos kommentek között váltani a feljebb látható "444" illetve "444hsz" logós fülekre kattintva lehet (Kommentek felirat alatt). A 444 logóra kattintva a hivatalos, a 444hsz logóra pedig a nem hivatalos kommentek töltődnek be a cikkhez. A kiválasztott fület megjegyzi a böngésző.</li>
                            <li>Az alapértelmezett nem hivatalos fórum a "444hsz", ami a 444 szabad kommentelhetőségének fenntartásáért lett létrehozva.</li>
                        </b>
                        <div class="text-close-button"><button>Ne jelenjen meg többet</button></div>
                    </ul>
                </div>
                <button class="gae-comment-click-open comments-toggle">Kommentek mutatása</button>
                <div class="ad"><div id="444_aloldal_kommentek"></div></div>
                <div id="disqus_thread" class="freehand layout"></div>
            </div>` +
      `</section>` +
      `</div>
            </div>`;

    let tmp = new DOMParser()
      .parseFromString(_commentsSectionElInnerHTML, `text/html`)
      .getElementsByTagName(`body`)[0].children;
    _commentsSectionEl.append(...tmp);
    delete tmp;

    function log(msg, ret) {
      var tag = "%c[444hsz]";
      if (ret) return tag + " " + msg;
      else console.debug(tag, "color: #29af0a;", msg);
    }

    function storeSetting(name, value) {
      localStorage.setItem(name, value);
    }

    function loadSetting(name) {
      return localStorage.getItem(name);
    }

    function pageChanged() {
      return _lastUrl !== _emberRouter.get("url");
    }

    function trackPageChange() {
      _lastUrl = _emberRouter.get("url");
      return true;
    }

    function pageIsArticle() {
      return String(_emberRouter.currentRouteName).endsWith("--reader.post");
    }

    function pageIsFociArticle() {
      return _emberRouter.currentRouteName == "foci--reader.post";
    }

    function scrollToHash() {
      if (window.location.hash.startsWith("#comment")) {
        document.querySelector(".comments-toggle").click();
        document.getElementById("comments").scrollIntoView();
      }
    }

    function getDisqusUrl() {
      let url = document.URL;
      if (pageIsFociArticle()) {
        let d = _emberRouter.get("currentRoute.attributes.date");
        if (d && new Date(d) < new Date("2021-06-09")) {
          // convert thread urls to the old address format for older articles
          // last thread on foci.444.hu was: https://foci.444.hu/2021/06/08/gol-nelkuli-foproba-az-eb-elott
          url = url.replace("444.hu/foci/", "foci.444.hu/");
          log("Disqus URL converted to old format: " + url);
        }
      }
      return url;
    }

    function initSidebar() {
      var _ce = document.getElementById("comments_wrapper");
      var _re = document.querySelector("#comments_wrapper .comments-resizer");

      function initResize(e) {
        e.preventDefault();
        document.body.style.pointerEvents = "none";
        _ce.classList.toggle("dragged");
        window.addEventListener("mousemove", Resize, false);
        window.addEventListener("mouseup", stopResize, false);
      }

      function Resize(e) {
        e.preventDefault();
        var w = document.body.clientWidth - e.clientX;
        if (w >= 335) {
          _ce.style.width = w + "px";
          //_re.style.right =  (w - 8) + 'px';
        }
      }

      function stopResize(e) {
        e.preventDefault();
        window.removeEventListener("mousemove", Resize, false);
        window.removeEventListener("mouseup", stopResize, false);
        document.body.style.pointerEvents = "";
        _ce.classList.toggle("dragged");
      }

      _re.addEventListener("mousedown", initResize, false);
    }

    function initButtons() {
      function onClickCommentsButton() {
        if (!_commentsLoaded) {
          _commentsLoaded = true;
          window.disqus_url = getDisqusUrl();
          let dc = require("disqus/components/disqus-comments"),
            lc = new dc.default();
          lc.args = {
            identifier: null,
            url: window.disqus_url,
            title: null,
            categoryId: null,
          };

          Object.defineProperty(lc, "fastboot", {
            get: function () {
              return 0;
            },
          });
          Object.defineProperty(lc, "config", {
            get: function () {
              return {
                get: function () {
                  return _currentForumShortName;
                },
              };
            },
          });

          lc.loadComments.perform();
          this.classList.add("hide");
        }
      }

      function getOffsetTop(element) {
        return element
          ? element.offsetTop + getOffsetTop(element.offsetParent)
          : 0;
      }

      function onClickTopCommentsButton() {
        document.querySelector(".comments-toggle").click();
        window.scroll({
          top: getOffsetTop(document.getElementById("comments_wrapper")) - 64,
        });
      }

      function onClickSidebarToggle() {
        document.getElementById("comments_wrapper").classList.toggle("sidebar");
        document
          .querySelector("div#comments_tabs .titlebar button.button-sidebar")
          .classList.toggle("active");

        document.getElementById("comments_wrapper").style.width =
          "var(--docked-comments-width)";

        let el = document.querySelector(".comments-toggle");
        if (null !== el) el.click();
      }

      function unloadDisqus() {
        delete window.DISQUS;
        delete window.DISQUS_RECOMMENDATIONS;
        delete window.disqus_config;
        delete window.disqus_recommendations_config;

        if (null !== document.querySelector("#disqus_recommendations"))
          document.querySelector("#disqus_recommendations").remove();

        let ss = document.evaluate(
          "//script[@src='https://" +
            _currentForumShortName +
            ".disqus.com/embed.js']",
          document,
          null,
          XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
          null
        );
        if (ss.snapshotLength) {
          for (let i = 0; i < ss.snapshotLength; i++) {
            let s = ss.snapshotItem(i);
            s.remove();
          }
        }

        _commentsLoaded = false;
      }

      function onClickForumUser() {
        if (_currentForumShortName != _userForumShortName) {
          unloadDisqus();
          _currentForumShortName = _userForumShortName;
          updateForumTabs();
          storeSetting("_444hsz_user_forum_enabled", 1);
          document.querySelector(".comments-toggle").click();
        }
      }

      function onClickForum444hu() {
        if (_currentForumShortName == _userForumShortName) {
          unloadDisqus();
          _currentForumShortName = _defaultForumShortName;
          updateForumTabs();
          storeSetting("_444hsz_user_forum_enabled", 0);
          document.querySelector(".comments-toggle").click();
        }
      }

      function insertTopCommentsButton() {
        _commentsButtonTopEl = document.createElement("p");
        _commentsButtonTopEl.innerHTML =
          '<button class="gae-comment-click-open comments-toggle-top">Kommentek</button>';

        let p;
        switch (_commentsSectionInsertMethod) {
          case 0:
            if (
              (p =
                document.querySelector(".rich-text-feature") ||
                document.querySelector(".legacy"))
            ) {
              p.insertBefore(_commentsButtonTopEl, p.firstElementChild);
              if (p.classList.contains("legacy")) {
                _commentsButtonTopEl.style.setProperty(
                  "margin",
                  "-10px 0 22px"
                );
              }
              return true;
            }
            break;
          case 1:
          case 3:
            if ((p = document.getElementById("toolbar-dropdown-target"))) {
              p.nextElementSibling.insertBefore(
                _commentsButtonTopEl,
                p.nextElementSibling.firstElementChild.nextElementSibling
              );
              _commentsButtonTopEl.className =
                p.nextElementSibling.firstElementChild.className;
              return true;
            }
            break;
        }
        log("failed to insert top comments button");
        _commentsButtonTopEl = null;
        return false;
      }

      function onClickCloseRules() {
        document
          .querySelector(".comments-contents .forum-rules")
          .classList.add("hide");
        storeSetting("_444hsz_announcement_read", 1);
        document.querySelector(
          ".comments-settings label>input#rulesToggle"
        ).checked = false;
      }

      function onClickToggleSettings() {
        document
          .querySelector(".comments-settings")
          .classList.toggle("collapse");
        document
          .querySelector("div#comments_tabs .titlebar button.button-settings")
          .classList.toggle("active");
      }

      function onClickRulesToggle() {
        document
          .querySelector(".comments-contents .forum-rules")
          .classList.toggle("hide");
        storeSetting("_444hsz_announcement_read", +!this.checked);
      }

      function onClickAutoloadToggle() {
        storeSetting("_444hsz_autoload_comments", +this.checked);
      }

      function initRecommendationsToggle() {
        function addHideStyle() {
          var style = document.createElement("style");
          style.id = "recommendationsToggleStyle";
          style.innerHTML =
            "#disqus_recommendations { visibility: hidden; height: 0; }";
          document.getElementsByTagName("head")[0].appendChild(style);
        }

        function onClickRecommendationsToggle() {
          if (null !== document.querySelector("#recommendationsToggleStyle")) {
            document.querySelector("#recommendationsToggleStyle").remove();
            storeSetting("_444hsz_show_disqus_recommendations", 1);
          } else {
            addHideStyle();
            storeSetting("_444hsz_show_disqus_recommendations", 0);
          }
        }

        document.querySelector(
          ".comments-settings label>input#recommendationsToggle"
        ).onclick = onClickRecommendationsToggle;
        if (null == document.querySelector("#recommendationsToggleStyle")) {
          addHideStyle();
        }
      }

      function onChangeUserForumShortname() {
        _userForumShortName = this.value
          ? this.value
          : _defaultUserForumShortName;
        storeSetting("_444hsz_user_forum_shortname", _userForumShortName);
      }

      function onKeypressUserForumShortname(e) {
        return /[a-z\d\-]/.test(e.key);
      }

      document.querySelector(".comments-toggle").onclick =
        onClickCommentsButton;
      if (insertTopCommentsButton()) {
        document.querySelector(".comments-toggle-top").onclick =
          onClickTopCommentsButton;
      }

      document.querySelector(
        "#comments_tabs .titlebar button.button-sidebar"
      ).onclick = onClickSidebarToggle;
      document.querySelector(
        "#comments_tabs .titlebar button.button-settings"
      ).onclick = onClickToggleSettings;

      document.getElementById("tab-user").onclick = onClickForumUser;
      document.getElementById("tab-444hu").onclick = onClickForum444hu;

      document.querySelector(
        ".comments-contents .forum-rules .close-button"
      ).onclick = onClickCloseRules;
      document.querySelector(
        ".comments-contents .forum-rules .text-close-button"
      ).onclick = onClickCloseRules;
      document.querySelector(".comments-settings input#rulesToggle").onclick =
        onClickRulesToggle;

      document.querySelector(
        ".comments-settings input#autoloadToggle"
      ).onclick = onClickAutoloadToggle;

      document.querySelector(
        ".comments-settings input#userForumShortName"
      ).onchange = onChangeUserForumShortname;
      document.querySelector(
        ".comments-settings input#userForumShortName"
      ).onkeypress = onKeypressUserForumShortname;

      initRecommendationsToggle();
    }

    function updateForumTabs() {
      if (_currentForumShortName != _userForumShortName) {
        document
          .getElementById("comments_wrapper")
          .classList.add("official-forum");
        document
          .getElementById("comments_wrapper")
          .classList.remove("user-forum");
        document.getElementById("tab-user").classList.remove("selected");
        document.getElementById("tab-444hu").classList.add("selected");
      } else {
        document
          .getElementById("comments_wrapper")
          .classList.remove("official-forum");
        document.getElementById("comments_wrapper").classList.add("user-forum");
        document.getElementById("tab-user").classList.add("selected");
        document.getElementById("tab-444hu").classList.remove("selected");
      }
    }

    function applySettings() {
      if (loadSetting("_444hsz_user_forum_shortname")) {
        _userForumShortName = loadSetting("_444hsz_user_forum_shortname");
        if (["444hsz3", "444hsz2", "negy"].includes(_userForumShortName)) {
          _userForumShortName = _defaultUserForumShortName;
        }
        document.querySelector(
          ".comments-settings input#userForumShortName"
        ).value =
          _userForumShortName == _defaultUserForumShortName
            ? ""
            : _userForumShortName;
      }

      if (loadSetting("_444hsz_user_forum_enabled") == 1) {
        _currentForumShortName = _userForumShortName;
      }

      updateForumTabs();

      if (loadSetting("_444hsz_announcement_read") == 1) {
        document
          .querySelector(".comments-contents .forum-rules")
          .classList.add("hide");
        document.querySelector(
          ".comments-settings input#rulesToggle"
        ).checked = false;
      }

      if (loadSetting("_444hsz_show_disqus_recommendations") == 1) {
        document
          .querySelector(".comments-settings input#recommendationsToggle")
          .click();
      }

      if (loadSetting("_444hsz_autoload_comments") == 1) {
        document.querySelector(
          ".comments-settings input#autoloadToggle"
        ).checked = true;
        document.querySelector(".comments-toggle").click();
      }
    }

    function initCommentsSection() {
      _commentsSectionTempEl = _commentsSectionEl.cloneNode(true);
      if (_parentEl.classList.contains("ad-wrapper")) {
        _parentEl = _parentEl.parentElement;
      }
      switch (_commentsSectionInsertMethod) {
        case 0:
          _parentEl.insertBefore(
            _commentsSectionTempEl,
            _parentEl.firstElementChild
          );
          break;
        case 1:
        case 3:
          _parentEl.insertBefore(_commentsSectionTempEl, null);
          _commentsSectionTempEl.className =
            _parentEl.firstElementChild.className;
          break;
        case 2:
          _parentEl.insertBefore(_commentsSectionTempEl, null);
          _commentsSectionTempEl.className =
            _commentsSectionTempEl.previousElementSibling.className;
          break;
      }
    }

    function reset() {
      if (typeof DISQUS !== "undefined") DISQUS.reset();
      if (typeof DISQUS_RECOMMENDATIONS !== "undefined")
        DISQUS_RECOMMENDATIONS.reset();

      _commentsLoaded = false;

      let el;
      if ((el = document.querySelector("#ap-article-footer1"))) {
        // normal article
        _commentsSectionInsertMethod = 0;
        _parentEl = el.parentElement;
      } else if ((el = document.querySelector("aside"))) {
        // livereport list
        _commentsSectionInsertMethod = 1;
        _parentEl = el.previousElementSibling.firstElementChild;
      } else if ((el = document.querySelector("article > div > footer"))) {
        // livereport single item
        _commentsSectionInsertMethod = 2;
        _parentEl = el.parentElement.parentElement;
      } else if ((el = document.querySelector("#toolbar-dropdown-target"))) {
        // livereport list with rendered no sidebar
        _commentsSectionInsertMethod = 3;
        _parentEl =
          el.nextElementSibling.lastElementChild.firstElementChild
            .firstElementChild;
      }

      if (null !== el) {
        log("Insert method: " + _commentsSectionInsertMethod);
        if (null !== _commentsButtonTopEl) {
          _commentsButtonTopEl.remove();
          _commentsButtonTopEl = null;
        }

        if (null !== _commentsSectionTempEl) {
          _commentsSectionTempEl.remove();
          _commentsSectionTempEl = null;
        }

        _headContentAvailable = false;

        let btns = document.evaluate(
          "//button[contains(., 'Kommentek mutatása')]",
          document,
          null,
          XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
          null
        );
        if (btns.snapshotLength) {
          for (let i = 0; i < btns.snapshotLength; i++) {
            let btn = btns.snapshotItem(i);
            if (!btn.classList.contains("comments-toggle")) {
              btn.remove();
              log("Article commentable: yes");
              break;
            }
          }
        } else {
          log("Article commentable: no");
        }
        return true;
      }
      return false;
    }

    function init() {
      console.group("%c[444hsz]", "color: #29af0a;", "log");
      if (pageIsArticle()) {
        if (reset()) {
          initCommentsSection();
          initSidebar();
          initButtons();
          applySettings();
          scrollToHash();
          //trackPageChange(); //TODO: maybe uncomment this after 444 fixed the duplicate head-layout rendering issue
          log(
            "Added comments section for: '" +
              _emberRouter.get("currentRoute.attributes.slug") +
              "'"
          );
          _commentsSectionLoadRetries--;
        } else {
          log(
            "Failed to add comments section for: '" +
              _emberRouter.get("currentRoute.attributes.slug") +
              "'"
          );
          if (_commentsSectionLoadRetries > 0) {
            _commentsSectionLoadRetries--;
            log("Retry #" + _commentsSectionLoadRetries);
            init();
          }
        }
      } else {
        log("not on article page, doing nothing");
      }
      console.groupEnd();
    }

    function startInit() {
      _commentsSectionLoadRetries = 0;
      init();
    }

    _emberRouter.on("willTransition", trackPageChange);
    _emberRouter.on("didTransition", () => {
      if (!pageIsArticle()) {
        trackPageChange();
      }
      return true;
    });

    Ember.run.schedule("afterRender", startInit); // when page is rendered by backend (on first pageload)

    // when page is rendered on the client
    Ember.subscribe("render.component", {
      before(name, timestamp, payload) {},
      after(name, timestamp, payload, beganIndex) {
        switch (payload.containerKey) {
          case "component:head-content":
            if (pageIsArticle()) {
              _headContentAvailable = true;
            }
            break;
          case "component:head-layout":
            if (_headContentAvailable && !payload.initialRender) {
              if (pageChanged()) {
                startInit();
              }
            }
            break;
        }
      },
    });
  }
})();
