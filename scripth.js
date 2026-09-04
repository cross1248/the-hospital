document.addEventListener("DOMContentLoaded", () => {
    const rgbTitle = document.querySelector('.rgb-title');
    setInterval(() => {
        if (rgbTitle) {
            const hue = Math.floor(Math.random() * 360);
            rgbTitle.style.textShadow = `0 0 20px hsl(${hue}, 100%, 70%), 0 0 40px hsl(${(hue + 90) % 360}, 100%, 65%), 0 0 60px rgba(255, 0, 0, 0.8)`;
        }
    }, 700);
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const lightboxTitle = document.getElementById("lightbox-title");
    const closeBtn = document.getElementById("close-lightbox");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const images = document.querySelectorAll(".clickable-image");
    let currentIndex = 0;
    function openLightbox(index) {
        currentIndex = index;
        lightboxImage.src = images[currentIndex].src;
        const card = images[currentIndex].closest(".server-card");
        lightboxTitle.textContent = card ? card.querySelector(".server-name").textContent : "Monument";
        lightbox.classList.add("show");
    }
    function closeLightbox() {
        lightbox.classList.remove("show");
    }
    function changeImage(step) {
        currentIndex = (currentIndex + step + images.length) % images.length;
        openLightbox(currentIndex);
    }
    images.forEach((img, i) => img.addEventListener("click", () => openLightbox(i)));
    closeBtn.addEventListener("click", closeLightbox);
    prevBtn.addEventListener("click", () => changeImage(-1));
    nextBtn.addEventListener("click", () => changeImage(1));

    document.addEventListener("keydown", e => {
        if (!lightbox.classList.contains("show")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") changeImage(-1);
        if (e.key === "ArrowRight") changeImage(1);
    });
    let index = 0;
    let animatedTitles = ["𝐌𝐨𝐧𝐮𝐦𝐞𝐧𝐭𝐬 𝐨𝐟 Torment", "/2k5XNaUSEm", "𝐇𝐚𝐥𝐥 𝐨𝐟 SHAMEEEEE ♰", "𝐌𝐚𝐝𝐞 𝐛𝐲 CR0$$"];
    setInterval(() => {
        document.title = animatedTitles[index % animatedTitles.length];
        index++;
    }, 1100);
    // const badges = document.querySelectorAll('.server-badge');
    // const badgeTexts = ["ANNIHILATED", "PURGED", "CRUCIFIED", "ERADICATED", "DESTROYED", "OBLITERATED", "EXECUTED", "WIPED", "NUKED", "MASSBANNED", "OWNED", "OWNED BY CROSS", "CROSSED", "SAY GOODBYE TO THIS SERVER", "GOOD RIDDANCE"];
    // function glitchType(badge, finalText) {
    //     const chars = "8&(%#%!?@#★☆◆◇■□▲▼◊♦♰†";
    //     let current = "";
    //     let i = 0;
    //     const interval = setInterval(() => {
    //         current = finalText.substring(0, i) + chars[Math.floor(Math.random() * chars.length)];
    //         badge.textContent = current;
    //         i++;
    //         if (i > finalText.length) {
    //             clearInterval(interval);
    //             badge.textContent = finalText;
    //         }
    //     }, 60);
    // }
    // setInterval(() => {
    //     badges.forEach(badge => {
    //         const randomText = badgeTexts[Math.floor(Math.random() * badgeTexts.length)];
    //         glitchType(badge, randomText);
    //     });
    // }, 4500);
    const lightning = document.querySelector(".lightning-flash");
    const rain = document.querySelectorAll(".rain");
    const dim = document.querySelector(".storm-dim-overlay");

    function flash() {
        if (!lightning) return;
        lightning.classList.remove("active");
        void lightning.offsetWidth;
        lightning.classList.add("active");
    }
    function stormLightning() {
        if (!lightning) return;
        flash();
        if (Math.random() > 0.7) setTimeout(flash, Math.random() * 200 + 50);
        if (dim && Math.random() > 0.8) {
            dim.classList.add("active");
            setTimeout(() => dim.classList.remove("active"), 120);
        }
        setTimeout(stormLightning, Math.random() * 18000 + 8000);
    }
    function rainStorm() {
        rain.forEach(drop => {
            if (Math.random() > 0.6) drop.classList.add("fast");
        });
        setTimeout(() => rain.forEach(drop => drop.classList.remove("fast")), 2500);
        setTimeout(rainStorm, 12000);
    }
    const backToBottomBtn = document.getElementById("backToBottomBtn");
    function toggleBottomButton() {
        let bottomDistance = 1500;
        if (window.innerWidth <= 768) bottomDistance = 2000;
        const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - bottomDistance;
        backToBottomBtn.style.display = atBottom ? "none" : "block";
    }
    backToBottomBtn.addEventListener("click", () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
    window.addEventListener("scroll", toggleBottomButton);
    window.addEventListener("resize", toggleBottomButton);
    toggleBottomButton();

    stormLightning();
    rainStorm();
});