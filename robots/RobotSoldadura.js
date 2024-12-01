const RobotBase = require("./RobotBase");

class RobotSoldadura extends RobotBase {
    constructor(modelo = "Desconocido", potencia = "Baja", estado = "Disponible") {
        super();
        this.tipo = "Robot de Soldadura";
        this.modelo = modelo;
        this.potencia = potencia;
        this.estado = estado;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    setPotencia(potencia) {
        this.potencia = potencia;
    }

    setEstado(estado) {
        this.estado = estado;
    }

    clonar() {
        return new RobotSoldadura(this.modelo, this.potencia, this.estado);
    }

    toString() {
        return `Tipo: ${this.tipo}, Modelo: ${this.modelo}, Potencia: ${this.potencia}, Estado: ${this.estado}`;
    }
}

module.exports = RobotSoldadura;
