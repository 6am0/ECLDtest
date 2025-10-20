// =================================================
// データ定義
// =================================================

const questions = [
    { id: 1, dim: 'E', sub: 'E1', statement: "相手が言葉にしない感情の変化にも、すぐに気づきやすい。", reverse: false, group: "E軸: 感情力 - 感情と倫理" },
    { id: 2, dim: 'E', sub: 'E2', statement: "自分の利益と他者の公平性が対立した場合、公平性を優先して行動する。", reverse: false },
    { id: 3, dim: 'E', sub: 'E1', statement: "ニュースや物語で他者のつらい状況を見ると、自分まで悲しい気持ちになる。", reverse: false },
    { id: 4, dim: 'E', sub: 'E2', statement: "たとえ少数の犠牲が出ても、多数の人々が幸せになるなら仕方がないと考える。", reverse: true },
    { id: 5, dim: 'E', sub: 'E1', statement: "友人のささいな喜びや不満を、まるで自分のことのように感じる。", reverse: false },
    { id: 6, dim: 'E', sub: 'E2', statement: "誰かを助けるためなら、会社の決まりを無視して行動しても良いと思う。", reverse: false },
    { id: 7, dim: 'E', sub: 'E1', statement: "落ち込んでいる人に会うと、自分まで気持ちが引きずられやすい。", reverse: true },
    { id: 8, dim: 'E', sub: 'E2', statement: "自分の責任ではない問題は、見て見ぬふりをして関わらないでおく。", reverse: true },
    { id: 9, dim: 'C', sub: 'C1', statement: "自分の話が長くなると感じたら、すぐに話を短くまとめることができる。", reverse: false, group: "C軸: 対話力 - 伝達と把握" },
    { id: 10, dim: 'C', sub: 'C2', statement: "話が脱線しても、相手が本当に伝えたい核心のメッセージを見失わない。", reverse: false },
    { id: 11, dim: 'C', sub: 'C1', statement: "相手の反応が鈍いと感じたら、自分の話し方をすぐに修正して理解を促す。", reverse: false },
    { id: 12, dim: 'C', sub: 'C2', statement: "初めて聞く説明でも、途中で質問なしに内容を一度で理解できることが多い。", reverse: false },
    { id: 13, dim: 'C', sub: 'C1', statement: "相手が知識のない分野の話をする場合、意図的に簡単な言葉を選んで話す。", reverse: false },
    { id: 14, dim: 'C', sub: 'C2', statement: "複数の人が同時に話していても、それぞれの主張を正確に聞き分けられる。", reverse: false },
    { id: 15, dim: 'C', sub: 'C1', statement: "自分のアイデアを説明するとき、声のトーンや身振り手振りで相手の興味を引き出せる。", reverse: false },
    { id: 16, dim: 'C', sub: 'C2', statement: "会議で色々な意見が出ても、今何が問題なのかを整理して理解できる。", reverse: false },
    { id: 17, dim: 'C', sub: 'C1', statement: "メールやチャットを送る前に、誤解がないように表現を何度も推敲する。", reverse: false },
    { id: 18, dim: 'C', sub: 'C2', statement: "自分の意見を言うことより、相手の話を聞き、その真意を探る方が得意だ。", reverse: false },
    { id: 19, dim: 'L', sub: 'L1', statement: "自分の好き嫌いが、データ分析の結果に影響を与えることは絶対にない。", reverse: false, group: "L軸: 思考力 - 論理と判断" },
    { id: 20, dim: 'L', sub: 'L2', statement: "何か新しいことを始める前には、手順を細かく書き出す作業が欠かせない。", reverse: false },
    { id: 21, dim: 'L', sub: 'L3', statement: "専門家や権威ある人の発言でも、「本当にそうか？」と必ず一度立ち止まって検証する。", reverse: false },
    { id: 22, dim: 'L', sub: 'L1', statement: "感情的にならず、自分の嫌いな人の意見でも正しいなら受け入れられる。", reverse: false },
    { id: 23, dim: 'L', sub: 'L2', statement: "結論を出す際、直感やひらめきよりも、段階的な分析プロセスを重視する。", reverse: false },
    { id: 24, dim: 'L', sub: 'L3', statement: "新しい情報を見たとき、その情報が「誰の利益になるか」を最初に考える。", reverse: false },
    { id: 25, dim: 'L', sub: 'L1', statement: "重要な決定では、過去の経験による「確信」を排除し、現在の事実のみに頼る。", reverse: false },
    { id: 26, dim: 'L', sub: 'L2', statement: "複雑な問題に出会ったとき、問題を小さな要素に分解して解決しようとする。", reverse: false },
    { id: 27, dim: 'L', sub: 'L3', statement: "「これは当たり前だ」と言われると、かえって「本当に？」と疑いたくなる。", reverse: false },
    { id: 28, dim: 'L', sub: 'L1', statement: "揉め事が起きている場でも、感情的にならず、冷静に事実だけを整理できる。", reverse: false },
    { id: 29, dim: 'L', sub: 'L2', statement: "勉強や仕事で、まず全体像（目次や構成）を把握しないと細かい作業に入れない。", reverse: false },
    { id: 30, dim: 'L', sub: 'L3', statement: "間違いや欠陥を指摘することに抵抗感はなく、むしろ必要なことだと考える。", reverse: false }
];

