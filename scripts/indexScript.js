function login() {
    let form = document.querySelector("form");
    form.addEventListener("submit", (event) => {
        event.preventDefault()
        console.log(event, "event")
        let inputs = document.querySelectorAll("input");
        let spanWrong = document.querySelector("span");
        const body = document.querySelector("body");

        if (inputs[0].value === "r@r.com" && inputs[1].value === "123") {
            createModal("Sucesso!", "Suas informações estão corretas", "sucesso");
        } else {
            createModal("Erro!", "Suas informações estão incorretas", "");
        }
    });
}
login();

function createModal(title, description, type) {
    const body = document.querySelector("body");
    body.insertAdjacentHTML("beforeend", `
<div class="modal-wrapper">
  <div class="modal">
      <div class="modal-header ${type === "" ? "modal-header-error" : ""}">
          <h2>${title}</h2>
          <button id="btnClose">X</button>
      </div>
      <div class="modal-body">
          <p>${description}</p>
          <button id="btnOk">Ok</button> 
      </div>
  </div>
</div>`);

    if (type === "sucesso") {
        const btnOk = document.getElementById("btnOk");
        const btnClose = document.getElementById("btnClose");
        btnOk.addEventListener("click", () => {
            window.location.href = "./home.html";
        })
        btnClose.addEventListener("click", () => {
            window.location.href = "./home.html";
        })
    } else {
        const btnOk = document.getElementById("btnOk");
        const btnClose = document.getElementById("btnClose");
        const mainWrapper = document.querySelector(".modal-wrapper")
        btnOk.addEventListener("click", () => {
            mainWrapper.remove();
        })
        btnClose.addEventListener("click", () => {
            mainWrapper.remove();
        })
    }
}