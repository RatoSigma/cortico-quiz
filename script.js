const CHARACTERS = {
  JR: {
    code: "JR",
    name: "João Romão",
    cardLabel: "JOÃO ROMÃO",
    title: "O Ambicioso",
    description: "Ambicioso, calculista e disposto a tudo para enriquecer.",
    image: "img/romao.png",
    color: "#7d4b2f"
  },
  MI: {
    code: "MI",
    name: "Miranda",
    cardLabel: "MIRANDA",
    title: "O Aparentador",
    description: "Obcecado por status, reputação e pela aprovação da sociedade.",
    image: "img/miranda.png",
    color: "#6d4a35"
  },
  ST: {
    code: "ST",
    name: "Stella (Dona Estela)",
    cardLabel: "STELLA",
    title: "A Vaidosa",
    description: "Vaidosa, sociável e apegada ao luxo, quer viver bem e ser admirada.",
    image: "img/stella.png",
    color: "#9e4e40"
  },
  BE: {
    code: "BE",
    name: "Bertoleza",
    cardLabel: "BERTOLEZA",
    title: "A Trabalhadora",
    description: "Trabalhadora, leal e confiante, mesmo quando a vida é injusta com você.",
    image: "img/bertoleza.png",
    color: "#5d4630"
  },
  RB: {
    code: "RB",
    name: "Rita Baiana",
    cardLabel: "RITA BAIANA",
    title: "A Alma da Festa",
    description: "Livre, sensual, carismática e a alma da festa.",
    image: "img/baiana.png",
    color: "#b65339"
  },
  FI: {
    code: "FI",
    name: "Firmo",
    cardLabel: "FIRMO",
    title: "O Orgulhoso",
    description: "Orgulhoso, impulsivo e apaixonado, não leva desaforo para casa.",
    image: "img/firmo.png",
    color: "#8a3527"
  },
  JE: {
    code: "JE",
    name: "Jerônimo",
    cardLabel: "JERÔNIMO",
    title: "O Transformado",
    description: "Honesto e esforçado, mas capaz de se transformar ao ser envolvido por um novo ambiente.",
    image: "img/jeronimo.png",
    color: "#7f5a3f"
  },
  PO: {
    code: "PO",
    name: "Pombinha",
    cardLabel: "POMBINHA",
    title: "A Sensível",
    description: "Sensível e doce, com um coração que enxerga o melhor nas pessoas.",
    image: "img/pombinha.png",
    color: "#93644f"
  }
};

const CHARACTER_CODES = Object.keys(CHARACTERS);

