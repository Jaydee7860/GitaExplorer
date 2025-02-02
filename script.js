const comparisons = {
    "fear": {
        title: "Fear in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: {
            sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते। स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्॥ २.४०॥",
            translation: "In this path, there is no loss. Even a little effort saves from great fear. (BG 2.40)",
            audio: "audio/fear_bg.mp3"
        },
        ashtavakra: {
            sanskrit: "ज्ञानेनात्मानं ज्ञात्वा भयं नाशं गच्छति॥ १.७॥",
            translation: "Knowing yourself as pure awareness, fear disappears. (AG 1.7)",
            audio: "audio/fear_ag.mp3"
        }
    },
    "ego": {
        title: "Ego in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: {
            sanskrit: "विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥ ५.१८॥",
            translation: "The wise see a learned Brahmin, a cow, an elephant, a dog, and a dog-eater equally. (BG 5.18)",
            audio: "audio/ego_bg.mp3"
        },
        ashtavakra: {
            sanskrit: "यः आत्मज्ञानं प्राप्य अहंभावं त्यजति स मुक्तः॥ १४.४॥",
            translation: "One who knows the Self is free from pride and ego. (AG 14.4)",
            audio: "audio/ego_ag.mp3"
        }
    }
};

function showComparison(word) {
    if (!comparisons[word]) return;

    document.getElementById("word-title").innerText = comparisons[word].title;
    document.getElementById("concept").innerText = word.charAt(0).toUpperCase() + word.slice(1);
    document.getElementById("bhagavad").innerHTML = `
        <p><strong>संस्कृत:</strong> <span class="sanskrit-text">${comparisons[word].bhagavad.sanskrit}</span></p>
        <p>${comparisons[word].bhagavad.translation}</p>
        <audio controls>
            <source src="${comparisons[word].bhagavad.audio}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    `;
    document.getElementById("ashtavakra").innerHTML = `
        <p><strong>संस्कृत:</strong> <span class="sanskrit-text">${comparisons[word].ashtavakra.sanskrit}</span></p>
        <p>${comparisons[word].ashtavakra.translation}</p>
        <audio controls>
            <source src="${comparisons[word].ashtavakra.audio}" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    `;
    
    document.getElementById("comparison-section").classList.remove("hidden");
}