// α/γの閾値 
const CUTOFFS = {
    E: { high: 15, low: -15, max: 40 }, 
    C: { high: 18, low: -18, max: 50 }, 
    L: { high: 23, low: -23, max: 60 }  
};

// 安定性の閾値
const STABILITY_THRESHOLDS = {
    Intermediate: 3, 
    Unstable: 1.5    
};

const typeDescriptions = {
    'aaa': { name: 'ααα型: 全能の調和者 (理想形)', desc: '感情、対話、思考力すべてが極めて高い、非常に稀でバランスの取れたリーダータイプです。' },
    'aab': { name: 'ααβ型: 熱血な説得者', desc: '感情と伝達力で人を動かす力に長けていますが、思考力は堅実な中立を保ちます。' },
    'aag': { name: 'ααγ型: 情熱の伝道師', desc: '強い感情とカリスマ的な伝達力で共感を呼びますが、論理的整理は苦手です。' },
    'aba': { name: 'αβα型: 公正な哲学者', desc: '感情的な配慮と客観的な思考力が高水準で両立し、公正な判断を下します。' },
    'abb': { name: 'αββ型: 温和な支援者', desc: '感情的な優しさに優れますが、対話と思考力は中立的で、裏方でサポートに回るタイプです。' },
    'abg': { name: 'αβγ型: 直感的なロマンチスト', desc: '感情豊かで直感的な判断を好みますが、論理的整理は苦手です。' },
    'aga': { name: 'αγα型: 秘めたる知恵者', desc: '感情と論理は高いが、表現が苦手な思索家。深い思考は内に秘めています。' },
    'agb': { name: 'αγβ型: 内なるロマンチスト', desc: '感情が豊かですが、対話が苦手で、内に秘めてしまう傾向が強いです。' },
    'agg': { name: 'αγγ型: 孤独な情動家', desc: '感情的充足を求める心が強いですが、論理も対話も苦手なタイプ。' },
    
    'baa': { name: 'βαα型: 戦略的コミュニケーター', desc: '論理を高い対話力で効果的に展開するエリート。感情は中立的で客観的。' },
    'bab': { name: 'βαβ型: 社交的な調整役', desc: '対話能力が高く、中立的な立場から協調性を生み出すバランスタイプ。' },
    'bag': { name: 'βαγ型: 人気者の気まぐれ屋', desc: '対話力で人を惹きつけますが、思考力は弱く、判断は場当たり的になりがちです。' },
    'bba': { name: 'ββα型: 純粋な分析家', desc: '思考力（論理性）が突出しており、感情や対話は中立で、客観的な視点を持つ。' },
    'bbb': { name: 'βββ型: 均衡の常識人 (標準型)', desc: '全てが中立的で、最も一般的なタイプ。安定性と常識を重視します。' },
    'bbg': { name: 'ββγ型: 消極的な受動者', desc: '積極的な自己主張や論理展開を避け、目立たず波風を立てないことを好みます。' },
    'bga': { name: 'βγα型: 静寂の観察者', desc: '高い思考力を持ちながら、対話は最低限に抑える職人気質。' },
    'bgb': { name: 'βγβ型: 控えめな実務者', desc: '感情や論理を深追いせず、与えられた実務を淡々とこなす。' },
    'bgg': { name: 'βγγ型: 受動的な従順者', desc: '自分の意見や判断が弱く、他者や環境に従う傾向が強いです。' },

    'gaa': { name: 'γαα型: 冷徹な指導者', desc: '感情を排し、論理と高い対話力で組織を動かす、効率的な現実主義者。' },
    'gab': { name: 'γαβ型: 実務的メッセンジャー', desc: '感情を交えず、情報を正確かつ効率的に伝達する実務家。' },
    'gag': { name: 'γαγ型: 空虚な伝達者', desc: '高い伝達力を持つが、内容（感情・論理）が浅く、説得力に欠けます。' },
    'gba': { name: 'γβα型: 客観的熟考者', desc: '感情に流されず、論理で判断するが、発信は慎重なタイプ。' },
    'gbb': { name: 'γββ型: 実直な実務家', desc: '感情を排し、常識的な論理で実務を堅実にこなす堅物。' },
    'gbg': { name: 'γβγ型: 形式的な順守者', desc: '感情も論理も弱いが、ルールや形式に従うことで安定を得ます。' },
    'gga': { name: 'γγα型: 孤高の論理家', desc: '論理性は最高ですが、感情も対話も完全に抑制する研究者タイプ。' },
    'ggb': { name: 'γγβ型: 隠れた熟考者', desc: '感情・対話は低いが、内面で常識的な熟考を行います。' },
    'ggg': { name: 'γγγ型: 孤立した回避者', desc: '全ての資質が弱く、環境や人間関係から距離を置く傾向があります。' }
};

