body {
    font-family: 'Merriweather', serif;
    text-align: center;
    background-color: #f9f5e8;
    color: #333;
    padding: 20px;
    margin: 0;
}

.container {
    max-width: 800px;
    margin: 40px auto;
    background: white;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

h1 {
    color: #8b4513;
    font-size: 32px;
    font-weight: bold;
}

.word-cloud {
    margin: 25px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
}

.word {
    display: inline-block;
    font-size: 20px;
    padding: 14px 18px;
    background: linear-gradient(to right, #ff9966, #ff5e62);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
}

.word:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.25);
}

.hidden {
    display: none;
}

table {
    width: 100%;
    margin-top: 25px;
    border-collapse: collapse;
    border-radius: 10px;
    overflow: hidden;
}

th, td {
    border: 1px solid #ddd;
    padding: 14px;
    text-align: center;
}

th {
    background: #8b4513;
    color: white;
    font-size: 20px;
}

td {
    font-size: 18px;
    background: #fffaf0;
}
