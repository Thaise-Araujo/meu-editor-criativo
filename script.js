// 🎯 COMEÇO DO NOSSO CÓDIGO - VAMOS EXPLICAR CADA PARTE!
console.log('🚀 Iniciando nosso Editor Criativo!');

// ============================================
// 🔹 PARTE 1: SELECIONAR TODOS OS ELEMENTOS
// ============================================
// Área de texto e visualização
const areaTexto = document.getElementById('areaTexto');
const textoPreview = document.getElementById('textoPreview');
const contadorCaracteres = document.getElementById('contadorCaracteres');
const contadorPalavras = document.getElementById('contadorPalavras');
const contadorLinhas = document.getElementById('contadorLinhas');

// Botões de estilo
const btnNegrito = document.getElementById('btnNegrito');
const btnItalico = document.getElementById('btnItalico');
const btnSublinhado = document.getElementById('btnSublinhado');
const btnRiscado = document.getElementById('btnRiscado');

// Botões de alinhamento
const btnEsquerda = document.getElementById('btnEsquerda');
const btnCentro = document.getElementById('btnCentro');
const btnDireita = document.getElementById('btnDireita');

// Controles
const selectFonte = document.getElementById('selectFonte');
const corTexto = document.getElementById('corTexto');
const tamanhoFonte = document.getElementById('tamanhoFonte');
const valorTamanho = document.getElementById('valorTamanho');
const nomeCor = document.getElementById('nomeCor');

// Botões criativos
const btnEmojis = document.getElementById('btnEmojis');
const btnBorda = document.getElementById('btnBorda');
const btnSombra = document.getElementById('btnSombra');
const btnPiscar = document.getElementById('btnPiscar');
const btnArcoiris = document.getElementById('btnArcoiris');

// Novos botões de borda
const btnBordaPontilhada = document.getElementById('btnBordaPontilhada');
const btnBordaDupla = document.getElementById('btnBordaDupla');
const btnBordaSombra = document.getElementById('btnBordaSombra');

// Temas
const botoesTemas = document.querySelectorAll('.btn-tema');

// Controles finais
const btnSalvar = document.getElementById('btnSalvar');
const btnLimpar = document.getElementById('btnLimpar');
const btnCopiar = document.getElementById('btnCopiar');

// Mensagem
const mensagem = document.getElementById('mensagem');

console.log('✅ Todos os elementos selecionados!');

// ============================================
// 🔹 PARTE 2: VARIÁVEIS PARA GUARDAR CONFIGURAÇÕES
// ============================================
let config = {
    estilos: {
        negrito: false,
        italico: false,
        sublinhado: false,
        riscado: false,
        borda: false,
        sombra: false
    },
    efeitos: {
        piscar: false,
        arcoiris: false
    },
    fonte: 'Arial',
    cor: '#000000',
    tamanho: 16,
    tema: 'claro',
    alinhamento: 'left'
};

console.log('🎛️ Configurações iniciais definidas:', config);

// ============================================
// 🔹 PARTE 3: FUNÇÕES PRINCIPAIS
// ============================================

