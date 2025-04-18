document.addEventListener("astro:page-load", () => {
    document.querySelector("#menu-toggle").addEventListener("click", () => {
      document.querySelector("#mobile-menu").classList.toggle("hidden");
    });
  });