const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () { 
    alert("Podemos sentarnos juntos cualquier dia a observar la forma de las nubes y la colisión de nuestras vidas,pintando nuevas galaxias <3")
});

const noBtn = document.querySelector("#noBtn");

noBtn.addEventListener("mouseover", function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setProperty("transform","translate(-${random}%,-${randomY}%");
    })