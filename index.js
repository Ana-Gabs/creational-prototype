const RobotLimpieza = require("./robots/RobotLimpieza");
const RobotSoldadura = require("./robots/RobotSoldadura");
const GestorRobots = require("./robots/GestorRobots");

// Crear gestor de prototipos
const gestor = new GestorRobots();

// Registrar prototipos
const prototipoLimpieza = new RobotLimpieza("CleanBot-2000", "Alta", "Disponible");
const prototipoSoldadura = new RobotSoldadura("WeldBot-500", "Media", "Disponible");
gestor.registrarPrototipo("limpieza", prototipoLimpieza);
gestor.registrarPrototipo("soldadura", prototipoSoldadura);

// Clonar y personalizar un robot de limpieza
const nuevoRobotLimpieza = gestor.obtenerPrototipo("limpieza");
if (nuevoRobotLimpieza) {
    nuevoRobotLimpieza.setEstado("En uso");
    nuevoRobotLimpieza.setModelo("CleanBot-2024");
    console.log(nuevoRobotLimpieza.toString());
}

// Clonar y personalizar un robot de soldadura
const nuevoRobotSoldadura = gestor.obtenerPrototipo("soldadura");
if (nuevoRobotSoldadura) {
    nuevoRobotSoldadura.setPotencia("Alta");
    nuevoRobotSoldadura.setEstado("Mantenimiento");
    console.log(nuevoRobotSoldadura.toString());
}
