// Foydalanuvchi ma'lumotlari
let currentUser = null;
let userAnswers = {};
let currentGrade = null;
let currentSubject = 'informatika'; // Default fan

// Sahifa yuklanganda
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    setupEventListeners();
    
    if (currentUser) {
        showTestSection();
    }
});

// Event listenerlarni sozlash
function setupEventListeners() {
    document.getElementById('registrationForm').addEventListener('submit', handleRegistration);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    document.getElementById('submitTestBtn').addEventListener('click', handleSubmitTest);
    document.getElementById('submitCommentBtn').addEventListener('click', handleSubmitComment);
    
    // Fanlar ro'yxatini sozlash
    setupSubjectList();
    
    // Izoh bo'limini tekshirish
    checkCommentStatus();
    loadComments();
    
    // Reytingni yuklash
    loadRating();
}

// Fanlar ro'yxatini sozlash
function setupSubjectList() {
    const subjectItems = document.querySelectorAll('.subject-item');
    subjectItems.forEach(item => {
        item.addEventListener('click', function() {
            const subject = this.dataset.subject;
            currentSubject = subject;
            
            // Active classni yangilash
            subjectItems.forEach(subj => subj.classList.remove('active'));
            this.classList.add('active');
            
            // Testni yuklash
            if (currentGrade) {
                loadTest(currentGrade, currentSubject);
            }
            
            // Reyting va izohlarni yangilash
            updateCommentSection();
            loadRating();
            loadComments();
        });
    });
}

// Nikname unikalini tekshirish
function isNicknameUnique(nickname) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return !users.some(user => user.nickname.toLowerCase() === nickname.toLowerCase().trim());
}

// Yosh va sinf mosligini tekshirish (±1 ruxsat etiladi)
function validateAgeAndGrade(age, grade) {
    const ageNum = parseInt(age);
    const gradeNum = parseInt(grade);

    const expectedAge = gradeNum + 6; 
    const minAge = expectedAge - 1;
    const maxAge = expectedAge + 1;

    if (ageNum < minAge || ageNum > maxAge) {
        return {
            isValid: false,
            message: `${gradeNum}-sinf uchun yosh ${minAge} - ${maxAge} oralig‘ida bo‘lishi kerak`
        };
    }

    return { isValid: true };
}


// Ro'yxatdan o'tish
function handleRegistration(e) {
    e.preventDefault();
    
    // Xato xabarlarini tozalash
    document.getElementById('nicknameError').textContent = '';
    document.getElementById('ageGradeError').textContent = '';
    
    const nickname = document.getElementById('nickname').value.trim();
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    
    if (!nickname || !age || !grade) {
        alert('Iltimos, barcha maydonlarni to\'ldiring!');
        return;
    }
    
    // Nikname uzunligini tekshirish
    if (nickname.length < 3 || nickname.length > 20) {
        document.getElementById('nicknameError').textContent = 'Nikname 3-20 belgi orasida bo\'lishi kerak!';
        document.getElementById('nicknameError').style.color = '#dc3545';
        return;
    }
    
    // Nikname unikalini tekshirish
    if (!isNicknameUnique(nickname)) {
        document.getElementById('nicknameError').textContent = 'Bu nikname allaqachon ishlatilgan! Boshqa nikname tanlang.';
        document.getElementById('nicknameError').style.color = '#dc3545';
        return;
    }
    
    // Yosh va sinf mosligini tekshirish
    const validation = validateAgeAndGrade(age, grade);
    if (!validation.isValid) {
        document.getElementById('ageGradeError').textContent = validation.message;
        document.getElementById('ageGradeError').style.color = '#dc3545';
        return;
    }
    
    currentUser = {
        nickname: nickname,
        age: parseInt(age),
        grade: parseInt(grade)
    };
    
    currentGrade = currentUser.grade;
    
    // Foydalanuvchini saqlash
    saveUser(nickname, parseInt(age), parseInt(grade));
    saveUserData();
    showTestSection();
    loadTest(currentGrade, currentSubject);
}

