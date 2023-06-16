let proyectosContainer = document.querySelector(".orden");
let menu = document.querySelector(".navbarToggler");
let nav = document.querySelector(".ul ul");

menu.addEventListener("click", () => {
    nav.classList.toggle("transformY");
})

function agregarProyectos() {
    proyectos.forEach(proyecto => {
        let card = document.createElement("div");
        card.classList.add("proyecto");
        card.innerHTML = `
        <div class>
        <div class="sitio">
                            <a href="${proyecto.url}/" target="_blank">
                                <img src="../img/${proyecto.img}" class="imgHover" alt="screen página Portfolio">
                                <div class="capa">
                                    <p>Ir al sitio</p>
                                </div>
                                </a>
                                </div>
                                <a href="${proyecto.urlGithub}/" target="_blank">
                                <button class="btnGithub">ir al repositorio</button>
                                </a>
                                </div>
                        <p>${proyecto.texto}</p>
        `;

        proyectosContainer.append(card);
    })
}
agregarProyectos();