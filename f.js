const heart = document.getElementById("heart");

const centerX = 350;
const centerY = 350;

let words = [];

for (let scale = 11; scale <= 17; scale++) {

    for (let i = 0; i < 120; i++) {

        const angle = i * (Math.PI * 2) / 120;

        const x =
            16 * Math.pow(Math.sin(angle), 3) * scale;

        const y =
            (
                13 * Math.cos(angle)
                - 5 * Math.cos(2 * angle)
                - 2 * Math.cos(3 * angle)
                - Math.cos(4 * angle)
            ) * scale;

        words.push({
            x: centerX + x,
            y: centerY - y
        });
    }
}

let i = 0;

function drawHeart() {

    if (i >= words.length) {
        return;
    }

    const text = document.createElement("div");

    text.className = "love";
    text.innerText = "I love you";

    text.style.left = words[i].x + "px";
    text.style.top = words[i].y + "px";

    heart.appendChild(text);

    i++;

    setTimeout(drawHeart, 120);
}

drawHeart();