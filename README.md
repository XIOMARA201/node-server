¿Qué sucedio al usar async y await?
respuesta no inmediata, al ingresar a cada una de las descripciones se demoro unos segundos en imprimir el resultados.

¿Qué sucedio al usar el método then()?
El método then se utiliza para encadenar acciones o funciones que se deben ejecutar una vez que una Promesa se resuelve (se cumple) con éxito, el propósito principal del método then es manejar el resultado exitoso de una Promesa y especificar qué debe hacerse.

¿Qué diferencias encontraste entre async, await y el método then()?

async se usa para declarar una función asincrónica. Cuando se llama a una función con la palabra clave async, esta devuelve una promesa implícita.
Esto permite que la función contenga código asincrónico dentro de ella. La función puede contener múltiples operaciones asincrónicas, y estas operaciones se ejecutarán en orden secuencial.

await se usa dentro de una función async para esperar a que una promesa se resuelva.
Hace que la ejecución del código se detenga hasta que la promesa se resuelva o se rechace. Esto permite escribir código asincrónico de una manera más similar a un estilo síncrono, lo que facilita su lectura y escritura.

then es un método que se usa con promesas para manejar su resolución o rechazo. No necesita una función async.
Permite encadenar acciones a realizar cuando la promesa se resuelve o rechaza. Cada then() recibe una función de callback que se ejecuta cuando la promesa se resuelve.







