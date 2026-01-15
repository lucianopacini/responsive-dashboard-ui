const toggle = document.getElementById("theme-toggle");
const body = document.body;

// 1️⃣ On load: check saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
}

// 2️⃣ On click: toggle theme
toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

    localStorage.setItem(
        "theme",
        body.classList.contains("dark") ? "dark" : "light"
    );
});

// 3️⃣ Active sidebar link
const links = document.querySelectorAll(".nav-link");
const currentPage = window.location.pathname.split("/").pop();

// Highlight active sidebar link based on current page
//  Loop through links and highlight the current page
links.forEach(link => {
    const href = link.getAttribute("href");

    if (
        href === currentPage ||
        (currentPage === "" && href === "index.html")
    ) {
        link.classList.add("active");
    }
});





