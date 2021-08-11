let arrayUsuarios = []

class Usuario{
    constructor(nombre,apellido,email,direccion,passOk){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.direccion = direccion;
        this.passOk = passOk;
    }

    get obtiene_email(){
        return this.email;
    }
    get obtiene_password(){
        return this.passOk;
    }
}

function validaDatos(){
    //valido el nombre
    if (document.crearUsuario.nombre.value.length==0){
        alert("Tiene que escribir su nombre")
        document.crearUsuario.nombre.focus()
        return 0;
    }
    else{
        nombre = document.getElementById("nombre").value;
    }
    //valido el apellido
    if (document.crearUsuario.apellido.value.length==0){
        alert("Tiene que escribir su apellido")
        document.crearUsuario.apellido.focus()
        return 0;
    }
    else{
        apellido = document.getElementById("apellido").value;
    }
    //valido el email
    if (document.crearUsuario.email.value.length==0){
        alert("Debe escribir su email")
        document.crearUsuario.email.focus()
        return 0;
    }
    //creo la variable email aqui sino el primer registro se guarda de forma erronea (consultar porque)
    email = document.getElementById("email").value;
    for(let i=0; i<arrayUsuarios.length;i++){
        user = arrayUsuarios[i];
        user_mail = user.obtiene_email;
        if(document.crearUsuario.email.value === user_mail){
            alert("El Email ya se encuentra registrado")
            document.crearUsuario.email.focus()
            return 0;
        }
        else{
            email = document.getElementById("email").value;
        }
    }
    //valido el direccion
    if (document.crearUsuario.direccion.selectedIndex==0){
        alert("Debe seleccionar un direccion.")
        document.crearUsuario.direccion.focus()
        return 0;
    }
    else{
        direccion = document.getElementById("direccion").value;
    }
    //valido la contraseña
    if (document.crearUsuario.pass.value.length==0){
        alert("Tiene que escribir la contraseña")
        document.crearUsuario.pass.focus()
        return 0;
    }
    if (document.crearUsuario.pass1.value.length==0){
        alert("Tiene que repetir la contraseña")
        document.crearUsuario.pass1.focus()
        return 0;
    }
    if (document.crearUsuario.pass.value !== document.crearUsuario.pass1.value){
        alert("Las contraseñas no coinciden")
        document.getElementById("pass").value = "";
        document.getElementById("pass1").value = "";
        document.crearUsuario.pass.focus()
        return 0;
    }
    else{
        pass = document.getElementById("pass").value;
    }
    
    let usuario = new Usuario(nombre,apellido,email,direccion,pass);
    arrayUsuarios.push(usuario);
    limpiarCampos();
    console.log(arrayUsuarios);
}


function limpiarCampos(){
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("email").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("pass1").value = "";
    
}

function limpiarCamposLogin(){
    document.getElementById("emailIn").value = "";
    document.getElementById("passIn").value = "";
    
}

function login(){
    let pos = null;
    let i = 0;
    let ban = false;
    for(i=0;i<arrayUsuarios.length;i++){
        let user = arrayUsuarios[i];
        let user_email = user.obtiene_email;
        if(document.iniciarSesion.emailIn.value === user_email){
            pos = i;
            if(document.iniciarSesion.passIn.value === arrayUsuarios[i].obtiene_password){
                ban = true;
                alert("Incio de sesion correcta! Posicion " + pos);
                limpiarCamposLogin()
            }
            else{
                ban = true;
                alert("La contraseña es incorrecta");
                document.getElementById("passIn").value = "";
            }
        }
    }
    if(ban == false){
        alert("El email no existe");
        document.getElementById("emailIn").value = "";
    }
    
    //let user_pass = user.obtiene_password;
}