// 🎨 FUNÇÃO 1: Atualizar a visualização do texto
function atualizarVisualizacao() {
    console.log('🔄 Atualizando visualização...');
    
    // Pegar o texto digitado pelo usuário
    const texto = areaTexto.value || 'Sua obra-prima aparecerá aqui... 🌟';
    
    // Colocar o texto na área de visualização
    textoPreview.textContent = texto;
    
    // 🔄 LIMPAR TODAS AS CLASSES ANTERIORES
    textoPreview.className = 'texto-preview';
    
    // Aplicar alinhamento
    textoPreview.style.textAlign = config.alinhamento;
    
    // Ativar botão correto de alinhamento
    btnEsquerda.classList.remove('ativo');
    btnCentro.classList.remove('ativo');
    btnDireita.classList.remove('ativo');
    
    if (config.alinhamento === 'left') btnEsquerda.classList.add('ativo');
    if (config.alinhamento === 'center') btnCentro.classList.add('ativo');
    if (config.alinhamento === 'right') btnDireita.classList.add('ativo');
    
    // 🎪 APLICAR ESTILOS CONFORME AS CONFIGURAÇÕES
    if (config.estilos.negrito) {
        textoPreview.classList.add('negrito');
        btnNegrito.classList.add('ativo');
    } else {
        btnNegrito.classList.remove('ativo');
    }
    
    if (config.estilos.italico) {
        textoPreview.classList.add('italico');
        btnItalico.classList.add('ativo');
    } else {
        btnItalico.classList.remove('ativo');
    }
    
    if (config.estilos.sublinhado) {
        textoPreview.classList.add('sublinhado');
        btnSublinhado.classList.add('ativo');
    } else {
        btnSublinhado.classList.remove('ativo');
    }
    
    if (config.estilos.riscado) {
        textoPreview.classList.add('riscado');
        btnRiscado.classList.add('ativo');
    } else {
        btnRiscado.classList.remove('ativo');
    }
    
    if (config.estilos.borda) {
        textoPreview.classList.add('borda-decorativa');
        btnBorda.classList.add('ativo');
    } else {
        btnBorda.classList.remove('ativo');
    }
    
    if (config.estilos.sombra) {
        textoPreview.classList.add('sombra-texto');
        btnSombra.classList.add('ativo');
    } else {
        btnSombra.classList.remove('ativo');
    }
    
    // Aplicar efeitos
    if (config.efeitos.piscar) {
        textoPreview.classList.add('texto-piscante');
        btnPiscar.classList.add('ativo');
    } else {
        textoPreview.classList.remove('texto-piscante');
        btnPiscar.classList.remove('ativo');
    }
    
    if (config.efeitos.arcoiris) {
        textoPreview.classList.add('texto-arcoiris');
        btnArcoiris.classList.add('ativo');
    } else {
        textoPreview.classList.remove('texto-arcoiris');
        btnArcoiris.classList.remove('ativo');
    }
    
    // 🎨 APLICAR CONFIGURAÇÕES DIRETAS
    textoPreview.style.fontFamily = config.fonte;
    textoPreview.style.color = config.cor;
    textoPreview.style.fontSize = config.tamanho + 'px';
    
    console.log('✨ Visualização atualizada com sucesso!');
}

// 🔢 FUNÇÃO 2: Atualizar contadores
function atualizarContadores() {
    const texto = areaTexto.value;
    const caracteres = texto.length;
    
    // Contar palavras (separadas por espaços)
    const palavras = texto.trim() === '' ? 0 : texto.trim().split(/\s+/).length;
    
    // Contar linhas
    const linhas = texto === '' ? 0 : texto.split('\n').length;

    // Atualizar na tela
    contadorCaracteres.textContent = caracteres;
    contadorPalavras.textContent = palavras;
    contadorLinhas.textContent = linhas;
    
    console.log(`📊 Estatísticas: ${caracteres} caracteres, ${palavras} palavras, ${linhas} linhas`);
}

// 💬 FUNÇÃO 3: Mostrar mensagens temporárias
function mostrarMensagem(texto, tipo = 'sucesso') {
    mensagem.textContent = texto;
    mensagem.className = 'mensagem mostrar';
    
    if (tipo === 'erro') {
        mensagem.classList.add('erro');
    }
    
    // Sumir depois de 3 segundos
    setTimeout(() => {
        mensagem.classList.remove('mostrar');
    }, 3000);
    
    console.log(`💬 Mensagem: ${texto}`);
}

// 💾 FUNÇÃO 4: Salvar texto no navegador
function salvarTexto() {
    const texto = areaTexto.value;
    
    if (!texto.trim()) {
        mostrarMensagem('❌ Digite algo para salvar!', 'erro');
        return;
    }
    
    // Salvar no localStorage do navegador
    localStorage.setItem('textoSalvo', texto);
    localStorage.setItem('configuracao', JSON.stringify(config));
    
    mostrarMensagem('💾 Texto salvo com sucesso!');
    console.log('📁 Texto salvo no navegador');
}

