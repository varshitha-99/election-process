// --- Translation Dictionary (i18n) ---
const i18n = {
    en: {
        nav: { steps: "📋 Steps", timeline: "📅 Timeline", words: "📖 Words", voice: "🎙️ Voice", scan: "📸 Scan", quiz: "🧠 Quiz", booth: "🗺️ Booth", rights: "⚖️ Rights", myths: "💡 Myths", ballot: "🗳️ Practice", candidates: "👥 Candidates", progress: "🏆 Progress" },
        ui: {
            headerSteps: "How an Election Works", descSteps: "Tap each step to learn more — pictures and simple words.",
            askStepsTitle: "💬 Ask a question about any step:",
            headerTimeline: "Election Timeline", headerWords: "Election Words", descWords: "Tap a card to flip open a simple definition.",
            headerVoice: "Ask the Election AI", micStatus: "Tap to speak",
            headerScan: "Scan Document", descScan: "Read any paper or poster aloud.", scanPrompt: "📷 Tap to capture or upload", btnReadAloud: "🔊 Read Aloud",
            headerQuiz: "Quiz", globalRead: "🔊 Read Page",
            readDoc: "Reading document...", defaultVoiceResp: "Hello! I am your election assistant. Ask me anything.",
            listening: "Listening...", read: "🔊 Read",
            voiceOn: "🔊 Voice: ON", voiceOff: "🔇 Voice: OFF",
            voiceStatusOn: "Voice assistant is ON", voiceStatusOff: "Voice assistant is OFF"
        },
        chips: ["Who can vote?", "What ID do I need?", "How do candidates register?"],
        chatGreeting: "👋 Hello! I'm your election assistant. Ask me anything about voting, candidates, or your rights.",
        chatPlaceholder: "Type your question...",
        chatSend: "Send",
        mythLabel: "MYTH",
        factLabel: "FACT",
        quizResult: function (s, t) { return "You got " + s + " out of " + t + " correct!"; },
        steps: [
            { num: 1, icon: '📣', title: 'Election Announced', desc: 'The government sets a date for voting', details: 'The Election Commission of India officially announces that an election will take place. They set a date and notify the entire country.', tip: 'The Election Commission is independent — it ensures fair elections.' },
            { num: 2, icon: '📝', title: 'Candidates Register', desc: 'People who want to lead sign up', details: 'Any eligible citizen who wants to become a leader must officially register as a candidate. They fill forms and pay a deposit fee.', tip: 'Any citizen 25+ years can contest for Parliament.' },
            { num: 3, icon: '📢', title: 'Campaigning Begins', desc: 'Candidates explain why you should vote for them', details: 'Candidates travel to villages and cities, hold rallies, and put up posters to tell people their plans.', tip: 'There are strict rules on how much money a candidate can spend.' },
            { num: 4, icon: '🗳️', title: 'Voting Day', desc: 'Citizens go to a polling booth and vote', details: 'On voting day, you go to your local polling booth. You show your Voter ID and use the EVM (Electronic Voting Machine) to cast your vote.', tip: 'Your vote is secret — nobody can know who you voted for.' },
            { num: 5, icon: '📦', title: 'Votes Are Counted', desc: 'Officials count all votes carefully', details: 'After voting ends, trained officials carefully count every single vote under strict supervision.', tip: 'Results are usually announced the same day as counting begins.' },
            { num: 6, icon: '🏆', title: 'Winner Is Declared', desc: 'The candidate with most votes becomes the leader', details: 'Once all votes are counted, the winner is officially declared. The candidate with the highest number of votes wins.', tip: 'The party that wins the most seats forms the government.' },
            { num: 7, icon: '🤝', title: 'New Govt Takes Oath', desc: 'Winners are sworn in and start working', details: 'The elected leaders attend a formal ceremony where they take an oath to serve the people honestly.', tip: 'The Prime Minister is sworn in by the President of India.' }
        ],
        timeline: [
            { date: 'Months Before', title: 'Voter Registration', desc: 'Apply for Voter ID.' },
            { date: '6-8 Weeks Before', title: 'Election Announced', desc: 'Dates published.' },
            { date: '4 Weeks Before', title: 'Candidates Finalised', desc: 'List is ready.' },
            { date: '2-4 Weeks Before', title: 'Campaigning', desc: 'Rallies & speeches.' },
            { date: '2 Days Before', title: 'Campaigning Ends', desc: 'Quiet period.' },
            { date: 'Election Day', title: 'Voting', desc: 'People cast votes.', highlight: true },
            { date: '1-3 Days After', title: 'Results', desc: 'Votes counted.' },
            { date: 'Weeks After', title: 'Oath Ceremony', desc: 'Govt takes power.' }
        ],
        glossary: [
            { term: 'Election Commission', icon: '⚖️', def: 'Independent body that runs elections fairly.' },
            { term: 'EVM', icon: '📠', def: 'Electronic Voting Machine. Used to vote.' },
            { term: 'Voter ID', icon: '🪪', def: 'Card that proves you can vote.' },
            { term: 'Candidate', icon: '🙋🏽', def: 'A person asking for your vote.' },
            { term: 'Polling Booth', icon: '🏫', def: 'Place you go to vote.' },
            { term: 'NOTA', icon: '❌', def: 'None Of The Above. Button to reject all.' }
        ],
        rights: [
            { title: 'Right to Vote', desc: 'Every citizen 18+ has the right to vote without discrimination.' },
            { title: 'Right to Information', desc: 'You have the right to know about candidates\' backgrounds.' },
            { title: 'Right to Secret Ballot', desc: 'No one can force you to reveal who you voted for.' },
            { title: 'Right to Assistance', desc: 'Voters with disabilities can take a companion to help them.' }
        ],
        myths: [
            { m: "My vote doesn't matter.", f: "Every vote counts. Many elections are won by less than 100 votes!" },
            { m: "I need a Voter ID card to vote.", f: "You can vote with any of the 12 approved photo IDs if your name is in the list." },
            { m: "If I don't like any candidate, I shouldn't go.", f: "Use the NOTA (None of the Above) button to record your protest." }
        ],
        aiAnswers: {
            default: "I'm not sure about that, but voting is your power! Try asking about Voter ID, NOTA, or how to vote.",
            id: "You need your Voter ID (EPIC card). You can also use Aadhaar, PAN card, Driving Licence, or Passport if your name is in the voter list.",
            address: "If you moved, update your address in the electoral roll using Form 8 on the NVSP portal to vote in your new constituency.",
            nota: "NOTA means 'None of the Above'. It lets you officially reject all candidates in your constituency.",
            ink: "Indelible ink is applied to your left forefinger to prevent multiple voting. Alert the officer if it is not applied.",
            age: "Any Indian citizen aged 18 or older on the qualifying date is eligible to be registered as a voter.",
            name: "If your name is missing, check the electoral roll online. You can only vote if your name is on the official list at your booth.",
            candidate: "Candidates register by submitting a nomination form to the election authority, along with required documents and a deposit, within the deadline."
        },
        quiz: [
            { q: 'Who runs the elections in India?', opts: ['The Prime Minister', 'The Election Commission', 'The Police'], ans: 1 },
            { q: 'How old do you need to be to vote?', opts: ['16 years', '18 years', '21 years'], ans: 1 },
            { q: 'Can anyone know who you voted for?', opts: ['Yes', 'No, it is secret'], ans: 1 }
        ]
    },
    hi: {
        nav: { steps: "📋 प्रक्रिया", timeline: "📅 समय-सीमा", words: "📖 शब्द", voice: "🎙️ पूछें", scan: "📸 स्कैन", quiz: "🧠 क्विज़", booth: "🗺️ केंद्र", rights: "⚖️ अधिकार", myths: "💡 मिथक", ballot: "🗳️ अभ्यास", candidates: "👥 उम्मीदवार", progress: "🏆 प्रगति" },
        ui: {
            headerSteps: "चुनाव कैसे होता है", descSteps: "अधिक जानने के लिए प्रत्येक चरण पर टैप करें - चित्र और सरल शब्द।",
            askStepsTitle: "💬 किसी भी चरण के बारे में प्रश्न पूछें:",
            headerTimeline: "चुनाव का समय", headerWords: "चुनाव के शब्द", descWords: "सरल अर्थ जानने के लिए कार्ड पर टैप करें।",
            headerVoice: "चुनाव एआई से पूछें", micStatus: "बोलने के लिए टैप करें",
            headerScan: "दस्तावेज़ स्कैन करें", descScan: "किसी भी कागज या पोस्टर को जोर से पढ़ें।", scanPrompt: "📷 फोटो खींचने या अपलोड करने के लिए टैप करें", btnReadAloud: "🔊 जोर से पढ़ें",
            headerQuiz: "क्विज़", globalRead: "🔊 पेज पढ़ें",
            readDoc: "दस्तावेज़ पढ़ रहे हैं...", defaultVoiceResp: "नमस्ते! मैं आपका चुनाव सहायक हूँ। मुझसे कुछ भी पूछें।",
            listening: "सुन रहा हूँ...", read: "🔊 पढ़ें",
            voiceOn: "🔊 आवाज़: चालू", voiceOff: "🔇 आवाज़: बंद",
            voiceStatusOn: "वॉइस असिस्टेंट चालू है", voiceStatusOff: "वॉइस असिस्टेंट बंद है"
        },
        chips: ["कौन वोट दे सकता है?", "मुझे कौन सा पहचान पत्र चाहिए?", "उम्मीदवार कैसे पंजीकरण करते हैं?"],
        chatGreeting: "👋 नमस्ते! मैं आपका चुनाव सहायक हूँ। मतदान, उम्मीदवारों या अपने अधिकारों के बारे में मुझसे कुछ भी पूछें।",
        chatPlaceholder: "अपना प्रश्न टाइप करें...",
        chatSend: "भेजें",
        mythLabel: "मिथक",
        factLabel: "तथ्य",
        quizResult: function (s, t) { return "आपने " + t + " में से " + s + " सही उत्तर दिए!"; },
        steps: [
            { num: 1, icon: '📣', title: 'चुनाव की घोषणा', desc: 'सरकार मतदान की तारीख तय करती है', details: 'भारत निर्वाचन आयोग आधिकारिक तौर पर घोषणा करता है कि चुनाव होगा। वे एक तारीख तय करते हैं और पूरे देश को सूचित करते हैं।', tip: 'निर्वाचन आयोग स्वतंत्र है - यह निष्पक्ष चुनाव सुनिश्चित करता है।' },
            { num: 2, icon: '📝', title: 'उम्मीदवार पंजीकरण', desc: 'जो लोग नेता बनना चाहते हैं वे फॉर्म भरते हैं', details: 'कोई भी योग्य नागरिक जो नेता बनना चाहता है उसे आधिकारिक तौर पर एक उम्मीदवार के रूप में पंजीकरण करना होगा। वे फॉर्म भरते हैं और शुल्क जमा करते हैं।', tip: '25 वर्ष से अधिक आयु का कोई भी नागरिक संसद के लिए चुनाव लड़ सकता है।' },
            { num: 3, icon: '📢', title: 'प्रचार शुरू', desc: 'उम्मीदवार बताते हैं कि आपको उन्हें वोट क्यों देना चाहिए', details: 'उम्मीदवार गांवों और शहरों की यात्रा करते हैं, रैलियां करते हैं, और अपनी योजनाओं को बताने के लिए पोस्टर लगाते हैं।', tip: 'उम्मीदवार कितना पैसा खर्च कर सकता है, इस पर सख्त नियम हैं।' },
            { num: 4, icon: '🗳️', title: 'मतदान का दिन', desc: 'नागरिक मतदान केंद्र पर जाकर वोट देते हैं', details: 'मतदान के दिन, आप अपने स्थानीय मतदान केंद्र पर जाते हैं। आप अपना वोटर आईडी दिखाते हैं और अपना वोट डालने के लिए ईवीएम (इलेक्ट्रॉनिक वोटिंग मशीन) का उपयोग करते हैं।', tip: 'आपका वोट गुप्त है - कोई नहीं जान सकता कि आपने किसे वोट दिया है।' },
            { num: 5, icon: '📦', title: 'वोटों की गिनती', desc: 'अधिकारी सावधानी से सभी वोटों की गिनती करते हैं', details: 'मतदान समाप्त होने के बाद, प्रशिक्षित अधिकारी सख्त निगरानी में हर एक वोट की सावधानीपूर्वक गिनती करते हैं।', tip: 'परिणाम आमतौर पर उसी दिन घोषित किए जाते हैं जिस दिन गिनती शुरू होती है।' },
            { num: 6, icon: '🏆', title: 'विजेता की घोषणा', desc: 'सबसे अधिक वोट पाने वाला उम्मीदवार नेता बनता है', details: 'सभी वोटों की गिनती के बाद, विजेता की आधिकारिक घोषणा की जाती है। सबसे अधिक वोट पाने वाला उम्मीदवार जीतता है।', tip: 'जो पार्टी सबसे ज्यादा सीटें जीतती है वह सरकार बनाती है।' },
            { num: 7, icon: '🤝', title: 'नई सरकार की शपथ', desc: 'विजेता शपथ लेते हैं और काम शुरू करते हैं', details: 'चुने गए नेता एक औपचारिक समारोह में भाग लेते हैं जहां वे ईमानदारी से लोगों की सेवा करने की शपथ लेते हैं।', tip: 'प्रधानमंत्री को भारत के राष्ट्रपति द्वारा शपथ दिलाई जाती है।' }
        ],
        timeline: [
            { date: 'महीनों पहले', title: 'मतदाता पंजीकरण', desc: 'वोटर आईडी के लिए आवेदन करें।' },
            { date: '6-8 सप्ताह पहले', title: 'चुनाव की घोषणा', desc: 'तारीखें प्रकाशित।' },
            { date: '4 सप्ताह पहले', title: 'उम्मीदवार तय', desc: 'सूची तैयार है।' },
            { date: '2-4 सप्ताह पहले', title: 'प्रचार', desc: 'रैलियां और भाषण।' },
            { date: '2 दिन पहले', title: 'प्रचार समाप्त', desc: 'शांत अवधि।' },
            { date: 'चुनाव का दिन', title: 'मतदान', desc: 'लोग वोट डालते हैं।', highlight: true },
            { date: '1-3 दिन बाद', title: 'परिणाम', desc: 'वोटों की गिनती।' },
            { date: 'सप्ताह बाद', title: 'शपथ ग्रहण', desc: 'सरकार सत्ता में आती है।' }
        ],
        glossary: [
            { term: 'चुनाव आयोग', icon: '⚖️', def: 'स्वतंत्र निकाय जो चुनाव निष्पक्ष रूप से चलाता है।' },
            { term: 'ईवीएम', icon: '📠', def: 'इलेक्ट्रॉनिक वोटिंग मशीन। वोट देने के लिए उपयोग की जाती है।' },
            { term: 'वोटर आईडी', icon: '🪪', def: 'कार्ड जो साबित करता है कि आप वोट कर सकते हैं।' },
            { term: 'उम्मीदवार', icon: '🙋🏽', def: 'एक व्यक्ति जो आपका वोट मांग रहा है।' },
            { term: 'मतदान केंद्र', icon: '🏫', def: 'वह स्थान जहाँ आप वोट देने जाते हैं।' },
            { term: 'नोटा', icon: '❌', def: 'इनमें से कोई नहीं। सभी को अस्वीकार करने का बटन।' }
        ],
        rights: [
            { title: 'वोट का अधिकार', desc: '18 वर्ष से अधिक आयु के प्रत्येक नागरिक को बिना किसी भेदभाव के वोट देने का अधिकार है।' },
            { title: 'सूचना का अधिकार', desc: 'आपको उम्मीदवारों की पृष्ठभूमि के बारे में जानने का अधिकार है।' },
            { title: 'गुप्त मतदान का अधिकार', desc: 'कोई भी आपको यह बताने के लिए मजबूर नहीं कर सकता कि आपने किसे वोट दिया है।' },
            { title: 'सहायता का अधिकार', desc: 'विकलांग मतदाता अपनी मदद के लिए किसी साथी को ले जा सकते हैं।' }
        ],
        myths: [
            { m: "मेरे वोट से कोई फर्क नहीं पड़ता।", f: "हर वोट मायने रखता है। कई चुनाव बहुत कम वोटों से जीते जाते हैं!" },
            { m: "वोट देने के लिए मुझे वोटर आईडी कार्ड की आवश्यकता है।", f: "यदि आपका नाम सूची में है तो आप 12 स्वीकृत फोटो आईडी में से किसी के साथ भी वोट कर सकते हैं।" },
            { m: "अगर मुझे कोई उम्मीदवार पसंद नहीं है, तो मुझे नहीं जाना चाहिए।", f: "अपना विरोध दर्ज कराने के लिए नोटा बटन का प्रयोग करें।" }
        ],
        aiAnswers: {
            default: "नमस्ते! मुझे इस सवाल का सही जवाब नहीं पता। लेकिन आप मुझसे वोटर आईडी, नोटा या वोट देने के तरीके के बारे में पूछ सकते हैं।",
            id: "वोट देने के लिए आपको वोटर आईडी कार्ड चाहिए। अगर आपके पास वोटर आईडी नहीं है और आपका नाम लिस्ट में है, तो आप अपना आधार कार्ड, पैन कार्ड, ड्राइविंग लाइसेंस या पासपोर्ट भी दिखा कर वोट दे सकते हैं।",
            address: "अगर आपने अपना घर बदल लिया है, तो आप ऑनलाइन पोर्टल पर फॉर्म 8 भरकर अपना नया पता दर्ज कर सकते हैं। इसके बाद आप अपनी नई जगह पर वोट दे पाएंगे।",
            nota: "नोटा का मतलब है 'इनमें से कोई नहीं'। अगर आपको अपने क्षेत्र का कोई भी नेता पसंद नहीं है, तो आप नोटा का बटन दबा सकते हैं।",
            ink: "वोट देने के बाद, आपकी बायीं उंगली पर एक खास स्याही लगाई जाती है। इससे यह पक्का होता है कि एक व्यक्ति केवल एक ही बार वोट दे।",
            age: "भारत में वोट देने के लिए आपकी उम्र कम से कम 18 साल होनी चाहिए।",
            name: "अगर आपका नाम वोटर लिस्ट में नहीं है, तो आप वोट नहीं दे सकते। आप ऑनलाइन अपना नाम लिस्ट में चेक कर सकते हैं या फॉर्म 6 भरकर अपना नाम जुड़वा सकते हैं।",
            candidate: "नेता बनने के लिए, उम्मीदवारों को चुनाव आयोग के पास अपना फॉर्म और कुछ जरुरी दस्तावेज जमा करने होते हैं।"
        },
        quiz: [
            { q: 'भारत में चुनाव कौन कराता है?', opts: ['प्रधानमंत्री', 'चुनाव आयोग', 'पुलिस'], ans: 1 },
            { q: 'वोट देने के लिए आपकी उम्र कितनी होनी चाहिए?', opts: ['16 वर्ष', '18 वर्ष', '21 वर्ष'], ans: 1 },
            { q: 'क्या कोई जान सकता है कि आपने किसे वोट दिया?', opts: ['हाँ', 'नहीं, यह गुप्त है'], ans: 1 }
        ]
    }
};

