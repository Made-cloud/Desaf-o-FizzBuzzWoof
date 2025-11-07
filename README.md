# Instructions
The FizzBuzz challenge is one of the most common programming interview tasks in the world. The challenge is to write a program that will output a list of numbers, replacing every 3rd number with Fizz, and every 5th number with Buzz.

**Today, you will build and iterate on this challenge, and you will teach yourselves how to use for loops along the way.**

For each task, copy your code from the previous task, and extend it during the next task.


## Tasks

1. Can you create a JavaScript program that will output every number from 1 to 105?
    * You will fail this task if your program stops short at 104 numbers. **Computers are very literal!**

2. Copy the code from task1.js into task2.js. Can you now replace every 3rd number with Fizz?
    * Ensure your code outputs only Fizz for these numbers!

3. Can you also replace every 5th number with Buzz, and every number that satisfies both conditions with FizzBuzz?
    * Ensure this outputs FizzBuzz on one line, and not two separate lines, or in the wrong order.

4. Can you continue the pattern by also replacing every 7th number with Woof, alongside the other conditions?
    * The logical order to the output in the event that a number satisfies all conditions is: Fizz, then Buzz, then Woof.


## Extra Tasks

If you have completed the above tasks, try the following extra tasks for a bonus challenge!

5. Can you prompt the user to input the number of lines that will be generated, or to generate a specific line?

6. Can you assign the output numbers of a generated sequence to elements in a list or array?

7. How might you attempt to replace a sequence of odd prime numbers with a new word in a list or array?
    * An example list has been provided in the buzzWords array. Add your own words for higher prime numbers!


# 🏁 Laboratorio - Bucles en JavaScript

# 🧠 *Desafío FizzBuzzWoof*

## 🎯 Objetivo general

Desarrollar la **lógica de programación** usando bucles `for` en JavaScript, construyendo paso a paso un desafío clásico: **FizzBuzz**.

El propósito es que cada tarea incremente el nivel de dificultad y comprensión, hasta dominar el uso de condicionales, ciclos y arrays.

---

## 🧩 Contexto

El **Desafío FizzBuzz** es uno de los ejercicios de codificación más conocidos.

Se utiliza en entrevistas técnicas para evaluar si una persona entiende los fundamentos del control de flujo y la lógica condicional.

El desafío dice:

> Imprime los números del 1 al 105.
> 
> 
> Si el número es múltiplo de 3, muestra “Fizz”.
> 
> Si es múltiplo de 5, muestra “Buzz”.
> 
> Si cumple ambas condiciones, muestra “FizzBuzz”.
> 

Nosotros iremos **más allá**, añadiendo condiciones adicionales, interacción con el usuario y estructuras más complejas.

---

## ⚙️ Estructura del proyecto

📦 **Archivos para descargar:** 

[fizzbuzz-lab.rar](attachment:0c3cd35e-e521-4209-ace6-cfffa2a3c7db:fizzbuzz-lab.rar)

*(contiene todos los archivos del laboratorio)*

```
fizzbuzz-lab/
├── index.js          # Controla la ejecución de cada tarea (NO MODIFICAR)
├── task1.js
├── task2.js
├── task3.js
├── task4.js
├── task5.js
├── task6.js
└── task7.js
```

> ⚠️ Importante: no modifiques el archivo index.js.
> 
> 
> Este ya está configurado para ejecutar cada tarea según el número que ingreses.
> 

---

## 🚀 Cómo ejecutar una tarea

Desde la terminal:

```bash
node index.js
```

Luego el programa te pedirá el número de tarea (del 1 al 7).

O puedes ejecutar directamente una tarea específica:

```bash
node index.js 3
```

Esto ejecutará el archivo `task3.js`.

---

## 📚 Desarrollo de las tareas

---

### 🧮 **Tarea 1 – Imprimir los números del 1 al 105**

**Objetivo:**

Aprender a usar un bucle `for` para recorrer secuencias numéricas.

**Instrucciones:**

1. Abre el archivo `task1.js`.
2. Crea un bucle que imprima los números del **1 al 105**.
3. Muestra cada número con `console.log()`.
4. Asegúrate de que el bucle no se detenga en 104 (error común).

💬 **Tip:**

Recuerda que los bucles `for` tienen tres partes:

```jsx
for (inicio; condición; incremento) { ... }
```

**Ejemplo de salida esperada:**

```
1
2
3
...
105
```

---

### ⚡ **Tarea 2 – Reemplazar múltiplos de 3 con “Fizz”**

**Objetivo:**

Usar condicionales `if` junto con el bucle `for`.

**Instrucciones:**

1. Copia el código de `task1.js` a `task2.js`.
2. Agrega una condición que detecte si un número es múltiplo de 3.
3. En esos casos, en vez del número, muestra `"Fizz"`.
4. Usa el operador módulo `%`.

💬 **Pista:**

Un número es múltiplo de 3 cuando `numero % 3 === 0`.

**Salida esperada:**

```
1
2
Fizz
4
5
Fizz
...

```

---

### 💥 **Tarea 3 – Agregar múltiplos de 5 y “FizzBuzz”**

**Objetivo:**

Combinar varias condiciones y entender el orden lógico.

**Instrucciones:**

1. Copia tu código de `task2.js` a `task3.js`.
2. Agrega una condición para los múltiplos de 5 → `"Buzz"`.
3. Si un número es múltiplo de **3 y 5**, muestra `"FizzBuzz"`.
4. Cuida el **orden** de las condiciones:
    - Primero verifica si es múltiplo de ambos.
    - Luego las individuales (3 o 5).

