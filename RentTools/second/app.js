document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu");
    const secHeader = document.getElementById("sec_header");

    menuButton.addEventListener("click", function () {
        if (secHeader.style.display === "none" || secHeader.style.display === "") {
            secHeader.style.display = "grid";  
        } else {
            secHeader.style.display = "none";
        }
    });
});

// security

// document.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
// });

// document.addEventListener('keydown', (event) => {
//     // Block common shortcuts for viewing source or opening DevTools
//     if (
//         event.key === "F12" || // F12 key for DevTools
//         (event.ctrlKey && event.key === "u") || // Ctrl + U for View Source
//         (event.ctrlKey && event.shiftKey && event.key === "I") || // Ctrl + Shift + I for DevTools
//         (event.ctrlKey && event.shiftKey && event.key === "J") || // Ctrl + Shift + J for Console
//         (event.ctrlKey && event.key === "S") // Ctrl + S for Save Page
//     ) {
//         event.preventDefault();
//     }
// });


// document.addEventListener('selectstart', (event) => {
//     event.preventDefault();
// });

// document.addEventListener('dragstart', (event) => {
//     event.preventDefault();
// });