let currentLang = 'hi';

// BCP-47 language codes for speech
const langBCP47 = {
    en: 'en-IN',
    hi: 'hi-IN'
};
function getSpeechLang() { return langBCP47[currentLang] || 'en-IN'; }

function getI18n(keyPath) {
    const keys = keyPath.split('.');
    let result = i18n[currentLang];
    for (const key of keys) {
        if (result && result[key] !== undefined) { result = result[key]; }
        else {
            result = i18n['en'];
            for (const k of keys) { if (result) result = result[k]; }
            break;
        }
    }
    return result;
}

// 1. Language Switching
function applyLanguage(lang) {
    currentLang = lang;
    renderAll();
    // Reset the chat window in the new language
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
        chatContainer.innerHTML = '<div class="chat-bubble bot">' + getI18n('chatGreeting') + '</div>';
    }
    const chatInput = document.getElementById('chat-input');
    if (chatInput) chatInput.placeholder = getI18n('chatPlaceholder');
}

// 2. Navigation Logic
document.querySelectorAll('.nav-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        var targetId = e.target.getAttribute('data-target');
        if (!targetId) return;
        document.querySelectorAll('.nav-btn').forEach(function (b) { b.classList.remove('active'); });
        e.target.classList.add('active');
        document.querySelectorAll('.section').forEach(function (sec) { sec.classList.add('hidden'); });
        var activeSec = document.getElementById(targetId);
        if (activeSec) {
            activeSec.classList.remove('hidden');
            activeSec.classList.add('active');
            var h2 = activeSec.querySelector('h2');
            if (h2) speakText(h2.innerText);
        }
    });
});

