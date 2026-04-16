const airportData = [
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
  { city: "台北", iata: "TSA" },
  { city: "台北", iata: "TPE" },
  { city: "深圳", iata: "SZX" }
];

const state = {
  queue: [],
  current: null,
  index: 0,
  correct: 0,
  wrong: 0,
  wrongMap: new Map(),
};

const progressText = document.getElementById("progressText");
const cityText = document.getElementById("cityText");
const answerForm = document.getElementById("answerForm");
const answerInput = document.getElementById("answerInput");
const feedback = document.getElementById("feedback");
const correctCount = document.getElementById("correctCount");
const wrongCount = document.getElementById("wrongCount");
const wrongbookEmpty = document.getElementById("wrongbookEmpty");
const wrongbookList = document.getElementById("wrongbookList");
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

function resetQueue(base) {
  const source = base || airportData;
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
    li.textContent = `${item.city} → ${item.iata}（ミス ${item.count} 回）`;
    wrongbookList.appendChild(li);
  });
}

function nextQuestion() {
  if (state.index >= state.queue.length) {
    state.current = null;
    progressText.textContent = `${state.queue.length} / ${state.queue.length}`;
    cityText.textContent = "完了！「最初からやり直し」で再開できます。";
    feedback.textContent = "お疲れさまでした。";
    feedback.className = "ok";
    return;
  }

  state.current = state.queue[state.index];
  progressText.textContent = `${state.index + 1} / ${state.queue.length}`;
  cityText.textContent = state.current.city;
  answerInput.value = "";
  answerInput.focus();
}

function addWrong(item) {
  const key = `${item.city}:${item.iata}`;
  const found = state.wrongMap.get(key);
  if (found) {
    found.count += 1;
  } else {
    state.wrongMap.set(key, { ...item, count: 1 });
  }
}

answerForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!state.current) {
    return;
  }

  const answer = answerInput.value.trim().toUpperCase();
  if (!answer) {
    return;
  }

  if (answer === state.current.iata) {
    state.correct += 1;
    feedback.textContent = `正解！ ${state.current.city} は ${state.current.iata}`;
    feedback.className = "ok";
  } else {
    state.wrong += 1;
    addWrong(state.current);
    feedback.textContent = `不正解。正解は ${state.current.iata}`;
    feedback.className = "ng";
    renderWrongbook();
  }

  state.index += 1;
  renderStats();
  nextQuestion();
});

restartBtn.addEventListener("click", () => {
  state.correct = 0;
  state.wrong = 0;
  state.wrongMap.clear();
  renderStats();
  renderWrongbook();
  feedback.textContent = "";
  feedback.className = "";
  resetQueue();
  nextQuestion();
});

retryWrongBtn.addEventListener("click", () => {
  const wrongOnly = [...state.wrongMap.values()].map(({ city, iata }) => ({ city, iata }));
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
