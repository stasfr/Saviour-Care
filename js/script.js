const burger = document.querySelector(".burger");
const menuList = document.querySelector(".header__menu");

if (burger) {
  burger.addEventListener("click", (event) => {
    document.body.classList.toggle("_lock");
    burger.classList.toggle("_active");
    menuList.classList.toggle("_active");
  });
}
