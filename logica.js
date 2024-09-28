let contadorComum = 0;
        let contadorEspecial = 0;

        let filaComum = [];
        let filaEspecial = [];

        function gerarSenhaComum() {
            contadorComum++;
            let senha = "C" + contadorComum;
            filaComum.push(senha);
            atualizarFilaComum();
        }

        function gerarSenhaEspecial() {
            contadorEspecial++;
            let senha = "E" + contadorEspecial;
            filaEspecial.push(senha);
            atualizarFilaEspecial();
        }

        function atualizarFilaComum() {
            const filaComumUl = document.getElementById("filaComum");
            filaComumUl.innerHTML = "";
            filaComum.forEach(senha => {
                const li = document.createElement("li");
                li.textContent = senha;
                filaComumUl.appendChild(li);
            });
        }

        function atualizarFilaEspecial() {
            const filaEspecialUl = document.getElementById("filaEspecial");
            filaEspecialUl.innerHTML = "";
            filaEspecial.forEach(senha => {
                const li = document.createElement("li");
                li.textContent = senha;
                filaEspecialUl.appendChild(li);
            });
        }

        function atenderSenhaComum() {
            if (filaComum.length > 0) {
                let senhaAtendida = filaComum.shift(); // Remove a primeira senha da fila
                document.getElementById("senhaAtual").textContent = "Atendendo Senha: " + senhaAtendida;
                atualizarFilaComum();
            } else {
                document.getElementById("senhaAtual").textContent = "Nenhuma senha comum para atender.";
            }
        }

        function atenderSenhaEspecial() {
            if (filaEspecial.length > 0) {
                let senhaAtendida = filaEspecial.shift(); // Remove a primeira senha da fila
                document.getElementById("senhaAtual").textContent = "Atendendo Senha: " + senhaAtendida;
                atualizarFilaEspecial();
            } else {
                document.getElementById("senhaAtual").textContent = "Nenhuma senha especial para atender.";
            }
        }