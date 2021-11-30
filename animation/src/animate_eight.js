const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");

document.querySelector("#togBtn").addEventListener("click", function () {
    if (this.checked) {
        dot1.style.animationPlayState = "running";
        dot2.style.animationPlayState = "running";
    } else {
        dot1.style.animationPlayState = "paused";
        dot2.style.animationPlayState = "paused";
    }
});