const QUESTIONS = [
  {
    id: 1,
    text: "Você acabou de ganhar uma boa quantia de dinheiro. O que faz?",
    options: [
      { id: "A", text: "Gasto com festa, comida boa e amigos, dinheiro foi feito para curtir.", points: { RB: 2, FI: 1 } },
      { id: "B", text: "Dou um jeito de ajudar alguém que precisa, sem fazer alarde.", points: { PO: 2, BE: 1 } },
      { id: "C", text: "Invisto e começo a juntar mais, cada centavo conta para o meu império.", points: { JR: 2, MI: 1 } },
      { id: "D", text: "Uso para realizar um sonho que só eu entendo, fora do esquema comum.", points: { JE: 2, PO: 1 } },
      { id: "E", text: "Compro roupas e acessórios bonitos, quero me mostrar para a sociedade.", points: { ST: 2, MI: 1 } },
      { id: "F", text: "Guardo quase tudo e mando para quem eu amo, só gasto com o essencial.", points: { BE: 2, JE: 1 } }
    ]
  },
  {
    id: 2,
    text: "Chega alguém novo ao seu bairro e todo mundo está curioso. Qual é a sua reação?",
    options: [
      { id: "A", text: "Me interesso pela história de vida da pessoa, não pela aparência.", points: { PO: 2, JE: 1 } },
      { id: "B", text: "Chamo para uma roda de conversa e música, e logo a pessoa vira da turma.", points: { RB: 2, FI: 1 } },
      { id: "C", text: "Já vou me apresentando, adoro conhecer gente e deixar uma boa impressão.", points: { ST: 2, RB: 1 } },
      { id: "D", text: "Fico na minha, mas se a pessoa precisar de ajuda, estou lá.", points: { BE: 2, JE: 1 } },
      { id: "E", text: "Observo com cuidado e penso se essa pessoa pode me ser útil.", points: { JR: 2, MI: 1, ST: 1 } },
      { id: "F", text: "Fico atento ao que ela diz e faz, para entender se é confiável.", points: { FI: 2, JR: 1 } }
    ]
  },
  {
    id: 3,
    text: "Alguém por quem você tem interesse está dando atenção a outra pessoa. O que você faz?",
    options: [
      { id: "A", text: "Converso abertamente e respeito a decisão, mesmo que doa.", points: { PO: 2, RB: 1 } },
      { id: "B", text: "Sofro em silêncio e continuo dando o meu melhor.", points: { BE: 2, PO: 1 } },
      { id: "C", text: "Parto para cima, sem medo de confronto, e deixo claro o que é meu.", points: { FI: 2, JE: 1 } },
      { id: "D", text: "Me afasto com dignidade e sigo em frente.", points: { JR: 2, JE: 1 } },
      { id: "E", text: "Uso charme e bom humor para reconquistar a atenção.", points: { RB: 2, ST: 1 } },
      { id: "F", text: "Finjo que não ligo, mas fico observando de longe.", points: { MI: 2, ST: 1 } }
    ]
  },
  {
    id: 4,
    text: "Seu ambiente de trabalho é puxado e injusto. Qual é sua atitude?",
    options: [
      { id: "A", text: "Me mantenho íntegro e sigo as regras, esperando que a justiça venha.", points: { PO: 2, MI: 1 } },
      { id: "B", text: "Me imponho e questiono o que acho errado, mesmo correndo riscos.", points: { FI: 2, MI: 1 } },
      { id: "C", text: "Aguento firme, trabalho dobrado e espero a minha vez de crescer.", points: { JR: 2, BE: 1 } },
      { id: "D", text: "Dou um jeito de aliviar o clima com humor e união entre os colegas.", points: { RB: 2, PO: 1 } },
      { id: "E", text: "Procuro um caminho mais confortável, sem me matar de trabalhar.", points: { ST: 2, RB: 1 } },
      { id: "F", text: "Cumpro minhas obrigações com dedicação, mesmo que ninguém reconheça.", points: { BE: 2, JE: 1 } }
    ]
  },
  {
    id: 5,
    text: "Você tem a chance de mudar completamente de vida, mas isso significa deixar para trás tudo que conhece. E aí?",
    options: [
      { id: "A", text: "Fico dividido: o que estou construindo aqui tem valor demais para mim.", points: { JE: 2, FI: 1 } },
      { id: "B", text: "Aceito, mas só se puder levar meus amigos e meu jeito de viver.", points: { RB: 2, FI: 1 } },
      { id: "C", text: "Peço conselhos e pondero cada detalhe antes de decidir.", points: { PO: 2, ST: 1 } },
      { id: "D", text: "Aceito sem pensar duas vezes, ambição é meu combustível.", points: { JR: 2, JE: 1 } },
      { id: "E", text: "Hesito, tenho medo de perder o pouco que me dá segurança.", points: { BE: 2, PO: 1 } },
      { id: "F", text: "Aceito se for para subir de status e ter mais conforto.", points: { MI: 2, ST: 1 } }
    ]
  },
  {
    id: 6,
    text: "Qual frase mais combina com você?",
    options: [
      { id: "A", text: "Sensibilidade e bondade valem mais que qualquer riqueza.", points: { PO: 2, BE: 1 } },
      { id: "B", text: "A vida é curta, bora aproveitar!", points: { RB: 2, FI: 1 } },
      { id: "C", text: "Quem não arrisca não enriquece.", points: { JR: 2, MI: 1 } },
      { id: "D", text: "Prefiro viver à minha maneira do que me adaptar ao que esperam de mim.", points: { FI: 2, ST: 1 } },
      { id: "E", text: "Quem trabalha com honestidade merece respeito.", points: { JE: 2, BE: 1 } },
      { id: "F", text: "A aparência importa e muita gente julga por ela.", points: { ST: 2, MI: 1 } }
    ]
  },
  {
    id: 7,
    text: "Num conflito entre vizinhos, o que você faz?",
    options: [
      { id: "A", text: "Escuto os dois lados com carinho e tento ajudar quem está mais machucado.", points: { BE: 2, RB: 1 } },
      { id: "B", text: "Defendo meu lado com firmeza, não levo desaforo para casa.", points: { FI: 2, JR: 1 } },
      { id: "C", text: "Fico longe da confusão, não é assunto meu.", points: { ST: 2, MI: 1 } },
      { id: "D", text: "Tento acalmar os ânimos e pedir paz.", points: { PO: 2, JE: 1 } },
      { id: "E", text: "Aproveito a situação para tirar alguma vantagem.", points: { JR: 2, MI: 1 } },
      { id: "F", text: "Entro na briga com bom humor e jeito, sou o centro das atenções.", points: { RB: 2, FI: 1 } }
    ]
  },
  {
    id: 8,
    text: "Qual destes é o seu maior medo?",
    options: [
      { id: "A", text: "Perder minha liberdade e minha alegria de viver.", points: { RB: 2, FI: 1 } },
      { id: "B", text: "Perder minha pureza e ser corrompido pelo mundo ao redor.", points: { PO: 2, JE: 1 } },
      { id: "C", text: "Ficar pobre ou perder o que construí.", points: { JR: 2, BE: 1 } },
      { id: "D", text: "Perder a pessoa que amo ou ser humilhado publicamente.", points: { FI: 2, JE: 1 } },
      { id: "E", text: "Ser abandonado ou enganado por quem confiei.", points: { BE: 2, MI: 1 } },
      { id: "F", text: "Ser rejeitado pela sociedade ou perder meu lugar de prestígio.", points: { MI: 2, ST: 1 } }
    ]
  }
];

