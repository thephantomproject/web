(function () {
    'use strict';

    // display navbar

    let overlayActive = false;
    let toggleFunction = (e) => {
        console.log("toggle");
        e.preventDefault();
        if (!overlayActive) {
            document.getElementById("nav-overlay").style.display = "block";
        } else {
            document.getElementById("nav-overlay").style.display = "none";
        }
        overlayActive = !overlayActive;
    };
    document.getElementById("nav-icon").addEventListener("click", toggleFunction);
    document.getElementById("close-nav").addEventListener("click", toggleFunction);

}());
