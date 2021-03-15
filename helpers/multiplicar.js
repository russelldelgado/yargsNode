const fs = require('fs');
const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });

const crearArchivo = async ( base = 5 , listar = false , hasta = 10)  => {
    try {
        let salida = '';
        for (let index = 0; index <= hasta; index++) {
                salida +=   ` ${ base } * ${ index }  = ${ base * index}\n`;
        }
        if(listar){
            console.log('=======================================')
            console.log(`TABLA DE MULTIPLICAR : ${ base }`.trap.debug)
            console.log('=======================================')
            console.log(salida.rainbow);

        }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt` , salida );

        
        
        return (`tabla del ${base }`);


        
    } catch (error) {
        throw error
    }


}

module.exports = {
    crearArchivo
}