**Salida esperada:**

```
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

```

---

### 🐶 **Tarea 4 – Agregar múltiplos de 7 con “Woof”**

**Objetivo:**

Ampliar la lógica condicional y respetar el orden de concatenación.

**Instrucciones:**

1. Copia el código de `task3.js` a `task4.js`.
2. Agrega una nueva regla:
    - Si el número es múltiplo de 7 → `"Woof"`.
3. Si cumple varias condiciones, imprime las palabras en este orden:
    
    ```
    Fizz → Buzz → Woof
    
    ```
    

**Ejemplo de comportamiento:**

```
14 → Woof
21 → FizzWoof
35 → BuzzWoof
105 → FizzBuzzWoof

```

---

### 💬 **Tarea 5 – Entrada del usuario**

**Objetivo:**

Pedir datos al usuario desde la consola y usarlos dentro del programa.

**Instrucciones:**

1. Copia el código de `task4.js` a `task5.js`.
2. Instala la dependencia `prompt-sync`:
    
    ```bash
    npm install prompt-sync
    
    ```
    
3. Importa la librería al inicio del archivo.
4. Pide al usuario que ingrese **hasta qué número** generar la lista.
5. Usa ese valor para limitar el bucle `for`.

💡 **Pistas:**

- La entrada del usuario siempre llega como **texto**, conviértela a número.
- Usa `parseInt()` o `parseFloat()`.

**Desafío adicional:**

Valida que el usuario no ingrese números mayores a 105.

---

### 🧱 **Tarea 6 – Guardar los resultados en un arreglo**

**Objetivo:**

Aprender a crear y manipular **arrays** en JavaScript.

**Instrucciones:**

1. Copia el código de `task5.js` a `task6.js`.
2. Declara un arreglo vacío al inicio, por ejemplo:
    
    ```jsx
    let resultados = [];
    
    ```
    
3. En vez de mostrar cada resultado en consola dentro del bucle, **guárdalo** en el arreglo.
4. Al final del programa, imprime el arreglo completo.

💡 **Pistas:**

- Usa el método `.push()` para añadir elementos.
- Recuerda: un array puede guardar tanto números como texto.

**Desafío adicional:**

Muestra cuántos elementos tiene el arreglo con `.length`.

---

### 🧠 **Tarea 7 – Reemplazar números primos con palabras**

**Objetivo:**

Combinar bucles anidados y lógica condicional avanzada.

**Instrucciones:**

1. Copia el código de `task6.js` a `task7.js`.
2. Usa el arreglo ya creado:
    
    ```jsx
    let buzzWords = ["Fizz", "Buzz", "Woof", "Bark", "Awoo", "Bang"];
    
    ```
    
3. Agrega lógica para detectar números **primos**.
4. Si un número es primo, reemplázalo con una palabra del arreglo `buzzWords`.
5. Si no lo es, deja el número original.

💡 **Pistas:**

- Un número primo solo se divide entre 1 y sí mismo.
- Puedes usar un `for` dentro de otro `for` para verificar divisibilidad.
- Usa el operador `%` para elegir palabras del arreglo según el número.

**Desafío adicional:**

Agrega más palabras al arreglo y personaliza el mensaje.

---

## 🧾 Conexión con el Canvas

| Pregunta en Canvas | Tarea relacionada | Descripción |
| --- | --- | --- |
| 1 | Tarea 1 | Imprimir los números del 1 al 105 |
| 2 | Tarea 2 | Reemplazar múltiplos de 3 con Fizz |
| 3 | Tarea 3 | Agregar Buzz y FizzBuzz |
| 4 | Tarea 4 | Agregar Woof (múltiplos de 7) |
| 5 | Tareas 5–7 | Entrada del usuario, arrays y números primos |
| 6 | Reflexión | Evaluar el aprendizaje y dificultades encontradas |

---

## 💬 Reflexión final (para entregar en Canvas)

Responde brevemente:

1. ¿Qué fue lo más fácil de implementar y por qué?
2. ¿Qué parte te resultó más difícil o confusa?
3. ¿Qué aprendiste sobre los bucles y las condiciones?
4. ¿Qué podrías mejorar si volvieras a hacerlo?

---

## 🧑‍🏫 Recomendaciones del profesor

- No copies el código completo de un compañero.
    
    👉 ¡Probar y equivocarse es parte del aprendizaje!
    
- Usa `console.log()` para verificar tu lógica paso a paso.
- Prueba con diferentes números y observa los patrones.
- Comenta tu código explicando cada parte.

---

## 🏁 Evaluación

| Criterio | Descripción | Puntaje |
| --- | --- | --- |
| ✅ Estructura del código | Usa correctamente bucles y condiciones | 2 pts |
| 🔢 Precisión | Resultados correctos según las reglas | 2 pts |
| 💬 Claridad | Código comentado y legible | 2 pts |
| 💡 Creatividad | Agrega algo propio (emojis, mensajes, palabras nuevas) | 2 pts |
| 📚 Reflexión Canvas | Responde las preguntas con coherencia | 2 pts |
| **Total** |  | **10 pts** |

---

## 🗣️ Foro de evaluación

Una vez terminada la actividad, **responde el foro:**

📘 [**13.2 - TIFC2DEV-SD-02 / Evaluación del Laboratorio de Codificación de Bucles (90 min)**](https://www.notion.so/4e0825c7c7e74bc0a6f606b7118fda15?pvs=21)

> 📝 Nota: Si no puedes acceder al enlace, búscalo manualmente por el código del foro en Canvas.
>