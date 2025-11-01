// =================================================
// データ定義 (前回の修正版と同一)
// =================================================
const questions = [
    { id: 1, dim: 'E', sub: 'E1', statement: "相手が言葉にしない感情の変化にも、すぐに気づきやすい。", type: 'slider', reverse: false, group: "E軸: 感情力 - 感情と倫理" },
    { id: 2, dim: 'E', sub: 'E2', statement: "自分の利益と他者の公平性が対立した場合、公平性を優先して行動する。", type: 'slider', reverse: false },
    { id: 3, dim: 'E', sub: 'E1', statement: "ニュースや物語で他者のつらい状況を見ると、自分まで悲しい気持ちになる。", type: 'slider', reverse: false },
    { id: 4, dim: 'E', sub: 'E2', statement: "たとえ少数の犠牲が出ても、多数の人々が幸せになるなら仕方がないと考える。", type: 'slider', reverse: true },
    { id: 5, dim: 'E', sub: 'E1', statement: "友人のささいな喜びや不満を、まるで自分のことのように感じる。", type: 'slider', reverse: false },
    { id: 6, dim: 'E', sub: 'E2', statement: "誰かを助けるためなら、会社の決まりを無視して行動しても良いと思う。", type: 'slider', reverse: false },
    { id: 7, dim: 'E', sub: 'E1', statement: "落ち込んでいる人に会うと、自分まで気持ちが引きずられやすい。", type: 'slider', reverse: true },
    { id: 8, dim: 'E', sub: 'E2', statement: "自分の責任ではない問題は、見て見ぬふりをして関わらないでおく。", type: 'slider', reverse: true },
    { id: 9, dim: 'C', sub: 'C1', statement: "自分の話が長くなると感じたら、すぐに話を短くまとめることができる。", type: 'slider', reverse: false, group: "C軸: 対話力 - 伝達と把握" },
    { id: 10, dim: 'C', sub: 'C2', statement: "話が脱線しても、相手が本当に伝えたい核心のメッセージを見失わない。", type: 'slider', reverse: false },
    { id: 11, dim: 'C', sub: 'C1', statement: "相手の反応が鈍いと感じたら、自分の話し方をすぐに修正して理解を促す。", type: 'slider', reverse: false },
    { id: 12, dim: 'C', sub: 'C2', statement: "初めて聞く説明でも、途中で質問なしに内容を一度で理解できることが多い。", type: 'slider', reverse: false },
    { id: 13, dim: 'C', sub: 'C1', statement: "相手が知識のない分野の話をする場合、意図的に簡単な言葉を選んで話す。", type: 'slider', reverse: false },
    { id: 14, dim: 'C', sub: 'C2', statement: "複数の人が同時に話していても、それぞれの主張を正確に聞き分けられる。", type: 'slider', reverse: false },
    { id: 15, dim: 'C', sub: 'C1', statement: "自分のアイデアを説明するとき、声のトーンや身振り手振りで相手の興味を引き出せる。", type: 'slider', reverse: false },
    { id: 16, dim: 'C', sub: 'C2', statement: "会議で色々な意見が出ても、今何が問題なのかを整理して理解できる。", type: 'slider', reverse: false },
    { id: 17, dim: 'C', sub: 'C1', statement: "メールやチャットを送る前に、誤解がないように表現を何度も推敲する。", type: 'slider', reverse: false },
    { id: 18, dim: 'C', sub: 'C2', statement: "自分の意見を言うことより、相手の話を聞き、その真意を探る方が得意だ。", type: 'slider', reverse: false },
    { id: 19, dim: 'L', sub: 'L1', statement: "自分の好き嫌いが、データ分析の結果に影響を与えることは絶対にない。", type: 'slider', reverse: false, group: "L軸: 思考力 - 論理と判断" },
    { id: 20, dim: 'L', sub: 'L2', statement: "何か新しいことを始める前には、手順を細かく書き出す作業が欠かせない。", type: 'slider', reverse: false },
    { id: 21, dim: 'L', sub: 'L3', statement: "専門家や権威ある人の発言でも、「本当にそうか？」と必ず一度立ち止まって検証する。", type: 'slider', reverse: false },
    { id: 22, dim: 'L', sub: 'L1', statement: "感情的にならず、自分の嫌いな人の意見でも正しいなら受け入れられる。", type: 'slider', reverse: false },
    { id: 23, dim: 'L', sub: 'L2', statement: "結論を出す際、直感やひらめきよりも、段階的な分析プロセスを重視する。", type: 'slider', reverse: false },
    { id: 24, dim: 'L', sub: 'L3', statement: "新しい情報を見たとき、その情報が「誰の利益になるか」を最初に考える。", type: 'slider', reverse: false },
    { id: 25, dim: 'L', sub: 'L1', statement: "重要な決定では、過去の経験による「確信」を排除し、現在の事実のみに頼る。", type: 'slider', reverse: false },
    { id: 26, dim: 'L', sub: 'L2', statement: "複雑な問題に出会ったとき、問題を小さな要素に分解して解決しようとする。", type: 'slider', reverse: false },
    { id: 27, dim: 'L', sub: 'L3', statement: "「これは当たり前だ」と言われると、かえって「本当に？」と疑いたくなる。", type: 'slider', reverse: false },
    { id: 28, dim: 'L', sub: 'L1', statement: "揉め事が起きている場でも、感情的にならず、冷静に事実だけを整理できる。", type: 'slider', reverse: false },
    { id: 29, dim: 'L', sub: 'L2', statement: "勉強や仕事で、まず全体像（目次や構成）を把握しないと細かい作業に入れない。", type: 'slider', reverse: false },
    { id: 30, dim: 'L', sub: 'L3', statement: "間違いや欠陥を指摘することに抵抗感はなく、むしろ必要なことだと考える。", type: 'slider', reverse: false },
    
    { 
        id: 31, dim: 'D', sub: 'D1', statement: "画面中央に出る指示に従って、**できるだけ早く**ボタンを押してください。", type: 'decision', group: "D軸: 判断力 - 迅速な判断力",
        options: [
            { text: "左のボタン", action: 'left' },
            { text: "右のボタン", action: 'right' }
        ] 
    },
];

