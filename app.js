function openHamburgerMenu() {
    let media = document.getElementById("hamburger-items");
    if (media.classList.contains("reveal")) {
        media.classList.remove("reveal");
    }
    else {
        media.classList.add("reveal");
    }
}