const state = {
  currentQuestionIndex: 0,
  answers: Array(QUESTIONS.length).fill(null),
  shuffledOptions: [],
  isTransitioning: false
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const celebrationLayer = createCelebrationLayer();

let audioContext = null;
let celebrationTimeoutId = null;

const startScreen = document.querySelector("#start-screen");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");
const startButton = document.querySelector("#start-button");
const backButton = document.querySelector("#back-button");
const restartButton = document.querySelector("#restart-button");
const questionCard = document.querySelector("#question-card");
const questionCounter = document.querySelector("#question-counter");
const questionTitle = document.querySelector("#question-title");
const optionsList = document.querySelector("#options-list");
const progressText = document.querySelector("#progress-text");
const progressbar = document.querySelector("#progressbar");
const progressFill = document.querySelector("#progress-fill");
const resultVisual = document.querySelector("#result-visual");
const resultName = document.querySelector("#result-name");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");
const rankingList = document.querySelector("#ranking-list");
const resultHeading = document.querySelector("#result-heading");
const fullscreenButton = document.querySelector("#fullscreen-button");

startButton.addEventListener("click", () => startQuiz("start"));
backButton.addEventListener("click", goBack);
restartButton.addEventListener("click", () => startQuiz("restart"));
document.addEventListener("keydown", handleOptionShortcut);

initializeIntro();
initializeFullscreenButton();

function initializeIntro() {
  showScreen("start");
}

function initializeFullscreenButton() {
  if (!fullscreenButton) {
    return;
  }

  const canUseFullscreen = Boolean(
    document.documentElement.requestFullscreen
      || document.documentElement.webkitRequestFullscreen
      || document.exitFullscreen
      || document.webkitExitFullscreen
  );

  if (!canUseFullscreen) {
    fullscreenButton.hidden = true;
    return;
  }

  fullscreenButton.addEventListener("click", toggleFullscreen);
  document.addEventListener("fullscreenchange", syncFullscreenButton);
  document.addEventListener("webkitfullscreenchange", syncFullscreenButton);
  syncFullscreenButton();
}

function toggleFullscreen() {
  const root = document.documentElement;
  const isFullscreen = Boolean(document.fullscreenElement || document.webkitFullscreenElement);

  if (isFullscreen) {
    const exitMethod = document.exitFullscreen || document.webkitExitFullscreen;

    if (exitMethod) {
      exitMethod.call(document).catch?.(() => {});
    }

    return;
  }

  const requestMethod = root.requestFullscreen || root.webkitRequestFullscreen;

  if (requestMethod) {
    requestMethod.call(root).catch?.(() => {});
  }
}

function syncFullscreenButton() {
  if (!fullscreenButton) {
    return;
  }

  const isFullscreen = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
  fullscreenButton.textContent = isFullscreen ? "Sair da tela cheia" : "Tela cheia";
  fullscreenButton.setAttribute("aria-label", isFullscreen ? "Sair da tela cheia" : "Ativar tela cheia");
  fullscreenButton.setAttribute("aria-pressed", String(isFullscreen));
}

function startQuiz(trigger = "start") {
  initializeAudio();
  playClickSound(trigger);
  pulseButton(trigger === "restart" ? restartButton : startButton);

  state.currentQuestionIndex = 0;
  state.answers = Array(QUESTIONS.length).fill(null);
  state.shuffledOptions = QUESTIONS.map((question) => createShuffledDisplayOptions(question));
  state.isTransitioning = false;
  clearCelebrationEffects();

  showScreen("quiz");
  renderQuestion(state.currentQuestionIndex, { animate: false });
}

function goBack() {
  if (state.isTransitioning || state.currentQuestionIndex === 0) {
    return;
  }

  initializeAudio();
  playClickSound("back");
  pulseButton(backButton);

  state.currentQuestionIndex -= 1;
  renderQuestion(state.currentQuestionIndex, { animate: true });
}

function showScreen(screenName) {
  const screens = {
    start: startScreen,
    quiz: quizScreen,
    result: resultScreen
  };

  Object.entries(screens).forEach(([name, element]) => {
    const isActive = name === screenName;
    element.hidden = !isActive;
    element.classList.toggle("is-active", isActive);
  });
}

function renderQuestion(index, { animate }) {
  const question = QUESTIONS[index];
  const selectedOptionId = state.answers[index];

  updateProgress(index);
  backButton.disabled = index === 0;

  const drawContent = () => {
    questionCounter.textContent = `Pergunta ${question.id}`;
    questionTitle.textContent = question.text;
    optionsList.innerHTML = "";

    state.shuffledOptions[index].forEach((option) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "option-button";
      button.dataset.optionId = option.id;
      button.setAttribute("aria-label", `Alternativa ${option.id}: ${option.text}`);
      button.setAttribute("aria-pressed", String(selectedOptionId === option.sourceId));

      if (selectedOptionId === option.sourceId) {
        button.classList.add("is-selected");
      }

      button.innerHTML = `
        <span class="option-badge" aria-hidden="true">${option.id}</span>
        <span class="option-text">${option.text}</span>
      `;

      button.addEventListener("click", () => selectOption(option.sourceId, button));
      optionsList.appendChild(button);
    });
  };

  if (!animate) {
    drawContent();
    questionCard.classList.remove("is-entering", "is-leaving");
    questionCard.classList.add("is-visible");
    focusFirstOption();
    return;
  }

  state.isTransitioning = true;
  questionCard.classList.remove("is-entering", "is-visible");
  questionCard.classList.add("is-leaving");

  window.setTimeout(() => {
    drawContent();
    questionCard.classList.remove("is-leaving");
    questionCard.classList.add("is-entering");

    requestAnimationFrame(() => {
      questionCard.classList.remove("is-entering");
      questionCard.classList.add("is-visible");
      focusFirstOption();
      state.isTransitioning = false;
    });
  }, 190);
}

