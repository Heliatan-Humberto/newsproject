function carregar() {
    var revel = document.querySelector('img.quadro1')
    var revel2 =  document.querySelector('img.quadro2')

    revel.addEventListener('click', clicar)
    revel2.addEventListener('click', clicar2)

    function clicar() {
        revel.src = 'imagens/350z.jpg'
    }
    function clicar2() {
        revel2.src = 'imagens/Alpine.jpg'
    }
}