const DECISION_TRIALS = 5; 
const DECISION_MAX_SCORE = 5 * DECISION_TRIALS; 

const CUTOFFS = { /* ... (省略) ... */ };
const STABILITY_THRESHOLDS = { /* ... (省略) ... */ };
const typeDescriptions = { /* ... (省略) ... */ };


// =================================================
// DOM要素の取得と変数定義
// =================================================
let currentQuestionIndex = 0;
let isTransitioning = false;
let dAxisData = {
    currentTrial: 0, 
    totalScore: 0,
    currentInstruction: null, 
    startTime: null 
};

let questionsContainer; 
let navButtonsContainer; 
let prevBtn;
let nextBtn;
let submitBtn;
let decisionArea = null;


// =================================================
// 💡 1. ダークモード切り替えロジック
// =================================================
function setupDarkModeToggle() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    // 初期状態の読み込み (localStorageから)
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        toggleButton.textContent = '☀️'; // 太陽アイコン
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙'; // 月アイコン
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = '☀️';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = '🌙';
        }
    });
}


// =================================================
// 2. 質問表示ロジック (変更なし: 前回の修正版と同一)
// =================================================
function renderQuestions() {
    questionsContainer = document.getElementById('questions-container');
    navButtonsContainer = document.getElementById('navigation-buttons-container');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    submitBtn = document.getElementById('submit-btn');

    if (!questionsContainer) return;

    let currentGroup = '';
    questionsContainer.innerHTML = ''; 
    
    questions.forEach((q) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        
        if (q.group && q.group !== currentGroup) {
            qDiv.innerHTML += `<h2>${q.group}</h2>`;
            currentGroup = q.group;
        }
        
        qDiv.innerHTML += `<div class="statement" id="statement-q${q.id}">Q${q.id}. (${q.sub}) ${q.statement}</div>`;

        if (q.type === 'slider') {
            qDiv.innerHTML += `
                <div class="slider-container">
                    <span class="min-max-label">-5 (全くそう思わない)</span>
                    <input type="range" id="q${q.id}" name="q${q.id}" min="-5" max="5" value="0" step="1" oninput="updateScoreLabel(${q.id}, this.value)">
                    <span id="label-q${q.id}" class="score-label">0</span>
                    <span class="min-max-label">+5 (強くそう思う)</span>
                </div>
            `;
        } else if (q.type === 'decision') {
            qDiv.innerHTML += `
                <div id="decision-area-q${q.id}" style="text-align: center; margin-top: 20px;">
                    <div id="instruction-display" style="font-size: 2em; font-weight: 700; height: 50px; color: #0b6cb5; margin-bottom: 20px;">準備中...</div>
                    <div id="decision-explanation" style="
                        background: var(--color-background); 
                        padding: 20px; 
                        border-radius: 8px; 
                        border: 1px solid var(--color-border);
                        margin-bottom: 20px;
                        text-align: left;
                    ">
                        <h3>指示ルール (できるだけ早く判断してください)</h3>
                        <ul>
                            <li>**【青】**が表示されたら、**右のボタン**を押してください。</li>
                            <li>**【赤】**が表示されたら、**左のボタン**を押してください。</li>
                        </ul>
                        <p>この説明を読み終えたら、「D軸テスト開始」ボタンを押して試行を始めてください。</p>
                        <button type="button" id="start-trials-btn" class="btn primary" style=" font-size: 1.1em; margin-top: 15px;">D軸テスト開始</button>
                    </div>
                    
                    <div class="button-options" id="options-q${q.id}" style="flex-direction: row; justify-content: space-around;">
                        <button type="button" data-action="left" onclick="handleDecisionClick('left')" disabled>左のボタン</button>
                        <button type="button" data-action="right" onclick="handleDecisionClick('right')" disabled>右のボタン</button>
                    </div>
                    <div id="trial-info" style="margin-top: 15px; color: #5d6d7e;">試行回数: 0 / ${DECISION_TRIALS}</div>
                </div>
            `;
            const hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.id = `q${q.id}`;
            hiddenInput.name = `q${q.id}`;
            hiddenInput.value = '0'; 
            qDiv.appendChild(hiddenInput);
        }
        
        questionsContainer.appendChild(qDiv);
    });
    
    decisionArea = document.getElementById(`decision-area-q${questions.find(q => q.dim === 'D').id}`);
    
    const startTrialsBtn = document.getElementById('start-trials-btn');
    if(startTrialsBtn) {
        startTrialsBtn.addEventListener('click', () => {
            document.getElementById('decision-explanation').style.display = 'none';
            dAxisData.currentTrial = 0; 
            startDecisionTrial();
        });
    }
    showQuestion(0);
}

