const btn = document.getElementById("btn")
const input = document.getElementById("input")
const lista = document.getElementById("lista")
const tarea = document.getElementById("tareas")
const tareasCompletadas = document.getElementById("completadas")

let tareas = 0
let completadas = 0

function agregar(){
    if (input.value.trim() === "") {
        alert("Ingresa un texto.")
        return
    }
    
    const contenedor = document.createElement("div");
    contenedor.classList.add("elemento")
    
    const parrafo = document.createElement("p");
    parrafo.textContent = input.value.trim()

    const boton = document.createElement("button");
    const icono = document.createElement("img");
    icono.src = "trash.svg";
    boton.classList.add("eliminar")


    boton.appendChild(icono);
    boton.addEventListener("click", function(){
        contenedor.remove()
        tareas--
        if (boton2.checked) {
            completadas--
            tareasCompletadas.textContent = completadas + (completadas === 1 ? " tarea completada" : " tareas completadas")
        }
        tarea.textContent = tareas + " tareas"

    });

    const boton2 = document.createElement("input");
    boton2.type = "checkbox"
    boton2.addEventListener("change", function() {
        if (boton2.checked) {
            completadas++
        } else {
            completadas--
        }
        tareasCompletadas.textContent = completadas + (completadas === 1 ? " tarea completada" : " tareas completadas")
    })

    contenedor.appendChild(boton2)
    contenedor.appendChild(parrafo)
    contenedor.appendChild(boton)
    lista.appendChild(contenedor)

    tareas++
    tarea.textContent = tareas + " tareas"
   

}

btn.addEventListener("click", agregar)
