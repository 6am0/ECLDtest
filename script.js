// =================================================
// データ定義
// =================================================

const questions = [
    { id: 1, dim: 'E', sub: 'E1', statement: "相手が言葉にしない感情の変化にも、すぐに気づきやすい。", type: 'slider', reverse: false, group: "E軸: 感情力 - 感情と倫理" },
    { id: 2, dim: 'E', sub: 'E2', statement: "自分の利益と他者の公平性が対立した場合、公平性を優先して行動する。", type: 'slider', reverse: false },
    // ... (E, C, L軸の質問は省略、dimとtype: 'slider'を追加)
    // 便宜上、残りの質問はスライダー形式とします。
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
    
    // 💡 D軸の質問 (特殊なボタン形式: 視覚判断力) を追加
    { 
        id: 31, dim: 'D', sub: 'D1', statement: "画面中央に出る指示に従って、**できるだけ早く**ボタンを押してください。", type: 'decision', group: "D軸: 判断力 - 迅速な判断力",
        options: [
            { text: "左のボタン", action: 'left' },
            { text: "右のボタン", action: 'right' }
        ] 
    },
    // D軸はこれ以上質問を追加せず、この1問（複数回実施）で判断力を測ります。
];

// D軸の追加設定
const DECISION_TRIALS = 5; // D軸の試行回数
const DECISION_MAX_SCORE = 5 * DECISION_TRIALS; // 最大スコアは 25

// α/γの閾値（D軸を新しいスコアリングに合わせて調整）
const CUTOFFS = {
    E: { high: 15, low: -15, max: 40 }, 
    C: { high: 18, low: -18, max: 50 }, 
    L: { high: 23, low: -23, max: 60 },
    D: { high: 15, low: 5, max: DECISION_MAX_SCORE } // 💡 D軸の閾値: 15点以上でα、5点以下でγ
};

// 安定性の閾値
const STABILITY_THRESHOLDS = {
    Intermediate: 3, 
    Unstable: 1.5    
};

// 💡 タイプ分類の説明を新しい表記（軸名＋分類）に合わせて調整
const typeDescriptions = {
    'EaCaLaDa': { name: 'EαCαLαDα型: 全能の王 (理想形)', desc: '感情、対話、思考、判断力全てが極めて高い、非常に稀でバランスの取れたリーダータイプです。即断即決と多角的な視点を両立します。' },
    'EbCbLbDa': { name: 'EβCβLβDα型: 迅速な実行者', desc: '全体的にバランスが取れていますが、特に判断力・決断力が高く、チームのスピードを上げる役割を果たします。' },
    'EaCbLbDa': { name: 'EαCβLβDα型: 熱血なトップランナー', desc: '感情的配慮がありつつ、決断が速いタイプ。人情味のあるリーダーとして活躍できます。' },
    'EaCaLaDg': { name: 'EαCαLαDγ型: 優柔不断な賢者', desc: '知性レベルは非常に高いが、極度に慎重で、行動に移せない傾向があります。分析に時間をかけすぎます。' },
    'EgCgLgDa': { name: 'EγCγLγDα型: 攻撃的な行動家', desc: '感情、対話、思考の基盤は弱いものの、判断力・行動力が突出しており、失敗を恐れません。猪突猛進になる可能性があります。' },
    'EbCbLbDb': { name: 'EβCβLβDβ型: 均衡の標準人', desc: '全てが中立的で、最も一般的なタイプ。安定性と常識を重視します。' },
    // 他の組み合わせは汎用的な説明を使用
};


// =================================================
// DOM要素の取得と変数定義
// =================================================

let currentQuestionIndex = 0;
let isTransitioning = false;
let dAxisData = {
    currentTrial: 0,
    totalScore: 0,
    currentInstruction: null // 'left' or 'right'
};

