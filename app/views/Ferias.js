






        /*
           function showNotification(message) {
            // Criar um elemento de notificação
            var notification = document.createElement("div");
            notification.className = "notification";
            notification.textContent = message;

            // Adicionar à body
            document.body.appendChild(notification);

            // Remover a notificação após alguns segundos
            setTimeout(function () {
                notification.remove();
            }, 5000); // Notificação desaparecerá após 5 segundos
        }
        */
        function calcularFerias() {
            // Verificar se os campos obrigatórios foram preenchidos
            var salarioInput = document.getElementById("salario");
            var diasFeriasInput = document.getElementById("diasFerias");
        
            if (salarioInput.checkValidity() && diasFeriasInput.checkValidity()) {
                // Campos obrigatórios foram preenchidos, continuar com o cálculo
                var salario = parseFloat(salarioInput.value) || 0;
                var horaExtra = parseFloat(document.getElementById("horaExtra").value) || 0;
                var dependentes = parseInt(document.getElementById("dependentes").value) || 0;
                var diasFerias = parseInt(diasFeriasInput.value) || 0;
                var abonoPecuniario = document.getElementById("abonoPecuniario").checked;
                var adiantar13 = document.getElementById("adiantar13").checked;
        
                // Lógica de cálculo (exemplo simples)
                var totalFerias = salario * (diasFerias / 30);
                var totalHoraExtra = horaExtra * 10; 
                var totalDependentes = dependentes * 100; 
                var totalGeral = totalFerias + totalHoraExtra + totalDependentes;
        
                if (abonoPecuniario) {
                    totalGeral += salario / 3;
                }
        
                if (adiantar13) {
                    totalGeral += salario / 12;
                }
        
                // Exibir os resultados
                var resultadosDiv = document.getElementById("resultados");
                resultadosDiv.innerHTML = `
                    <h2>Resultados do Cálculo:</h2>
                    <br>
                    <p>Salário Bruto: R$ ${salario.toFixed(2)}</p>
                    <br>
                    <p>Média de Hora Extra: R$ ${totalHoraExtra.toFixed(2)}</p>
                    <br>
                    <p>Dependentes: R$ ${totalDependentes.toFixed(2)}</p>
                    <br>
                    <p>Dias de Férias: R$ ${totalFerias.toFixed(2)}</p>
                    <br>
                    <p>Abono Pecuniário: ${abonoPecuniario ? 'Sim' : 'Não'}</p>
                    <br>
                    <p>Adiantar 1ª Parcela 13º: ${adiantar13 ? 'Sim' : 'Não'}</p>
                    <br>
                    <p><strong>Total a Receber: R$ ${totalGeral.toFixed(2)}</strong></p>
                `;
                
        
                
            } else {
                // Campos obrigatórios não foram preenchidos, exibir mensagem de erro
                alert("Por favor, preencha todos os campos obrigatórios.");
            }
        }
        
                
        
                    /*
                    // Exibir os resultados por notify
                    var resultadosMessage = `
                        Resultados do Cálculo:
                        Salário Bruto: R$ ${salario.toFixed(2)}
                        Média de Hora Extra: R$ ${totalHoraExtra.toFixed(2)}
                        Dependentes: R$ ${totalDependentes.toFixed(2)}
                        Dias de Férias: R$ ${totalFerias.toFixed(2)}
                        Abono Pecuniário: ${abonoPecuniario ? 'Sim' : 'Não'}
                        Adiantar 1ª Parcela 13º: ${adiantar13 ? 'Sim' : 'Não'}
                        Total a Receber: R$ ${totalGeral.toFixed(2)}
                    `;
        
                    // Exibir os resultados como uma notificação
                   // alert(resultadosMessage);
                }
                */
        