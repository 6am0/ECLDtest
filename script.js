// =================================================
// データ定義
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

// D軸の追加設定 
const DECISION_TRIALS = 5; 
const DECISION_MAX_SCORE = 5 * DECISION_TRIALS; 

// α/γの閾値
const CUTOFFS = {
    E: { high: 15, low: -15, max: 40 }, 
    C: { high: 18, low: -18, max: 50 }, 
    L: { high: 23, low: -23, max: 60 },
    D: { high: 15, low: 5, max: DECISION_MAX_SCORE } 
};

// 安定性の閾値
const STABILITY_THRESHOLDS = {
    Intermediate: 3, 
    Unstable: 1.5    
};

const typeDescriptions = {
    // タイプ名からECLDを削除した表記
    'αααα': { name: 'αααα型: 全能の王 (理想形)', desc: '感情、対話、思考、判断力全てが極めて高い、非常に稀でバランスの取れたリーダータイプです。即断即決と多角的な視点を両立します。' },
    'βββα': { name: 'βββα型: 迅速な実行者', desc: '全体的にバランスが取れていますが、特に判断力・決断力が高く、チームのスピードを上げる役割を果たします。' },
    'αββα': { name: 'αββα型: 熱血なトップランナー', desc: '感情的配慮がありつつ、決断が速いタイプ。人情味のあるリーダーとして活躍できます。' },
    'αααγ': { name: 'αααγ型: 優柔不断な賢者', desc: '知性レベルは非常に高いが、極度に慎重で、行動に移せない傾向があります。分析に時間をかけすぎます。' },
    'γγγα': { name: 'γγγα型: 攻撃的な行動家', desc: '感情、対話、思考の基盤は弱いものの、判断力・行動力が突出しており、失敗を恐れません。猪突猛進になる可能性があります。' },
    'ββββ': { name: 'ββββ型: 均衡の標準人', desc: '全てが中立的で、最も一般的なタイプ。安定性と常識を重視します。' },
    // その他のタイプも必要に応じて追加...
};


// =================================================
// DOM要素の取得と変数定義
// =================================================

let currentQuestionIndex = 0;
let isTransitioning = false;
let dAxisData = {
    currentTrial: 0, // 0: 説明画面待ち, 1～5: 試行, 6: 完了
    totalScore: 0,
    currentInstruction: null, 
    startTime: null 
};

// HTML要素を参照するためのグローバル変数（DOMContentLoadedで値が設定されます）
let questionsContainer; 
let navButtonsContainer; 
let prevBtn;
let nextBtn;
let submitBtn;
let decisionArea = null;


// =================================================
// 関数定義
// =================================================

/**
 * 質問フォームをDOMに描画する
 */
