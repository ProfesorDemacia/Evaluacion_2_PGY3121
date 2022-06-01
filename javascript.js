function validacion() {

    var nombre = document.form_contact.txt_nombre.value
    var apellido = document.form_contact.txt_apellido.value
    var rut = document.form_contact.txt_rut.value
    var telefono = document.form_contact.txt_numero.value
    var correo = document.form_contact.txt_correo.value
    var region = document.getElementById('sel_region').value
    var checked = 'no';
    var genero1 = document.getElementById('sel_genero1').value
    var genero2 = document.getElementById('sel_genero2').value
    var genero3 = document.getElementById('sel_genero3').value

    if (rut.length>10 || rut.length<9)
    {
        alert("El rut no es valido... Tiene que tener entre 9 y 10 caracteres")
        document.form_contact.txt_rut.focus()
        return false
    }
    if (rut.indexOf('-')<0 || rut.indexOf('.')>=0)
    {
        alert("El rut tiene que ser sin puntos y con guion")
        document.form_contact.rut.focus()
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
    if (correo.indexOf('@')<0 || correo.indexOf('.')<0 && correo.length<3)
    {
        alert("Debe ingresar un correo valido ej: nombre@empresa.com")
        document.form_contact.txt_correo.focus()
        return false
    }
    if ((telefono.toString()).substring(0,1)!='9')
    {
        alert("Ingrese un numero que comience con 9")
        document.form_contact.txt_numero.focus()
        return false
    }
    if ((telefono.toString()).length !=9 )
    {
        alert("El numero tiene que ser de 9 digitos")
        document.form_contact.txt_numero.focus()
        return false
    }
    if (region == '0')
    {
        alert("Debe seleccionar una Región")
        document.form_contact.sel_region.focus()
        return false
    }
    /**Validacion de los radio */
    if (document.form_contact.sel_genero[0].checked ==true || document.form_contact.sel_genero[1].checked == true || document.form_contact.sel_genero[2].checked == true )
    {
        checked = 'si'
    }
    if (checked == 'no')
    {
        alert("Debe seleccionar un genero")
        return false
    } 

}

function limpiar()
{
    form_contact.reset()
}