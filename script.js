const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas= document.querySelector(".caixa-alternativas")
const caixaResultado= document.querySelector(".caixa-resultado")
const textoResultado= document.querySelector(".texto-resultado")

const perguntas = [
    {
    enunciado: "Você acredita que algumas pessoas acham que a musica não é apenas entretenimento,é uma força cultural e social que pode modelar mentalidades,promover mudanças e conectar pessoas de diversas origens e perspectiva",
    alternativas: [
      {
texto:"A música pode ter importância social e cultural que podem canalizar em mudanças pessoais e significativas, unindo individuos de varias origens e perspectiva",
afirmaçao: "Você acredita que música influencia nas mudanças sociais culturais"
      },
      {
        texto:"A musica não tem a devida importância social e cultural ao ponto de mudar pensamentos e alterar a maneira como agimos",
        afirmacao: "Você acredita que a música não tem influencia na vida do ser humano"
      }
]
  },
  {
    enunciado: "você acha que a musica pode intencificar suas emoções",
    alternativas: [
      {
texto: "acredito que sim",
afirmacao: "está concordando que ela tem um impacto sentimental"
      },
      { 
         texto:"acredito que não",
         afirmacao: "esta descordando que a musica meche com seus sentimentos"
      }
]
  },
  {
    enunciado: "você utiliza a música em suas tarefas do dia a dia",
    alternativas: [
      {
texto: "sim,me sinto mais leve, motivado(a), animado(a)",
afirmacao: "a musica te tras energia"
      },
      {
         texto: "não, perco o foco",
         afirmacao: "a musica nao te da energia"
      }
]
  }
   ];
   

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();