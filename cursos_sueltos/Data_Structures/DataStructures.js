/*                                          Data Structures
¿Qué es?
    Es la forma en que organizas la data

    La forma en que organizas la data influye a la hora en la velocidad en que se ejecuta o corre tu codigo

*/

/*                                          Velocidad/Time complexity
¿A que se refiere con que el codigo corre mas rapido?
    Se refiere a la cantidad DE PASOS que tiene que realizar para ejecutar el codigo o completar la tarea

    ¿Por qué no el tiempo que tarda? Porque el tiempo va a depender del hardware donde corra, si corre en un hardware
    viejo, seguro tarde mas que si corre en uno de ultima tecnologia. Por eso no se mide en TIEMPO (segundos, minutos)

    Ejemplo
        A realiza 5 pasos > B realiza 500 pasos ---> A será mas rapido que B en cualquier hardware

Time complexity
    Este termino hace referencia a cuanto tarda un codigo en correr, es decir, la CANTIDAD DE PASOS que realiza

    'measure the time complexity'

Terminos intercambiables
    time complexity, speed, performance, efficiency
*/

/*                                          Memoria computadora
¿Cómo funciona?
    Es una grilla donde en cada bloque se almacena la data. Cada bloque tiene su address, lo que le permite a la
    computadora ir directamente y obtener el valor, pero NO sabe que data CONTIENE ese bloque con su address, solo
    conoce las posiciones

    Grafico de grillas
        ? ? ? ? ? ? ? ? ? ? ---> data
        0 1 2 3 4 5 6 7 8 9 --> address

    Cada address tiene data, y esa data esta expresada en 1 byte (8 bits) --> 2 ** 8 --> 256 bits
        La CPU puede acceder a la address y tomar la cantidad que el procesador soporta (32 bits o 64 bits) para
            procesarlo y realizar computational operations

        Es decir que la CPU puede acceder y procesar hasta:
            32 bits --> 2 ** 32 --> 4.294.967.296 -----------------> 4GB de la memoria
            64 bits --> 2 ** 64 --> 18.446.744.073.709.551.616 ----> 20 exabyte (1 exabyte = 1.000.000 terabytes)

    Word-RAM --> cada casillero de la memoria se lo denomina como Word-RAM

*/

/*                                          (DS)Arrays and Sets
Arrays
    Measuring the time complexity of the followings operations in arrays
        Read: Le indicas el indice y va a ese indice ---> 1 step
        Search: Buscar un valor 'x' en el array
            Existen distintos algoritmos para la busqueda, el mas basico es linear-search (busqueda de uno en uno)
            Linear search: verifica 1, verfica 2, verifica 3, etc...
            ¿máxima cantidad de steps? Dependiendo del tamaño del array, o mejor dicho 'n'
        
        Insertion: Cuando insertas un dato en el array
            La cantidad de pasos va a depender de donde queres insertar el dato
                ¿ultima posicion? 1 step
                ¿primera? la maxima cantidad de steps ¿por qué? Porque tenes que mover todos los demas datos una
                    posicion a la derecha ---> N + 1 for an array of N elements
            
            Proceso
                1. Hace espacio para insertar (mueve todos los datos, cada uno contando como step)
                2. Inserta (contando como un step esta insercion)
        
        Deletion: Cuando borras un elemento en cierto indice
            La cantidad de pasos va a depender de donde queres insertar el dato
                ¿ultima posicion? 1 step
                ¿primera? la maxima cantidad de steps ¿por qué? Porque tenes que mover todos los demas datos una
                    posicion a la izquierda ---> N for an array of N elements
            
            Proceso
                1. Elimina el dato (contando como step esto)
                2. Mueve los datos una posicion a la izquierda(contando como un step cada dato moviendoce)

    Dynamic Arrays
        Length --> cuenta la cantidad de elementos que posee el array
        Size --> cuenta la cantidad de espacio disponible que tiene

        a b c d e x --> siempre deja un espacio mas vacio en el caso que tenga que aumentar el tamaño (por ser dinamico)

        Y cuando len === size --> tiene que crear un nuevo array con size + c o c * size
            este "resize" es costoso porque tiene que crear todo el array de nuevo con los valores (copiandolos e 
                insertandolos) pero con MAS tamaño O(N)
Sets
    Data structure that not accepts duplicated values, in an array form

    Measuring time complexity of sets
        Read ---> Igual que en Arrays
        Search ---> Igual que en Arrays
        Insertion: Para cada insert, se requiere un search para saber si el dato que queremos insertar ya existe
            y en el caso de que no exista, agregarlo.

            La cantidad de pasos va a depender de donde queres insertar el dato
                ¿ultima posicion? N + 1 for a set of N elements (recorre todo el set, y luego inserta al final)
                ¿primera? la maxima cantidad de steps ¿por qué? 
                    Porque primero tenes que recorrer todo el set para saber si esta el dato (N) y luego tenes que 
                    mover todos los demas datos una posicion a la derecha (N) y luego insertar, lo que te lleva 
                    a ---> 2N + 1 for an array of N elements

        Deletion ---> Igual que en Arrays

Resumiendo
    ¿Esto quiere decir que nunca tenes que usar sets por sobre arrays porque su time complexity es mayor?
        NO! Depende de cada caso, si buscas que los datos no se dupliquen obviamente vas a usar el set, pero si no 
        necesitas esto, es PREFERIBLE usar arrays ya que es mas eficiente tu codigo
    
    Dependiendo del caso, tenes que elegir sabiamente que data structure elegir

    "Analyzing the number of steps an operation takes is the heart of understanding
    the performance of data structures. Choosing the right data structure for
    your program can spell the difference between bearing a heavy load versus
    collapsing under it"

    Time complexity
.                    | build() | find(k) | insert(x) delete(k) | find_min() find_max() |
    Array            |    n    |    n    |           n         |           n           |
    Sorted Array     | n log n |  log n  |           n         |           1           |
*/

/*                                          (DS)Ordered Arrays
¿Qué son?
    Arrays que deben permanecer en orden --> [1,3,7,9,10]

    Measuring time complexity
        Read --> Igual que Array
        Search: No tenes que recorrer todo el array
            ¿numero no existe? recorres hasta donde searchValue < element
            
        Insertion: Debe comparar el valor a insertar con cada valor, y dependiendo de la comparacion se seguira
            moviendo a la derecha o se insertará

            Proceso
                1. Va comparando con cada elemento (cada comparacion cuenta como step)
                2. Cuando element > insertion, comienza a mover los datos a la derecha (cada movimiento cuenta como step)
                3. Inserta 

            Insertas al comienzo, o cualquier parte del medio? --> N + 2
            ¿Insertas al final? --> N + 1
        Deletion: --> Igual que en Array

*/

//Todo lo anterior a lo que sigue se tenia en mente al linear search como algoritmo

/*                                          (Algo)Binary Search
¿Qué es?
    Es un algoritmo que a medida que va buscando, va recortando a la mitad la busqueda

    Ej.
        1 2 3 4 5 6 7 y quiero buscar 2

        Pasos del algoritmo
            1. Va al indice 3 (4) y como todos los numeros delante de 4 son mayores que 2 ya no buscará allí
                Queda asi --> 1 2 3
            
            2. Va al indice 0 (1) o 1 (2), lo elegis vos, en este caso vamos al 0. Al ser 2 mayor que 1, elimina de
                la busqueda al indice 0
                Queda asi --> 2 3
            
            3. Va al indice 1 (2) 0 2 (3), en este caso vamos al 2. Al ser 3 mayor que 2, elimina de la busqueda al
                indice 2.
                Queda asi --> 2 
    
    Este algoritmo no puede usarse en un array normal (ya que los datos no estan ordenados y no podes descartar), 
    pero SI para ORDERED ARRAYS

Comparacion linear y binary
  
            EN EL PEOR DE LOS CASOS
    N   linear steps      binary steps
    3         3                2
    6         6                3
    15        15               4
  10.000    10.000             13
  1.000.000 1.000.000          20

    Esto nos muestra que el binary cada vez que se duplica la data SOLAMENTE REQUIERE DE 1 step mas, y que el linear
    DUPLICA la cantidad de steps

    ¿Por qué solo 1 step mas? Porque cada vez que busca, corta la mitad de elementos

Resumiendo
    En los ordered arrays tenes una gran eficiencia en tema de busqueda con el binary search, pero tenes que tener
    en cuenta la insercion (que es peor que la de un array)

    Aunque ahora puedas cambiar el metodo de busqueda para hacer insertions (será mas rapida) con el binary search,
    la insertion en un array es mas rapida ya que no necesita busqueda

    Por eso, depende del uso que le des y en que contexto.
        ¿solo necesitas buscar? --> Es mejor usar ordered arrays con binary search
        ¿haces muchas insertions? --> No te conviene ordered arrays, y si los arrays 

*/

