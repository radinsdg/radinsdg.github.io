(function () {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
        document.body.classList.add("dark-mode");
    }
})();

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.innerText = isDark ? "☀️" : "🌙";
}

document.addEventListener("DOMContentLoaded", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const btn = document.querySelector(".theme-toggle");
    if (btn) btn.innerText = isDark ? "☀️" : "🌙";
});
