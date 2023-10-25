import readLineSync from "readline-sync"
import chalk from "chalk";

let todoList = [];
let id = 0

function addTask (descripcion) {
    return new Promise(resolve => {
        let task = {
            id: id++, 
            descripcion: descripcion,
            completado: false
          }
      
          todoList.push(task)
         
          setTimeout(() => {
            resolve(task);
        }, 2000);

    })
    
}

function deleteTask(id) {
    return new Promise(resolve => {
    todoList.splice(id,1)
    setTimeout(() => {
        resolve();
    }, 2000);

    }
    )}

function complete (id) {
    return new Promise(resolve => {
    todoList.forEach(task => {
        if (task.id == id) {
            task.completado = true 
        }
    })
    setTimeout(() => {
        resolve();
    }, 2000);
})
}

    async function elegirOpcion () {
    let opciones = ["añadir tarea","borrar tarea","completar tarea"];
    let index = readLineSync.keyInSelect(opciones,"¿que quieres hacer?"); 

        if (index == 0 ){
         await addTask(readLineSync.question('ingresa una descripcion'))
        console.log(chalk.green("se añadio la tarea"))
         elegirOpcion();
        } else if (index== 1) {
            await deleteTask(readLineSync.question('¿que tarea quieres borrar?'))
            console.log(chalk.green("se borro la tarea"))
            elegirOpcion();
        } else if (index==2) {
           await complete(readLineSync.question('¿que tareas quieres completar?'))
           console.log(chalk.green("se completo la tarea"))
           
           elegirOpcion();
        }      
}
    
         elegirOpcion()