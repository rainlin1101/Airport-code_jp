const internationalData = [
  { city: "ワシントンD.C.", iata: "IAD" },
  { city: "ニューヨーク", iata: "JFK" },
  { city: "ロサンゼルス", iata: "LAX" },
  { city: "シカゴ", iata: "ORD" },
  { city: "サンフランシスコ", iata: "SFO" },
  { city: "サンノゼ", iata: "SJC" },
  { city: "シアトル", iata: "SEA" },
  { city: "ヒューストン", iata: "IAH" },
  { city: "バンクーバー", iata: "YVR" },
  { city: "ホノルル", iata: "HNL" },
  { city: "メキシコシティ", iata: "MEX" },
  { city: "フランクフルト", iata: "FRA" },
  { city: "ストックホルム", iata: "ARN" },
  { city: "ミュンヘン", iata: "MUC" },
  { city: "ロンドン", iata: "LHR" },
  { city: "パリ", iata: "CDG" },
  { city: "デュッセルドルフ", iata: "DUS" },
  { city: "ミラノ", iata: "MXP" },
  { city: "ブリュッセル", iata: "BRU" },
  { city: "ウィーン", iata: "VIE" },
  { city: "イスタンブール", iata: "IST" },
  { city: "デリー", iata: "DEL" },
  { city: "シドニー", iata: "SYD" },
  { city: "ムンバイ", iata: "BOM" },
  { city: "パース", iata: "PER" },
  { city: "シンガポール", iata: "SIN" },
  { city: "香港", iata: "HKG" },
  { city: "ジャカルタ", iata: "CGK" },
  { city: "バンコク", iata: "BKK" },
  { city: "ヤンゴン", iata: "RGN" },
  { city: "マニラ", iata: "MNL" },
  { city: "ハノイ", iata: "HAN" },
  { city: "ホーチミンシティ", iata: "SGN" },
  { city: "プノンペン", iata: "KTI" },
  { city: "クアラルンプール", iata: "KUL" },
  { city: "大連", iata: "DLC" },
  { city: "北京", iata: "PEK" },
  { city: "杭州", iata: "HGH" },
  { city: "広州", iata: "CAN" },
  { city: "青島", iata: "TAO" },
  { city: "成都", iata: "CTU" },
  { city: "厦門", iata: "XMN" },
  { city: "瀋陽", iata: "SHE" },
  { city: "上海（浦東）", iata: "PVG" },
  { city: "上海（虹橋）", iata: "SHA" },
  { city: "天津", iata: "TSN" },
  { city: "武漢", iata: "WUH" },
  { city: "ソウル", iata: "ICN" },
  { city: "ソウル", iata: "GMP" },
  { city: "台北（松山）", iata: "TSA" },
  { city: "台北（桃園）", iata: "TPE" },
  { city: "深圳", iata: "SZX" }
];

const domesticData = [
  { city: "稚内", iata: "WKJ" },
  { city: "オホーツク紋別", iata: "MBE" },
  { city: "釧路", iata: "KUH" },
  { city: "帯広", iata: "OBO" },
  { city: "札幌", iata: "CTS" },
  { city: "秋田", iata: "AXT" },
  { city: "庄内", iata: "SYO" },
  { city: "福島", iata: "FKS" },
  { city: "東京（成田）", iata: "NRT" },
  { city: "富山", iata: "TOY" },
  { city: "能登", iata: "NTQ" },
  { city: "中部", iata: "NGO" },
  { city: "大阪", iata: "ITM" },
  { city: "神戸", iata: "UKB" },
  { city: "鳥取", iata: "TTJ" },
  { city: "石見", iata: "IWJ" },
  { city: "広島", iata: "HIJ" },
  { city: "高松", iata: "TAK" },
  { city: "高知", iata: "KCZ" },
  { city: "福岡", iata: "FUK" },
  { city: "佐賀", iata: "HSG" },
  { city: "対馬", iata: "TSJ" },
  { city: "壱岐", iata: "IKI" },
  { city: "宮崎", iata: "KMI" },
  { city: "鹿児島", iata: "KOJ" },
  { city: "石垣", iata: "ISG" },
  { city: "函館", iata: "HKD" },
  { city: "女満別", iata: "MMB" },
  { city: "根室中標津", iata: "SHB" },
  { city: "旭川", iata: "AKJ" },
  { city: "青森", iata: "AOJ" },
  { city: "大館能代", iata: "ONJ" },
  { city: "仙台", iata: "SDJ" },
  { city: "八丈島", iata: "HAC" },
  { city: "東京（羽田）", iata: "HND" },
  { city: "新潟", iata: "KIJ" },
  { city: "小松", iata: "KMQ" },
  { city: "静岡", iata: "FSZ" },
  { city: "関西", iata: "KIX" },
  { city: "米子", iata: "YGJ" },
  { city: "岡山", iata: "OKJ" },
  { city: "岩国", iata: "IWK" },
  { city: "山口宇部", iata: "UBJ" },
  { city: "徳島", iata: "TKS" },
  { city: "松山", iata: "MYJ" },
  { city: "北九州", iata: "KKJ" },
  { city: "長崎", iata: "NGS" },
  { city: "福江", iata: "FUJ" },
  { city: "大分", iata: "OIT" },
  { city: "熊本", iata: "KMJ" },
  { city: "沖縄", iata: "OKA" },
  { city: "宮古", iata: "MMY" }
];

