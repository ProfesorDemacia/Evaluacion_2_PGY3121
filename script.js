function validar(){

    var nombre = document.formulario.txt_nombre.value
    var apellido = document.formulario.txt_apellido.value
    var rut = document.formulario.txt_rut.value
    var telefono = documente.formulario.txt_numero.value
    var correo = document.formulario.txt_correo.value
    var region = document.getElementById("sel_region")


    if (rut.length>10 || rut.length<9)
    {
        alert("El rut no es valido... Tiene que tener entre 9 y 10 caracteres")
        document.formulario.txt_rut.focus()
    }
    if (nombre.length < 3)
    {
        alert("El nombre tiene que ser mayor a 3 caracteres")
        document.formulario.txt_nombre.focus()
        return false
    }
    if (apellido.length <3)
    {
        alert("El apellido tiene que tener mas de 3 caracteres")
        document.formulario.txt_apellido.focus()
        return false
    }
    if (correo.length <3)
    {
        alert("El correo electronico tiene que tener mas de 3 caracteres")
        document.formulario.txt_correo.focus()
        return false
    }
    if (correo.indexOf('@')<0 || correo.indexOf('.')<0)
    {
        alert("Debe ingresar un correo  valido ej. nombre@empresa.com")
        document.formulario.txt_correo.focus()
        return false

    }
    if ()

}