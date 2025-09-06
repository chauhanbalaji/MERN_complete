// Select the button and body
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check if dark mode was enabled previously
if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
}

// Toggle dark mode on button click
darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save the mode in localStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
    } else {
        localStorage.setItem("dark-mode", "disabled");
    }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
