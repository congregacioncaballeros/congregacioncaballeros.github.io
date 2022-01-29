const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();

   await fetch('https://sheet.best/api/sheets/f601f252-f936-40dd-a11b-356876dde7f2',{
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "Nombre": formulario.nombre.value,
            "Edad": formulario.edad.value,
            "DPI": formulario.dpi.value,
            "Telefono": formulario.telefono.value,
            "Correo": formulario.correo.value,
            "Congregacion": "_Caballero de Jesus del Aposento",
            "Cuadro_de_Vacunacion":"Confirmando Datos..."

        })
    });

    registro.classList.remove('activo');
    exito.classList.add('activo');
});