/*                                          Big O Notation
¿Qué es?
    Es un concepto que se utiliza para poder expresar la eficiencia de data structures y algoritmos
    Nos permite categorizar la eficiencia de un algoritmo y comparlos entre si

¿Cómo aplicarlo?
    Big O analiza cuantos steps le toma al algoritmo, y luego le aplica la definicion

    Ej.
        Linear search ---> en el peor de los casos, es N ----> Big O Notation: O(N)

    ¿Cómo se pronuncia esto? ---> 'Big Oh of N' o 'Order of N'

    Esta notation responde esta pregunta --->  if there are N data elements, how many steps will the algorithm take?
        En el caso del ejemplo, la respuesta seria: Algo will take N steps
    
    Un algoritmo que tenga O(N) se le conoce como having a 'linear time' 

    Otro Ej.
        Reading ---> O(1) 

        O(1) se lo conoce como having a 'constant time'
    
    ¿Qué steps son significativos?
        TODOS, no importa si es mostrar en consola, comparar, etc.

La verdadera Pregunta 
    how will an algorithm’s performance change as the data increases?
    ¿Cómo va a cambiar la performance de un algoritmo cuando la data aumenta?

    Ej.
        Algoritmo tiene 3 steps, para cualquier cantidad de elementos ---> O(1) y NO O(3)
            Estas definiendo el comportamiento cuando la data aumenta, no solo cuantos steps le toma. Con O(1) estas
            diciendo que no importa cuanto aumente la data, el comportamiento es constante (siempre la misma cantidad
            de steps, asi sean 7,8 etc)
    
Benchmark
    Las notation de cada algoritmo son hechas suponiendo el worst-case-escenario

    ¿Por qué?
        Porque te muestra que tan ineficiente puede ser un algoritmo, te prepara para lo peor

Binary search
    Su notation es ---> O(log N) ---→ order of log N ---> conocido tambien como having a 'log time'

    Con esta notacion describis un algoritmo que cuando la data se duplica, aumenta solo un step

    ¿Por qué es log N?
        Lo que quiere decir es ---> log2 N
            ¿Cuantas veces tengo que multiplicar por 2 hasta llegar a N? 2*2*2*2*2 = N
            ¿Cuantas veces tengo que dividir N entre 2 hasta llegar a 1? N/2/2/2/2/2 = 1 
    
        O(log N) means the algorithm takes as many steps as it takes to
        keep halving the data elements until we remain with 1.

Algoritmos
                  --> O(1) /order of 1/ complexity of constant time                          
    linear-search --> O(N) /order of N/ complexity of linear time
    binary-search --> O(log N) /order of log N/ complexity of log time

Constants
    Big O Notation no tiene en cuenta las constantes o numeros regulares

    ¿Qué?
        Si un algoritmo tiene un time complexity de:
            4  -------> O(1)
            2N -------> O(N)
            N + 1 ----> O(N)
            N**2 / 2 -> O(N**2)
        
        Esto nos muestra que dos algortimos catalogados con alguna notation no quiere decir que sean igual de eficientes
        Uno puede llegar a ser mas rapido que el otro
    
    Debido a esto, Big O Notation tiene categorias
        ¿Cuales son estas categorias? Las que ya conoces ----> O(1), O(log N), O(N), O(N**2)
            
        Con esto diferenciamos que un algoritmo de O(N) es mas eficiente que un O(N**2)

        Se puede concluir entonces que:
            un O(2N) está en la misma categoria que O(N)
            un O(N**2 / 2) está en la misma categoria que O(N**2)

            Esto es porque Big O se focaliza en el crecimiento para trajectorias a largo plazo

Descarte
    Big O Notation tambien determina que si un algoritmo, en cualquier punto, es mas ineficiente que otro, el
        ineficiente EN TODO MOMENTO ES INEFICIENTE
    
    ¿Qué?
        Puede haber casos que por ejemplo el linear search se mas eficiente que el binary search

        Ej. Estas buscando el numero 1 en un ordered array
            linear search --> 1 step
            binary ---------> > 1 step

        ¿Esto quiere decir que el linear search en ordered array es mas eficiente que binary search?
            NO!

            Para grandes cantidades de datos, el linear search será ineficiente, por eso big o notation lo declara
            como ineficiente ante binary search
*/

/*                                          (Algo)Bubble sort
¿Qué es?
    Es un algoritmo para ordenar elementos en un array

¿Cómo funciona?
    1. Comienza en indice 0 y 1. Compara ambos valores. En caso de que el indice 0 sea mayor que 1, mueve el valor
        del indice 0 al indice 1.
    
        Y asi sucesivamente va comparando 2 indices y realizando los cambios hasta que llega al final

        Siempre el numero mas grande irá quedando al final, lo que nos permite acortar la cantidad de comparaciones

        Cada vez que haya un cambio de posicion, tenes que hacer la comparacion
    
Steps
    Comparaciones ---> Cada vez que compara, se cuenta un step
        Array con 4 elementos: Primero compara 3 veces para llevar el mas grande al ultimo, luego 2 veces y luego
            1 vez ----> 3 + 2 + 1 = 6 steps
        
        Array con 10 elementos: 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45 steps
    
    Cambios de posicion ---> Cada vez que hay un cambio, se cuenta un step
        Array con 4 elementos: 3 + 2 + 1 = 6 steps
        Array con 10 elementos: 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45 steps
    
    Total
        Array con 4 elementos = 12 steps        4 ** 2 = 16
        Array con 5 elementos = 20 steps        5 ** 2 = 25
        Array con 10 elementos = 90 steps       10 ** 2 = 100
        Array con 20 elementos = 380 steps      20 ** 2 = 400
        Array con 40 elementos = 1560 steps     40 ** 2 = 1600
        Array con 80 elementos = 6320 steps     80 ** 2 = 6400
    
    Como se puede ver, tiene un crecimiento parecido al exponencial. Cada vez que aumenta la cantidad de elementos,
        aumenta drasticamente mas la cantidad de steps

Notation
    O(N**2) ---> conocido como 'quadratic time'

    Cada vez que te encontres con un algoritmo con este time complexity, hace una pausa y replanteate si tenes
        otra forma de resolver ese problema. Es un algoritmo considerado como lento. 

        A lo mejor no haya otra solucion, pero tenes que estar seguro de esto

Nested loops
    La mayoria de los nested loops tienen un time complexitiy de O(N**2) o un quadratic time

    En el peor de los casos tienen que comparar todos los valores para cada indice del array

        Ej.  Bucle for dentro de otro bucle for en array con 4 elementos
            Indice 0 --> compara con indice 1, indice 2, indice 3, indice 4
            Indice 1 --> compara con indice 2, indice 3, indice 4
            Indice 2 --> compara con indice 3, indice 4
            Indice 3 --> compara con indice 4
        
        En este ejemplo se puede ver como es exponencial, en caso de que aumente la cantidad de datos, aumentará mucho
        mas la cantidad de steps a realizar
    
Ejercicio
    Transformar un O(N**2) a O(N)
    
    Algoritmo que busca el numero mas grande de un array
        O(N**2)
            def greatestNumber(array):
                for i in array:
                    isIValTheGreatest = True
                    for j in array:
                        if j > i:
                            isIValTheGreatest = False
                if isIValTheGreatest:
                    return i
        
        O(N)
            function findGreatestNumber(array){
                let greatest = array[0];
            
                for (let i = 1; i < array.length; i++){
                    if(greatest < array[i]) greatest = array[i]
                }
                
                return greatest;
            }

*/

/*                                          (Algo)Selection sort
¿Cómo funciona?
    1. Toma el primer valor del array y va recorriendo cada valor hasta encontrar uno menor que el y lo toma como
        referencia.
    
    2. Una vez recorrido todo el array, cambia las posiciones entre el indice 0 y el indice donde se encuentra el
        menor valor
    
    Repite este proceso hasta que ordena completamente al array

Notation
    O(N**2)

    La cantidad de pasos aumenta drasticamente a medida que aumenta la cantidad de datos

Cuando la notation es igual entre Algos
    Puede ocurrir que la notacion de dos algoritmos sea la misma (ambos son O(N) por ej), pero todavia podemos seguir
        filtrando y saber que algoritmo es mas rapido aun teniendo la misma notation
    
    Suelen mostrar la misma eficiencia, pero uno es mas rapido que el otro

    Comparacion entre Bubble sort y Selection sort
        Ambos caen en la misma categoria ---> O(N**2) pero el selection sort es mas rapido que bubble sort


*/

//Todo lo anterior a lo que sigue se tenia en mente al worst-case-scenario a la hora de definir conceptos