// Foydalanuvchini ro'yxatga qo'shish
function saveUser(nickname, age, grade) {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
        nickname: nickname,
        age: age,
        grade: grade,
        createdAt: new Date().toISOString()
    });
    localStorage.setItem('users', JSON.stringify(users));
}

// Foydalanuvchi ma'lumotlarini saqlash
function saveUserData() {
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('currentGrade', currentGrade);
}

// Foydalanuvchi ma'lumotlarini yuklash
function loadUserData() {
    const savedUser = localStorage.getItem('currentUser');
    const savedGrade = localStorage.getItem('currentGrade');
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        currentGrade = parseInt(savedGrade) || currentUser.grade;
    }
}

// Test bo'limini ko'rsatish
function showTestSection() {
    document.getElementById('registrationSection').classList.add('hidden');
    document.getElementById('testSection').classList.remove('hidden');
    
    // Foydalanuvchi ma'lumotlarini ko'rsatish
    document.getElementById('userNicknameDisplay').textContent = 
        `👤 ${currentUser.nickname}`;
    document.getElementById('userGradeDisplay').textContent = 
        `${currentUser.grade}-sinf`;
    
    // Izoh bo'limini yangilash
    updateCommentSection();
    checkCommentStatus();
    
    // Reytingni yuklash
    loadRating();
    
    // Izohlarni yuklash
    loadComments();
}

// Izoh bo'limini yangilash
function updateCommentSection() {
    if (currentGrade && currentSubject) {
        document.getElementById('commentGradeInfo').textContent = `(${currentGrade}-sinf, ${getSubjectName(currentSubject)})`;
    }
}

// Reytingga qo'shish
function addToRating(user, grade, subject, score) {
    let ratings = JSON.parse(localStorage.getItem('ratings') || '[]');
    
    // Foydalanuvchi allaqachon reytingda bormi? (fan va sinf bo'yicha)
    const existingIndex = ratings.findIndex(r => 
        r.nickname === user.nickname && 
        r.grade === grade &&
        r.subject === subject
    );
    
    const ratingEntry = {
        nickname: user.nickname,
        age: user.age,
        grade: grade,
        subject: subject,
        score: score,
        date: new Date().toISOString()
    };
    
    if (existingIndex !== -1) {
        // Agar mavjud bo'lsa va yangi natija yaxshiroq bo'lsa, yangilash
        if (score > ratings[existingIndex].score) {
            ratings[existingIndex] = ratingEntry;
        }
    } else {
        // Yangi qo'shish
        ratings.push(ratingEntry);
    }
    
    localStorage.setItem('ratings', JSON.stringify(ratings));
}

// Reytingni yuklash va ko'rsatish (faqat tanlangan sinf va fan uchun)
function loadRating() {
    if (!currentGrade || !currentSubject) return;
    
    // Sinf va fan ko'rsatkichini yangilash
    document.getElementById('ratingGradeInfo').textContent = `(${currentGrade}-sinf, ${getSubjectName(currentSubject)})`;
    
    const ratings = JSON.parse(localStorage.getItem('ratings') || '[]');
    const ratingList = document.getElementById('ratingList');
    
    // Faqat tanlangan sinf va fan uchun reytingni filter qilish
    const gradeRatings = ratings.filter(r => r.grade === currentGrade && r.subject === currentSubject);
    
    if (gradeRatings.length === 0) {
        ratingList.innerHTML = `<div class="empty-rating">${currentGrade}-sinf ${getSubjectName(currentSubject)} fanidan hozircha reytingda hech kim yo'q</div>`;
        return;
    }
    
    // Reytingni score bo'yicha teskari tartibda tartiblash (yuqoridan pastga)
    const sortedRatings = [...gradeRatings].sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        // Agar score bir xil bo'lsa, vaqt bo'yicha
        return new Date(b.date) - new Date(a.date);
    });
    
    // 100% olgan foydalanuvchilar sonini hisoblash
    const perfectScores = sortedRatings.filter(r => r.score === 100).length;
    
    ratingList.innerHTML = sortedRatings.map((rating, index) => {
        const rank = index + 1;
        let rankClass = '';
        
        // Agar 100% bo'lsa va ko'pchilik (2 va undan ko'p) 100% bo'lsa, barchasi oltin rangda
        if (rating.score === 100 && perfectScores >= 2) {
            rankClass = 'top-1';
        } else if (rank === 1 && rating.score < 100) {
            rankClass = 'top-1';
        } else if (rank === 2 && perfectScores < 2) {
            rankClass = 'top-2';
        } else if (rank === 3 && perfectScores < 2) {
            rankClass = 'top-3';
        }
        
        return `
            <div class="rating-item ${rankClass}">
                <span class="rating-rank">${rank}</span>
                <div class="rating-info">
                    <div class="rating-name">${rating.nickname}</div>
                </div>
                <span class="rating-score">${rating.score}%</span>
            </div>
        `;
    }).join('');
}


