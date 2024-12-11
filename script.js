// Define questions for Parts A to F
const questions = {
    "Kỹ thuật": [
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích học công nghệ (thử lắp ráp đồ đạc, máy móc, v.v.)" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích thao tác trên máy tính để giải trí hoặc học tập" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích sửa chữa vật dụng/đồ dùng cá nhân" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích cài đặt và kiểm tra ứng dụng trên điện thoại hoặc máy tính" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích chuẩn bị và lắp ráp vật dụng cắm trại, dã ngoại, trại hè" }
    ],
    "Nghiên cứu": [
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích tìm hiểu về chủ đề mình thích qua sách báo hoặc video" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích nghiên cứu cách giải quyết vấn đề mà mình quan tâm" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích quan sát và phân tích sự vật hoặc hành vi con người" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích đặt câu hỏi về chủ đề mình hứng thú" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích lý giải vấn đề trong cuộc sống một cách hợp lý (logic)" }
    ],
    "Nghiệp vụ": [
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích sắp xếp và ghi chú bài học theo quy tắc" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích tuân thủ luật lệ, quy tắc của trường lớp" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích dọn dẹp và sắp xếp bàn học định kỳ" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích thực hiện các việc cá nhân theo lịch cố định" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích làm việc theo sát quy trình, kế hoạch" }
    ],
    "Nghệ thuật": [
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích tham gia câu lạc bộ âm nhạc, hội họa, văn nghệ" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích mô tả các ý tưởng bằng hành động" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích Sáng tạo nội dung (âm nhạc, bài văn, tranh ảnh, v.v.) theo cảm hứng" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích học chơi nhạc cụ" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích phác họa và vẽ tranh" }
    ],
    "Xã hội": [
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích giảng hòa cuộc tranh cãi giữa những người bạn" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích sẵn sàng giúp đỡ mọi người xung quanh" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích giúp bạn bè vượt qua trở ngại trong học tập" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích làm vui lòng người khác" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích quan tâm đến cảm xúc của người xung quanh" }
    ],
    "Quản lý": [
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích trình bày thông tin trước lớp" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích giao nhiệm vụ cho thành viên trong nhóm" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích đảm nhiệm vai trò quản lý lớp (lớp trưởng, lớp phó, v.v.)" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích xung phong làm nhóm trưởng" },
        { question: "Nếu có đủ cơ hội và nguồn lực, bạn có thích dẫn đầu, dẫn dắt người khác" }
    ]
};

// List of all parts
const parts = ["Kỹ thuật", "Nghiên cứu", "Nghiệp vụ", "Nghệ thuật", "Xã hội", "Quản lý"];
let currentPartIndex = 0; // Track the current part index
let currentQuestionIndex = 0; // Track the current question index
let scores = parts.reduce((acc, part) => ({ ...acc, [part]: 0 }), {}); // Initialize scores for all parts
let selectedScore = null; // Score for the current question

// Satisfaction options with corresponding points
const satisfactionOptions = [
    { text: "Rất không thích", points: 1 },
    { text: "Không thích", points: 2 },
    { text: "Bình thường", points: 3 },
    { text: "Thích", points: 4 },
    { text: "Rất thích", points: 5 }
];

// Function to display the current question
function displayQuestion() {
    const currentPart = parts[currentPartIndex]; // Get the current part
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = ""; // Clear previous question content

    // Get the current question
    const question = questions[currentPart][currentQuestionIndex];

    // Display question title
    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `Phần ${currentPart} - Câu hỏi ${currentQuestionIndex + 1}:`;
    quizContainer.appendChild(questionTitle);

    // Display question text
    const questionText = document.createElement("p");
    questionText.textContent = question.question;
    quizContainer.appendChild(questionText);

    // Display satisfaction options
    const optionsList = document.createElement("ul");
    optionsList.classList.add("options-list");

    satisfactionOptions.forEach(option => {
        const optionItem = document.createElement("li");
        const button = document.createElement("button");
        button.classList.add("option");
        button.textContent = option.text;
        button.onclick = () => selectAnswer(option.points, button);
        optionItem.appendChild(button);
        optionsList.appendChild(optionItem);
    });

    quizContainer.appendChild(optionsList);

    // Add navigation buttons container
    const navigationContainer = document.createElement("div");
    navigationContainer.classList.add("navigation-container");

    // "Back" button
    const backButton = document.createElement("button");
    backButton.id = "backButton";
    backButton.textContent = "Quay lại";
    backButton.classList.add("nav-button");
    backButton.disabled = currentQuestionIndex === 0 && currentPartIndex === 0; // Disabled on the first question of the first part
    backButton.onclick = moveToPreviousQuestion;
    navigationContainer.appendChild(backButton);

    // "Next" button
    const nextButton = document.createElement("button");
    nextButton.id = "nextButton";
    nextButton.textContent = "Tiếp theo";
    nextButton.classList.add("nav-button");
    nextButton.disabled = true; // Initially disabled
    nextButton.onclick = moveToNextQuestion;
    navigationContainer.appendChild(nextButton);

    quizContainer.appendChild(navigationContainer);
}

