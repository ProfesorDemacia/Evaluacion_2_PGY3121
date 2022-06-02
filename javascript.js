
$(document).ready(function(){

    $("#form_info").hide();
    $("#ocultar").click(function(){

        $("#form_info").hide();

    });

    $("#mostrar").click(function(){

        $("#form_info").show()
    });
});

function validacion() {

    var nombre = document.form_contact.txt_nombre.value
    var apellido = document.form_contact.txt_apellido.value
    var rut = document.form_contact.txt_rut.value
    var telefono = document.form_contact.txt_numero.value
    var correo = document.form_contact.txt_correo.value
    var region = document.getElementById('sel_region').value
    var checked = 'no'
    var genero = document.form_contact.sel_genero.value
    

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
    if (correo.indexOf('@')<0 || correo.indexOf('.')<0 || correo.length<3)
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
    if ((telefono.toString()).indexOf('+') >0|| (telefono.toString()).indexOf('-')>0)
    {
        alert("El numero no debe contener signo mas o guion")
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

    alert("Su formulario ha sido ingresado con exito!")

    let transferencia_tabla = document.getElementById('tabla_mostrar').insertRow(1);
    let nueva_fila1 = transferencia_tabla.insertCell(0);
    let nueva_fila2 = transferencia_tabla.insertCell(1);
    let nueva_fila3 = transferencia_tabla.insertCell(2);
    let nueva_fila4 = transferencia_tabla.insertCell(3);
    let nueva_fila5 = transferencia_tabla.insertCell(4);
    let nueva_fila6 = transferencia_tabla.insertCell(5);
    let nueva_fila7 = transferencia_tabla.insertCell(6);

    nueva_fila1.innerHTML = nombre;
    nueva_fila2.innerHTML = apellido;
    nueva_fila3.innerHTML = rut;
    nueva_fila4.innerHTML = telefono;
    nueva_fila5.innerHTML = correo;
    nueva_fila6.innerHTML = region;
    nueva_fila7.innerHTML = genero;

}

function limpiar()
{
    form_contact.reset()
}