function renderQuestions() {
    // DOM要素をここで確実に取得する
    questionsContainer = document.getElementById('questions-container');
    navButtonsContainer = document.getElementById('navigation-buttons-container');
    prevBtn = document.getElementById('prev-btn');
    nextBtn = document.getElementById('next-btn');
    submitBtn = document.getElementById('submit-btn');

    if (!questionsContainer) {
        console.error("Error: questionsContainer element not found.");
        return;
    }

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
            // スライダー形式の質問
            qDiv.innerHTML += `
                <div class="slider-container">
                    <span class="min-max-label">-5 (全くそう思わない)</span>
                    <input type="range" id="q${q.id}" name="q${q.id}" min="-5" max="5" value="0" step="1" oninput="updateScoreLabel(${q.id}, this.value)">
                    <span id="label-q${q.id}" class="score-label">0</span>
                    <span class="min-max-label">+5 (強くそう思う)</span>
                </div>
            `;
        } else if (q.type === 'decision') {
            // D軸の特殊な質問（ボタン判断）
            qDiv.innerHTML += `
                <div id="decision-area-q${q.id}" style="text-align: center; margin-top: 20px;">
                    
                    <div id="instruction-display" style="font-size: 2em; font-weight: 700; height: 50px; color: #0b6cb5; margin-bottom: 20px;">準備中...</div>
                    
                    <div id="decision-explanation" style="
                        background: #f4f6f8; 
                        padding: 20px; 
                        border-radius: 8px; 
                        border: 1px solid #dcdfe4;
                        margin-bottom: 20px;
                        text-align: left;
                    ">
                        <h3>指示ルール (できるだけ早く判断してください)</h3>
                        <ul>
                            <li>**【青】**が表示されたら、**右のボタン**を押してください。</li>
                            <li>**【赤】**が表示されたら、**左のボタン**を押してください。</li>
                        </ul>
                        <p>この説明を読み終えたら、「D軸テスト開始」ボタンを押して試行を始めてください。</p>
                        <button type="button" id="start-trials-btn" style="padding: 10px 20px; font-size: 1.1em; margin-top: 15px;">D軸テスト開始</button>
                    </div>
                    
                    <div class="button-options" id="options-q${q.id}" style="flex-direction: row; justify-content: space-around;">
                        <button type="button" data-action="left" onclick="handleDecisionClick('left')" style="width: 45%; padding: 20px;" disabled>左のボタン</button>
                        <button type="button" data-action="right" onclick="handleDecisionClick('right')" style="width: 45%; padding: 20px;" disabled>右のボタン</button>
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
    
    // decisionAreaの参照を取得
    decisionArea = document.getElementById(`decision-area-q${questions.find(q => q.dim === 'D').id}`);
    
    // D軸テスト開始ボタンにイベントリスナーを追加
    const startTrialsBtn = document.getElementById('start-trials-btn');
    if(startTrialsBtn) {
        startTrialsBtn.addEventListener('click', () => {
             // 説明パネルを非表示にし、試行を開始
            document.getElementById('decision-explanation').style.display = 'none';
            // 試行回数をリセットし、最初の試行を開始
            dAxisData.currentTrial = 0; 
            startDecisionTrial();
        });
    }

    // 最初の質問を表示
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
        info.textContent = `最終スコア: ${dAxisData.totalScore} / ${DECISION_MAX_SCORE}。次へお進みください。`;
        statement.textContent = "回答が完了しました。次へ進んでください。";
        document.getElementById(`q31`).value = dAxisData.totalScore;
        nextBtn.disabled = false; 
        updateButtons(); 
        return;
    }
    
    // 試行回数増加と表示更新 
    dAxisData.currentTrial++; 
    info.textContent = `試行回数: ${dAxisData.currentTrial} / ${DECISION_TRIALS}`;

    const instruction = Math.random() < 0.5 ? 'left' : 'right';
    dAxisData.currentInstruction = instruction;

    let color = '';
    let instructionText = '';
    
    // 指示テキストを色名のみにする (青→右、赤→左)
    if (instruction === 'right') {
        instructionText = '【青】'; 
        color = '#3498db'; // 青
    } else {
        instructionText = '【赤】'; 
        color = '#e74c3c'; // 赤
    }
    
    // 表示と同時にタイマーを開始
    display.textContent = instructionText;
    display.style.color = color;
    dAxisData.startTime = performance.now();
    
    // ボタンを再有効化
    document.querySelectorAll('.button-options button').forEach(btn => btn.disabled = false);
}

/**
 * D軸のボタンがクリックされた時の処理
 * @param {string} action - 'left' or 'right'
 */
window.handleDecisionClick = function(action) {
    if (!dAxisData.startTime || dAxisData.currentTrial > DECISION_TRIALS) {
        return; 
    }

    // ボタンを無効化（二重クリック防止）
    document.querySelectorAll('.button-options button').forEach(btn => btn.disabled = true);
    
    const endTime = performance.now();
    const reactionTimeMs = endTime - dAxisData.startTime;
    
    // 正答判定
    const isCorrect = (action === dAxisData.currentInstruction);
    
    let score = 0;
    const display = document.getElementById('instruction-display');

    if (isCorrect) {
        if (reactionTimeMs < 500) {
            score = 5;
            display.textContent = "◎ 5pt (高速)";
        } else if (reactionTimeMs < 1000) {
            score = 3;
            display.textContent = "〇 3pt (標準)";
        } else {
            score = 1;
            display.textContent = "△ 1pt (遅延)";
        }
        display.style.color = '#2ecc71'; // 緑色
    } else {
        score = 0;
        display.textContent = "× 0pt (誤答)";
        display.style.color = '#e74c3c'; // 赤色
    }

    dAxisData.totalScore += score;
    dAxisData.startTime = null; // タイマーをリセット
    document.getElementById(`q31`).value = dAxisData.totalScore; // スコアを更新

    // 次の試行に進む (遅延させて視覚的なフィードバックを与える)
    setTimeout(startDecisionTrial, 800); 
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

    // 前の質問を非表示にする
    if (prevQuestion) {
        prevQuestion.classList.remove('active');
        // D軸の試行を停止
        if (questions[currentQuestionIndex].dim === 'D') {
             dAxisData.startTime = null; 
        }
    }

    // 次の質問を表示
    setTimeout(() => {
        nextQuestion.classList.add('active');
        currentQuestionIndex = index;
        updateButtons();
        isTransitioning = false;
        
        // D軸の質問に到達したら処理を分岐
        if (questions[currentQuestionIndex].dim === 'D') {
            const isCompleted = dAxisData.currentTrial >= DECISION_TRIALS;
            const explanationEl = document.getElementById('decision-explanation');
            
            if (isCompleted) {
                // 完了済みの場合
                explanationEl.style.display = 'none';
                document.getElementById('instruction-display').textContent = "試行完了";
                document.getElementById('instruction-display').style.color = '#2ecc71';
                document.getElementById('trial-info').textContent = `最終スコア: ${dAxisData.totalScore} / ${DECISION_MAX_SCORE}。次へお進みください。`;
                document.getElementById(`statement-q31`).textContent = "回答が完了しました。次へ進んでください。";
                nextBtn.disabled = false;
            } else if (dAxisData.currentTrial === 0) {
                 // 初めてD軸に到達した場合、説明画面を表示し、ボタンを無効化
                explanationEl.style.display = 'block';
                document.getElementById('instruction-display').textContent = "準備完了！";
                document.getElementById('instruction-display').style.color = '#34495e'; 
                document.getElementById('trial-info').textContent = `試行回数: 0 / ${DECISION_TRIALS}。「D軸テスト開始」を押してください。`;
                document.querySelectorAll('.button-options button').forEach(btn => btn.disabled = true);
                nextBtn.disabled = true;
            } else {
                // 説明を終え、試行中に戻ってきた場合
                explanationEl.style.display = 'none';
                startDecisionTrial();
            }
        } else {
            // D軸以外の質問は次へを有効化
            nextBtn.disabled = false;
        }

    }, 300); 
}


function updateButtons() {
    // ボタン要素が取得済みであることを確認
    if(!navButtonsContainer || !prevBtn || !nextBtn || !submitBtn) return;
    
    navButtonsContainer.style.display = 'flex';
    prevBtn.style.display = (currentQuestionIndex > 0) ? 'block' : 'none';
    
    if (questions[currentQuestionIndex] && questions[currentQuestionIndex].dim === 'D' && dAxisData.currentTrial < DECISION_TRIALS) {
        // D軸の質問で、試行が未完了の場合は次へを無効化
        nextBtn.style.display = 'block';
        nextBtn.disabled = true; 
        submitBtn.style.display = 'none';
    } else if (currentQuestionIndex === questions.length - 1) {
        // 最後の質問
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        // 途中の質問
        nextBtn.style.display = 'block';
        nextBtn.disabled = false;
        submitBtn.style.display = 'none';
    }
}

// スライダーのスコア表示更新
window.updateScoreLabel = function(id, value) {
    document.getElementById(`label-q${id}`).textContent = Math.round(parseFloat(value));
}

// α/β/γの分類ロジック
const classifyScore = (score, axis) => {
    if (score >= CUTOFFS[axis].high) return 'α';
    if (score <= CUTOFFS[axis].low) return 'γ';
    return 'β';
};

// 安定性判定ロジック
function determineStability(score, axis) {
    if (axis === 'D') {
        const maxScore = CUTOFFS.D.max;
        const ratio = score / maxScore;
        
        if (ratio >= 0.8) return 'Stable'; 
        if (ratio >= 0.5) return 'Intermediate'; 
        return 'Unstable'; 
    }

    const { high } = CUTOFFS[axis];
    const absScore = Math.abs(score);
    const cutoffAbs = high; 

    if (absScore < cutoffAbs / STABILITY_THRESHOLDS.Intermediate) {
        return 'Stable';
    }
    
    if (absScore >= cutoffAbs * STABILITY_THRESHOLDS.Unstable) {
        return 'Unstable';
    }
    
    return 'Intermediate';
}


// 相性判定ロジック
function getGoodMatches(e, c, l, d) {
    let matches = [];
    
    const currentTypeKey = `${e}${c}${l}${d}`;
    const standardTypeKey = 'ββββ';
    
    if (currentTypeKey !== standardTypeKey) {
          matches.push({ name: typeDescriptions[standardTypeKey].name, reason: `あなたと補完し合えるバランスタイプで、お互いの弱点をカバーし合えます。` });
    }
    
    if (e === 'α') {
        matches.push({ name: 'Eγ型', reason: 'あなたの過度な感情移入を、冷静なEγ型が現実的にサポートしてくれます。' });
    } else if (e === 'γ') {
        matches.push({ name: 'Eα型', reason: 'あなたの論理的な判断に、Eα型の共感力が深みを与えてくれます。' });
    }
    
    if (l === 'α' && d === 'γ') {
         matches.push({ name: 'Dα型', reason: 'あなたの深い分析力に、Dα型の迅速な行動力が火をつけます。' });
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
        
        // D軸のスコアはhidden inputから取得
        if (q.dim === 'D') {
            dScore = parseInt(input ? input.value : '0');
            return;
        }

        // スライダー形式の質問
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
// イベントリスナーと初期化
// =================================================

document.addEventListener('DOMContentLoaded', () => {
    // 質問フォームの生成と初期表示
    renderQuestions();
    
    // DOM要素の参照
    const startBtn = document.getElementById('start-button');
    const startScrn = document.getElementById('start-screen');
    const formEl = document.getElementById('ecl-form');

    // 1. 開始ボタンの処理
    if (startBtn && startScrn && formEl) {
        startBtn.addEventListener('click', () => {
            startScrn.style.opacity = '0';
            setTimeout(() => {
                startScrn.style.display = 'none';
                formEl.style.display = 'block'; 
                
                // 描画が完了してから少し待ってクラスを追加し、スムーズに表示
                setTimeout(() => {
                    formEl.classList.add('show');
                    formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 10);
            }, 500);
        });
    }

    // 2. 質問ナビゲーション (次へ)
    if(nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentQuestionIndex < questions.length - 1) {
                showQuestion(currentQuestionIndex + 1, 'next');
            }
        });
    }
    
    // 3. 質問ナビゲーション (前へ)
    if(prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                showQuestion(currentQuestionIndex - 1, 'prev');
            }
        });
    }
    
    // 4. 結果表示ボタン
    if(submitBtn) {
        submitBtn.addEventListener('click', calculateResults);
    }
});
