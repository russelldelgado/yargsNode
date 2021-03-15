
const color = require('colors');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
console.clear();
console.log(argv);



crearArchivo(argv.b , argv.l , argv.h)
          .then( nombreArchivo => console.log(nombreArchivo , "creado correctamente".underline.green)
          )
          .catch( (err) =>   console.log('HA OCURRIDO UN ERROR'.underline.red)
          )
;