// =================================================
// DOM要素の取得と変数定義
// =================================================

let currentQuestionIndex = 0;
let isTransitioning = false;

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
            // 新しいグループのヘッダーを追加
            qDiv.innerHTML += `<h2>${q.group}</h2>`;
            currentGroup = q.group;
        }
        qDiv.innerHTML += `
            <div class="statement">Q${q.id}. (${q.sub}) ${q.statement}</div>
            <div class="slider-container">
                <span class="min-max-label">-5 (全くそう思わない)</span>
                <input type="range" id="q${q.id}" name="q${q.id}" min="-5" max="5" value="0" step="1" oninput="updateScoreLabel(${q.id}, this.value)">
                <span id="label-q${q.id}" class="score-label">0</span>
                <span class="min-max-label">+5 (強くそう思う)</span>
            </div>
        `;
        questionsContainer.appendChild(qDiv);
    });
    // 初回表示
    showQuestion(0);
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
 * 💡 変更点: toFixed(0)で小数点以下を表示しない
 */
window.updateScoreLabel = function(id, value) {
    document.getElementById(`label-q${id}`).textContent = Math.round(parseFloat(value));
}

/**
 * スコアを分類 (α, β, γ)
 * @param {number} score - 軸の合計スコア
 * @param {string} axis - 軸 ('E', 'C', 'L')
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
 * @param {string} axis - 軸 ('E', 'C', 'L')
 * @returns {string} - 'Stable', 'Intermediate', or 'Unstable'
 */
function determineStability(score, axis) {
    const { high, low, max } = CUTOFFS[axis];
    
    // スコアの絶対値
    const absScore = Math.abs(score);
    // αまたはγの閾値
    const cutoffAbs = high; 

    // Stable判定 (βゾーンの大部分: 閾値の約 2/3 の範囲を安定と見なす)
    if (absScore < cutoffAbs * (1 - 1/STABILITY_THRESHOLDS.Intermediate)) {
        return 'Stable';
    }
    
    // Unstable判定 (極端なαまたはγゾーン: 閾値を大きく超える範囲)
    if (absScore >= cutoffAbs * STABILITY_THRESHOLDS.Unstable) {
        return 'Unstable';
    }
    
    // 残りはIntermediate (StableとUnstableの境界付近)
    return 'Intermediate';
}


/**
 * 相性の良いタイプを判定する
 */
