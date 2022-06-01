function validacion(){

    var nombre = document.getElementById(txt_nombre).value
    var apellido = document.getElementById(txt_apellido).value
    var rut = document.getElementById(txt_rut).value
    var telefono = documente.form_contact.txt_numero.value
    var correo = document.form_contact.txt_correo.value
    var region = document.getElementById("sel_region")


    if (rut.length>10 || rut.length<9)
    {
        alert("El rut no es valido... Tiene que tener entre 9 y 10 caracteres")
        document.form_contact.txt_rut.focus()
        return false
    }
    if (nombre.length < 3)
    {
        alert("El nombre tiene que ser mayor a 3 caracteres")
        document.form_contact.txt_nombre.focus()
        return false
    }
    if (apellido.length <3)
    {
        alert("El apellido tiene que tener mas de 3 caracteres")
        document.form_contact.txt_apellido.focus()
        return false
    }
    if (correo.length <3)
    {
        alert("El correo electronico tiene que tener mas de 3 caracteres")
        document.form_contact.txt_correo.focus()
        return false
    }
    if (correo.indexOf('@')<0 || correo.indexOf('.')<0)
    {
        alert("Debe ingresar un correo  valido ej. nombre@empresa.com")
        document.form_contact.txt_correo.focus()
        return false

    }
    document.write(nombre)

}