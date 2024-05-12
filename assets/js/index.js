const btn__descricao = document.querySelectorAll('.btn__descricao')

btn__descricao.forEach(function (btn) {

    btn.addEventListener('click', function () {
        const estadoDaDescricao = this.parentNode.nextElementSibling

        estadoDaDescricao.classList = estadoDaDescricao.classList == 'lista_descricao mostrar' ? 'lista_descricao ocultado' : 'lista_descricao mostrar'

        const estadoIcone = this
        estadoIcone.classList = estadoIcone.classList == 'btn__descricao ri-add-circle-fill' ? 'btn__descricao ri-indeterminate-circle-fill' : 'btn__descricao ri-add-circle-fill'

    })

})