// Handle answer selection
function selectAnswer(points, button) {
    selectedScore = points;

    // Highlight the selected option
    const options = document.querySelectorAll(".option");
    options.forEach(option => option.classList.remove("selected"));
    button.classList.add("selected");

    // Enable the "Next" button
    document.getElementById("nextButton").disabled = false;
}

// Move to the previous question
function moveToPreviousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--; // Go back to the previous question
    } else if (currentPartIndex > 0) {
        currentPartIndex--; // Go back to the previous part
        currentQuestionIndex = questions[parts[currentPartIndex]].length - 1; // Last question of the previous part
    }
    displayQuestion();
}

// Move to the next question or transition to the next part
function moveToNextQuestion() {
    if (selectedScore !== null) {
        scores[parts[currentPartIndex]] += selectedScore; // Add selected score to the current part
        selectedScore = null; // Reset selected score
    }

    currentQuestionIndex++; // Move to the next question

    if (currentQuestionIndex >= questions[parts[currentPartIndex]].length) {
        if (currentPartIndex < parts.length - 1) {
            showTransitionScreen(); // Transition to the next part
        } else {
            displayResult(); // Display results
        }
    } else {
        displayQuestion(); // Display the next question
    }
}

// Show transition screen between parts
function showTransitionScreen() {
    const quizContainer = document.getElementById("quizContainer");
    quizContainer.innerHTML = `
        <h3>Bạn sắp bắt đầu Phần ${parts[currentPartIndex + 1]}</h3>
        <p>Nhấn nút "Bắt đầu" để tiếp tục bài trắc nghiệm.</p>
        <button id="startNextPartButton" class="start-part-button">Bắt đầu Phần ${parts[currentPartIndex + 1]}</button>
    `;

    document.getElementById("startNextPartButton").onclick = () => {
        currentPartIndex++; // Move to the next part
        currentQuestionIndex = 0; // Reset question index for the next part
        displayQuestion();
    };
}

// Display the result