function updateProgress(index) {
  const currentStep = index + 1;
  const totalQuestions = QUESTIONS.length;
  const percentage = (currentStep / totalQuestions) * 100;

  progressText.textContent = `Pergunta ${currentStep} de ${totalQuestions}`;
  progressbar.setAttribute("aria-valuenow", String(currentStep));
  progressbar.setAttribute("aria-valuetext", `${currentStep} de ${totalQuestions}`);
  progressFill.style.width = `${percentage}%`;
}

function selectOption(optionId, buttonElement) {
  if (state.isTransitioning) {
    return;
  }

  initializeAudio();
  playClickSound("answer");
  pulseButton(buttonElement);
  createSparkle(buttonElement);

  state.answers[state.currentQuestionIndex] = optionId;
  optionsList.querySelectorAll(".option-button").forEach((button) => {
    const isCurrent = button === buttonElement;
    button.classList.toggle("is-selected", isCurrent);
    button.setAttribute("aria-pressed", String(isCurrent));
    button.disabled = true;
  });

  state.isTransitioning = true;

  window.setTimeout(() => {
    if (state.currentQuestionIndex === QUESTIONS.length - 1) {
      renderResults();
      return;
    }

    state.currentQuestionIndex += 1;
    renderQuestion(state.currentQuestionIndex, { animate: true });
  }, 180);
}