// Variantlarni random tartiblash
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Testni yuklash
function loadTest(grade, subject) {
    subject = subject || currentSubject;
    
    if (!tests[subject] || !tests[subject][grade] || tests[subject][grade].length === 0) {
        alert('Bu sinf va fan uchun testlar hali tayyorlanmagan!');
        return;
    }
    
    currentGrade = grade;
    currentSubject = subject;
    userAnswers = {};
    
    const testContainer = document.getElementById('testContainer');
    const questionsContainer = document.getElementById('questionsContainer');
    const resultsContainer = document.getElementById('resultsContainer');
    
    const subjectNames = {
        'informatika': 'Informatika',
        'fizika': 'Fizika',
        'biologiya': 'Biologiya',
        'matematika': 'Matematika',
        'kimyo': 'Kimyo',
        'tarix': 'Tarix',
        'geografiya': 'Geografiya'
    };
    
    document.getElementById('testTitle').textContent = `${grade}-sinf ${subjectNames[subject]} fanidan test`;
    questionsContainer.innerHTML = '';
    resultsContainer.innerHTML = '';
    
    // Har bir savol uchun variantlarni random tartiblash
    tests[subject][grade].forEach((question, index) => {
        // Variantlarni nusxalash
        const optionsWithIndex = question.options.map((option, optIndex) => ({
            text: option,
            originalIndex: optIndex
        }));
        
        // Variantlarni random tartiblash
        const shuffledOptions = shuffleArray(optionsWithIndex);
        
        // To'g'ri javobning yangi indeksini topish
        const correctOption = shuffledOptions.find(opt => opt.originalIndex === question.correct);
        const newCorrectIndex = shuffledOptions.indexOf(correctOption);
        
        // Savol kartasini yaratish
        const questionCard = document.createElement('div');
        questionCard.className = 'question-card';
        questionCard.dataset.originalCorrect = question.correct; // Asl to'g'ri javobni saqlash
        questionCard.innerHTML = `
            <div class="question-number">Savol ${index + 1}/${tests[subject][grade].length}</div>
            <div class="question-text">${question.question}</div>
            <ul class="options">
                ${shuffledOptions.map((option, optIndex) => `
                    <li class="option" data-question="${index}" data-original-index="${option.originalIndex}" data-option="${optIndex}">
                        ${String.fromCharCode(65 + optIndex)}. ${option.text}
                    </li>
                `).join('')}
            </ul>
        `;
        questionsContainer.appendChild(questionCard);
        
        // To'g'ri javobni saqlash (asl indeks bilan)
        questionCard.dataset.correctOriginalIndex = question.correct;
    });
    
    // Variantlarni tanlash
    setupOptionSelection();
    
    // Natijalar bo'limini yashirish
    document.getElementById('submitTestBtn').style.display = 'block';
}

// Fan nomini olish
function getSubjectName(subject) {
    const names = {
        'informatika': 'Informatika',
        'fizika': 'Fizika',
        'biologiya': 'Biologiya',
        'matematika': 'Matematika',
        'kimyo': 'Kimyo',
        'tarix': 'Tarix',
        'geografiya': 'Geografiya'
    };
    return names[subject] || subject;
}

