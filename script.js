document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const question = document.getElementById("question");
    const title = document.getElementById("title");
    const music = document.getElementById("bgMusic");
    const loveMeter = document.getElementById("loveMeter");
    const slider = loveMeter.querySelector("input");
    const percent = document.getElementById("percent");
    const meterText = document.getElementById("meterText");

    /* 🎵 MUSIC */
    const playMusic = () => {
        music.volume = 0.5;
        music.play().catch(() => {});
    };

    /* 😈 NO BUTTON RUN AWAY */
    let escapes = 0;

    const moveNo = () => {
        escapes++;
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;

        noBtn.style.left = Math.random() * maxX + "px";
        noBtn.style.top = Math.random() * maxY + "px";

        noBtn.classList.add("shake");
        setTimeout(() => noBtn.classList.remove("shake"), 300);

        if (escapes === 5) noBtn.textContent = "Just say yes 😭";
        if (escapes >= 8) noBtn.style.display = "none";
    };

    noBtn.addEventListener("mouseenter", moveNo);
    noBtn.addEventListener("touchstart", e => {
        e.preventDefault();
        moveNo();
    });

    /* 💖 YES FLOW */
    yesBtn.addEventListener("click", () => {
        playMusic();
        question.textContent = "How much do you love me?";
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
        loveMeter.classList.remove("hidden");
    });

    /* ❤️ LOVE METER */
    slider.addEventListener("input", () => {
        percent.textContent = slider.value + "%";

        if (slider.value > 5000) meterText.textContent = "WOOOW 🙈💝";
        else if (slider.value > 1000) meterText.textContent = "To infinity 🚀💖";
        else if (slider.value > 100) meterText.textContent = "Awukho serious 😔";
    });

    slider.addEventListener("change", () => {
        title.textContent = "Yeboo! 💝";
        question.textContent = "I'm the luckiest person in the world 💋❤️";
        loveMeter.classList.add("hidden");
        explodeHearts();
    });

    /* 💥 CONFETTI HEART EXPLOSION */
    function explodeHearts() {
        for (let i = 0; i < 40; i++) {
            const heart = document.createElement("div");
            heart.textContent = "💖";
            heart.style.position = "absolute";
            heart.style.left = Math.random() * window.innerWidth + "px";
            heart.style.top = Math.random() * window.innerHeight + "px";
            heart.style.fontSize = "24px";
            document.body.appendChild(heart);

            setTimeout(() => heart.remove(), 2000);
        }
    }

    /* 💕 FLOATING HEARTS BACKGROUND */
    setInterval(() => {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.textContent = ["❤️","💖","💝","💗"][Math.floor(Math.random()*4)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = 8 + Math.random() * 5 + "s";
        document.getElementById("floating-hearts").appendChild(heart);

        setTimeout(() => heart.remove(), 12000);
    }, 500);
});