function renderResults() {
  const summary = calculateResults();
  const winner = CHARACTERS[summary.winnerCode];

  showScreen("result");
  buildResultCard(winner);

  resultName.textContent = winner.name;
  resultTitle.textContent = winner.title;
  resultDescription.textContent = winner.description;

  renderRanking(summary.ranking);
  state.isTransitioning = false;
  resultHeading.focus();
  playCelebrationSound();
  launchCelebration();
}

function calculateResults() {
  const scores = createEmptyScoreMap();
  const questionContributions = QUESTIONS.map(() => createEmptyScoreMap());

  state.answers.forEach((optionId, questionIndex) => {
    const option = getOptionById(questionIndex, optionId);

    if (!option) {
      return;
    }

    Object.entries(option.points).forEach(([code, value]) => {
      scores[code] += value;
      questionContributions[questionIndex][code] += value;
    });
  });

  const totalPoints = Object.values(scores).reduce((sum, value) => sum + value, 0);
  const winnerCode = resolveWinner(scores, questionContributions);
  const ranking = CHARACTER_CODES
    .map((code) => ({
      code,
      name: CHARACTERS[code].name,
      score: scores[code],
      percent: totalPoints === 0 ? 0 : (scores[code] / totalPoints) * 100,
      color: CHARACTERS[code].color
    }))
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.name.localeCompare(b.name, "pt-BR");
    });

  return { scores, ranking, winnerCode };
}

function resolveWinner(scores, questionContributions) {
  const highestScore = Math.max(...Object.values(scores));
  let tiedCodes = CHARACTER_CODES.filter((code) => scores[code] === highestScore);

  if (tiedCodes.length === 1) {
    return tiedCodes[0];
  }

  tiedCodes = breakTieWithQuestion(tiedCodes, questionContributions[5]);
  if (tiedCodes.length === 1) {
    return tiedCodes[0];
  }

  tiedCodes = breakTieWithQuestion(tiedCodes, questionContributions[7]);
  if (tiedCodes.length === 1) {
    return tiedCodes[0];
  }

  return tiedCodes[Math.floor(Math.random() * tiedCodes.length)];
}