// ... (startDecisionTrial, handleDecisionClick, showQuestion, updateButtons, 
// updateScoreLabel, classifyScore, determineStability, getGoodMatches は前回の修正版と同一ロジック) ...
function startDecisionTrial() { /* ... */ }
window.handleDecisionClick = function(action) { /* ... */ }
function showQuestion(index, direction) { /* ... */ }
function updateButtons() { /* ... */ }
window.updateScoreLabel = function(id, value) { /* ... */ }
const classifyScore = (score, axis) => { /* ... */ };
function determineStability(score, axis) { /* ... */ }
function getGoodMatches(e, c, l, d) { /* ... */ }


// =================================================
// 💡 3. 結果計算ロジック (アニメーション処理を追加)
// =================================================
function calculateResults(event) {
    event.preventDefault();

    let eScore = 0;
    let cScore = 0;
    let lScore = 0;
    let dScore = 0; 
    const form = document.getElementById('ecl-form');
    const resultsEl = document.getElementById('results');

    // 1. スコアの集計 (省略) ...

    questions.forEach(q => {
        const input = form.elements[`q${q.id}`];
        if (q.dim === 'D') {
            dScore = parseInt(input ? input.value : '0');
            return;
        }
        if (!input || input.value === '') return; 
        let score = parseInt(input.value); 
        if (q.type === 'slider' && q.reverse) {
            score = -score;  
        }
        if (q.dim === 'E') eScore += score;
        if (q.dim === 'C') cScore += score;
        if (q.dim === 'L') lScore += score;
    });

    // 2. タイプ分類
    const eClass = classifyScore(eScore, 'E');
    const cClass = classifyScore(cScore, 'C');
    const lClass = classifyScore(lScore, 'L');
    const dClass = classifyScore(dScore, 'D'); 
    const typeKey = `${eClass}${cClass}${lClass}${dClass}`; 
    const result = typeDescriptions[typeKey] || { name: typeKey + '型', desc: `あなたは感情 (${eClass})、対話 (${cClass})、思考 (${lClass})、判断力 (${dClass}) のユニークな組み合わせを持っています。` };

    // 3. 安定性判定 (省略) ...
    const eStability = determineStability(eScore, 'E');
    const cStability = determineStability(cStability, 'C');
    const lStability = determineStability(lScore, 'L');
    const dStability = determineStability(dScore, 'D'); 

    // 4. 結果のDOMへの反映
    document.getElementById('e-total-score').textContent = Math.round(eScore); 
    document.getElementById('c-total-score').textContent = Math.round(cScore);
    document.getElementById('l-total-score').textContent = Math.round(lScore);
    document.getElementById('d-total-score').textContent = Math.round(dScore); 
    document.getElementById('e-stability').textContent = `E${eClass}-${eStability}`; 
    document.getElementById('c-stability').textContent = `C${cClass}-${cStability}`;
    document.getElementById('l-stability').textContent = `L${lClass}-${lStability}`;
    document.getElementById('d-stability').textContent = `D${dClass}-${dStability}`;
    
    document.getElementById('e-stability').className = `stability-indicator ${eStability}`;
    document.getElementById('c-stability').className = `stability-indicator ${cStability}`;
    document.getElementById('l-stability').className = `stability-indicator ${lStability}`;
    document.getElementById('d-stability').className = `stability-indicator ${dStability}`;

    document.getElementById('type-result').textContent = result.name;
    document.getElementById('type-description').textContent = result.desc;
    
    // 5. 相性判定の実行と表示 (省略) ...
    const goodMatches = getGoodMatches(eClass, cClass, lClass, dClass);
    const compatibilityDescription = document.getElementById('good-match-description');
    if (goodMatches.length > 0) {
        const matchesText = goodMatches.map(match => `<span class="good-match">${match.name}</span><br><span class="good-match-description">${match.reason}</span>`).join('<br><br>');
        compatibilityDescription.innerHTML = matchesText;
    } else {
        compatibilityDescription.textContent = 'どのタイプとも安定した関係を築くことができます。';
    }

    // 6. フォームを非表示にし、結果を表示
    form.classList.remove('active');
    form.style.display = 'none'; 
    resultsEl.style.display = 'block';

    // 💡 修正: CSSアニメーションクラスを追加して、スムーズな表示を実現
    setTimeout(() => {
        resultsEl.classList.add('active');
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        
        // 結果カードの個別のフェードインアニメーションを開始
        document.querySelectorAll('.score-box, .compatibility-card').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });

    }, 50);
}


// =================================================
// イベントリスナーと初期化
// =================================================

document.addEventListener('DOMContentLoaded', () => {
    // ダークモードトグルをセットアップ
    setupDarkModeToggle();
    
    // 質問フォームの生成と初期表示
    renderQuestions();
    
    const startBtn = document.getElementById('start-button');
    const startScrn = document.getElementById('start-screen');
    const formEl = document.getElementById('ecl-form');

    // 1. 開始ボタンの処理 (アニメーション制御)
    if (startBtn && startScrn && formEl) {
        startBtn.addEventListener('click', () => {
            startScrn.classList.remove('active');
            startScrn.style.opacity = '0';
            
            setTimeout(() => {
                startScrn.style.display = 'none';
                formEl.style.display = 'block'; 
                
                setTimeout(() => {
                    formEl.classList.add('active');
                    formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 10);
            }, 500);
        });
    }

    // 2. 質問ナビゲーション (次へ/前へ/結果を見る)
    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < questions.length - 1) {
                showQuestion(currentQuestionIndex + 1, 'next');
            }
        });
    }
    
    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                showQuestion(currentQuestionIndex - 1, 'prev');
            }
        });
    }
    
    if(submitBtn) {
        submitBtn.addEventListener('click', calculateResults);
    }
});