/*                                          (Algo)Insertion sort and Scenarios
¿Cómo funciona?
    1. Toma el indice 1, y almacena su valor en una variable temporal.
    2. Tenes que mover el indice 0 un espacio a la derecha
    3. Compara indice 0 y la variable, si el valor del indice 0 es mayor que la variable, cambian posiciones

    Ej.
        8 4 2 3

        1. Indice 1 en temporal (4) --> 8 _ 2 3
        2. Comparas temporal con su valor a la izquierda --> 4 y 8 --> haces el shift entre 4 y 8
        3. 4 8 2 3
        4. Indice 2 en temporal (2) --> 4 8 _ 3
        5. Comparas temporal con su valor a la izquierda --> 2 y 8 --> haces el shift entre 2 y 8
        6. Comparas temporal con su valor a la izquierda --> 2 y 4 --> haces el shift entre 2 y 4
        7. 2 4 8 3
        8. Indice 3 en temporal (3) --> 2 4 8 _
        9. Comparas temporal con su valor a la izquierda --> 3 y 8 --> haces el shift entre 3 y 8
        10. Comparas temporal con su valor a la izquierda --> 3 y 4 --> haces el shift entre 3 y 4
        10. Comparas temporal con su valor a la izquierda --> 3 y 2 --> NO haces el shift entre 3 y 2
        11. 2 3 4 8

        Total steps
            comparar: 6 steps
            shift: 
    
    
Time complexity
    O(N**2)

    Funciona bien para N pequeño

Comparacion
    Entre Insertion, Selection y Bubble sort, Selection es el mejor en el worst-case-scenario

    Pero....¿Y en otros escenarios?

Implementacion
    const insertionSort = array => {
        for (let i = 1; i < array.length; i++){
            const tempVariable = array[i];

            for (let j = i - 1; j >= 0; j--) {
                const prevValue = array[j];

                if(prevValue > tempVariable) {
                    array[j + 1] = prevValue
                    array[j] = tempVariable
                }else break   
            }
        }

        console.log(array)
        return array
    }

Average Scenarios
    Aquellos escenarios que ocurren con mayor frecuencia

    Insertion sort
        Worst-case-scenario -----> Tenes que hacer shift de toda la data -----------> N**2
        Average-case-scenario ---> Tenes que hacer shift de la mitad de la data ----> N**2 / 2
        Best-case-scenario ------> NO tenes que hacer shift de la data -------------> N

    Selection sort
        Worst-case-scenario -----------> N**2 / 2
        Average-case-scenario ---------> N**2 / 2
        Best-case-scenario  -----------> N**2 / 2
*/

/*                                          Medir la eficiencia
Pasos
    1. Saber que N elemento usa 
    2. Contar cada step teniendo en mente el worst-case-scenario 
    3. Elimnar las constantes de la notation 

    Ej. 
        ---------------Algoritmo que devuelve la media de los numeros impares---------------------

            function meanEven(array){
                let sum = 0; //1 step
                let countEvens = 0; //1 step

                for(let i = 0; i < array.length; i++){
                    if(array[i] % 2 === 1){
                        sum += array[i]
                        countEvens += 1
                    }
                }

                return sum / countEvents //1 step

            }

            1. Usa un array
            2. Steps:
                El principal --> bucle for 
                    ---> recorrerá todo el array sin importar el tamaño ---> N
                    ---> por cada numero impar realiza 3 steps (compara, agrega, cuenta) ---> 3
                    Resultado de bucle for ---> 3N
                    
                Secundarios ---> 3 steps
            
                Resultado final: 3N + 3
            
            3. O(N)
        
        ---------------Algoritmo que devuelve combinacion entre los valores del array---------------------
            
            function wordBuilder(array) {
                let collection = []; // 1 step
                for(let i = 0; i < array.length; i++) {
                    for(let j = 0; j < array.length; j++) {
                        if (i !== j) {
                            collection.push(array[i] + array[j]);
                        }
                    }
                }

                return collection;
            }

            1. Usa un array
            2. Steps:
                El principal --> bucles for 
                    ---> recorrerá todo el array sin importar el tamaño, y al tener nested loops ---> N**2
                    ---> por cada elemento realiza 4 comparaciones y 3 insertions ---> 7
                    Resultado de bucle for ---> 7N**2
                    
                Secundarios ---> 1 step
            
                Resultado final: 7N**2 + 1
            
            3. O(N**2)


Consideraciones
    Si tenes mas de un dataset, digamos que el algoritmo recibe 2 arrays, no podes juntarlos y tomarlos como N. Sino,
        lo que tenes que hacer es tratarlos de forma separada ----> N y M
    
        Ej. Si se trata de 2 arrays en los cuales sus elementos se multiplican entre si
            O(N * M) seria N, o punto 1
*/

/*                                          (DS)Hash-tables
¿Qué es?
    Es una lista de key:value 

    Se lo conoce en lenguajes como hashes, maps, hash maps, dictionaries, associative arrays

¿Cómo funcionan?
    1. Se le hace un hash al key --> resulta en un numero
    2. El value es guardado en la memoria en el indice del hash del key

    Ej.
        {nombre: 'joa'}

        Memoria ----> x x x x x 'joa' x x x
        Indice  ----> 0 1 2 3 4   5   6 7 8

        ¿Por qué joa está en indice 5? Porque el hash de 'nombre' es 5, y entonces se almacena en el indice 5 de la
        memoria
    
    Esta forma de almacenar hace que la busqueda tome tan solo O(1)
        Hace el hash del key que le indicamos ---> obtiene numero ----> obtiene indice ---> devuelve el value

Collision
    Se trata de querer colocar data en un lugar con data existente

    Ej.
        Primero ---> {bad: 'hola'} ---> se guarda la data en indice 8
        LUEGO   ---> {dab: 'chau'} ---> collision

        El hash de ambos keys son 8 ---> indice 
    
    ¿Solucion? --> Separate chaining
        En vez de colocar un valor, coloca un array con ambos valores

        En el caso del ejemplo quedaría asi el indice 8
            [['bad','hola'],['dab','chau']]
    
    Proceso de busqueda en indice con multiples valores
        1. Hash del key
        2. Va al indice
        3. Busca en el array de manera LINEAL, buscando el indice 0 de cada sub-array
        4. Al encontrar la key buscada, devuelve el indice 1 de ese sub-array
    
        Este proceso de busqueda hace que las hash-tables tengan como worst-case-scenario un O(N). Es importante
        realizar estas hash tables de una forma que tenga POCAS collisions, sino es lo mismo que usar un array

    ¿Cómo evitar las collisions?
        Pilares a tener en cuenta
            . Cantidad de celdas
            . Cantidad de data
            . Hash function

            Si tenes mucha data y pocas celdas, o tu hash function es nefasta y hace muchas collisions (que su hash
            sea entre 1-9 por ejemplo)
        
        Memoria
            Es otro punto a tener en cuenta. Puede ser que tengas mil celdas para solo 5 keys, estas desperdiciando
            memoria
        
        Conclusion
            This is the balancing act that a hash table must perform. A good hash table
            strikes a balance of avoiding collisions while not consuming lots of memory.

Balance en las hash tables
    Rule of thumb --> Por cada 7 datos, se tiene 10 celdas ---> Este ratio es conocido como 'load factor'

Ejemplos    
    1. Convertis un array de numeros a un objeto de numeros con 52: true y asi, cuando buscas obj.52 devolverá true
    o false, haciendo la busqueda O(1)
        
*/

/*                                          (DS)Stacks and Queues(kius)
¿Qué son?
    Basicamente son arrays pero con ciertas restricciones, las cuales los hacen diferentes y elegantes

    Son útiles para gestionar data temporal

    Temporary data is information that doesn’t have any meaning after it’s processed, so you can throw it away 
        once you’re done with it.

Stacks
    Almacena la data en forma de Array, pero tiene las siguientes restricciones:
        1. La data solo puede insertarse AL FINAL del array
        2. La data solo puede ser eliminada AL FINAL del array
        3. Solo el ULTIMO DATO puede ser leido(read)
    
    EL ultimo elemento se lo conoce como 'top' y el primero como 'bottom'

    NO suelen venir por defecto en los lenguajes de programacion, los tenes que crear vos mismo. Con una clase y
        definis las restricciones descriptas arriba
    
    Se lo considera como un tipo de dato abstracto, ya que lo importante son las reglas y no el data-type usado

Queues
    Almacena la data en forma de Array, pero tiene las siguientes restricciones:
        1. La data solo puede insertarse AL COMIENZO del array
        2. La data solo puede ser eliminada AL COMIENZO del array
        3. Solo el ULTIMO DATO puede ser leido(read)
    
    EL ultimo elemento se lo conoce como 'back' y el primero como 'front'

Wrapping Up
    As you’ve seen, stacks and queues are programmers’ tools for elegantly handling all sorts of practical 
    algorithms.

*/

