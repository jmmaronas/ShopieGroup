import { db } from "./db.js"
import { mostrarItem } from "./item.js";


const courseContainer = document.getElementById("courseContainer");

window.addEventListener("DOMContentLoaded", () => {
    if (location.hash == "#courseContainer") {
        console.log("gol")
        renderCourse()
        document.location.href = "#courseContainer"
    } else {
        if (location.hash) {
            const pharam = location.hash.slice(1);
            const curso = db.products.find((e) => e.id === pharam);
            mostrarItem(curso, courseContainer);
        } else {
            renderCourse();
        }
    }
});


function renderCourse() {
    console.log("entro")
    courseContainer.innerHTML = "";
    db.products.forEach(product => {
        courseContainer.innerHTML += `
        <div class="mb-4">
            <div class="card h-100">
                <img src="${product.img}" class="card-img-top" alt="imagen-curso">
                <div class="card-body">
                    <h5 class="card-title text-center fs-4 mb-4 fw-bold">${db.metodos.capitalize(product.title)}</h5>
                    <p class="card-text">${product.description}</p>
                </div>
                <div class="card-footer p-2 pt-0 border-top-0 bg-transparent">
                    <div class="text-center"><a class="btnCurso btn btn-outline-dark mt-auto" href="#${product.id}">Ver detalles del curso</a></div>
                </div>
            </div>
        </div>
        `
    });
};
window.addEventListener("hashchange", (e) => {
    if (location.hash == "#courseContainer") {
        console.log("gol")
        renderCourse()
        document.location.href = "#courseContainer"
    } else {
        const pharam = location.hash.slice(1);
        //document.getElementsByClassName("header").style.backgroundImage=""
        const curso = db.products.find((e) => e.id === pharam);
        mostrarItem(curso, courseContainer);
    }
});