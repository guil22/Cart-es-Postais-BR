const paineis = document.querySelectorAll('.painel');

paineis.forEach((painel) => {
    console.log(painel)
    
    painel.addEventListener('click', () => {
        removeClasse()
        painel.classList.add('ativo')
    })
})

function removeClasse(){
    paineis.forEach((painel) =>{
    painel.classList.remove('ativo')
   }) 
}