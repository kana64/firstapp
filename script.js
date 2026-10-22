const questions = [
  {
    text: "初対面の人と話すとき、あなたはどんな感じですか？",
    options: [
      { text: "自分から積極的に話しかけ、場を盛り上げる", type: "A" },
      { text: "相手の話をよく聞き、質問を返す", type: "B" },
      { text: "ユーモアや軽いジョークで距離を縮める", type: "C" },
      { text: "落ち着いて話し、深いテーマを選ぶ", type: "D" }
    ]
  },
  {
    text: "友人が悩みを相談してきた、あなたはどうしますか？",
    options: [
      { text: "解決策を一緒に考え、行動プランを提案する", type: "A" },
      { text: "その気持ちに寄り添い、話を最後まで聞く", type: "B" },
      { text: "気分転換になるよう、楽しい話題に切り替える", type: "C" },
      { text: "客観的に状況を整理し選択肢を示す", type: "D" }
    ]
  },
  {
    text: "グループディスカッションで、あなたが取りがちな役割は？",
    options: [
      { text: "議論をとめ、結論を導き出す", type: "A" },
      { text: "全員の意見を聞き、まとめ役になる", type: "B" },
      { text: "斬新なアイデアや、意外な視点を出す", type: "C" },
      { text: "データや事実に基づいて意見を述べる", type: "D" }
    ]
  },
  {
    text: "SNSやチャットで返信するとき、あなたのスタルは？",
    options: [
      { text: "すぐに返信し、テンポよくやり取りする", type: "A" },
      { text: "相手の投稿に丁寧に反応する", type: "B" },
      { text: "スタンプや写真を多用して楽しむ", type: "C" },
      { text: "内容をよく考えてから、簡潔に返す", type: "D" }
    ]
  },
  {
    text: "人間関係で最も大切にしているのは？",
    options: [
      { text: "信頼関係と、お互いに成長できること", type: "A" },
      { text: "安心感と、支え合える関係", type: "B" },
      { text: "楽しさと、一緒にいて飽きないこと", type: "C" },
      { text: "誠実さと、深い理解し合えること", type: "D" }
    ]
  },
  {
    text: "意見の対立が起きたとき、あなたは？",
    options: [
      { text: "自分の意見をはっきり伝え、説得する", type: "A" },
      { text: "相手の気持ちを優先し、譲る", type: "B" },
      { text: "和稀泥して、雰囲気を和ませる", type: "C" },
      { text: "論点を整理し、建設的な議論を試みる", type: "D" }
    ]
  }
];

const results = {
  A: {
    type: "リーダータイプ",
    tagline: "「目標と信頼で、人を動かす」",
    desc: "あなたは意思疎通において明確さと方向性を重視します。相手に何を求めているかをはっきり伝え、同時に前向きなエネルギーを与えます。リーダーシップがある一方、時に相手を置き去りにしてしまうことも。一度立ち止まって「相手のペース」を尊重すると、さらに深い信頼が生まれます。",
    traits: [
      { label: "主導性", value: "非常に高い" },
      { label: "対応スタイル", value: "目的指向" },
      { label: "強み", value: "決断力・推進力" },
      { label: "注意点", value: "相手のペース配慮" }
    ],
    comp: [
      { label: "相性◎", type: "協調タイプ" },
      { label: "相性○", type: "分析タイプ" }
    ],
    letter: "A"
  },
  B: {
    type: "協調タイプ",
    tagline: "「傾聴と包容で、場をつなぐ」",
    desc: "あなたは相手の気持ちを優先し、安心して話せる空間を作るのが得意です。対立を避け、みんなが納得できる道を探します。ただし、自分の意見を後回しにしすぎると、内に不満が溜まることも。時には「私はこう思う」と伝えることも、関係を深める潤滑油になります。",
    traits: [
      { label: "共感力", value: "非常に高い" },
      { label: "対応スタイル", value: "関係重視" },
      { label: "強み", value: "傾聴・調整力" },
      { label: "注意点", value: "自己主張のバランス" }
    ],
    comp: [
      { label: "相性◎", type: "リーダータイプ" },
      { label: "相性○", type: "表現タイプ" }
    ],
    letter: "B"
  },
  C: {
    type: "表現タイプ",
    tagline: "「自由とユーモアで、空気を変える」",
    desc: "あなは人とのやり取りにおいて、楽しさと意外性を与える存在です。堅苦しい雰囲気を和ませ、場に新しい風を吹き込みます。時に軽く見られることもありますが、あなたの柔軟な発想は、人間関係の潤滑油となっています。ただし、本気の場面では真剣さを見せることも大切です。",
    traits: [
      { label: "表現力", value: "非常に高い" },
      { label: "対応スタイル", value: "感情・直感重" },
      { label: "強み", value: "ユーモア・創造性" },
      { label: "注意点", value: "真剣さの切り替え" }
    ],
    comp: [
      { label: "相性◎", type: "分析タイプ" },
      { label: "相性○", type: "協調タイプ" }
    ],
    letter: "C"
  },
  D: {
    type: "分析タイプ",
    tagline: "「論理と誠実さで、信頼を積む」",
    desc: "あなたはコミュニケーションにおいて、正確さと誠実さを重んじます。感情に流されず、事実と論理に基づいて対応します。一見クールに見えますが、相手のことを深く考えているからこその慎重さです。時に「考えすぎ」で機会を逃すこともあるので、時には直感で動いてみると新しい扉が開くかもしれません。",
    traits: [
      { label: "論理性", value: "非常に高い" },
      { label: "対応スタイル", value: "事実・論理重視" },
      { label: "強み", value: "洞察力・信頼性" },
      { label: "注意点", value: "過度な慎重さ" }
    ],
    comp: [
      { label: "相性◎", type: "表現タイプ" },
      { label: "相性○", type: "リーダータイプ" }
    ],
    letter: "D"
  }
};

