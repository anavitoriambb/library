$(document).ready(function() {
    $('#AUTOR').keyup(function(e) {
        e.preventDefault()

        let NOME = `NOME= ${$(this).val()}`


        if ($(this).val().length >= 3) {

            $('#autores').empty()

            $.ajax({
                dataType: 'json',
                type: 'POST',
                assync: true,
                data: NOME,
                url: 'src/usuario/model/find-usuario.php',
                succes: function(dado) {
                    for (const dado of dados) {
                        $('#autores').append(`<input type="text" name="" id=""${dado.IDUSUARIO}"" class="form-control" value="${dado.NOME}" disabled>`)
                    }
                }
            })
        } else {
            $('#autores').empty();
        }
    })
})