function breakTieWithQuestion(codes, questionScores) {
  const highest = Math.max(...codes.map((code) => questionScores[code] || 0));
  return codes.filter((code) => (questionScores[code] || 0) === highest);
}

function renderRanking(ranking) {
  rankingList.innerHTML = "";

  ranking.forEach((item) => {
    const entry = document.createElement("article");
    entry.className = "ranking-item";
    entry.innerHTML = `
      <div class="ranking-topline">
        <span class="ranking-name">${item.name}</span>
        <span class="ranking-value">${formatPercent(item.percent)}</span>
      </div>
      <div class="ranking-bar" aria-hidden="true">
        <div class="ranking-fill" style="width: ${item.percent}%; background: linear-gradient(90deg, ${item.color}, #a8392b);"></div>
      </div>
    `;
    rankingList.appendChild(entry);
  });
}

function buildResultCard(character) {
  resultVisual.innerHTML = "";

  const card = document.createElement("div");
  card.className = "result-card is-celebrating";

  const image = document.createElement("img");
  image.className = "character-image";
  image.src = character.image;
  image.alt = `Carta ilustrada de ${character.name}`;
  image.loading = "eager";

  const fallback = buildFallbackCard(character);
  fallback.hidden = true;

  image.addEventListener("error", () => {
    image.hidden = true;
    fallback.hidden = false;
  });

  image.addEventListener("load", () => {
    image.hidden = false;
    fallback.hidden = true;
  });

  card.append(image, fallback);
  resultVisual.appendChild(card);
}

function buildFallbackCard(character) {
  const fallback = document.createElement("div");
  fallback.className = "fallback-card";
  fallback.setAttribute("role", "img");
  fallback.setAttribute("aria-label", `Carta ilustrada substituta de ${character.name}`);
  fallback.innerHTML = `
    <div class="fallback-card-art" aria-hidden="true">
      <div class="fallback-silhouette"></div>
    </div>
    <div class="fallback-name">${character.cardLabel}</div>
  `;
  return fallback;
}

function getOptionById(questionIndex, optionId) {
  return QUESTIONS[questionIndex].options.find((option) => option.id === optionId) || null;
}

function createEmptyScoreMap() {
  return CHARACTER_CODES.reduce((accumulator, code) => {
    accumulator[code] = 0;
    return accumulator;
  }, {});
}

function formatPercent(value) {
  return `${value.toFixed(1).replace(".", ",")}%`;
}

function shuffleArray(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[randomIndex]] = [copy[randomIndex], copy[i]];
  }

  return copy;
}

function createShuffledDisplayOptions(question) {
  const shuffledOptions = shuffleArray(question.options);

  return question.options.map((option, index) => ({
    id: option.id,
    sourceId: shuffledOptions[index].id,
    text: shuffledOptions[index].text,
    points: shuffledOptions[index].points
  }));
}

function focusFirstOption() {
  const firstOption = optionsList.querySelector(".option-button");

  if (firstOption) {
    firstOption.focus();
  }
}

function handleOptionShortcut(event) {
  if (quizScreen.hidden || state.isTransitioning) {
    return;
  }

  const key = event.key.toUpperCase();
  if (!["A", "B", "C", "D", "E", "F"].includes(key)) {
    return;
  }

  const targetButton = optionsList.querySelector(`[data-option-id="${key}"]`);
  if (!targetButton || targetButton.disabled) {
    return;
  }

  targetButton.click();
}

