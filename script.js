
    let numero = Math.floor(Math.random() * 100) + 1;
        let tentativas = 0;

            function verificar() 
            
            {
                let entrada = document.getElementById("entrada").value;
                tentativas++;
                if (entrada == numero) {
                    document.getElementById("resultado").innerHTML = "Parabéns! Você acertou em " + tentativas + " tentativas.";
                } else if (entrada > numero) {
                    document.getElementById("resultado").innerHTML = "O número é menor!";
                } else {
                    document.getElementById("resultado").innerHTML = "O número é maior!";
                }
            }