const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const eclForm = document.getElementById('ecl-form');
const questionsContainer = document.getElementById('questions-container');
const navButtonsContainer = document.getElementById('navigation-buttons-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

// D軸専用DOM要素（一時的なコンテナとして利用）
let decisionArea = null;


// =================================================
// 関数定義
// =================================================

/**
 * 質問フォームをDOMに描画する
 */
function renderQuestions() {
    let currentGroup = '';
    questions.forEach((q) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        
        if (q.group && q.group !== currentGroup) {
            qDiv.innerHTML += `<h2>${q.group}</h2>`;
            currentGroup = q.group;
        }
        
        qDiv.innerHTML += `<div class="statement" id="statement-q${q.id}">Q${q.id}. (${q.sub}) ${q.statement}</div>`;

        if (q.type === 'slider') {
            // スライダー形式の質問
            qDiv.innerHTML += `
                <div class="slider-container">
                    <span class="min-max-label">-5 (全くそう思わない)</span>
                    <input type="range" id="q${q.id}" name="q${q.id}" min="-5" max="5" value="0" step="1" oninput="updateScoreLabel(${q.id}, this.value)">
                    <span id="label-q${q.id}" class="score-label">0</span>
                    <span class="min-max-label">+5 (強くそう思う)</span>
                </div>
            `;
            // 隠しフィールドは不要（range input自体がフォームデータになるため）

        } else if (q.type === 'decision') {
            // 💡 D軸の特殊な質問（ボタン判断）
            qDiv.innerHTML += `
                <div id="decision-area-q${q.id}" style="text-align: center; margin-top: 20px;">
                    <div id="instruction-display" style="font-size: 2em; font-weight: 700; height: 50px; color: #0b6cb5; margin-bottom: 20px;">準備中...</div>
                    <div class="button-options" id="options-q${q.id}" style="flex-direction: row; justify-content: space-around;">
                        <button type="button" data-action="left" onclick="handleDecisionClick('left')" style="width: 45%; padding: 20px;">左のボタン</button>
                        <button type="button" data-action="right" onclick="handleDecisionClick('right')" style="width: 45%; padding: 20px;">右のボタン</button>
                    </div>
                    <div id="trial-info" style="margin-top: 15px; color: #5d6d7e;">試行回数: 0 / ${DECISION_TRIALS}</div>
                </div>
            `;
            // 隠しフィールドをフォームに追加し、最終スコアを保持
            const hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.id = `q${q.id}`;
            hiddenInput.name = `q${q.id}`;
            hiddenInput.value = '0'; // D軸の最終スコア
            qDiv.appendChild(hiddenInput);
            
            // 参照用にDOM要素を保持
            decisionArea = document.getElementById(`decision-area-q${q.id}`);
        }
        
        questionsContainer.appendChild(qDiv);
    });
    // 初回表示
    showQuestion(0);
}

/**
 * D軸の試行を開始/実行する
 */
function startDecisionTrial() {
    if (!decisionArea) return;
    
    const display = document.getElementById('instruction-display');
    const info = document.getElementById('trial-info');
    const statement = document.getElementById(`statement-q31`);

    if (dAxisData.currentTrial >= DECISION_TRIALS) {
        // 全ての試行が終了
        display.textContent = "試行完了";
        display.style.color = '#2ecc71';
        info.textContent = `最終スコア: ${dAxisData.totalScore} / ${DECISION_MAX_SCORE}`;
        statement.textContent = "回答が完了しました。次へ進んでください。";
        // 最終スコアをフォームに保存
        document.getElementById(`q31`).value = dAxisData.totalScore;
        nextBtn.disabled = false;
        return;
    }
    
    dAxisData.currentTrial++;
    info.textContent = `試行回数: ${dAxisData.currentTrial} / ${DECISION_TRIALS}`;

    // 💡 50%の確率で 'left' または 'right' の指示をランダムに決定
    const instruction = Math.random() < 0.5 ? 'left' : 'right';
    dAxisData.currentInstruction = instruction;

    let color = '';
    let instructionText = '';
    
    // 💡 視覚的な指示と動作をリンクさせる（例：赤/青）
    if (instruction === 'right') {
        instructionText = '右のボタンを押してください';
        color = '#3498db'; // 青
    } else {
        instructionText = '左のボタンを押してください';
        color = '#e74c3c'; // 赤
    }
    
    // 表示と同時にタイマーを開始
    display.textContent = instructionText;
    display.style.color = color;
    dAxisData.startTime = performance.now();
}

/**
 * D軸のボタンがクリックされた時の処理 (グローバルスコープ)
 * @param {string} action - 'left' or 'right'
 */
window.handleDecisionClick = function(action) {
    if (dAxisData.currentTrial >= DECISION_TRIALS || !dAxisData.startTime) {
        return; // 試行が終了しているか、まだ開始されていない
    }

    const endTime = performance.now();
    const reactionTimeMs = endTime - dAxisData.startTime;
    const isCorrect = action === dAxisData.currentInstruction;
    
    let score = 0;

    if (isCorrect) {
        // 💡 正解した場合、反応時間に応じてスコアを加算 (速いほど高い)
        // 例: 500ms未満: +5, 500-1000ms: +3, 1000ms以上: +1
        if (reactionTimeMs < 500) {
            score = 5;
        } else if (reactionTimeMs < 1000) {
            score = 3;
        } else {
            score = 1;
        }
    } else {
        // 💡 不正解の場合、スコアは加算しない (0点)
        score = 0;
    }

    dAxisData.totalScore += score;
    dAxisData.startTime = null; // タイマーをリセット

    // 次の試行に進む (遅延させて視覚的なフィードバックを与える)
    setTimeout(startDecisionTrial, 500); 
}


