// Variantlarni ranglarni yangilash
function updateOptionsColors(results) {
    const questionCards = document.querySelectorAll('.question-card');
    
    questionCards.forEach((card, questionIndex) => {
        const result = results[questionIndex];
        const options = card.querySelectorAll('.option');
        const correctOriginalIndex = parseInt(card.dataset.correctOriginalIndex);
        
        options.forEach((option) => {
            option.classList.remove('correct', 'incorrect');
            
            const optionOriginalIndex = parseInt(option.dataset.originalIndex);
            const userAnswerOriginalIndex = userAnswers[questionIndex];
            
            // To'g'ri javobni ko'rsatish
            if (optionOriginalIndex === correctOriginalIndex) {
                option.classList.add('correct');
            } 
            // Noto'g'ri javobni ko'rsatish
            else if (optionOriginalIndex === userAnswerOriginalIndex && !result.isCorrect) {
                option.classList.add('incorrect');
            }
        });
    });
}


// Sun'iy intellekt tomonidan tuzilgan testlar - 5-11 sinflar uchun
// Har bir fan uchun har bir sinf uchun 15 ta test

const tests = {
    informatika: {
        5: [
            {
                question: "Kompyuter nima?",
                options: ["Elektron qurilma", "Elektron moslama", "Elektron asbob", "Elektron jihoz"],
                correct: 0
            },
            {
                question: "Qaysi qurilma kompyuterga ma'lumot kiritish uchun ishlatiladi?",
                options: ["Monitor", "Klaviatura", "Ekran", "Proyektor"],
                correct: 1
            },
            {
                question: "Kompyuter ekraniga nima deyiladi?",
                options: ["Klaviatura", "Monitor", "Printer", "Skanner"],
                correct: 1
            },
            {
                question: "Fayl nima?",
                options: ["Ma'lumotlarni saqlash uchun joy", "Ma'lumotlarni yig'ish uchun joy", "Ma'lumotlarni ko'rsatish uchun joy", "Ma'lumotlarni uzatish uchun joy"],
                correct: 0
            },
            {
                question: "Internet nima?",
                options: ["Butun dunyoni qamrab olgan kompyuterlar tarmog'i", "Mahalliy kompyuterlar tarmog'i", "Bitta kompyuter tizimi", "Telefon tarmog'i"],
                correct: 0
            },
            {
                question: "Elektron pochta (Email) nima?",
                options: ["Xat", "Internet orqali xabar yuborish tizimi", "SMS xizmati", "Telefon xizmati"],
                correct: 1
            },
            {
                question: "Qaysi dastur matn yozish uchun ishlatiladi?",
                options: ["Paint", "Word", "Excel", "PowerPoint"],
                correct: 1
            },
            {
                question: "Komp'yuter virusi nima?",
                options: ["Foydali dastur", "Komp'yuterga zarar yetkazuvchi dastur", "Antivirus dastur", "Operatsion tizim"],
                correct: 1
            },
            {
                question: "Myshka (Mouse) nima?",
                options: ["Hayvon", "Komp'yuterni boshqarish uchun qurilma", "Klaviatura turi", "Ekran turi"],
                correct: 1
            },
            {
                question: "Komp'yuterni yopish uchun qanday amal bajariladi?",
                options: ["Shunchaki o'chirish", "Menu orqali to'g'ri o'chirish", "Rosketni bosish", "Hech narsa qilmaslik"],
                correct: 1
            },
            {
                question: "Papka (Folder) nima?",
                options: ["Fayl", "Fayllarni guruhlash va saqlash uchun joy", "Dastur", "Qurilma"],
                correct: 1
            },
            {
                question: "PDF fayl nima?",
                options: ["Rasm", "Hujjat ko'rinishidagi fayl", "Matn fayl", "Video fayl"],
                correct: 1
            },
            {
                question: "Brauzer nima?",
                options: ["Dastur", "Internetda saytlarni ko'rish uchun dastur", "Operatsion tizim", "Qurilma"],
                correct: 1
            },
            {
                question: "Qaysi brauzer mashhur?",
                options: ["Chrome", "Opera", "Firefox", "Edge"],
                correct: 0
            },
            {
                question: "URL nima?",
                options: ["Telefon raqami", "Internet manzili", "Elektron pochta", "Parol"],
                correct: 1
            }
        ],
        6: [
            {
                question: "Operatsion tizim nima?",
                options: ["Dastur", "Komp'yuterni boshqaruvchi asosiy dastur", "Qurilma", "Xotira"],
                correct: 1
            },
            {
                question: "Qaysi operatsion tizim ko'p qo'llaniladi?",
                options: ["Windows", "Linux", "Android", "MacOS"],
                correct: 0
            },
            {
                question: "Papka (Folder) nima?",
                options: ["Fayl", "Fayllarni guruhlash va saqlash uchun joy", "Dastur", "Qurilma"],
                correct: 1
            },
            {
                question: "Komp'yuter xotirasi qanday turlarga bo'linadi?",
                options: ["RAM va ROM", "Katta va kichik", "Oq va qora", "Yaxshi va yomon"],
                correct: 0
            },
            {
                question: "Paint dasturi nima uchun ishlatiladi?",
                options: ["Matn yozish", "Rasm chizish va tahrirlash", "Hisob-kitoblar", "Xat yozish"],
                correct: 1
            },
            {
                question: "Komp'yuterdan ma'lumotlarni saqlab qolish uchun nima ishlatiladi?",
                options: ["Monitor", "Klaviatura", "Disk yoki fleshka", "Myshka"],
                correct: 2
            },
            {
                question: "HTML nima?",
                options: ["Dasturlash tili", "Veb-sahifa yaratish tili", "Operatsion tizim", "Qurilma"],
                correct: 1
            },
            {
                question: "CSS nima?",
                options: ["Dasturlash tili", "Veb-sahifa dizaynini shakllantirish tili", "Ma'lumotlar bazasi", "Brauzer"],
                correct: 1
            },
            {
                question: "JavaScript nima?",
                options: ["Operatsion tizim", "Veb-sahifalarga interaktivlik qo'shish dasturlash tili", "Ma'lumotlar bazasi", "Qurilma"],
                correct: 1
            },
            {
                question: "Komp'yuter tarmog'i nima?",
                options: ["Qurilma", "Bir nechta komp'yuterlarni ulash tizimi", "Dastur", "Xotira"],
                correct: 1
            },
            {
                question: "LAN nima?",
                options: ["Internet", "Mahalliy komp'yuter tarmog'i", "Global tarmoq", "Brauzer"],
                correct: 1
            },
            {
                question: "Bulutli xizmatlar (Cloud) nima?",
                options: ["Havo", "Internetda ma'lumotlarni saqlash xizmati", "Suv", "Yer"],
                correct: 1
            },
            {
                question: "Antivirus dasturi nima uchun kerak?",
                options: ["Dastur o'rnatish", "Komp'yuterni viruslardan himoya qilish", "Internetga kirish", "Rasm ko'rish"],
                correct: 1
            },
            {
                question: "Dasturlash tili nima?",
                options: ["O'zbek tili", "Komp'yuterga buyruq berish uchun til", "Ingliz tili", "Rus tili"],
                correct: 1
            },
            {
                question: "Algoritm nima?",
                options: ["Dastur", "Muammoni hal qilish uchun qadamlar ketma-ketligi", "Ma'lumotlar", "Qurilma"],
                correct: 1
            }
        ],
        7: [
            {
                question: "Ma'lumotlar bazasi nima?",
                options: ["Kitob", "Ma'lumotlarni tizimli saqlash tizimi", "Fayl", "Papka"],
                correct: 1
            },
            {
                question: "Elektron jadval dasturi nima?",
                options: ["Word", "Excel", "Paint", "Media Player"],
                correct: 1
            },
            {
                question: "Python nima?",
                options: ["Hayvon", "Dasturlash tili", "Operatsion tizim", "Brauzer"],
                correct: 1
            },
            {
                question: "O'zgaruvchi (Variable) nima?",
                options: ["Ma'lumotlar bazasi", "Ma'lumotlarni saqlash uchun nom", "Funksiya", "Algoritm"],
                correct: 1
            },
            {
                question: "Funksiya (Function) nima?",
                options: ["O'zgaruvchi", "Muayyan vazifani bajaruvchi kod bloki", "Sikl", "Shartli operator"],
                correct: 1
            },
            {
                question: "Sikl (Loop) nima?",
                options: ["O'zgaruvchi", "Kod blokini takrorlash", "Funksiya", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Shartli operator (If-else) nima?",
                options: ["Sikl", "Shartga qarab qaror qabul qilish", "Funksiya", "O'zgaruvchi"],
                correct: 1
            },
            {
                question: "API nima?",
                options: ["Dasturlash tili", "Ilovalar o'rtasida ma'lumot almashish interfeysi", "Operatsion tizim", "Brauzer"],
                correct: 1
            },
            {
                question: "Git nima?",
                options: ["Dasturlash tili", "Kod versiyalarini boshqarish tizimi", "Ma'lumotlar bazasi", "Operatsion tizim"],
                correct: 1
            },
            {
                question: "Debugging nima?",
                options: ["Kod yozish", "Dasturdagi xatolarni topish va tuzatish", "Dastur ishga tushirish", "Dastur o'rnatish"],
                correct: 1
            },
            {
                question: "Frontend dasturlash nima?",
                options: ["Backend dasturlash", "Foydalanuvchi ko'rgan qismini yaratish", "Ma'lumotlar bazasi", "Server"],
                correct: 1
            },
            {
                question: "Backend dasturlash nima?",
                options: ["Frontend dasturlash", "Server tomonidagi dasturlash", "Brauzer", "Framework"],
                correct: 1
            },
            {
                question: "Framework nima?",
                options: ["Dasturlash tili", "Dasturlashni soddalashtiruvchi asosiy struktura", "Operatsion tizim", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Kriptografiya nima?",
                options: ["Rasm", "Ma'lumotlarni shifrlash fan", "Musiqa", "Video"],
                correct: 1
            },
            {
                question: "Blockchain nima?",
                options: ["Dasturlash tili", "Ma'lumotlarni bloklar shaklida saqlash texnologiyasi", "Ma'lumotlar bazasi", "Framework"],
                correct: 1
            }
        ],
        8: [
            {
                question: "Sun'iy intellekt (AI) nima?",
                options: ["Dasturlash tili", "Mashinalarning inson kabi o'ylash qobiliyati", "Operatsion tizim", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Ma'lumotlar bazasida SQL nima?",
                options: ["Dasturlash tili", "Ma'lumotlar bilan ishlash uchun so'rovlar tili", "Operatsion tizim", "Framework"],
                correct: 1
            },
            {
                question: "Machine Learning nima?",
                options: ["Dasturlash", "Mashinaning o'qib o'rganishi", "Ma'lumotlar bazasi", "Sun'iy intellektning bir turi"],
                correct: 3
            },
            {
                question: "Big Data nima?",
                options: ["Kichik ma'lumotlar", "Juda katta hajmdagi ma'lumotlar", "O'rta ma'lumotlar", "Hech qanday ma'lumotlar"],
                correct: 1
            },
            {
                question: "Cloud Computing nima?",
                options: ["Havo", "Internetda resurslardan foydalanish", "Suv", "Yer"],
                correct: 1
            },
            {
                question: "Neural Network (Neysron tarmog'i) nima?",
                options: ["Ma'lumotlar bazasi", "Sun'iy intellekt modeli", "Framework", "Dasturlash tili"],
                correct: 1
            },
            {
                question: "Deep Learning nima?",
                options: ["Machine Learning", "Chuqur o'rganish - neysron tarmoqlardan foydalanish", "Ma'lumotlar bazasi", "Framework"],
                correct: 1
            },
            {
                question: "DevOps nima?",
                options: ["Dasturlash tili", "Dasturlash va operatsiyalarni birlashtirish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Microservices nima?",
                options: ["Ma'lumotlar bazasi", "Kichik, mustaqil ilovalar arxitekturasi", "Framework", "Dasturlash tili"],
                correct: 1
            },
            {
                question: "Containerization nima?",
                options: ["Dasturlash tili", "Ilovalarni konteynerlarda paketlash", "Framework", "Operatsion tizim"],
                correct: 1
            },
            {
                question: "REST API nima?",
                options: ["Dasturlash tili", "Veb xizmatlarni taqdim etish usuli", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "GraphQL nima?",
                options: ["Dasturlash tili", "Ma'lumotlar so'rovlari tili", "Framework", "Operatsion tizim"],
                correct: 1
            },
            {
                question: "Cybersecurity nima?",
                options: ["Dasturlash tili", "Kiber xavfsizlik", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Cryptocurrency nima?",
                options: ["Dasturlash tili", "Shifrlangan raqamli pul", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "IoT (Internet of Things) nima?",
                options: ["Dasturlash tili", "Narsalar interneti - qurilmalarni ulash", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            }
        ],
        9: [
            {
                question: "Quantum Computing (Kvant hisoblash) nima?",
                options: ["Ma'lumotlar bazasi", "Kvant fizika asosidagi hisoblash", "Framework", "Dasturlash tili"],
                correct: 1
            },
            {
                question: "Natural Language Processing (NLP) nima?",
                options: ["Dasturlash tili", "Tabiiy tildan foydalanishni o'rganish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Computer Vision nima?",
                options: ["Dasturlash tili", "Komp'yuter ko'rish - rasm va videoni tahlil qilish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Algorithm Complexity nima?",
                options: ["Dasturlash tili", "Algoritmning samaradorligini o'lchash", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Design Pattern nima?",
                options: ["Dasturlash tili", "Dasturlashda takrorlanuvchi yechimlar", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Test-Driven Development (TDD) nima?",
                options: ["Dasturlash tili", "Avval testlar yozib, keyin kod yozish usuli", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "CI/CD nima?",
                options: ["Dasturlash tili", "Davomiy integratsiya va yetkazib berish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Load Balancing nima?",
                options: ["Dasturlash tili", "Yukni bir nechta serverlarga taqsimlash", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Cache nima?",
                options: ["Dasturlash tili", "Tez kirish uchun ma'lumotlarni vaqtincha saqlash", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Distributed Systems nima?",
                options: ["Dasturlash tili", "Bir nechta komp'yuterlardan iborat tizim", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Scalability nima?",
                options: ["Dasturlash tili", "Tizimning yukni qo'llab-quvvatlash qobiliyati", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Microservices Architecture nima?",
                options: ["Yagona dastur", "Kichik xizmatlarga bo'lingan arxitektura", "Ma'lumotlar bazasi", "Framework"],
                correct: 1
            },
            {
                question: "API Gateway nima?",
                options: ["Dasturlash tili", "API so'rovlarini boshqaruvchi shlyuz", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Service Mesh nima?",
                options: ["Dasturlash tili", "Mikroxizmatlar o'rtasidagi aloqa tarmog'i", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Observability nima?",
                options: ["Dasturlash tili", "Tizim holatini kuzatish qobiliyati", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            }
        ],
        10: [
            {
                question: "Event-Driven Architecture nima?",
                options: ["Dasturlash tili", "Hodisalar bilan ishlaydigan arxitektura", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "CQRS (Command Query Responsibility Segregation) nima?",
                options: ["Dasturlash tili", "Buyruq va so'rovni ajratish arxitekturasi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Event Sourcing nima?",
                options: ["Dasturlash tili", "Hodisalarni saqlash usuli", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Domain-Driven Design (DDD) nima?",
                options: ["Dasturlash tili", "Domenga asoslangan dizayn", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Hexagonal Architecture nima?",
                options: ["Dasturlash tili", "Olti qirrali arxitektura", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Reactive Programming nima?",
                options: ["Dasturlash tili", "Reaktiv dasturlash paradigmalari", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Message Queue nima?",
                options: ["Dasturlash tili", "Xabarlar navbatini boshqarish tizimi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Pub/Sub Pattern nima?",
                options: ["Dasturlash tili", "Nashr etish/obuna bo'lish naqsh", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Circuit Breaker Pattern nima?",
                options: ["Dasturlash tili", "Xatolarni oldini olish naqsh", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Blue-Green Deployment nima?",
                options: ["Dasturlash tili", "Ko'k-yashil joylashtirish strategiyasi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Canary Deployment nima?",
                options: ["Dasturlash tili", "Kanareyka joylashtirish strategiyasi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Feature Flags nima?",
                options: ["Dasturlash tili", "Funksiyalarni yoqish/o'chirish mexanizmi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "A/B Testing nima?",
                options: ["Dasturlash tili", "Ikki variantni solishtirish testi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Performance Monitoring nima?",
                options: ["Dasturlash tili", "Ishlash ko'rsatkichlarini kuzatish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "APM (Application Performance Monitoring) nima?",
                options: ["Dasturlash tili", "Ilova ishlashini kuzatish tizimi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            }
        ],
        11: [
            {
                question: "Chaos Engineering nima?",
                options: ["Dasturlash tili", "Xaos muhitida test qilish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "SRE (Site Reliability Engineering) nima?",
                options: ["Dasturlash tili", "Sayt ishonchliligini muhandislik", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Infrastructure as Code (IaC) nima?",
                options: ["Dasturlash tili", "Infratuzilmani kod sifatida", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Terraform nima?",
                options: ["Dasturlash tili", "Infratuzilma boshqarish vositasi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Kubernetes nima?",
                options: ["Dasturlash tili", "Konteynerlarni boshqarish tizimi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Docker nima?",
                options: ["Dasturlash tili", "Konteynerlash platformasi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Service Discovery nima?",
                options: ["Dasturlash tili", "Xizmatlarni topish mexanizmi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Config Management nima?",
                options: ["Dasturlash tili", "Konfiguratsiyani boshqarish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Secrets Management nima?",
                options: ["Dasturlash tili", "Maxfiy ma'lumotlarni boshqarish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Zero Trust Architecture nima?",
                options: ["Dasturlash tili", "Nol ishonch arxitekturasi", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "OWASP Top 10 nima?",
                options: ["Dasturlash tili", "Veb xavfsizlik xatolari ro'yxati", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Penetration Testing nima?",
                options: ["Dasturlash tili", "Kirish testlari", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Vulnerability Assessment nima?",
                options: ["Dasturlash tili", "Zaifliklarni baholash", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "Compliance nima?",
                options: ["Dasturlash tili", "Qonuniy talablarga rioya qilish", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            },
            {
                question: "GRC (Governance, Risk, Compliance) nima?",
                options: ["Dasturlash tili", "Boshqaruv, xavf, qonuniy talablar", "Framework", "Ma'lumotlar bazasi"],
                correct: 1
            }
        ]
    },
    biologiya: {
        5: [
            {
                question: "Hayvonlar nima?",
                options: ["Jonli organizmlar", "Jonsiz moddalar", "O'simliklar turi", "Mineral moddalar"],
                correct: 0
            },
            {
                question: "O'simliklar nima?",
                options: ["Hayvonlar turi", "Jonli organizmlar", "Jonsiz moddalar", "Suyuqliklar"],
                correct: 1
            },
            {
                question: "Inson tanasida nechta a'zo bor?",
                options: ["10 ta", "Ko'p a'zolar", "5 ta", "3 ta"],
                correct: 1
            },
            {
                question: "Qon nima?",
                options: ["Suyuqlik", "Tanada aylanuvchi suyuqlik", "Qattiq modda", "Gaz"],
                correct: 1
            },
            {
                question: "Yurag nima?",
                options: ["Mushak", "Qon aylantiruvchi mushak", "Suyak", "A'zo"],
                correct: 1
            },
            {
                question: "O'pka nima?",
                options: ["Suyak", "Nafas olish a'zosi", "Mushak", "Jigar"],
                correct: 1
            },
            {
                question: "Miya nima?",
                options: ["Suyak", "Bosh miya organi", "Mushak", "A'zo"],
                correct: 1
            },
            {
                question: "Suyaklar nima?",
                options: ["Tanani ushlab turadigan tuzilmalar", "Mushaklar", "A'zolar", "Suyuqliklar"],
                correct: 0
            },
            {
                question: "Mushaklar nima?",
                options: ["Suyaklar", "Harakat qiluvchi tuzilmalar", "A'zolar", "Qon"],
                correct: 1
            },
            {
                question: "Teri nima?",
                options: ["Suyak", "Tashqi himoya qoplamasi", "Mushak", "A'zo"],
                correct: 1
            },
            {
                question: "Vitaminlar nima?",
                options: ["Mineral moddalar", "Organizmga zarur moddalar", "Suyuqliklar", "Gazlar"],
                correct: 1
            },
            {
                question: "Bakteriyalar nima?",
                options: ["Katta organizmlar", "Kichik bir hujayrali organizmlar", "O'simliklar", "Hayvonlar"],
                correct: 1
            },
            {
                question: "Viruslar nima?",
                options: ["Bakteriyalar", "Kichik zararli organizmlar", "Vitaminlar", "A'zolar"],
                correct: 1
            },
            {
                question: "Hujayra nima?",
                options: ["Organizm", "Hayotning asosiy birligi", "A'zo", "Mushak"],
                correct: 1
            },
            {
                question: "Genetika nima?",
                options: ["Fan", "Irsiyat fanini o'rganish", "Tibbiyot", "Kimyo"],
                correct: 1
            }
        ],
        6: [
            {
                question: "Fotosintez nima?",
                options: ["O'simliklarda jarayon", "O'simliklarda yorug'lik energiyasini qayta ishlash", "Hayvonlarda jarayon", "Mushaklarda jarayon"],
                correct: 1
            },
            {
                question: "Xlorofill nima?",
                options: ["Gaz", "Yashil pigment", "Suyuqlik", "Qattiq modda"],
                correct: 1
            },
            {
                question: "Nafas olish nima?",
                options: ["Gaz almashinuvi", "Kislorod olish va karbonat ajratish", "Suyuqlik olish", "Oziq ovqat olish"],
                correct: 1
            },
            {
                question: "Ovqat hazm qilish nima?",
                options: ["Oziq ovqatni parchalash", "Oziq ovqatni qayta ishlash", "Gaz olish", "Suyuqlik olish"],
                correct: 0
            },
            {
                question: "Jigar nima?",
                options: ["Nafas olish a'zosi", "Ovqat hazm qilish a'zosi", "Qon aylantirish a'zosi", "Bosh a'zo"],
                correct: 1
            },
            {
                question: "Buyrak nima?",
                options: ["Nafas olish a'zosi", "Siydik ajratish a'zosi", "Ovqat hazm a'zosi", "Qon aylantirish a'zosi"],
                correct: 1
            },
            {
                question: "Tuyg'u organlari nima?",
                options: ["Ko'z, quloq, burun, til, teri", "Faqat ko'z va quloq", "Faqat teri", "Faqat miya"],
                correct: 0
            },
            {
                question: "Nerv tizimi nima?",
                options: ["A'zolar", "Signallarni uzatuvchi tizim", "Qon tizimi", "Nafas tizimi"],
                correct: 1
            },
            {
                question: "Endokrin tizimi nima?",
                options: ["Hormonlar tizimi", "Qon tizimi", "Nerv tizimi", "Nafas tizimi"],
                correct: 0
            },
            {
                question: "Hormonlar nima?",
                options: ["Mineral moddalar", "Biologik faol moddalar", "Vitaminlar", "Gazlar"],
                correct: 1
            },
            {
                question: "DNK nima?",
                options: ["Protein", "Irsiyat ma'lumotlarini saqlaydigan modda", "Vitamin", "Mineral"],
                correct: 1
            },
            {
                question: "RNK nima?",
                options: ["DNK", "Xabar uzatuvchi nuklein kislota", "Protein", "Vitamin"],
                correct: 1
            },
            {
                question: "Proteinlar nima?",
                options: ["Mineral moddalar", "Aminokislotalardan tuzilgan moddalar", "Gazlar", "Suyuqliklar"],
                correct: 1
            },
            {
                question: "Enzimlar nima?",
                options: ["Mineral moddalar", "Biokimyoviy reaksiyalarni tezlashtiruvchi moddalar", "Gazlar", "Vitaminlar"],
                correct: 1
            },
            {
                question: "Metabolizm nima?",
                options: ["Gaz almashinuvi", "Modda almashinuvi jarayoni", "Nafas olish", "Ovqat hazm qilish"],
                correct: 1
            }
        ],
        7: [
            {
                question: "Ekologiya nima?",
                options: ["Fan", "Organizmlar va muhit o'rtasidagi munosabatlar", "Kimyo", "Fizika"],
                correct: 1
            },
            {
                question: "Biotsenoz nima?",
                options: ["Yer", "Turli organizmlar jamiyati", "Suv", "Havo"],
                correct: 1
            },
            {
                question: "Ekosistema nima?",
                options: ["Yer", "Organizmlar va ularning muhiti", "Suv", "Havo"],
                correct: 1
            },
            {
                question: "Oziq zanjiri nima?",
                options: ["Oziq ovqat olish", "Oziq ovqat energiyasining o'tishi", "Ovqat hazm qilish", "Ovqat iste'mol qilish"],
                correct: 1
            },
            {
                question: "Produksentlar nima?",
                options: ["Hayvonlar", "Oziq ovqat ishlab chiqaruvchilar", "Bakteriyalar", "Viruslar"],
                correct: 1
            },
            {
                question: "Konsumentlar nima?",
                options: ["O'simliklar", "Oziq ovqat iste'mol qiluvchilar", "Bakteriyalar", "Minerallar"],
                correct: 1
            },
            {
                question: "Reduksentlar nima?",
                options: ["O'simliklar", "Organik moddalarni parchalovchilar", "Hayvonlar", "Minerallar"],
                correct: 1
            },
            {
                question: "Mutatsiya nima?",
                options: ["O'zgarish", "Irsiyat materialining o'zgarishi", "Tug'ilish", "O'sish"],
                correct: 1
            },
            {
                question: "Seleksiya nima?",
                options: ["Tanlash", "Foydali belgilarni tanlash", "Parchalash", "O'zgartirish"],
                correct: 1
            },
            {
                question: "Gibrildiz nima?",
                options: ["O'simlik", "Turli turlarni chatishtirish", "Hayvon", "Bakteriya"],
                correct: 1
            },
            {
                question: "Klonlash nima?",
                options: ["Parchalash", "Bir xil genetik nusxa yaratish", "O'zgartirish", "Tanlash"],
                correct: 1
            },
            {
                question: "Stvol hujayralari nima?",
                options: ["Oddiy hujayralar", "Turli hujayralarga aylana oladigan hujayralar", "O'lik hujayralar", "Viruslar"],
                correct: 1
            },
            {
                question: "Immunitet nima?",
                options: ["Qon", "Kasalliklarga qarshi himoya", "Vitamin", "Mineral"],
                correct: 1
            },
            {
                question: "Antitelalar nima?",
                options: ["Viruslar", "Immun tizimi tomonidan ishlab chiqariladigan moddalar", "Bakteriyalar", "Enzimlar"],
                correct: 1
            },
            {
                question: "Allergiya nima?",
                options: ["Kasallik", "Immun tizimining haddan tashqari reaktsiyasi", "Virus", "Bakteriya"],
                correct: 1
            }
        ],
        8: [
            {
                question: "Evolutsiya nima?",
                options: ["O'zgarish", "Organizmlarning tarixiy rivojlanishi", "Tug'ilish", "O'lim"],
                correct: 1
            },
            {
                question: "Tabiiy tanlanish nima?",
                options: ["Inson tanlovi", "Tabiat tanlovi - moslashgan turlarni qolishi", "Klonlash", "Mutatsiya"],
                correct: 1
            },
            {
                question: "Darvinizm nima?",
                options: ["Fan", "Evolutsiya nazariyasi", "Kimyo", "Fizika"],
                correct: 1
            },
            {
                question: "Gen nima?",
                options: ["Protein", "Irsiyat birligi", "Vitamin", "Mineral"],
                correct: 1
            },
            {
                question: "Xromosoma nima?",
                options: ["Protein", "Genlarni tashuvchi struktura", "Vitamin", "Mineral"],
                correct: 1
            },
            {
                question: "Geterozigota nima?",
                options: ["Bir xil allellar", "Turli allellar", "Gen yo'q", "Hujayra yo'q"],
                correct: 1
            },
            {
                question: "Gomozigota nima?",
                options: ["Turli allellar", "Bir xil allellar", "Gen yo'q", "Hujayra yo'q"],
                correct: 1
            },
            {
                question: "Fenotip nima?",
                options: ["Gen", "Ko'rinadigan belgilar", "Xromosoma", "DNK"],
                correct: 1
            },
            {
                question: "Genotip nima?",
                options: ["Ko'rinadigan belgilar", "Genetik tarkib", "Xromosoma", "Fenotip"],
                correct: 1
            },
            {
                question: "Mutagenlar nima?",
                options: ["Vitaminlar", "Mutatsiyaga olib keluvchi omillar", "Proteinlar", "Mineral moddalar"],
                correct: 1
            },
            {
                question: "Biotexnologiya nima?",
                options: ["Fan", "Biologik texnologiyalar", "Kimyo", "Fizika"],
                correct: 1
            },
            {
            question: "GMO (Genetik modifikatsiya qilingan organizmlar) nima?",
            options: ["Tabiiy organizmlar", "Genlari o'zgartirilgan organizmlar", "Viruslar", "Bakteriyalar"],
                correct: 1
            },
            {
                question: "Bioetika nima?",
                options: ["Fan", "Biologik tadqiqotlarda axloqiy masalalar", "Kimyo", "Fizika"],
                correct: 1
            },
            {
                question: "Biodiversitet nima?",
                options: ["Yer", "Biological xilma-xillik", "Suv", "Havo"],
                correct: 1
            }
        ],
        9: [
            {
              question: "Evolyutsiya nima?",
              options: ["O‘sish", "Organizmlarning tarixiy rivojlanishi", "Ko‘payish", "Nafas olish"],
              correct: 1
            },
            {
              question: "Tabiiy tanlanish kim tomonidan asoslangan?",
              options: ["Mendel", "Darvin", "Paster", "Linné"],
              correct: 1
            },
            {
              question: "Gen nima?",
              options: ["Hujayra", "Irsiyat birligi", "Organ", "Protein"],
              correct: 1
            },
            {
              question: "Xromosomalar qayerda joylashgan?",
              options: ["Sitoplazmada", "Yadroda", "Membranada", "Ribosomada"],
              correct: 1
            },
            {
              question: "Fenotip nima?",
              options: ["Genlar to‘plami", "Tashqi belgilar majmui", "DNK", "Xromosoma"],
              correct: 1
            },
            {
              question: "Genotip nima?",
              options: ["Tashqi belgilar", "Genlar majmui", "Organlar", "To‘qimalar"],
              correct: 1
            },
            {
              question: "Mutatsiya nima?",
              options: ["Ko‘payish", "Irsiy o‘zgarish", "Moslashuv", "Tanlanish"],
              correct: 1
            },
            {
              question: "Mutagenlarga misol?",
              options: ["Vitamin", "Radiatsiya", "Oqsil", "Suv"],
              correct: 1
            },
            {
              question: "Gomozigota nima?",
              options: ["Turli allel", "Bir xil allel", "Gen yo‘q", "Xromosoma yo‘q"],
              correct: 1
            },
            {
              question: "Geterozigota nima?",
              options: ["Bir xil allel", "Turli allel", "DNK", "Protein"],
              correct: 1
            },
            {
              question: "Biotexnologiya nima?",
              options: ["Fan", "Biologik jarayonlardan foydalanish", "Kimyo", "Fizika"],
              correct: 1
            },
            {
              question: "GMO nima?",
              options: ["Tabiiy organizm", "Genetik o‘zgartirilgan organizm", "Virus", "Bakteriya"],
              correct: 1
            },
            {
              question: "Bioetika nimani o‘rganadi?",
              options: ["Kimyo", "Axloqiy masalalar", "Fizika", "Matematika"],
              correct: 1
            },
            {
              question: "Biodiversitet nima?",
              options: ["Suv miqdori", "Biologik xilma-xillik", "Iqlim", "Yer rel’efi"],
              correct: 1
            },
            {
              question: "Darvinizm nima?",
              options: ["Genetika", "Evolyutsiya nazariyasi", "Tibbiyot", "Ekologiya"],
              correct: 1
            }
        ],
    10: [
        {
          question: "Odam genomida nechta xromosoma bor?",
          options: ["44", "46", "48", "23"],
          correct: 1
        },
        {
          question: "Mejoz nima?",
          options: ["Oddiy bo‘linish", "Jinsiy hujayra bo‘linishi", "O‘sish", "Regeneratsiya"],
          correct: 1
        },
        {
          question: "Mitoz nima?",
          options: ["Jinsiy bo‘linish", "Oddiy hujayra bo‘linishi", "Urug‘lanish", "Moslashuv"],
          correct: 1
        },
        {
          question: "Krossingover qayerda sodir bo‘ladi?",
          options: ["Mitozda", "Mejozda", "Interfazda", "Yadro tashqarisida"],
          correct: 1
        },
        {
          question: "DNK replikatsiyasi nima?",
          options: ["Parchalanish", "DNK nusxalanishi", "O‘chish", "O‘zgarish"],
          correct: 1
        },
        {
          question: "RNK vazifasi?",
          options: ["Energiya berish", "Oqsil sintezi", "Himoya", "Nafas olish"],
          correct: 1
        },
        {
          question: "Oqsillar nimadan tuzilgan?",
          options: ["Yog‘lardan", "Aminokislotalardan", "Vitaminlardan", "Uglevodlardan"],
          correct: 1
        },
        {
          question: "Fermentlar nima?",
          options: ["Yog‘lar", "Biokatalizatorlar", "Gazlar", "Vitaminlar"],
          correct: 1
        },
        {
          question: "Homeostaz nima?",
          options: ["O‘sish", "Ichki muvozanat", "Ko‘payish", "Moslashuv"],
          correct: 1
        },
        {
          question: "Immunitet nima?",
          options: ["Kasallik", "Himoya tizimi", "Vitamin", "Ferment"],
          correct: 1
        },
        {
          question: "Antigen nima?",
          options: ["Himoya modda", "Immun javob chaqiruvchi modda", "Vitamin", "Ferment"],
          correct: 1
        },
        {
          question: "Antitelalar qayerda hosil bo‘ladi?",
          options: ["Jigar", "Limfotsitlarda", "O‘pka", "Miya"],
          correct: 1
        },
        {
          question: "Allergiya nima?",
          options: ["Virus", "Immun tizim reaksiyasi", "Bakteriya", "Ferment"],
          correct: 1
        },
        {
          question: "Autoimmun kasallik nima?",
          options: ["Virusli", "O‘z hujayrasiga qarshi", "Bakterial", "Irsiy"],
          correct: 1
        },
        {
          question: "Vaksina nima?",
          options: ["Dori", "Immunitet hosil qiluvchi modda", "Vitamin", "Antibiotik"],
          correct: 1
        }
    ],

    11: [
            {
              question: "Ekologik omillar nechta guruhga bo‘linadi?",
              options: ["2", "3", "4", "5"],
              correct: 1
            },
            {
              question: "Abiotik omil nima?",
              options: ["Tirik", "Jonsiz muhit omili", "Hayvon", "O‘simlik"],
              correct: 1
            },
            {
              question: "Biotik omil nima?",
              options: ["Jonsiz", "Tirik organizmlar ta’siri", "Iqlim", "Suv"],
              correct: 1
            },
            {
              question: "Antropogen omil nima?",
              options: ["Tabiiy", "Inson faoliyati", "Hayvon", "O‘simlik"],
              correct: 1
            },
            {
              question: "Populyatsiya nima?",
              options: ["Tur", "Bir hududdagi bir tur", "Ekosistema", "Biotsenoz"],
              correct: 1
            },
            {
              question: "Biotsenoz nima?",
              options: ["Bir tur", "Organizmlar jamiyati", "Suv", "Havo"],
              correct: 1
            },
            {
              question: "Ekosistema nima?",
              options: ["Faqat organizmlar", "Organizm va muhit", "Suv", "Havo"],
              correct: 1
            },
            {
              question: "Oziq zanjiri nimani ko‘rsatadi?",
              options: ["Energiya almashinuvi", "Oziq energiyasi o‘tishi", "Suv aylanishi", "Gaz almashinuvi"],
              correct: 1
            },
            {
              question: "Produksentlar kimlar?",
              options: ["Hayvonlar", "O‘simliklar", "Zamburug‘lar", "Bakteriyalar"],
              correct: 1
            },
            {
              question: "Konsumentlar kimlar?",
              options: ["O‘simliklar", "Hayvonlar", "Bakteriyalar", "Zamburug‘lar"],
              correct: 1
            },
            {
              question: "Reduksentlar kimlar?",
              options: ["Hayvonlar", "Chirindilarni parchalovchilar", "O‘simliklar", "Hasharotlar"],
              correct: 1
            },
            {
              question: "Atmosfera ifloslanishi nimaga olib keladi?",
              options: ["Yaxshi iqlim", "Global isish", "Sovish", "Barqarorlik"],
              correct: 1
            },
            {
              question: "Global isish sababi?",
              options: ["O‘rmonlar", "Issiqxona gazlari", "Yomg‘ir", "Shamol"],
              correct: 1
            },
            {
              question: "Qizil kitob nima?",
              options: ["Darslik", "Yo‘qolib borayotgan turlar ro‘yxati", "Lug‘at", "Ensiklopediya"],
              correct: 1
            },
            {
              question: "Tabiatni muhofaza qilish nima?",
              options: ["Foydalanish", "Saqlash va asrash", "Kesish", "Ifloslantirish"],
              correct: 1
            }
        ],
    },
    matematika: {
        5:[
      {
        question: "5 + 7 nechaga teng?",
        options: ["10", "11", "12", "13"],
        correct: 2
      },
      {
        question: "20 − 8 nechaga teng?",
        options: ["10", "11", "12", "13"],
        correct: 2
      },
      {
        question: "6 × 4 nechaga teng?",
        options: ["20", "22", "24", "26"],
        correct: 2
      },
      {
        question: "24 ÷ 6 nechaga teng?",
        options: ["2", "3", "4", "5"],
        correct: 2
      },
      {
        question: "To‘g‘ri to‘rtburchakning nechta tomoni bor?",
        options: ["2", "3", "4", "5"],
        correct: 2
      },
      {
        question: "10 ning yarmi nechaga teng?",
        options: ["3", "4", "5", "6"],
        correct: 2
      },
      {
        question: "Eng kichik juft son qaysi?",
        options: ["0", "1", "2", "3"],
        correct: 0
      },
      {
        question: "9 ning kvadrati nechaga teng?",
        options: ["18", "27", "81", "72"],
        correct: 2
      },
      {
        question: "Bir metrda nechta santimetr bor?",
        options: ["10", "50", "100", "1000"],
        correct: 2
      },
      {
        question: "1 soatda nechta minut bor?",
        options: ["30", "40", "50", "60"],
        correct: 3
      },
      {
        question: "Eng katta bir xonali son qaysi?",
        options: ["8", "9", "10", "7"],
        correct: 1
      },
      {
        question: "3 × 0 nechaga teng?",
        options: ["0", "3", "1", "Xato"],
        correct: 0
      },
      {
        question: "15 + 5 × 2 nechaga teng?",
        options: ["25", "35", "20", "30"],
        correct: 0
      },
      {
        question: "To‘g‘ri chiziq nima?",
        options: ["Buralgan", "Cheksiz", "Yopiq", "Kesma"],
        correct: 1
      },
      {
        question: "100 − 1 nechaga teng?",
        options: ["99", "98", "101", "100"],
        correct: 0
      }
        ],
          6: [
            {
              question: "12 × 5 nechaga teng?",
              options: ["50", "55", "60", "65"],
              correct: 2
            },
            {
              question: "144 ÷ 12 nechaga teng?",
              options: ["10", "11", "12", "13"],
              correct: 2
            },
            {
              question: "Kasr nima?",
              options: ["Butun son", "Bo‘linma", "Qoldiq", "Ko‘paytma"],
              correct: 1
            },
            {
              question: "1/2 + 1/2 nechaga teng?",
              options: ["1", "2", "1/2", "0"],
              correct: 0
            },
            {
              question: "To‘g‘ri burchak necha gradus?",
              options: ["45°", "60°", "90°", "180°"],
              correct: 2
            },
            {
              question: "Uchburchak ichki burchaklari yig‘indisi?",
              options: ["90°", "180°", "270°", "360°"],
              correct: 1
            },
            {
              question: "10² nechaga teng?",
              options: ["20", "100", "1000", "10"],
              correct: 1
            },
            {
              question: "Eng kichik tub son qaysi?",
              options: ["0", "1", "2", "3"],
              correct: 2
            },
            {
              question: "Aylananing yarmi nima?",
              options: ["Chorak", "Yoy", "Yarim doira", "Radius"],
              correct: 2
            },
            {
              question: "5³ nechaga teng?",
              options: ["15", "25", "125", "75"],
              correct: 2
            },
            {
              question: "Kasrning maxraji nima?",
              options: ["Yuqori qismi", "Pastki qismi", "Butun", "Qoldiq"],
              correct: 1
            },
            {
              question: "2/4 qisqartirilsa?",
              options: ["1/4", "1/2", "2/2", "4/2"],
              correct: 1
            },
            {
              question: "Perimetr nima?",
              options: ["Yuza", "Aylana", "Chegara uzunligi", "Hajm"],
              correct: 2
            },
            {
              question: "Kvadratning barcha tomonlari qanday?",
              options: ["Har xil", "Teng", "Uzun", "Qisqa"],
              correct: 1
            },
            {
              question: "0 ga bo‘lish mumkinmi?",
              options: ["Ha", "Yo‘q", "Ba’zan", "Farqi yo‘q"],
              correct: 1
            }
          ],
      
          7: [
            {
              question: "x + 5 = 12 tenglamada x nechaga teng?",
              options: ["5", "6", "7", "12"],
              correct: 2
            },
            {
              question: "7x = 21 bo‘lsa, x nechaga teng?",
              options: ["2", "3", "4", "5"],
              correct: 1
            },
            {
              question: "(-3) × 4 nechaga teng?",
              options: ["-12", "12", "-7", "7"],
              correct: 0
            },
            {
              question: "Manfiy sonlar qayerda joylashadi?",
              options: ["0 dan o‘ngda", "0 da", "0 dan chapda", "Faqat yuqorida"],
              correct: 2
            },
            {
              question: "|-8| nechaga teng?",
              options: ["-8", "8", "0", "16"],
              correct: 1
            },
            {
              question: "2x + 3 = 11 bo‘lsa, x?",
              options: ["3", "4", "5", "6"],
              correct: 1
            },
            {
              question: "Koordinata boshi qaysi nuqta?",
              options: ["(1;1)", "(0;1)", "(1;0)", "(0;0)"],
              correct: 3
            },
            {
              question: "a² har doim qanday?",
              options: ["Manfiy", "Musbat yoki 0", "0", "Manfiy bo‘ladi"],
              correct: 1
            },
            {
              question: "(-5)² nechaga teng?",
              options: ["-25", "25", "5", "-5"],
              correct: 1
            },
            {
              question: "Proporsiya nima?",
              options: ["Tenglik", "Nisbatlar tengligi", "Qo‘shish", "Ayirish"],
              correct: 1
            },
            {
              question: "3/5 = x/10 bo‘lsa, x?",
              options: ["5", "6", "7", "8"],
              correct: 1
            },
            {
              question: "Yoyiq burchak necha gradus?",
              options: ["90°", "120°", "180°", "360°"],
              correct: 2
            },
            {
              question: "Parallel chiziqlar qanday?",
              options: ["Kesishadi", "Kesishmaydi", "Buraladi", "Yopiladi"],
              correct: 1
            },
            {
              question: "To‘g‘ri chiziqda nechta nuqta bor?",
              options: ["1", "2", "Cheksiz", "0"],
              correct: 2
            },
            {
              question: "Kasrni 1 ga bo‘lsak nima bo‘ladi?",
              options: ["0", "O‘zgarmaydi", "2 barobar", "Yarim"],
              correct: 1
            }
          ],
      
          8: [
            {
              question: "a² − b² formulasi?",
              options: ["(a-b)²", "(a+b)²", "(a-b)(a+b)", "2ab"],
              correct: 2
            },
            {
              question: "(x+3)² nechaga teng?",
              options: ["x²+6x+9", "x²+9", "x²+3", "6x"],
              correct: 0
            },
            {
              question: "Kvadrat tenglama darajasi?",
              options: ["1", "2", "3", "4"],
              correct: 1
            },
            {
              question: "Diskriminant formulasi?",
              options: ["b²-4ac", "a²+b²", "2ab", "ac"],
              correct: 0
            },
            {
              question: "D=0 bo‘lsa nechta yechim?",
              options: ["0", "1", "2", "Cheksiz"],
              correct: 1
            },
            {
              question: "Grafik nimani ko‘rsatadi?",
              options: ["Son", "Bog‘lanish", "Burchak", "Kasr"],
              correct: 1
            },
            {
              question: "Funksiya nimaga bog‘liq?",
              options: ["Faqat x", "Faqat y", "x ga", "Sonlarga"],
              correct: 2
            },
            {
              question: "To‘g‘ri proporsional bog‘lanish?",
              options: ["y=k/x", "y=kx", "y=x²", "y=x+k"],
              correct: 1
            },
            {
              question: "Pifagor teoremasi?",
              options: ["a²=b²+c²", "c²=a²+b²", "a=b+c", "a²+b²"],
              correct: 1
            },
            {
              question: "Gipotenuza qaysi tomon?",
              options: ["Eng qisqa", "Eng uzun", "O‘rtacha", "Yo‘q"],
              correct: 1
            },
            {
              question: "Irratsional son?",
              options: ["1/2", "0.5", "√2", "3"],
              correct: 2
            },
            {
              question: "Daraja qoidasi: a²·a³?",
              options: ["a⁵", "a⁶", "a⁹", "a¹"],
              correct: 0
            },
            {
              question: "Tenglamaning ildizi nima?",
              options: ["Yechim", "Xato", "Son emas", "Grafik"],
              correct: 0
            },
            {
              question: "Logika belgisi ∧ nimani bildiradi?",
              options: ["Yoki", "Va", "Emas", "Teng"],
              correct: 1
            },
            {
              question: "a⁰ nechaga teng?",
              options: ["0", "a", "1", "Cheksiz"],
              correct: 2
            }
          ],
      
          9: [
            {
              question: "Sinus nimaga teng?",
              options: ["qarshi/gipotenuza", "yonma/gipotenuza", "qarshi/yonma", "1"],
              correct: 0
            },
            {
              question: "cos 0° nechaga teng?",
              options: ["0", "1", "-1", "0.5"],
              correct: 1
            },
            {
              question: "Tenglama darajasi 3 bo‘lsa?",
              options: ["Chiziqli", "Kvadrat", "Kub", "Logarifmik"],
              correct: 2
            },
            {
              question: "Arifmetik progressiya formulasi?",
              options: ["an=a1+(n-1)d", "an=a1·qⁿ", "S=n/2", "a+b"],
              correct: 0
            },
            {
              question: "Geometrik progressiyada q nima?",
              options: ["Ayirma", "Ko‘paytma", "Maxraj", "Nisbat"],
              correct: 3
            },
            {
              question: "Logarifm asosining sharti?",
              options: ["a>0, a≠1", "a=1", "a<0", "a=0"],
              correct: 0
            },
            {
              question: "log₁₀10 nechaga teng?",
              options: ["0", "1", "10", "100"],
              correct: 1
            },
            {
              question: "Vektor nima?",
              options: ["Faqat son", "Yo‘nalishli kesma", "Burchak", "Yuza"],
              correct: 1
            },
            {
              question: "Skalyar ko‘paytma natijasi?",
              options: ["Vektor", "Son", "Burchak", "Kesma"],
              correct: 1
            },
            {
              question: "Trigonometrik aylana radiusi?",
              options: ["0", "1", "2", "π"],
              correct: 1
            },
            {
              question: "Sin²x + cos²x = ?",
              options: ["0", "1", "2", "x"],
              correct: 1
            },
            {
              question: "Funksiya maksimumi nima?",
              options: ["Eng kichik", "Eng katta qiymat", "0", "Cheksiz"],
              correct: 1
            },
            {
              question: "Statistikada moda nima?",
              options: ["O‘rtacha", "Eng ko‘p uchraydigan", "Yig‘indi", "Farq"],
              correct: 1
            },
            {
              question: "Diskriminant manfiy bo‘lsa?",
              options: ["2 yechim", "1 yechim", "Yechim yo‘q", "Cheksiz"],
              correct: 2
            },
            {
              question: "Tengsizlik belgisi?",
              options: ["=", "≠", "≤ yoki ≥", "+"],
              correct: 2
            }
          ],
      
          10: [
            {
              question: "Limit nimani bildiradi?",
              options: ["Qiymatga yaqinlashish", "To‘xtash", "O‘sish", "Kamayish"],
              correct: 0
            },
            {
              question: "Hosila nimani ko‘rsatadi?",
              options: ["Yuza", "Tezlik", "O‘zgarish tezligi", "Hajm"],
              correct: 2
            },
            {
              question: "(x²)' hosilasi?",
              options: ["x", "2x", "x²", "2"],
              correct: 1
            },
            {
              question: "Integral nimani hisoblaydi?",
              options: ["Tezlik", "Yuza", "Burchak", "Son"],
              correct: 1
            },
            {
              question: "Aniq integral nimani beradi?",
              options: ["Cheksiz", "Oraliqdagi yuza", "Nuqta", "Kesma"],
              correct: 1
            },
            {
              question: "Eksponenta funksiyasi?",
              options: ["y=x²", "y=logx", "y=eˣ", "y=1/x"],
              correct: 2
            },
            {
              question: "Logarifmik funksiya?",
              options: ["y=x", "y=logx", "y=eˣ", "y=x²"],
              correct: 1
            },
            {
              question: "Matritsa nima?",
              options: ["Son", "Jadval", "Funksiya", "Burchak"],
              correct: 1
            },
            {
              question: "Determinant nimaga tegishli?",
              options: ["Vektor", "Matritsa", "Funksiya", "Integral"],
              correct: 1
            },
            {
              question: "Kompleks son?",
              options: ["a+b", "a+bi", "ab", "a/b"],
              correct: 1
            },
            {
              question: "i² nechaga teng?",
              options: ["1", "-1", "i", "0"],
              correct: 1
            },
            {
              question: "Trigonometrik funksiya?",
              options: ["sinx", "x²", "logx", "eˣ"],
              correct: 0
            },
            {
              question: "Funksiya aniqlanish sohasi?",
              options: ["Y", "X", "Qiymatlar", "Grafik"],
              correct: 1
            },
            {
              question: "Funksiya qiymatlar sohasi?",
              options: ["X", "Y", "O‘q", "Nuqta"],
              correct: 1
            },
            {
              question: "Hosilaning geometrik ma’nosi?",
              options: ["Urinma qiyaligi", "Yuza", "Hajm", "Masofa"],
              correct: 0
            }
          ],
      
          11: [
            {
              question: "Integral va hosila qanday?",
              options: ["Bog‘liq", "Aloqasiz", "Bir xil", "Farqsiz"],
              correct: 0
            },
            {
              question: "Aniq integral formulasi kimniki?",
              options: ["Pifagor", "Nyuton–Leybnits", "Arximed", "Gauss"],
              correct: 1
            },
            {
              question: "Ehtimollik 0 dan katta va?",
              options: ["1 dan katta", "1 dan kichik", "Cheksiz", "Manfiy"],
              correct: 1
            },
            {
              question: "Tasodifiy hodisa?",
              options: ["Aniq", "Oldindan noma’lum", "Majburiy", "Doimiy"],
              correct: 1
            },
            {
              question: "Kombinatorika nimani o‘rganadi?",
              options: ["Funksiya", "Joylashishlar", "Integral", "Grafik"],
              correct: 1
            },
            {
              question: "Permutatsiya nima?",
              options: ["Tanlash", "Joylashtirish", "Almashtirish", "Yig‘ish"],
              correct: 2
            },
            {
              question: "Variatsiya nimaga bog‘liq?",
              options: ["Joy", "Tartib", "Son", "Belgi"],
              correct: 1
            },
            {
              question: "Nyuton binomi?",
              options: ["(a+b)ⁿ", "a²+b²", "ab", "a/b"],
              correct: 0
            },
            {
              question: "Cheksiz ketma-ketlik?",
              options: ["Oxiri bor", "Oxiri yo‘q", "Qisqa", "Yopiq"],
              correct: 1
            },
            {
              question: "Konvergent ketma-ketlik?",
              options: ["Uzoqlashadi", "Yaqinlashadi", "O‘zgaradi", "To‘xtaydi"],
              correct: 1
            },
            {
              question: "Divergent ketma-ketlik?",
              options: ["Yig‘iladi", "Tarqaladi", "0 ga teng", "1 ga teng"],
              correct: 1
            },
            {
              question: "Limit mavjud bo‘lsa?",
              options: ["Cheksiz", "Aniq son", "Manfiy", "0"],
              correct: 1
            },
            {
              question: "Integral ostida nimalar bo‘ladi?",
              options: ["Son", "Funksiya", "Vektor", "Burchak"],
              correct: 1
            },
            {
              question: "Matematik analiz nimani o‘rganadi?",
              options: ["Sonlar", "O‘zgarish", "Shakl", "Grafik"],
              correct: 1
            },
            {
              question: "Hosila qayerda qo‘llanadi?",
              options: ["Fizika", "Iqtisod", "Texnika", "Barchasi"],
              correct: 3
            }
        ],
    },
      fizika:{
        5: [
            { question: "Fizika nimani o‘rganadi?", options: ["Tirik organizmlarni", "Tabiat hodisalarini", "Raqamlarni", "Tilni"], correct: 1 },
            { question: "Jism nima?", options: ["Faqat tirik mavjudot", "Moddadan tashkil topgan narsa", "Faqat gaz", "Faq"], correct: 1 },
            { question: "Harakat nima?", options: ["O‘zgarish", "Doimiy holat", "Yashash", "O‘zgarmas"], correct: 0 },
            { question: "Og‘irlik nima?", options: ["Massa", "Gravitatsion kuch", "Hajm", "Yuz"], correct: 1 },
            { question: "Massa birligi?", options: ["kg", "m", "s", "N"], correct: 0 },
            { question: "Tezlik qanday o‘lchanadi?", options: ["m/s", "kg", "N", "s"], correct: 0 },
            { question: "Maksimal tezlik nima?", options: ["0 ga teng", "Eng yuqori tezlik", "O‘rtacha tezlik", "Hech biri"], correct: 1 },
            { question: "Energiya nima?", options: ["Harakat qobiliyati", "Og‘irlik", "Massa", "Bosim"], correct: 0 },
            { question: "Quvvat nima?", options: ["Ish bajarish tezligi", "Og‘irlik", "Harorat", "Tezlik"], correct: 0 },
            { question: "Tortishish kuchi nima?", options: ["Gravitatsion kuch", "Magnit kuch", "Ish kuchi", "Suv bosimi"], correct: 0 },
            { question: "Ishning birligi?", options: ["Joul", "Njuton", "Volt", "Watt"], correct: 0 },
            { question: "1 kg massa 10 m/s² tezlanishda harakat qilsa, kuch qancha?", options: ["10 N", "1 N", "100 N", "5 N"], correct: 0 },
            { question: "O‘zgarish tezligi nima?", options: ["Tezlik", "Akseleratsiya", "Og‘irlik", "Massa"], correct: 1 },
            { question: "Suyuqlik bosimi qaysi formulaga ko‘ra aniqlanadi?", options: ["p=ρgh", "F=ma", "v=s/t", "E=mc²"], correct: 0 },
            { question: "Quvvat birligi?", options: ["Watt", "Joul", "Njuton", "Volt"], correct: 0 }
        ],

        6: [
            { question: "Harakatning birligi nima?", options: ["m", "s", "m/s", "N"], correct: 2 },
            { question: "Og‘irlik kuchi nimaga teng?", options: ["F=ma", "F=mg", "F=mv²/r", "F=Gm1m2/r²"], correct: 1 },
            { question: "Suyuqlik ko‘tarilish qoidasi?", options: ["Arximed qonuni", "Newton qonuni", "Ohm qonuni", "Pifagor teoremasi"], correct: 0 },
            { question: "Tezlik va vaqt o‘zaro qanday bog‘liq?", options: ["v=s/t", "s=v/t", "t=s·v", "v=s·t"], correct: 0 },
            { question: "Jism energiyasi qaysi turlarga bo‘linadi?", options: ["Kinetik va Potensial", "Harorat va Bosim", "Og‘irlik va Hajm", "Massa va Tezlik"], correct: 0 },
            { question: "Kinetik energiya formulasi?", options: ["E=mv²/2", "E=mgh", "F=ma", "P=W/t"], correct: 0 },
            { question: "Potensial energiya formulasi?", options: ["E=mgh", "E=mv²/2", "F=ma", "P=W/t"], correct: 0 },
            { question: "Harorat birligi?", options: ["C°", "K", "F", "Barchasi"], correct: 3 },
            { question: "Elektr toki birligi?", options: ["A", "V", "Ω", "W"], correct: 0 },
            { question: "Ohm qonuni qanday?", options: ["I=U/R", "U=IR", "R=U/I", "Barchasi to‘g‘ri"], correct: 3 },
            { question: "Magnit kuch nima?", options: ["Magnit maydon ta’siri", "Elektr toki", "Og‘irlik", "Tezlik"], correct: 0 },
            { question: "1 N kuch nima qiladi?", options: ["1 kg massani 1 m/s² tezlanishga keltiradi", "1 J ish bajaradi", "1 kg massani 1 m tezlatadi", "1 kg massa harakat qilmaydi"], correct: 0 },
            { question: "Quvvat formulasi?", options: ["P=W/t", "E=mc²", "F=ma", "v=s/t"], correct: 0 },
            { question: "Suyuqlik bosimi formula?", options: ["p=ρgh", "F=ma", "v=s/t", "E=mc²"], correct: 0 },
            { question: "Issiqlik qanday o‘lchanadi?", options: ["Joul", "Watt", "Newton", "Volt"], correct: 0 }
        ],

        7: [
            { question: "Harakatning tezlanishi nima?", options: ["v=s/t", "a=Δv/Δt", "F=ma", "E=mgh"], correct: 1 },
            { question: "Gravitatsiya tezlanishi qancha?", options: ["9.8 m/s²", "10 m/s²", "9 m/s²", "8 m/s²"], correct: 0 },
            { question: "Energiya saqlanish qonuni nimani bildiradi?", options: ["Energiya yo‘qoladi", "Energiya ko‘payadi", "Energiya saqlanadi", "Harakat to‘xtaydi"], correct: 2 },
            { question: "Ideal gaz qonuni?", options: ["pV=nRT", "F=ma", "v=s/t", "E=mc²"], correct: 0 },
            { question: "Ish formulasi?", options: ["W=F·s", "P=W/t", "E=mgh", "F=ma"], correct: 0 },
            { question: "Quvvatning geometrik ma’nosi?", options: ["Ish tezligi", "Harakat tezligi", "Tezlik", "Bosim"], correct: 0 },
            { question: "Suyuqlikning zichligi nima?", options: ["ρ=m/V", "V=m/ρ", "m=ρ/V", "F=ma"], correct: 0 },
            { question: "Bosim birligi?", options: ["Pa", "N", "J", "W"], correct: 0 },
            { question: "Qancha tezlikda jism 2 s ichida 10 m yo‘l yuradi?", options: ["5 m/s", "10 m/s", "2 m/s", "20 m/s"], correct: 0 },
            { question: "Suyuqlikdagi ko‘tarilish kuchi?", options: ["F=ρgV", "F=ma", "E=mc²", "v=s/t"], correct: 0 },
            { question: "Magnit induksiya birligi?", options: ["T", "A", "V", "Ω"], correct: 0 },
            { question: "Elektr zaryadi birligi?", options: ["Coulomb", "Volt", "Ampere", "Ohm"], correct: 0 },
            { question: "Ohm qonuni?", options: ["U=IR", "I=U/R", "R=U/I", "Barchasi"], correct: 3 },
            { question: "1 J ish nima qiladi?", options: ["1 N kuch bilan 1 m harakat", "1 kg massa", "1 N kuch bilan 1 s", "1 W quvvat"], correct: 0 },
            { question: "Bosim va kuch o‘rtasidagi bog‘lanish?", options: ["p=F/S", "F=pS", "S=F/p", "Barchasi"], correct: 3 }
        ],

        8: [
            { question: "Energiya saqlanish qonuni nima?", options: ["Faol energiya kamayadi", "Energiya doimo saqlanadi", "Harakat to‘xtaydi", "Harorat oshadi"], correct: 1 },
            { question: "Isitish jarayoni nimaga bog‘liq?", options: ["Massa, harorat, issiqlik sig‘imi", "Og‘irlik", "Tezlik", "Bosim"], correct: 0 },
            { question: "Qattiq jismlarda elastiklik nima?", options: ["Deformatsiya va tiklanish qobiliyati", "Og‘irlik", "Tezlik", "Ish"], correct: 0 },
            { question: "Ish formulasi?", options: ["W=F·s·cosθ", "P=W/t", "E=mgh", "F=ma"], correct: 0 },
            { question: "Quvvat formulasi?", options: ["P=W/t", "F=ma", "E=mc²", "v=s/t"], correct: 0 },
            { question: "Suyuqlik bosimi qoidasi?", options: ["p=ρgh", "F=ma", "v=s/t", "E=mc²"], correct: 0 },
            { question: "O‘zgarish tezligi nima?", options: ["a=Δv/Δt", "v=s/t", "F=ma", "E=mgh"], correct: 0 },
            { question: "Gravitatsiya kuchi formulasi?", options: ["F=Gm1m2/r²", "F=ma", "E=mgh", "v=s/t"], correct: 0 },
            { question: "Energiya turlari?", options: ["Kinetik, potensial, issiqlik", "Bosim va harorat", "Massa va tezlik", "Tezlik"], correct: 0 },
            { question: "Ideal gaz qonuni?", options: ["pV=nRT", "F=ma", "v=s/t", "E=mc²"], correct: 0 },
            { question: "Ish birligi?", options: ["Joul", "N", "Pa", "Watt"], correct: 0 },
            { question: "Quvvat birligi?", options: ["Watt", "Joul", "Volt", "Njuton"], correct: 0 },
            { question: "Tezlik birligi?", options: ["m/s", "m", "s", "N"], correct: 0 },
            { question: "Og‘irlik birligi?", options: ["N", "kg", "m", "s"], correct: 0 },
            { question: "Massa birligi?", options: ["kg", "g", "m", "N"], correct: 0 }
        ],

        9: [
            { question: "Tezlanish formulasi?", options: ["a=Δv/Δt", "v=s/t", "F=ma", "E=mgh"], correct: 0 },
            { question: "Newtonning birinchi qonuni?", options: ["Inersiya qonuni", "Harakat qonuni", "Harakat saqlanish", "Quvvat qonuni"], correct: 0 },
            { question: "Newtonning ikkinchi qonuni?", options: ["F=ma", "v=s/t", "E=mgh", "P=W/t"], correct: 0 },
            { question: "Newtonning uchinchi qonuni?", options: ["Harakat va qarama-qarshi reaktsiya", "F=ma", "a=Δv/Δt", "v=s/t"], correct: 0 },
            { question: "Og‘irlik tezlanishi?", options: ["g=9.8 m/s²", "10 m/s²", "8 m/s²", "9 m/s²"], correct: 0 },
            { question: "Kinetik energiya formulasi?", options: ["E=mv²/2", "E=mgh", "F=ma", "P=W/t"], correct: 0 },
            { question: "Potensial energiya formulasi?", options: ["E=mgh", "E=mv²/2", "F=ma", "P=W/t"], correct: 0 },
            { question: "Quvvat formulasi?", options: ["P=W/t", "F=ma", "v=s/t", "E=mgh"], correct: 0 },
            { question: "Suyuqlik bosimi formulasi?", options: ["p=ρgh", "F=ma", "v=s/t", "E=mc²"], correct: 0 },
            { question: "1 J ish nima qiladi?", options: ["1 N kuch bilan 1 m harakat", "1 kg massa", "1 N kuch bilan 1 s", "1 W quvvat"], correct: 0 },
            { question: "Magnit induksiya birligi?", options: ["T", "A", "V", "Ω"], correct: 0 },
            { question: "Elektr zaryadi birligi?", options: ["Coulomb", "Volt", "Ampere", "Ohm"], correct: 0 },
            { question: "Ohm qonuni?", options: ["U=IR", "I=U/R", "R=U/I", "Barchasi"], correct: 3 },
            { question: "Bosim birligi?", options: ["Pa", "N", "J", "W"], correct: 0 },
            { question: "Zichlik formulasi?", options: ["ρ=m/V", "V=m/ρ", "m=ρ/V", "F=ma"], correct: 0 }
        ],

        10: [
            { question: "Hosila nima?", options: ["O‘zgarish tezligi", "Tezlik", "Bosim", "Massa"], correct: 0 },
            { question: "Limit nima?", options: ["Qiymatga yaqinlashish", "To‘xtash", "O‘sish", "Kamayish"], correct: 0 },
            { question: "Integral nima?", options: ["Yuza hisoblash", "Ish", "Kuch", "Tezlik"], correct: 0 },
            { question: "Eksponenta funksiyasi?", options: ["y=eˣ", "y=x²", "y=logx", "y=1/x"], correct: 0 },
            { question: "Logarifmik funksiya?", options: ["y=logx", "y=x²", "y=eˣ", "y=x"], correct: 0 },
            { question: "Kompleks son?", options: ["a+bi", "a+b", "ab", "a/b"], correct: 0 },
            { question: "i² nechaga teng?", options: ["-1", "1", "i", "0"], correct: 0 },
            { question: "Trigonometriya: sin²x + cos²x = ?", options: ["1", "0", "2", "x"], correct: 0 },
            { question: "Funksiya qiymatlar sohasi?", options: ["Y", "X", "O‘q", "Nuqta"], correct: 0 },
            { question: "Funksiya aniqlanish sohasi?", options: ["X", "Y", "Qiymatlar", "Grafik"], correct: 0 },
            { question: "Hosilaning geometrik ma’nosi?", options: ["Urinma qiyaligi", "Yuza", "Hajm", "Masofa"], correct: 0 },
            { question: "Matritsa nima?", options: ["Jadval", "Son", "Funksiya", "Burchak"], correct: 0 },
            { question: "Determinant nimaga tegishli?", options: ["Matritsa", "Vektor", "Funksiya", "Integral"], correct: 0 },
            { question: "Hosila qayerda qo‘llanadi?", options: ["Barchasi", "Fizika", "Iqtisod", "Texnika"], correct: 0 },
            { question: "Matematik analiz nimani o‘rganadi?", options: ["O‘zgarish", "Sonlar", "Shakl", "Grafik"], correct: 0 }
        ],

        11: [
            { question: "Integral va hosila qanday?", options: ["Bog‘liq", "Aloqasiz", "Bir xil", "Farqsiz"], correct: 0 },
            { question: "Aniq integral formulasi kimniki?", options: ["Nyuton–Leybnits", "Pifagor", "Arximed", "Gauss"], correct: 0 },
            { question: "Ehtimollik 0 dan katta va?", options: ["1 dan kichik", "1 dan katta", "Cheksiz", "Manfiy"], correct: 0 },
            { question: "Tasodifiy hodisa nima?", options: ["Oldindan noma’lum", "Aniq", "Majburiy", "Doimiy"], correct: 0 },
            { question: "Kombinatorika nimani o‘rganadi?", options: ["Joylashishlar", "Funksiya", "Integral", "Grafik"], correct: 0 },
            { question: "Permutatsiya nima?", options: ["Almashtirish", "Tanlash", "Joylashtirish", "Yig‘ish"], correct: 0 },
            { question: "Variatsiya nimaga bog‘liq?", options: ["Tartib", "Joy", "Son", "Belgi"], correct: 0 },
            { question: "Nyuton binomi?", options: ["(a+b)ⁿ", "a²+b²", "ab", "a/b"], correct: 0 },
            { question: "Cheksiz ketma-ketlik?", options: ["Oxiri yo‘q", "Oxiri bor", "Qisqa", "Yopiq"], correct: 0 },
            { question: "Konvergent ketma-ketlik?", options: ["Yaqinlashadi", "Uzoqlashadi", "O‘zgaradi", "To‘xtaydi"], correct: 0 },
            { question: "Divergent ketma-ketlik?", options: ["Tarqaladi", "Yig‘iladi", "0 ga teng", "1 ga teng"], correct: 0 },
            { question: "Limit mavjud bo‘lsa?", options: ["Aniq son", "Cheksiz", "Manfiy", "0"], correct: 0 },
            { question: "Integral ostida nimalar bo‘ladi?", options: ["Funksiya", "Son", "Vektor", "Burchak"], correct: 0 },
            { question: "Hosila nima?", options: ["O‘zgarish tezligi", "Tezlik", "Bosim", "Massa"], correct: 0 },
            { question: "Funksiya maksimumi nima?", options: ["Eng katta qiymat", "Eng kichik", "0", "Cheksiz"], correct: 0 }
        ]
    },
      kimyo:{
        5: [
            { question: "Kimyo nimani o‘rganadi?", options: ["Tirik organizmlar", "Moddalarni va ularning o‘zgarishlarini", "Sayyoralarni", "Energiya"], correct: 1 },
            { question: "Atom nima?", options: ["Eng kichik kimyoviy zarracha", "Molekula", "Jism", "Elektron"], correct: 0 },
            { question: "Element nima?", options: ["Bir turdagi atomlar to‘plami", "Aralashma", "Zarrachalar", "Kuch"], correct: 0 },
            { question: "Molekula nima?", options: ["Bir nechta atomlar birlashganda hosil bo‘ladi", "Bir atom", "Zarrachalar", "Yuzaga ta’sir"], correct: 0 },
            { question: "Vodorod atom raqami?", options: ["1", "2", "8", "12"], correct: 0 },
            { question: "Oksid nima?", options: ["Oksigen bilan birlashgan birikma", "Vodorod birikmasi", "Molekula", "Element"], correct: 0 },
            { question: "Kimyoviy reaksiyada nimadir o‘zgaradi?", options: ["Modda", "Tezlik", "Massa", "Bosim"], correct: 0 },
            { question: "Asoslar nima?", options: ["pH>7 bo‘lgan eritmalar", "pH<7 bo‘lgan eritmalar", "pH=7", "Barchasi"], correct: 0 },
            { question: "Kislota nima?", options: ["pH<7 bo‘lgan eritmalar", "pH>7", "pH=7", "Barchasi"], correct: 0 },
            { question: "pH 7 nima?", options: ["Neytral eritma", "Kislota", "Asos", "Barchasi"], correct: 0 },
            { question: "Kimyoviy birikma nima?", options: ["Bir nechta element atomlaridan tashkil topgan modda", "Atom", "Molekula emas", "Yog‘"], correct: 0 },
            { question: "Qaysi element metall?", options: ["Temir", "Vodorod", "Oksigen", "Azot"], correct: 0 },
            { question: "Qaysi element gaz?", options: ["Kislorod", "Temir", "Sulfat", "Nikel"], correct: 0 },
            { question: "Kimyoviy formulada H2O nimani bildiradi?", options: ["Suv", "Vodorod", "Kislorod", "Karbon dioksid"], correct: 0 },
            { question: "Karbon dioksid kimyoviy formulasi?", options: ["CO2", "CO", "C2O", "CH4"], correct: 0 }
        ],

        6: [
            { question: "Atomning yadrosi nimadan tashkil topgan?", options: ["Proton va neytron", "Elektron", "Molekula", "Element"], correct: 0 },
            { question: "Elektron zaryadi qanday?", options: ["Manfiy", "Musbat", "Neytral", "Barchasi"], correct: 0 },
            { question: "Proton zaryadi qanday?", options: ["Musbat", "Manfiy", "Neytral", "Barchasi"], correct: 0 },
            { question: "Neytron zaryadi qanday?", options: ["Neytral", "Manfiy", "Musbat", "Barchasi"], correct: 0 },
            { question: "Elementlar davriy jadvalini kim yaratgan?", options: ["Dmitriy Mendeliev", "Nyuton", "Dalton", "Avogadro"], correct: 0 },
            { question: "Atom raqami nima?", options: ["Protonlar soni", "Elektronlar soni", "Neytronlar soni", "Molekulalar soni"], correct: 0 },
            { question: "Mol nima?", options: ["6.022·10²³ zarracha", "Atom", "Molekula", "Gram"], correct: 0 },
            { question: "Kuchli kislota misoli?", options: ["HCl", "H2O", "NaOH", "O2"], correct: 0 },
            { question: "Asos misoli?", options: ["NaOH", "HCl", "CO2", "H2O"], correct: 0 },
            { question: "Oksidlar kim bilan hosil bo‘ladi?", options: ["Oksigen bilan birlashganda", "Vodorod bilan", "Azot bilan", "Suv bilan"], correct: 0 },
            { question: "Karbonat kislota formulasi?", options: ["H2CO3", "HCl", "H2SO4", "NaOH"], correct: 0 },
            { question: "Redoks reaksiyasi nima?", options: ["Oksidlanish va kamayish reaksiyasi", "Kislota", "Asos", "Suv bilan reaksiya"], correct: 0 },
            { question: "Endotermik reaksiya nima?", options: ["Issiqlik oladi", "Issiqlik beradi", "Teng haroratda", "Soviydi"], correct: 0 },
            { question: "Ekzotermik reaksiya nima?", options: ["Issiqlik beradi", "Issiqlik oladi", "Soviydi", "Hech narsa"], correct: 0 },
            { question: "Molekulalarda atomlar qanday bog‘lanadi?", options: ["Kimyoviy bog‘lanish orqali", "Mavhum", "Maqsad bilan", "Fizik ta’sir bilan"], correct: 0 }
        ],

        7: [
            { question: "Atom massasini kim kashf qilgan?", options: ["Dalton", "Avogadro", "Mendeliev", "Nyuton"], correct: 0 },
            { question: "Kuchli baza misoli?", options: ["KOH", "HCl", "H2SO4", "CO2"], correct: 0 },
            { question: "Suv elektrolizi nima?", options: ["H2 va O2 ajraladi", "CO2 hosil bo‘ladi", "NaCl hosil bo‘ladi", "Barchasi"], correct: 0 },
            { question: "Gazlar qattiqdan qanday farqlanadi?", options: ["Shakl va hajmi o‘zgaradi", "Og‘irlik bir xil", "Rang bir xil", "Barchasi"], correct: 0 },
            { question: "Molekula massasini qanday hisoblaymiz?", options: ["Atom massalari yig‘indisi", "Atom raqami", "Elektron soni", "pH bilan"], correct: 0 },
            { question: "Metall misoli?", options: ["Temir", "Vodorod", "Kislorod", "Azot"], correct: 0 },
            { question: "Gaz misoli?", options: ["Kislorod", "Temir", "Sulfat", "Nikel"], correct: 0 },
            { question: "Tuz nima?", options: ["Kislota va baza reaksiyasi mahsuli", "Atom", "Molekula", "Vodorod"], correct: 0 },
            { question: "pH<7 nima?", options: ["Kislota", "Asos", "Neytral", "Barchasi"], correct: 0 },
            { question: "pH>7 nima?", options: ["Asos", "Kislota", "Neytral", "Barchasi"], correct: 0 },
            { question: "Atom yadrosidagi zaryad nima?", options: ["Musbat", "Manfiy", "Neytral", "Barchasi"], correct: 0 },
            { question: "Elektron buluti nima?", options: ["Atomning elektronlari joylashgan qismi", "Yadro", "Molekula", "Kislota"], correct: 0 },
            { question: "Isotop nima?", options: ["Protonlari bir xil, neytronlari turlicha atomlar", "Atom", "Molekula", "Zarrachalar"], correct: 0 },
            { question: "Kimyoviy element belgisi?", options: ["H, O, C", "1,2,3", "m, s, t", "Barchasi"], correct: 0 },
            { question: "Mol massa birligi?", options: ["g/mol", "kg", "m", "s"], correct: 0 }
        ],
          8: [
          { question: "Atom nima?", options: ["Moddaning eng kichik qismi", "Gaz", "Yagona molekula", "Elektromagnit nurlanish"], correct: 0 },
          { question: "Elementlar qaysi belgilar bilan ifodalanadi?", options: ["Harflar", "Raqamlar", "Simvollar", "Ranglar"], correct: 2 },
          { question: "H₂O nimadan tashkil topgan?", options: ["1 vodorod, 2 kislorod", "2 vodorod, 1 kislorod", "2 kislorod, 1 vodorod", "2 vodorod, 2 kislorod"], correct: 1 },
          { question: "Metallar qaysi xususiyatga ega?", options: ["Elektrni o'tkazadi", "Yog'och kabi", "Qaynatilmaydi", "Gaz holatda"], correct: 0 },
          { question: "Qaysi gaz yonmaydi?", options: ["Oksigen", "Azot", "Vodrod", "Metan"], correct: 1 },
          { question: "Kation nima?", options: ["Musbat zaryadli ion", "Manfiy zaryadli ion", "Neutro ion", "Atom yadrosi"], correct: 0 },
          { question: "Anion nima?", options: ["Musbat zaryadli ion", "Manfiy zaryadli ion", "Neutro atom", "Elektron"], correct: 1 },
          { question: "Periodik jadvalni kim tuzgan?", options: ["Dmitriy Mendelov", "Nyuton", "Einstein", "Dalton"], correct: 0 },
          { question: "Oksid nima?", options: ["Oksigen bilan birikkan modda", "Vodorod bilan birikkan modda", "Metall", "Gaz"], correct: 0 },
          { question: "Asid nima?", options: ["H⁺ ion beruvchi", "OH⁻ ion beruvchi", "Gaz", "Modda"], correct: 0 },
          { question: "Asid va baza reaksiyasida nima hosil bo‘ladi?", options: ["Tuz va suv", "Gaz", "Metall", "Yog'och"], correct: 0 },
          { question: "Vodorodning atom raqami nechchi?", options: ["1", "2", "8", "10"], correct: 0 },
          { question: "Kislotalar qaysi rangda indikatorni o‘zgartiradi?", options: ["Qizil", "Ko‘k", "Yashil", "Sariq"], correct: 0 },
          { question: "Gaz holatidagi suv nimaga aylanishi mumkin?", options: ["Suyuqlikka", "Qurib ketadi", "Gazga", "Metallga"], correct: 0 },
          { question: "Molekula nima?", options: ["Atomlar birikmasi", "Atom yadrosi", "Ion", "Gaz"], correct: 0 }
        ],

        9: [
          { question: "Kimyoviy birikma nima?", options: ["Ikki yoki undan ortiq element birikmasi", "Atom", "Gaz", "Metall"], correct: 0 },
          { question: "Kovalent bog‘ nima?", options: ["Elektronlar ulashish", "Ionlar almashish", "Metall bog‘", "Gaz bog‘"], correct: 0 },
          { question: "Ion bog‘ nima?", options: ["Musbat va manfiy ionlar tortishi", "Elektron almashish", "Gaz hosil bo‘lish", "Suyuqlik"], correct: 0 },
          { question: "Qaysi gaz yonuvchan?", options: ["Metan", "Azot", "Kislorod", "Karbonat"], correct: 0 },
          { question: "pH 7 nima?", options: ["Neutro", "Asid", "Baza", "Gaz"], correct: 0 },
          { question: "Atom massasini qanday o‘lchashadi?", options: ["Unitlarda", "Kg", "Gram", "Litr"], correct: 0 },
          { question: "Elektron qayerda joylashadi?", options: ["Atom orbitalida", "Yadroda", "Katta metallda", "Suyuqlikda"], correct: 0 },
          { question: "Kislorodning molekulyar formulasi?", options: ["O₂", "O", "H₂O", "CO₂"], correct: 0 },
          { question: "Vodorodning fizik xossalari?", options: ["Gaz, eng yengil", "Qattiq", "Suyuqlik", "Metall"], correct: 0 },
          { question: "Metallar qattiqligi nimaga bog‘liq?", options: ["Atomlararo bog‘lanishga", "Gaz", "Suyuqlikka", "Ionlar soniga"], correct: 0 },
          { question: "Atomning yadrosi nimadan tashkil topgan?", options: ["Proton va neytron", "Elektron", "Gaz", "Metall"], correct: 0 },
          { question: "Kimyoviy reaksiya nima?", options: ["Moddalar o‘zgaradi", "Gaz hosil bo‘ladi", "Metall paydo bo‘ladi", "Hech narsa"], correct: 0 },
          { question: "Kislotali moddada indikator qaysi rangga o‘tadi?", options: ["Qizil", "Ko‘k", "Yashil", "Sariq"], correct: 0 },
          { question: "Alkanlar formulasi?", options: ["CnH2n+2", "CnH2n", "CnH2n-2", "CnHn"], correct: 0 },
          { question: "Benzol formulasi?", options: ["C6H6", "C2H6", "CH4", "C2H2"], correct: 0 }
        ],

        10: [
          { question: "Oksidlanish nima?", options: ["Elektron yo‘qotish", "Elektron olish", "Gaz chiqarish", "Suyuqlik hosil qilish"], correct: 0 },
          { question: "Reduksiya nima?", options: ["Elektron olish", "Elektron yo‘qotish", "Gaz hosil qilish", "Yog‘och olish"], correct: 0 },
          { question: "Qaysi moddalar aralashmasi?", options: ["Gaz, suyuqlik yoki qattiq", "Atom", "Molekula", "Ion"], correct: 0 },
          { question: "Asosiy metall xossalari?", options: ["Elektr o‘tkazadi", "Gaz hosil qiladi", "Suyuqlik", "Atom"], correct: 0 },
          { question: "Alkohol formulasi?", options: ["CnH2n+1OH", "CnH2n", "CnHn", "C6H6"], correct: 0 },
          { question: "Molekulyar massa nima?", options: ["Barcha atom massalar yig‘indisi", "Atom raqami", "Gaz soni", "Metall massas"], correct: 0 },
          { question: "Isomer nima?", options: ["Tuzilishi bir xil, xossalari turlicha", "Atom", "Molekula", "Ion"], correct: 0 },
          { question: "Kimyoviy tenglama nimani ko‘rsatadi?", options: ["Reaksiyani belgilar bilan", "Atom", "Metall", "Gaz"], correct: 0 },
          { question: "Qayta reaksiyalar nima?", options: ["Orqaga qaytadi", "Faqat oldinga", "Atomlar yo‘qoladi", "Gaz hosil bo‘ladi"], correct: 0 },
          { question: "Katalizator nima?", options: ["Reaksiyani tezlashtiradi", "Elektron beradi", "Gaz chiqaradi", "Suyuqlik hosil qiladi"], correct: 0 },
          { question: "Atom raqami nimani bildiradi?", options: ["Protonlar soni", "Neytron", "Elektron", "Gaz"], correct: 0 },
          { question: "Ionlash nima?", options: ["Ion hosil qilish", "Atom yaratish", "Molekula", "Gaz"], correct: 0 },
          { question: "pH < 7 nima?", options: ["Asid", "Baza", "Neutro", "Gaz"], correct: 0 },
          { question: "pH > 7 nima?", options: ["Baza", "Asid", "Neutro", "Gaz"], correct: 0 },
          { question: "Qaysi gaz yonuvchan?", options: ["Vodrod", "Azot", "Kislorod", "CO₂"], correct: 0 }
        ],

        11: [
          { question: "Organik kimyo nimani o‘rganadi?", options: ["Uglevodorodlar va birikmalari", "Metallar", "Gazlar", "Ionlar"], correct: 0 },
          { question: "Anorganik kimyo nimani o‘rganadi?", options: ["Metallar, minerallar", "Uglevodorodlar", "Gazlar", "Suyuqliklar"], correct: 0 },
          { question: "Alkinlar formulasi?", options: ["CnH2n-2", "CnH2n+2", "CnH2n", "C6H6"], correct: 0 },
          { question: "Benzolni shakli?", options: ["Heksagon", "Kvadrat", "Uchburchak", "Doira"], correct: 0 },
          { question: "Aldehidlar formulasi?", options: ["R-CHO", "R-OH", "R-COOH", "R-CH3"], correct: 0 },
          { question: "Ketonlar formulasi?", options: ["RCOR'", "R-CHO", "R-OH", "R-COOH"], correct: 0 },
          { question: "Karbonatlar nimadan iborat?", options: ["CO₃²⁻", "O₂²⁻", "OH⁻", "H⁺"], correct: 0 },
          { question: "Redoks reaksiya nimani o‘z ichiga oladi?", options: ["Oksidlanish va reduksiya", "Gaz chiqarish", "Suyuqlik hosil qilish", "Ionlar hosil qilish"], correct: 0 },
          { question: "Kimyoviy element nimani bildiradi?", options: ["Bir turdagi atomlar", "Molekula", "Gaz", "Suyuqlik"], correct: 0 },
          { question: "Polimer nima?", options: ["Ko‘p takrorlanuvchi molekula", "Atom", "Gaz", "Ion"], correct: 0 },
          { question: "Isomer nima?", options: ["Shakli yoki tuzilishi boshqa, formulasi bir xil", "Atom", "Gaz", "Suyuqlik"], correct: 0 },
          { question: "Kislota formulasi?", options: ["H⁺", "OH⁻", "CO₃²⁻", "O₂"], correct: 0 },
          { question: "Baza formulasi?", options: ["OH⁻", "H⁺", "CO₃²⁻", "O₂"], correct: 0 },
          { question: "Oxidlanish darajasi nimani bildiradi?", options: ["Atom elektron holatini", "Atom massasini", "Gaz miqdorini", "Suyuqlik massasini"], correct: 0 },
          { question: "Reaksiya tezligini nima oshiradi?", options: ["Katalizator", "Gaz", "Suyuqlik", "Metall"], correct: 0 }
        ]
    },
         tarix:{
      5: [
        { question: "O‘zbekiston qaysi qit’ada joylashgan?", options: ["Evropa", "Osiyo", "Afrika", "Avstraliya"], correct: 1 },
        { question: "Qadimgi odam nima bilan oziqlangan?", options: ["Don", "Go‘sht va meva", "Shokolad", "Sho‘rva"], correct: 1 },
        { question: "Qadimgi odam uyini nima bilan qurgan?", options: ["Tosh va g‘isht", "Tuproq va yog‘", "Temir", "Shisha"], correct: 1 },
        { question: "Odamlar qachon dehqonchilikni boshlagan?", options: ["Qadimgi davrda", "O‘rta asrda", "Hozirgi davrda", "Temuriylar davrida"], correct: 0 },
        { question: "Qadimgi odamlar qanday asboblar ishlatgan?", options: ["Tosh va yog‘", "Temir va po‘lat", "Shisha", "Plastik"], correct: 0 },
        { question: "Qadimgi odam nima bilan ov qilgan?", options: ["Ot va mushuk", "Asboblar bilan", "Temir qurol", "Qalam bilan"], correct: 1 },
        { question: "O‘zbekiston qadimgi davrlarda qanday davlatlar bo‘lgan?", options: ["Samarqand, Buxoro", "Toshkent, Namangan", "Moskva, Sankt-Peterburg", "Parij, London"], correct: 0 },
        { question: "Odamlar qachon hunarmandchilikni boshlagan?", options: ["Qadimgi davrda", "O‘rta asrda", "Temuriylar davrida", "Hozirgi davrda"], correct: 0 },
        { question: "Odamlar qadimgi davrda nima bilan kiyinishgan?", options: ["Paxta va jun", "Sintetik mato", "Shisha", "Temir"], correct: 0 },
        { question: "Odamlar qachon temir qurol ishlata boshlagan?", options: ["Temir davrida", "Tosh davrida", "Bronza davrida", "Hozirgi davrda"], correct: 0 },
        { question: "Qadimgi odamlar qanday transport vositalaridan foydalangan?", options: ["Hayvonlar va qo‘l aravalari", "Avtomobil", "Po‘lat qayiqlar", "Dron"], correct: 0 },
        { question: "Qadimgi odamlar nima bilan yozgan?", options: ["Tosh va sopol", "Qog‘oz va ruchka", "Kompyuter", "Shisha"], correct: 0 },
        { question: "Qadimgi odamlar nima bilan oziqlanishni boshlagan?", options: ["Dehqonchilik va chorvachilik", "Shokolad", "Temir", "Avtomobil"], correct: 0 },
        { question: "O‘zbekiston qadimgi davrda qanday madaniyat markazi bo‘lgan?", options: ["Samarqand va Buxoro", "Toshkent va Namangan", "Moskva va Sankt-Peterburg", "London va Parij"], correct: 0 },
        { question: "Qadimgi odamlar qayerda yashagan?", options: ["G‘orlar va uylar", "Shaharlar", "O‘rmonlar", "Daryo bo‘yida"], correct: 0 }
      ],
  
      6: [
        { question: "Qadimgi Yunoniston kimlar tomonidan tashkil topgan?", options: ["Yunonlar", "Rimliklar", "Mesopotamiyaliklar", "Misrliklar"], correct: 0 },
        { question: "Rim imperiyasi qachon tashkil topgan?", options: ["Miloddan avval 27", "Miloddan avval 500", "Milod 100", "Miloddan avval 1000"], correct: 0 },
        { question: "O‘rta asrlar davri necha asrlarni qamrab oladi?", options: ["5–15", "1–5", "15–20", "20–25"], correct: 0 },
        { question: "Buyuk geografik kashfiyotlar qachon boshlandi?", options: ["15-asr", "14-asr", "13-asr", "16-asr"], correct: 0 },
        { question: "Marco Polo qaysi mamlakatga sayohat qilgan?", options: ["Xitoy", "Hindiston", "Misr", "Italiya"], correct: 0 },
        { question: "Temuriylar davri qaysi hududni qamrab olgan?", options: ["Markaziy Osiyo", "Evropa", "Afrika", "Shimoliy Amerika"], correct: 0 },
        { question: "Buxoro xonligi qachon mustahkam bo‘lgan?", options: ["16-asr", "15-asr", "17-asr", "18-asr"], correct: 0 },
        { question: "Xiva xonligi qaysi asrda tashkil topgan?", options: ["16-asr", "15-asr", "17-asr", "18-asr"], correct: 0 },
        { question: "Buyuk Ipak yo‘li qayerdan o‘tgan?", options: ["Xitoydan Yevropaga", "Hindistondan Yevropaga", "Misrdan Osiyoga", "Italiyadan Xitoyga"], correct: 0 },
        { question: "O‘rta asrlar Evropada qanday davlat shakllangan?", options: ["Feodal monarxiya", "Demokratiya", "Imperiya", "Shahzoda davlati"], correct: 0 },
        { question: "Renessans nima?", options: ["Yevropada madaniyat uyg‘onishi", "Qadimgi Usmoniy davri", "Samarqand davri", "Buyuk ixtirolar davri"], correct: 0 },
        { question: "Islom dini qachon Markaziy Osiyoga kirib kelgan?", options: ["7-asr", "6-asr", "8-asr", "9-asr"], correct: 0 },
        { question: "Bobur qaysi davlatni asos solgan?", options: ["Hindiston", "O‘zbekiston", "Xiva", "Buxoro"], correct: 0 },
        { question: "Qadimgi Rimda senat nima vazifasi bo‘lgan?", options: ["Davlat boshqaruvi", "Harbiy ishlar", "Savdo", "Qishloq xo‘jaligi"], correct: 0 },
        { question: "Qadimgi Misrda piramidalar nima uchun qurilgan?", options: ["Fir’avnlar qabri", "Sakrab tushish", "Savdo markazi", "Madaniyat markazi"], correct: 0 }
      ],
  
      7: [
        { question: "O‘rta Osiyo davlatlarining qadimgi poytaxti qaysi?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 },
        { question: "Islom olimi Al-Xorazmiy qaysi fan bilan mashhur?", options: ["Matematika", "Tarix", "Biologiya", "Fizika"], correct: 0 },
        { question: "Buyuk Ipak yo‘li savdo qiluvchi qaysi davlatlar o‘rtasida bo‘lgan?", options: ["Xitoy va Yevropa", "Hindiston va Afrika", "Evropa va Amerika", "Misr va Hindiston"], correct: 0 },
        { question: "Qaysi davlat Temuriylar davrida poytaxt bo‘lgan?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 },
        { question: "Buxoro xonligi poytaxti qaysi shahar?", options: ["Buxoro", "Samarqand", "Xiva", "Toshkent"], correct: 0 },
        { question: "Xiva xonligi poytaxti qaysi shahar?", options: ["Xiva", "Buxoro", "Samarqand", "Toshkent"], correct: 0 },
        { question: "Temuriylar davrida san’at va madaniyat qaysi shaharda rivojlangan?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 },
        { question: "Marco Polo sayohati qachon bo‘lgan?", options: ["13-asr", "12-asr", "14-asr", "15-asr"], correct: 0 },
        { question: "Qaysi shahar buyuk hunarmandchilik markazi bo‘lgan?", options: ["Buxoro", "Samarqand", "Xiva", "Toshkent"], correct: 0 },
        { question: "O‘rta asrlar Yevropasida qaysi din keng tarqalgan?", options: ["Xristianlik", "Islom", "Buddizm", "Hinduyizm"], correct: 0 },
        { question: "Renessans davri qaysi sohalarda uyg‘onish bo‘lgan?", options: ["San’at va fan", "Qishloq xo‘jaligi", "Harbiy", "Savdo"], correct: 0 },
        { question: "Temuriylar davrida mashhur qurilish asarlari qaysi shahar?", options: ["Samarqand", "Buxoro", "Xiva", "Toshkent"], correct: 0 },
        { question: "Qaysi davlat Buyuk Ipak yo‘lida strategik o‘rin tutgan?", options: ["O‘zbekiston hududi", "Misr", "Hindiston", "Italiya"], correct: 0 },
        { question: "Xorazmshohlar davri qaysi hududni boshqaragan?", options: ["Xorazm va Atropatena", "Misr va Hindiston", "Evropa va Osiyo", "Sibir"], correct: 0 },
        { question: "Qadimgi Rimda Kolizey nima uchun qurilgan?", options: ["Kurash va o‘yinlar", "Savdo", "Shahar markazi", "Qishloq xo‘jaligi"], correct: 0 }
      ],
  
      8: [
        { question: "Temuriylar davrida qaysi shahar poytaxt bo‘lgan?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 },
        { question: "Amir Temur nechanchi asrda yashagan?", options: ["14–15-asr", "13–14-asr", "15–16-asr", "16–17-asr"], correct: 0 },
        { question: "Qadimgi Sharqdagi buyuk imperiyalar qaysilar?", options: ["Xitoy, Hindiston, Fors", "Misr, Gretsiya", "Italiya, Fransiya", "Evropa"], correct: 0 },
        { question: "Islom dini qachon Markaziy Osiyoga kirib kelgan?", options: ["7-asr", "6-asr", "8-asr", "9-asr"], correct: 0 },
        { question: "Bobur Hindistonga qachon bostirib kirgan?", options: ["1526", "1500", "1600", "1550"], correct: 0 },
        { question: "Xorazmshohlar davri qaysi hududni boshqaradi?", options: ["Xorazm va Atropatena", "Misr va Hindiston", "Evropa va Osiyo", "Sibir"], correct: 0 },
        { question: "Buyuk Ipak yo‘li qaysi hududni bog‘ladi?", options: ["Xitoy va Yevropa", "Hindiston va Afrika", "Evropa va Amerika", "Misr va Hindiston"], correct: 0 },
        { question: "Renessans davri qachon bo‘lgan?", options: ["14–16-asr", "12–13-asr", "17–18-asr", "15–17-asr"], correct: 0 },
        { question: "O‘zbekiston hududida qaysi shahar madaniy markaz bo‘lgan?", options: ["Samarqand", "Buxoro", "Xiva", "Toshkent"], correct: 0 },
        { question: "Temuriylar davrida madaniyat rivojlangan sohalar?", options: ["San’at va fan", "Qishloq xo‘jaligi", "Savdo", "Harbiy"], correct: 0 },
        { question: "O‘rta asrlar Yevropasida qaysi shahar markaz bo‘lgan?", options: ["Florensiya", "Londra", "Paris", "Berlin"], correct: 0 },
        { question: "Amir Temur qaysi davlatni asos solgan?", options: ["Temuriylar", "Boburiylar", "Xorazmshohlar", "Buxoro xonligi"], correct: 0 },
        { question: "Xiva xonligi poytaxti qaysi shahar?", options: ["Xiva", "Buxoro", "Samarqand", "Toshkent"], correct: 0 },
        { question: "Buxoro xonligi poytaxti qaysi shahar?", options: ["Buxoro", "Samarqand", "Xiva", "Toshkent"], correct: 0 },
        { question: "Marco Polo qaysi mamlakatga sayohat qilgan?", options: ["Xitoy", "Hindiston", "Misr", "Italiya"], correct: 0 }
      ],
  
      9: [
        { question: "Samarqand Temuriylar davrida qaysi maqsad uchun rivojlangan?", options: ["Madaniyat markazi", "Savdo markazi", "Harbiy markaz", "Qishloq xo‘jaligi"], correct: 0 },
        { question: "O‘rta asrlar Yevropasida feodalizm nima?", options: ["Ijtimoiy-siyosiy tizim", "Harbiy tizim", "Savdo tizimi", "Din tizimi"], correct: 0 },
        { question: "Renessans davri qaysi mamlakatda boshlandi?", options: ["Italiya", "Fransiya", "Angliya", "Germaniya"], correct: 0 },
        { question: "Boburiylar davri qachon bo‘lgan?", options: ["16-asr", "15-asr", "17-asr", "18-asr"], correct: 0 },
        { question: "Temuriylar davrida qaysi shahar ilmiy markaz bo‘lgan?", options: ["Samarqand", "Buxoro", "Xiva", "Toshkent"], correct: 0 },
        { question: "Xorazmshohlar qaysi hududni boshqargan?", options: ["Xorazm", "Misr", "Hindiston", "Evropa"], correct: 0 },
        { question: "O‘rta asrlar Yevropasida qaysi din keng tarqalgan?", options: ["Xristianlik", "Islom", "Buddizm", "Hinduyizm"], correct: 0 },
        { question: "Marco Polo qachon sayohat qilgan?", options: ["13-asr", "12-asr", "14-asr", "15-asr"], correct: 0 },
        { question: "Qadimgi Rimda Kolizey nima uchun qurilgan?", options: ["Kurash va o‘yinlar", "Savdo", "Shahar markazi", "Qishloq xo‘jaligi"], correct: 0 },
        { question: "Islom olimi Al-Xorazmiy qaysi fan bilan mashhur?", options: ["Matematika", "Tarix", "Biologiya", "Fizika"], correct: 0 },
        { question: "Temuriylar davrida madaniyat rivojlangan shahar qaysi?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 },
        { question: "Buyuk Ipak yo‘li qaysi hududni bog‘ladi?", options: ["Xitoy va Yevropa", "Hindiston va Afrika", "Evropa va Amerika", "Misr va Hindiston"], correct: 0 },
        { question: "Renessans san’atining mashhur vakili?", options: ["Leonardo da Vinci", "Temur", "Bobur", "Marco Polo"], correct: 0 },
        { question: "O‘zbekiston hududidagi qadimgi shaharlardan biri?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 },
        { question: "Temuriylar davrida poytaxt bo‘lgan shahar?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 }
      ],
  
      10: [
        { question: "Boburiylar davri qachon boshlangan?", options: ["1526", "1500", "1550", "1600"], correct: 0 },
        { question: "Amir Temur qaysi hududni birlashtirgan?", options: ["Markaziy Osiyo", "Evropa", "Hindiston", "Misr"], correct: 0 },
        { question: "Xorazmshohlar qaysi asrda hukmronlik qilgan?", options: ["12–13", "14–15", "16–17", "10–11"], correct: 0 },
        { question: "Temuriylar davrida san’at markazi qaysi shahar?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 },
        { question: "Renessans davri qaysi asrda boshlangan?", options: ["14-asr", "13-asr", "15-asr", "16-asr"], correct: 0 },
        { question: "Buyuk geografik kashfiyotlar qachon boshlandi?", options: ["15-asr", "14-asr", "16-asr", "17-asr"], correct: 0 },
        { question: "Marco Polo sayohati qachon bo‘lgan?", options: ["13-asr", "12-asr", "14-asr", "15-asr"], correct: 0 },
        { question: "Temuriylar davrida ilm-fan qaysi shaharda rivojlangan?", options: ["Samarqand", "Buxoro", "Xiva", "Shahrisabz"], correct: 0 },
        { question: "O‘zbekiston hududida qaysi shahar madaniyat markazi bo‘lgan?", options: ["Samarqand", "Buxoro", "Xiva", "Toshkent"], correct: 0 },
        { question: "Islom dini qachon Markaziy Osiyoga kirib kelgan?", options: ["7-asr", "6-asr", "8-asr", "9-asr"], correct: 0 },
        { question: "Bobur Hindistonga qachon bostirib kirgan?", options: ["1526", "1500", "1550", "1600"], correct: 0 },
        { question: "O‘rta asrlar Yevropasida feodalizm nima?", options: ["Ijtimoiy-siyosiy tizim", "Harbiy tizim", "Savdo tizimi", "Din tizimi"], correct: 0 },
        { question: "Renessans san’ati vakili?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Barchasi"], correct: 3 },
        { question: "Buyuk Ipak yo‘li qaysi hududlarni bog‘ladi?", options: ["Xitoy va Yevropa", "Hindiston va Afrika", "Evropa va Amerika", "Misr va Hindiston"], correct: 0 },
        { question: "Xorazmshohlar davri qaysi hududni boshqaradi?", options: ["Xorazm va Atropatena", "Misr va Hindiston", "Evropa va Osiyo", "Sibir"], correct: 0 }
      ],
  
      11: [
        { question: "O‘zbekiston mustaqillikka qachon erishgan?", options: ["1991", "1990", "1992", "1989"], correct: 0 },
        { question: "Sovet Ittifoqi qachon tarqatilgan?", options: ["1991", "1990", "1989", "1992"], correct: 0 },
        { question: "Mustaqil O‘zbekistonning birinchi Prezidenti?", options: ["Islom Karimov", "Shavkat Mirziyoyev", "Bobur", "Temur"], correct: 0 },
        { question: "O‘zbekiston Konstitutsiyasi qachon qabul qilingan?", options: ["1992", "1991", "1990", "1993"], correct: 0 },
        { question: "O‘zbekiston qaysi davlatlar bilan chegaradosh?", options: ["Qozog‘iston, Qirg‘iziston, Tojikiston, Afg‘oniston, Turkmaniston", "Rossiya, Xitoy, Hindiston", "Eron, Pokiston", "Misr, Sudan"], correct: 0 },
        { question: "Buyuk Ipak yo‘li O‘zbekiston hududida qaysi shaharlardan o‘tgan?", options: ["Samarqand, Buxoro, Xiva", "Toshkent, Namangan", "Shahrisabz, Andijon", "Farg‘ona, Urganch"], correct: 0 },
        { question: "O‘zbekistonning davlat ramzlari qaysi?", options: ["Bayroq, Gerb, Davlat Madhiyasi", "Bayroq, Himoya", "Gerb, Himoya", "Bayroq, Himoya, Madhia"], correct: 0 },
        { question: "O‘zbekiston tarixida qadimgi davlatlar qaysilar?", options: ["Samarqand, Buxoro, Xorazm", "Toshkent, Namangan", "Andijon, Farg‘ona", "Shahrisabz, Urganch"], correct: 0 },
        { question: "Samarqand qaysi tarixiy davrda poytaxt bo‘lgan?", options: ["Temuriylar davrida", "Boburiylar davrida", "Xorazmshohlar davrida", "Sovet davrida"], correct: 0 },
        { question: "Buxoro xonligi qachon mustahkam bo‘lgan?", options: ["16-asr", "15-asr", "17-asr", "18-asr"], correct: 0 },
        { question: "Xiva xonligi qachon tashkil topgan?", options: ["16-asr", "15-asr", "17-asr", "18-asr"], correct: 0 },
        { question: "O‘zbekiston hududida qaysi madaniyat markazlari mavjud bo‘lgan?", options: ["Samarqand, Buxoro, Xiva", "Toshkent, Namangan, Andijon", "Shahrisabz, Farg‘ona", "Urgench, Nukus"], correct: 0 },
        { question: "O‘zbekiston mustaqilligi bilan bog‘liq voqea?", options: ["Mustaqillik e’lon qilindi", "Sovet Ittifoqi tuzildi", "Temuriylar poytaxti tashkil topdi", "Bobur Hindistonga bostirib kirdi"], correct: 0 },
        { question: "O‘zbekistonning mustaqillik ramzi nima?", options: ["Bayroq va Gerb", "Bayroq va Himoya", "Gerb va Madhia", "Himoya va Bayroq"], correct: 0 },
        { question: "O‘zbekistonning birinchi Prezidenti kim?", options: ["Islom Karimov", "Shavkat Mirziyoyev", "Bobur", "Temur"], correct: 0 }
      ]
    },
        geografiya : {
          5: [
            { question: "Yer qaysi sayyorada joylashgan?", options: ["Mars", "Yer", "Jupiter", "Venera"], correct: 1 },
            { question: "Okean nima?", options: ["Katta suv havzasi", "Tog‘", "Shahar", "Daryo"], correct: 0 },
            { question: "Eng katta okean qaysi?", options: ["Atlantika", "Suvli", "Tinch", "Hind"], correct: 2 },
            { question: "Qaysi qit’a eng katta?", options: ["Afrika", "Evropa", "Osiyo", "Avstraliya"], correct: 2 },
            { question: "Qaysi qit’a eng kichik?", options: ["Afrika", "Evropa", "Osiyo", "Avstraliya"], correct: 3 },
            { question: "Daryo nima?", options: ["Suv oqimi", "Tog‘", "Shahar", "Okean"], correct: 0 },
            { question: "Tog‘ nima?", options: ["Yuqori yer massivi", "Daryo", "Shahar", "Okean"], correct: 0 },
            { question: "Eng uzun daryo qaysi?", options: ["Nil", "Amazonka", "Sirdaryo", "Volga"], correct: 0 },
            { question: "Shahar nima?", options: ["Katta aholi punkt", "Daryo", "Okean", "Tog‘"], correct: 0 },
            { question: "Qaysi iqlim sovuq?", options: ["Sahro", "Sibir", "Tropik", "Okean"], correct: 1 },
            { question: "Cho‘l nima?", options: ["Quruq va issiq hudud", "Suv havzasi", "Tog‘", "Shahar"], correct: 0 },
            { question: "O‘zbekistonda qaysi daryo bor?", options: ["Sirdaryo", "Nil", "Amazonka", "Volga"], correct: 0 },
            { question: "Daryo qayerdan boshlanadi?", options: ["Boshqa suvdan", "Tog‘dan", "Shahardan", "Okeandan"], correct: 1 },
            { question: "Tog‘ tepasida nima bo‘ladi?", options: ["Cho‘l", "Cho‘qqi", "Daryo", "Okean"], correct: 1 },
            { question: "Okean suvini nima tashkil qiladi?", options: ["Sho‘r suv", "Shirin suv", "Yog‘", "Qum"], correct: 0 }
          ],
      
          6: [
            { question: "Qaysi qit’a suv bilan eng ko‘p qoplangan?", options: ["Osiyo", "Antarktida", "Avstraliya", "Evropa"], correct: 1 },
            { question: "Shahar va qishloq farqi nima?", options: ["Aholi soni", "Daryo", "Tog‘", "Okean"], correct: 0 },
            { question: "Iqlim nima?", options: ["Havo sharoiti", "Daryo", "Tog‘", "Shahar"], correct: 0 },
            { question: "Tog‘ qaysi shaklda bo‘ladi?", options: ["Chuqur va baland", "Suv va qum", "Shahar va qishloq", "Okean"], correct: 0 },
            { question: "Eng baland tog‘ qaysi?", options: ["Everest", "K2", "Aorats", "Olymp"], correct: 0 },
            { question: "O‘zbekiston qaysi qit’ada joylashgan?", options: ["Afrika", "Evropa", "Osiyo", "Avstraliya"], correct: 2 },
            { question: "Okean va dengiz farqi?", options: ["Hajmi", "Rangi", "Balandi", "Shahri"], correct: 0 },
            { question: "Eng uzun daryo qaysi?", options: ["Nil", "Amazonka", "Volga", "Sirdaryo"], correct: 0 },
            { question: "Iqlim turi necha xil?", options: ["Issiq, sovuq, tropik, muzlik", "Faqat issiq", "Faqat sovuq", "Faqat tropik"], correct: 0 },
            { question: "Cho‘l va o‘rmon farqi nima?", options: ["O‘simlik va suv miqdori", "Tog‘", "Shahar", "Daryo"], correct: 0 },
            { question: "Eng katta cho‘l qaysi?", options: ["Sahro", "Gobi", "Kalahari", "Taklamakan"], correct: 0 },
            { question: "Daryo suvini nimadan oladi?", options: ["Yomg‘ir va qor erishi", "Okean", "Shahar", "Cho‘l"], correct: 0 },
            { question: "Eng chuqur okean qaysi?", options: ["Tinch okeani", "Atlantika", "Hind okeani", "Shimoliy muz okeani"], correct: 0 },
            { question: "Eng katta orol qaysi?", options: ["Grinlandiya", "Madagaskar", "Bali", "Sumatra"], correct: 0 },
            { question: "Eng baland tog‘ cho‘qqisi nima?", options: ["Everest", "K2", "Olymp", "Aorats"], correct: 0 }
          ],
      
          7: [
            { question: "Yerning shakli qanday?", options: ["Sferik", "Kvadrat", "Uchburchak", "To‘g‘ri chiziq"], correct: 0 },
            { question: "Okean qaysi qatlamga tegishli?", options: ["Yuzaki", "Ichki", "Atmosfera", "Qum"], correct: 0 },
            { question: "Tog‘ va tekislik farqi nima?", options: ["Balandlik", "Rangi", "Suvi", "Shahri"], correct: 0 },
            { question: "Qaysi daryo eng ko‘p suv olib keladi?", options: ["Amazonka", "Nil", "Volga", "Sirdaryo"], correct: 0 },
            { question: "O‘zbekiston qaysi iqlimga ega?", options: ["Quruq kontinental", "Tropik", "Sahro", "Muzlik"], correct: 0 },
            { question: "Qaysi tog‘lar O‘zbekiston hududida joylashgan?", options: ["Tian Shan va Pamir", "Alpomish va Shashmaqom", "Ural va Kaukaz", "Andlar"], correct: 0 },
            { question: "Yer yuzasidagi suv hajmi qancha foizni tashkil qiladi?", options: ["70%", "50%", "30%", "90%"], correct: 0 },
            { question: "Okeanlar nechta?", options: ["5", "4", "6", "3"], correct: 0 },
            { question: "Eng uzun daryo qaysi qit’ada?", options: ["Afrika", "Janubiy Amerika", "Osiyo", "Evropa"], correct: 0 },
            { question: "Qaysi qit’a aholisi eng ko‘p?", options: ["Osiyo", "Afrika", "Evropa", "Avstraliya"], correct: 0 },
            { question: "Shahar va qishloq farqi nima?", options: ["Aholi soni va infratuzilma", "Tog‘ balandligi", "Daryo uzunligi", "Okean chuqurligi"], correct: 0 },
            { question: "Iqlimni nima belgilaydi?", options: ["Havo harorati va yomg‘ir", "Shahar", "Daryo", "Tog‘"], correct: 0 },
            { question: "Cho‘l va o‘rmon farqi?", options: ["O‘simlik va suv miqdori", "Shahar", "Tog‘", "Daryo"], correct: 0 },
            { question: "Okean va dengiz farqi?", options: ["Hajmi va chuqurlik", "Rangi", "Shahar", "Tog‘"], correct: 0 },
            { question: "O‘zbekiston hududidagi eng katta daryo?", options: ["Sirdaryo", "Amudaryo", "Nil", "Amazonka"], correct: 1 }
          ],
      
          8: [
            { question: "Tog‘ qaysi geologik shakllanish bilan yuzaga keladi?", options: ["Yer siljishi", "Daryo oqimi", "Shahar qurilishi", "Okean oqimi"], correct: 0 },
            { question: "O‘zbekiston hududi qaysi qit’ada joylashgan?", options: ["Osiyo", "Afrika", "Evropa", "Avstraliya"], correct: 0 },
            { question: "Yer yuzasidagi suvning katta qismi qayerda?", options: ["Okeanlarda", "Daryolarda", "Shahar hovuzlarida", "Cho‘llarda"], correct: 0 },
            { question: "Qaysi iqlim tropik hisoblanadi?", options: ["Amazonka havzasi", "Sibir", "Sahro", "Arktika"], correct: 0 },
            { question: "Qaysi daryo O‘zbekiston hududida uchraydi?", options: ["Amudaryo", "Nil", "Amazonka", "Volga"], correct: 0 },
            { question: "Qaysi cho‘l O‘zbekiston hududida joylashgan?", options: ["Karakum va Qizilqum", "Sahro", "Gobi", "Kalahari"], correct: 1 },
            { question: "Okeanlar nechta?", options: ["5", "4", "6", "3"], correct: 0 },
            { question: "Tog‘ va tekislik farqi?", options: ["Balandlik", "Suv hajmi", "Shahar", "Okean"], correct: 0 },
            { question: "Eng baland tog‘ cho‘qqisi?", options: ["Everest", "K2", "Olymp", "Aorats"], correct: 0 },
            { question: "Eng uzun daryo qaysi?", options: ["Nil", "Amazonka", "Volga", "Sirdaryo"], correct: 0 },
            { question: "Shahar va qishloq farqi?", options: ["Aholi soni va infratuzilma", "Tog‘ balandligi", "Daryo uzunligi", "Okean chuqurligi"], correct: 0 },
            { question: "Qaysi iqlim sovuq?", options: ["Sibir", "Tropik", "Sahro", "Okean"], correct: 0 },
            { question: "Cho‘l nima?", options: ["Quruq va issiq hudud", "Suv havzasi", "Tog‘", "Shahar"], correct: 0 },
            { question: "Tog‘lar qayerda ko‘p?", options: ["Osiyo", "Afrika", "Evropa", "Avstraliya"], correct: 0 },
            { question: "Yerning shakli qanday?", options: ["Sferik", "Kvadrat", "Uchburchak", "To‘g‘ri chiziq"], correct: 0 }
          ],
      
          9: [
            { question: "Okeanlar chuqurligi o‘rtacha necha metr?", options: ["3800 m", "1000 m", "2000 m", "5000 m"], correct: 0 },
            { question: "Tog‘lar qanday turga bo‘linadi?", options: ["Vulkanik va tektonik", "Cho‘l va tundra", "Shahar va qishloq", "Okean va daryo"], correct: 0 },
            { question: "Daryolar qanday hosil bo‘ladi?", options: ["Yomg‘ir, qor erishi", "Shahar qurilishi", "Tog‘ balandligi", "Okean oqimi"], correct: 0 },
            { question: "Iqlimni belgilovchi omillar?", options: ["Harorat, yog‘ingarchilik", "Tog‘ balandligi", "Daryo uzunligi", "Shahar infratuzilmasi"], correct: 0 },
            { question: "O‘zbekistonning tog‘ hududlari qayerda?", options: ["Tian Shan va Pamir", "Ural", "Alpomish", "Andlar"], correct: 0 },
            { question: "O‘zbekiston hududidagi cho‘l?", options: ["Qizilqum", "Sahro", "Gobi", "Kalahari"], correct: 0 },
            { question: "O‘zbekiston daryolari qaysilar?", options: ["Sirdaryo va Amudaryo", "Nil va Amazonka", "Volga va Yangtze", "Ganges va Mekong"], correct: 0 },
            { question: "Okean va dengiz farqi?", options: ["Hajm va chuqurlik", "Rangi", "Tog‘", "Shahar"], correct: 0 },
            { question: "Yer sferik ekanligini kim isbotlagan?", options: ["Arximed", "Pifagor", "Eratosthen", "Galileo"], correct: 2 },
            { question: "Qaysi qit’a aholi soni bo‘yicha eng katta?", options: ["Osiyo", "Afrika", "Evropa", "Avstraliya"], correct: 0 },
            { question: "Okean qaysi qatlamga tegishli?", options: ["Yuzaki", "Ichki", "Tog‘", "Shahar"], correct: 0 },
            { question: "Cho‘l va o‘rmon farqi nima?", options: ["O‘simlik va suv miqdori", "Tog‘", "Daryo", "Shahar"], correct: 0 },
            { question: "Qaysi iqlim tropik?", options: ["Amazonka havzasi", "Sibir", "Sahro", "Arktika"], correct: 0 },
            { question: "Eng baland tog‘ qaysi qit’ada?", options: ["Osiyo", "Evropa", "Afrika", "Avstraliya"], correct: 0 },
            { question: "Eng uzun daryo qaysi qit’ada?", options: ["Afrika", "Osiyo", "Evropa", "Janubiy Amerika"], correct: 0 }
          ],
      
          10: [
            { question: "Yerning ichki qatlamlari nechta?", options: ["3", "2", "4", "5"], correct: 0 },
            { question: "Yer qatlamlari qanday?", options: ["Yadro, mantli, qobiq", "Daryo, cho‘l, tog‘", "Shahar, qishloq, orol", "Okean, dengiz, daryo"], correct: 0 },
            { question: "Geografik kenglik nima?", options: ["Tengsiz koordinata", "Shahar manzili", "Tog‘ balandligi", "Daryo uzunligi"], correct: 0 },
            { question: "Geografik uzunlik nima?", options: ["Sharqiy va g‘arbiy koordinata", "Shahar manzili", "Tog‘ balandligi", "Daryo uzunligi"], correct: 0 },
            { question: "Tog‘ shakllari qanday?", options: ["Vulkanik, tektonik, eroziya", "Cho‘l, tundra, o‘rmon", "Shahar, qishloq", "Okean, daryo"], correct: 0 },
            { question: "Daryo suvini nima ta’minlaydi?", options: ["Yomg‘ir va qor erishi", "Shahar infratuzilmasi", "Tog‘ balandligi", "Okean oqimi"], correct: 0 },
            { question: "Iqlimni belgilovchi omillar?", options: ["Harorat, yog‘ingarchilik, shamol", "Shahar infratuzilmasi", "Tog‘ balandligi", "Daryo uzunligi"], correct: 0 },
            { question: "Eng baland tog‘ cho‘qqisi?", options: ["Everest", "K2", "Olymp", "Aorats"], correct: 0 },
            { question: "Eng uzun daryo?", options: ["Nil", "Amazonka", "Volga", "Sirdaryo"], correct: 0 },
            { question: "Okeanlar nechta?", options: ["5", "4", "6", "3"], correct: 0 },
            { question: "Yer sferik ekanligini kim isbotlagan?", options: ["Eratosthen", "Galileo", "Newton", "Arximed"], correct: 0 },
            { question: "O‘zbekiston hududidagi cho‘l qaysi?", options: ["Qizilqum", "Sahro", "Gobi", "Kalahari"], correct: 0 },
            { question: "O‘zbekiston daryolari?", options: ["Sirdaryo va Amudaryo", "Nil va Amazonka", "Volga va Yangtze", "Ganges va Mekong"], correct: 0 },
            { question: "Okean va dengiz farqi?", options: ["Hajm va chuqurlik", "Rangi", "Shahar", "Tog‘"], correct: 0 },
            { question: "Iqlim zonalari nechta?", options: ["5", "3", "4", "6"], correct: 0 }
          ],
      
          11: [
            { question: "Global isish nima?", options: ["Yer haroratining ortishi", "Daryo suvining ko‘payishi", "Shahar infratuzilmasi", "Tog‘ balandligi"], correct: 0 },
            { question: "Atmosfera qatlamlari nechta?", options: ["5", "3", "4", "6"], correct: 0 },
            { question: "Yerning eng chuqur nuqtasi?", options: ["Mariyana chuqurligi", "Everest", "Tian Shan", "Nil"], correct: 0 },
            { question: "Okean oqimlari nimaga ta’sir qiladi?", options: ["Iqlimga", "Tog‘ balandligiga", "Shahar infratuzilmasiga", "Daryo uzunligiga"], correct: 0 },
            { question: "Tropik iqlim qayerda?", options: ["Ekvator atrofida", "Sibir", "Antarktida", "Sahro"], correct: 0 },
            { question: "Qaysi qit’a eng issiq?", options: ["Afrika", "Evropa", "Osiyo", "Avstraliya"], correct: 0 },
            { question: "Qaysi qit’a eng sovuq?", options: ["Antarktida", "Afrika", "Evropa", "Osiyo"], correct: 0 },
            { question: "Okeanlar chuqurligi o‘rtacha?", options: ["3800 m", "1000 m", "2000 m", "5000 m"], correct: 0 },
            { question: "Okean va dengiz farqi?", options: ["Hajm va chuqurlik", "Rangi", "Shahar", "Tog‘"], correct: 0 },
            { question: "Cho‘l va o‘rmon farqi?", options: ["O‘simlik va suv miqdori", "Tog‘", "Daryo", "Shahar"], correct: 0 },
            { question: "Yer sferik ekanligini kim isbotlagan?", options: ["Eratosthen", "Galileo", "Newton", "Arximed"], correct: 0 },
            { question: "Tog‘ shakllari qanday?", options: ["Vulkanik, tektonik, eroziya", "Cho‘l, tundra, o‘rmon", "Shahar, qishloq", "Okean, daryo"], correct: 0 },
            { question: "Daryo suvini nima ta’minlaydi?", options: ["Yomg‘ir va qor erishi", "Shahar infratuzilmasi", "Tog‘ balandligi", "Okean oqimi"], correct: 0 },
            { question: "Iqlimni belgilovchi omillar?", options: ["Harorat, yog‘ingarchilik, shamol", "Shahar infratuzilmasi", "Tog‘ balandligi", "Daryo uzunligi"], correct: 0 },
            { question: "O‘zbekistonning tog‘ hududlari qayerda?", options: ["Tian Shan va Pamir", "Ural", "Alpomish", "Andlar"], correct: 0 }
          ]
        }
};
