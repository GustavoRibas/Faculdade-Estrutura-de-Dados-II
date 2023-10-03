    function tabuada(){
        let resultado = document.getElementById('resultado')
        let numerob = Number(document.getElementById('numero').value)
    
        let tabuadaHTML = '<h2 class="fw-bolder">Tabuada de ' + numerob + '</h2><br>'
    
        for (let i = 1; i <= 10; i++) {
            tabuadaHTML += numerob + ' x ' + i + ' = ' + (numerob * i) + '<br>'
        }
    
        resultado.innerHTML = tabuadaHTML
    }
    
 /*Agora é com você!
 Construa a sua versão de uma tabuada.
 */