/*                                          Recursion
¿Qué es?
    Se trata de llamar a la funcion, dentro de ella

    Ej.
        function algo(){
            algo()
        }
    
    Para evitar que sea infinito tenes que colocarle una condicion o 'base case'
        function countdown(number) {
            console.log(number);
            if(number === 0) { -------------> base case
                return;
            } else {
                countdown(number - 1);
            }
        }

¿Cómo pensar en recursión?
    Primero que funcione
        1. Ver el problema como un arbol        
        2. Implementar el arbol usando recursion, donde los nodos leaves son tu base case
        3. Testear que funciona
    
    Segundo hacerlo eficiente --> Ver parte mas abajo de optimizacion 

¿Cómo leerlo?
    COMENZAR DESDE EL BASE CASE

    Ej.
        def factorial(number)
            if number == 1
                return 1
            else
                return number * factorial(number - 1)
            end
        end

    Proceso
        1. Base case factorial(1) ----> return 1 ----------------------------------> factorial(1) devuelve 1
        2. factorial(2) --------------> return 2 * factorial(1)(lo que seria 1) ---> factorial(2) devuelve 2 
        3. factorial(3) --------------> return 3 * factorial(2)(lo que seria 2) ---> factorial(3) devuelve 6
        4. factorial(4) --------------> return 4 * factorial(3)(lo que seria 6) ---> factorial(4) devuelve 24
    
    Mirarlo como un arbol
        Esto te ayuda a entender la funcion, ver patrones para optimizar codigo (memoization), conocer su time
            complexity y space complexity

        Ejemplos
            Factorial
                        4 --> Cuarto en ejecutar, 6 * 4 = 24
                        |
                        3 --> Tercero en ejecutar, 2 * 3 = 6
                        |
                        2 --> Segundo en ejecutar, 1 * 2 = 2
                        |
                        1 --> Primero en ejecutar = 1
            Fibonacci
                      4
                     / \
                    3   2
                   / \
                  2   1

¿Cómo lo procesa la computadora?
    Como lo hace un Stack, aunque a esto se le llama Call Stack (como lo hace el call stack de JS)

    Ej.
        Asi se veria el call stack en cada paso de la funcion factorial
            1. factorial(4)
            2. factorial(3) factorial(4)
            3. factorial(2) factorial(3) factorial(4)
            4. factorial(1) factorial(2) factorial(3) factorial(4) ----> Hasta este paso acumula las funciones en el stack
            5. factorial(2) factorial(3) factorial(4)
            6. factorial(3) factorial(4)
            7. factorial(4)
            8. Vacio
        
        Asi se veria el call stack en cada paso de la funcion fibonacci 4
            1. factorial(4)
            2. factorial(3) factorial(4)
            3. factorial(2) factorial(3) factorial(4)
            4. factorial(3) factorial(4)
            5. factorial(1) factorial(3) factorial(4)
            6. factorial(3) factorial(4)
            7. factorial(4)
            8. factorial(2) factorial(4)
            9. factorial(4)
            10. Vacio
            
            Teniendo un space complexity de O(N) ya que en el stack siempre hubo 4 como maximo, ya que al
                ejecutar se limpian del stack
    
    Stack overflow
        Cuando el stack sobrepasa la cantidad de memoria RAM para seguir llamando funciones o tareas
        Lo que hace es cortar con la recursion de manera forzada
        
¿Cúando usarlo?
    Recursion is often a great choice for an algorithm in which the algorithm needs to dig into an arbitrary number
        of levels deep into something.

Big O
    Se encuentra detras de N(2**N)

Optimizarlo
    Con memoization

    ¿Cómo hacer la memoization?
        1. Observar patrones que se repiten/duplican ---> en el algo, será la condicion que retornará el memo
        2. Memorizar la llamada a una nueva recursion y pasarle el memo como parametro
        3. retornar memo
    
    Ej. de factorial
        ------------------------------ SIN MEMO --------------------------------------
        const factorial = num => {
            if(num === 1 || num === 2) return 1;
            return factorial(num - 1) + factorial(num - 2)
        }

        TC = O(2**N)
        SC = O(N)
        ------------------------------ CON MEMO --------------------------------------
        const factorial = (num, memo = {}) => {
            if(num in memo) return memo[num]
            if(num === 1 || num === 2) return 1;

            memo[num] = factorial(num - 1, memo) + factorial(num - 2, memo)
            return memo
        }

        TC = O(N)
        SC = O(N)

*/

/*                                          Dynamic programming para mejorar la Recursion
2 tecnicas de dynamic programming
    Memoization
    Bottom-Up

Memoization
    En el caso de que te topes con 'overlaping subproblems', que vendria siendo llamar muchas veces funciones a las
    cuales ya tenemos lo que devuelven, podes usar memoization para guardar esos retornos y no tener que ejecutarlas
    otra vez. Si las ejecutas otra vez, estas en el order of 2**N

    Usas hash-tables para guardar los valores y acceder en order of O(1)

    Ej.
        Algoritmo para calcular los numeros de fibonacci
            --------------------------Sin memoization--------------------------------
                function fibo(n){
                    if(n === 0 || n === 1) return n;

                    return fibo(n - 2) + fibo(n - 1);
                }   

                Problema
                    Si llamas fibo(4)_____ fibo(3)_____ fibo(2)_____ fibo(1)
                                    |            |            |_____ fibo(0)
                                    |            |
                                    |            |_____fibo(1)
                                    |
                                    |_____ fibo(2)_____ fibo(1)
                                                 |
                                                 |_____fibo(0) 
                
                    Estas en orden O(2**N) ---> peor que O(N**2)

            --------------------------Con memoization--------------------------------

                function fibo(n, memo){
                    if(n === 0 || n === 1) return n;
                    if(!memo[n]) memo[n] = fibo(n - 2, memo) + fibo(n - 1, memo);
                    if(memo[n]) return memo[n];
                }

                Ejecutas ---> febo(6, {})

                Proceso
                    fibo(6, {})___ fibo(5, {6: })___fibo(4) // ya calculadas, frena cadena de calls
                              |                 |____fibo(3) // ya calculadas, frena cadena de calls
                              |
                              |___ fibo(4, {6: })___fibo(3,{6: , 4: })_____fibo(2) //ya calculada, frena cadena de calls
                                                |                    |_____fibo(1)
                                                |
                                                |____fibo(2, {6: , 4: })___fibo(1,{6: , 4: })
                                                                       |____fibo(0, {6: , 4: })
            
                N elements      N o calls
                    1               1
                    2               3
                    3               5
                    4               7
                    5               9
                    6               11

                      2N - 1----> O(N)

Bottom-Up
    Hacer iteration ---> Un bucle de toda la vida

Conclusion
    Generally speaking, going bottom-up is often the better choice unless the
    recursive solution is more intuitive. Where recursion is more intuitive, you
    can keep the recursion and keep it fast by using memoization.
*/

/*                                          (Algo)QuickSort y QuickSelect
Info
    Es el que generalmente viene implementado en los lenguajes de programacion
    Es un algoritmo muy rapido para ordenar en AVERAGE-CASE-SCENARIOS, aunque en WORST-CASE-SCENARIOS se comporta como
        O(N**2)
    
    Se basan en un concepto conocido como 'partitioning'

Partitioning
    Consiste en tomar un valor del array y tenerlo como pivot, es decir un valor al que lo vamos a tomar como 
        referencia para ir comparando. Los valores mas grande que el pivot van a la derecha y los mas chicos a la
        izquierda
        
    Asegura que el pivot VA A ESTAR EN LA POSICION CORRECTA DEL ARRAY
        
    ¿Cómo se logra esto?
        1. The left pointer continuously moves one cell to the right until it reaches
            a value that is greater than or equal to the pivot, and then stops.
        2. Then, the right pointer continuously moves one cell to the left until it
            reaches a value that is less than or equal to the pivot, and then stops.
            The right pointer will also stop if it reaches the beginning of the array.
        3. Once the right pointer has stopped, we reach a crossroads. If the left
            pointer has reached (or gone beyond) the right pointer, we move on to
        Step 4. Otherwise, we swap the values that the left and right pointers are
            pointing to, and then go back to repeat Steps 1, 2, and 3 again.
        4. Finally, we swap the pivot with the value that the left pointer is currently
            pointing to.
    
    Time complexity
        N(comparaciones) + N/4(swaps) ----> O(N)

¿Cómo funciona QuickSort?
    Es una combinacion entre Partitioning y Recursion

    Proceso
        1. Al array completo le aplica Partitioning
        2. El array a la derecha e izquierda del pivot, les aplica Partitioning y asi sucesivamente
        3. Los pasos 1 y 2 se repiten hasta que surjan sub-arrays con 0 o 1 elementos --> base case
    
    Time complexity
        N * log N ---> O(N log N)

        Parte a la mitad --------> una especie de binary search ---> log N
        Recorre todo el array ---> N
        Multiple partitions -----> N * log N
    
        Scenarios
            Best-case ------> N * log N
            Average-case ---> N * log N
            Worst-case -----> N**2

QuickSelect
    Es un híbrido entre QuickSort y Binary Search

    Proceso
        1. Hace la partition
        2. Elimina la parte del array con valores QUE NO LE SIRVEN (como binary search) 
        3. Hace partition a la parte del array con valores QUE LE SIRVEN
    
    Time complexity
        2N ---> O(N)

Sorting algorithms
    Los mas rapidos son O(N log N)
*/

