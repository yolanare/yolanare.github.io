const options = {
    animateHistoryBrowsing: true
};
const swup = new Swup(options);

window.addEventListener('mousemove', function(event) {
    var x = event.clientX;
    var y = event.clientY;
    console.log("X: " + x + ", Y: " + y);
});



// Y3-MENU
function Y3Init() {
    if(document.querySelector("#Y3-menu-container")) {
        var Y3arrowsID = ["TL","TR","BM"],
            Y3arrowsOthersID = [["TR","BM"],["TL","BM"],["TL","TR"]],
            Y3hrefs = ["/what/", "/more/", "/about/"],
            Y3links = document.querySelector("#Y3-links"),
            Y3logo = document.querySelector("#Y3-logo"),
            Y3logoC = document.querySelector("#Y3-logo-container"),
            y3aCount = 1,
            isMobile = undefined;

        function checkWinSize() { if(window.innerWidth > 1100) { isMobile = false } else { isMobile = true }};
        window.addEventListener("resize", checkWinSize);
        checkWinSize();

        function Y3Spawn() {
            var doc = document.documentElement,
                Y3linksAll = document.querySelectorAll(".Y3-links"),
                Y3linktxtAll = document.querySelectorAll(".Y3-linktxt"),
                Y3lbgAll = document.querySelectorAll(".Y3-linksbg"),
                Y3logoStroke = document.querySelectorAll(".y3-stroke"),
                Y3linksWidth = Y3links.offsetWidth,
                Y3linksHeight = Y3links.offsetHeight,
                y3linkSpawnTr = "0.7s 0.2s cubic-bezier(0.5, 0, 0, 1)",
                Y3anBoom = document.querySelector("#y3an-boom > circle"),
                Y3anSlash1 = document.querySelector("#y3an-slash1"),
                Y3anSlash2 = document.querySelector("#y3an-slash2");

            setTimeout( function() { document.querySelector("#Y3-menu-container").style.opacity = 1; }, 50); // to be sure we don't see menu at loading

            Y3logoStroke.forEach( function (y3aStroke) {
                y3aStroke.style.transition = "none";
                y3aStroke.style.stroke = "var(--y-white)";
                y3aStroke.style.strokeWidth = "20px";
            });
            Y3lbgAll.forEach( function (y3lbg) { y3lbg.style.transition = "0.65s cubic-bezier(0.9, 0.5, 0, 1), background-color " + y3linkSpawnTr; });

            doc.style.setProperty('--y3logoC-left-prev', "calc(50% - (" + Y3logoC.offsetWidth + "px / 2))");
            doc.style.setProperty('--y3logoC-bottom-prev', "calc(50% - (" + Y3logoC.offsetHeight + "px / 2))");
            Y3logoC.classList.add("Y3logoC-prev");
            doc.style.setProperty('--y3links-height0-prev', "0");
            doc.style.setProperty('--y3links-heightN-prev', Y3linksHeight + "px");
            Y3links.classList.add("Y3links-prev");
            Y3linksAll.forEach( function (y3l) { y3l.classList.add("Y3linksAll-prev"); });
            Y3linktxtAll.forEach( function (y3ltxt) { y3ltxt.classList.add("Y3linktxtAll-prev"); });
            Y3lbgAll.forEach( function (y3lbg) { y3lbg.classList.add("Y3lbgAll-prev"); });
            Y3anSlash1.classList.add("Y3anSlash-prev");
            Y3anSlash2.classList.add("Y3anSlash-prev");
            if(isMobile == true) { Y3anSlash1.style.display = "none"; }

            if(isMobile == false) {
                Y3logo.style.transform = "scale(2) translate(92.5%, -200%)";
                Y3links.style.transform = "translateX(calc(-" + Y3linksWidth / 2 + "px + var(--y3m-size2)))";
            } else {
                Y3logo.style.transform = "scale(3) translate(85%, -200%)";
                Y3links.style.transform = "translateY(calc(-" + Y3linksHeight / 2 + "px - var(--y3m-m-margin)))";
            }

            setTimeout( function() {
                Y3logo.style.transition = "transform 1.25s cubic-bezier(0.25, 1, 0, 1)";
                Y3logo.style.transform = null;
                Y3logoStroke.forEach( function (y3aStroke) {
                    y3aStroke.style.transition = "1s cubic-bezier(0.8, 0.3, 0, 1), stroke 2s cubic-bezier(0.7, 0.2, 0, 1), stroke-width 1.5s cubic-bezier(0.9, 0.8, 0, 1)";
                    y3aStroke.style.stroke = "var(--y-grey)";
                    y3aStroke.style.strokeWidth = null;
                });
                setTimeout( function() {
                    Y3anBoom.setAttribute('r', "5" );
                    Y3anBoom.style.fill = "var(--y-white)";
                }, 700);
                setTimeout( function() {
                    Y3logoC.style.transition = "0.9s 0.1s cubic-bezier(0.3, 0.75, 0, 1), transform 0.5s 25ms cubic-bezier(0.1, 0.7, 0, 1)";
                    Y3logoC.classList.remove("Y3logoC-prev");
                    Y3linksAll.forEach( function (y3l) { y3l.style.color = "var(--y-black)"; });
                    Y3lbgAll.forEach( function (y3lbg) { y3lbg.classList.remove("Y3lbgAll-prev"); });
                    if(isMobile == false) {
                        Y3links.style.height = Y3linksHeight;
                        Y3links.style.transform = null;
                    } else { setTimeout( function() { Y3links.style.transform = null; }, 200); }
                    setTimeout( function() { Y3linksAll.forEach( function (y3l) { y3l.style.top = "0"; }); }, 200);
                    setTimeout( function() {
                        Y3anSlash2.classList.remove("Y3anSlash-prev");
                        setTimeout( function() {
                            Y3anSlash1.classList.remove("Y3anSlash-prev");
                            Y3anSlash1.classList.add("Y3anSlash-new");
                        }, 100);
                        Y3anSlash2.classList.add("Y3anSlash-new");
                    }, 90);
                    setTimeout( function() {
                        document.querySelectorAll("#Y3-logo > g[id] > *").forEach( function (y3aPath) { y3aPath.style.pointerEvents = "all"; });
                        setTimeout( function() {
                            Y3linktxtAll.forEach( function (y3ltxt) {
                                y3ltxt.classList.remove("Y3linktxtAll-prev");
                                y3ltxt.style.transition = "0.7s cubic-bezier(0.2, 0.5, 0, 1), padding 0s";
                            });
                        }, 200);
                    }, 300);
                    setTimeout( function() { // FINISH CLEAR
                        Y3links.style.height = null;
                        Y3links.style.backgroundColor = "transparent";
                        Y3links.classList.remove("Y3links-prev");
                        Y3logoC.style.transition = null;
                        Y3linksAll.forEach( function (y3l) { y3l.classList.remove("Y3linksAll-prev"); });
                        Y3lbgAll.forEach( function (y3lbg) { y3lbg.style.transition = null; });
                        document.querySelector("#Y3-anim").style.display = "none";
                        doc.style.setProperty('--y3logoC-left-prev', null);
                        doc.style.setProperty('--y3logoC-bottom-prev', null);
                        doc.style.setProperty('--y3links-height0-prev', null);
                        doc.style.setProperty('--y3links-heightN-prev', null);
                    }, 1250);
                }, 1000);
            }, 200);
        };
        if(document.hidden == true) { document.addEventListener("visibilitychange", Y3Spawn, { once: true }); } else { Y3Spawn(); }

        Y3arrowsID.forEach(function (y3aID) {
            var y3aIDPath = 'a[y3arrow="' + y3aID + '"]',
                y3a = document.querySelector("#Y3-logo > g[id='" + y3aID + "']"),
                y3l = document.querySelector(".Y3-links:nth-of-type(" + y3aCount + ")"),
                Y3linkbg = document.querySelector(y3aIDPath + " > .Y3-linksbg"),
                Y3linktxt = document.querySelector(y3aIDPath + " > .Y3-linktxt"),
                Y3ltxtTitle = document.querySelectorAll(y3aIDPath + " .Y3ltxt-title"),
                Y3ltxtPlus = document.querySelectorAll(y3aIDPath + " .Y3ltxt-plus"),
                Y3ltxtAll_TitleInitW = [],
                Y3arrowsOtherID = Y3arrowsOthersID[y3aCount - 1],
                Y3href = Y3hrefs[y3aCount - 1],
                y3TrPage = document.querySelector("#y3trpage");

            setTimeout( function() { // needs to let the font-fam init to get true width
                Y3ltxtTitle.forEach( function (y3ltxtTitle) {
                    Y3ltxtAll_TitleInitW.push(y3ltxtTitle.offsetWidth);});
                Y3ltxtPlus.forEach( function (y3ltxtPlus) {
                    y3ltxtPlus.style.width = y3ltxtPlus.offsetWidth + 2;
                    y3ltxtPlus.classList.add("Y3ltxt-hover");
                });
            }, 1000);

            function y3aEffect(arrowID, b, n) {
                var y3aPath = "#Y3-logo > g[id='" + arrowID + "'] ";
                if(b == true || Y3links.hasAttribute("focus") == true && n == true) {
                    var e = ["var(--y-black)", "var(--y-white)", "0.55s 50ms cubic-bezier(0.1, 0.7, 0, 1)"];
                } else { var e = [null, null, null]; }
                document.querySelector(y3aPath + ".y3-fill").style.fill = e[0];
                document.querySelector(y3aPath + ".y3-stroke").style.fill = e[1];
                document.querySelector(y3aPath + ".y3-fill").style.transition = e[2];
                document.querySelector(y3aPath + ".y3-stroke").style.transition = e[2];
            };
            function y3ALHover(b) {
                if(isMobile == false) {
                    if(b == true) {
                        y3ArrowOtherTr(b, true);
                        Y3linktxt.classList.add("Y3-linktxt-hover");
                        Y3ltxtPlus.forEach( function (y3ltxtPlus) { y3ltxtPlus.classList.remove("Y3ltxt-hover"); });
                    } else {
                        if(Y3linkbg.classList.contains("Y3-linkbg-focus") == false) {
                            y3ArrowOtherTr(b, true);
                            Y3linktxt.classList.remove("Y3-linktxt-hover");
                            Y3ltxtPlus.forEach( function (y3ltxtPlus) { y3ltxtPlus.classList.add("Y3ltxt-hover"); });
                        }
                    }
                }
                if(b == true) { Y3linkbg.classList.add("Y3-linkbg-hover");
                } else {
                    if(Y3linkbg.classList.contains("Y3-linkbg-focus") == false) { Y3linkbg.classList.remove("Y3-linkbg-hover"); }}
                if(b == true) { Y3logoC.classList.add("Y3L-Persp-" + y3aID);
                } else { Y3logoC.classList.remove("Y3L-Persp-" + y3aID); }
            };
            function Y3Focus() {
                y3ArrowOtherTr(true, true);
                y3a.style.transitionDelay = "0s !important";
                Y3links.classList.add("Y3-links-focus");
                Y3linkbg.classList.add("Y3-linkbg-focus");
                Y3arrowsID.forEach(function(y3aGID) { document.querySelector("#Y3-logo > g[id='" + y3aGID + "']").classList.add("Y3-arrow-focus"); });
                Y3links.setAttribute("focus", "");
                if(isMobile == false) {
                    y3aEffect(y3aID, true, true)
                    Y3linktxt.classList.add("Y3-linktxt-focus");
                } else {
                    y3aEffect(y3aID, false, false)
                    Y3logoC.classList.add("Y3L-Persp-" + y3aID);
                }
            };
            function Y3Click() {
                y3TrPage.style.transition = "none";
                y3TrPage.style.top = y3l.getBoundingClientRect().top + (y3l.offsetHeight / 2) + "px";
                y3l.style.zIndex = "22";
                Y3Focus();
                setTimeout(function () {
                    y3TrPage.style.transition = null;
                    swup.loadPage({ url: Y3href });
                    swup.on('animationInDone', function() {
                        y3TrPage.style.top = null;
                        swup.off('animationInDone');
                    });
                }, 100);
            };
            function Y3Active(b) {
                if(b == true) {
                    if(isMobile == false) {
                        Y3linktxt.classList.add("Y3-linktxt-active");
                        Y3logoC.classList.add("Y3L-Persp-active");
                    } else { Y3logoC.classList.add("Y3L-Persp-" + y3aID); }
                } else {
                    setTimeout( function() { Y3logoC.classList.remove("Y3L-Persp-active"); }, 75);
                    if(Y3linkbg.classList.contains("Y3-linkbg-focus") == false) {
                        Y3linktxt.classList.remove("Y3-linktxt-active");
                        if(isMobile == true) { Y3logoC.classList.remove("Y3L-Persp-" + y3aID); }
                    }
                }
            };
            function y3ArrowOtherTr(b, n) {
                var d = 1;
                Y3arrowsOtherID.forEach(function(y3aOID) {
                    y3aEffect(y3aOID, b, n);
                    d += 1;
                });
            };

            y3a.addEventListener("mouseover", function() { y3ALHover(true) });
            y3l.addEventListener("mouseover", function() { y3ALHover(true) });
            y3a.addEventListener("mouseout", function() { y3ALHover(false) });
            y3l.addEventListener("mouseout", function() { y3ALHover(false) });

            y3a.addEventListener("mousedown", function() { Y3Active(true) });
            y3l.addEventListener("mousedown", function() { Y3Active(true) });
            document.addEventListener("mouseup", function() { Y3Active(false) });

            y3a.addEventListener("click", Y3Click);
            y3l.addEventListener("click", Y3Click);

            y3aCount += 1;
        });
    }
}
Y3Init();
swup.on('contentReplaced', Y3Init);