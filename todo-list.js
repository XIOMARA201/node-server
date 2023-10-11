import readLineSync from "readline-sync"
import chalk from "chalk";

let todoList = [];
let id = 0

function addTask (descripcion) {
    let task = {
      id: id++, 
      descripcion: descripcion,
      completado: false
    }

    todoList.push(task)
}

function deleteTask(id) {
    todoList.splice(id,1)
    
}

function complete (id) {
    todoList.forEach(task => {
        if (task.id == id) {
            task.completado = true 
        }

    })


}
    function elegirOpcion () {
    let opciones = ["añadir tarea","borrar tarea","completar tarea"];
    let index = readLineSync.keyInSelect(opciones,"¿que quieres hacer?"); 

        if (index == 0 ){
         addTask(readLineSync.question('ingresa una descripcion'))
        console.log(chalk.green("se añadio la tarea"))
         elegirOpcion();
        } else if (index== 1) {
            deleteTask(readLineSync.question('¿que tarea quieres borrar?'))
            console.log(chalk.green("se borro la tarea"))
            elegirOpcion();
        } else if (index==2) {
           complete(readLineSync.question('¿que tareas quieres completar?'))
           console.log(chalk.green("se completo la tarea"))
           elegirOpcion();
        }      
}
    
         elegirOpcion()