import { PI, somar } from "./matematica.js";
import saudarUsuario from "./saudacao.js";
import { formatar as enfeitarTexto } from "./utilitarios.js";


console.log("== MATEMÁTICA ==");
console.log("Valor de PI:", PI);
console.log("Soma de 15 + 30:", somar(15, 30));


console.log("\n== SAUDAÇÃO ==");
console.log(saudarUsuario("Enzo Bonifacio"));


console.log("\n== UTILITÁRIOS ==");
console.log(enfeitarTexto("Node.js Módulos"));