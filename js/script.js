
/* =========================================
   NOIR - Main JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("NOIR website loaded successfully.");

    // Close mobile navbar after clicking a link

    const navLinks = document.querySelectorAll(
        ".navbar-collapse .nav-link"
    );

    const navbarCollapse = document.querySelector(
        ".navbar-collapse"
    );

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (navbarCollapse.classList.contains("show")) {

                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(
                    navbarCollapse
                );

                bsCollapse.hide();
            }

        });

    });

});
