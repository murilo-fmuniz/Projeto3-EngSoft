// --- PONTO FÁCIL PARA ALTERAÇÃO NO DEPLOY ---
// Altere os pratos aqui para demonstrar a atualização do site.
const cardapioDoDia = {
    almoco: {
        principal: "Frango Grelhado",
        vegetariano: "Lasanha de Berinjela",
        guarnicao: "Arroz e Feijão",
        salada: "Alface, Tomate e Cenoura",
        sobremesa: "Gelatina"
    },
    jantar: {
        principal: "Sopa de Legumes",
        vegetariano: "Sopa de Mandioquinha",
        guarnicao: "Pão Francês",
        salada: "Mix de Folhas",
        sobremesa: "Fruta da Estação"
    }
};
// ---------------------------------------------


// Função para carregar os dados do cardápio no HTML
function carregarCardapio() {
    // Almoço
    document.getElementById('almoco-principal').textContent = cardapioDoDia.almoco.principal;
    document.getElementById('almoco-vegetariano').textContent = cardapioDoDia.almoco.vegetariano;
    document.getElementById('almoco-guarnicao').textContent = cardapioDoDia.almoco.guarnicao;
    document.getElementById('almoco-salada').textContent = cardapioDoDia.almoco.salada;
    document.getElementById('almoco-sobremesa').textContent = cardapioDoDia.almoco.sobremesa;

    // Jantar
    document.getElementById('jantar-principal').textContent = cardapioDoDia.jantar.principal;
    document.getElementById('jantar-vegetariano').textContent = cardapioDoDia.jantar.vegetariano;
    document.getElementById('jantar-guarnicao').textContent = cardapioDoDia.jantar.guarnicao;
    document.getElementById('jantar-salada').textContent = cardapioDoDia.jantar.salada;
    document.getElementById('jantar-sobremesa').textContent = cardapioDoDia.jantar.sobremesa;
}

// Função para atualizar o status do RU (Aberto/Fechado)
function atualizarStatus() {
    const statusElement = document.getElementById('status-ru');
    const horaAtual = new Date().getHours();

    // Horário do almoço: 11h às 14h (11 a 13)
    // Horário do jantar: 17h às 19h (17 a 18)
    const estaAberto = (horaAtual >= 11 && horaAtual < 14) || (horaAtual >= 17 && horaAtual < 19);

    if (estaAberto) {
        statusElement.textContent = "Aberto";
        statusElement.className = "aberto";
    } else {
        statusElement.textContent = "Fechado";
        statusElement.className = "fechado";
    }
}

// Executa as funções quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    carregarCardapio();
    atualizarStatus();
    // Atualiza o status a cada minuto
    setInterval(atualizarStatus, 60000);
});