// 3. UI Rendering
function renderUI() {
    document.querySelectorAll('.nav-btn').forEach(function (btn) {
        var target = btn.getAttribute('data-target');
        var langData = i18n[currentLang];
        if (langData && langData.nav && langData.nav[target]) {
            btn.innerText = getI18n('nav.' + target);
        }
    });

    var uiMap = {
        'header-steps': 'ui.headerSteps', 'desc-steps': 'ui.descSteps',
        'ask-steps-title': 'ui.askStepsTitle', 'header-timeline': 'ui.headerTimeline',
        'header-words': 'ui.headerWords', 'desc-words': 'ui.descWords',
        'header-voice': 'ui.headerVoice', 'mic-status': 'ui.micStatus',
        'header-scan': 'ui.headerScan', 'desc-scan': 'ui.descScan',
        'scan-prompt': 'ui.scanPrompt', 'header-quiz': 'ui.headerQuiz',
        'global-read-btn': 'ui.globalRead'
    };
    for (var id in uiMap) {
        var el = document.getElementById(id);
        if (el) el.innerText = getI18n(uiMap[id]);
    }
    document.documentElement.lang = currentLang;

    var chatInput = document.getElementById('chat-input');
    if (chatInput) chatInput.placeholder = getI18n('chatPlaceholder');

    var chipsContainer = document.getElementById('steps-chips');
    if (chipsContainer) {
        var chips = getI18n('chips');
        chipsContainer.innerHTML = chips.map(function (chip) {
            return '<button class="chip" onclick="sendToAI(\'' + chip.replace(/'/g, "\\'") + '\')">' + chip + '</button>';
        }).join('');
    }
}

// 4. Content Initialization
function initSteps() {
    var container = document.getElementById('steps-container');
    if (!container) return;
    var stepsData = getI18n('steps');
    var readLabel = getI18n('ui.read');
    container.innerHTML = stepsData.map(function (step, i) {
        return '<div class="step-card" onclick="toggleStep(' + i + ')">' +
            '<div class="step-header"><div class="step-title"><span>' + step.icon + '</span>' +
            '<div>' + step.num + ': ' + step.title +
            '<div style="font-size:14px;font-weight:normal;color:#475569;">' + step.desc + '</div></div></div>' +
            '<span id="step-arrow-' + i + '">▾</span></div>' +
            '<div class="step-content" id="step-content-' + i + '">' +
            '<p>' + step.details + '</p>' +
            '<div class="tip-box">💡 ' + step.tip + '</div>' +
            '<button class="btn btn-secondary mt-2" onclick="speakText(\'' + step.title.replace(/'/g, "\\'") + '. ' + step.details.replace(/'/g, "\\'") + '\', event)">' + readLabel + '</button>' +
            '</div></div>';
    }).join('');
}

function toggleStep(index) {
    var content = document.getElementById('step-content-' + index);
    var arrow = document.getElementById('step-arrow-' + index);
    var isExpanded = content.classList.contains('expanded');
    document.querySelectorAll('.step-content').forEach(function (c) { c.classList.remove('expanded'); });
    document.querySelectorAll('[id^="step-arrow-"]').forEach(function (a) { a.textContent = '▾'; });
    if (!isExpanded) {
        content.classList.add('expanded');
        arrow.textContent = '▴';
        var step = getI18n('steps')[index];
        speakText(step.title + '. ' + step.details);
    }
}

function initTimeline() {
    var container = document.getElementById('timeline-container');
    if (!container) return;
    var data = getI18n('timeline') || [];
    container.innerHTML = data.map(function (item) {
        return '<div class="timeline-item ' + (item.highlight ? 'highlight' : '') + '" onclick="speakText(\'' + item.date + '. ' + item.title + '\')">' +
            '<div class="timeline-date">' + item.date + '</div>' +
            '<div class="timeline-title">' + item.title + '</div>' +
            '<div style="color:#475569;">' + item.desc + '</div></div>';
    }).join('');
}

// 5. AI Chat — powered by Claude API, always responds in Hindi
var HINDI_SYSTEM_PROMPT = `आप भारत के एक चुनाव जागरूकता ऐप के लिए हिंदी वॉइस असिस्टेंट हैं।
आपका काम है उपयोगकर्ता के सवालों को किसी भी भाषा (English, Hindi, या Hinglish) में समझना और सरल हिंदी में जवाब देना।

मुख्य नियम:
- हमेशा केवल हिंदी (देवनागरी लिपि) में जवाब दें
- अंग्रेजी न मिलाएं, सिवाय जरूरी शब्दों जैसे "EVM" के
- शब्द-दर-शब्द अनुवाद न करें, अर्थ स्वाभाविक रूप से समझाएं
- जवाब छोटा, स्पष्ट और आम लोगों के लिए आसान हो
- सरल हिंदी का उपयोग करें
- कोई emoji, symbol या special character न लगाएं
- वाक्य छोटे और बोलने में स्वाभाविक हों
- प्रक्रियाओं के लिए step-by-step समझाएं

आप इन विषयों पर मदद करते हैं:
- वोटिंग क्या है
- मतदाता पंजीकरण कैसे करें
- वोटर विवरण कैसे जांचें
- EVM से वोट कैसे दें
- जरूरी दस्तावेज
- मतदान के दिन क्या करें`;

var chatHistory = [];

async function sendToAI(question) {
    var chatContainer = document.getElementById('chat-messages');
    chatContainer.innerHTML += '<div class="chat-bubble user">' + question + '</div>';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Show typing indicator
    var typingId = 'typing-' + Date.now();
    chatContainer.innerHTML += '<div class="chat-bubble bot" id="' + typingId + '">⏳ सोच रहा हूँ...</div>';
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Add user message to history
    chatHistory.push({ role: 'user', content: question });

    try {
        // Note: Direct client-side calls to Claude API will fail due to CORS.
        // In a real app, you would call your own backend which then calls Anthropic.
        // For demonstration, we will use a mock response if the API call fails or if no key is present.
        var response = await fetch('/api/chat', { // Assuming a backend proxy exists
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: 'claude-3-5-sonnet-20240620',
                max_tokens: 1024,
                system: HINDI_SYSTEM_PROMPT,
                messages: chatHistory
            })
        }).catch(() => null);

        let answer;
        if (response && response.ok) {
            var data = await response.json();
            answer = (data.content && data.content[0] && data.content[0].text)
                ? data.content[0].text
                : 'माफ करें, अभी जवाब नहीं मिल सका। कृपया दोबारा पूछें।';
        } else {
            // Fallback for demo purposes if no backend is present
            const q = question.toLowerCase();
            const answers = getI18n('aiAnswers');
            if (q.includes('voter id') || q.includes('पहचान पत्र') || q.includes('id')) answer = answers.id;
            else if (q.includes('address') || q.includes('पता') || q.includes('घर')) answer = answers.address;
            else if (q.includes('nota') || q.includes('नोटा')) answer = answers.nota;
            else if (q.includes('ink') || q.includes('स्याही')) answer = answers.ink;
            else if (q.includes('age') || q.includes('उम्र') || q.includes('साल')) answer = answers.age;
            else if (q.includes('name') || q.includes('नाम') || q.includes('list')) answer = answers.name;
            else if (q.includes('candidate') || q.includes('उम्मीदवार')) answer = answers.candidate;
            else answer = answers.default;
            
            // Artificial delay to simulate AI
            await new Promise(r => setTimeout(r, 800));
        }

        // Add assistant reply to history
        chatHistory.push({ role: 'assistant', content: answer });
        // Keep history to last 10 turns
        if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);

        // Replace typing indicator
        var typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.remove();

        chatContainer.innerHTML += '<div class="chat-bubble bot">🤖 ' + answer + '</div>';
        chatContainer.scrollTop = chatContainer.scrollHeight;
        speakText(answer);

    } catch (err) {
        var typingEl = document.getElementById(typingId);
        if (typingEl) typingEl.remove();
        var fallback = 'माफ करें, नेटवर्क में समस्या है। कृपया दोबारा कोशिश करें।';
        chatContainer.innerHTML += '<div class="chat-bubble bot">🤖 ' + fallback + '</div>';
        chatContainer.scrollTop = chatContainer.scrollHeight;
        speakText(fallback);
    }
}

