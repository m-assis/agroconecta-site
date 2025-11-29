document.addEventListener ('DOMContentLoaded', function() {
    const formContato = document.getElementById('form-contato');
    
    if (!formContato) return;
    
    const inputNome = document.getElementById('nome');
    const feedbackNome = document.getElementById('nome-feedback');

    function validarNomeCompleto(nomeCompleto) {
        const nomeTrimmed = nomeCompleto.trim(); 
        const partes = nomeTrimmed.split(/\s+/); 

        if (partes.length < 2) {
            return false;
        }

        const nomeValido = partes[0].length >= 2;
        const sobrenomeValido = partes[partes.length - 1].length >= 2;
        
        return nomeValido && sobrenomeValido;
    }

    formContato.addEventListener('submit', function(event) {
        
        // Bloqueia o envio no início para evitar recarga da página
        event.preventDefault(); 
        event.stopPropagation();

        let isNomeValid = true; 

        formContato.classList.add('was-validated');

        // Validação Customizada do Nome Completo
        const nomeValue = inputNome.value;

        if (!validarNomeCompleto(nomeValue)) {
            inputNome.classList.remove('is-valid');
            inputNome.classList.add('is-invalid');
            feedbackNome.textContent = 'O nome e o sobrenome devem ter, no mínimo, 2 letras cada.';
            isNomeValid = false;
        } else {
            inputNome.classList.remove('is-invalid');
            inputNome.classList.add('is-valid');
        }

        // Checagem Final para simular ou realizar o envio
        if (isNomeValid && formContato.checkValidity()) {
            
            console.log('Formulário validado com sucesso! Simulação de envio.');
            
            // Lógica de sucesso (ex: alert, reset do form) aqui
            // formContato.reset(); 
            // formContato.classList.remove('was-validated'); 
            
        } else {
            // Se falhou, o formulário permanece na tela com os erros visíveis.
            console.log('Validação falhou! Verifique todos os campos.');
        }
    });

    // Limpar o estado de erro do nome ao digitar
    inputNome.addEventListener('input', function() {
        if (inputNome.classList.contains('is-invalid')) {
            if (validarNomeCompleto(inputNome.value)) {
                inputNome.classList.remove('is-invalid');
                inputNome.classList.add('is-valid');
            } else {
                 feedbackNome.textContent = 'O nome e o sobrenome devem ter, no mínimo, 2 letras cada.';
            }
        }
    });
});

// =========================================================
    // BLOCO DE CÓDIGO DA CALCULADORA DE INSUMOS
    // =========================================================
    const formCalculadora = document.getElementById('form-calculadora');
    const inputArea = document.getElementById('areaLavoura');
    const inputInsumoPorHa = document.getElementById('insumoPorHa');
    const inputPrecoInsumo = document.getElementById('precoInsumo');
    
    const resultadoDiv = document.getElementById('resultado-calculadora');
    const totalInsumoH3 = document.getElementById('totalInsumo');
    const custoTotalH3 = document.getElementById('custoTotal');

    if (formCalculadora) {
        formCalculadora.addEventListener('submit', function(event) {
            
            // Impede o envio padrão do formulário (que recarregaria a página)
            event.preventDefault(); 
            
            // Garante que o formulário está preenchido (validação nativa do HTML5)
            if (formCalculadora.checkValidity()) {
                
                // 1. Captura e converte os valores para números
                const area = parseFloat(inputArea.value);
                const insumoPorHa = parseFloat(inputInsumoPorHa.value);
                const precoInsumo = parseFloat(inputPrecoInsumo.value);
                
                // 2. Realiza os cálculos
                
                // Cálculo 1: Total de Insumo (Area * Insumo por Hectare)
                const totalInsumo = area * insumoPorHa;
                
                // Cálculo 2: Custo Total (Total Insumo * Preço Unitário)
                const custoTotal = totalInsumo * precoInsumo;
                
                // 3. Formata os resultados
                
                // Formata o total de insumo com 2 casas decimais e unidade
                const totalInsumoFormatado = totalInsumo.toFixed(2) + ' kg';
                
                // Formata o custo total como moeda brasileira (R$)
                const custoTotalFormatado = custoTotal.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2
                });
                
                // 4. Exibe os resultados no HTML
                totalInsumoH3.textContent = totalInsumoFormatado;
                custoTotalH3.textContent = custoTotalFormatado;
                
                // Torna a div de resultados visível
                resultadoDiv.style.display = 'block';

            } else {
                // Se a validação nativa falhar (ex: campo vazio), 
                // o Bootstrap já mostrará o erro e não precisamos fazer nada aqui.
                formCalculadora.classList.add('was-validated');
            }
        });
    }
   