// Select the hamburger button and menu.
const burgerButton = document.querySelector("#burger-btn");
const burgerMenu = document.querySelector("#burger-menu");


// Toggle the hamburger menu when the button is clicked.
burgerButton.addEventListener("click", function () {

    // Add or remove the "open" class.
    burgerMenu.classList.toggle("open");


    // Check whether the menu is currently open.
    const isOpen = burgerMenu.classList.contains("open");


    // Update the accessibility state of the button.
    burgerButton.setAttribute("aria-expanded", isOpen);
});