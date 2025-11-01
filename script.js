// =================================================
// データ定義 (変更なし)
// =================================================

const questions = [
    { id: 1, dim: 'E', sub: 'E1', statement: "相手が言葉にしない感情の変化にも、すぐに気づきやすい。", type: 'slider', reverse: false, group: "E軸: 感情力 - 感情と倫理" },
    // ... (E, C, L軸の質問は省略) ...
    { id: 9, dim: 'C', sub: 'C1', statement: "自分の話が長くなると感じたら、すぐに話を短くまとめることができる。", type: 'slider', reverse: false, group: "C軸: 対話力 - 伝達と把握" },
    // ... (C軸の質問は省略) ...
    { id: 19, dim: 'L', sub: 'L1', statement: "自分の好き嫌いが、データ分析の結果に影響を与えることは絶対にない。", type: 'slider', reverse: false, group: "L軸: 思考力 - 論理と判断" },
    // ... (L軸の質問は省略) ...
    
    { 
        id: 31, dim: 'D', sub: 'D1', statement: "画面中央に出る指示に従って、**できるだけ早く**ボタンを押してください。", type: 'decision', group: "D軸: 判断力 - 迅速な判断力",
        options: [
            { text: "左のボタン", action: 'left' },
            { text: "右のボタン", action: 'right' }
        ] 
    },
];

// ... (定数定義は変更なし) ...

// =================================================
// DOM要素の取得と変数定義 (変更なし)
// =================================================

let currentQuestionIndex = 0;
let isTransitioning = false;
let dAxisData = {
    currentTrial: 0, // 試行回数 (0: 説明, 1～5: 試行)
    totalScore: 0,
    currentInstruction: null, 
    startTime: null 
};

// ... (DOM要素の定義は省略) ...


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
            // スライダー形式の質問 (変更なし)
            qDiv.innerHTML += `
                <div class="slider-container">
                    <span class="min-max-label">-5 (全くそう思わない)</span>
                    <input type="range" id="q${q.id}" name="q${q.id}" min="-5" max="5" value="0" step="1" oninput="updateScoreLabel(${q.id}, this.value)">
                    <span id="label-q${q.id}" class="score-label">0</span>
                    <span class="min-max-label">+5 (強くそう思う)</span>
                </div>
            `;
        } else if (q.type === 'decision') {
            // D軸の特殊な質問（ボタン判断） 💡 変更点: 説明画面を追加
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
                        <h3>指示ルール</h3>
                        <ul>
                            <li>**【青】**が表示されたら、**右のボタン**を押してください。</li>
                            <li>**【赤】**が表示されたら、**左のボタン**を押してください。</li>
                        </ul>
                        <p>この説明を読み終えたら、「開始」ボタンを押して試行を始めてください。</p>
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
    
    // 💡 変更点: テスト開始ボタンにイベントリスナーを追加
    const startTrialsBtn = document.getElementById('start-trials-btn');
    if(startTrialsBtn) {
        startTrialsBtn.addEventListener('click', () => {
             // 説明パネルを非表示にし、試行を開始
            document.getElementById('decision-explanation').style.display = 'none';
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

    if (dAxisData.currentTrial === 0) {
        // 💡 変更点: 試行0の時は説明画面表示 (renderQuestionsで処理されるため、ここでは何もしないが、念のため初期化)
        display.textContent = "準備完了！";
        display.style.color = '#34495e'; 
        info.textContent = `試行回数: 0 / ${DECISION_TRIALS}。「D軸テスト開始」を押してください。`;
        // ここに到達したということは、テスト開始ボタンが押された後なので、すぐに次のステップへ
    }
    
    // 試行回数が上限に達した場合
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
    
    // 試行回数増加と表示更新
    dAxisData.currentTrial++;
    info.textContent = `試行回数: ${dAxisData.currentTrial} / ${DECISION_TRIALS}`;

    const instruction = Math.random() < 0.5 ? 'left' : 'right';
    dAxisData.currentInstruction = instruction;

    let color = '';
    let instructionText = '';
    
    // 💡 変更点: 指示テキストを色名のみにする
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

// ... (handleDecisionClick関数は変更なし) ...

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

    // ... (質問の表示/非表示のロジックは省略) ...
    if (prevQuestion) {
        prevQuestion.classList.remove('active');
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
        
        // D軸の質問に到達したら試行を開始
        if (questions[currentQuestionIndex].dim === 'D') {
            const isCompleted = dAxisData.currentTrial >= DECISION_TRIALS;
            
            if (isCompleted) {
                // 完了済みの場合
                document.getElementById('instruction-display').textContent = "試行完了";
                document.getElementById('instruction-display').style.color = '#2ecc71';
                document.getElementById('trial-info').textContent = `最終スコア: ${dAxisData.totalScore} / ${DECISION_MAX_SCORE}。次へお進みください。`;
                document.getElementById(`statement-q31`).textContent = "回答が完了しました。次へ進んでください。";
                nextBtn.disabled = false;
                document.getElementById('decision-explanation').style.display = 'none';
            } else if (dAxisData.currentTrial === 0) {
                 // 💡 変更点: 初めてD軸に到達した場合、説明画面を表示し、ボタンを無効化
                document.getElementById('decision-explanation').style.display = 'block';
                document.getElementById('instruction-display').textContent = "準備完了！";
                document.getElementById('instruction-display').style.color = '#34495e'; 
                document.getElementById('trial-info').textContent = `試行回数: 0 / ${DECISION_TRIALS}。「D軸テスト開始」を押してください。`;
                document.querySelectorAll('.button-options button').forEach(btn => btn.disabled = true);
                nextBtn.disabled = true;
            } else {
                // 説明を終え、試行中に戻ってきた場合
                document.getElementById('decision-explanation').style.display = 'none';
                startDecisionTrial();
            }
        } else {
            // D軸以外の質問は次へを有効化
            nextBtn.disabled = false;
        }

    }, 300); 
}


// ... (updateButtons、calculateResults などの関数は変更なし) ...

// =================================================
// イベントリスナー (変更なし)
// =================================================

// ... (イベントリスナーは省略) ...

// =================================================
// 初期化 (変更なし)
// =================================================

document.addEventListener('DOMContentLoaded', renderQuestions);
