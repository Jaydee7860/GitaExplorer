const comparisons = {
    "fear": {
        title: "Fear in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "In this path, there is no loss. Even a little effort saves from great fear. (BG 2.40)",
        bhagavad_sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते। स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्।। (BG 2.40)",
        bhagavad_hindi: "इस मार्ग में कोई हानि नहीं है। थोड़ा सा प्रयास भी बड़े भय से बचाता है।",
        ashtavakra: "Knowing yourself as pure awareness, fear disappears. (AG 1.7)",
        ashtavakra_sanskrit: "ज्ञात्वा त्वमात्मानं शुद्धबोधस्वरूपं भयः निवर्तते। (AG 1.7)",
        ashtavakra_hindi: "अपने आप को शुद्ध चेतना के रूप में जानने पर भय समाप्त हो जाता है।"
    },
    "ego": {
        title: "Ego in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "The wise see a learned Brahmin, a cow, an elephant, a dog, and a dog-eater equally. (BG 5.18)",
        bhagavad_sanskrit: "विद्याविनयसंपन्ने ब्राह्मणे गवि हस्तिनि। शुनि चैव श्वपाके च पण्डिताः समदर्शिनः।। (BG 5.18)",
        bhagavad_hindi: "ज्ञानी व्यक्ति विद्वान ब्राह्मण, गाय, हाथी, कुत्ता और चांडाल को समान दृष्टि से देखते हैं।",
        ashtavakra: "One who knows the Self is free from pride and ego. (AG 14.4)",
        ashtavakra_sanskrit: "आत्मानं जानाति यः स गर्वदर्पवर्जितः। (AG 14.4)",
        ashtavakra_hindi: "जो आत्मा को जानता है, वह अहंकार और गर्व से मुक्त हो जाता है।"
    },
    "liberation": {
        title: "Liberation in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "Abandon all duties and surrender to Me. I will free you from all sins. (BG 18.66)",
        bhagavad_sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः।। (BG 18.66)",
        bhagavad_hindi: "सभी कर्तव्यों को त्यागकर मेरी शरण में आओ। मैं तुम्हें सभी पापों से मुक्त कर दूँगा।",
        ashtavakra: "Liberation is knowing that you were never bound. (AG 1.11)",
        ashtavakra_sanskrit: "मोक्षो हि नित्यं मुक्तस्य केवलं बन्ध कल्पना। (AG 1.11)",
        ashtavakra_hindi: "मोक्ष यह जानना है कि तुम कभी बंधे ही नहीं थे।"
    }
};

function showComparison(word) {
    document.getElementById("word-title").innerText = comparisons[word].title;
    document.getElementById("concept").innerText = word.charAt(0).toUpperCase() + word.slice(1);
    document.getElementById("bhagavad").innerText = comparisons[word].bhagavad;
    document.getElementById("bhagavad_sanskrit").innerText = comparisons[word].bhagavad_sanskrit;
    document.getElementById("bhagavad_hindi").innerText = comparisons[word].bhagavad_hindi;
    document.getElementById("ashtavakra").innerText = comparisons[word].ashtavakra;
    document.getElementById("ashtavakra_sanskrit").innerText = comparisons[word].ashtavakra_sanskrit;
    document.getElementById("ashtavakra_hindi").innerText = comparisons[word].ashtavakra_hindi;
    
    document.getElementById("comparison-section").classList.remove("hidden");
}
