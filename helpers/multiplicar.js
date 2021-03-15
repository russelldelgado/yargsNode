const fs = require('fs');

const crearArchivo = async ( base = 5 , listar = false)  => {

    try {


        

        let salida = '';
        for (let index = 0; index <= 10; index++) {
                salida +=   ` ${base} * ${index}  = ${base * index}\n`;
        }
        if(listar){
            console.log('=======================================')
            console.log(`TABLA DE MULTIPLICAR : ${ base }`)
            console.log('=======================================')
            console.log(salida);

        }
        
        fs.writeFileSync(`tabla-${base}.txt` , salida );

        
        
        return (`tabla del ${base }`);


        
    } catch (error) {
        throw error
    }


}

module.exports = {
    crearArchivo
}