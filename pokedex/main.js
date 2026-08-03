 function callApi() {
                const numero = Number(document.getElementById("numero").value);
                const imagem = document.getElementById("imagem");
                const nome = document.getElementById("nome");


            fetch(`https://pokeapi.co/api/v2/pokemon/${numero}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Pokémon não encontrado.");
                    }
                    return response.json();
                })
                .then(data => {
                    nome.textContent = data.name;
                    imagem.src = data.sprites.front_default;
                })
                .catch(error => {
                    console.error(error);
                    alert("Não foi possível carregar os dados do Pokémon.");
                });

        }