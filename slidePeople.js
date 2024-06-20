const container1 = document.querySelector("#container1");
const container2 = document.querySelector("#container2");



const aparecerGian = () => {
    document.title = "Gianluca - Desenvolvedor Front-end"

    if (container1.classList.contains("aparecerContainer1")) {
        container1.classList.remove("aparecerContainer1");
        container1.classList.add("desaparecer");
    }
    if (container2.classList.contains("desaparecer")) {
        container2.classList.remove("desaparecer");
        container2.classList.add("aparecerContainer2");
    }
};

const aparecerJoao = () => {
    document.title = "João Gabriel - Desenvolvedor Web"

    if (container2.classList.contains("aparecerContainer2")) {
        container2.classList.remove("aparecerContainer2");
        container2.classList.add("desaparecer");
    }
    if (container1.classList.contains("desaparecer")) {
        container1.classList.remove("desaparecer");
        container1.classList.add("aparecerContainer1");
    }
};