function buscarCEP() {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const resultadoElement = document.getElementById('resultado');

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                resultadoElement.innerHTML = 'CEP não encontrado.';
            } else {
                resultadoElement.classList.add('resultado-animado');

                resultadoElement.innerHTML = `
                    <p>Logradouro: ${data.logradouro}</p>
                    <p>Bairro: ${data.bairro}</p>
                    <p>Cidade: ${data.localidade}</p>
                    <p>Estado: ${data.uf}</p>
                `;
            }
        })
        .catch(error => {
            console.error('Erro ao buscar CEP:', error);
        });
}

