// =================================================
// データ定義 (省略: 前回の修正版と同一)
// =================================================
const questions = [
    // ... (質問データは省略) ...
    { id: 1, dim: 'E', sub: 'E1', statement: "相手が言葉にしない感情の変化にも、すぐに気づきやすい。", type: 'slider', reverse: false, group: "E軸: 感情力 - 感情と倫理" },
    // ...
    { id: 31, dim: 'D', sub: 'D1', statement: "画面中央に出る指示に従って、**できるだけ早く**ボタンを押してください。", type: 'decision', group: "D軸: 判断力 - 迅速な判断力", options: [{ text: "左のボタン", action: 'left' }, { text: "右のボタン", action: 'right' }] },
];

const DECISION_TRIALS = 5; 
const DECISION_MAX_SCORE = 5 * DECISION_TRIALS; 
const CUTOFFS = { E: { high: 15, low: -15, max: 40 }, C: { high: 18, low: -18, max: 50 }, L: { high: 23, low: -23, max: 60 }, D: { high: 15, low: 5, max: DECISION_MAX_SCORE } }; 
const STABILITY_THRESHOLDS = { Intermediate: 3, Unstable: 1.5 };
const typeDescriptions = { 
    'αααα': { name: 'αααα型: 全能の王 (理想形)', desc: '感情、対話、思考、判断力全てが極めて高い、非常に稀でバランスの取れたリーダータイプです。' },
    // ... (他のタイプも省略) ...
    'ββββ': { name: 'ββββ型: 均衡の標準人', desc: '全てが中立的で、最も一般的なタイプ。安定性と常識を重視します。' },
};


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
// 1. ダークモード切り替えロジック
// =================================================
function setupDarkModeToggle() {
    const toggleButton = document.getElementById('dark-mode-toggle');
    const body = document.body;
    
    const savedMode = localStorage.getItem('theme');
    if (savedMode === 'dark') {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
        toggleButton.textContent = '☀️'; 
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
        toggleButton.textContent = '🌙'; 
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
// 2. 質問表示とD軸ロジック
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

function startDecisionTrial() {
    if (!decisionArea) return;
    
    const display = document.getElementById('instruction-display');
    const info = document.getElementById('trial-info');
    const statement = document.getElementById(`statement-q31`);

    if (dAxisData.currentTrial >= DECISION_TRIALS) {
        display.textContent = "試行完了";
        display.style.color = '#2ecc71';
        info.textContent = `最終スコア: ${dAxisData.totalScore} / ${DECISION_MAX_SCORE}。次へお進みください。`;
        statement.textContent = "回答が完了しました。次へ進んでください。";
        document.getElementById(`q31`).value = dAxisData.totalScore;
        nextBtn.disabled = false; 
        updateButtons(); 
        return;
    }
    
    dAxisData.currentTrial++; 
    info.textContent = `試行回数: ${dAxisData.currentTrial} / ${DECISION_TRIALS}`;

    const instruction = Math.random() < 0.5 ? 'left' : 'right';
    dAxisData.currentInstruction = instruction;

    let color = '';
    let instructionText = '';
    
    if (instruction === 'right') {
        instructionText = '【青】'; 
        color = '#3498db'; 
    } else {
        instructionText = '【赤】'; 
        color = '#e74c3c'; 
    }
    
    display.textContent = instructionText;
    display.style.color = color;
    dAxisData.startTime = performance.now();
    
    document.querySelectorAll('.button-options button').forEach(btn => btn.disabled = false);
}

window.handleDecisionClick = function(action) {
    if (!dAxisData.startTime || dAxisData.currentTrial > DECISION_TRIALS) return; 

    document.querySelectorAll('.button-options button').forEach(btn => btn.disabled = true);
    
    const endTime = performance.now();
    const reactionTimeMs = endTime - dAxisData.startTime;
    
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
        display.style.color = '#2ecc71'; 
    } else {
        score = 0;
        display.textContent = "× 0pt (誤答)";
        display.style.color = '#e74c3c'; 
    }

    dAxisData.totalScore += score;
    dAxisData.startTime = null; 
    document.getElementById(`q31`).value = dAxisData.totalScore; 

    setTimeout(startDecisionTrial, 800); 
}


function showQuestion(index, direction) {
    if (isTransitioning) return;
    isTransitioning = true;
    
    const allQuestions = questionsContainer.querySelectorAll('.question');
    const prevQuestion = allQuestions[currentQuestionIndex];
    const nextQuestion = allQuestions[index];

    if (prevQuestion) {
        prevQuestion.classList.remove('active');
        if (questions[currentQuestionIndex].dim === 'D') {
             dAxisData.startTime = null; 
        }
    }

    setTimeout(() => {
        nextQuestion.classList.add('active');
        currentQuestionIndex = index;
        updateButtons();
        isTransitioning = false;
        
        if (questions[currentQuestionIndex].dim === 'D') {
            const isCompleted = dAxisData.currentTrial >= DECISION_TRIALS;
            const explanationEl = document.getElementById('decision-explanation');
            
            if (isCompleted) {
                explanationEl.style.display = 'none';
                document.getElementById('instruction-display').textContent = "試行完了";
                document.getElementById('instruction-display').style.color = '#2ecc71';
                document.getElementById('trial-info').textContent = `最終スコア: ${dAxisData.totalScore} / ${DECISION_MAX_SCORE}。次へお進みください。`;
                document.getElementById(`statement-q31`).textContent = "回答が完了しました。次へ進んでください。";
                nextBtn.disabled = false;
            } else if (dAxisData.currentTrial === 0) {
                explanationEl.style.display = 'block';
                document.getElementById('instruction-display').textContent = "準備完了！";
                document.getElementById('instruction-display').style.color = '#34495e'; 
                document.getElementById('trial-info').textContent = `試行回数: 0 / ${DECISION_TRIALS}。「D軸テスト開始」を押してください。`;
                document.querySelectorAll('.button-options button').forEach(btn => btn.disabled = true);
                nextBtn.disabled = true;
            } else {
                explanationEl.style.display = 'none';
                startDecisionTrial();
            }
        } else {
            nextBtn.disabled = false;
        }

    }, 300); 
}


function updateButtons() {
    if(!navButtonsContainer || !prevBtn || !nextBtn || !submitBtn) return;
    
    navButtonsContainer.style.display = 'flex';
    prevBtn.style.display = (currentQuestionIndex > 0) ? 'block' : 'none';
    
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
    if (score >= CUTOFFS[axis].high) return 'α';
    if (score <= CUTOFFS[axis].low) return 'γ';
    return 'β';
};

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


function calculateResults(event) {
    event.preventDefault();

    let eScore = 0;
    let cScore = 0;
    let lScore = 0;
    let dScore = 0; 
    const form = document.getElementById('ecl-form');
    const resultsEl = document.getElementById('results');

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

    const eClass = classifyScore(eScore, 'E');
    const cClass = classifyScore(cScore, 'C');
    const lClass = classifyScore(lScore, 'L');
    const dClass = classifyScore(dScore, 'D'); 
    const typeKey = `${eClass}${cClass}${lClass}${dClass}`; 
    const result = typeDescriptions[typeKey] || { name: typeKey + '型', desc: `あなたは感情 (${eClass})、対話 (${cClass})、思考 (${lClass})、判断力 (${dClass}) のユニークな組み合わせを持っています。` };

    const eStability = determineStability(eScore, 'E');
    const cStability = determineStability(cScore, 'C');
    const lStability = determineStability(lScore, 'L');
    const dStability = determineStability(dScore, 'D'); 

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
    
    const goodMatches = getGoodMatches(eClass, cClass, lClass, dClass);
    const compatibilityDescription = document.getElementById('good-match-description');
    if (goodMatches.length > 0) {
        const matchesText = goodMatches.map(match => `<span class="good-match">${match.name}</span><br><span class="good-match-description">${match.reason}</span>`).join('<br><br>');
        compatibilityDescription.innerHTML = matchesText;
    } else {
        compatibilityDescription.textContent = 'どのタイプとも安定した関係を築くことができます。';
    }

    form.classList.remove('active');
    form.style.display = 'none'; 
    resultsEl.style.display = 'block';

    setTimeout(() => {
        resultsEl.classList.add('active');
        resultsEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
        
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
    setupDarkModeToggle();
    renderQuestions();
    
    const startBtn = document.getElementById('start-button');
    const startScrn = document.getElementById('start-screen');
    const formEl = document.getElementById('ecl-form');

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
