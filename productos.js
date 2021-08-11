let Productos = [];

class Producto {
    constructor(carneroja, carneblanca, pescado, vegetales, frutas, condimentos) {
        this.carneroja = carneroja;
        this.carneblanca = carneblanca;
        this.pescado = pescado;
        this.vegetales = vegetales;
        this.frutas = frutas;
        this.condimentos = condimentos;
        //Si no viene el parametro admin se asume falso (no administrador)
        this.admin = admin === undefined ? false : admin;
    }

}

let admin = new Producto('admin', null, 'admin@localhost', 'admin', null, null,true);
let user1 = new Producto('felipe', 'morales', 'feli1234', 'felipe.morales.querol@gmail.com',null)


Productos = [admin, user1];
console.log('Información cargada correctamente.')

module.exports = { Productos }