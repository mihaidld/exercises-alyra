// activer le mode strict
/* afficher dans la console :

*
**
***
****
*****
******
*******
********
*********
**********

*/
"use strict";
/*for (let a = "*"; a.length <= 10; a += "*") {
  console.log(a);
}
for (let i = 1; i <= 10; i += 1) {
  console.log("*".repeat(i));
}*/

for (let count = 1, message = "*"; count <= 10; count += 1) {
  console.log(message);
  message += "*";
}