// Variantlarni tanlash
function setupOptionSelection() {
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', function() {
            const questionIndex = parseInt(this.dataset.question);
            const originalIndex = parseInt(this.dataset.originalIndex); // Asl indeksni saqlash
            
            // Boshqa variantlarni tanlashni olib tashlash
            const questionCard = this.closest('.question-card');
            const allOptions = questionCard.querySelectorAll('.option');
            allOptions.forEach(opt => opt.classList.remove('selected'));
            
            // Tanlangan variantni belgilash
            this.classList.add('selected');
            userAnswers[questionIndex] = originalIndex; // Asl indeksni saqlash
        });
    });
}

// Testni yuborish
function handleSubmitTest() {
    const grade = currentGrade;
    const subject = currentSubject;
    const test = tests[subject][grade];
    
    let correctCount = 0;
    const results = [];
    
    test.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const correctAnswer = question.correct;
        const isCorrect = userAnswer === correctAnswer;
        
        if (isCorrect) {
            correctCount++;
        }
        
        results.push({
            questionIndex: index,
            question: question.question,
            userAnswer: userAnswer !== undefined ? question.options[userAnswer] : 'Javob berilmagan',
            correctAnswer: question.options[correctAnswer],
            isCorrect: isCorrect
        });
    });
    
    displayResults(correctCount, test.length, results);
}

