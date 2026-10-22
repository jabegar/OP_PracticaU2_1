## 1.- Código bloqueante y no bloqueante
### a) ¿En qué orden se mostrarán las letras A, B, C y D? Razona la respuesta utilizando la pila de llamadas, la cola de callbacks y el event loop
**A** se mostrará primero, luego se mostrará **D**, luego **B** y por último **C**. La llamada A se ejecuta directamente, la **B** y **C** se mandan a la pila, la **D** es síncrona se ejecuta al momento y por último se ejecutan **B** y **C** en orden.
## b) Ejecútalo y comprueba tu respuesta. ¿Qué instrucción es bloqueante? ¿Cuáles son no bloqueantes? Explica la diferencia.
Las llamadas a **A** y **D** son bloqueantes, es decir, hasta que no se ejecuta el código no lee la siguiente instrucción y la **B** y **C** son no bloqueantes, es decir, las llamadas se mandan a una pila de ejecución y pasa a la siguiente instrucción, sin necesidad de haber terminado la misma.
## c) Cambia __filename por 'no-existe.txt' en la llamada a readFile y añade al callback la gestión del error con el parámetro err (convención «error primero»). ¿Qué muestra ahora? ¿Se detiene el programa?