/**
 * 指定した質問を表示し、他の質問を非表示にする
 * @param {number} index - 表示する質問のインデックス
 * @param {string} direction - 'next' or 'prev' (アニメーション方向指定用)
 */
function showQuestion(index, direction) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const allQuestions = questionsContainer.querySelectorAll('.question');
    const prevQuestion = allQuestions[currentQuestionIndex];
    const nextQuestion = allQuestions[index];

    if (prevQuestion) {
        prevQuestion.style.opacity = '0';
        prevQuestion.style.transform = (direction === 'next') ? 'translateX(-100%)' : 'translateX(100%)';
        prevQuestion.classList.remove('active');
        // D軸の試行を停止
        if (questions[currentQuestionIndex].dim === 'D') {
             dAxisData.startTime = null; 
        }
    }

    setTimeout(() => {
        // ... (アニメーションの処理は省略) ...

        if (prevQuestion) {
            prevQuestion.style.visibility = 'hidden';
            prevQuestion.style.position = 'absolute';
            prevQuestion.style.transform = 'translateX(0)'; 
        }
        
        // 次の質問を表示
        nextQuestion.classList.add('active');
        nextQuestion.style.opacity = '1';
        nextQuestion.style.transform = 'translateX(0)';
        nextQuestion.style.visibility = 'visible';
        nextQuestion.style.position = 'relative';

        currentQuestionIndex = index;
        updateButtons();
        isTransitioning = false;
        
        // 💡 D軸の質問に到達したら試行を開始
        if (questions[currentQuestionIndex].dim === 'D' && dAxisData.currentTrial < DECISION_TRIALS) {
            nextBtn.disabled = true; // 試行中は次へ進めないようにする
            startDecisionTrial();
        } else if (questions[currentQuestionIndex].dim === 'D' && dAxisData.currentTrial >= DECISION_TRIALS) {
             nextBtn.disabled = false; // 試行が完了していれば次へ進める
        } else {
            nextBtn.disabled = false;
        }

    }, 500);
}

// ... (updateButtons, updateScoreLabel, determineStability 関数は省略、変更なし) ...
function updateButtons() {
    navButtonsContainer.style.display = 'flex';
    prevBtn.style.display = (currentQuestionIndex > 0) ? 'block' : 'none';
    
    // 💡 D軸の試行中は「次へ」を無効にする
    if (questions[currentQuestionIndex] && questions[currentQuestionIndex].dim === 'D' && dAxisData.currentTrial < DECISION_TRIALS) {
        nextBtn.style.display = 'block';
        nextBtn.disabled = true; 
        submitBtn.style.display = 'none';
    } else if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        nextBtn.disabled = false;
        submitBtn.style.display = 'none';
    }
}
window.updateScoreLabel = function(id, value) {
    document.getElementById(`label-q${id}`).textContent = Math.round(parseFloat(value));
}

const classifyScore = (score, axis) => {
    if (score >= CUTOFFS[axis].high) return 'α';  // Alpha (High)
    if (score <= CUTOFFS[axis].low) return 'γ';   // Gamma (Low)
    return 'β';                                   // Beta (Middle)
};

function determineStability(score, axis) {
    const { high } = CUTOFFS[axis];
    const absScore = Math.abs(score);
    const cutoffAbs = high; 

    if (absScore < cutoffAbs * (1 - 1/STABILITY_THRESHOLDS.Intermediate)) {
        return 'Stable';
    }
    
    if (absScore >= cutoffAbs * STABILITY_THRESHOLDS.Unstable) {
        return 'Unstable';
    }
    
    return 'Intermediate';
}
// ... (getGoodMatches 関数は省略, 汎用的な内容で継続) ...
function getGoodMatches(e, c, l, d) {
    let matches = [];
    
    // 💡 タイプキーをEβCβLβDβ型のように構成
    const typeKey = `E${e}C${c}L${l}D${d}`;
    
    // 簡略化し、最も汎用性の高い「EβCβLβDβ型」のみ提示
    if (typeKey !== 'EβCβLβDβ') {
         matches.push({ name: typeDescriptions['EbCbLbDb'].name, reason: `あなたと補完し合えるバランスタイプで、お互いの弱点をカバーし合えます。` });
    }
    
    const uniqueMatches = Array.from(new Set(matches.map(m => m.name)))
        .map(name => {
            return matches.find(m => m.name === name);
        });

    return uniqueMatches;
}


