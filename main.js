const info = document.getElementById("info");
window.addEventListener("load", () => {
    setTimeout(() => {
        info.classList.remove("v")
        info.style.animationName = "informacion";
    },1200)
})