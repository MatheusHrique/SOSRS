// function enviarDados() {
//     const checkboxes = document.querySelectorAll('input[name="sintomas"]:checked');
//     const sintomasSelecionadas = Array.from(checkboxes).map(checkbox => checkbox.value);

//     // Redireciona para a página resultado.html com os dados na URL
//     window.location.href = `resultado.html?sintomascheck=${sintomasSelecionadas.join(',')}`;
// }

function enviarDados() {
    const checkboxes = document.querySelectorAll('input[name="sintomas"]:checked');
    const sintomasSelecionados = Array.from(checkboxes).map(checkbox => checkbox.value);

    // Redireciona para a página resultado.html com os dados na URL
    window.location.href = `resultado.html?sintomascheck=${sintomasSelecionados.join(',')}`;
}