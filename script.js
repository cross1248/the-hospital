/* ♰ Website made by lorna(cross) ♰ */
const text = "Welcome to BLOODBATH...";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.getElementById("intro").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
document.getElementById("intro").style.fontSize = "20px";
window.onload = typeWriter;
document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title");
    const closeLightbox = document.getElementById("close-lightbox");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const images = document.querySelectorAll(".clickable-image");
    if (lightbox && lightboxImage && lightboxTitle && closeLightbox && prevBtn && nextBtn && images.length > 0) {
        let currentIndex = 0;
        function openLightbox(index) {
            currentIndex = index;
            lightboxImage.src = images[currentIndex].src;
            const titleElement = images[currentIndex].closest(".image-container")?.querySelector(".image-title");
            lightboxTitle.textContent = titleElement ? titleElement.textContent : "No Title";
            lightbox.classList.add("show");
            document.body.classList.add("lightbox-open");
        }
        function closeLightboxFunc() {
            lightbox.classList.remove("show");
            document.body.classList.remove("lightbox-open");
        }
        function changeLightboxImage(step) {
            currentIndex += step;
            if (currentIndex >= images.length) currentIndex = 0;
            if (currentIndex < 0) currentIndex = images.length - 1;
            lightboxImage.src = images[currentIndex].src;
            const titleElement = images[currentIndex].closest(".image-container")?.querySelector(".image-title");
            lightboxTitle.textContent = titleElement ? titleElement.textContent : "No Title";
        }
        images.forEach((image, index) => {
            image.addEventListener("click", () => openLightbox(index));
        });
        closeLightbox.addEventListener("click", closeLightboxFunc);
        lightbox.addEventListener("click", (event) => {
            if (event.target === lightbox) closeLightboxFunc();
        });
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeLightboxFunc();
            if (event.key === "ArrowRight") changeLightboxImage(1);
            if (event.key === "ArrowLeft") changeLightboxImage(-1);
        });
        prevBtn.addEventListener("click", () => changeLightboxImage(-1));
        nextBtn.addEventListener("click", () => changeLightboxImage(1));
    }
    const discordContainer = document.getElementById("discord-container");
    if (discordContainer) {
        discordContainer.addEventListener("mousemove", (e) => {
            let x = (e.clientX / window.innerWidth - 0.5) * 10;
            let y = (e.clientY / window.innerHeight - 0.5) * 10;
            discordContainer.style.setProperty("--tiltX", `${y}deg`);
            discordContainer.style.setProperty("--tiltY", `${-x}deg`);
        });
        discordContainer.addEventListener("mouseleave", () => {
            discordContainer.classList.add("fade-out");
            setTimeout(() => {
                discordContainer.classList.remove("fade-out");
            }, 400);
        });
    }
    const img = document.querySelector(".vimg1");
    if (img) {
        img.addEventListener("mouseleave", () => {
            if (img.classList.contains("vimg1")) {
                img.classList.replace("vimg1", "vimg2");
            } else {
                img.classList.replace("vimg2", "vimg1");
            }
        });
    }
});
let originalTitle = "♰ THE HOSPITAL";
let animatedTitles = ["♰ BLOODBATH", "♰ クロス", "/eknZdffevd", "FORGET", "𝐌𝐚𝐝𝐞 𝐛𝐲 LORNA(CROSS)"];
let index = 0;
setInterval(() => {
    document.title = animatedTitles[index % animatedTitles.length];
    index++;
}, 1100);
window.onscroll = () => {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }
};
const hallBtn = document.getElementById("hallBtn");
const notice = document.getElementById("newNotice");

const observer = new IntersectionObserver(([entry]) => {
    notice.style.display = entry.isIntersecting ? "none" : "block";
});
observer.observe(hallBtn);
notice.addEventListener("click", () => {
    hallBtn.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    hallBtn.classList.add("highlight");

    setTimeout(() => {
        hallBtn.classList.remove("highlight");
    }, 2000);
});
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToRecent() {
    const elements = document.querySelectorAll("b");
    elements.forEach(el => {
        if (el.textContent.trim() === "The most recent events, are following bellow:") {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    });
}