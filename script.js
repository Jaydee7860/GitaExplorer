const comparisons = {
    "fear": {
        title: "Fear in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "In this path, there is no loss. Even a little effort saves from great fear. (BG 2.40)",
        ashtavakra: "Knowing yourself as pure awareness, fear disappears. (AG 1.7)"
    },
    "ego": {
        title: "Ego in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "The wise see a learned Brahmin, a cow, an elephant, a dog, and a dog-eater equally. (BG 5.18)",
        ashtavakra: "One who knows the Self is free from pride and ego. (AG 14.4)"
    },
    "liberation": {
        title: "Liberation in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "Abandon all duties and surrender to Me. I will free you from all sins. (BG 18.66)",
        ashtavakra: "Liberation is knowing that you were never bound. (AG 1.11)"
    },
    "karma": {
        title: "Karma in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "You have the right to perform your duty, but not to the results. (BG 2.47)",
        ashtavakra: "The wise see action in inaction and inaction in action. (AG 18.21)"
    },
    "desire": {
        title: "Desire in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "As fire is covered by smoke, so is wisdom covered by desire. (BG 3.38)",
        ashtavakra: "When desire ceases, the mind becomes still and blissful. (AG 4.2)"
    },
    "detachment": {
        title: "Detachment in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "One who is unattached to external pleasure attains real happiness. (BG 5.21)",
        ashtavakra: "Freedom is attained when one remains indifferent to pleasure and pain. (AG 8.3)"
    },
    "self": {
        title: "Self in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "The self is eternal, unchanging, and beyond birth and death. (BG 2.20)",
        ashtavakra: "You are pure consciousness, beyond body and mind. (AG 1.3)"
    },
    "wisdom": {
        title: "Wisdom in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "A wise person sees all beings with an equal vision. (BG 6.29)",
        ashtavakra: "True wisdom is knowing that nothing needs to be done. (AG 18.12)"
    },
    "peace": {
        title: "Peace in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "The one who abandons all desires attains peace. (BG 2.71)",
        ashtavakra: "The one who remains undisturbed by thoughts attains peace. (AG 6.2)"
    },
    "love": {
        title: "Love in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "He who sees everything in Me and Me in everything never loses My sight, nor do I ever lose sight of him. (BG 6.30)",
        ashtavakra: "True love arises when the sense of separation disappears. (AG 15.3)"
    },
    "compassion": {
        title: "Compassion in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "One who is free from malice towards others, friendly and compassionate, free from possessiveness and ego, is dear to Me. (BG 12.13)",
        ashtavakra: "Compassion arises naturally when one knows all beings are the Self. (AG 17.2)"
    },
    "truth": {
        title: "Truth in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "Truthful speech which is pleasant and beneficial, and the practice of self-study, is called austerity of speech. (BG 17.15)",
        ashtavakra: "Truth is that which does not change with time and place. (AG 2.5)"
    },
    "devotion": {
        title: "Devotion in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "Whoever worships Me with love and devotion, I reside in them. (BG 9.29)",
        ashtavakra: "Devotion is effortless when one realizes the truth of existence. (AG 10.4)"
    },
    "attachment": {
        title: "Attachment in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "He who has no attachments, who neither rejoices nor grieves, has steady wisdom. (BG 2.57)",
        ashtavakra: "The one who is free from attachment lives in bliss. (AG 16.6)"
    },
    "equanimity": {
        title: "Equanimity in Bhagavad Gita & Ashtavakra Gita",
        bhagavad: "A person who is alike in happiness and distress, who is steady in both, is fit for liberation. (BG 2.15)",
        ashtavakra: "One who remains unmoved by joy and sorrow is truly free. (AG 13.7)"
    }
};

function showComparison(word) {
    document.getElementById("word-title").innerText = comparisons[word].title;
    document.getElementById("concept").innerText = word.charAt(0).toUpperCase() + word.slice(1);
    document.getElementById("bhagavad").innerText = comparisons[word].bhagavad;
    document.getElementById("ashtavakra").innerText = comparisons[word].ashtavakra;
    
    document.getElementById("comparison-section").classList.remove("hidden");
}
