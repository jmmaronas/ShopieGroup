export function mostrarItem(curso, container) {
  container.innerHTML = "";
  container.innerHTML = `
        <div class="container d-flex justify-content-center p-0 p-lg-5 col-lg-8">
            <div class="card m-1 m-lg-5">
                <img src="${curso.img}" class="card-img-top" alt="${curso.img}" autofocus>
                <div class="card-body">
                    <h3 class="card-title text-center fs-3 my-4 fw-bold">${curso.title}</h3>
                    <p class="card-text">${curso.description}</p>
                    <h5 class="card-title">Al finalizar el curso podras:</h5>
                    <ul id="skills${curso.id}"></ul>
                    <h5 class="card-title">Unidades:</h5>
                    <ol id="units${curso.id}"></ol>
                    <p class="card-text">Duracion: ${curso.duration} semanas</p>
                    <p class="card-text">Modalidad: ${curso.modality}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
                <div class="d-flex mb-3">
                  <a type="button" class="btn btn-success px-1 px-lg-4 mx-1 mx-lg-3 " href="https://api.whatsapp.com/send?phone=50767456144">
                    <i class="bi bi-whatsapp d-flex align-items-center">
                      <p class="ms-2 my-auto">Contratalo</p>
                    </i>
                  </a>
                  <a type="button" class="btn btn-primary px- px-lg-4 mx-1 mx-lg-3" href="mailto:cursossophiegroup@gmail.com">
                    <i class="bi bi-envelope d-flex align-items-center">
                      <p class="ms-2 my-auto">Contratalo</p>
                    </i>
                  </a>
                  <a type="button" href="./index.html" class="btn btn-secondary px-1 px-lg-4 mx-1 mx-lg-3">Cerrar</a>
                </div>
            </div>
            
        </div>
    `;
  for (const skill of curso.skills) {
    document.getElementById(
      `skills${curso.id}`
    ).innerHTML += `<li>${skill.description}</li>`;
  }
  for (const unit of curso.units) {
    document.getElementById(
      `units${curso.id}`
    ).innerHTML += `<li>${unit.title}</li>`;
  }  
  // document.querySelector("#saludoHeader").innerHTML="";
  // document.querySelector("header").style.backgroundImage="none";
  // document.querySelector("header").style.height="0px";
  window.scroll({top:860})
}


