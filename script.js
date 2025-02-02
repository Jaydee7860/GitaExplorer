<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gita Wisdom Explorer</title>
    <link rel="stylesheet" href="styles.css"> <!-- Linking the CSS file -->
</head>
<body>
    <div class="container">
        <h1>Gita Wisdom Explorer</h1>
        <p>Click on a concept to see Bhagavad Gita vs. Ashtavakra Gita perspectives.</p>

        <div class="word-cloud">
            <span class="word" onclick="showComparison('fear')">Fear</span>
            <span class="word" onclick="showComparison('ego')">Ego</span>
            <span class="word" onclick="showComparison('liberation')">Liberation</span>
            <span class="word" onclick="showComparison('karma')">Karma</span>
            <span class="word" onclick="showComparison('desire')">Desire</span>
            <span class="word" onclick="showComparison('detachment')">Detachment</span>
            <span class="word" onclick="showComparison('self')">Self</span>
            <span class="word" onclick="showComparison('wisdom')">Wisdom</span>
            <span class="word" onclick="showComparison('peace')">Peace</span>
        </div>

        <div id="comparison-section" class="hidden">
            <h2 id="word-title"></h2>
            <table>
                <tr>
                    <th>Concept</th>
                    <th>Bhagavad Gita</th>
                    <th>Ashtavakra Gita</th>
                </tr>
                <tr>
                    <td id="concept"></td>
                    <td id="bhagavad"></td>
                    <td id="ashtavakra"></td>
                </tr>
            </table>
        </div>
    </div>
    <script src="script.js"></script> <!-- Linking the JS file -->
</body>
</html>