let current = 0;
let scores = { A:0, B:0, C:0, D:0 };
let currentResultKey = "A";

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

function startTest() {
  current = 0;
  scores = { A:0, B:0, C:0, D:0 };
  showScreen('question-screen');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  document.getElementById('q-number').textContent = 'Q' + (current+1);
  document.getElementById('q-counter').textContent = (current+1) + ' / ' + questions.length;
  document.getElementById('q-text').textContent = q.text;
  document.getElementById('progress-fill').style.width = ((current) / questions.length * 100) + '%';

  const optsDiv = document.getElementById('options');
  optsDiv.innerHTML = '';
  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = opt.text;
    btn.onclick = () => selectOption(opt.type);
    btn.style.animation = 'fadeIn 0.3s ease ' + (idx*0.06) + 's both';
    optsDiv.appendChild(btn);
  });
}

function selectOption(type) {
  scores[type]++;
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    document.getElementById('progress-fill').style.width = '100%';
    showScreen('loading-screen');
    setTimeout(showResult, 1800);
  }
}

function showResult() {
  let maxType = 'A';
  let maxScore = -1;
  for (const [t, s] of Object.entries(scores)) {
    if (s > maxScore) { maxScore = s; maxType = t; }
  }
  currentResultKey = maxType;
  const r = results[maxType];

  document.getElementById('r-type').textContent = r.type;
  document.getElementById('r-tagline').textContent = r.tagline;

  document.getElementById('c-badge').textContent = r.letter;
  document.getElementById('c-type').textContent = r.type;
  document.getElementById('c-tagline').textContent = r.tagline;
  document.getElementById('c-desc').textContent = r.desc;

  const cTraits = document.getElementById('c-traits');
  cTraits.innerHTML = '';
  r.traits.forEach(trait => {
    const card = document.createElement('div');
    card.className = 'ctrait-card';
    card.innerHTML = '<div class="ctrait-label">' + trait.label + '</div><div class="ctrait-value">' + trait.value + '</div>';
    cTraits.appendChild(card);
  });

  const cComp = document.getElementById('c-comp');
  cComp.innerHTML = '';
  r.comp.forEach(c => {
    const item = document.createElement('div');
    item.innerHTML = '<div class="ccomp-label">' + c.label + '</div><div class="ccomp-type">' + c.type + '</div>';
    cComp.appendChild(item);
  });

  showScreen('result-screen');
}

async function downloadResult() {
  const el = document.getElementById('result-capture');
  try {
    showToast('画像を生成中...');
    await document.fonts.ready;
    const canvas = await html2canvas(el, {
      scale: 3,
      useCORS: true,
      backgroundColor: '#F7F9F7',
      logging: false
    });
    const link = document.createElement('a');
    link.download = '性格タイプ診断結果.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
    showToast('画像をダウンロードしました');
  } catch (e) {
    showToast('画像の生成に失敗しました');
    console.error(e);
  }
}

function shareResult() {
  const r = results[currentResultKey];
  const text = '【性格タイプ診断】
私のタイプは「' + r.type + '」です。
' + r.tagline + '
' + r.desc.substring(0, 60) + '...';
  if (navigator.share) {
    navigator.share({
      title: '性格タイプ診断',
      text: text,
      url: location.href
    }).catch(() => {});
  } else {
    copyText();
  }
}

function copyText() {
  const r = results[currentResultKey];
  const text = '【性格タイプ診断】
' + r.type + '
' + r.tagline + '

' + r.desc + '

相性の良いタイプ：' + r.comp.map(c => c.type).join('、');
  navigator.clipboard.writeText(text).then(() => showToast('テキストをコピーしました')).catch(() => showToast('コピーに失敗しました'));
}

function restartTest() {
  showScreen('intro-screen');
}
