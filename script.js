document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopBtn = document.getElementById("scroll-to-top");
    const scrollToRoomsBtn = document.querySelector(".scroll-down");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Add click event for the "scroll down" button
    scrollToRoomsBtn.addEventListener("click", () => {
        document.getElementById('rooms-section').scrollIntoView({ behavior: 'smooth' });
    });

    // Event listener for the "View Room Details" button
    const button = document.getElementById('but');
    if (button) {
        button.addEventListener('click', () => {
            alert("ROOM IS NOT AVAILABLE");
        });
    }
});
