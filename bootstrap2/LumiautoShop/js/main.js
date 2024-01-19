$(document).ready(function () {
    /*$('#nomeContato')
    $('#email')*/
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate ({
        rules: {
            nomeContato: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIcorretos} campos incorretos`)
            }
        }
    })
})
