function alternar() {
    let colors = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
    const button = document.getElementById("button");
    const color = document.querySelector(".color");
    const text = document.querySelector(".text");

    document.body.style.backgroundColor = colors;
    color.textContent = colors;
    color.style.color = colors;
    text.style.color = colors;
}