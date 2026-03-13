const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

if (menuBtn && closeBtn && drawer && overlay) {
  function openDrawer() {
    drawer.classList.add("is-open");
    overlay.hidden = false;
    drawer.setAttribute("aria-hidden", "false");
  }

  function closeDrawer() {
    drawer.classList.remove("is-open");
    overlay.hidden = true;
    drawer.setAttribute("aria-hidden", "true");
  }

  menuBtn.addEventListener("click", openDrawer);
  closeBtn.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeDrawer();
  });
}