async function sendChatMessage() {
    var input = document.getElementById('chat-input');
    if (input.value.trim()) {
        await sendToAI(input.value);
        input.value = '';
    }
}

// Mic — always fresh instance so lang stays correct after language switch
var recognition = null;
function toggleMic() {
    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return alert("Speech recognition is not supported in this browser.");
    if (recognition) { try { recognition.abort(); } catch (e) { } recognition = null; }

    recognition = new SpeechRecognition();
    recognition.lang = 'hi-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = function (e) { sendToAI(e.results[0][0].transcript); };
    recognition.onstart = function () {
        document.getElementById('mic-btn').classList.add('listening');
        document.getElementById('mic-status').innerText = getI18n('ui.listening');
    };
    recognition.onend = function () {
        document.getElementById('mic-btn').classList.remove('listening');
        document.getElementById('mic-status').innerText = getI18n('ui.micStatus');
        recognition = null;
    };
    recognition.onerror = function (e) {
        document.getElementById('mic-btn').classList.remove('listening');
        document.getElementById('mic-status').innerText = getI18n('ui.micStatus');
        recognition = null;
        if (e.error !== 'no-speech') showToast('Mic error: ' + e.error);
    };
    recognition.start();
}

// 6. Speech
var voiceAssistantEnabled = true;
var cachedHindiVoice = null;

// Cache Hindi voice once browser loads voices
function loadHindiVoice() {
    var voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
        // Try exact hi-IN first, then any Hindi voice
        cachedHindiVoice = voices.find(function (v) { return v.lang === 'hi-IN'; })
            || voices.find(function (v) { return v.lang.startsWith('hi'); })
            || null;
    }
}

// Load voices now and also when browser fires onvoiceschanged
if (window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = loadHindiVoice;
    loadHindiVoice();
}

function updateVoiceToggleUI() {
    var btn = document.getElementById('voice-toggle-btn');
    var statusEl = document.getElementById('voice-assistant-status');
    if (btn) {
        if (voiceAssistantEnabled) {
            btn.innerText = getI18n('ui.voiceOn');
            btn.style.background = '#16a34a';
        } else {
            btn.innerText = getI18n('ui.voiceOff');
            btn.style.background = '#dc2626';
        }
    }
    if (statusEl) {
        statusEl.innerText = voiceAssistantEnabled ? getI18n('ui.voiceStatusOn') : getI18n('ui.voiceStatusOff');
        statusEl.style.color = voiceAssistantEnabled ? '#16a34a' : '#dc2626';
    }
    // Sync the checkbox in the voice section if present
    var cb = document.getElementById('voice-assistant-toggle');
    if (cb) cb.checked = voiceAssistantEnabled;
}

// Called from the top-bar button
function toggleVoiceFromBtn() {
    voiceAssistantEnabled = !voiceAssistantEnabled;
    if (!voiceAssistantEnabled) window.speechSynthesis.cancel();
    updateVoiceToggleUI();
}

// Called from the checkbox inside the voice section
function toggleVoiceAssistant(checkbox) {
    voiceAssistantEnabled = checkbox.checked;
    if (!voiceAssistantEnabled) window.speechSynthesis.cancel();
    updateVoiceToggleUI();
}

function speakText(text, event) {
    if (event) event.stopPropagation();
    if (!voiceAssistantEnabled) return;
    if (!text || !text.trim()) return;
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getSpeechLang();
    // Use cached Hindi voice if available
    if (cachedHindiVoice) {
        utterance.voice = cachedHindiVoice;
    }
    utterance.rate = 0.88;
    utterance.pitch = 1;
    // Chrome bug workaround: re-trigger if synthesis stalls
    setTimeout(function () {
        if (window.speechSynthesis.speaking) return;
        window.speechSynthesis.speak(utterance);
    }, 50);
    window.speechSynthesis.speak(utterance);
}

function renderAll() {
    renderUI();
    initSteps();
    initTimeline();
    initGlossary();
    initRights();
    initMyths();
    initQuiz();
    initBallot();
    updateProgress();
}

// --- 7. Accessibility ---
function changeFontSize(delta) {
    var root = document.documentElement;
    var currentSize = parseFloat(getComputedStyle(root).getPropertyValue('--font-size-base') || 16);
    var newSize = Math.max(12, Math.min(24, currentSize + delta));
    root.style.setProperty('--font-size-base', newSize + 'px');
    document.body.style.fontSize = newSize + 'px';
}
function toggleHighContrast(cb) { document.body.classList.toggle('high-contrast', cb.checked); }
function toggleDyslexia(cb) { document.body.classList.toggle('dyslexia-font', cb.checked); }
function toggleMotion(cb) { document.body.classList.toggle('reduce-motion', cb.checked); }
function toggleDark(cb) { document.body.classList.toggle('dark-mode', cb.checked); }

// --- 8. a11y Panel ---
document.getElementById('a11y-toggle') && document.getElementById('a11y-toggle').addEventListener('click', function () {
    document.getElementById('a11y-panel').classList.toggle('hidden');
});

