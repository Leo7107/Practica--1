let readline = require('readline')

let rl= readline.createInterface(
    process.stdin,
    process.stdout
)
rl.question('Ingrese un mensaje:', (mensaje)=>{
    const numCaracteres=mensaje.legth
    console.log(`El número de caracteres del mensaje es: ${numCaracteres}`)
    process.exit()
})