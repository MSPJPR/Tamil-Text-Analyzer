// Function to analyze Tamil text input
function analyzeText() {
    const inputText = document.getElementById("inputText").value;
    const resultElement = document.getElementById("result");
    const morphResultElement = document.getElementById("morphResult");

    if (inputText === "") {
        resultElement.textContent = "Please enter some Tamil text!";
        morphResultElement.textContent = "";
        return;
    }

    // Sample processing logic (Word segmentation)
    let words = segmentWords(inputText);
    resultElement.textContent = "Words: " + words.join(", ");

    // Placeholder for Morphological Analysis
    let morphologicalAnalysis = analyzeMorphology(inputText);
    morphResultElement.textContent = morphologicalAnalysis;
}

// Dummy word segmentation logic (to be expanded with actual logic)
function segmentWords(text) {
    // Simple word segmentation based on spaces (can be expanded with real logic)
    return text.split(" ");
}

// Placeholder function for Morphological Analysis
function analyzeMorphology(text) {
    // Placeholder logic for morphological analysis
    return "Morphological analysis will be added here.";
}

// Function to speak the Tamil text using Text-to-Speech (TTS)
function speakText() {
    const inputText = document.getElementById("inputText").value;
    if (inputText === "") {
        alert("Please enter some Tamil text to speak.");
        return;
    }

    // Use the SpeechSynthesis API to speak the input text
    const speech = new SpeechSynthesisUtterance(inputText);
    speech.lang = "ta-IN";  // Set the language to Tamil
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    // Speak the text
    window.speechSynthesis.speak(speech);
}
