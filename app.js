// --- Translation Dictionary (i18n) ---
const i18n = {
    en: {
        nav: { steps: "📋 Steps", timeline: "📅 Timeline", words: "📖 Words", voice: "🎙️ Voice", scan: "📸 Scan", quiz: "🧠 Quiz" },
        ui: {
            headerSteps: "How an Election Works", descSteps: "Tap each step to learn more — pictures and simple words.",
            askStepsTitle: "💬 Ask a question about any step:",
            headerTimeline: "Election Timeline", headerWords: "Election Words", descWords: "Tap a card to flip open a simple definition.",
            headerVoice: "Ask the Election AI", micStatus: "Tap to speak",
            headerScan: "Scan Document", descScan: "Read any paper or poster aloud.", scanPrompt: "📷 Tap to capture or upload", btnReadAloud: "🔊 Read Aloud",
            headerQuiz: "Quiz", globalRead: "🔊 Read Page",
            readDoc: "Reading document...", defaultVoiceResp: "Hello! I am your election assistant. Ask me anything.",
            listening: "Listening...", read: "🔊 Read"
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
            { q: 'What machine is used to cast votes?', opts: ['EVM', 'ATM', 'Computer'], ans: 0 },
            { q: 'Can anyone know who you voted for?', opts: ['Yes', 'No, it is secret'], ans: 1 }
        ]
    },
    hi: {
        nav: { steps: "📋 चरण", timeline: "📅 समयरेखा", words: "📖 शब्दकोष", voice: "🎙️ आवाज़", scan: "📸 स्कैन", quiz: "🧠 क्विज़" },
        ui: {
            headerSteps: "चुनाव कैसे होता है", descSteps: "अधिक जानने के लिए प्रत्येक चरण पर टैप करें।",
            askStepsTitle: "💬 किसी भी चरण के बारे में पूछें:",
            headerTimeline: "चुनाव समयरेखा", headerWords: "चुनाव शब्दकोष", descWords: "परिभाषा खोलने के लिए कार्ड पर टैप करें।",
            headerVoice: "चुनाव सहायक से पूछें", micStatus: "बोलने के लिए टैप करें",
            headerScan: "दस्तावेज़ स्कैन", descScan: "कोई भी कागज़ या पोस्टर जोर से पढ़ें।", scanPrompt: "📷 स्कैन या अपलोड करने के लिए टैप करें", btnReadAloud: "🔊 जोर से पढ़ें",
            headerQuiz: "क्विज़", globalRead: "🔊 पेज पढ़ें",
            readDoc: "दस्तावेज़ पढ़ रहा हूँ...", defaultVoiceResp: "नमस्ते! मैं आपका चुनाव सहायक हूँ। मुझसे कुछ भी पूछें।",
            listening: "सुन रहा हूँ...", read: "🔊 पढ़ें"
        },
        chips: ["कौन वोट दे सकता है?", "मुझे किस आईडी की जरूरत है?", "उम्मीदवार कैसे रजिस्टर करते हैं?"],
        chatGreeting: "👋 नमस्ते! मैं आपका चुनाव सहायक हूँ। वोटिंग, उम्मीदवार, या अपने अधिकारों के बारे में कुछ भी पूछें।",
        chatPlaceholder: "अपना सवाल लिखें...",
        chatSend: "भेजें",
        mythLabel: "मिथक",
        factLabel: "तथ्य",
        quizResult: function (s, t) { return "आपने " + t + " में से " + s + " सही उत्तर दिए!"; },
        steps: [
            { num: 1, icon: '📣', title: 'चुनाव की घोषणा', desc: 'सरकार मतदान की तारीख तय करती है', details: 'भारत निर्वाचन आयोग आधिकारिक तौर पर चुनाव की घोषणा करता है।', tip: 'चुनाव आयोग स्वतंत्र है — यह निष्पक्ष चुनाव सुनिश्चित करता है।' },
            { num: 2, icon: '📝', title: 'उम्मीदवार पंजीकरण', desc: 'जो नेता बनना चाहते हैं', details: 'कोई भी योग्य नागरिक उम्मीदवार के रूप में पंजीकरण कर सकता है।', tip: '25+ वर्ष का कोई भी नागरिक चुनाव लड़ सकता है।' },
            { num: 3, icon: '📢', title: 'चुनाव प्रचार', desc: 'उम्मीदवार बताते हैं कि उन्हें वोट क्यों दें', details: 'उम्मीदवार रैलियां करते हैं, और अपनी योजनाओं को बताने के लिए पोस्टर लगाते हैं।', tip: 'उम्मीदवारों के खर्च पर सख्त नियम होते हैं।' },
            { num: 4, icon: '🗳️', title: 'मतदान का दिन', desc: 'नागरिक मतदान केंद्र पर वोट देते हैं', details: 'आप अपने स्थानीय मतदान केंद्र पर जाते हैं, वोटर आईडी दिखाते हैं और ईवीएम का उपयोग करते हैं।', tip: 'आपका वोट गुप्त है — कोई नहीं जान सकता कि आपने किसे वोट दिया।' },
            { num: 5, icon: '📦', title: 'वोटों की गिनती', desc: 'अधिकारी वोटों की गिनती करते हैं', details: 'मतदान समाप्त होने के बाद, प्रशिक्षित अधिकारी हर वोट की गिनती करते हैं।', tip: 'परिणाम आमतौर पर उसी दिन घोषित किए जाते हैं।' },
            { num: 6, icon: '🏆', title: 'विजेता की घोषणा', desc: 'सबसे अधिक वोट पाने वाला नेता बनता है', details: 'सभी वोटों की गिनती के बाद, विजेता की घोषणा की जाती है।', tip: 'सबसे अधिक सीटें जीतने वाली पार्टी सरकार बनाती है।' },
            { num: 7, icon: '🤝', title: 'शपथ ग्रहण', desc: 'विजेता शपथ लेते हैं', details: 'चुने गए नेता लोगों की सेवा करने की शपथ लेते हैं।', tip: 'प्रधानमंत्री को राष्ट्रपति द्वारा शपथ दिलाई जाती है।' }
        ],
        timeline: [
            { date: 'महीनों पहले', title: 'वोटर रजिस्ट्रेशन', desc: 'वोटर आईडी के लिए अप्लाई करें।' },
            { date: '6-8 हफ्ते पहले', title: 'चुनाव की घोषणा', desc: 'तारीखें जारी की जाती हैं।' },
            { date: '4 हफ्ते पहले', title: 'उम्मीदवार तय', desc: 'लिस्ट तैयार है।' },
            { date: '2-4 हफ्ते पहले', title: 'चुनाव प्रचार', desc: 'रैलियां और भाषण।' },
            { date: '2 दिन पहले', title: 'प्रचार खत्म', desc: 'शांत अवधि।' },
            { date: 'चुनाव का दिन', title: 'मतदान', desc: 'लोग वोट डालते हैं।', highlight: true },
            { date: '1-3 दिन बाद', title: 'परिणाम', desc: 'वोटों की गिनती।' },
            { date: 'हफ्तों बाद', title: 'शपथ ग्रहण', desc: 'सरकार सत्ता संभालती है।' }
        ],
        glossary: [
            { term: 'चुनाव आयोग', icon: '⚖️', def: 'स्वतंत्र निकाय जो चुनाव करवाता है।' },
            { term: 'ईवीएम (EVM)', icon: '📠', def: 'इलेक्ट्रॉनिक वोटिंग मशीन। वोट देने के लिए इस्तेमाल होती है।' },
            { term: 'वोटर आईडी', icon: '🪪', def: 'कार्ड जो साबित करता है कि आप वोट दे सकते हैं।' },
            { term: 'उम्मीदवार', icon: '🙋🏽', def: 'वह व्यक्ति जो आपका वोट मांग रहा है।' },
            { term: 'मतदान केंद्र', icon: '🏫', def: 'वह जगह जहां आप वोट देने जाते हैं।' },
            { term: 'नोटा (NOTA)', icon: '❌', def: 'इनमें से कोई नहीं। सभी को अस्वीकार करने का बटन।' }
        ],
        rights: [
            { title: 'मतदान का अधिकार', desc: 'हर 18+ नागरिक को बिना भेदभाव के वोट देने का अधिकार है।' },
            { title: 'जानकारी का अधिकार', desc: 'आपको उम्मीदवारों की पृष्ठभूमि जानने का अधिकार है।' },
            { title: 'गुप्त मतदान का अधिकार', desc: 'कोई भी आपको यह बताने के लिए मजबूर नहीं कर सकता कि आपने किसे वोट दिया।' },
            { title: 'सहायता का अधिकार', desc: 'विकलांग मतदाता किसी साथी को मदद के लिए ले जा सकते हैं।' }
        ],
        myths: [
            { m: "मेरे वोट से कोई फर्क नहीं पड़ता।", f: "हर वोट मायने रखता है। कई चुनाव 100 से कम वोटों से जीते जाते हैं!" },
            { m: "वोट देने के लिए वोटर आईडी कार्ड जरूरी है।", f: "अगर आपका नाम सूची में है तो आप 12 मंजूर फोटो आईडी में से किसी से भी वोट दे सकते हैं।" },
            { m: "अगर मुझे कोई उम्मीदवार पसंद नहीं तो मैं न जाऊं।", f: "अपना विरोध दर्ज करने के लिए NOTA (इनमें से कोई नहीं) बटन का उपयोग करें।" }
        ],
        aiAnswers: {
            default: "मुझे इस बारे में पूरी जानकारी नहीं है, लेकिन वोट देना आपकी शक्ति है! वोटर आईडी, NOTA या मतदान के बारे में पूछें।",
            id: "आपको वोटर आईडी (EPIC कार्ड) की जरूरत है। अगर वो नहीं है तो आधार, PAN कार्ड, ड्राइविंग लाइसेंस या पासपोर्ट से भी काम चलेगा — बशर्ते आपका नाम मतदाता सूची में हो।",
            address: "अगर आप स्थानांतरित हो गए हैं तो NVSP पोर्टल पर फॉर्म 8 से अपना पता अपडेट करें ताकि आप नई सीट पर वोट दे सकें।",
            nota: "NOTA का मतलब है 'इनमें से कोई नहीं'। इससे आप सभी उम्मीदवारों को आधिकारिक रूप से अस्वीकार कर सकते हैं।",
            ink: "बाएं तर्जनी पर अमिट स्याही लगाई जाती है ताकि दोबारा वोट न हो। अगर न लगाई जाए तो अधिकारी को सूचित करें।",
            age: "कोई भी भारतीय नागरिक जो अर्हता तिथि को 18 वर्ष या उससे अधिक का है, मतदाता के रूप में पंजीकरण के योग्य है।",
            name: "अगर आपका नाम गायब है तो मतदाता सूची ऑनलाइन जांचें। आप तभी वोट दे सकते हैं जब आपका नाम आधिकारिक सूची में हो।",
            candidate: "उम्मीदवार नामांकन पत्र, आवश्यक दस्तावेज और जमानत राशि के साथ चुनाव प्राधिकरण के पास पंजीकरण करते हैं।"
        },
        quiz: [
            { q: 'भारत में चुनाव कौन करवाता है?', opts: ['प्रधानमंत्री', 'चुनाव आयोग', 'पुलिस'], ans: 1 },
            { q: 'वोट देने के लिए आपकी उम्र कितनी होनी चाहिए?', opts: ['16 साल', '18 साल', '21 साल'], ans: 1 },
            { q: 'वोट डालने के लिए किस मशीन का उपयोग किया जाता है?', opts: ['ईवीएम', 'एटीएम', 'कंप्यूटर'], ans: 0 },
            { q: 'क्या कोई जान सकता है कि आपने किसे वोट दिया?', opts: ['हाँ', 'नहीं, यह गुप्त है'], ans: 1 }
        ]
    },
    ta: {
        nav: { steps: "📋 படிகள்", timeline: "📅 காலவரிசை", words: "📖 வார்த்தைகள்", voice: "🎙️ குரல்", scan: "📸 ஸ்கேன்", quiz: "🧠 வினாடி வினா" },
        ui: {
            headerSteps: "தேர்தல் எப்படி நடக்கிறது", descSteps: "மேலும் அறிய ஒவ்வொரு படியையும் தட்டவும்.",
            askStepsTitle: "💬 எந்த படியைப் பற்றியும் கேளுங்கள்:",
            headerTimeline: "தேர்தல் காலவரிசை", headerWords: "தேர்தல் வார்த்தைகள்", descWords: "வரையறையை திறக்க அட்டையை தட்டவும்.",
            headerVoice: "தேர்தல் AI யிடம் கேளுங்கள்", micStatus: "பேச தட்டவும்",
            headerScan: "ஆவணம் ஸ்கேன்", descScan: "எந்த காகிதத்தையும் சத்தமாக படியுங்கள்.", scanPrompt: "📷 ஸ்கேன் செய்ய தட்டவும்", btnReadAloud: "🔊 சத்தமாக படி",
            headerQuiz: "வினாடி வினா", globalRead: "🔊 பக்கம் படி",
            readDoc: "ஆவணம் படிக்கிறது...", defaultVoiceResp: "வணக்கம்! நான் உங்கள் தேர்தல் உதவியாளர். என்னிடம் எதையும் கேளுங்கள்.",
            listening: "கேட்கிறேன்...", read: "🔊 படி"
        },
        chips: ["யார் வாக்களிக்கலாம்?", "எனக்கு என்ன ID வேண்டும்?", "வேட்பாளர்கள் எப்படி பதிவு செய்கிறார்கள்?"],
        chatGreeting: "👋 வணக்கம்! நான் உங்கள் தேர்தல் உதவியாளர். வாக்களிப்பு, வேட்பாளர்கள் அல்லது உங்கள் உரிமைகள் பற்றி எதையும் கேளுங்கள்.",
        chatPlaceholder: "உங்கள் கேள்வியை தட்டச்சு செய்யுங்கள்...",
        chatSend: "அனுப்பு",
        mythLabel: "மூடநம்பிக்கை",
        factLabel: "உண்மை",
        quizResult: function (s, t) { return "நீங்கள் " + t + " இல் " + s + " சரியாக பதிலளித்தீர்கள்!"; },
        steps: [
            { num: 1, icon: '📣', title: 'தேர்தல் அறிவிப்பு', desc: 'அரசு வாக்களிப்பு தேதி நிர்ணயிக்கிறது', details: 'இந்திய தேர்தல் ஆணையம் தேர்தல் நடைபெறும் என்று அதிகாரப்பூர்வமாக அறிவிக்கிறது.', tip: 'தேர்தல் ஆணையம் சுதந்திரமானது — இது நியாயமான தேர்தலை உறுதி செய்கிறது.' },
            { num: 2, icon: '📝', title: 'வேட்பாளர் பதிவு', desc: 'தலைவராக விரும்புவோர் பதிவு செய்கின்றனர்', details: 'தகுதியான எந்த குடிமகனும் வேட்பாளராக பதிவு செய்யலாம்.', tip: '25+ வயதுள்ள எந்த குடிமகனும் நாடாளுமன்றத்திற்கு போட்டியிடலாம்.' },
            { num: 3, icon: '📢', title: 'தேர்தல் பரப்புரை', desc: 'வேட்பாளர்கள் ஏன் வாக்களிக்க வேண்டும் என்று விளக்குகிறார்கள்', details: 'வேட்பாளர்கள் கூட்டங்கள் நடத்தி தங்கள் திட்டங்களை மக்களிடம் கூறுகிறார்கள்.', tip: 'வேட்பாளர்கள் செலவழிக்கக்கூடிய தொகையில் கடுமையான விதிகள் உள்ளன.' },
            { num: 4, icon: '🗳️', title: 'வாக்களிப்பு நாள்', desc: 'குடிமக்கள் வாக்குச்சாவடிக்கு சென்று வாக்களிக்கிறார்கள்', details: 'நீங்கள் உங்கள் உள்ளூர் வாக்குச்சாவடிக்கு சென்று வாக்காளர் அட்டை காட்டி EVM இல் வாக்களிக்கிறீர்கள்.', tip: 'உங்கள் வாக்கு ரகசியமானது — யாரும் நீங்கள் யாருக்கு வாக்களித்தீர்கள் என்று அறிய மாட்டார்கள்.' },
            { num: 5, icon: '📦', title: 'வாக்குகள் எண்ணப்படுகின்றன', desc: 'அதிகாரிகள் அனைத்து வாக்குகளையும் கவனமாக எண்ணுகிறார்கள்', details: 'வாக்களிப்பு முடிந்த பிறகு, பயிற்சி பெற்ற அதிகாரிகள் ஒவ்வொரு வாக்கையும் எண்ணுகிறார்கள்.', tip: 'முடிவுகள் பொதுவாக எண்ணிக்கை தொடங்கிய அன்றே அறிவிக்கப்படும்.' },
            { num: 6, icon: '🏆', title: 'வெற்றியாளர் அறிவிப்பு', desc: 'அதிக வாக்குகள் பெற்றவர் தலைவராகிறார்', details: 'அனைத்து வாக்குகளும் எண்ணப்பட்ட பிறகு, வெற்றியாளர் அதிகாரப்பூர்வமாக அறிவிக்கப்படுகிறார்.', tip: 'அதிக இடங்களை வென்ற கட்சி அரசாங்கத்தை அமைக்கிறது.' },
            { num: 7, icon: '🤝', title: 'புதிய அரசு பதவியேற்பு', desc: 'வெற்றியாளர்கள் பதவியேற்று பணி ஆரம்பிக்கிறார்கள்', details: 'தேர்ந்தெடுக்கப்பட்ட தலைவர்கள் மக்களுக்கு நேர்மையாக சேவை செய்வதாக சத்தியப்பிரமாணம் செய்கிறார்கள்.', tip: 'பிரதம மந்திரி இந்தியாவின் ஜனாதிபதியால் பதவியேற்கப்படுகிறார்.' }
        ],
        timeline: [
            { date: 'மாதங்களுக்கு முன்', title: 'வாக்காளர் பதிவு', desc: 'வாக்காளர் அட்டைக்கு விண்ணப்பிக்கவும்.' },
            { date: '6-8 வாரங்களுக்கு முன்', title: 'தேர்தல் அறிவிப்பு', desc: 'தேதிகள் வெளியிடப்படுகின்றன.' },
            { date: '4 வாரங்களுக்கு முன்', title: 'வேட்பாளர்கள் இறுதி', desc: 'பட்டியல் தயார்.' },
            { date: '2-4 வாரங்களுக்கு முன்', title: 'பரப்புரை', desc: 'கூட்டங்கள் & உரைகள்.' },
            { date: '2 நாட்களுக்கு முன்', title: 'பரப்புரை முடிவு', desc: 'அமைதி காலம்.' },
            { date: 'தேர்தல் நாள்', title: 'வாக்களிப்பு', desc: 'மக்கள் வாக்களிக்கிறார்கள்.', highlight: true },
            { date: '1-3 நாட்களுக்கு பிறகு', title: 'முடிவுகள்', desc: 'வாக்குகள் எண்ணப்படுகின்றன.' },
            { date: 'வாரங்களுக்கு பிறகு', title: 'பதவியேற்பு', desc: 'அரசு பொறுப்பேற்கிறது.' }
        ],
        glossary: [
            { term: 'தேர்தல் ஆணையம்', icon: '⚖️', def: 'தேர்தலை நடுநிலையாக நடத்தும் சுதந்திர அமைப்பு.' },
            { term: 'EVM', icon: '📠', def: 'மின்னணு வாக்குப்பதிவு இயந்திரம். வாக்களிக்க பயன்படுகிறது.' },
            { term: 'வாக்காளர் அட்டை', icon: '🪪', def: 'நீங்கள் வாக்களிக்க தகுதியானவர் என்பதை நிரூபிக்கும் அட்டை.' },
            { term: 'வேட்பாளர்', icon: '🙋🏽', def: 'உங்கள் வாக்கை கேட்கும் நபர்.' },
            { term: 'வாக்குச்சாவடி', icon: '🏫', def: 'நீங்கள் வாக்களிக்க செல்லும் இடம்.' },
            { term: 'NOTA', icon: '❌', def: 'மேற்கண்டவர்களில் யாரும் இல்லை. அனைவரையும் நிராகரிக்கும் பொத்தான்.' }
        ],
        rights: [
            { title: 'வாக்களிக்கும் உரிமை', desc: '18+ வயதுள்ள ஒவ்வொரு குடிமகனுக்கும் பாரபட்சமின்றி வாக்களிக்கும் உரிமை உண்டு.' },
            { title: 'தகவல் உரிமை', desc: 'வேட்பாளர்களின் பின்னணி பற்றி அறிய உங்களுக்கு உரிமை உண்டு.' },
            { title: 'ரகசிய வாக்குரிமை', desc: 'நீங்கள் யாருக்கு வாக்களித்தீர்கள் என்று யாரும் வலியுறுத்த முடியாது.' },
            { title: 'உதவி உரிமை', desc: 'ஊனமுற்ற வாக்காளர்கள் உதவிக்காக ஒரு துணையை அழைத்து செல்லலாம்.' }
        ],
        myths: [
            { m: "என் வாக்கு முக்கியமில்லை.", f: "ஒவ்வொரு வாக்கும் முக்கியம். பல தேர்தல்கள் 100க்கும் குறைவான வாக்குகளால் வெல்லப்படுகின்றன!" },
            { m: "வாக்களிக்க வாக்காளர் அட்டை அவசியம்.", f: "பெயர் பட்டியலில் இருந்தால் 12 அங்கீகரிக்கப்பட்ட புகைப்பட அடையாளங்களில் ஏதேனும் ஒன்றால் வாக்களிக்கலாம்." },
            { m: "எனக்கு எந்த வேட்பாளரும் பிடிக்கவில்லை என்றால் நான் போகக்கூடாது.", f: "உங்கள் எதிர்ப்பை பதிவு செய்ய NOTA பொத்தானை பயன்படுத்துங்கள்." }
        ],
        aiAnswers: {
            default: "இது பற்றி எனக்கு நிறைவான தகவல் இல்லை, ஆனால் வாக்களிப்பு உங்கள் சக்தி! வாக்காளர் அட்டை, NOTA அல்லது வாக்களிப்பு பற்றி கேளுங்கள்.",
            id: "உங்களுக்கு வாக்காளர் அட்டை (EPIC) தேவை. இல்லையென்றால் ஆதார், PAN, ஓட்டுநர் உரிமம் அல்லது பாஸ்போர்ட் — உங்கள் பெயர் வாக்காளர் பட்டியலில் இருந்தால் போதும்.",
            address: "நீங்கள் இடம் மாறியிருந்தால், NVSP போர்ட்டலில் படிவம் 8 மூலம் உங்கள் முகவரியை புதுப்பிக்கவும்.",
            nota: "NOTA என்றால் 'மேற்கண்டவர்களில் யாரும் இல்லை'. இது அனைத்து வேட்பாளர்களையும் நிராகரிக்க உதவுகிறது.",
            ink: "மீண்டும் வாக்களிப்பதை தடுக்க இடது ஆட்காட்டி விரலில் அழியாத மை பயன்படுத்தப்படுகிறது. பயன்படுத்தவில்லை என்றால் அதிகாரியிடம் தெரிவியுங்கள்.",
            age: "தகுதி தேதியில் 18 வயது அல்லது அதற்கு மேல் உள்ள எந்த இந்திய குடிமகனும் வாக்காளராக பதிவு செய்யலாம்.",
            name: "உங்கள் பெயர் இல்லையென்றால், வாக்காளர் பட்டியலை ஆன்லைனில் சரிபாருங்கள். அதிகாரப்பூர்வ பட்டியலில் பெயர் இருந்தால் மட்டுமே வாக்களிக்க முடியும்.",
            candidate: "வேட்பாளர்கள் நியமனப் படிவம், தேவையான ஆவணங்கள் மற்றும் வைப்புத்தொகையுடன் தேர்தல் அதிகாரியிடம் பதிவு செய்கிறார்கள்."
        },
        quiz: [
            { q: 'இந்தியாவில் தேர்தல்களை யார் நடத்துகிறார்கள்?', opts: ['பிரதம மந்திரி', 'தேர்தல் ஆணையம்', 'காவல்துறை'], ans: 1 },
            { q: 'வாக்களிக்க எத்தனை வயது வேண்டும்?', opts: ['16 வயது', '18 வயது', '21 வயது'], ans: 1 },
            { q: 'வாக்களிக்க எந்த இயந்திரம் பயன்படுத்தப்படுகிறது?', opts: ['EVM', 'ATM', 'கணினி'], ans: 0 },
            { q: 'நீங்கள் யாருக்கு வாக்களித்தீர்கள் என்று யாரும் அறிய முடியுமா?', opts: ['ஆம்', 'இல்லை, அது ரகசியம்'], ans: 1 }
        ]
    },
    te: {
        nav: { steps: "📋 దశలు", timeline: "📅 కాలరేఖ", words: "📖 పదాలు", voice: "🎙️ వాయిస్", scan: "📸 స్కాన్", quiz: "🧠 క్విజ్" },
        ui: {
            headerSteps: "ఎన్నికలు ఎలా జరుగుతాయి", descSteps: "మరింత తెలుసుకోవడానికి ప్రతి దశను నొక్కండి.",
            askStepsTitle: "💬 ఏదైనా దశ గురించి అడగండి:",
            headerTimeline: "ఎన్నికల కాలరేఖ", headerWords: "ఎన్నికల పదాలు", descWords: "నిర్వచనం చూడటానికి కార్డును నొక్కండి.",
            headerVoice: "ఎన్నికల AI ని అడగండి", micStatus: "మాట్లాడటానికి నొక్కండి",
            headerScan: "డాక్యుమెంట్ స్కాన్", descScan: "ఏదైనా కాగితాన్ని గట్టిగా చదవండి.", scanPrompt: "📷 స్కాన్ చేయడానికి నొక్కండి", btnReadAloud: "🔊 గట్టిగా చదవండి",
            headerQuiz: "క్విజ్", globalRead: "🔊 పేజీ చదవండి",
            readDoc: "డాక్యుమెంట్ చదువుతోంది...", defaultVoiceResp: "నమస్కారం! నేను మీ ఎన్నికల సహాయకుడిని. ఏదైనా అడగండి.",
            listening: "వింటున్నాను...", read: "🔊 చదవండి"
        },
        chips: ["ఎవరు ఓటు వేయవచ్చు?", "నాకు ఏ ID కావాలి?", "అభ్యర్థులు ఎలా నమోదు చేసుకుంటారు?"],
        chatGreeting: "👋 నమస్కారం! నేను మీ ఎన్నికల సహాయకుడిని. ఓటింగ్, అభ్యర్థులు లేదా మీ హక్కుల గురించి ఏదైనా అడగండి.",
        chatPlaceholder: "మీ ప్రశ్న టైప్ చేయండి...",
        chatSend: "పంపండి",
        mythLabel: "మిథ్య",
        factLabel: "వాస్తవం",
        quizResult: function (s, t) { return "మీరు " + t + " లో " + s + " సరిగ్గా సమాధానం ఇచ్చారు!"; },
        steps: [
            { num: 1, icon: '📣', title: 'ఎన్నికల ప్రకటన', desc: 'ప్రభుత్వం ఓటింగ్ తేదీని నిర్ణయిస్తుంది', details: 'భారత ఎన్నికల సంఘం అధికారికంగా ఎన్నికలు జరుగుతాయని ప్రకటిస్తుంది.', tip: 'ఎన్నికల సంఘం స్వతంత్రంగా ఉంటుంది — ఇది న్యాయమైన ఎన్నికలను నిర్ధారిస్తుంది.' },
            { num: 2, icon: '📝', title: 'అభ్యర్థి నమోదు', desc: 'నాయకుడు కావాలనుకునేవారు నమోదు చేసుకుంటారు', details: 'అర్హత గల ఏ పౌరుడైనా అభ్యర్థిగా అధికారికంగా నమోదు చేసుకోవచ్చు.', tip: '25+ సంవత్సరాల ఏ పౌరుడైనా పార్లమెంట్‌కు పోటీ చేయవచ్చు.' },
            { num: 3, icon: '📢', title: 'ప్రచారం', desc: 'అభ్యర్థులు ఎందుకు ఓటు వేయాలో వివరిస్తారు', details: 'అభ్యర్థులు సభలు నిర్వహించి తమ ప్రణాళికలను ప్రజలకు చెప్తారు.', tip: 'అభ్యర్థులు ఖర్చు చేయగలిగే మొత్తంపై కఠిన నియమాలు ఉన్నాయి.' },
            { num: 4, icon: '🗳️', title: 'ఓటింగ్ రోజు', desc: 'పౌరులు పోలింగ్ బూత్‌కు వెళ్ళి ఓటు వేస్తారు', details: 'మీరు మీ స్థానిక పోలింగ్ బూత్‌కు వెళ్ళి వోటర్ ID చూపించి EVM లో ఓటు వేస్తారు.', tip: 'మీ ఓటు రహస్యం — మీరు ఎవరికి ఓటు వేసారో ఎవరికీ తెలియదు.' },
            { num: 5, icon: '📦', title: 'ఓట్ల లెక్కింపు', desc: 'అధికారులు అన్ని ఓట్లను జాగ్రత్తగా లెక్కిస్తారు', details: 'ఓటింగ్ ముగిసిన తర్వాత శిక్షణ పొందిన అధికారులు ప్రతి ఓటును లెక్కిస్తారు.', tip: 'ఫలితాలు సాధారణంగా లెక్కింపు ప్రారంభమైన రోజే ప్రకటించబడతాయి.' },
            { num: 6, icon: '🏆', title: 'విజేత ప్రకటన', desc: 'అత్యధిక ఓట్లు పొందిన వ్యక్తి నాయకుడవుతారు', details: 'అన్ని ఓట్లు లెక్కించబడిన తర్వాత, విజేత అధికారికంగా ప్రకటించబడతారు.', tip: 'అత్యధిక స్థానాలు గెలిచిన పార్టీ ప్రభుత్వాన్ని ఏర్పాటు చేస్తుంది.' },
            { num: 7, icon: '🤝', title: 'ప్రమాణ స్వీకారం', desc: 'విజేతలు ప్రమాణం చేసి పని ప్రారంభిస్తారు', details: 'ఎన్నికైన నాయకులు ప్రజలకు నిజాయితీగా సేవ చేస్తామని ప్రమాణం చేస్తారు.', tip: 'ప్రధానమంత్రి భారత రాష్ట్రపతిచే ప్రమాణ స్వీకారం చేయించబడతారు.' }
        ],
        timeline: [
            { date: 'నెలల ముందు', title: 'ఓటర్ నమోదు', desc: 'ఓటర్ ID కోసం దరఖాస్తు చేయండి.' },
            { date: '6-8 వారాల ముందు', title: 'ఎన్నికల ప్రకటన', desc: 'తేదీలు ప్రచురించబడ్డాయి.' },
            { date: '4 వారాల ముందు', title: 'అభ్యర్థులు ఖరారు', desc: 'జాబితా సిద్ధం.' },
            { date: '2-4 వారాల ముందు', title: 'ప్రచారం', desc: 'సభలు & ప్రసంగాలు.' },
            { date: '2 రోజుల ముందు', title: 'ప్రచారం ముగింపు', desc: 'నిశ్శబ్ద కాలం.' },
            { date: 'ఎన్నికల రోజు', title: 'ఓటింగ్', desc: 'ప్రజలు ఓటు వేస్తారు.', highlight: true },
            { date: '1-3 రోజుల తర్వాత', title: 'ఫలితాలు', desc: 'ఓట్లు లెక్కించబడ్డాయి.' },
            { date: 'వారాల తర్వాత', title: 'ప్రమాణ స్వీకారం', desc: 'ప్రభుత్వం అధికారం చేపట్టింది.' }
        ],
        glossary: [
            { term: 'ఎన్నికల సంఘం', icon: '⚖️', def: 'ఎన్నికలను న్యాయంగా నిర్వహించే స్వతంత్ర సంస్థ.' },
            { term: 'EVM', icon: '📠', def: 'ఎలక్ట్రానిక్ వోటింగ్ మెషీన్. ఓటు వేయడానికి ఉపయోగించబడుతుంది.' },
            { term: 'ఓటర్ ID', icon: '🪪', def: 'మీరు ఓటు వేయగలరని నిరూపించే కార్డు.' },
            { term: 'అభ్యర్థి', icon: '🙋🏽', def: 'మీ ఓటు కోసం అడుగుతున్న వ్యక్తి.' },
            { term: 'పోలింగ్ బూత్', icon: '🏫', def: 'మీరు ఓటు వేయడానికి వెళ్ళే స్థలం.' },
            { term: 'NOTA', icon: '❌', def: 'పైన పేర్కొన్నవారిలో ఎవరూ కాదు. అందరినీ తిరస్కరించే బటన్.' }
        ],
        rights: [
            { title: 'ఓటు వేసే హక్కు', desc: '18+ వయసు ఉన్న ప్రతి పౌరుడికి వివక్ష లేకుండా ఓటు వేసే హక్కు ఉంది.' },
            { title: 'సమాచారం పొందే హక్కు', desc: 'అభ్యర్థుల నేపథ్యం గురించి తెలుసుకునే హక్కు మీకు ఉంది.' },
            { title: 'రహస్య ఓటు హక్కు', desc: 'మీరు ఎవరికి ఓటు వేసారో చెప్పమని ఎవరూ బలవంతం చేయలేరు.' },
            { title: 'సహాయం పొందే హక్కు', desc: 'వికలాంగ ఓటర్లు సహాయం కోసం ఒక సహచరుడిని తీసుకెళ్ళవచ్చు.' }
        ],
        myths: [
            { m: "నా ఓటు ముఖ్యం కాదు.", f: "ప్రతి ఓటు లెక్కిస్తుంది. చాలా ఎన్నికలు 100 కంటే తక్కువ ఓట్లతో గెలుచుకుంటారు!" },
            { m: "ఓటు వేయడానికి ఓటర్ ID కార్డు అవసరం.", f: "మీ పేరు జాబితాలో ఉంటే 12 అనుమతించిన ఫోటో IDలలో దేనితోనైనా ఓటు వేయవచ్చు." },
            { m: "నాకు ఏ అభ్యర్థి నచ్చకపోతే నేను వెళ్ళకూడదు.", f: "మీ నిరసనను నమోదు చేయడానికి NOTA బటన్‌ను ఉపయోగించండి." }
        ],
        aiAnswers: {
            default: "దీని గురించి నాకు పూర్తి సమాచారం లేదు, కానీ ఓటు వేయడం మీ శక్తి! ఓటర్ ID, NOTA లేదా ఓటింగ్ గురించి అడగండి.",
            id: "మీకు ఓటర్ ID (EPIC కార్డు) కావాలి. లేకుంటే ఆధార్, PAN, డ్రైవింగ్ లైసెన్స్ లేదా పాస్‌పోర్ట్ — మీ పేరు ఓటర్ జాబితాలో ఉండాలి.",
            address: "మీరు మారిపోతే, NVSP పోర్టల్‌లో ఫారం 8 ద్వారా మీ చిరునామాను నవీకరించండి.",
            nota: "NOTA అంటే 'పైన పేర్కొన్నవారిలో ఎవరూ కాదు'. ఇది అన్ని అభ్యర్థులను అధికారికంగా తిరస్కరించడానికి అనుమతిస్తుంది.",
            ink: "మళ్ళీ ఓటు వేయడాన్ని నిరోధించడానికి ఎడమ చూపుడు వేలుకు చెరగని సిరా వేయబడుతుంది. వేయకపోతే అధికారికి తెలియజేయండి.",
            age: "అర్హత తేదీన 18 సంవత్సరాలు లేదా అంతకంటే ఎక్కువ వయసు ఉన్న ఏ భారతీయ పౌరుడైనా ఓటర్‌గా నమోదు చేసుకోవడానికి అర్హుడు.",
            name: "మీ పేరు కనుగొనబడకపోతే, ఓటర్ జాబితాను ఆన్‌లైన్‌లో తనిఖీ చేయండి. అధికారిక జాబితాలో పేరు ఉంటేనే ఓటు వేయవచ్చు.",
            candidate: "అభ్యర్థులు నామినేషన్ ఫారం, అవసరమైన పత్రాలు మరియు డిపాజిట్‌తో గడువులోపు ఎన్నికల అధికారి వద్ద నమోదు చేసుకుంటారు."
        },
        quiz: [
            { q: 'భారతదేశంలో ఎన్నికలు ఎవరు నిర్వహిస్తారు?', opts: ['ప్రధాన మంత్రి', 'ఎన్నికల సంఘం', 'పోలీసులు'], ans: 1 },
            { q: 'ఓటు వేయడానికి ఎంత వయసు ఉండాలి?', opts: ['16 సంవత్సరాలు', '18 సంవత్సరాలు', '21 సంవత్సరాలు'], ans: 1 },
            { q: 'ఓటు వేయడానికి ఏ యంత్రం ఉపయోగించబడుతుంది?', opts: ['EVM', 'ATM', 'కంప్యూటర్'], ans: 0 },
            { q: 'మీరు ఎవరికి ఓటు వేసారో ఎవరైనా తెలుసుకోగలరా?', opts: ['అవును', 'లేదు, అది రహస్యం'], ans: 1 }
        ]
    }
};