// 📂 FUNÇÃO 5: Carregar texto salvo
function carregarTextoSaved() {
    try {
        const textoSaved = localStorage.getItem('textoSalvo');
        const configSaved = localStorage.getItem('configuracao');
        
        if (textoSaved) {
            areaTexto.value = textoSaved;
            
            if (configSaved) {
                const parsedConfig = JSON.parse(configSaved);
                // Validar e mescar configurações
                config = { ...config, ...parsedConfig };
                aplicarConfiguracaoSalva();
            }
            
            atualizarVisualizacao();
            atualizarContadores();
            mostrarMensagem('📂 Texto anterior carregado!');
        }
    } catch (error) {
        console.error('Erro ao carregar texto salvo:', error);
        mostrarMensagem('❌ Erro ao carregar texto salvo', 'erro');
    }
}

// 🔧 FUNÇÃO 6: Aplicar configuração salva
function aplicarConfiguracaoSalva() {
    selectFonte.value = config.fonte;
    corTexto.value = config.cor;
    tamanhoFonte.value = config.tamanho;
    valorTamanho.textContent = config.tamanho + 'px';
    
    // Atualizar nome da cor
    atualizarNomeCor(config.cor);
    
    // Aplicar tema
    document.body.className = `tema-${config.tema}`;
    
    console.log('🔧 Configuração salva aplicada:', config);
}

// 🎨 FUNÇÃO 7: Atualizar nome da cor
function atualizarNomeCor(corHex) {
    const cores = {
        '#000000': 'Preto',
        '#ffffff': 'Branco',
        '#ff0000': 'Vermelho',
        '#00ff00': 'Verde',
        '#0000ff': 'Azul',
        '#ffff00': 'Amarelo',
        '#ff00ff': 'Magenta',
        '#00ffff': 'Ciano',
        '#ff6b6b': 'Vermelho Claro',
        '#48dbfb': 'Azul Claro',
        '#1dd1a1': 'Verde Claro',
        '#f368e0': 'Rosa',
        '#ff9ff3': 'Rosa Claro',
        '#74b9ff': 'Azul Médio',
        '#a29bfe': 'Roxo Claro'
    };
    
    nomeCor.textContent = cores[corHex] || corHex;
}

// ============================================
// 🔹 PARTE 4: EVENT LISTENERS - OUVINTES DE EVENTOS
// ============================================

// 📝 EVENTO 1: Quando o usuário digita
areaTexto.addEventListener('input', function() {
    console.log('⌨️ Usuário está digitando...');
    atualizarVisualizacao();
    atualizarContadores();
    verificarConquistas();
});

// 🎨 EVENTO 2: Botões de estilo
btnNegrito.addEventListener('click', function() {
    config.estilos.negrito = !config.estilos.negrito;
    console.log('🅱️ Negrito:', config.estilos.negrito);
    atualizarVisualizacao();
});

btnItalico.addEventListener('click', function() {
    config.estilos.italico = !config.estilos.italico;
    console.log('ℹ️ Itálico:', config.estilos.italico);
    atualizarVisualizacao();
});

btnSublinhado.addEventListener('click', function() {
    config.estilos.sublinhado = !config.estilos.sublinhado;
    console.log('🔗 Sublinhado:', config.estilos.sublinhado);
    atualizarVisualizacao();
});

btnRiscado.addEventListener('click', function() {
    config.estilos.riscado = !config.estilos.riscado;
    console.log('🚫 Riscado:', config.estilos.riscado);
    atualizarVisualizacao();
});

// 📐 EVENTO 3: Botões de alinhamento
btnEsquerda.addEventListener('click', function() {
    config.alinhamento = 'left';
    console.log('⬅️ Alinhamento: Esquerda');
    atualizarVisualizacao();
});

