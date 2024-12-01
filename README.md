## Proyecto de Robots de fabrica con el Patron Prototype en Node.js
Este proyecto implementa el **Patron de Diseño Prototype** en Node.js, el cual se utiliza para clonar objetos sin necesidad de crear nuevos desde cero. En este caso, se gestionan diferentes tipos de robots utilizados en una fabrica (robots de limpieza y robots de soldadura), que pueden ser clonados y personalizados para adaptarse a las necesidades de la planta.

## Estructura del Proyecto
perl
Copiar código
│   index.js                 # Punto de entrada de la aplicacion
│   package-lock.json        # Archivo de dependencias
│   package.json             # Archivo de configuracion de dependencias
│   README.md                # Documentacion del proyecto
│
└───robots                   # Clases principales del sistema
        GestorRobots.js      # Clase para gestionar prototipos de robots
        RobotBase.js         # Clase base abstracta para los robots
        RobotLimpieza.js     # Clase concreta para robots de limpieza
        RobotSoldadura.js    # Clase concreta para robots de soldadura

## Ejecute el programa 
Para correr el programa escriba **node index.js** sobre la terminal donde esta abierto el programa.

## Flujo de Ejecucion
Tipo: Robot de Limpieza, Modelo: CleanBot-2024, Capacidad: Alta, Estado: En uso
Tipo: Robot de Soldadura, Modelo: WeldBot-500, Potencia: Alta, Estado: Mantenimiento

## Clases Principales y Metodos
1. Clase RobotBase (robots/RobotBase.js) --> La clase base abstracta para los robots. Define la interfaz clonar() que debe ser implementada por las clases concretas.
**Metodos principales**
    1. clonar() --> Metodo abstracto para clonar el objeto.
    2. toString() --> Metodo abstracto para mostrar la representacion del objeto.
2. Clase RobotLimpieza (robots/RobotLimpieza.js) --> Esta clase concreta representa un robot de limpieza.
**Metodos principales**
    1. setModelo(modelo) --> Establece el modelo del robot.
    2. setCapacidad(capacidad) --> Establece la capacidad del robot.
    3. setEstado(estado) --> Establece el estado del robot.
    4. clonar() --> Clona el robot de limpieza.
    5. toString() --> Devuelve una cadena con los detalles del robot.
3. Clase RobotSoldadura (robots/RobotSoldadura.js) --> Esta clase concreta representa un robot de soldadura.
**Metodos principales**
    1. setModelo(modelo) --> Establece el modelo del robot.
    2. setPotencia(potencia) --> Establece la potencia del robot.
    3. setEstado(estado) --> Establece el estado del robot.
    4. clonar() --> Clona el robot de soldadura.
    5. toString() --> Devuelve una cadena con los detalles del robot.
    4. Clase GestorRobots (robots/GestorRobots.js) --> Esta clase es responsable de gestionar los prototipos de los robots y de proporcionar la funcionalidad de clonacion.
**Metodos principales**
    1. registrarPrototipo(tipo, prototipo) --> Registra un prototipo de robot en el gestor.
    2. obtenerPrototipo(tipo) --> Obtiene un prototipo y lo clona según el tipo solicitado.

## Implementacion del Patron Prototype
El patron Prototype permite crear nuevos objetos (en este caso, robots) clonando objetos existentes (prototipos), lo que facilita la creacion de nuevos robots sin necesidad de inicializar todos sus atributos desde cero.