// --- 9. Glossary / Rights / Myths ---
function initGlossary() {
    var container = document.getElementById('glossary-container');
    if (!container) return;
    var data = getI18n('glossary') || [];
    container.innerHTML = data.map(function (item) {
        return '<div class="glossary-card" onclick="this.classList.toggle(\'open\'); speakText(\'' + item.term.replace(/'/g, "\\'") + '. ' + item.def.replace(/'/g, "\\'") + '\')">' +
            '<div class="glossary-emoji">' + item.icon + '</div>' +
            '<div class="glossary-term">' + item.term + '</div>' +
            '<div class="glossary-def">' + item.def + '</div></div>';
    }).join('');
}

function filterGlossary(query) {
    var cards = document.querySelectorAll('.glossary-card');
    var q = query.toLowerCase();
    cards.forEach(function (card) {
        var term = card.querySelector('.glossary-term').innerText.toLowerCase();
        card.style.display = term.includes(q) ? 'block' : 'none';
    });
}

function initRights() {
    var container = document.getElementById('rights-container');
    if (!container) return;
    var rights = getI18n('rights') || [];
    container.innerHTML = rights.map(function (r) {
        return '<div class="info-card" onclick="speakText(\'' + r.title.replace(/'/g, "\\'") + '. ' + r.desc.replace(/'/g, "\\'") + '\')">' +
            '<h3>' + r.title + '</h3><p>' + r.desc + '</p></div>';
    }).join('');
}

var currentMythIndex = 0;
function initMyths() { currentMythIndex = 0; renderMyth(); }

function renderMyth() {
    var container = document.getElementById('myth-deck');
    if (!container) return;
    var myths = getI18n('myths') || [];
    var myth = myths[currentMythIndex];
    if (!myth) return;
    container.innerHTML = '<div class="myth-card">' +
        '<div class="myth-label">' + getI18n('mythLabel') + '</div>' +
        '<div class="myth-text">' + myth.m + '</div>' +
        '<div class="fact-label">' + getI18n('factLabel') + '</div>' +
        '<div class="fact-text">' + myth.f + '</div></div>';
    var counter = document.getElementById('myth-counter');
    if (counter) counter.innerText = (currentMythIndex + 1) + ' / ' + myths.length;
}

function nextMyth() {
    var myths = getI18n('myths') || [];
    currentMythIndex = (currentMythIndex + 1) % myths.length;
    renderMyth();
}
function prevMyth() {
    var myths = getI18n('myths') || [];
    currentMythIndex = (currentMythIndex - 1 + myths.length) % myths.length;
    renderMyth();
}

// --- Quiz ---
var quizIndex = 0;
var score = 0;

function initQuiz() {
    quizIndex = 0; score = 0;
    var container = document.getElementById('quiz-container');
    var resultsEl = document.getElementById('quiz-results');
    if (container) container.classList.remove('hidden');
    if (resultsEl) resultsEl.classList.add('hidden');
    renderQuizQuestion();
}

function renderQuizQuestion() {
    var container = document.getElementById('quiz-container');
    if (!container) return;
    var questions = getI18n('quiz');
    if (quizIndex >= questions.length) { showQuizResults(); return; }
    var q = questions[quizIndex];
    var progressEl = document.getElementById('quiz-progress');
    if (progressEl) progressEl.style.width = ((quizIndex / questions.length) * 100) + '%';
    container.innerHTML = '<div class="quiz-card"><div class="quiz-question">' + q.q + '</div><div class="quiz-options">' +
        q.opts.map(function (opt, i) {
            return '<button class="quiz-option" onclick="handleQuizAnswer(' + i + ')">' + opt + '</button>';
        }).join('') + '</div></div>';
}

function handleQuizAnswer(index) {
    var questions = getI18n('quiz');
    var correct = questions[quizIndex].ans;
    var options = document.querySelectorAll('.quiz-option');
    options.forEach(function (opt, i) {
        if (i === correct) opt.classList.add('correct');
        else if (i === index) opt.classList.add('wrong');
        opt.disabled = true;
    });
    if (index === correct) score++;
    setTimeout(function () {
        quizIndex++;
        if (quizIndex < questions.length) renderQuizQuestion();
        else showQuizResults();
    }, 1500);
}

function showQuizResults() {
    var container = document.getElementById('quiz-container');
    var resultsEl = document.getElementById('quiz-results');
    var scoreEl = document.getElementById('result-score');
    if (container) container.classList.add('hidden');
    if (resultsEl) resultsEl.classList.remove('hidden');
    var total = getI18n('quiz').length;
    var fn = getI18n('quizResult');
    if (scoreEl) scoreEl.innerText = (typeof fn === 'function') ? fn(score, total) : score + ' / ' + total;
    updateProgress();
}

function restartQuiz() {
    quizIndex = 0; score = 0;
    var container = document.getElementById('quiz-container');
    var resultsEl = document.getElementById('quiz-results');
    if (container) container.classList.remove('hidden');
    if (resultsEl) resultsEl.classList.add('hidden');
    renderQuizQuestion();
}

function updateProgress() {
    var progressFill = document.getElementById('global-progress-fill');
    var percentLabel = document.getElementById('progress-percent');
    if (!progressFill) return;
    var completion = 0;
    if (quizIndex > 0) completion += 50;
    if (score > 0) completion += 50;
    completion = Math.min(100, completion);
    progressFill.style.width = completion + '%';
    if (percentLabel) percentLabel.innerText = completion + '%';
}

// --- 10. Ballot Practice ---
var dummyCandidates = [
    { name: "Sita Sharma", party: "Independent", symbol: "🌻" },
    { name: "Rahul Varma", party: "Social Unity", symbol: "🐘" },
    { name: "Priya Das", party: "Green Party", symbol: "🌳" },
    { name: "Arjun Singh", party: "National Front", symbol: "🏹" }
];

function initBallot() {
    var container = document.getElementById('ballot-candidates');
    if (!container) return;
    container.innerHTML = dummyCandidates.map(function (c, i) {
        return '<div class="ballot-row" onclick="selectBallotCandidate(' + i + ')">' +
            '<div class="ballot-c-info"><strong>' + c.name + '</strong><div>' + c.party + '</div></div>' +
            '<div class="ballot-symbol">' + c.symbol + '</div>' +
            '<div class="ballot-mark-circle" id="ballot-mark-' + i + '"></div></div>';
    }).join('') +
        '<div class="ballot-row" onclick="selectBallotCandidate(\'nota\')">' +
        '<div class="ballot-c-info"><strong>NOTA</strong><div>None of the above</div></div>' +
        '<div class="ballot-symbol">❌</div><div class="ballot-mark-circle" id="ballot-mark-nota"></div></div>';
}

var selectedBallot = null;
function selectBallotCandidate(idx) {
    document.querySelectorAll('.ballot-mark-circle').forEach(function (c) { c.classList.remove('marked'); });
    document.getElementById('ballot-mark-' + idx).classList.add('marked');
    selectedBallot = idx;
    speakText('Selected ' + (idx === 'nota' ? 'NOTA' : dummyCandidates[idx].name));
}

function submitBallot() {
    if (selectedBallot === null) return alert("Please select a candidate first!");
    var resultBox = document.getElementById('ballot-result');
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = '<h3>✅ Vote Recorded!</h3><p>You practiced voting for: <strong>' + (selectedBallot === 'nota' ? 'NOTA' : dummyCandidates[selectedBallot].name) + '</strong>. Remember to vote on election day!</p>';
    setTimeout(function () { resultBox.classList.add('hidden'); }, 5000);
}

// --- 11. Booth Locator ---
function loadDistricts(state) {
    var epicInput = document.getElementById('booth-epic');
    if (state && epicInput) epicInput.focus();
}

function findBooth() {
    var state = document.getElementById('booth-state').value;
    var epic = document.getElementById('booth-epic').value;
    if (!state || !epic) return alert("Please enter state and Voter ID.");
    var result = document.getElementById('booth-result');
    result.classList.remove('hidden');
    document.getElementById('booth-name').innerText = "Government Primary School, Block B";
    document.getElementById('booth-address').innerText = "Room No 3, Near Main Market, " + state;

    // Show Google Maps iframe
    var mapContainer = document.getElementById('google-map-container');
    var mapIframe = document.getElementById('google-map-iframe');
    if (mapContainer && mapIframe) {
        mapContainer.style.display = 'block';
        // Use a generic embed URL as placeholder
        mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112000!2d77.1!3d28.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAwLjAiTiA3N8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin";
    }

    speakText("Your booth is found at Government Primary School.");
}

// --- 12. Scanning ---
function handleScan(input) {
    if (!input.files || !input.files[0]) return;
    var area = document.getElementById('scan-area');
    var result = document.getElementById('scan-result');
    var bar = document.querySelector('.scan-bar-anim');
    area.classList.add('hidden');
    result.classList.remove('hidden');
    bar.style.width = '100%';
    setTimeout(function () {
        document.getElementById('scan-text').innerText = "VOTER CARD DETECTED. Name: Rajesh Kumar. Polling Station: Sec-12. Date: May 12th. Please ensure you carry this card to the booth.";
        speakText("Voter card detected. Name Rajesh Kumar.");
    }, 2000);
}

function resetScan() {
    document.getElementById('scan-area').classList.remove('hidden');
    document.getElementById('scan-result').classList.add('hidden');
    document.querySelector('.scan-bar-anim').style.width = '0%';
}

// --- 13. Candidate Comparator ---
function compareCandidates() {
    var area = document.getElementById('constituency-input').value;
    if (!area) return alert("Please enter a constituency.");
    var loading = document.getElementById('candidate-loading');
    var results = document.getElementById('candidate-results');
    loading.classList.remove('hidden');
    results.classList.add('hidden');
    setTimeout(function () {
        loading.classList.add('hidden');
        results.classList.remove('hidden');
        results.innerHTML = '<div class="ai-summary"><h3>AI Analysis for ' + area + '</h3><p>Based on your selected issues, Candidate A focuses on infrastructure and water supply, while Candidate B has a stronger record in education and health reforms.</p></div>';
    }, 2500);
}

// ============================================================
// 🤖 ML MODULE 1 — INTENT CLASSIFIER (Naive Bayes style)
// Classifies user question into topic before sending to AI
// Shows detected intent as a UI tag above the answer
// ============================================================
var ML_INTENT_VOCAB = {
    registration: ['register', 'registration', 'panjikaran', 'naam', 'form', 'nvsp', 'apply', 'enroll', 'list', 'voter list', 'मतदाता', 'पंजीकरण', 'नाम', 'फॉर्म', 'सूची'],
    documents: ['document', 'id', 'card', 'aadhaar', 'pan', 'passport', 'licence', 'epic', 'पहचान', 'दस्तावेज', 'आईडी', 'कार्ड', 'आधार'],
    evm: ['evm', 'machine', 'button', 'vote', 'press', 'ईवीएम', 'मशीन', 'बटन', 'वोट', 'दबाएं'],
    nota: ['nota', 'none', 'reject', 'नोटा', 'कोई नहीं', 'अस्वीकार'],
    booth: ['booth', 'centre', 'center', 'where', 'location', 'polling', 'कहाँ', 'केंद्र', 'मतदान केंद्र'],
    rights: ['right', 'force', 'secret', 'forced', 'अधिकार', 'गुप्त', 'मजबूर'],
    eligibility: ['age', 'who can', '18', 'eligible', '18 साल', 'कौन वोट', 'उम्र'],
    fakenews: ['fake', 'rumour', 'rumor', 'forward', 'whatsapp', 'झूठ', 'अफवाह', 'फर्जी', 'सच', 'मिथक']
};

var ML_INTENT_LABELS = {
    registration: '📝 मतदाता पंजीकरण',
    documents: '🪪 दस्तावेज़',
    evm: '📠 EVM / मतदान',
    nota: '❌ NOTA',
    booth: '🏫 मतदान केंद्र',
    rights: '⚖️ मतदाता अधिकार',
    eligibility: '✅ पात्रता',
    fakenews: '⚠️ तथ्य जाँच',
    general: '💬 सामान्य प्रश्न'
};

function mlClassifyIntent(text) {
    var q = text.toLowerCase();
    var scores = {};
    for (var intent in ML_INTENT_VOCAB) {
        var keywords = ML_INTENT_VOCAB[intent];
        scores[intent] = 0;
        keywords.forEach(function (kw) {
            if (q.includes(kw)) scores[intent] += (kw.length > 4 ? 2 : 1);
        });
    }
    var best = 'general', bestScore = 0;
    for (var k in scores) {
        if (scores[k] > bestScore) { bestScore = scores[k]; best = k; }
    }
    return { intent: best, confidence: bestScore, label: ML_INTENT_LABELS[best] || '💬 सामान्य' };
}

// ============================================================
// 🤖 ML MODULE 2 — SENTIMENT ANALYSER
// Detects user emotion: confused / frustrated / confident
// Adjusts system prompt tone accordingly
// ============================================================
var ML_SENTIMENT_WORDS = {
    confused: ['samajh', 'kya', 'kyun', 'kaise', 'pata nahi', 'confused', 'समझ', 'क्या', 'क्यों', 'कैसे', 'पता नहीं', 'मुझे नहीं'],
    frustrated: ['nahi', 'nahin', 'work nahi', 'kaam nahi', 'problem', 'issue', 'नहीं', 'काम नहीं', 'समस्या', 'परेशान', 'गुस्सा', 'बेकार'],
    confident: ['batao', 'guide', 'explain', 'samjhao', 'बताओ', 'समझाओ', 'जानना', 'बताइए']
};

function mlDetectSentiment(text) {
    var q = text.toLowerCase();
    var scores = { confused: 0, frustrated: 0, confident: 0 };
    for (var sent in ML_SENTIMENT_WORDS) {
        ML_SENTIMENT_WORDS[sent].forEach(function (w) { if (q.includes(w)) scores[sent]++; });
    }
    if (scores.frustrated > 0) return 'frustrated';
    if (scores.confused > 0) return 'confused';
    if (scores.confident > 0) return 'confident';
    return 'neutral';
}

function mlSentimentToneInstruction(sentiment) {
    if (sentiment === 'frustrated') return '\n\nउपयोगकर्ता थोड़ा परेशान लग रहा है। बहुत शांत, सहानुभूतिपूर्ण और आश्वस्त करने वाले तरीके से जवाब दें।';
    if (sentiment === 'confused') return '\n\nउपयोगकर्ता भ्रमित लग रहा है। बहुत सरल भाषा में, एक-एक कदम समझाएं।';
    if (sentiment === 'confident') return '\n\nउपयोगकर्ता सक्रिय और उत्सुक है। सीधा और विस्तृत जवाब दें।';
    return '';
}

// ============================================================
// 🤖 ML MODULE 3 — ADAPTIVE QUIZ (Spaced Repetition)
// Tracks wrong answers and re-queues them with higher priority
// Difficulty adjusts based on performance
// ============================================================
var ML_QUIZ_STATE = {
    wrongQueue: [],       // questions answered wrong, to repeat
    answerLog: [],        // { qIndex, correct, timestamp }
    streak: 0,
    difficulty: 'easy'    // easy → medium → hard
};

var ML_QUIZ_BANK = {
    easy: [
        { q: 'वोट देने की न्यूनतम आयु क्या है?', opts: ['16 वर्ष', '18 वर्ष', '21 वर्ष'], ans: 1, topic: 'eligibility' },
        { q: 'भारत में चुनाव कौन कराता है?', opts: ['प्रधानमंत्री', 'चुनाव आयोग', 'पुलिस'], ans: 1, topic: 'general' },
        { q: 'EVM का पूरा नाम क्या है?', opts: ['Electric Voting Machine', 'Electronic Voting Machine', 'Election Vote Machine'], ans: 1, topic: 'evm' }
    ],
    medium: [
        { q: 'NOTA का उपयोग कब करते हैं?', opts: ['जब बूथ बंद हो', 'जब कोई उम्मीदवार पसंद न आए', 'जब ID न हो'], ans: 1, topic: 'nota' },
        { q: 'मतदाता सूची में नाम न हो तो क्या करें?', opts: ['कहीं और जाकर वोट दें', 'फॉर्म 6 भरें', 'चुनाव बाद शिकायत करें'], ans: 1, topic: 'registration' },
        { q: 'वोटर आईडी के अलावा कौन सा दस्तावेज मान्य है?', opts: ['राशन कार्ड', 'आधार कार्ड', 'बिजली बिल'], ans: 1, topic: 'documents' }
    ],
    hard: [
        { q: 'लोकसभा चुनाव लड़ने के लिए न्यूनतम आयु क्या है?', opts: ['18 वर्ष', '21 वर्ष', '25 वर्ष'], ans: 2, topic: 'eligibility' },
        { q: 'मतदाता पंजीकरण के लिए कौन सा फॉर्म भरा जाता है?', opts: ['फॉर्म 7', 'फॉर्म 6', 'फॉर्म 8A'], ans: 1, topic: 'registration' },
        { q: 'EVM में VVPAT क्या दिखाता है?', opts: ['उम्मीदवार की फोटो', 'वोट की पर्ची ताकि मतदाता पुष्टि कर सके', 'कुल वोट'], ans: 1, topic: 'evm' }
    ]
};

function mlGetNextQuestion() {
    // Priority: wrong queue first, then difficulty-based bank
    if (ML_QUIZ_STATE.wrongQueue.length > 0) {
        return ML_QUIZ_STATE.wrongQueue.shift();
    }
    var bank = ML_QUIZ_BANK[ML_QUIZ_STATE.difficulty] || ML_QUIZ_BANK.easy;
    // Pick question not recently answered correctly
    var recentCorrect = ML_QUIZ_STATE.answerLog
        .filter(function (l) { return l.correct; })
        .map(function (l) { return l.qIndex; });
    var available = bank.filter(function (_, i) { return !recentCorrect.includes(i); });
    if (available.length === 0) {
        // All done — advance difficulty
        if (ML_QUIZ_STATE.difficulty === 'easy') ML_QUIZ_STATE.difficulty = 'medium';
        else if (ML_QUIZ_STATE.difficulty === 'medium') ML_QUIZ_STATE.difficulty = 'hard';
        ML_QUIZ_STATE.answerLog = [];
        return ML_QUIZ_BANK[ML_QUIZ_STATE.difficulty][0];
    }
    return available[Math.floor(Math.random() * available.length)];
}

function mlRecordAnswer(question, chosenIdx) {
    var correct = chosenIdx === question.ans;
    ML_QUIZ_STATE.answerLog.push({ qIndex: question.q, correct: correct });
    if (correct) {
        ML_QUIZ_STATE.streak++;
    } else {
        ML_QUIZ_STATE.streak = 0;
        // Re-queue wrong question for spaced repetition
        ML_QUIZ_STATE.wrongQueue.push(question);
    }
    return correct;
}

// Adaptive Quiz UI (shown in quiz section)
var mlCurrentQuestion = null;
function mlStartAdaptiveQuiz() {
    mlCurrentQuestion = mlGetNextQuestion();
    var box = document.getElementById('ml-quiz-box');
    if (!box) return;
    var diffLabel = { easy: '🟢 आसान', medium: '🟡 मध्यम', hard: '🔴 कठिन' };
    var streakBar = ML_QUIZ_STATE.streak > 0
        ? '<div style="font-size:12px;color:#16a34a;margin-bottom:6px;">🔥 स्ट्रीक: ' + ML_QUIZ_STATE.streak + '</div>' : '';
    var wrongBadge = ML_QUIZ_STATE.wrongQueue.length > 0
        ? ' <span style="font-size:11px;color:#dc2626;">(दोहराएं: ' + ML_QUIZ_STATE.wrongQueue.length + ')</span>' : '';
    box.innerHTML =
        '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
        '<span style="font-size:12px;font-weight:700;padding:2px 8px;background:#f1f5f9;border-radius:20px;">' + diffLabel[ML_QUIZ_STATE.difficulty] + wrongBadge + '</span>' +
        '<span style="font-size:12px;color:#64748b;">ML अनुकूलित क्विज़</span></div>' +
        streakBar +
        '<div style="font-weight:600;margin-bottom:12px;font-size:15px;">' + mlCurrentQuestion.q + '</div>' +
        mlCurrentQuestion.opts.map(function (opt, i) {
            return '<button class="quiz-option" style="display:block;width:100%;margin-bottom:8px;text-align:left;" onclick="mlHandleAnswer(' + i + ')">' + opt + '</button>';
        }).join('') +
        '<div id="ml-quiz-feedback" style="margin-top:8px;font-weight:600;"></div>';
}

function mlHandleAnswer(idx) {
    var correct = mlRecordAnswer(mlCurrentQuestion, idx);
    var fb = document.getElementById('ml-quiz-feedback');
    var btns = document.querySelectorAll('#ml-quiz-box .quiz-option');
    btns.forEach(function (b, i) {
        b.disabled = true;
        if (i === mlCurrentQuestion.ans) b.style.background = '#dcfce7';
        else if (i === idx && !correct) b.style.background = '#fee2e2';
    });
    if (fb) {
        fb.innerText = correct
            ? '✅ सही! ' + (ML_QUIZ_STATE.streak > 1 ? ML_QUIZ_STATE.streak + ' की स्ट्रीक!' : '')
            : '❌ गलत। सही जवाब याद रखें — इसे दोबारा पूछा जाएगा।';
        fb.style.color = correct ? '#16a34a' : '#dc2626';
    }
    speakText(correct ? 'बिल्कुल सही!' : 'गलत जवाब। इसे ध्यान में रखें।');
    setTimeout(mlStartAdaptiveQuiz, 2000);
}

// ============================================================
// 🤖 ML MODULE 4 — COSINE SIMILARITY CANDIDATE MATCHER
// Matches user's selected issues to candidate profiles
// Uses TF-IDF-style vector dot product
// ============================================================
var ML_CANDIDATE_PROFILES = [
    {
        name: 'अनिता देवी', party: 'जनसेवा दल', symbol: '🌻',
        vector: { water: 0.9, roads: 0.3, jobs: 0.5, health: 0.7, education: 0.4, safety: 0.2 },
        summary: 'पानी और स्वास्थ्य सुविधाओं पर मजबूत काम किया है।'
    },
    {
        name: 'रमेश पटेल', party: 'विकास पार्टी', symbol: '🐘',
        vector: { water: 0.2, roads: 0.9, jobs: 0.8, health: 0.3, education: 0.5, safety: 0.6 },
        summary: 'सड़क निर्माण और रोजगार के लिए जाने जाते हैं।'
    },
    {
        name: 'सुनीता राव', party: 'शिक्षा मंच', symbol: '📚',
        vector: { water: 0.3, roads: 0.2, jobs: 0.4, health: 0.6, education: 0.95, safety: 0.5 },
        summary: 'शिक्षा और महिला सुरक्षा की प्रमुख आवाज़।'
    },
    {
        name: 'करण सिंह', party: 'सुरक्षा मोर्चा', symbol: '🛡️',
        vector: { water: 0.4, roads: 0.5, jobs: 0.6, health: 0.4, education: 0.3, safety: 0.95 },
        summary: 'कानून व्यवस्था और रोजगार के पक्षधर।'
    }
];

function mlCosineSimilarity(userVec, candVec) {
    var dot = 0, magU = 0, magC = 0;
    for (var k in userVec) {
        var u = userVec[k] || 0;
        var c = candVec[k] || 0;
        dot += u * c;
        magU += u * u;
        magC += c * c;
    }
    var denom = Math.sqrt(magU) * Math.sqrt(magC);
    return denom === 0 ? 0 : dot / denom;
}

function mlRankCandidates(selectedIssues) {
    // Build user vector: 1 for selected issues
    var userVec = { water: 0, roads: 0, jobs: 0, health: 0, education: 0, safety: 0 };
    selectedIssues.forEach(function (issue) { if (userVec[issue] !== undefined) userVec[issue] = 1; });

    return ML_CANDIDATE_PROFILES.map(function (c) {
        return { candidate: c, score: mlCosineSimilarity(userVec, c.vector) };
    }).sort(function (a, b) { return b.score - a.score; });
}

var mlSelectedIssues = [];
function mlToggleIssue(issue, btn) {
    var idx = mlSelectedIssues.indexOf(issue);
    if (idx === -1) { mlSelectedIssues.push(issue); btn.classList.add('active'); }
    else { mlSelectedIssues.splice(idx, 1); btn.classList.remove('active'); }
    mlShowCandidateRanking();
}

function mlShowCandidateRanking() {
    var resultsEl = document.getElementById('ml-candidate-results');
    if (!resultsEl) return;
    if (mlSelectedIssues.length === 0) {
        resultsEl.innerHTML = '<p style="color:#94a3b8;font-size:13px;">ऊपर कोई मुद्दा चुनें — ML आपके लिए उम्मीदवार रैंक करेगा।</p>';
        return;
    }
    var ranked = mlRankCandidates(mlSelectedIssues);
    resultsEl.innerHTML = '<div style="font-size:12px;color:#64748b;margin-bottom:10px;">🔢 Cosine Similarity से रैंकिंग (आपके मुद्दों के आधार पर)</div>' +
        ranked.map(function (r, i) {
            var pct = Math.round(r.score * 100);
            var medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '  ';
            return '<div style="background:' + (i === 0 ? '#f0fdf4' : '#f8fafc') + ';border:1px solid ' + (i === 0 ? '#bbf7d0' : '#e2e8f0') + ';border-radius:10px;padding:10px;margin-bottom:8px;">' +
                '<div style="display:flex;justify-content:space-between;align-items:center;">' +
                '<strong>' + medal + ' ' + r.candidate.symbol + ' ' + r.candidate.name + '</strong>' +
                '<span style="font-size:12px;background:#e0f2fe;color:#0369a1;padding:2px 8px;border-radius:20px;">' + pct + '% मिलान</span></div>' +
                '<div style="font-size:12px;color:#64748b;margin-top:4px;">' + r.candidate.party + ' · ' + r.candidate.summary + '</div>' +
                '<div style="background:#e2e8f0;height:4px;border-radius:4px;margin-top:6px;"><div style="width:' + pct + '%;background:' + (i === 0 ? '#16a34a' : '#3b82f6') + ';height:4px;border-radius:4px;"></div></div>' +
                '</div>';
        }).join('');
}

// ============================================================
// 🤖 ML MODULE 5 — FAKE NEWS / MISINFORMATION DETECTOR
// TF-IDF keyword heuristics to flag suspicious claims
// ============================================================
var ML_FAKE_SIGNALS = [
    'evm hack', 'evm rigged', 'evm tamper', 'evm hacked',
    'vote cancelled', 'vote stolen', 'votes lost', 'results fake', 'election fake',
    'no need to vote', 'voting useless', 'your vote deleted',
    'ईवीएम हैक', 'ईवीएम में गड़बड़', 'वोट रद्द', 'वोट चोरी', 'चुनाव नकली',
    'वोट बेकार', 'वोट नहीं देना', 'वोट डिलीट', 'नतीजे झूठे'
];
var ML_TRUTH_RESPONSES = {
    en: 'This claim contains misinformation signals. EVM machines are verified independently. Your vote is safe and counted.',
    hi: 'यह दावा संदिग्ध लगता है। EVM मशीनें स्वतंत्र रूप से जाँची जाती हैं। आपका वोट सुरक्षित और गिना जाता है। चुनाव आयोग की आधिकारिक जानकारी पर भरोसा करें।'
};

function mlCheckFakeNews(text) {
    var q = text.toLowerCase();
    var matches = ML_FAKE_SIGNALS.filter(function (sig) { return q.includes(sig); });
    if (matches.length > 0) {
        return { isSuspicious: true, warning: ML_TRUTH_RESPONSES.hi };
    }
    return { isSuspicious: false };
}

// ============================================================
// 🤖 ML MODULE 6 — LEARNING PROFILE (Collaborative Filtering)
// Tracks topics explored; suggests next topic to learn
// ============================================================
var ML_LEARNING_PROFILE = {
    topicsExplored: {},  // topic → count
    totalInteractions: 0
};

var ML_TOPIC_GRAPH = {
    // topic → suggested next topics
    registration: ['documents', 'booth', 'eligibility'],
    documents: ['registration', 'evm', 'rights'],
    evm: ['nota', 'booth', 'documents'],
    nota: ['rights', 'evm', 'general'],
    booth: ['evm', 'documents', 'registration'],
    rights: ['registration', 'nota', 'eligibility'],
    eligibility: ['registration', 'documents', 'rights'],
    general: ['registration', 'evm', 'rights']
};

function mlRecordInteraction(intent) {
    ML_LEARNING_PROFILE.topicsExplored[intent] = (ML_LEARNING_PROFILE.topicsExplored[intent] || 0) + 1;
    ML_LEARNING_PROFILE.totalInteractions++;
    mlUpdateLearningBadge();
}

function mlGetSuggestedTopic() {
    var explored = ML_LEARNING_PROFILE.topicsExplored;
    // Find the most-asked topic, suggest what hasn't been explored from its graph
    var mostAsked = Object.keys(explored).sort(function (a, b) { return explored[b] - explored[a]; })[0] || 'general';
    var graph = ML_TOPIC_GRAPH[mostAsked] || [];
    var unexplored = graph.filter(function (t) { return !explored[t]; });
    return unexplored[0] || graph[0] || 'registration';
}

var ML_TOPIC_LABELS_HI = {
    registration: 'मतदाता पंजीकरण',
    documents: 'जरूरी दस्तावेज़',
    evm: 'EVM से वोट करना',
    nota: 'NOTA क्या है',
    booth: 'मतदान केंद्र',
    rights: 'मतदाता अधिकार',
    eligibility: 'पात्रता जानें',
    general: 'चुनाव की जानकारी'
};

function mlUpdateLearningBadge() {
    var badge = document.getElementById('ml-learning-badge');
    if (!badge) return;
    var explored = Object.keys(ML_LEARNING_PROFILE.topicsExplored).length;
    var total = 8;
    var pct = Math.round((explored / total) * 100);
    var next = mlGetSuggestedTopic();
    badge.innerHTML =
        '<div style="font-size:12px;color:#7c3aed;font-weight:700;">🧠 ML लर्निंग प्रोफ़ाइल</div>' +
        '<div style="font-size:12px;color:#64748b;margin:4px 0;">' + explored + '/' + total + ' विषय सीखे · ' + ML_LEARNING_PROFILE.totalInteractions + ' सवाल पूछे</div>' +
        '<div style="background:#e2e8f0;height:6px;border-radius:6px;margin:6px 0;"><div style="width:' + pct + '%;background:#7c3aed;height:6px;border-radius:6px;transition:width 0.5s;"></div></div>' +
        '<div style="font-size:12px;">💡 अगला विषय: <strong>' + (ML_TOPIC_LABELS_HI[next] || next) + '</strong>' +
        ' <button onclick="sendToAI(\'' + (ML_TOPIC_LABELS_HI[next] || next) + ' के बारे में बताएं\')" style="background:#7c3aed;color:#fff;border:none;border-radius:6px;padding:2px 8px;font-size:11px;cursor:pointer;margin-left:6px;">पूछें</button></div>';
}

// ============================================================
// HOOK ML INTO sendToAI
// ============================================================
var _originalSendToAI = sendToAI;
sendToAI = async function (question) {
    // ML 5: Fake news check
    var fakeCheck = mlCheckFakeNews(question);
    if (fakeCheck.isSuspicious) {
        var chatContainer = document.getElementById('chat-messages');
        chatContainer.innerHTML += '<div class="chat-bubble user">' + question + '</div>';
        chatContainer.innerHTML += '<div class="chat-bubble bot" style="border-left:4px solid #dc2626;background:#fef2f2;">⚠️ <strong>तथ्य-जाँच अलर्ट (ML):</strong><br>' + fakeCheck.warning + '</div>';
        chatContainer.scrollTop = chatContainer.scrollHeight;
        speakText(fakeCheck.warning);
        mlRecordInteraction('fakenews');
        return;
    }

    // ML 1: Intent classification
    var intentResult = mlClassifyIntent(question);

    // ML 2: Sentiment detection
    var sentiment = mlDetectSentiment(question);
    var toneInstruction = mlSentimentToneInstruction(sentiment);

    // ML 6: Record interaction for learning profile
    mlRecordInteraction(intentResult.intent);

    // Show intent tag in chat before sending
    var chatContainer = document.getElementById('chat-messages');
    var intentBadge = '<div style="font-size:11px;color:#7c3aed;margin-bottom:4px;">🧠 ML: ' + intentResult.label;
    if (intentResult.confidence > 0) {
        intentBadge += ' · भावना: ' + { confused: '😕 भ्रमित', frustrated: '😤 परेशान', confident: '😊 उत्सुक', neutral: '😐 सामान्य' }[sentiment];
    }
    intentBadge += '</div>';
    chatContainer.innerHTML += intentBadge;

    // Inject tone instruction into system prompt
    var savedPrompt = HINDI_SYSTEM_PROMPT;
    if (toneInstruction) HINDI_SYSTEM_PROMPT = HINDI_SYSTEM_PROMPT + toneInstruction;
    await _originalSendToAI(question);
    HINDI_SYSTEM_PROMPT = savedPrompt;
};

// --- 14. Global Utilities ---
function readPageAloud() {
    var active = document.querySelector('.section.active');
    if (active) speakText(active.innerText);
}

function showToast(msg) {
    var toast = document.getElementById('toast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.remove('hidden');
    setTimeout(function () { toast.classList.add('hidden'); }, 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    currentLang = 'hi';
    var langSelect = document.getElementById('language-select');
    if (langSelect) langSelect.value = 'hi';
    renderAll();
    // Set initial chat greeting in Hindi
    var chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
        chatContainer.innerHTML = '<div class="chat-bubble bot" style="background:#f1f5f9;padding:10px;border-radius:10px;margin-bottom:10px;">👋 नमस्ते! मैं आपका चुनाव सहायक हूँ। मतदान, उम्मीदवारों या अपने अधिकारों के बारे में मुझसे कुछ भी पूछें।</div>';
    }
    // Initialize voice toggle UI
    updateVoiceToggleUI();
    // Try loading Hindi voice after short delay (Chrome needs time)
    setTimeout(loadHindiVoice, 500);

    // 🤖 Initialize ML modules
    setTimeout(function () {
        mlStartAdaptiveQuiz();       // ML Quiz (Spaced Repetition)
        mlUpdateLearningBadge();     // ML Learning Profile
        mlShowCandidateRanking();    // ML Cosine Similarity (empty state)
    }, 300);

    // 📡 Register Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('sw.js').then(function(reg) {
                console.log('SW Registered');
            }).catch(function(err) {
                console.log('SW failed', err);
            });
        });
    }
});

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { getI18n, applyLanguage, findBooth };
}