function getGoodMatches(e, c, l) {
    let matches = [];
    
    // 補完性による相性 (γ軸を補う)
    if (e === 'g') { matches.push({ name: typeDescriptions[`a${c}${l}`].name, reason: `あなたの控えめな感情力を補い、豊かな人間関係を築くことができる` }); }
    if (c === 'g') { matches.push({ name: typeDescriptions[`${e}a${l}`].name, reason: `あなたの苦手な対話力を補い、円滑なコミュニケーションを助けてくれる` }); }
    if (l === 'g') { matches.push({ name: typeDescriptions[`${e}${c}a`].name, reason: `あなたの直感的な思考を補い、物事を客観的に判断する力を与えてくれる` }); }

    // 共感性による相性（一番高い軸の同じ傾向のタイプ）
    let highestAxis = '';
    if (e === 'a') highestAxis = 'E';
    else if (c === 'a') highestAxis = 'C';
    else if (l === 'a') highestAxis = 'L';
    
    if (highestAxis === 'E') {
        // E軸が高い場合、同じくE軸が高いタイプ（ただし、自分と全く同じではない組み合わせ）
        if (typeDescriptions['a' + c + l]) matches.push({ name: typeDescriptions['a' + c + l].name, reason: `あなたと同じように、感情や倫理を大切にするタイプです。` });
    } else if (highestAxis === 'C') {
        if (typeDescriptions[e + 'a' + l]) matches.push({ name: typeDescriptions[e + 'a' + l].name, reason: `あなたと同じように、対話や伝達力を強みとするタイプです。` });
    } else if (highestAxis === 'L') {
        if (typeDescriptions[e + c + 'a']) matches.push({ name: typeDescriptions[e + c + 'a'].name, reason: `あなたと同じように、論理や客観性を重視するタイプです。` });
    }

    // バランス型（βββ型）は必ず相性の良い相手として提示
    if (!(e === 'b' && c === 'b' && l === 'b')) {
         matches.push({ name: typeDescriptions['bbb'].name, reason: `あなたと補完し合えるバランスタイプで、お互いの弱点をカバーし合えます。` });
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
    const form = document.getElementById('ecl-form');
    const resultsEl = document.getElementById('results');

    // 1. スコアの集計
    questions.forEach(q => {
        const input = form.elements[`q${q.id}`];
        if (!input) return;
        
        // 💡 変更点: parseInt() で整数値を取得
        let score = parseInt(input.value); 
        
        if (q.reverse) {
            score = -score;  // リバース項目はスコアを反転
        }
        if (q.dim === 'E') eScore += score;
        if (q.dim === 'C') cScore += score;
        if (q.dim === 'L') lScore += score;
    });

    // 2. タイプ分類
    const eClass = classifyScore(eScore, 'E');
    const cClass = classifyScore(cScore, 'C');
    const lClass = classifyScore(lScore, 'L');
    const typeKey = `${eClass}${cClass}${lClass}`;
    const result = typeDescriptions[typeKey] || { name: `${eClass.toUpperCase()}${cClass.toUpperCase()}${lClass.toUpperCase()}型`, desc: 'このタイプはユニークです。詳細は専門家にご相談ください。' };

    // 3. 安定性判定
    const eStability = determineStability(eScore, 'E');
    const cStability = determineStability(cScore, 'C');
    const lStability = determineStability(lScore, 'L');


    // 4. 結果のDOMへの反映
    // 💡 変更点: 整数として表示
    document.getElementById('e-total-score').textContent = Math.round(eScore); 
    document.getElementById('c-total-score').textContent = Math.round(cScore);
    document.getElementById('l-total-score').textContent = Math.round(lScore);
    document.getElementById('e-stability').textContent = `${eClass.toUpperCase()}-${eStability}`;
    document.getElementById('c-stability').textContent = `${cClass.toUpperCase()}-${cStability}`;
    document.getElementById('l-stability').textContent = `${lClass.toUpperCase()}-${lStability}`;
    
    document.getElementById('e-stability').className = `stability-indicator ${eStability}`;
    document.getElementById('c-stability').className = `stability-indicator ${cStability}`;
    document.getElementById('l-stability').className = `stability-indicator ${lStability}`;


    document.getElementById('type-result').textContent = result.name;
    document.getElementById('type-description').textContent = result.desc;
    
    // 5. 相性判定の実行と表示
    const goodMatches = getGoodMatches(eClass, cClass, lClass);
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
