/** Módulos são conjuntos de código.
 *  3 tipos de módulos:
 *    -> TODOS OS ARQUIVOS JAVASCRIPT SÃO MÓDULOS;
 *    -> Nativos;
 *    -> Pacotes do npm (node package manager);
 */
//arquivo criado:
const { log } = require('console')
const { printName, lastName } = require('./printName')

printName(`Matheus ${lastName}`)

//nativo
const os = require('os')
console.log(os.type())