btnCentro.addEventListener('click', function() {
    config.alinhamento = 'center';
    console.log('🔘 Alinhamento: Centro');
    atualizarVisualizacao();
});

btnDireita.addEventListener('click', function() {
    config.alinhamento = 'right';
    console.log('➡️ Alinhamento: Direita');
    atualizarVisualizacao();
});

// 🔠 EVENTO 4: Mudar fonte
selectFonte.addEventListener('change', function() {
    config.fonte = this.value;
    console.log('🔤 Fonte alterada para:', config.fonte);
    atualizarVisualizacao();
});

// 🎨 EVENTO 5: Mudar cor
corTexto.addEventListener('input', function() {
    config.cor = this.value;
    atualizarNomeCor(config.cor);
    console.log('🎨 Cor alterada para:', config.cor);
    atualizarVisualizacao();
});

// 📏 EVENTO 6: Mudar tamanho
tamanhoFonte.addEventListener('input', function() {
    config.tamanho = this.value;
    valorTamanho.textContent = config.tamanho + 'px';
    console.log('📏 Tamanho alterado para:', config.tamanho);
    atualizarVisualizacao();
});

// ✨ EVENTO 7: Botões criativos
btnBorda.addEventListener('click', function() {
    config.estilos.borda = !config.estilos.borda;
    console.log('🖼️ Borda:', config.estilos.borda);
    atualizarVisualizacao();
});

btnSombra.addEventListener('click', function() {
    config.estilos.sombra = !config.estilos.sombra;
    console.log('💫 Sombra:', config.estilos.sombra);
    atualizarVisualizacao();
});

btnPiscar.addEventListener('click', function() {
    config.efeitos.piscar = !config.efeitos.piscar;
    console.log('💫 Piscar:', config.efeitos.piscar);
    atualizarVisualizacao();
});

btnArcoiris.addEventListener('click', function() {
    config.efeitos.arcoiris = !config.efeitos.arcoiris;
    console.log('🌈 Arco-íris:', config.efeitos.arcoiris);
    atualizarVisualizacao();
});

// 🆕 EVENTO 8: Novos botões de borda
btnBordaPontilhada.addEventListener('click', function() {
    textoPreview.classList.toggle('borda-pontilhada');
    btnBordaPontilhada.classList.toggle('ativo');
    console.log('🔵 Borda pontilhada alternada');
});

btnBordaDupla.addEventListener('click', function() {
    textoPreview.classList.toggle('borda-dupla');
    btnBordaDupla.classList.toggle('ativo');
    console.log('🔷 Borda dupla alternada');
});

btnBordaSombra.addEventListener('click', function() {
    textoPreview.classList.toggle('borda-sombra');
    btnBordaSombra.classList.toggle('ativo');
    console.log('🌑 Borda com sombra alternada');
});

// 😊 EVENTO 9: Adicionar emojis
btnEmojis.addEventListener('click', function() {
    const emojis = ['😊', '😂', '🤩', '🎉', '✨', '🌟', '💫', '🌈', '🔥', '💖', '👍', '👏'];
    const emojiAleatorio = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Adicionar emoji no cursor ou no final
    const inicio = areaTexto.selectionStart;
    const fim = areaTexto.selectionEnd;
    const texto = areaTexto.value;
    
    areaTexto.value = texto.substring(0, inicio) + emojiAleatorio + texto.substring(fim);
    
    // Atualizar
    areaTexto.focus();
    areaTexto.setSelectionRange(inicio + emojiAleatorio.length, inicio + emojiAleatorio.length);
    
    atualizarVisualizacao();
    atualizarContadores();
    
    mostrarMensagem(`😊 Emoji ${emojiAleatorio} adicionado!`);
    console.log('😊 Emoji adicionado:', emojiAleatorio);
});

