import { cursos } from "./db.js"
import { information } from "./information.js";
import { mostrarItem } from "./item.js";

const courseContainer = document.getElementById("courseContainer");
const sectionInformation=document.getElementById("information");
const header=document.getElementById("header");

function renderCourse() {
    courseContainer.innerHTML = "";
    cursos.forEach(curso => {
        courseContainer.innerHTML += `
        <div class="card mb-3 col-md-5" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="${curso.img}" class="img-fluid rounded-start" alt="${curso.img}">
                    </div>
                <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${curso.title}</h5>                    
                </div>
                <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btnCurso btn btn-outline-dark mt-auto" href="#${curso.id}">Ver detalles del curso</a></div>
                    
                </div>
            </div>
            <div class="d-flex justify-content-around ">
                <p class="card-text"><small class="text-muted">Duracion: ${curso.duration} semanas</small></p>
                <p class="card-text"><small class="text-muted">Modalidad: ${curso.modality}</small></p>
            </div>
        </div>
        `
    });
};

function renderInformation(){
    information.forEach(element=>{
        document.getElementById("informationContainer").innerHTML+=`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title text-info mb-2">${element.title}</h3>
                <p class="card-text">${element.description}</p>
            </div>
        </div>
        `
    })
};

window.addEventListener("DOMContentLoaded", () => {
    if (location.hash == "#courseContainer") {
        
        renderCourse()
        document.location.href = "#courseContainer"
    } else {
        if (location.hash) {
            const pharam = location.hash.slice(1);
            const curso = cursos.find((e) => e.id === pharam);
            header.toggleAttribute("hidden");
            sectionInformation.toggleAttribute("hidden")
            mostrarItem(curso, courseContainer);
        } else {
            renderCourse();
            renderInformation();                       
        }
    }
});

window.addEventListener("hashchange", (e) => {
    if (location.hash == "#courseContainer") {  
        header.removeAttribute("hidden")            
        sectionInformation.removeAttribute("hidden")
        renderCourse();
        renderInformation();
        document.location.href = "#courseContainer"
    } else {
        header.hidden=true;
        sectionInformation.hidden=true;
        const pharam = location.hash.slice(1);
        const curso = cursos.find((e) => e.id === pharam);
        mostrarItem(curso, courseContainer);
    }
});