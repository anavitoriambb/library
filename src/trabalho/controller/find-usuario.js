$(document).ready(function() {
    $('.btn-find').click(function(e) {
        e.preventDefault()

        let NOME = `NOME= ${$('#AUTOR').val()}`

        $.ajax({
            dataType: 'json',
            type: 'POST',
            assync: true,
            data: NOME,
            url: 'src/usuario/model/find-usuario.php',
            succes: function(data) {}
        })
    })
})