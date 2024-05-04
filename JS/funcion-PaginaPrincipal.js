const TemaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-sun-fill");
    
}

const TemaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#dl-icon").setAttribute("class", "bi bi-moon-stars-fill");
    
}
const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light"?
    TemaOscuro() : TemaClaro();
}