// Natijalarni ko'rsatish
function displayResults(correctCount, totalQuestions, results) {
    const resultsContainer = document.getElementById('resultsContainer');
    const score = Math.round((correctCount / totalQuestions) * 100);
    
    // Reytingga qo'shish (60% va yuqori bo'lsa)
    if (score >= 60 && currentUser) {
        addToRating(currentUser, currentGrade, currentSubject, score);
    }
    
    resultsContainer.innerHTML = `
        <div class="results">
            <div class="score">Sizning natijangiz: ${correctCount}/${totalQuestions} (${score}%)</div>
            ${score >= 60 ? '<p style="text-align: center; color: #28a745; font-weight: 600; margin-top: 10px;">🎉 Tabriklaymiz! Siz reytingga kirdingiz!</p>' : ''}
            <div class="result-details">
                ${results.map((result, index) => `
                    <div class="result-item ${result.isCorrect ? 'correct' : 'incorrect'}">
                        <strong>Savol ${index + 1}:</strong> ${result.question}<br>
                        <strong>Sizning javobingiz:</strong> ${result.userAnswer} ${result.isCorrect ? '✅' : '❌'}<br>
                        ${!result.isCorrect ? `<strong>To'g'ri javob:</strong> ${result.correctAnswer}<br>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('submitTestBtn').style.display = 'none';
    
    // Variantlarni ranglarni yangilash
    updateOptionsColors(results);
    
    // Reytingni yangilash
    loadRating();
    
    // Sahifani pastga scroll qilish
    resultsContainer.scrollIntoView({ behavior: 'smooth' });
}



// Chiqish
function handleLogout() {
    if (confirm('Chiqmoqchimisiz?')) {
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentGrade');
        currentUser = null;
        currentGrade = null;
        userAnswers = {};
        
        document.getElementById('registrationSection').classList.remove('hidden');
        document.getElementById('testSection').classList.add('hidden');
        document.getElementById('registrationForm').reset();
    }
}

// Izoh holatini tekshirish
function checkCommentStatus() {
    if (!currentUser || !currentGrade) return;
    
    const hasCommented = localStorage.getItem(`hasCommented_${getUserIdentifier()}`);
    
    if (hasCommented) {
        document.getElementById('commentFormContainer').classList.add('hidden');
        document.getElementById('commentSubmitted').classList.remove('hidden');
    } else {
        document.getElementById('commentFormContainer').classList.remove('hidden');
        document.getElementById('commentSubmitted').classList.add('hidden');
    }
}

// Foydalanuvchi identifikatorini olish (nikname, yosh, sinf, fan bo'yicha)
function getUserIdentifier() {
    if (currentUser) {
        return `${currentUser.nickname}_${currentUser.age}_${currentGrade}_${currentSubject}`;
    }
    return 'anonymous';
}

// Haqorat va noto'g'ri so'zlarni tekshirish
function filterBadWords(text) {
    // Haqorat va noto'g'ri so'zlar ro'yxati (o'zbek, ingliz, rus tillarda)
    const badWords = [
        // O'zbek tilida
        'ahmoq', 'jinni', 'g\'isht', 'tentak', 'jinursak', 'pandak',
        // Ingliz tilida
        'fuck', 'shit', 'damn', 'bitch', 'asshole', 'stupid', 'idiot', 'moron', 'dumb',
        // Rus tilida
        'блять', 'сука', 'хуй', 'пизда', 'ебан', 'мудак', 'дурак', 'идиот'
    ];
    
    let filteredText = text.toLowerCase();
    
    // Har bir noto'g'ri so'zni tekshirish va almashtirish
    badWords.forEach(word => {
        const regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
        filteredText = filteredText.replace(regex, '*'.repeat(word.length));
    });
    
    // Original text bilan solishtirish - agar o'zgargan bo'lsa, haqorat bor
    return {
        original: text,
        filtered: filteredText !== text.toLowerCase() ? filteredText : text,
        hasBadWords: filteredText !== text.toLowerCase()
    };
}

// Izoh yuborish
function handleSubmitComment() {
    const commentText = document.getElementById('commentText').value.trim();
    
    if (!commentText) {
        alert('Iltimos, izoh yozing!');
        return;
    }
    
    if (!currentUser) {
        alert('Avval ro\'yxatdan o\'ting!');
        return;
    }
    
    // So'zlar filtri
    const filtered = filterBadWords(commentText);
    
    if (filtered.hasBadWords) {
        alert('Iltimos, izohda haqorat va noto\'g\'ri so\'zlardan foydalanmang! Izohingiz yuborilmadi.');
        // Haqoratli so'zlarni filtrlangan variant bilan almashtirish
        document.getElementById('commentText').value = filtered.filtered;
        return;
    }
    
    const comment = {
        author: currentUser.nickname,
        age: currentUser.age,
        grade: currentGrade,
        subject: currentSubject,
        text: commentText, // Asl matn (filtrlangan bo'lsa ham)
        date: new Date().toLocaleString('uz-UZ')
    };
    
    // Izohlarni saqlash
    let comments = JSON.parse(localStorage.getItem('comments') || '[]');
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    
    // Foydalanuvchi izoh qoldirganligini belgilash (ism+familiya+yosh bo'yicha)
    localStorage.setItem(`hasCommented_${getUserIdentifier()}`, 'true');
    
    // Formani yashirish
    document.getElementById('commentFormContainer').classList.add('hidden');
    document.getElementById('commentSubmitted').classList.remove('hidden');
    
    // Textareanini tozalash
    document.getElementById('commentText').value = '';
    
    // Izohlarni qayta yuklash
    loadComments();
}

// Izohlarni yuklash (faqat tanlangan sinf va fan uchun)
function loadComments() {
    if (!currentGrade || !currentSubject) return;
    
    const comments = JSON.parse(localStorage.getItem('comments') || '[]');
    const commentsList = document.getElementById('commentsList');
    
    // Faqat tanlangan sinf va fan uchun izohlarni filter qilish
    const gradeComments = comments.filter(c => c.grade === currentGrade && c.subject === currentSubject);
    
    if (gradeComments.length === 0) {
        commentsList.innerHTML = `<p style="text-align: center; color: #999; margin-top: 20px;">${currentGrade}-sinf ${getSubjectName(currentSubject)} fanidan hozircha izohlar yo'q.</p>`;
        return;
    }
    
    // Izohlarni teskari tartibda ko'rsatish (eng yangisi birinchi)
    const sortedComments = [...gradeComments].reverse();
    
    commentsList.innerHTML = sortedComments.map(comment => {
        const subject = comment.subject ? getSubjectName(comment.subject) : '';
        return `
        <div class="comment-item">
            <div class="comment-author">${comment.author}${comment.age ? `, ${comment.age} yosh` : ''} (${comment.grade}-sinf${subject ? `, ${subject}` : ''})</div>
            <div class="comment-date" style="font-size: 0.85em; color: #999; margin-bottom: 8px;">${comment.date}</div>
            <div class="comment-text">${comment.text}</div>
        </div>
    `;
    }).join('');
}
