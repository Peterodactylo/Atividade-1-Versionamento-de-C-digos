/*regras para operadores de comparação
= (é utilizado para atribuição)
== p/ comparação (verifica se é igual)
===p/ comparação (verifica se é idêntico. Portanto, mesmo tipo de dado e valor. EX:. String e numero)
|= diferente
< menor
> maior
<= menor ou igual
>= maior ou igual
*/

/* Operadores de atribuição
= atribuição
+= (x+= y) é a mesma coisa que (x = x + y)
-= (x-= y) é a mesma coisa que (x = x - y)
*= (x*= y) é a mesma coisa que (x = x * y)
/= (x/= y) é a mesma coisa que (x = x / y)
*/

/* Operadores lógicos
&& (e)
|| (ou)
! (negação)

Operador E (&&)
V && V = V
V && F = F
F && F = F
F && V = F
Então, posso definir que, com o operador E, A RESPOSTA SÓ SERÁ VERDADEIRA SE AMBAS AS PROPOSIÇÕES FOREM VERDADEIRAS

Operador OU (||)
V||V = V
V||F = V
F||F = F
F||V = V
Então, posso definir que, com o operador OU (||), a resposta apenas será falsa se ambas as proposições forem falsas

Operador negação (!)
Ao ser colocada a exclamação antes de algo, ela muda o estado lógico desse algo. EX:. x = true; let resultado = !x; O resultado será false, pois é o oposto de true
*/

let x = false
//let y = true
let resultado = (!x)
console.log(resultado)