const partDetails = {
    "Kỹ thuật": `<h3>Đặc điểm của những người thuộc nhóm Kỹ thuật</h3>
        <p>Là nhóm người thực tế, ưa hành động hơn suy nghĩ, thích khám phá...</p>
        <p><strong>Điểm mạnh:</strong> Trung thực, thẳng thắn, kiên trì.</p>
        <p><strong>Điểm yếu:</strong> Bộc trực, hơi khô khan.</p>
        <p><strong>Ngành nghề:</strong> Cơ khí, Ô tô, Điện tử, Xây dựng,...</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Thực hành sửa các vật dụng đơn giản</p> 
        `,
    "Nghiên cứu": `<h3>Đặc điểm của những người thuộc nhóm Nghiên cứu</h3>
        <p>Thích phân tích, nghiên cứu sâu mọi vấn đề...</p>
        <p><strong>Điểm mạnh:</strong> Logic, hệ thống, sáng tạo.</p>
        <p><strong>Điểm yếu:</strong> Ngại tham gia hoạt động lớn.</p>
        <p><strong>Ngành nghề:</strong> Nhà khoa học, Giáo sư, Bác sĩ,...</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Trải nghiệm tham gia nghiên cứu khoa học</p> 
        `,
    "Nghiệp vụ": `<h3>Đặc điểm của những người thuộc nhóm Nghiệp vụ</h3>
        <p>Có tổ chức, logic, định hướng chi tiết...</p>
        <p><strong>Điểm mạnh:</strong> Tận tâm, kiên trì, tinh tế.</p>
        <p><strong>Điểm yếu:</strong> Cầu toàn, dễ căng thẳng.</p>
        <p><strong>Ngành nghề:</strong> Kế toán, Kiểm toán,...</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Các trọng trách quan trọng: Thủ quỷ, giữ sổ đầu bài</p>                     
        `,
    "Nghệ thuật": `<h3>Đặc điểm của những người thuộc nhóm Nghệ thuật</h3>
        <p>Ưa thích tự do, yêu cái đẹp, trí tưởng tượng phong phú...</p>
        <p><strong>Điểm mạnh:</strong> Sáng tạo, trực giác mạnh.</p>
        <p><strong>Điểm yếu:</strong> Ít tuân thủ luật lệ.</p>
        <p><strong>Ngành nghề:</strong> Thiết kế đồ họa, Thời trang,...</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Lớp phó văn thể mỹ, lớp phó văn nghệ</p>      
        `,
    "Xã hội": `<h3>Đặc điểm của những người thuộc nhóm Xã hội</h3>
        <p>Thích giúp đỡ người khác, làm việc cộng đồng...</p>
        <p><strong>Điểm mạnh:</strong> Thấu hiểu, giỏi ngôn ngữ.</p>
        <p><strong>Điểm yếu:</strong> Nhạy cảm, dễ mủi lòng.</p>
        <p><strong>Ngành nghề:</strong> Cố vấn, Luật sư,...</p>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Dịch vụ cộng đồng, dịch vụ cá nhân</p>                  
        `,
    "Quản lý": `<h3>Đặc điểm của những người thuộc nhóm Quản lý</h3>
        <p>Yêu thích lãnh đạo, thuyết phục người khác...</p>
        <p><strong>Điểm mạnh:</strong> Quyết đoán, năng động.</li>
        <p><strong>Điểm yếu:</strong> Không giỏi chú ý chi tiết.</li>
        <p><strong>Ngành nghề:</strong> Quản lý doanh nghiệp, Marketing,...</li>
        <p><strong>Trải nghiệm ở lớp, trường:</strong> Lớp phó học tập, lớp trưởng, ...</li>                  
        `
};

function displayDetails(top3) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    top3.forEach(([group], index) => {
        const detailDiv = document.createElement("div");
        detailDiv.classList.add("details-container");

        // Use partDetails to populate details for each group
        detailDiv.innerHTML = `
            <h2>Nhóm ${index + 1}: ${group}</h2>
            ${partDetails[group] || "<p>Thông tin chi tiết chưa được cập nhật.</p>"}
            <button class="nav-button" onclick="goBackToSummary()">Quay lại kết quả</button>
        `;

        resultContainer.appendChild(detailDiv);
    });
}


function displayResult() {
    const resultContainer = document.getElementById("result");
    const resultText = document.getElementById("resultText");

    // Sort scores to get the top 3 groups
    const top3 = Object.entries(scores)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3);

    // Check if prediction matches any top group
    const predictionCorrect = top3.some(([part]) => part === selectedCareerGroup);

    // Display top 3 and prediction result
    resultText.innerHTML = `
        <strong>Kết quả:</strong><br>
        Top 3 nhóm có điểm cao nhất:<br>
        ${top3.map(([part, score], index) => `${index + 1}. ${part} - ${score} điểm`).join("<br>")}<br><br>
        Dự đoán của bạn: ${selectedCareerGroup ? `Nhóm ${selectedCareerGroup}` : "Không chọn"}<br>
        ${predictionCorrect ? "Dự đoán chính xác!" : "Dự đoán không chính xác."}
        <button id="detailsButton" class="nav-button">Xem chi tiết</button>
    `;

    resultContainer.style.display = "block";

    // Add event listener to show detailed results
    document.getElementById("detailsButton").onclick = () => {
        displayDetails(top3);
    };
    document.getElementById("quizSection").style.display = "none";
}