/*                                          (DS)Node-Base data structures
¿Qué son?
    Son data structures que se basan en el concepto de 'Nodos'

    Los nodos hacen referencia a pedazos de data que se encuentran dispersas en la memoria de la computadora

Linked list
    ¿Que es?
        Un data structure basada en nodos
        Es una lista de datos, como un array, solo que debajo se comporta de manera distinta (la forma en que guarda
            los datos en la memoria)
    
    ¿Cómo almacena datos?
        Ya no es una linea de completa en la grilla, sino que los datos estan dispersos en la memoria
        Son datos que estan conectados con un 'link', a esto se lo conoce como nodo
        Cada dato, ademas del valor, tiene otra informacion sobre la direccion en la memoria del nodo siguiente

        'hola' 15  ----> 'chau' 22 ----> 'nuevo'  35
           0    1         15   16          22    23       <---------- indices
         dato  link      dato link       dato   link
        
        El último nodo de la linked list tiene como link 'null'
        Casilla de valor se lo conoce como 'head' y el link se lo conoce como 'tail'
        El link tambien ocupa un espacio de almacenamiento, entonces por cada dato tenes 2 celdas ocupadas

    Operaciones
        Read ---> Solo conoce el indice del PRIMER nodo. Esto hace que para llegar, digamos al nodo 3, necesita pasar
            por el nodo 1, nodo 2 y luego nodo 3.

            Time complexitiy of O(N)

        Search ---> Mismo proceso que en un Array. Debe ir grilla por grilla hasta encontrar el valor buscado
            Time complexity of O(N)

        Insert ---> Es mejor que un Array en CIERTOS CASOS  
            Insertar dato en index 0 ------> O(1) ---> agrega un dato y le coloca el link del primer nodo
            Insertar dato en otro lado ----> O(N) ---> tenes que buscar el nodo con el indice para poder agregarlo
            Insertar dato en ultimo indice-> O(N) ---> tenes que buscar el nodo con el indice para poder agregarlo

        Delete
            Borrar dato en index 0 ------> O(1) ---> borras el dato y listo
            Borrar dato en otro lado ----> O(N) ---> tenes que buscar el nodo con el indice para poder borrarlo
            Borrar dato en ultimo indice-> O(N) ---> tenes que buscar el nodo con el indice para poder borrarlo

            Cuando borras lo que en realidad haces es quitarle el link, pero la informacion se queda en alguna parte
            de la memoria. Los lenguajes de programacion detectan estos nodos y los mandan a 'garbage collect'
        
        Punto clave
            Cuando estas haciendo insertions o deletions, no hace falta mover posiciones como en un array. Aca 
            simplemente los insertas/borras y listo

            Ej.
                Let’s assume that 1 in 10 email addresses are invalid. If we had a list of 1,000
                email addresses, we’d have about 100 invalid ones. Our algorithm, then,
                would take 1,000 steps to read all 1,000 email addresses. On top of that,
                though, it might take up to an additional 100,000 steps for deletion, as for
                each of the 100 deleted addresses, we might shift up to 1,000 other elements.

                With a linked list, however, as we comb through the list, each deletion takes
                just one step, as we can simply change a node’s link to point to the appropriate
                node and move on. For our 1,000 emails, then, our algorithm would take just
                1,100 steps, as there are 1,000 reading steps, and 100 deletion steps.

Doubly linked list
    Parecido a una linked list, solo que la doubly contiene 2 links --> Uno que apunta al nodo anterior y otro que
        apunta al nodo posterior
    
        Conoce donde se encuentra el primer y ultimo nodo
            Permite insertar/borrar al comienzo/final en O(1)
            Permite comenzar por el principio o por el final

        null 'hola' 15  ----> 1 'chau' 22 ----> 15 'nuevo'  35
          0    1    2         14  15   16       21   22    23       <---------- indices
        link  dato  link     link dato link     link  dato   link

*/

/*                                          (DS)Binary search tree
Recopilando lo mas rapido
    Sorting ---> N log N
    Search  ---> O(1) con hash tables
    Insertion -> O(1) con hash tables
    Deleteion -> O(1) con hash tables

    ¿Cómo hacer que una estructura sea ordenada y tenga un search, insertion y deletion rapido? Binary Search Tree

Tree
    Es una DS basada en nodos, donde cada nodo tiene links a MULTIPLES NODOS

    Ej.
                A -----> root. A es el padre de B y C. PRIMER NIVEL
               / \
              B   C ---> B y C son descendientes de A, y ancestros de D E F G. SEGUNDO NIVEL
            / \  / \
           D  E  F  G ---> TERCER NIVEL
        
        El nodo A tiene 2 links, uno al nodo B y otro al nodo C. De manera similar, el nodo B tiene un link al nodo
        D y al nodo E, y asi sucesivamente con cada nodo
    
    Balanceado
        Se dice que un tree esta balanceado cuando los nodos tienen la misma cantidad de subnodos

        Balanceado
                A 
               / \
              B   C 
            / \  / \
           D  E  F  G
        Inbalanceado
                A 
               / \
              B   C 
            / \  
           D  E  
    
    Implementacion de Binary Tree en Array
        The formulae for calculating the array indices of the various relatives of a node are as follows. The total 
            number of nodes in the tree is n. The index of the node in question is r, which must fall in the range 
            0 to n−1.

        r = index

        Parent(r) =⌊(r−1)/2⌋ if r≠0.

        Left child(r) =2r+1 if 2r+1<n.

        Right child(r) =2r+2 if 2r+2<n.

        Left sibling(r) =r−1 if r is even and r≠0.

        Right sibling(r) =r+1 if r is odd and r+1<n.
    
Binary Search Tree
    Binary tree ---> Es un arbol en donde cada nodo tiene 0, 1 o 2 hijos

    Binary search tre ---> Binary tree + 2 reglas
        1. Cada nodo puede tener como MUCHO un nodo a la izquierda y un nodo a la derecha
        2. A la izquierda del nodo valores MENORES que el nodo, a la derecha del nodo valores MAYORES que el nodo

    Ej.
                 50
               /   \
             25     75 
            / \    /  \
         20  35   55  100
        
        Todos los nodos de la izquierda al 50 SON MENORES QUE EL y todos los nodos a la derecha del 50 SON MAYORES
        QUE EL. Y asi debe ser para cada nodo

    Height of BST
        Is the length of longest path from root to leaf 
                50
              /   \
            25     75 
           / \    /  \
         20  35   55  100
              
            the lenght is 3 ---> the distance from 50 to 100 is 3

        In general height will be log n (in case the tree is balanced) but it can grow to N if the tree is not
            balanced at all
            1
             \
              2
               \
                3  
            the lenght is 3 ---> the distance from 1 to 3 is 3

        Then how me keep the tree balanced? ---> AVL Trees

    Comienzo
        Cuando crees tu arbol, la data debe estar en forma random, ya que si está ordenada va a ser lineal

        Ordenada te genera el siguiente arbol
            1
             \
              2
               \
                3
                 \
                  4
    
    Operaciones
        Search
            1. Compara el nodo root con el valor, si el valor buscado es menor va a la izq y si es mayor a la derecha
            2. Repite 1 hasta encontrar el valor o llegar al bottom del arbol(no existe el valor en el arbol)

            Cada vez que busca hace un halving de la data

            Time complexity
                O(log N) ---> Para arboles comlpetamente balanceados (best-case-scenario)
                O(log N) ---> Para arboles tipicamente balanceados (average-case-scenario)
                O(N) -------> Para arboles completamente imbalanceados (worst-case-scenario)

        Insertion
            1. Compara valor a insertar con el root, mayor a la derecha o menor a la izquierda
            2. Compara el valor a insertar con cada nodo como punto 1, hasta que no encuentra MAS NODOS que le sigan.
                Ahí es cuando lo inserta

            Ej. Valor a insertar es 40
                     50
                    / \
                  25   75 
                 / \  / \
                20 35 55 100
                    \
                    40

                Pasos
                    40 < 50 ---> va a la izquierda
                    40 > 25 ---> va a la derecha
                    40 > 35 ---> va a la derecha
                    40 y NADA --> Inserta 40 
            
            Time complexity
                O(log N) ---> Para arboles comlpetamente balanceados (best-case-scenario)
                O(log N) ---> Para arboles tipicamente balanceados (average-case-scenario)
                O(N) -------> Para arboles completamente imbalanceados (worst-case-scenario)

                Recordar que en un ordered array le toma O(N)
            
        Deletion
            Borrando un nodo sin hijo
                1. Encuentra el nodo como en search
                2. Borra el nodo sin mas, ya que no tiene hijos
            
            Borrando un nodo con 1 hijo
                1. Encuentra el nodo como en search
                2. Borra el nodo, y su hijo pasa a ocupar su lugar
            
            Borrando un nodo con 2 hijos
                1. Encuentra el nodo como en search
                2. Borra el nodo, y el nodo sucesor ocupa su lugar

                ¿nodo sucesor? 
                    1. Te moves a la derecha 
                    2. Comenzas a bajar por la izquierda hasta encontrar un nodo que NO tenga un hijo a la izq
                    3. Ese nodo que no tiene hijo a la izquierda es el nodo sucesor
                    ¿Pero si ese nodo tiene un hijo a la derecha?
                    4. El nodo toma el lugar del eliminado y el hijo de la derecha toma el lugar del nodo sucesor

                    Ej. De un nodo con hijo derecho, borrando el numero 50 (seguir camino con !)
                             50
                            / \
                          25   75!  1. Te moves a la derecha del nodo a eliminar
                        / \  / \
                      20 35 55! 100 2. Comenzar a bajar por la izquierda hasta encontrar nodo sin hijo izq
                           / \
                         40!  61    3. El nodo 40 no tiene hijo izq, es el sucesor! Pero tiene hijo derecho por eso
                          \             tenes que mover el nodo 40 donde está el 50, y el nodo 45 donde estaba el
                          45               40
                        
                        ARBOL LUEGO DE ELIMINAR NODO 50
                             40
                            / \
                          25   75  
                        / \  / \
                      20 35 55 100 
                           / \
                         45  61    
        
            Time complexity
                O(log N)
                Recordar que en un ordered array le toma O(N)
           
        Traversing
            Esta operacion hace referncia al proceso de recorrer TODO el arbol, es decir acceder a todos los nodos para
                mostar todos los datos del mismo

            Pasos
                1.Call itself (traverse) recursively on the node’s left child. The function will
                    keep getting called until we hit a node that does not have a left child.
                2. “Visit” the node. (For our book title app, we print the value of the node at
                    this step.)
                3. Call itself (traverse) recursively on the node’s right child. The function will
                    keep getting called until we hit a node that does not have a right child.

            Ej.
                              (4)40
                            /        \
                         (2)25       (8)75  
                        /    \      /      \
                     (1)20  (3)35  (6)55   (9)100 
                                  /     \
                                (5)45   (7)61 
                
                Pasos
                    1. Comienza en 40. Va a la izquierda nodo por nodo hasta encontrar a uno que no tenga hijo izq
                        El nodo que no tiene hijo izquierda es 20, print(20)
                    2. Vuelve al nodo 25, y como tampoco tiene ya un hijo izquierdo, o YA LO MOSTRÓ, print(25)
                    3. En el nodo 25, va al lado derecho nodo por nodo hasta encontrar un nodo que no tenga hijo
                        derecho. Este nodo es 35, print(35)
                    4. Vuelve al nodo 25 y luego al 40, el 40 al ya haber mostrado sus hijos izq, print(40)
                    5. Nodo 40 va a la derecha, nodo 75 y comienza a ir nodo por nodo a la izquierda hasta encontrar
                        un nodo que no tenga hijos izq, en este caso nodo 45, print(45)
                    
                    Y ASÍ SUCESIVAMENTE

            Time complexity
                O(N)

    Resumiendo
        Binary search tree es mucho mas rapido que binary search en ordered arrays, no solo para search, sino para
        deletion e insertion haciendolo muy atractivo para una aplicacion en la que constantemente tengamos que
        buscar, eliminar e insertar datos ordenados

        Ejemplos de aplicaciones
            . Records de libros con los titulos. Creas un arbol segun orden alfabetico

    AVL Trees
*/

