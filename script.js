function toggleMessage() {
    let message = document.getElementById("message");
    let heart = document.querySelector(".heart");

    if (message.style.display === "none" || message.style.display === "") {
        message.style.display = "block";
        heart.style.transform = "rotate(-45deg) scale(1.2)";
    } else {
        message.style.display = "none";
        heart.style.transform = "rotate(-45deg) scale(1)";
    }
}