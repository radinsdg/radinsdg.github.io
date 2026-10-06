document.addEventListener("DOMContentLoaded", () => {
    const logInLinks = document.querySelectorAll(".lg");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const firstname = localStorage.getItem("firstname");

    logInLinks.forEach((link) => {
        if (isLoggedIn === "true") {
            link.innerText = firstname ? `پروفایل ${firstname}` : "پروفایل من";
            link.setAttribute("href", link.getAttribute("href").replace("login.html", "profile.html"));
        }
    });
});
