$(document).ready(function() {

    $('#table-eixo').on('click', 'button.btn-edit', function(e) {

        e.preventDefault()

        // Limpar os campos da minha janela modal
        $('.modal-title').empty()
        $('.modal-body').empty()

        // Criar um novo título para nossa janela modals
        $('.modal-title').append('Edição do eixo tecnológico')

        let IDEIXO = `IDEIXO=${$(this).attr('id')}`

        $.ajax({
            type: 'POST',
            dataType: 'json',
            assync: true,
            data: IDEIXO,
            url: "src/eixo/model/view-eixo.php",
            success: function(dado) {
                if (dado.tipo == "success") {
                    $('.modal-body').load('src/eixo/view/form-eixo.html', function() {
                        $('#NOME').val(dado.dados.NOME)
                        $('#IDEIXO').val(dado.dados.IDEIXO)
                    })
                    $('.btn-save').show()
                    $('.btn-save').removeAttr('data-operation')
                    $('#modal-eixo').modal('show')
                } else {
                    Swal.fire({ //Inicialização do SweetAlert
                        title: 'Library', // Título dda janela SweetAlert
                        text: dado.mensagem, //Mensagem retornada do microserviço
                        type: dado.tipo, //Tipo de retorno [success, info ou error]
                        confirmButtonText: 'OK'
                    })
                }
            }
        })
    })

})