/**
 * 診断結果を計算し、表示する
 */
function calculateResults(event) {
    event.preventDefault();

    let eScore = 0;
    let cScore = 0;
    let lScore = 0;
    let dScore = 0; 
    const form = document.getElementById('ecl-form');
    const resultsEl = document.getElementById('results');

    // 1. スコアの集計
    questions.forEach(q => {
        const input = form.elements[`q${q.id}`];
        if (!input || input.value === '') return; // 未回答の質問はスキップ
        
        let score = parseInt(input.value); 
        
        if (q.type === 'slider' && q.reverse) {
            score = -score;  // リバース項目はスコアを反転
        }
        
        if (q.dim === 'E') eScore += score;
        if (q.dim === 'C') cScore += score;
        if (q.dim === 'L') lScore += score;
        if (q.dim === 'D') dScore += score; 
    });


    // 2. タイプ分類
    const eClass = classifyScore(eScore, 'E');
    const cClass = classifyScore(cScore, 'C');
    const lClass = classifyScore(lScore, 'L');
    const dClass = classifyScore(dScore, 'D'); 
    
    // 💡 新しいタイプ表記
    const typeKey = `E${eClass}C${cClass}L${lClass}D${dClass}`; 

    const result = typeDescriptions[typeKey] || { 
        name: typeKey + '型', 
        desc: `あなたは感情 (${eClass})、対話 (${cClass})、思考 (${lClass})、判断力 (${dClass}) のユニークな組み合わせを持っています。`
    };

    // 3. 安定性判定
    const eStability = determineStability(eScore, 'E');
    const cStability = determineStability(cScore, 'C');
    const lStability = determineStability(lScore, 'L');
    const dStability = determineStability(dScore, 'D'); 

    // 4. 結果のDOMへの反映
    document.getElementById('e-total-score').textContent = Math.round(eScore); 
    document.getElementById('c-total-score').textContent = Math.round(cScore);
    document.getElementById('l-total-score').textContent = Math.round(lScore);
    document.getElementById('d-total-score').textContent = Math.round(dScore); 
    
    document.getElementById('e-stability').textContent = `E${eClass}-${eStability}`; // 軸名を追加
    document.getElementById('c-stability').textContent = `C${cClass}-${cStability}`;
    document.getElementById('l-stability').textContent = `L${lClass}-${lStability}`;
    document.getElementById('d-stability').textContent = `D${dClass}-${dStability}`;
    
    document.getElementById('e-stability').className = `stability-indicator ${eStability}`;
    document.getElementById('c-stability').className = `stability-indicator ${cStability}`;
    document.getElementById('l-stability').className = `stability-indicator ${lStability}`;
    document.getElementById('d-stability').className = `stability-indicator ${dStability}`;


    document.getElementById('type-result').textContent = result.name;
    document.getElementById('type-description').textContent = result.desc;
    
    // 5. 相性判定の実行と表示
    const goodMatches = getGoodMatches(eClass, cClass, lClass, dClass);
    const compatibilityDescription = document.getElementById('good-match-description');
    if (goodMatches.length > 0) {
        const matchesText = goodMatches.map(match => `<span class="good-match">${match.name}</span><br><span class="good-match-description">${match.reason}</span>`).join('<br><br>');
        compatibilityDescription.innerHTML = matchesText;
    } else {
        compatibilityDescription.textContent = 'どのタイプとも安定した関係を築くことができます。';
    }

    // 6. フォームを非表示にし、結果を表示
    eclForm.style.display = 'none';
    resultsEl.style.display = 'block';

    setTimeout(() => {
        resultsEl.classList.add('show');
        document.querySelectorAll('.score-box').forEach(box => box.classList.add('show'));
        document.getElementById('compatibility-results').classList.add('show');
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }, 50);
}

// =================================================
// イベントリスナー
// =================================================

// 1. 開始ボタンの処理
startButton.addEventListener('click', () => {
    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.style.display = 'none';
        eclForm.classList.add('show');
        eclForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 500);
});

// 2. 質問ナビゲーション (次へ)
nextBtn.addEventListener('click', () => {
    // D軸の試行が終わっていない場合はボタンがdisabledになっているので処理は不要
    if (currentQuestionIndex < questions.length - 1) {
        showQuestion(currentQuestionIndex + 1, 'next');
    }
});

// 3. 質問ナビゲーション (前へ)
prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        showQuestion(currentQuestionIndex - 1, 'prev');
    }
});

// 4. 結果表示ボタン
submitBtn.addEventListener('click', calculateResults);

// =================================================
// 初期化
// =================================================

document.addEventListener('DOMContentLoaded', renderQuestions);