const state = {
  mode: "international",
  queue: [],
  current: null,
  index: 0,
  correct: 0,
  wrong: 0,
  wrongMap: new Map()
};

const progressText = document.getElementById("progressText");
const promptText = document.getElementById("promptText");
const questionText = document.getElementById("questionText");
const answerForm = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const answerLabel = document.getElementById("answerLabel");
const feedback = document.getElementById("feedback");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const wrongbookEmpty = document.getElementById("wrongbookEmpty");
const wrongbookList = document.getElementById("wrongbookList");
const categorySelect = document.getElementById("categorySelect");
const shuffleMode = document.getElementById("shuffleMode");
const restartBtn = document.getElementById("restartBtn");
const retryWrongBtn = document.getElementById("retryWrongBtn");

function shuffle(array) {
  const a = [...array];
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildInternationalQueue() {
  return internationalData.map((item) => ({
    category: "international",
    prompt: "都市名・空港名に対応する IATA コードを入力",
    question: item.city,
    answer: item.iata,
    answerType: "iata"
  }));
}

function buildDomesticQueue() {
  return domesticData.map((item) => {
    const askByCity = Math.random() < 0.5;
    if (askByCity) {
      return {
        category: "domestic",
        prompt: "空港名に対応する IATA コードを入力",
        question: item.city,
        answer: item.iata,
        answerType: "iata"
      };
    }

    return {
      category: "domestic",
      prompt: "IATA コードに対応する空港名（漢字）を入力",
      question: item.iata,
      answer: item.city,
      answerType: "city"
    };
  });
}

function resetQueue(base) {
  let source = base;
  if (!source) {
    source = state.mode === "international" ? buildInternationalQueue() : buildDomesticQueue();
  }

  state.queue = shuffleMode.checked ? shuffle(source) : [...source];
  state.current = null;
  state.index = 0;
}

function renderStats() {
  correctCount.textContent = String(state.correct);
  wrongCount.textContent = String(state.wrong);
}

function renderWrongbook() {
  const values = [...state.wrongMap.values()];
  wrongbookList.innerHTML = "";

  if (!values.length) {
    wrongbookEmpty.style.display = "block";
    retryWrongBtn.disabled = true;
    return;
  }

  wrongbookEmpty.style.display = "none";
  retryWrongBtn.disabled = false;

  values.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.question} → ${item.answer}（ミス ${item.count} 回）`;
    wrongbookList.appendChild(li);
  });
}

function nextQuestion() {
  if (state.index >= state.queue.length) {
    state.current = null;
    progressText.textContent = `${state.queue.length} / ${state.queue.length}`;
    promptText.textContent = "完了";
    questionText.textContent = "完了！「最初からやり直し」で再開できます。";
    answerLabel.textContent = "回答";
    feedback.textContent = "お疲れさまでした。";
    feedback.className = "ok";
    return;
  }

  state.current = state.queue[state.index];
  progressText.textContent = `${state.index + 1} / ${state.queue.length}`;
  promptText.textContent = state.current.prompt;
  questionText.textContent = state.current.question;
  answerLabel.textContent = state.current.answerType === "iata" ? "IATA コード" : "空港名（漢字）";
  answerInput.value = "";
  answerInput.maxLength = state.current.answerType === "iata" ? 3 : 20;
  answerInput.placeholder = state.current.answerType === "iata" ? "例: HND" : "例: 東京（羽田）";
  answerInput.focus();
}

function normalizeAnswer(raw, answerType) {
  if (answerType === "iata") {
    return raw.trim().toUpperCase();
  }

  return raw.trim();
}

function addWrong(item) {
  const key = `${state.mode}:${item.question}:${item.answer}`;
  const found = state.wrongMap.get(key);
  if (found) {
    found.count += 1;
  } else {
    state.wrongMap.set(key, { ...item, count: 1 });
  }
}

function resetAll() {
  state.correct = 0;
  state.wrong = 0;
  state.wrongMap.clear();
  renderStats();
  renderWrongbook();
  feedback.textContent = "";
  feedback.className = "";
  resetQueue();
  nextQuestion();
}

answerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!state.current) {
    return;
  }

  const answer = normalizeAnswer(answerInput.value, state.current.answerType);
  if (!answer) {
    return;
  }

  const expected = normalizeAnswer(state.current.answer, state.current.answerType);
  if (answer === expected) {
    state.correct += 1;
    feedback.textContent = `正解！ ${state.current.question} → ${state.current.answer}`;
    feedback.className = "ok";
  } else {
    state.wrong += 1;
    addWrong(state.current);
    feedback.textContent = `不正解。正解は ${state.current.answer}`;
    feedback.className = "ng";
    renderWrongbook();
  }

  state.index += 1;
  renderStats();
  nextQuestion();
});

categorySelect.addEventListener("change", () => {
  state.mode = categorySelect.value;
  resetAll();
});

restartBtn.addEventListener("click", () => {
  resetAll();
});

retryWrongBtn.addEventListener("click", () => {
  const wrongOnly = [...state.wrongMap.values()].map((item) => ({
    category: item.category,
    prompt: item.prompt,
    question: item.question,
    answer: item.answer,
    answerType: item.answerType
  }));

  state.correct = 0;
  state.wrong = 0;
  renderStats();
  feedback.textContent = "錯題本モードを開始します。";
  feedback.className = "";
  resetQueue(wrongOnly);
  nextQuestion();
});

renderStats();
renderWrongbook();
resetQueue();
nextQuestion();
