/* ==========================================
   BHARAT NEXUS - PURE BLACK EDITION SCRIPT
   Option C + Option B + Option A + Voice
========================================== */

(function () {
    "use strict";

    let currentLang = "en";
    let currentFilter = "all";
    let searchQuery = "";
    let activeScenario = "qr";
    let voiceEnabled = false;

    /* 1. MULTILINGUAL UI TEXT */
    const uiText = {
        en: {
            navHome: "Smart Citizen Hub",
            navResume: "Resume Maker",
            navMoney: "EMI & Savings",
            navSafety: "Online Safety",
            navEducation: "Education & Notes",
            navTeam: "Our Team",
            navLibrary: "Knowledge Library →",
            navTerms: "⚖️ Terms & Privacy",
            navLibraryLink: "Knowledge Library",
            navTermsLink: "Terms & Privacy",
            menuLabel: "Menu",
            voiceOff: "Voice: OFF",
            voiceOn: "Voice: ON",
            resHeading: "Resume & Biodata Maker",
            resSub: "Fill in your details below to preview a clean A4 resume live and export it as a PDF.",
            btnSample: "Fill Sample Example",
            btnClear: "Clear Form",
            lblName: "Full Name",
            lblRole: "Target Role / Title",
            lblPhone: "Phone Number",
            lblEmail: "Email Address",
            lblCity: "City & State",
            lblSummary: "Short About Me / Career Goal",
            lblEducation: "Education (College / School / Year)",
            lblSkills: "Skills (Separate with commas)",
            lblExperience: "Projects / Internship / Experience",
            btnPrint: "Download / Print Clean PDF",
            previewLabel: "Live Paper Preview (A4 Ready)",
            moneyHeading: "Visual EMI & Savings Dashboard",
            moneySub: "See real loan interest vs. monthly savings growth visually before making money decisions.",
            emiTitle: "EMI Reality Check",
            emiTag: "Loan & Purchase",
            lblLoanAmt: "Item / Loan Amount (₹)",
            lblRate: "Interest (% / Year)",
            lblMonths: "Months",
            lblMonthlyEmi: "Monthly EMI:",
            lblPrincipal: "Original Amount:",
            lblExtraInt: "Extra Interest:",
            lblTotalPay: "Total You Pay:",
            savTitle: "Monthly Savings Growth",
            savTag: "Compounding",
            lblSavMonthly: "Monthly Saving (₹)",
            lblSavRate: "Return (% / Year)",
            lblSavYears: "Years (1–10)",
            lblDeposited: "You Put In:",
            lblFinalValue: "Final Value:",
            insightsTitle: "Top Financial Insights",
            insightsTag: "Plain Summary",
            safetyHeading: "Online Safety Guide",
            safetySub: "Tap any common real-life situation below to see the safe action immediately.",
            scenQr: '📱 QR Code Sent to "Receive" Money',
            scenJob: "💼 Job / Internship Asks Registration Fee",
            scenKyc: '🏦 SMS Link Says "Bank / SIM Blocked Today"',
            scenCall: '📞 Threatening Video Call ("Parcel / Police")',
            eduHeading: "Education & Practical Skill Guides",
            eduSub: "Learn practical skills, read built-in study notes, and grow at your own pace.",
            searchPlaceholder: "Search coding, Excel, English, interview prep, digital basics...",
            filterAll: "All",
            filterCourses: "Free Learning",
            filterCareer: "Career & Skills",
            filterDigital: "Digital Basics (All Ages)",
            teamHeading: "Meet Our Team",
            teamSub: "The dedicated team building Bharat Nexus for a smarter 2027.",
            founderBadge: "FOUNDER & LEAD CREATOR",
            founderBio:
                "Leading the 2027 Bharat Nexus vision—building calm, practical digital tools and education for every generation in India.",
            member1Role: "Guide & Mentor",
            member1Bio:
                "Guides quality, clarity, and user experience so every page stays calm, simple, and helpful for all ages.",
            member2Role: "Project Researcher",
            member2Bio:
                "Researches practical student needs, educational notes, and real-world challenges to solve next.",
            member3Role: "Project Researcher",
            member3Bio:
                "Finds accurate skill resources, verifies content quality, and helps shape useful everyday guides.",
            member4Role: "Community & Outreach Lead",
            member4Bio:
                "Connects with youth, students, and local communities to share Bharat Nexus and gather honest feedback.",
            stepsTitle: "Practical Action Plan:",
            readNotesBtn: "📖 Read Free Notes",
            hideNotesBtn: "Hide Notes ▲",
            notesBoxTitle: "Quick Study Notes:",
            showingPrefix: "Showing",
            showingSuffix: "learning guides",
            noResults: "No matching topic found. Try searching 'excel', 'english', 'interview', or 'phone'."
        },
        hi: {
            navHome: "स्मार्ट सिटीजन हब",
            navResume: "रिज्यूमे मेकर",
            navMoney: "EMI और बचत",
            navSafety: "ऑनलाइन सुरक्षा",
            navEducation: "शिक्षा और नोट्स",
            navTeam: "हमारी टीम",
            navLibrary: "नॉलेज लाइब्रेरी →",
            navTerms: "⚖️ नियम और गोपनीयता",
            navLibraryLink: "नॉलेज लाइब्रेरी",
            navTermsLink: "नियम और गोपनीयता",
            menuLabel: "मेनू",
            voiceOff: "आवाज़: बंद",
            voiceOn: "आवाज़: चालू",
            resHeading: "रिज्यूमे और बायोडाटा मेकर",
            resSub: "नीचे अपनी जानकारी भरें और सामने अपना साफ A4 रिज्यूमे PDF के रूप में तैयार करें।",
            btnSample: "उदाहरण भरें (Sample)",
            btnClear: "फॉर्म साफ करें",
            lblName: "पूरा नाम",
            lblRole: "पसंदीदा पद / परिचय",
            lblPhone: "मोबाइल नंबर",
            lblEmail: "ईमेल पता",
            lblCity: "शहर और राज्य",
            lblSummary: "मेरे बारे में / करियर लक्ष्य",
            lblEducation: "शिक्षा (कॉलेज / स्कूल / वर्ष)",
            lblSkills: "कौशल / Skills (कॉमा से अलग लिखें)",
            lblExperience: "प्रोजेक्ट्स / इंटर्नशिप / अनुभव",
            btnPrint: "साफ PDF डाउनलोड / प्रिंट करें",
            previewLabel: "लाइव पेपर प्रीव्यू (A4 साइज)",
            moneyHeading: "विजुअल EMI और बचत डैशबोर्ड",
            moneySub: "पैसे से जुड़े फैसले लेने से पहले लोन का असली ब्याज और मासिक बचत की बढ़त साफ देखें।",
            emiTitle: "EMI की असली तस्वीर",
            emiTag: "लोन व खरीदारी",
            lblLoanAmt: "लोन / वस्तु की कीमत (₹)",
            lblRate: "ब्याज दर (% / वर्ष)",
            lblMonths: "महीने (Months)",
            lblMonthlyEmi: "मासिक EMI:",
            lblPrincipal: "मूल राशि:",
            lblExtraInt: "अतिरिक्त ब्याज:",
            lblTotalPay: "कुल भुगतान:",
            savTitle: "मासिक बचत की बढ़त",
            savTag: "कंपाउंडिंग",
            lblSavMonthly: "मासिक बचत (₹)",
            lblSavRate: "अनुमानित रिटर्न (% / वर्ष)",
            lblSavYears: "वर्ष (1–10)",
            lblDeposited: "आपने जमा किया:",
            lblFinalValue: "अंतिम राशि:",
            insightsTitle: "मुख्य वित्तीय निष्कर्ष",
            insightsTag: "सरल सारांश",
            safetyHeading: "ऑनलाइन सुरक्षा गाइड",
            safetySub: "नीचे दी गई किसी भी आम स्थिति पर टैप करें और तुरंत सुरक्षित कदम जानें।",
            scenQr: '📱 पैसे "लेने" के लिए QR कोड आया',
            scenJob: "💼 नौकरी / इंटर्नशिप के लिए फीस मांगी गई",
            scenKyc: '🏦 SMS में लिखा है "बैंक / सिम आज बंद होगा"',
            scenCall: '📞 डराने वाला वीडियो कॉल ("पार्सल / पुलिस")',
            eduHeading: "शिक्षा और व्यावहारिक कौशल गाइड",
            eduSub: "अपनी गति से व्यावहारिक कौशल सीखें और संक्षिप्त स्टडी नोट्स पढ़ें।",
            searchPlaceholder: "खोजें: Excel, English, interview, coding, smartphone...",
            filterAll: "सभी",
            filterCourses: "मुफ्त सीख",
            filterCareer: "करियर और कौशल",
            filterDigital: "डिजिटल बेसिक्स (सभी उम्र)",
            teamHeading: "हमारी टीम से मिलें",
            teamSub: "2027 के लिए भारत नेक्सस बनाने वाली समर्पित टीम।",
            founderBadge: "संस्थापक और मुख्य निर्माता (FOUNDER)",
            founderBio: "भारत नेक्सस के 2027 विज़न का नेतृत्व—हर पीढ़ी के लिए सरल डिजिटल टूल्स और शिक्षा का निर्माण।",
            member1Role: "गाइड और मेंटर",
            member1Bio: "गुणवत्ता, सरलता और यूज़र अनुभव का मार्गदर्शन ताकि हर पेज सभी उम्र के लिए आसान रहे।",
            member2Role: "प्रोजेक्ट रिसर्चर",
            member2Bio: "छात्रों की व्यावहारिक जरूरतों, स्टडी नोट्स और रोजमर्रा की चुनौतियों पर रिसर्च करते हैं।",
            member3Role: "प्रोजेक्ट रिसर्चर",
            member3Bio: "सटीक कौशल सामग्री खोजने, गुणवत्ता जांचने और उपयोगी गाइड तैयार करने में मदद करते हैं।",
            member4Role: "कम्युनिटी और आउटरीच लीड",
            member4Bio: "युवाओं, छात्रों और स्थानीय लोगों से जुड़कर भारत नेक्सस साझा करते हैं और फीडबैक लाते हैं।",
            stepsTitle: "सरल अभ्यास योजना:",
            readNotesBtn: "📖 नोट्स पढ़ें",
            hideNotesBtn: "नोट्स छुपाएं ▲",
            notesBoxTitle: "संक्षिप्त स्टडी नोट्स:",
            showingPrefix: "दिखाया जा रहा है:",
            showingSuffix: "शैक्षणिक गाइड",
            noResults: "कोई परिणाम नहीं मिला। कृपया 'excel', 'english', 'interview' या 'phone' खोजें।"
        },
        mr: {
            navHome: "स्मार्ट सिटीझन हब",
            navResume: "रिझ्युमे मेकर",
            navMoney: "EMI आणि बचत",
            navSafety: "ऑनलाईन सुरक्षा",
            navEducation: "शिक्षण व नोट्स",
            navTeam: "आमची टीम",
            navLibrary: "नॉलेज लायब्ररी →",
            navTerms: "⚖️ नियम व गोपनीयता",
            navLibraryLink: "नॉलेज लायब्ररी",
            navTermsLink: "नियम व गोपनीयता",
            menuLabel: "मेनू",
            voiceOff: "आवाज: बंद",
            voiceOn: "आवाज: चालू",
            resHeading: "रिझ्युमे आणि बायोडाटा मेकर",
            resSub: "खाली तुमची माहिती भरा, बाजूला स्वच्छ A4 रिझ्युमे पहा आणि PDF म्हणून सेव्ह करा.",
            btnSample: "नमुना भरा (Sample)",
            btnClear: "फॉर्म रिकामा करा",
            lblName: "पूर्ण नाव",
            lblRole: "पद / ओळख (उदा. Student / Fresher)",
            lblPhone: "मोबाईल क्रमांक",
            lblEmail: "ईमेल पत्ता",
            lblCity: "शहर आणि राज्य",
            lblSummary: "माझ्याबद्दल / करिअरचे ध्येय",
            lblEducation: "शिक्षण (कॉलेज / शाळा / वर्ष)",
            lblSkills: "कौशल्ये / Skills (स्वल्पविरामाने वेगळे लिहा)",
            lblExperience: "प्रोजेक्ट्स / इंटर्नशिप / अनुभव",
            btnPrint: "स्वच्छ PDF डाउनलोड / प्रिंट करा",
            previewLabel: "लाईव्ह पेपर प्रीव्ह्यू (A4 साईज)",
            moneyHeading: "व्हिज्युअल EMI आणि बचत डॅशबोर्ड",
            moneySub: "कर्जाचे खरे व्याज आणि मासिक बचतीची वाढ निर्णयापूर्वी सहज समजून घ्या.",
            emiTitle: "EMI ची खरी आकडेवारी",
            emiTag: "कर्ज व खरेदी",
            lblLoanAmt: "कर्ज / वस्तूची किंमत (₹)",
            lblRate: "व्याज दर (% / वर्ष)",
            lblMonths: "महिने (Months)",
            lblMonthlyEmi: "मासिक हप्ता (EMI):",
            lblPrincipal: "मूळ रक्कम:",
            lblExtraInt: "अतिरिक्त व्याज:",
            lblTotalPay: "एकूण भरावे लागणारे:",
            savTitle: "मासिक बचतीची वाढ",
            savTag: "चक्रवाढ (Compounding)",
            lblSavMonthly: "मासिक बचत (₹)",
            lblSavRate: "अपेक्षित परतावा (% / वर्ष)",
            lblSavYears: "वर्षे (1–10)",
            lblDeposited: "तुम्ही भरलेली रक्कम:",
            lblFinalValue: "अंतिम रक्कम:",
            insightsTitle: "मुख्य आर्थिक निष्कर्ष",
            insightsTag: "सोपा सारांश",
            safetyHeading: "ऑनलाईन सुरक्षा मार्गदर्शन",
            safetySub: "खालीलपैकी कोणत्याही परिस्थितीवर टॅप करा आणि लगेच सुरक्षित उपाय पहा.",
            scenQr: '📱 पैसे "मिळण्यासाठी" QR कोड पाठवला',
            scenJob: "💼 नोकरी / इंटर्नशिपसाठी नोंदणी फी मागितली",
            scenKyc: '🏦 SMS मध्ये "बँक / सिम आज बंद होईल" लिंक आली',
            scenCall: '📞 भीती दाखवणारा व्हिडिओ कॉल ("पार्सल / पोलीस")',
            eduHeading: "शिक्षण आणि व्यावहारिक कौशल्य मार्गदर्शन",
            eduSub: "तुमच्या वेगाने उपयुक्त कौशल्ये शिका आणि सोप्या अभ्यास नोट्स वाचा.",
            searchPlaceholder: "शोधा: Excel, English, interview, coding, smartphone...",
            filterAll: "सर्व",
            filterCourses: "मोफत शिक्षण",
            filterCareer: "करिअर व कौशल्ये",
            filterDigital: "डिजिटल मूलभूत गोष्टी (सर्व वयोगट)",
            teamHeading: "आमच्या टीमला भेटा",
            teamSub: "२०२७ साठी भारत नेक्सस घडवणारी समर्पित टीम.",
            founderBadge: "संस्थापक आणि मुख्य निर्माते (FOUNDER)",
            founderBio: "भारत नेक्ससच्या २०२७ ध्येयाचे नेतृत्व—प्रत्येक पिढीसाठी सोपे डिजिटल टूल्स आणि शिक्षण घडवणे.",
            member1Role: "गाइड व मेंटर",
            member1Bio: "प्रत्येक पान सर्व वयोगटांसाठी सोपे, स्वच्छ आणि उपयुक्त राहावे यासाठी मार्गदर्शनाची जबाबदारी.",
            member2Role: "प्रोजेक्ट रिसर्चर",
            member2Bio: "विद्यार्थ्यांच्या प्रत्यक्ष गरजा, अभ्यास नोट्स आणि दैनंदिन अडचणींवर सखोल संशोधन करतात.",
            member3Role: "प्रोजेक्ट रिसर्चर",
            member3Bio: "योग्य कौशल्य साधने शोधणे, माहिती तपासणे आणि उपयुक्त मार्गदर्शन तयार करण्यास मदत करतात.",
            member4Role: "कम्युनिटी आणि आउटरीच लीड",
            member4Bio: "तरुण, विद्यार्थी आणि नागरिकांशी संवाद साधून भारत नेक्सस पोहोचवतात आणि अभिप्राय गोळा करतात.",
            stepsTitle: "सोपा कृती आराखडा:",
            readNotesBtn: "📖 नोट्स वाचा",
            hideNotesBtn: "नोट्स लपवा ▲",
            notesBoxTitle: "संक्षिप्त अभ्यास नोट्स:",
            showingPrefix: "एकूण",
            showingSuffix: "शैक्षणिक गाइड्स",
            noResults: "काहीही सापडले नाही. कृपया 'excel', 'english', 'interview' किंवा 'phone' असे शोधा."
        }
    };

    /* 2. BHARAT VOICE (JARVIS-STYLE TOGGLEABLE SPOKEN HELPER) */
    function speakText(message) {
        if (!voiceEnabled || !("speechSynthesis" in window)) return;
        try {
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(message);
            if (currentLang === "hi") utter.lang = "hi-IN";
            else if (currentLang === "mr") utter.lang = "mr-IN";
            else utter.lang = "en-IN";
            utter.rate = 0.98;
            window.speechSynthesis.speak(utter);
        } catch (err) {}
    }

    /* 3. SIDEBAR MOBILE DRAWER + COMFORT TOGGLES */
    function setupNavigationAndComfort() {
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("sidebar-overlay");
        const menuBtn = document.getElementById("menu-toggle-btn");

        function toggleDrawer(open) {
            if (!sidebar || !overlay) return;
            sidebar.classList.toggle("open", open);
            overlay.hidden = !open;
            if (menuBtn) menuBtn.setAttribute("aria-expanded", String(open));
        }

        if (menuBtn) {
            menuBtn.addEventListener("click", () => {
                toggleDrawer(!sidebar.classList.contains("open"));
            });
        }

        if (overlay) {
            overlay.addEventListener("click", () => toggleDrawer(false));
        }

        document.querySelectorAll(".side-link").forEach((link) => {
            link.addEventListener("click", () => {
                document.querySelectorAll(".side-link").forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
                toggleDrawer(false);
            });
        });

        const fontBtn = document.getElementById("font-size-btn");
        try {
            if (localStorage.getItem("bn_large_text") === "1") {
                document.body.classList.add("large-text");
                if (fontBtn) fontBtn.classList.add("active");
            }
        } catch (err) {}

        if (fontBtn) {
            fontBtn.addEventListener("click", () => {
                const isLarge = document.body.classList.toggle("large-text");
                fontBtn.classList.toggle("active", isLarge);
                fontBtn.setAttribute("aria-pressed", String(isLarge));
                try {
                    localStorage.setItem("bn_large_text", isLarge ? "1" : "0");
                } catch (err) {}
            });
        }

        const themeBtn = document.getElementById("theme-toggle-btn");
        function updateThemeIcon(isLight) {
            if (!themeBtn) return;
            themeBtn.textContent = isLight ? "🌙" : "☀";
            themeBtn.classList.toggle("active", isLight);
            themeBtn.setAttribute("aria-pressed", String(isLight));
        }

        try {
            const savedLight = localStorage.getItem("bn_light_mode") === "1";
            if (savedLight) document.body.classList.add("light-mode");
            updateThemeIcon(savedLight);
        } catch (err) {}

        if (themeBtn) {
            themeBtn.addEventListener("click", () => {
                const isLight = document.body.classList.toggle("light-mode");
                updateThemeIcon(isLight);
                try {
                    localStorage.setItem("bn_light_mode", isLight ? "1" : "0");
                } catch (err) {}
            });
        }

        const voiceBtn = document.getElementById("voice-toggle-btn");
        if (voiceBtn) {
            voiceBtn.addEventListener("click", () => {
                voiceEnabled = !voiceEnabled;
                voiceBtn.classList.toggle("active", voiceEnabled);
                voiceBtn.setAttribute("aria-pressed", String(voiceEnabled));
                updateVoiceButtonText();
                if (voiceEnabled) {
                    const greet =
                        currentLang === "hi"
                            ? "भारत वॉइस चालू है। मैं आपकी सहायता के लिए तैयार हूं।"
                            : currentLang === "mr"
                              ? "भारत व्हॉइस चालू आहे. मी तुम्हाला मदत करण्यासाठी तयार आहे."
                              : "Bharat Voice is active. I will guide you calmly whenever needed.";
                    speakText(greet);
                } else if ("speechSynthesis" in window) {
                    window.speechSynthesis.cancel();
                }
            });
        }
    }

    function updateVoiceButtonText() {
        const voiceBtn = document.getElementById("voice-toggle-btn");
        if (!voiceBtn) return;
        const icon = voiceEnabled ? "🔊" : "🔇";
        const label = voiceEnabled ? uiText[currentLang].voiceOn : uiText[currentLang].voiceOff;
        voiceBtn.innerHTML = `${icon} <span>${label}</span>`;
    }

    /* 4. OPTION C: RESUME BUILDER */
    const RESUME_STORAGE_KEY = "bharat_nexus_resume_draft_v1";

    function setupResumeBuilder() {
        const fields = {
            name: document.getElementById("res-name"),
            role: document.getElementById("res-role"),
            phone: document.getElementById("res-phone"),
            email: document.getElementById("res-email"),
            city: document.getElementById("res-city"),
            summary: document.getElementById("res-summary"),
            education: document.getElementById("res-education"),
            skills: document.getElementById("res-skills"),
            experience: document.getElementById("res-experience")
        };

        const preview = {
            name: document.getElementById("prev-name"),
            role: document.getElementById("prev-role"),
            contact: document.getElementById("prev-contact"),
            summary: document.getElementById("prev-summary"),
            education: document.getElementById("prev-education"),
            skills: document.getElementById("prev-skills"),
            experience: document.getElementById("prev-experience")
        };

        if (!fields.name || !preview.name) return;

        function updatePreview() {
            preview.name.textContent = fields.name.value.trim() || "Your Full Name";
            preview.role.textContent = fields.role.value.trim() || "Target Job Role / Student Title";

            const contactParts = [
                fields.phone.value.trim(),
                fields.email.value.trim(),
                fields.city.value.trim()
            ].filter(Boolean);
            preview.contact.textContent = contactParts.length
                ? contactParts.join("  •  ")
                : "Phone  •  Email  •  City, State";

            preview.summary.textContent =
                fields.summary.value.trim() || "Write 2–3 clear lines about yourself and your career goal.";
            preview.education.textContent =
                fields.education.value.trim() || "Add your college, degree, school, and year.";
            preview.experience.textContent =
                fields.experience.value.trim() || "Add college projects, internships, or volunteer experience.";

            const rawSkills = fields.skills.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean);

            preview.skills.innerHTML = "";
            const skillsToShow = rawSkills.length ? rawSkills : ["Communication", "MS Office", "Problem Solving"];
            skillsToShow.forEach((skill) => {
                const li = document.createElement("li");
                li.textContent = skill;
                preview.skills.appendChild(li);
            });

            try {
                const draft = {};
                Object.keys(fields).forEach((key) => {
                    draft[key] = fields[key].value;
                });
                localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(draft));
            } catch (err) {}
        }

        try {
            const saved = localStorage.getItem(RESUME_STORAGE_KEY);
            if (saved) {
                const parsed = JSON.parse(saved);
                Object.keys(fields).forEach((key) => {
                    if (typeof parsed[key] === "string") fields[key].value = parsed[key];
                });
            }
        } catch (err) {}

        Object.values(fields).forEach((input) => {
            if (input) input.addEventListener("input", updatePreview);
        });

        const sampleBtn = document.getElementById("fill-sample-btn");
        if (sampleBtn) {
            sampleBtn.addEventListener("click", () => {
                fields.name.value = "Aarav Deshmukh";
                fields.role.value = "B.Com Graduate • Accounts & Office Coordinator Fresher";
                fields.phone.value = "+91 98765 43210";
                fields.email.value = "aarav.deshmukh@email.com";
                fields.city.value = "Nashik, Maharashtra";
                fields.summary.value =
                    "Detail-oriented graduate with strong MS Excel, Tally basics, and clear communication skills. Seeking an entry-level role to contribute steadily and grow.";
                fields.education.value =
                    "B.Com — Savitribai Phule Pune University (2026) | 76%\n12th HSC Commerce — Maharashtra State Board (2023) | 81%";
                fields.skills.value = "MS Excel, Tally Prime, Billing & Data Entry, English & Marathi, Time Management";
                fields.experience.value =
                    "College Commerce Fest Coordinator (2025) — Managed registrations and budget sheet for 200+ students.\nMini Project: Created a monthly expense tracker in MS Excel.";
                updatePreview();
            });
        }

        const clearBtn = document.getElementById("clear-resume-btn");
        if (clearBtn) {
            clearBtn.addEventListener("click", () => {
                Object.values(fields).forEach((input) => {
                    input.value = "";
                });
                try {
                    localStorage.removeItem(RESUME_STORAGE_KEY);
                } catch (err) {}
                updatePreview();
            });
        }

        const printBtn = document.getElementById("print-resume-btn");
        if (printBtn) {
            printBtn.addEventListener("click", () => {
                if (!fields.name.value.trim()) {
                    fields.name.focus();
                    speakText(
                        currentLang === "hi"
                            ? "कृपया PDF सेव करने से पहले अपना पूरा नाम लिखें।"
                            : currentLang === "mr"
                              ? "कृपया PDF सेव्ह करण्यापूर्वी तुमचे पूर्ण नाव लिहा."
                              : "Please enter your full name first before saving your resume."
                    );
                    return;
                }
                window.print();
            });
        }

        updatePreview();
    }

    /* 5. OPTION B: VISUAL EMI & SAVINGS DASHBOARD */
    function formatINR(num) {
        return "₹" + Math.round(num).toLocaleString("en-IN");
    }

    function formatShortINR(num) {
        if (num >= 100000) return "₹" + (num / 100000).toFixed(1) + "L";
        if (num >= 1000) return "₹" + Math.round(num / 1000) + "k";
        return "₹" + Math.round(num);
    }

    function updateMoneyDashboard() {
        const amtEl = document.getElementById("emi-amount");
        const rateEl = document.getElementById("emi-rate");
        const monEl = document.getElementById("emi-months");

        const savMonthlyEl = document.getElementById("sav-monthly");
        const savRateEl = document.getElementById("sav-rate");
        const savYearsEl = document.getElementById("sav-years");

        if (!amtEl || !savMonthlyEl) return;

        const P = Math.max(0, Number(amtEl.value) || 0);
        const annualRate = Math.max(0, Math.min(80, Number(rateEl.value) || 0));
        const n = Math.max(1, Math.min(240, Math.round(Number(monEl.value) || 12)));

        let emi = 0;
        if (P > 0) {
            if (annualRate === 0) {
                emi = P / n;
            } else {
                const r = annualRate / 12 / 100;
                const factor = Math.pow(1 + r, n);
                emi = (P * r * factor) / (factor - 1);
            }
        }
        const totalPay = emi * n;
        const totalInterest = Math.max(0, totalPay - P);

        document.getElementById("out-emi").textContent = formatINR(emi);
        document.getElementById("out-principal").textContent = formatINR(P);
        document.getElementById("out-interest").textContent = formatINR(totalInterest);
        document.getElementById("out-total-pay").textContent = formatINR(totalPay);

        const arc = document.getElementById("emi-interest-arc");
        if (arc) {
            const circumference = 289;
            const interestRatio = totalPay > 0 ? totalInterest / totalPay : 0;
            arc.style.strokeDashoffset = String(circumference * (1 - interestRatio));
        }

        const monthlySav = Math.max(0, Number(savMonthlyEl.value) || 0);
        const savAnnual = Math.max(0, Math.min(35, Number(savRateEl.value) || 0));
        const years = Math.max(1, Math.min(10, Math.round(Number(savYearsEl.value) || 5)));

        const yearlyValues = [];
        const mr = savAnnual / 12 / 100;

        for (let y = 1; y <= years; y++) {
            const m = y * 12;
            let fv = 0;
            if (mr === 0) {
                fv = monthlySav * m;
            } else {
                fv = monthlySav * ((Math.pow(1 + mr, m) - 1) / mr) * (1 + mr);
            }
            yearlyValues.push({ year: y, value: fv });
        }

        const finalSav = yearlyValues.length ? yearlyValues[yearlyValues.length - 1].value : 0;
        const totalDeposited = monthlySav * years * 12;
        const wealthGain = Math.max(0, finalSav - totalDeposited);

        document.getElementById("out-deposited").textContent = formatINR(totalDeposited);
        document.getElementById("out-final-sav").textContent = formatINR(finalSav);

        const barsContainer = document.getElementById("savings-bars");
        if (barsContainer && yearlyValues.length) {
            const maxVal = Math.max(...yearlyValues.map((d) => d.value), 1);
            barsContainer.innerHTML = yearlyValues
                .map((d) => {
                    const heightPct = Math.max(12, Math.round((d.value / maxVal) * 100));
                    return `
                        <div class="bar-col">
                            <span class="bar-val">${formatShortINR(d.value)}</span>
                            <div class="bar-fill" style="height: ${heightPct}%;"></div>
                            <span class="bar-label">Y${d.year}</span>
                        </div>
                    `;
                })
                .join("");
        }

        const insightsEl = document.getElementById("money-insights-list");
        if (insightsEl) {
            const extraPct = P > 0 ? Math.round((totalInterest / P) * 100) : 0;
            let lines = [];

            if (currentLang === "hi") {
                lines = [
                    `<strong>EMI हकीकत:</strong> ${n} महीनों में आप मूल राशि के अलावा <strong>${formatINR(totalInterest)}</strong> (${extraPct}% अतिरिक्त) केवल ब्याज देते हैं।`,
                    `<strong>बचत की ताकत:</strong> हर महीने ${formatINR(monthlySav)} बचाने पर ${years} साल में आपको <strong>${formatINR(wealthGain)}</strong> अतिरिक्त रिटर्न मिल सकता है।`,
                    `<strong>संतुलन नियम:</strong> सुरक्षित रहने के लिए कुल मासिक EMI आपकी कमाई के 25–30% से कम रखें।`
                ];
            } else if (currentLang === "mr") {
                lines = [
                    `<strong>EMI वास्तव:</strong> ${n} महिन्यांत मूळ रकमेपेक्षा तुम्ही <strong>${formatINR(totalInterest)}</strong> (${extraPct}% जादा) फक्त व्याज भरता.`,
                    `<strong>बचतीची ताकद:</strong> दरमहा ${formatINR(monthlySav)} वाचवल्यास ${years} वर्षांत तुम्हाला <strong>${formatINR(wealthGain)}</strong> अतिरिक्त परतावा मिळू शकतो.`,
                    `<strong>सुरक्षित नियम:</strong> आर्थिक तणाव टाळण्यासाठी एकूण मासिक EMI उत्पन्नाच्या २५–३०% पेक्षा कमी ठेवा.`
                ];
            } else {
                lines = [
                    `<strong>EMI Reality:</strong> Over ${n} months, you pay <strong>${formatINR(totalInterest)}</strong> (${extraPct}% extra) solely in loan interest.`,
                    `<strong>Compounding Power:</strong> Saving ${formatINR(monthlySav)}/month for ${years} years adds <strong>${formatINR(wealthGain)}</strong> purely from returns on top of your deposits.`,
                    `<strong>Healthy Limit:</strong> Keep total monthly EMIs under 25–30% of monthly income to stay comfortable.`
                ];
            }

            insightsEl.innerHTML = lines.map((l) => `<li>${l}</li>`).join("");
        }
    }

    function setupMoneyDashboard() {
        const ids = ["emi-amount", "emi-rate", "emi-months", "sav-monthly", "sav-rate", "sav-years"];
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener("input", updateMoneyDashboard);
        });
        updateMoneyDashboard();
    }

    /* 6. OPTION A: ONLINE SAFETY GUIDE */
    const safetyScenarios = {
        qr: {
            en: {
                tag: "HIGH RISK — DO NOT SCAN",
                title: "Never Scan a QR Code or Enter UPI PIN to Receive Money",
                summary: "In UPI apps, scanning a QR code and entering your PIN ONLY sends money OUT of your bank account.",
                actions: [
                    "To receive money, the sender only needs your UPI ID or mobile number—zero action is required from you.",
                    "If a buyer on OLX or WhatsApp insists you scan a QR code to 'accept' payment, decline immediately and block."
                ]
            },
            hi: {
                tag: "खतरा — स्कैन न करें",
                title: "पैसे लेने के लिए कभी QR कोड स्कैन या UPI PIN न डालें",
                summary: "UPI ऐप में QR स्कैन करने और PIN डालने से पैसे हमेशा आपके खाते से बाहर 'जाते' हैं, आते नहीं।",
                actions: [
                    "पैसे पाने के लिए आपको कुछ भी स्कैन या PIN दर्ज नहीं करना होता।",
                    "अगर कोई अनजान खरीदार पैसे भेजने के नाम पर QR भेजे, तो तुरंत मना करें।"
                ]
            },
            mr: {
                tag: "धोका — स्कॅन करू नका",
                title: "पैसे मिळवण्यासाठी कधीही QR कोड स्कॅन किंवा UPI PIN टाकू नका",
                summary: "UPI अ‍ॅपमध्ये QR स्कॅन करून PIN टाकल्याने पैसे तुमच्या खात्यातून फक्त बाहेर 'जातात'.",
                actions: [
                    "पैसे येण्यासाठी तुम्हाला कोणताही PIN टाकण्याची किंवा QR स्कॅन करण्याची गरज नसते.",
                    "कोणी पैसे पाठवण्याच्या नावाखाली QR कोड पाठवल्यास लगेच नकार द्या."
                ]
            }
        },
        jobfee: {
            en: {
                tag: "CAUTION — VERIFY FIRST",
                title: "Legitimate Jobs & Internships Do Not Charge Registration Fees",
                summary: "Beware of offers asking ₹299–₹2,000 for 'ID card', 'laptop security', or 'guaranteed interview'.",
                actions: [
                    "Verify the company's official career page directly before sharing personal documents.",
                    "Also avoid Telegram/WhatsApp 'like videos & earn ₹3,000/day' task groups that ask you to deposit money."
                ]
            },
            hi: {
                tag: "सावधान — पहले जांचें",
                title: "असली नौकरी या इंटर्नशिप कभी रजिस्ट्रेशन फीस नहीं मांगती",
                summary: "यदि कोई 'आईडी कार्ड', 'जॉइनिंग फीस' या 'सिक्योरिटी' के नाम पर पैसे मांगे, तो रुक जाएं।",
                actions: [
                    "आवेदन करने से पहले कंपनी की असली वेबसाइट पर करियर पेज जांचें।",
                    "वीडियो लाइक करके रोज़ पैसे कमाने वाले टेलीग्राम/व्हाट्सएप ग्रुप से दूर रहें।"
                ]
            },
            mr: {
                tag: "सावध — आधी तपासा",
                title: "खऱ्या नोकरी किंवा इंटर्नशिपसाठी कधीही नोंदणी फी नसते",
                summary: "'आयडी कार्ड', 'जॉइनिंग फी' किंवा 'सिक्युरिटी डिपॉझिट' साठी पैसे मागितल्यास सावध रहा.",
                actions: [
                    "कोणतीही रक्कम भरण्यापूर्वी कंपनीच्या अधिकृत वेबसाईटवर खात्री करा.",
                    "व्हिडिओ लाईक करून रोज पैसे कमवा अशा व्हॉट्सअ‍ॅप/टेलिग्राम गटांपासून दूर रहा."
                ]
            }
        },
        kyc: {
            en: {
                tag: "PAUSE — DO NOT CLICK LINK",
                title: "Banks Never Send Urgent Account-Block Links by SMS",
                summary: "Messages claiming 'Update PAN/KYC in 2 hours or account closes' try to steal your login or OTP.",
                actions: [
                    "Never tap unknown shortened SMS links. Open your bank's official app directly or visit your branch.",
                    "Check sender details calmly—never enter ATM PIN, CVV, or OTP on a webpage opened from SMS."
                ]
            },
            hi: {
                tag: "रुकें — लिंक न खोलें",
                title: "बैंक कभी SMS लिंक से तुरंत खाता बंद होने की धमकी नहीं देते",
                summary: "'2 घंटे में KYC/PAN अपडेट करें वरना खाता बंद होगा' जैसे संदेश आपका OTP चुराने के लिए होते हैं।",
                actions: [
                    "SMS के किसी अनजान लिंक पर क्लिक न करें; सीधे बैंक के आधिकारिक ऐप या शाखा में जांच करें।",
                    "कभी भी किसी लिंक पर ATM PIN, CVV या OTP न भरें।"
                ]
            },
            mr: {
                tag: "थांबा — लिंकवर क्लिक करू नका",
                title: "बँक कधीही SMS लिंकवरून खाते बंद होण्याची घाई करत नाही",
                summary: "'२ तासांत KYC/PAN अपडेट करा अन्यथा खाते बंद होईल' असे मेसेज OTP चोरण्यासाठी असतात.",
                actions: [
                    "SMS मधील अनोळखी लिंक उघडू नका; थेट बँकेच्या अधिकृत अ‍ॅपमध्ये किंवा शाखेत तपासा.",
                    "कोणत्याही लिंकवर ATM PIN, CVV किंवा OTP भरू नका."
                ]
            }
        },
        call: {
            en: {
                tag: "HANG UP CALMLY",
                title: "Police & Courts Never Arrest or Take Money Over Video Calls",
                summary: "Callers pretending to be courier staff, customs, or cyber police try to create panic so you stay on the call.",
                actions: [
                    "There is no such thing as 'Digital Arrest'—hang up immediately if anyone threatens you on a video call.",
                    "Talk immediately with a family member before transferring any money. You can report cyber issues on 1930 in India."
                ]
            },
            hi: {
                tag: "कॉल तुरंत काटें",
                title: "पुलिस या कोर्ट कभी वीडियो कॉल पर गिरफ्तारी या पैसे की मांग नहीं करते",
                summary: "कूरियर, कस्टम या पुलिस बनकर डराने वाले कॉल केवल घबराहट पैदा करके पैसे ठगने के लिए होते हैं।",
                actions: [
                    "'डिजिटल अरेस्ट' जैसा कोई कानून नहीं है—ऐसा वीडियो कॉल तुरंत काट दें।",
                    "पैसे भेजने से पहले परिवार से बात करें। भारत में साइबर शिकायत के लिए 1930 हेल्पलाइन का उपयोग करें।"
                ]
            },
            mr: {
                tag: "कॉल लगेच बंद करा",
                title: "पोलीस किंवा न्यायालय कधीही व्हिडिओ कॉलवर अटक किंवा पैशांची मागणी करत नाहीत",
                summary: "पार्सल, कस्टम किंवा पोलीस अधिकारी असल्याचे सांगून भीती घालणारे कॉल फसवणुकीचे असतात.",
                actions: [
                    "'डिजिटल अरेस्ट' नावाचा कोणताही प्रकार नसतो—असा व्हिडिओ कॉल शांतपणे लगेच बंद करा.",
                    "कोणताही व्यवहार करण्यापूर्वी कुटुंबाशी बोला. सायबर मदतीसाठी भारतातील १९३० क्रमांकावर संपर्क साधता येतो."
                ]
            }
        }
    };

    function renderSafetyResult() {
        const box = document.getElementById("safety-result-box");
        if (!box) return;
        const item = safetyScenarios[activeScenario]?.[currentLang];
        if (!item) return;

        const listHtml = item.actions.map((a) => `<li>${a}</li>`).join("");
        box.innerHTML = `
            <span class="safety-status-tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.summary}</p>
            <ul>${listHtml}</ul>
        `;
    }

    function setupSafetyGuide() {
        document.querySelectorAll(".scenario-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                activeScenario = btn.dataset.scenario;
                document.querySelectorAll(".scenario-btn").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                renderSafetyResult();

                const item = safetyScenarios[activeScenario]?.[currentLang];
                if (item) speakText(`${item.title}. ${item.summary}`);
            });
        });
        renderSafetyResult();
    }

    /* 7. EDUCATION & SKILL GUIDES */
    const educationData = [
        {
            id: "excel-office-skills",
            category: "career",
            keywords: "excel spreadsheet word office data entry job skills computer formulas",
            en: {
                badge: "Career & Skills",
                title: "MS Excel & Office Productivity Roadmap",
                summary: "Spreadsheet skills are tested in most office, billing, and coordinator roles.",
                tip: "Practical Tip: Learning 5 core formulas sets you apart immediately.",
                steps: [
                    "Week 1: Learn table formatting, sorting, and filtering.",
                    "Week 2: Practice SUM, AVERAGE, COUNT, IF & VLOOKUP.",
                    "Week 3: Master keyboard shortcuts (Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+F)."
                ],
                notes: [
                    "<strong>=SUM(A1:A10)</strong> → Adds all numbers from A1 to A10.",
                    "<strong>=AVERAGE(A1:A10)</strong> → Calculates average values.",
                    "<strong>=COUNT(A1:A10)</strong> → Counts numeric cells.",
                    "<strong>=IF(B2>=35, \"Pass\", \"Fail\")</strong> → Automatic condition check."
                ]
            },
            hi: {
                badge: "करियर और कौशल",
                title: "MS Excel और ऑफिस कौशल रोडमैप",
                summary: "अधिकतर ऑफिस, बिलिंग और अकाउंट्स नौकरियों में Excel पूछा जाता है।",
                tip: "जरूरी टिप: सिर्फ 5 मुख्य फॉर्मूले सीखकर आप अलग पहचान बना सकते हैं।",
                steps: [
                    "सप्ताह 1: टेबल फॉर्मेटिंग, सॉर्टिंग और फिल्टर सीखें।",
                    "सप्ताह 2: SUM, AVERAGE, COUNT, IF और VLOOKUP का अभ्यास करें।",
                    "सप्ताह 3: कीबोर्ड शॉर्टकट (Ctrl+C, Ctrl+V, Ctrl+F) सीखें।"
                ],
                notes: [
                    "<strong>=SUM(A1:A10)</strong> → A1 से A10 का जोड़।",
                    "<strong>=AVERAGE(A1:A10)</strong> → औसत निकालने के लिए।",
                    "<strong>=COUNT(A1:A10)</strong> → संख्या वाले सेल गिनता है।",
                    "<strong>=IF(B2>=35, \"Pass\", \"Fail\")</strong> → शर्त के आधार पर परिणाम।"
                ]
            },
            mr: {
                badge: "करिअर व कौशल्ये",
                title: "MS Excel आणि ऑफिस कामाचा रोडमॅप",
                summary: "बहुतेक ऑफिस, बिलिंग आणि कोऑर्डिनेटर नोकऱ्यांमध्ये Excel कौशल्ये तपासली जातात.",
                tip: "महत्त्वाची टीप: फक्त ५ मुख्य फॉर्म्युले शिकल्यास मोठा फायदा होतो.",
                steps: [
                    "आठवडा १: स्वच्छ टेबल, Sorting आणि Filter लावणे शिका.",
                    "आठवडा २: SUM, AVERAGE, COUNT, IF आणि VLOOKUP चा सराव करा.",
                    "आठवडा ३: कीबोर्ड शॉर्टकट्स (Ctrl+C, Ctrl+V, Ctrl+F) वापरा."
                ],
                notes: [
                    "<strong>=SUM(A1:A10)</strong> → A1 ते A10 मधील संख्यांची बेरीज.",
                    "<strong>=AVERAGE(A1:A10)</strong> → सरासरी काढते.",
                    "<strong>=COUNT(A1:A10)</strong> → संख्या असलेले सेल्स मोजते.",
                    "<strong>=IF(B2>=35, \"Pass\", \"Fail\")</strong> → अटीनुसार निकाल दाखवते."
                ]
            }
        },
        {
            id: "spoken-english-confidence",
            category: "courses",
            keywords: "english communication speaking confidence reading writing interview grammar",
            en: {
                badge: "Free Learning",
                title: "Daily 20-Minute English & Communication",
                summary: "Build clear, confident speaking habits for interviews and college presentations.",
                tip: "Practical Tip: Simple, short sentences always sound more confident than complicated words.",
                steps: [
                    "Read 1 short paragraph aloud every morning for 5 minutes.",
                    "Write 5 simple lines every night about your day.",
                    "Practice a 45-second self-introduction in front of a mirror."
                ],
                notes: [
                    "<strong>Habit vs. Now:</strong> 'I go daily' (habit) vs. 'I am going now'.",
                    "<strong>Polite Request:</strong> Say 'Could you please share this?'",
                    "<strong>Self-Intro:</strong> 'Hello, I am [Name] from [City]. I completed [Degree] with skills in [Skills].'"
                ]
            },
            hi: {
                badge: "मुफ्त सीख",
                title: "रोज़ 20 मिनट में संवाद और अंग्रेजी आत्मविश्वास",
                summary: "इंटरव्यू और प्रस्तुति के लिए सरल और साफ बोलने का नियमित अभ्यास।",
                tip: "जरूरी टिप: कठिन शब्दों से ज्यादा 'साफ और छोटे वाक्य' बोलना बेहतर होता है।",
                steps: [
                    "रोज़ सुबह 5 मिनट एक छोटा पैराग्राफ जोर से पढ़ें।",
                    "रात को अपने दिन के बारे में 5 आसान लाइनें लिखें।",
                    "आईने के सामने 45 सेकंड में अपना परिचय बोलें।"
                ],
                notes: [
                    "<strong>आदत बनाम अभी:</strong> 'I go daily' (आदत) बनाम 'I am going now' (अभी)।",
                    "<strong>विनम्रता:</strong> 'Could you please share...' कहें।",
                    "<strong>परिचय:</strong> 'Hello, I am [नाम] from [शहर]. I completed [पढ़ाई] with skills in [स्किल्स].'"
                ]
            },
            mr: {
                badge: "मोफत शिक्षण",
                title: "दररोज २० मिनिटांत संवाद व इंग्रजी आत्मविश्वास",
                summary: "मुलाखत आणि सादरीकरणासाठी स्पष्ट बोलण्याची सोपी सवय.",
                tip: "महत्त्वाची टीप: कठीण शब्दांपेक्षा 'सोपे व स्पष्ट वाक्य' अधिक प्रभावी ठरते.",
                steps: [
                    "दररोज सकाळी ५ मिनिटे एक छोटा उतारा मोठ्याने वाचा.",
                    "रात्री दिवसभरातील कामांवर ५ साधी वाक्ये लिहा.",
                    "आरशासमोर ४५ सेकंदांत स्वतःची ओळख सांगण्याचा सराव करा."
                ],
                notes: [
                    "<strong>सवय आणि आत्ताची कृती:</strong> 'I go daily' (सवय) आणि 'I am going now' (आत्ता).",
                    "<strong>नम्र भाषा:</strong> 'Could you please share...' वापरा.",
                    "<strong>ओळख:</strong> 'Hello, I am [नाव] from [शहर]. I completed [शिक्षण] with skills in [कौशल्ये].'"
                ]
            }
        },
        {
            id: "coding-tech-starter",
            category: "courses",
            keywords: "coding programming html css javascript python web tech student",
            en: {
                badge: "Free Learning",
                title: "Beginner Coding & Logic Roadmap",
                summary: "How students can build real working websites and logic step by step from home.",
                tip: "Practical Tip: Build 1 tiny working mini-project every week instead of only watching long videos.",
                steps: [
                    "Month 1: Learn HTML structure + CSS layouts.",
                    "Month 2: Learn JavaScript basics (buttons, calculators, conditions).",
                    "Month 3: Add your working projects to your Resume."
                ],
                notes: [
                    "<strong>HTML:</strong> Structure (headings, forms, buttons).",
                    "<strong>CSS:</strong> Visual design (colors, grids, mobile layout).",
                    "<strong>JavaScript:</strong> Logic & interactivity (live preview, calculators)."
                ]
            },
            hi: {
                badge: "मुफ्त सीख",
                title: "कोडिंग और टेक लॉजिक रोडमैप",
                summary: "छात्र घर से सही क्रम में वेब डेवलपमेंट और कोडिंग कैसे शुरू करें।",
                tip: "जरूरी टिप: सिर्फ वीडियो देखने के बजाय हर हफ्ते 1 छोटा प्रोजेक्ट खुद बनाएं।",
                steps: [
                    "महीना 1: HTML ढांचा और CSS डिज़ाइन सीखें।",
                    "महीना 2: JavaScript बेसिक्स (बटन, कैलकुलेटर, लॉजिक) सीखें।",
                    "महीना 3: अपने प्रोजेक्ट्स रिज्यूमे में जोड़ें।"
                ],
                notes: [
                    "<strong>HTML:</strong> पेज का ढांचा बनाता है।",
                    "<strong>CSS:</strong> रंग और मोबाइल लेआउट संभालता है।",
                    "<strong>JavaScript:</strong> बटन और गणना की लॉजिक चलाता है।"
                ]
            },
            mr: {
                badge: "मोफत शिक्षण",
                title: "कोडिंग आणि टेक लॉजिक रोडमॅप",
                summary: "विद्यार्थी घरबसल्या योग्य क्रमाने वेब डेव्हलपमेंट व कोडिंग कसे शिकू शकतात.",
                tip: "महत्त्वाची टीप: फक्त व्हिडिओ पाहण्यापेक्षा दर आठवड्याला १ छोटा प्रोजेक्ट बनवा.",
                steps: [
                    "महिना १: HTML रचना आणि CSS डिझाईन शिका.",
                    "महिना २: JavaScript मूलभूत लॉजिक (बटणे, कॅल्क्युलेटर) शिका.",
                    "महिना ३: तुमचे प्रोजेक्ट्स रिझ्युमेमध्ये जोडा."
                ],
                notes: [
                    "<strong>HTML:</strong> पेजची रचना तयार करते.",
                    "<strong>CSS:</strong> रंग आणि मोबाईल स्क्रीन डिझाईन सांभाळते.",
                    "<strong>JavaScript:</strong> बटणे आणि गणनेची लॉजिक चालवते."
                ]
            }
        },
        {
            id: "digital-basics-elders",
            category: "digital",
            keywords: "smartphone elders parents font size whatsapp memory digital basics",
            en: {
                badge: "Digital Basics (All Ages)",
                title: "Comfortable Smartphone Habits for Parents & Elders",
                summary: "Simple phone settings so parents and grandparents read and navigate comfortably.",
                tip: "Practical Tip: Turn ON 'A+' or '☀' right at the top of Bharat Nexus anytime for comfortable reading.",
                steps: [
                    "Set phone Display Font Size to 'Large' in Settings.",
                    "Turn off auto-download for unknown WhatsApp videos to keep storage free.",
                    "Keep emergency family contacts pinned on your phone dialer."
                ],
                notes: [
                    "<strong>Font Size:</strong> Settings → Display → Font Size → drag larger.",
                    "<strong>Storage Saver:</strong> WhatsApp → Settings → Storage & Data → turn off Media Auto-Download.",
                    "<strong>Brightness:</strong> Enable Adaptive Brightness for clear outdoor viewing."
                ]
            },
            hi: {
                badge: "डिजिटल बेसिक्स (सभी उम्र)",
                title: "माता-पिता और बुजुर्गों के लिए आसान स्मार्टफोन सेटिंग्स",
                summary: "सरल फोन सेटिंग्स ताकि बड़े-बुजुर्ग बिना आंखों के तनाव के फोन चला सकें।",
                tip: "जरूरी टिप: आराम से पढ़ने के लिए ऊपर दिए 'A+' या '☀' बटन को कभी भी दबाएं।",
                steps: [
                    "फोन Settings में जाकर Font Size को 'Large' करें।",
                    "मेमोरी बचाने के लिए WhatsApp वीडियो ऑटो-डाउनलोड बंद रखें।",
                    "जरूरी पारिवारिक नंबर फोन डायलर में ऊपर पिन रखें।"
                ],
                notes: [
                    "<strong>फॉन्ट साइज:</strong> Settings → Display → Font Size बढ़ाएं।",
                    "<strong>मेमोरी बचत:</strong> WhatsApp Settings → Storage & Data → Auto-download बंद करें।",
                    "<strong>रोशनी:</strong> बाहर साफ देखने के लिए Adaptive Brightness चालू रखें।"
                ]
            },
            mr: {
                badge: "डिजिटल मूलभूत गोष्टी",
                title: "पालक व ज्येष्ठांसाठी सोप्या स्मार्टफोन सेटिंग्ज",
                summary: "डोळ्यांना त्रास न होता फोन वापरण्यासाठी काही साध्या सेटिंग्ज.",
                tip: "महत्त्वाची टीप: वाचायला सोपे जाण्यासाठी वर असलेले 'A+' किंवा '☀' बटण कधीही दाबा.",
                steps: [
                    "फोन Settings मधून Font Size 'Large' ठेवा.",
                    "मेमरी वाचवण्यासाठी WhatsApp मधील ऑटो-डाउनलोड बंद ठेवा.",
                    "कुटुंबातील महत्त्वाचे नंबर स्पीड डायलवर ठेवा."
                ],
                notes: [
                    "<strong>अक्षर आकार:</strong> Settings → Display → Font Size मोठा करा.",
                    "<strong>मेमरी बचत:</strong> WhatsApp → Storage & Data → Auto-download बंद करा.",
                    "<strong>उजेड:</strong> उन्हात स्पष्ट दिसण्यासाठी Adaptive Brightness चालू ठेवा."
                ]
            }
        }
    ];

    function renderEducation() {
        const container = document.getElementById("education-list");
        const countEl = document.getElementById("education-results-count");
        if (!container || !countEl) return;

        const text = uiText[currentLang];
        const query = searchQuery.trim().toLowerCase();

        const filtered = educationData.filter((item) => {
            const matchesCategory = currentFilter === "all" || item.category === currentFilter;
            if (!matchesCategory) return false;
            if (!query) return true;

            const localized = item[currentLang];
            const searchable = [
                item.keywords,
                localized.title,
                localized.summary,
                localized.badge,
                localized.steps.join(" "),
                localized.notes.join(" ")
            ]
                .join(" ")
                .toLowerCase();

            return searchable.includes(query);
        });

        countEl.textContent = `${text.showingPrefix} ${filtered.length} ${text.showingSuffix}`;

        if (!filtered.length) {
            container.innerHTML = `<div class="empty-state">${text.noResults}</div>`;
            return;
        }

        container.innerHTML = filtered
            .map((item) => {
                const info = item[currentLang];
                const stepsHtml = info.steps.map((step) => `<li>${step}</li>`).join("");
                const notesHtml = info.notes.map((note) => `<li>${note}</li>`).join("");

                return `
                    <article class="guide-card">
                        <span class="guide-badge">${info.badge}</span>
                        <h3>${info.title}</h3>
                        <p class="guide-summary">${info.summary}</p>
                        <div class="fee-alert">${info.tip}</div>
                        <div class="steps-box">
                            <h4>${text.stepsTitle}</h4>
                            <ol class="steps-list">${stepsHtml}</ol>
                        </div>
                        <button type="button" class="read-notes-btn" data-toggle-notes="${item.id}" aria-expanded="false">
                            ${text.readNotesBtn}
                        </button>
                        <div id="notes-${item.id}" class="card-notes-drawer" hidden>
                            <h5>${text.notesBoxTitle}</h5>
                            <ul>${notesHtml}</ul>
                        </div>
                    </article>
                `;
            })
            .join("");
    }

    function setupEducationControls() {
        const container = document.getElementById("education-list");
        if (container) {
            container.addEventListener("click", (e) => {
                const btn = e.target.closest("[data-toggle-notes]");
                if (!btn) return;
                const drawer = document.getElementById(`notes-${btn.dataset.toggleNotes}`);
                if (!drawer) return;

                const isHidden = drawer.hidden;
                drawer.hidden = !isHidden;
                btn.setAttribute("aria-expanded", String(isHidden));
                btn.textContent = isHidden ? uiText[currentLang].hideNotesBtn : uiText[currentLang].readNotesBtn;
            });
        }

        const searchInput = document.getElementById("education-search");
        if (searchInput) {
            searchInput.addEventListener("input", (e) => {
                searchQuery = e.target.value;
                renderEducation();
            });
        }

        document.querySelectorAll(".filter-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                currentFilter = btn.dataset.filter;
                document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");
                renderEducation();
            });
        });
    }

    /* 8. LANGUAGE SWITCHING (SYNCED ACROSS ALL PAGES) */
    function applyLanguage(lang) {
        if (!uiText[lang]) lang = "en";
        currentLang = lang;
        const t = uiText[lang];

        document.documentElement.lang = lang;
        try {
            localStorage.setItem("bn_lang", lang);
        } catch (err) {}

        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (t[key]) {
                el.innerHTML = t[key];
            }
        });

        const searchInput = document.getElementById("education-search");
        if (searchInput) searchInput.placeholder = t.searchPlaceholder;

        document.querySelectorAll(".lang-btn").forEach((btn) => {
            btn.classList.toggle("active", btn.dataset.lang === lang);
        });

        updateVoiceButtonText();
        updateMoneyDashboard();
        renderSafetyResult();
        renderEducation();
    }

    function setupLanguageButtons() {
        document.querySelectorAll(".lang-btn").forEach((btn) => {
            btn.addEventListener("click", () => {
                applyLanguage(btn.dataset.lang);
            });
        });
    }

    /* 9. FLOATING BHARAT ASSISTANT */
    function setupAssistant() {
        const chatButton = document.createElement("button");
        chatButton.textContent = "✦";
        chatButton.className = "chat-button";
        chatButton.setAttribute("aria-label", "Open Bharat Nexus Assistant");
        document.body.appendChild(chatButton);

        const chatBox = document.createElement("div");
        chatBox.className = "chat-box";
        chatBox.innerHTML = `
            <div class="chat-heading">Bharat Nexus Assistant</div>
            <div class="chat-content">
                <p>Namaste! Jump directly to any workspace tool:</p>
                <div class="chat-quick-actions">
                    <button type="button" class="chat-quick-btn" data-scroll="resume-builder">📄 Resume &amp; Biodata Maker</button>
                    <button type="button" class="chat-quick-btn" data-scroll="money-dashboard">📊 Visual EMI &amp; Savings Dashboard</button>
                    <button type="button" class="chat-quick-btn" data-scroll="safety-guide">🛡️ Online Safety Guide</button>
                    <button type="button" class="chat-quick-btn" data-go="library.html">📚 Open Knowledge Library →</button>
                </div>
            </div>
        `;
        document.body.appendChild(chatBox);

        chatButton.addEventListener("click", () => {
            chatBox.classList.toggle("chat-open");
        });

        chatBox.addEventListener("click", (e) => {
            const scrollTarget = e.target.closest("[data-scroll]");
            if (scrollTarget) {
                const el = document.getElementById(scrollTarget.dataset.scroll);
                chatBox.classList.remove("chat-open");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                return;
            }

            const goBtn = e.target.closest("[data-go]");
            if (goBtn) {
                window.location.href = goBtn.dataset.go;
            }
        });
    }

    /* INITIALIZE */
    function init() {
        let savedLang = "en";
        try {
            const stored = localStorage.getItem("bn_lang");
            if (stored && uiText[stored]) savedLang = stored;
        } catch (err) {}

        setupNavigationAndComfort();
        setupResumeBuilder();
        setupMoneyDashboard();
        setupSafetyGuide();
        setupEducationControls();
        setupLanguageButtons();
        setupAssistant();
        applyLanguage(savedLang);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();