class GestorRobots {
    constructor() {
        this.prototipos = {};
    }

    registrarPrototipo(tipo, prototipo) {
        this.prototipos[tipo] = prototipo;
    }

    obtenerPrototipo(tipo) {
        const prototipo = this.prototipos[tipo];
        return prototipo ? prototipo.clonar() : null;
    }
}

module.exports = GestorRobots;
