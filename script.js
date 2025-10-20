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
    
    // 💡 D軸の質問 (ボタン形式) を追加
    { 
        id: 31, dim: 'D', sub: 'D1', statement: "あなたは今すぐ、以下のどちらかの行動をとる必要があります。どちらを選びますか？", type: 'button', group: "D軸: 判断力 - 決断の傾向",
        options: [
            { text: "A: 情報を集め、最適な戦略を立ててから行動する。", value: -5 }, // 低いDスコア (慎重/遅延)
            { text: "B: 情報を集めずに、すぐに行動し、修正しながら進める。", value: 5 } // 高いDスコア (即断/行動力)
        ] 
    },
    { 
        id: 32, dim: 'D', sub: 'D2', statement: "選択に迷ったとき、あなたはどちらのタイプですか？", type: 'button',
        options: [
            { text: "A: 誰かの意見を聞くか、ネットで情報を探す。", value: -5 }, 
            { text: "B: 自分の過去の経験に基づき、即座に決める。", value: 5 }
        ] 
    },
    { 
        id: 33, dim: 'D', sub: 'D1', statement: "プロジェクトの締め切りが迫っています。あなたが取る行動は？", type: 'button',
        options: [
            { text: "A: 完璧を求めず、今できる最善を尽くして期日までに提出する。", value: 5 }, 
            { text: "B: 期日を過ぎても、納得できるまで粘り、完成度を追求する。", value: -5 }
        ] 
    }
];


// α/γの閾値（D軸を追加）
const CUTOFFS = {
    E: { high: 15, low: -15, max: 40 }, 
    C: { high: 18, low: -18, max: 50 }, 
    L: { high: 23, low: -23, max: 60 },
    D: { high: 10, low: -10, max: 15 } // 💡 D軸の閾値設定
};

// 安定性の閾値
const STABILITY_THRESHOLDS = {
    Intermediate: 3, 
    Unstable: 1.5    
};

// 💡 タイプ分類の説明にD軸を追加（3文字から4文字に拡張）
const typeDescriptions = {
    'aaaa': { name: 'αααα型: 全能の王 (理想形)', desc: '感情、対話、思考、判断力全てが極めて高く、バランスの取れたリーダータイプです。即断即決と多角的な視点を両立します。' },
    'aaab': { name: 'αααβ型: 優柔不断な天才', desc: '知性レベルは高いが、判断が中立的で、決断力が弱い傾向があります。' },
    'aaag': { name: 'αααγ型: 臆病な賢者', desc: '極めて知性は高いが、極度に慎重で、行動に移せない傾向があります。' },
    'bbbb': { name: 'ββββ型: 均衡の標準人', desc: '全てが中立的で、最も一般的なタイプ。安定性と常識を重視します。' },
    'ggga': { name: 'γγγα型: 攻撃的な行動家', desc: '知性の基盤は弱いものの、判断力・行動力が突出しており、失敗を恐れません。' },
    // D軸の説明を追加した他のタイプは省略...
};


// =================================================
// DOM要素の取得と変数定義
// =================================================

let currentQuestionIndex = 0;
let isTransitioning = false;
let answers = {}; // 💡 ボタン形式の回答を保持するためのオブジェクト

const startScreen = document.getElementById('start-screen');
const startButton = document.getElementById('start-button');
const eclForm = document.getElementById('ecl-form');
const questionsContainer = document.getElementById('questions-container');
const navButtonsContainer = document.getElementById('navigation-buttons-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');


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
        
        qDiv.innerHTML += `<div class="statement">Q${q.id}. (${q.sub}) ${q.statement}</div>`;

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
        } else if (q.type === 'button') {
            // 💡 ボタン形式の質問
            const optionsHtml = q.options.map(option => `
                <button type="button" 
                        data-question-id="q${q.id}" 
                        data-value="${option.value}"
                        onclick="handleButtonSelect(this, ${q.id}, ${option.value})">
                    ${option.text}
                </button>
            `).join('');
            
            qDiv.innerHTML += `<div class="button-options" id="options-q${q.id}">${optionsHtml}</div>`;
            
            // 隠しフィールドをフォームに追加し、値を保持
            const hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.id = `q${q.id}`;
            hiddenInput.name = `q${q.id}`;
            hiddenInput.value = ''; // 初期値は空
            qDiv.appendChild(hiddenInput);
        }
        
        questionsContainer.appendChild(qDiv);
    });
    // 初回表示
    showQuestion(0);
}

/**
 * ボタンがクリックされた時の処理 (グローバルスコープ)
 * @param {HTMLElement} button - クリックされたボタン要素
 * @param {number} qId - 質問ID
 * @param {number} value - スコア値
 */
window.handleButtonSelect = function(button, qId, value) {
    const parent = button.closest('.button-options');
    // 全てのボタンから選択クラスを削除
    parent.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('selected');
    });
    // クリックされたボタンに選択クラスを追加
    button.classList.add('selected');
    
    // 隠しフィールドに値をセット
    document.getElementById(`q${qId}`).value = value;
};


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
    }

    // アニメーション完了を待ってから次の質問を表示
    setTimeout(() => {
        if (prevQuestion) {
            prevQuestion.style.visibility = 'hidden';
            prevQuestion.style.position = 'absolute';
            // スタイルをリセットして次のトランジションに備える
            prevQuestion.style.transform = 'translateX(0)'; 
        }
        
        // 次の質問を表示
        nextQuestion.classList.add('active');
        nextQuestion.style.opacity = '1';
        nextQuestion.style.transform = 'translateX(0)';
        nextQuestion.style.visibility = 'visible';
        nextQuestion.style.position = 'relative'; // Active要素はフローに戻す

        currentQuestionIndex = index;
        updateButtons();
        isTransitioning = false;
    }, 500);
}