// Language fallbacks
i18n.kn = i18n.te;   // Kannada → Telugu
i18n.mr = i18n.hi;   // Marathi → Hindi
i18n.bn = i18n.hi;   // Bengali → Hindi
i18n.bho = i18n.hi;   // Bhojpuri → Hindi
i18n.awa = i18n.hi;   // Awadhi → Hindi

let currentLang = 'en';

// BCP-47 language codes for speech
const langBCP47 = {
    en: 'en-IN', hi: 'hi-IN', ta: 'ta-IN',
    te: 'te-IN', kn: 'kn-IN', bn: 'bn-IN',
    mr: 'mr-IN', bho: 'hi-IN', awa: 'hi-IN'
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
        'scan-prompt': 'ui.scanPrompt', 'header-quiz': 'ui.headerQuiz'
    };
    for (var id in uiMap) {
        var el = document.getElementById(id);
        if (el) el.innerText = getI18n(uiMap[id]);
    }

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

// 5. AI Chat — all answers from i18n
function sendToAI(question) {
    var chatContainer = document.getElementById('chat-messages');
    chatContainer.innerHTML += '<div class="chat-bubble user">' + question + '</div>';

    var answers = getI18n('aiAnswers');
    var q = question.toLowerCase();
    var answer = answers.default;

    if (q.includes('voter id') || q.includes('document') || q.includes('card') ||
        q.includes('वोटर') || q.includes('आईडी') || q.includes('அட்டை') || q.includes('కార్డు') || q.includes('id')) {
        answer = answers.id;
    } else if (q.includes('move') || q.includes('address') || q.includes('पता') || q.includes('முகவரி') || q.includes('చిరునామా')) {
        answer = answers.address;
    } else if (q.includes('nota') || q.includes('नोटा') || q.includes('நோட்டா') || q.includes('నోటా')) {
        answer = answers.nota;
    } else if (q.includes('ink') || q.includes('स्याही') || q.includes('மை') || q.includes('సిరా')) {
        answer = answers.ink;
    } else if (q.includes('age') || q.includes('who can vote') || q.includes('उम्र') || q.includes('कौन वोट') || q.includes('வயது') || q.includes('వయసు')) {
        answer = answers.age;
    } else if (q.includes('missing') || q.includes('name') || q.includes('नाम') || q.includes('பெயர்') || q.includes('పేరు')) {
        answer = answers.name;
    } else if (q.includes('candidate') || q.includes('register') || q.includes('उम्मीदवार') || q.includes('வேட்பாளர்') || q.includes('అభ్యర్థి')) {
        answer = answers.candidate;
    }

    setTimeout(function () {
        chatContainer.innerHTML += '<div class="chat-bubble bot">🤖 ' + answer + '</div>';
        chatContainer.scrollTop = chatContainer.scrollHeight;
        speakText(answer);
    }, 600);
}

function sendChatMessage() {
    var input = document.getElementById('chat-input');
    if (input.value.trim()) {
        sendToAI(input.value);
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
    recognition.lang = getSpeechLang();
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
function speakText(text, event) {
    if (event) event.stopPropagation();
    window.speechSynthesis.cancel();
    var utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = getSpeechLang();
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
    renderAll();
    // Set initial chat greeting
    var chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
        chatContainer.innerHTML = '<div class="chat-bubble bot" style="background:#f1f5f9;padding:10px;border-radius:10px;margin-bottom:10px;">' + getI18n('chatGreeting') + '</div>';
    }
});