/*                                          (DS)Heaps
Priority Queues
    ¿Cómo funciona?
        1. Deletion el ultimo elemento del array (donde está la mas alto prioridad) ---> O(1)
        2. Read solo el ultimo elemento del array ---> O(1)
        3. Insertion siempre debe mantener ordenado el array ---> O(N)

    'front' es el ultimo elemento, y 'back' es el primer elemento

    Ej. Queres insertar 10
            2 4 5 6 10

        Queres insertar 3
            2 3 4 5 6 10

Heaps (binary)
    El binary heap tiene 2 versiones

    max-heap
        1. El valor de los nodos descendientes de un nodo deben ser MENORES a él (heap condition)
            100 
            / \
          80   25 
          / \  / \
        55 77 4  14 

        2. Debe ser un arbol completo
            Hace referencia a que cada fila tiene que estar completa de nodos, no puede faltar ninguno
                PERO en la ULTIMA FILA, si hay un nodo que NO TENGA NODOS A LA DERECHA, se considera completo

                COMPLETO                 INCOMPLETO                 COMPLETO
                    A                         A                        A
                   / \                       / \                      / \
                  B   C                     B   C                    B   C  
                / \  / \                  /      \                  / 
               D  E  F  G                D       G                 D 
            

    min-heap
        1. El valor de los nodos descendientes de un nodo deben ser MAYORES a él (heap condition)
              1 
            /   \
           8    25 
          / \   / \
         55 77 54 84 

        2. Debe ser un arbol completo
            Hace referencia a que cada fila tiene que estar completa de nodos, no puede faltar ninguno
            PERO en la ULTIMA FILA, si hay un nodo que NO TENGA NODOS A LA DERECHA, se considera completo

            COMPLETO                 INCOMPLETO                 COMPLETO
                A                         A                        A
               / \                       / \                      / \
              B   C                     B   C                    B   C  
            / \  / \                  /      \                  / 
           D  E  F  G                D       G                 D  

    Propiedades
        . Weakly ordered comparado con binary search tree. Esto porque la busqueda en heaps es muy lenta, no tenes
            forma de saber si el dato a buscar está a la izquierda o a la derecha del root (o culquier nodo)
        
        . El root node siempre es el valor mas alto(mas bajo en min-heap) --> para priority queues

        . Last node --> Es el nodo de la ultima fila que se encuentra MAS a la derecha
            Problem of the last node ---> ¿Cómo la computadora encuentra el ultimo nodo?

    Operaciones
        Search --> Nefasta
            Tenes que recorrer todo el arbol para encontrar el valor

            Time complexity
                O(N)

        Insertion
            1. Inserta el nodo a la DERECHA del last node
            2. Compara el valor insertado con el valor del nodo ancestro, si es mayor lo reemplaza, sino encontró su
                lugar
            3. Repite 2 hasta que sea menor que un nodo, ahí encontró su lugar

            Ej. Insertar 40                                        Tree final
                     100                    100                      100                      
                    /   \                  /   \                    /   \                    
                  80    25 ----------->  80     25 ------------>   80    40 
                 / \   /                / \    /  \               / \   /  \               
                55 77 4               55 77   4    40           55 77 4    25                                                                              

                Este proceso de ir moviendo el nodo hacia arriba se llama 'trickling up'

            Time complexity
                O(log N)
            
            Pero... ¿Cómo la computadora encuentra el last node?
    
        Deletion
            1. Borras SIEMPRE el root node
            2. Moves el last node donde estaba el root node
            3. Comienza el proceso de trickling down (mas complicado porque tenes 2 posibles direcciones)

            trickling down
                1. Comparas los valores de los NODOS HIJOS, e intercambias lugares con el nodo MAS GRANDE
                2. Repetis paso 1 hasta que no tenga mas hijos o su valor sea mayor que los nodos a comparar
            
            Ej.                                                                                Tree final
                      100                     14                       80                        80
                    /    \                  /   \                    /   \                     /   \
                  80     25 ----------->  80     25 ------------>   14    25 -------------->  77    25 
                 / \    /  \             / \   /                   /  \   /                  / \    /  
                55 77  4    14          55 77 4                   55 77  4                  55 14  4    
  
            Time complexity
                O(log N)
    
    Last node PROBLEM
        ¿Cómo la computadora encuentra el last node tanto para insertion y deletion?
            Esto lo podemos hacer con arrays, es por eso que los heaps se construyen sobre arrays, ya que pueden
            encontrar el ultimo nodo en O(1)
        
        ¿Cómo se implementa un heap en un array?
            El last node SIEMPRE será el UTLIMO elemento del array

                        100(0)                   
                    /           \    
                  80(1)       25(2) 
                 /     \      /   \    
               55(3) 77(4)  4(5) 14(6) 

               [100, 80, 25, 55, 77, 4, 14]
                 0   1   2   3   4   5  6
                
            ¿Cómo haces el traverse ahora en un array y no en un tree?
                ¿Moverte hacia la izquierda?  (2 * index) + 1 --> da como resultado el INDICE donde se encuentra el nodo hijo
                ¿Moverte hacia la derecha?    (2 * index) + 2 --> da como resultado el INDICE donde se encuentra el nodo hijo
                ¿Encontrar el parent node?    (index - 1) / 2 --> da como resultado el INDICE donde se encuentra el parent node
                    Hace redondeo hacia ABAJO (4-1)/2 = 1.5 = 1
    
Conclusion
    Los Heaps son lo mejor para implementar Priority Queues
*/