// 🎭 EVENTO 10: Mudar tema
botoesTemas.forEach(botao => {
    botao.addEventListener('click', function() {
        const novoTema = this.getAttribute('data-tema');
        const corFundo = this.getAttribute('data-cor');
        
        config.tema = novoTema;
        document.body.className = `tema-${novoTema}`;
        
        // Atualizar cor de fundo do container
        document.querySelector('.container').style.background = corFundo;
        
        console.log(`🎭 Tema alterado para: ${novoTema}`);
        mostrarMensagem(`🎭 Tema ${novoTema} ativado!`);
    });
});

// 💾 EVENTO 11: Botão salvar
btnSalvar.addEventListener('click', salvarTexto);

// 🗑️ EVENTO 12: Botão limpar
btnLimpar.addEventListener('click', function() {
    if (confirm('⚠️ Tem certeza que deseja limpar tudo?')) {
        areaTexto.value = '';
        config = {
            estilos: {
                negrito: false,
                italico: false,
                sublinhado: false,
                riscado: false,
                borda: false,
                sombra: false
            },
            efeitos: {
                piscar: false,
                arcoiris: false
            },
            fonte: 'Arial',
            cor: '#000000',
            tamanho: 16,
            tema: 'claro',
            alinhamento: 'left'
        };
        
        // Resetar controles
        selectFonte.value = 'Arial';
        corTexto.value = '#000000';
        tamanhoFonte.value = 16;
        valorTamanho.textContent = '16px';
        nomeCor.textContent = 'Preto';
        document.body.className = '';
        document.querySelector('.container').style.background = '';
        
        atualizarVisualizacao();
        atualizarContadores();
        
        mostrarMensagem('🗑️ Tudo limpo! Pronto para começar de novo!');
        console.log('🗑️ Tudo foi limpo');
    }
});

// 📋 EVENTO 13: Botão copiar
btnCopiar.addEventListener('click', function() {
    if (!areaTexto.value.trim()) {
        mostrarMensagem('❌ Nada para copiar!', 'erro');
        return;
    }
    
    areaTexto.select();
    areaTexto.setSelectionRange(0, 99999); // Para mobile
    
    try {
        navigator.clipboard.writeText(areaTexto.value).then(() => {
            mostrarMensagem('📋 Texto copiado para a área de transferência!');
            console.log('📋 Texto copiado com sucesso');
        }).catch(err => {
            // Fallback para navegadores mais antigos
            document.execCommand('copy');
            mostrarMensagem('📋 Texto copiado!');
            console.log('📋 Texto copiado (fallback)');
        });
    } catch (error) {
        console.error('Erro ao copiar:', error);
        mostrarMensagem('❌ Erro ao copiar texto', 'erro');
    }
});

// ============================================
// 🔹 PARTE 5: QUIZ INTERATIVO
// ============================================
console.log('🎯 Inicializando Quiz...');

const perguntas = [
    {
        pergunta: "Qual tag HTML usamos para texto em NEGRITO?",
        opcoes: ["<bold>", "<strong>", "<b>"],
        resposta: 1
    },
    {
        pergunta: "Qual propriedade CSS muda a COR do texto?",
        opcoes: ["text-color", "font-color", "color"],
        resposta: 2
    },
    {
        pergunta: "Como criamos texto ITÁLICO em CSS?",
        opcoes: ["font-style: italic", "text-style: italic", "style: italic"],
        resposta: 0
    }
];

let perguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta() {
    const pergunta = perguntas[perguntaAtual];
    document.getElementById('perguntaQuiz').textContent = pergunta.pergunta;
    
    const opcoes = document.querySelectorAll('.btn-opcao');
    opcoes.forEach((btn, index) => {
        btn.textContent = pergunta.opcoes[index];
        btn.className = 'btn-opcao';
    });
    
    document.getElementById('resultadoQuiz').textContent = '';
    console.log(`🎯 Carregando pergunta ${perguntaAtual + 1}`);
}

