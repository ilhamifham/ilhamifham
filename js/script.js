const navButton = document.getElementById("navButton");
navButton.addEventListener('click', () => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("max-h-screen");
    nav.classList.toggle("overflow-visible");
    nav.classList.toggle("visible");
    nav.classList.toggle("opacity-100");
})