function initializeAudio() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;

  if (!AudioContextClass) {
    return null;
  }

  if (!audioContext) {
    audioContext = new AudioContextClass();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function playClickSound(kind) {
  const context = initializeAudio();
  if (!context) {
    return;
  }

  const now = context.currentTime;
  const configMap = {
    start: { frequency: 392, type: "triangle", duration: 0.08, gain: 0.045, endFrequency: 523.25 },
    back: { frequency: 246.94, type: "sine", duration: 0.06, gain: 0.032, endFrequency: 220 },
    answer: { frequency: 329.63, type: "square", duration: 0.05, gain: 0.03, endFrequency: 392 },
    restart: { frequency: 349.23, type: "triangle", duration: 0.08, gain: 0.045, endFrequency: 466.16 }
  };
  const config = configMap[kind] || configMap.answer;

  const oscillator = context.createOscillator();
  const gainNode = context.createGain();

  oscillator.type = config.type;
  oscillator.frequency.setValueAtTime(config.frequency, now);
  oscillator.frequency.exponentialRampToValueAtTime(config.endFrequency, now + config.duration);

  gainNode.gain.setValueAtTime(0.0001, now);
  gainNode.gain.linearRampToValueAtTime(config.gain, now + 0.01);
  gainNode.gain.exponentialRampToValueAtTime(0.0001, now + config.duration);

  oscillator.connect(gainNode);
  gainNode.connect(context.destination);

  oscillator.start(now);
  oscillator.stop(now + config.duration + 0.02);
}

function playCelebrationSound() {
  const context = initializeAudio();
  if (!context) {
    return;
  }

  const notes = [
    { frequency: 392, delay: 0, duration: 0.16, gain: 0.035 },
    { frequency: 493.88, delay: 0.12, duration: 0.18, gain: 0.04 },
    { frequency: 587.33, delay: 0.24, duration: 0.22, gain: 0.05 }
  ];

  notes.forEach((note) => {
    const startTime = context.currentTime + note.delay;
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(note.frequency, startTime);
    oscillator.frequency.exponentialRampToValueAtTime(note.frequency * 1.02, startTime + note.duration);

    gainNode.gain.setValueAtTime(0.0001, startTime);
    gainNode.gain.linearRampToValueAtTime(note.gain, startTime + 0.02);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + note.duration);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + note.duration + 0.03);
  });
}

function pulseButton(element) {
  element.classList.remove("is-sounding");
  void element.offsetWidth;
  element.classList.add("is-sounding");

  window.setTimeout(() => {
    element.classList.remove("is-sounding");
  }, 360);
}

function launchCelebration() {
  clearCelebrationEffects();

  const burstCount = prefersReducedMotion ? 10 : 22;
  const colors = ["#a8392b", "#6b4a2f", "#d0aa5f", "#7d4b2f", "#f3e1b3"];

  for (let index = 0; index < burstCount; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${6 + Math.random() * 88}vw`;
    piece.style.setProperty("--piece-color", colors[index % colors.length]);
    piece.style.setProperty("--drift", `${-80 + Math.random() * 160}px`);
    piece.style.setProperty("--spin", `${180 + Math.random() * 720}deg`);
    piece.style.setProperty("--duration", `${1100 + Math.random() * 900}ms`);
    piece.style.transform = `translateY(-20px) rotate(${Math.random() * 180}deg)`;
    celebrationLayer.appendChild(piece);

    piece.addEventListener("animationend", () => {
      piece.remove();
    });
  }

  celebrationTimeoutId = window.setTimeout(() => {
    clearCelebrationEffects();
  }, prefersReducedMotion ? 900 : 2400);
}

function clearCelebrationEffects() {
  if (celebrationTimeoutId) {
    window.clearTimeout(celebrationTimeoutId);
    celebrationTimeoutId = null;
  }

  celebrationLayer.innerHTML = "";
}

function createSparkle(buttonElement) {
  const rect = buttonElement.getBoundingClientRect();
  const sparkle = document.createElement("span");
  sparkle.className = "sparkle-ring";
  sparkle.style.left = `${rect.left + rect.width / 2}px`;
  sparkle.style.top = `${rect.top + rect.height / 2}px`;
  celebrationLayer.appendChild(sparkle);

  sparkle.addEventListener("animationend", () => {
    sparkle.remove();
  });
}

function createCelebrationLayer() {
  const layer = document.createElement("div");
  layer.className = "celebration-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.appendChild(layer);
  return layer;
}