function verificarResposta(resposta) {
    const pergunta = perguntas[perguntaAtual];
    const opcoes = document.querySelectorAll('.btn-opcao');
    
    opcoes.forEach((btn, index) => {
        if (index === pergunta.resposta) {
            btn.classList.add('correto');
        } else if (index === parseInt(resposta)) {
            btn.classList.add('errado');
        }
    });
    
    if (parseInt(resposta) === pergunta.resposta) {
        pontuacao++;
        document.getElementById('resultadoQuiz').textContent = '✅ Correto!';
        console.log('✅ Resposta correta!');
    } else {
        document.getElementById('resultadoQuiz').textContent = '❌ Tente novamente!';
        console.log('❌ Resposta incorreta!');
    }
}

// Event Listeners do Quiz
document.querySelectorAll('.btn-opcao').forEach(btn => {
    btn.addEventListener('click', function() {
        verificarResposta(this.getAttribute('data-resposta'));
    });
});

document.getElementById('btnProximaPergunta').addEventListener('click', function() {
    perguntaAtual = (perguntaAtual + 1) % perguntas.length;
    carregarPergunta();
    console.log('➡️ Próxima pergunta');
});

// ============================================
// 🔹 PARTE 6: TUTORIAL INTERATIVO
// ============================================
console.log('📚 Inicializando Tutorial...');

const tutorialPassos = [
    {
        elemento: '#areaTexto',
        mensagem: '✨ Digite seu texto aqui!',
        posicao: 'top'
    },
    {
        elemento: '#btnNegrito',
        mensagem: '🅱️ Clique aqui para texto em negrito',
        posicao: 'top'
    },
    {
        elemento: '#selectFonte',
        mensagem: '🔤 Escolha uma fonte divertida!',
        posicao: 'top'
    },
    {
        elemento: '#btnEmojis',
        mensagem: '😊 Adicione emojis para deixar mais legal!',
        posicao: 'top'
    }
];

let tutorialAtivo = false;
let passoAtual = 0;

function iniciarTutorial() {
    tutorialAtivo = true;
    passoAtual = 0;
    mostrarPassoTutorial();
    console.log('📚 Tutorial iniciado');
}

function mostrarPassoTutorial() {
    if (!tutorialAtivo || passoAtual >= tutorialPassos.length) {
        finalizarTutorial();
        return;
    }
    
    const passo = tutorialPassos[passoAtual];
    const elemento = document.querySelector(passo.elemento);
    
    if (!elemento) {
        console.error('❌ Elemento do tutorial não encontrado:', passo.elemento);
        passoAtual++;
        mostrarPassoTutorial();
        return;
    }
    
    // Destacar elemento
    elemento.style.boxShadow = '0 0 0 3px #ff4757';
    elemento.style.transition = 'box-shadow 0.3s';
    mostrarMensagem(passo.mensagem);
    
    // Próximo passo ao clicar no elemento
    elemento.addEventListener('click', proximoPasso, { once: true });
    
    console.log(`📚 Tutorial passo ${passoAtual + 1}: ${passo.mensagem}`);
}

function proximoPasso() {
    const elementoAnterior = document.querySelector(tutorialPassos[passoAtual].elemento);
    if (elementoAnterior) {
        elementoAnterior.style.boxShadow = '';
    }
    passoAtual++;
    mostrarPassoTutorial();
}

function finalizarTutorial() {
    tutorialAtivo = false;
    mostrarMensagem('🎉 Tutorial completo! Agora você é um expert!');
    console.log('📚 Tutorial finalizado');
}

// Botão para iniciar tutorial
const btnTutorial = document.createElement('button');
btnTutorial.textContent = '📚 Tutorial Interativo';
btnTutorial.className = 'btn-grande';
btnTutorial.addEventListener('click', iniciarTutorial);
document.querySelector('.controles-finais').appendChild(btnTutorial);

console.log('✅ Tutorial configurado');

// ============================================
// 🔹 PARTE 7: SISTEMA DE CONQUISTAS
// ============================================
console.log('🏆 Inicializando Sistema de Conquistas...');