/**
 * ナビゲーションボタンの表示状態を更新する
 */
function updateButtons() {
    navButtonsContainer.style.display = 'flex';
    prevBtn.style.display = (currentQuestionIndex > 0) ? 'block' : 'none';
    
    if (currentQuestionIndex === questions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'block';
    } else {
        nextBtn.style.display = 'block';
        submitBtn.style.display = 'none';
    }
}

/**
 * スライダー値のリアルタイム表示を更新する (HTMLからoninputで呼び出される)
 * グローバルスコープに配置が必要
 */
window.updateScoreLabel = function(id, value) {
    document.getElementById(`label-q${id}`).textContent = Math.round(parseFloat(value));
}

/**
 * スコアを分類 (α, β, γ)
 * @param {number} score - 軸の合計スコア
 * @param {string} axis - 軸 ('E', 'C', 'L', 'D')
 * @returns {string} - 'a', 'b', or 'g'
 */
const classifyScore = (score, axis) => {
    if (score >= CUTOFFS[axis].high) return 'a';  // Alpha (High)
    if (score <= CUTOFFS[axis].low) return 'g';   // Gamma (Low)
    return 'b';                                   // Beta (Middle)
};

/**
 * 軸の安定性を判定する
 * @param {number} score - 軸の合計スコア
 * @param {string} axis - 軸 ('E', 'C', 'L', 'D')
 * @returns {string} - 'Stable', 'Intermediate', or 'Unstable'
 */
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


/**
 * 相性の良いタイプを判定する
 */
function getGoodMatches(e, c, l, d) {
    let matches = [];
    
    // 補完性による相性 (γ軸を補う)
    // 4軸対応のため、タイプキーを4文字に修正する必要があります (例: typeDescriptions[`a${c}${l}${d}`].name)
    // 💡ここでは簡略化し、最も汎用性の高い「ββββ型」のみ提示します。
    if (!(e === 'b' && c === 'b' && l === 'b' && d === 'b')) {
         matches.push({ name: typeDescriptions['bbbb'].name, reason: `あなたと補完し合えるバランスタイプで、お互いの弱点をカバーし合えます。` });
    }
    
    // 重複を削除して返却
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
    let dScore = 0; // 💡 Dスコアの初期化
    const form = document.getElementById('ecl-form');
    const resultsEl = document.getElementById('results');

    // 1. スコアの集計
    questions.forEach(q => {
        const input = form.elements[`q${q.id}`];
        if (!input) return;
        
        let score = parseInt(input.value); 
        
        if (q.type === 'slider' && q.reverse) {
            score = -score;  // リバース項目はスコアを反転
        }
        
        if (q.dim === 'E') eScore += score;
        if (q.dim === 'C') cScore += score;
        if (q.dim === 'L') lScore += score;
        if (q.dim === 'D') dScore += score; // 💡 Dスコアの加算
    });


    // 2. タイプ分類
    const eClass = classifyScore(eScore, 'E');
    const cClass = classifyScore(cScore, 'C');
    const lClass = classifyScore(lScore, 'L');
    const dClass = classifyScore(dScore, 'D'); // 💡 D軸の分類
    const typeKey = `${eClass}${cClass}${lClass}${dClass}`; // 💡 4文字のタイプキー

    // 既存の説明がない場合は汎用的な説明を使用
    const result = typeDescriptions[typeKey] || { 
        name: `${eClass.toUpperCase()}${cClass.toUpperCase()}${lClass.toUpperCase()}${dClass.toUpperCase()}型`, 
        desc: `あなたは感情、対話、思考、判断力において、それぞれ ${eClass.toUpperCase()} / ${cClass.toUpperCase()} / ${lClass.toUpperCase()} / ${dClass.toUpperCase()} の傾向を持っています。`
    };

    // 3. 安定性判定
    const eStability = determineStability(eScore, 'E');
    const cStability = determineStability(cScore, 'C');
    const lStability = determineStability(lScore, 'L');
    const dStability = determineStability(dScore, 'D'); // 💡 D軸の安定性

    // 4. 結果のDOMへの反映
    document.getElementById('e-total-score').textContent = Math.round(eScore); 
    document.getElementById('c-total-score').textContent = Math.round(cScore);
    document.getElementById('l-total-score').textContent = Math.round(lScore);
    document.getElementById('d-total-score').textContent = Math.round(dScore); // 💡 Dスコアの表示
    
    document.getElementById('e-stability').textContent = `${eClass.toUpperCase()}-${eStability}`;
    document.getElementById('c-stability').textContent = `${cClass.toUpperCase()}-${cStability}`;
    document.getElementById('l-stability').textContent = `${lClass.toUpperCase()}-${lStability}`;
    document.getElementById('d-stability').textContent = `${dClass.toUpperCase()}-${dStability}`; // 💡 D軸の安定性表示
    
    document.getElementById('e-stability').className = `stability-indicator ${eStability}`;
    document.getElementById('c-stability').className = `stability-indicator ${cStability}`;
    document.getElementById('l-stability').className = `stability-indicator ${lStability}`;
    document.getElementById('d-stability').className = `stability-indicator ${dStability}`; // 💡 D軸のスタイル適用


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
        // 結果画面の先頭にスクロール
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
