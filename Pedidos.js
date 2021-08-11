let Pedidos = [];

class Pedido {
    constructor(Pollo_ala_parrilla, Pastas, Milanesas, Hamburguesas, Ensaladas, Arroz, Pure) {
        this.Pollo_ala_parrilla = Pollo_ala_parrilla;
        this.Pastas = Pastas;
        this.Milanesas = Milanesas;
        this.Hamburguesas = Hamburguesas;
        this.Ensaladas = Ensaladas;
        this.Arroz = Arroz;
        this.Pure = Pure;
        //Si no viene el parametro admin se asume falso (no administrador)
        this.admin = admin === undefined ? false : admin;
    }

}

let admin = new Pedido('admin', null, 'admin@localhost', 'admin', null, null,true);
let user1 = new Pedido('felipe', 'morales', 'feli1234', 'felipe.morales.querol@gmail.com',null)


Pedidos = [admin, user1];
console.log('Información cargada correctamente.')

module.exports = { Pedidos }