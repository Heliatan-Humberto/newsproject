function analisar() {
    let cpf = Number(document.querySelector('input#inum').value)

    if (cpf < 0 ) {
        window.alert('ERRO')
    }
}