function displayDetails(top3) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";

    let currentDetailIndex = 0; // Track the current detail index

    function showDetail(index) {
        resultContainer.innerHTML = "";
        const [group] = top3[index];

        const detailDiv = document.createElement("div");
        detailDiv.classList.add("details-container");

        detailDiv.innerHTML = `
            <h2>Nhóm ${index + 1}: ${group}</h2>
            ${partDetails[group] || "<p>Thông tin chi tiết chưa được cập nhật.</p>"}
            <div class="navigation-buttons">
                ${index > 0 ? '<button class="nav-button" id="prevButton">Quay lại</button>' : ""}
                ${index < top3.length - 1 ? '<button class="nav-button" id="quizNextButton">Tiếp theo</button>' : ""}
                <button class="nav-button" id="summaryBackButton">Quay lại kết quả</button>
            </div>
        `;

        resultContainer.appendChild(detailDiv);

        if (index > 0) {
            document.getElementById("prevButton").onclick = () => showDetail(index - 1);
        }

        if (index < top3.length - 1) {
            document.getElementById("quizNextButton").onclick = () => showDetail(index + 1);
        }

        document.getElementById("summaryBackButton").onclick = goBackToSummary;
    }

    showDetail(currentDetailIndex);
}

// Fix "Go back to Summary" button
function goBackToSummary() {
    const details = document.querySelectorAll(".details-container");
    details.forEach(detail => detail.remove());

    const resultText = document.getElementById("resultText");
    resultText.style.display = "block";

    const resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";
    document.getElementById("quizSection").style.display = "none";
}



// Show the introduction screen after selecting a career group
document.querySelectorAll('.career-option').forEach(option => {
    option.addEventListener('click', () => {
        selectedCareerGroup = option.getAttribute('data-group');
        document.getElementById('frontQuestion').style.display = 'none';
        document.getElementById('openingScreen').style.display = 'flex';
    });
});


// Toggle settings menu visibility
function toggleSettingsMenu() {
    const menu = document.getElementById('settingsMenu');
    menu.classList.toggle('hidden');
}

// Change font style
function changeFontStyle(event) {
    document.body.style.fontFamily = event.target.value;
}

// Toggle between light and dark modes
function toggleThemeMode(event) {
    if (event.target.value === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f5f7fa';
        document.body.style.color = '#444';
    }
}

// Reset quiz for a retake
function retakeQuiz() {
    scores = parts.reduce((acc, part) => ({ ...acc, [part]: 0 }), {}); // Reset scores
    currentPartIndex = 0; // Reset to the first part
    currentQuestionIndex = 0; // Reset question index
    selectedCareerGroup = null; //reset selected career group

    document.getElementById("result").style.display = "none";
    document.getElementById("frontQuestion").style.display = "none"; // Hide the front question
    document.getElementById("openingScreen").style.display = "none"; // Hide the opening screen
    document.getElementById("quizSection").style.display = "block"; // Show only the quiz section

    displayQuestion(); // Restart the quiz
}

// Initialize quiz on page load
window.onload = () => {
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("result").style.display = "none";
    document.getElementById("openingScreen").style.display = "none"; // Initially hide opening screen


    const startButton = document.getElementById("startButton");
    startButton.onclick = () => {
        document.getElementById("openingScreen").style.display = "none";
        document.getElementById("quizSection").style.display = "block";
        displayQuestion();
    };
    audioPlayer = document.getElementById('audioPlayer'); // Get the audio element after it's loaded
    selectMusic(); // Load the default music

};

// Custom Audio Player
let audioPlayer;
let isPlaying = false;

function selectMusic() {
    const musicSelect = document.getElementById('musicSelect');
    currentMusic = musicSelect.value;
    audioPlayer.src = currentMusic;
    createCustomControls(); // Create controls after selecting music

}

function toggleAudio() {
    if (isPlaying) {
        audioPlayer.pause();
        isPlaying = false;
        document.getElementById('playPauseButton').textContent = 'Play';
    } else {
        audioPlayer.play();
        isPlaying = true;
        document.getElementById('playPauseButton').textContent = 'Pause';
    }
}

function adjustVolume() {
    audioPlayer.volume = document.getElementById("volumeControl").value;
}

function createCustomControls() {
    const customControlsDiv = document.getElementById("customAudioControls");
    customControlsDiv.innerHTML = `
        <button id="playPauseButton" onclick="toggleAudio()">Play</button>
        <input type="range" id="volumeControl" min="0" max="1" step="0.1" value="1" oninput="adjustVolume()">
    `;
}