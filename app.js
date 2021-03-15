const { boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('yargs')
                         .options({'b': {
                              alias : 'base',
                              type : 'number',
                              demandOption: true
                         }},{ 'l':{
                              type: 'boolean',
                              alias : 'listar',
                              default : false,
                              require : false
                         }    

                         })
                         .check( (argv , option) => {
                              if(isNaN( argv.base)){
                                   throw 'La base tiene que ser un numero';
                              }
                              return true;
                         })
                         .argv;
console.clear();


console.log(argv);
const base = argv.b;
const listar = argv.l;
//console.log('base : yargs : ' ,argv.base);








/*
const [ , , arg3 = 'base=5'] = process.argv;
const [  , base = 5]  = arg3.split('=');
*/
crearArchivo(base , listar)
          .then( nombreArchivo => console.log(nombreArchivo , "creado correctamente")
          )
          .catch( (err) =>   console.log('HA OCURRIDO UN ERROR')
          )
;
