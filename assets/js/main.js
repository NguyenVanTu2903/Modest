var menuBtnList = document.querySelectorAll("[data-toggle-menu]");

menuBtnList.forEach((btn) => {
    btn.addEventListener("click", () => {
        var menuName = btn.dataset.toggleMenu;
        var menu = document.querySelector(`[data-menu=${menuName}]`);

        if (!menu.classList.contains("active")) {
            menu.classList.add("active");
        } else {
            menu.classList.remove("active");
        }
    });
});