/*                                          (Algo)Heapsort
¿Cómo funciona?
    1. Elimina root node y lo agrega a un array
    2. Hace los cambios necesarios para orderar el tree
    3. Repite hasta que se elimine el tree completo

    max-heat ---> El array queda en orden ascendente
         1
        / \
       5   7

       1. Elimina 1 por ser root ---> [1]
       2. El 7 ocupa lugar de root ya que es el last node, y al ser mayor que 5 se queda en root
       3. Elimina 7 por ser root ---> [1, 7]
       4. El 5 ocupa el lugar de root por ser el last node, y al no tener mas hijos se queda en root
       5. Elimina 5 ---> [1, 7, 5]

    min-heat ---> El array queda en orden descendente
        100
        /\
      50  70
    
      1. Elimina 100 --> [100]
      2. El 70 ocupa lugar de root node por ser el last node y como es mayor que 50 se queda ahí
      3. Elimina 70 --> [100, 70]
      5. El 50 ocupa el lugar del root por ser el last node y como no tiene hijos se queda ahi
      6. Elimina 50 --> [100, 70, 50]

*/

/*                                          Categorias y su eficiencia
TERRIBLE
    O(N!)
    O(2**N)
    O(N**2)

MALO
    O(N log N)

ACEPTABLE
    O(N)

BUENO
    O(log N)

AMAZING
    O(1)
*/

/*                                          (DS)Tries ---> releer
Mucha gente lo pronuncia como 'try' (trai)

¿Qué?
    Te permite hacer las busquedas en O(1)
    Es muy utilizado para características de texto(autocomplete), IP address, telefonos, etc

    Es un tipo de tree, solo que éste te permite tener MULTIPLES NODOS HIJOS (no solo dos como en binary tree)
        Cada nodo es una hash table que contiene una key y como valor otro nodo

¿Cómo funciona?
*/

/*                                          (DS)Graphs
¿Qué es?
    Es un DS que se basa en nodos, en donde estan conectados

    Un tipo de graphs son los trees ---> TODOS los trees son graphs, pero NO TODOS los graphs son trees
    
¿Cuándo un graph es un tree?
    Cuando NO forma cycles y TODOS los nodos estan conectados

    Cycles
        Debido a la conexion de nodos, se forma un circulo
        A___B
        \  /
         C

    No-connection
        Puede tener nodos sin estar conectados
        A___B
        \  /   D___E
         C  

Graph jargon (jerga)
    Nodo --------------------------> Vertex
    Lineas ------------------------> Edges
    Vertex conectados -------------> Se les dice 'to be adjancet(ayeisent) to each other' or neighbors
    Todos los vertex conectados ---> El grafico se considera como 'connected graph'

¿Cómo lo implementas?
    Clases
    Hash-tables
        const friends = {
            Alice: ['Bob', 'Jota'],
            Bob: ['Jota', 'Ruben'],
            Jota: ['Matt', 'Alice']
        }

        O(1) Para saber los amigos de cualquier persona
    
Directed Graph
           A
       /       \
         ------> 
      B          C
        <-------
    
    Se muestra la direccion de la relacion. A está conectado con B y C, pero ellos NO con A
        B y C estan mutuamente conectados
    
    const friends = {
        A: ['B', 'C'],
        B: ['C'],
        C: ['B']
    }

Operations
    Search:  Hace refencia a ir de un vertex a otro ---> path: la secuencia de edges para llegar de un vertex a otro
        Decir 'search' puede ser para buscar un vertex o para hacer traverse del graph

        2 formas
            1. Depth-first search(DFS): Funciona PARECIDO al algoritmo de traverse en binary tree search. Lo importante
                aca es guardar los vertex que ya hayas recorrido ¿por qué? Porque los graph pueden tener cycles, lo
                que hace que tu algoritmo se ejecute infinitamente

                Cada vez que visites un vertex, lo agregas como key en un hash-table y como valor colocas true

                Profundidad

                Proceso (pag 353 para ver el ejemplo)
                    1. Start at any random vertex within the graph.
                    2. Add the current vertex to the hash table to mark it as having been visited.
                    3. Iterate through the current vertex’s adjacent vertices.
                    4. For each adjacent vertex, if the adjacent vertex has already been visited,
                        ignore it.
                    5. If the adjacent vertex has not yet been visited, recursively perform depthfirst search on that vertex.

                Comportamiento
                    Se aleja lo mas posible del starting vertex

            2. Breadth-first search(BFS): No utiliza recursion, utiliza queues (FIFO)
                Amplitud 

                Proceso (pag 362 el ejemplo)
                    1. Start at any vertex within the graph. We’ll call this the “starting vertex.”
                    2. Add the starting vertex to the hash table to mark it as having been visited.
                    3. Add the starting vertex to a queue.
                    4. Start a loop that runs while the queue isn’t empty.
                    5. Within this loop, remove the first vertex from the queue. We’ll call this
                        the “current vertex.”
                    6. Iterate over all the adjacent vertices of current vertex.
                    7. If the adjacent vertex was already visited, ignore it.
                    8. If the adjacent vertex has not yet been visited, mark it as visited by adding
                        it to a hash table, and add it to the queue.
                    9. Repeat this loop (starting from Step 4) until the queue is empty.
                
                Comportamiento
                    Recorre PRIMERO los vertex que esten mas cerca al starting vertex
            
            ¿Cuál elegis?
                Depende de la situacion
                    Si queres buscar un dato que esta cerca del starting vertex ---> breadth-first search
                    Si queres buscar un dato que esta lejos del starting vertex ---> depth-first search

        Time complexity
            V + 2E ------> O(V + E) ----> Vertex + Edge

            La cantidad de pasos va a depender de la cantidad de vertex y lineas que haya en el graph
                ¿Por qué 2E? Porque las lineas se visitan mas de una vez, en cada comparacion se visitan 2 veces

Weighted Graphs
    Es un graph donde sus edges tienen informacion adicional. Esto se puede dar en graph comunes o directionals

    Ej.
        Un graph donde los vertex son ciudades, y cada edge cuenta con el precio de un vuelo entre cada una de ellas

    Que las lineas tengan informacion adicional te permite hacer mas cosas, entre las mas usadas es encontrar
        el camino mas corto de un vertex a otro -----> shortest path problem

        El algoritmo mas conocido que resuelve este problema es "dijkstra's" algorithm

        Con este algoritmo podriamos encontrar el camino mas barato si queremos ir de la ciudad 'x' a la ciudad 'y'
*/

/*                                          (Algo)Dijkstra's
Pronunciacion daikstra
No solamente encuentra el camino mas barato de lugar 'x' hacia 'y', sino que encuentra TODOS los caminos mas baratos
    de 'x' a cualquier lugar ('c', 'd', 'f', etc.) los cuales almacena en una hash-table

¿Cómo funciona?
    1. We visit the starting city, making it our “current city.”
    2. We check the prices from the current city to each of its adjacent cities.
    3. If the price to an adjacent city from the starting city is cheaper than the
        price currently in cheapest_prices_table (or the adjacent city isn’t yet in the
        cheapest_prices_table at all):
    a. We update the cheapest_prices_table to reflect this cheaper price.
    b. We update the cheapest_previous_stopover_city_table, making the adjacent city
        the key and the current city the value.
    4. We then visit whichever unvisited city has the cheapest price from the
        starting city, making it the current city.
    5. We repeat the Steps 2 through 4 until we’ve visited every known city.
        Again, this will all make more sense when we walk through an example.
    
    Pagina 382

*/

