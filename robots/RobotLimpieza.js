const RobotBase = require("./RobotBase");

class RobotLimpieza extends RobotBase {
    constructor(modelo = "Desconocido", capacidad = "Baja", estado = "Disponible") {
        super();
        this.tipo = "Robot de Limpieza";
        this.modelo = modelo;
        this.capacidad = capacidad;
        this.estado = estado;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    setCapacidad(capacidad) {
        this.capacidad = capacidad;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    clonar() {
        return new RobotLimpieza(this.modelo, this.capacidad, this.estado);
    }

    toString() {
        return `Tipo: ${this.tipo}, Modelo: ${this.modelo}, Capacidad: ${this.capacidad}, Estado: ${this.estado}`;
    }
}

module.exports = RobotLimpieza;