const conquistas = [
    {
        id: 'primeiro_texto',
        nome: '📝 Primeiras Palavras',
        descricao: 'Digite seu primeiro texto',
        conquistada: false,
        verificar: function() { return areaTexto.value.length > 0; }
    },
    {
        id: 'estilizador',
        nome: '🎨 Estilizador Criativo',
        descricao: 'Use 3 estilos diferentes',
        conquistada: false,
        verificar: function() {
            const estilosAtivos = Object.values(config.estilos).filter(v => v).length;
            return estilosAtivos >= 3;
        }
    },
    {
        id: 'colorista',
        nome: '🌈 Mestre das Cores',
        descricao: 'Mude a cor do texto 5 vezes',
        conquistada: false,
        verificar: function() { return contadorMudancasCor >= 5; }
    },
    {
        id: 'escritor',
        nome: '📚 Escritor Profissional',
        descricao: 'Escreva mais de 100 palavras',
        conquistada: false,
        verificar: function() {
            const palavras = areaTexto.value.trim() === '' ? 0 : areaTexto.value.trim().split(/\s+/).length;
            return palavras >= 100;
        }
    }
];

let contadorMudancasCor = 0;

function verificarConquistas() {
    let novasConquistas = 0;
    
    conquistas.forEach(conquista => {
        if (!conquista.conquistada && conquista.verificar()) {
            conquista.conquistada = true;
            novasConquistas++;
            mostrarConquista(conquista);
        }
    });
    
    if (novasConquistas > 0) {
        console.log(`🏆 ${novasConquistas} nova(s) conquista(s) desbloqueada(s)!`);
    }
    
    return novasConquistas;
}

function mostrarConquista(conquista) {
    const mensagemConquista = document.createElement('div');
    mensagemConquista.className = 'mensagem-conquista';
    mensagemConquista.innerHTML = `
        <strong>🏆 Conquista Desbloqueada!</strong><br>
        ${conquista.nome}<br>
        <small>${conquista.descricao}</small>
    `;
    
    document.body.appendChild(mensagemConquista);
    
    setTimeout(() => {
        mensagemConquista.remove();
    }, 5000);
    
    console.log(`🏆 Conquista: ${conquista.nome}`);
}

// No evento de mudança de cor, incrementar contador
corTexto.addEventListener('input', function() {
    contadorMudancasCor++;
    verificarConquistas();
});

// Verificar conquistas periodicamente
setInterval(verificarConquistas, 2000);

console.log('✅ Sistema de conquistas configurado');

// ============================================
// 🔹 PARTE 8: INICIALIZAÇÃO FINAL
// ============================================

// 🚀 FUNÇÃO: Iniciar tudo quando a página carregar
function iniciarAplicacao() {
    console.log('🚀 Iniciando aplicação...');
    
    // Carregar texto salvo
    carregarTextoSaved();
    
    // Atualizar visualização inicial
    atualizarVisualizacao();
    atualizarContadores();
    
    // Iniciar quiz
    carregarPergunta();
    
    // Verificar conquistas iniciais
    verificarConquistas();
    
    console.log('🎉 Aplicação iniciada com sucesso!');
    mostrarMensagem('🌟 Bem-vindo ao Editor Criativo!');
}

// 📅 EVENTO: Quando a página terminar de carregar
document.addEventListener('DOMContentLoaded', iniciarAplicacao);

// 🎊 MENSAGEM FINAL NO CONSOLE
console.log(`
✨ EDITOR CRIATIVO CARREGADO! ✨

🎯 Funcionalidades disponíveis:
✅ Formatação de texto (negrito, itálico, etc.)
🎨 Mudança de cores e fontes
📊 Contadores em tempo real
🎭 Temas criativos
😊 Emojis e efeitos especiais
🎯 Quiz interativo
📚 Tutorial passo a passo
🏆 Sistema de conquistas
💾 Salvamento automático

Divirta-se criando! 🎉
`);