/*                                          Espacio ocupado/Space complexity
¿Qué es?
    Space complexity hace referencia a la memoria que consume un algoritmo

Ideal
    En un mundo ideal siempre usarias un algortimo que sea rapido y que consuma poca memoria, pero hay situaciones
    en las que tenes que elegir una de las dos. Esto requiere que sepas cuando elegir velocidad sobre consumo de 
    memoria y cuando consumo de memoria sobre velocidad

Key question
    Si hay N elementos de la data, ¿cuantas unidades de memoria consumirá el algoritmo?

    Solo te focalizas en la NUEVA DATA Y EL ESPACIO QUE CONSUMIRÁ, no en la ya existente
        Este extra-space se lo conoce como 'auxiliary space'

    Ej.
        1. Funcion que toma un array N como parametro y devuelve un nuevo array N ---> O(N)
            porque cada vez que ejecutes esa funcion te va a devolver un nuevo array con LA MISMA CANTIDAD de N
            elementos, haciendo que te consuma N

        2. Funcion que toma un array N como parametro y MODIFICA ese array ----------> O(1) 
            porque el consumo siempre será el mismo, en este caso 0, siendo constante
        
        1 ---> TM O(N) y SC O(N)
        2 ---> TM O(N) y SC O(1) 

        Claramente se puede ver que la segunda funcion es mas eficiente que la primera, debido al space complexity

Trade-offs entre time y space complexity
    Puede que te topes con opciones en las cuales el time complexity sea mejor que el space complexity y viceversa,
        la eleccion de una opcion sobre otra va a depender del caso en particular. Si necesitas cuidar la memoria,
        elegis el que consuma menos, y si necesitas que sea rapida la app, elegis el que tiene menos time complexity
    
Recursion    
    Hasta ahora estas contando como space complexity la creacion de nueva data, pero puede ocurrir que un algoritmo
        ocupe memoria sin la necesidad de crear nueva data
    
    La recursion al llenar el call stack con las funciones, OCUPA MEMORIA TEMPORAL ya que despues es vaciado ese
        call stack. Necesitas tener memoria para almacenar las funciones en el call stack
    
    Una funcion recursiva ocupa una unidad de space por cada llamada recursiva que haga.  A recursive function takes
        up a unit of space for each recursive call it makes.

        Para saber cuanto space consume tenes que saber la cantidad maxima de funciones que se almacenarán en el
        call stack

    Quicksort ---> su space complexity es log N
        ¿Por qué? Porque a medida que va haciendo el partitioning, la dat se parte en 2 haciendo que la cantidad de 
            recursive calls tambien se parta en 2 (halving), llegando asi a tener un call stack con el size of log(N)

*/

/*                                          Code optimization techniques
Steps
    1. Determine the Big O category of your current algorithm. (This is the prereq.)

    2. Determine the best-imaginable Big O you could dream of for the problem
        at hand. Remeber that it should be possible, for example you can't print all numbers of an array just in
        O(1) because you have to go through every element of the array bringing you as the best case a O(N)

    3. If the best-imaginable Big O is faster than your current Big O, you can
        now try to optimize your code, with the goal of bringing your algorithm
        as close to the best-imaginable Big O as possible.

    Es importante mencionar que no siempre se puede optimizar el codigo


*/

/*                                          Stability in Algorithms
¿Qué es la estabilidad?
    Se presenta en analisis de la estabilidad cuando en la data structure tenemos keys duplicadas
        key podria ser el nombre, pero con valor distinto --> {Raul: hola, Raul: chau} 

    Se dice que el algoritmo es estable si la posicion relativa entre uno y el otro es preservada luego de ser 
        ordenado
       .                v   n   v   v   n
        Ej. instancia [10, 20, 20, 30, 10] ---> 10 y 20 estan duplicados

            Si se preserva el siguiente orden luego de ser ordeando, se dice que el algoritmo es stable
                10v esta antes de 10n
                20n esta antes de 20v

           .                       v   n   n   v   n
            luego de ordenar --> [10, 10, 20, 20, 30] --> 10v esta antes de 10n y 20n esta antes de 20v --> stable

           .                       n   v   v   n   n
            luego de ordenar --> [10, 10, 20, 20, 30] --> 10v NO esta antes de 10n y 20n NO esta antes de 20v --> NO stable
            

    (En este ejemplo de numeros, aunque esten repetidos, no es importante la estabilidad)

    Ej. donde si es importante estabilidad
        instancia --> [{Joaquin: A}, {Valeria: B}, {Susana: A}, {Alejandro: A}, {Belen: B}]
            donde key: nombre estudiante y value: materia de facultad

        Luego de ordenar por materia de facultad obtenemos:
            [{Joaquin: A}, {Susana: A}, {Alejandro: A}, {Valeria: B}, {Belen: B}] --> stable
            [{Susana: A}, {Joaquin: A}, {Alejandro: A}, {Belen: B}, {Valeria: B}] --> NO stable
*/

/*                                          Online and Offline Algorithms
Online y Offline
    Un online algorithm es un algoritmo que permite procesar el input de manera incompleta o que se va completando
        de manera dinamica, mientras que un offline necesita del input completo de antemano

    Ej. con algoritmos de sort --> selection e insertion sort
        Selection Sort necesita del input completo de antemano -----> offline
        Insertion Sort puede ordenar teniendo el input incompleto --> online
        


*/

/*                                          Notations
Big O
    Se utiliza para el WORST case running time

Big Theta (Θ)
    Se utiliza para el AVERAGE case running time

Big Omega (Ω)
    Se utiliza para el BEST case running time


*/

// ------------------------------------------------ Sort ---------------------------------------------------------

/*                                          Merge Sort
Time complexity
    Best -----> O(N log N)
    Average --> O(N log N)
    Worst ----> O(N log N)


How it works?
    Va haciendo un halving de la data hasta que queda 1 solo elemento
    Ordena esas partes divididas y las va juntando

    Ej.
    1.            [9, 6, 2, 9, 1]
    
    2.        [9, 6]          [2, 9, 1]

    3.    [9]      [6]      [2]     [9, 1]

    4.    [9]      [6]      [2]      [9]    [1]

    5.        [6, 9]       [2]      [1, 9]

    6.        [6, 9]        [1, 2, 9]
            
    7.            [1, 2, 6, 9, 9] 

    ¿Cómo haces el merge entre 2 arrays previamente ordenados?
        ej. [2, 11, 18, 20, 22] y [4, 9, 19, 25]

        Usas un pointer en cada array, comparas valores y colocas el mas chico en un nuevo array y MOVES EL 
            POINTER del valor mas chico 1 indice hacia adelante

         ↓                       ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          2 < 4 --->  [2]

        .   ↓                    ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          11 > 4 --->  [2, 4]

        .   ↓                       ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          11 > 9 --->  [2, 4, 9]
        
        .   ↓                           ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          11 < 19 --->  [2, 4, 9, 11]

        .        ↓                      ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          18 < 19 --->  [2, 4, 9, 11, 18]

        .            ↓                  ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          20 > 19 --->  [2, 4, 9, 11, 18, 19]

        .            ↓                      ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          20 < 25 --->  [2, 4, 9, 11, 18, 19, 20]

        .                ↓                  ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          22 < 25 --->  [2, 4, 9, 11, 18, 19, 20, 22]

        .                ↓                  ↓
        [2, 11, 18, 20, 22]     [4, 9, 19, 25]          25 --->  [2, 4, 9, 11, 18, 19, 20, 22, 25]

        Hacer el proceso hasta que hayas recorrido todo UN ARRAY, si quedan valores en el otro lo colocas en
            el tercer array 

    Merge Sort iterable
        [8, 2, 9, 6, 5, 3, 7, 4]
         \ /    \ /   \ /   \ /
        [2,8] [6,9]  [5,3] [4,7]
           \   /        \   /
         [2,6,8,9]     [3,4,5,7]
            \             /
            [2,3,4,5,6,7,8,9]
Implementation
    

*/

// ----------------------------------------------- Search --------------------------------------------------------


// ---------------------------------------- Problem Solving Patterns --------------------------------------------------------

/* Sliding Window
¿Cómo funciona?
    Es una ventana del array, linked list, string que puede ir creciendo o achicandose pero se va trasladando. 
    Esta ventana solamente enmarca una cantidad y no todos los elementos de la DS

    Array
            1 2 3 4 5 6

    Window (entre | |)
            | 1 2 3 | 4 5 6 ---> 1 | 2 3 4 | 5 6 ---> 1 2 | 3 4 5 | 6 

¿Cuándo utilizarlo?
    Este patron es utilizado para resolver problemas donde la DS es lineal (linked list, array o string)


Ej.
    Ventana el binarySearch algorithm
*/

/* Two Pointers
¿Cómo funciona?
    Es un patron en donde 2 punteros iteran por una DS hasta que uno o los dos cumplen una condición

¿Cuándo usarlo?
    Cuando estas buscando pares un linked list o array ordenado 
    Cuando tenes que encontrar un conjunto de elementos que cumplen ciertas condiciones en un linked list o array
        ordenado. Este conjunto de elementos puede ser un par, triple o una parte del array

Ej. 
    Square of a Sorted Array (easy)

        const sortedSquares = nums => {
            let leftPointer = 0,
                rigthPointer = nums.length - 1,
                finalArray = [];

            while (leftPointer <= rigthPointer) {
                let leftNumber = square(nums[leftPointer]),
                rigthNumber = square(nums[rigthPointer]);

                if (leftNumber < rigthNumber) {
                    finalArray.push(rigthNumber);
                    rigthPointer--;
                } else {
                    finalArray.push(leftNumber);
                    leftPointer++;
                }
            }

            return finalArray.reverse()
        };

        function square(number) {
            return number * number;
        }

*/

/* Frequency Counter
¿Cómo funciona?
    En un objeto vas dejando los valores guardados o ya iterados con key:value

    Ej.
        let frequencyCounter = {
            " ": 1
            d: 1
            e: 1
            h: 1
            l: 3
            o: 2
            r: 1
            w: 1
        }

*/


