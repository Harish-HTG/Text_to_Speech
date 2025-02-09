var speech = new SpeechSynthesisUtterance();
var synth = window.speechSynthesis;
var voices = [];

// Load available voices
function loadVoices() {
    voices = synth.getVoices();
    var languageSelect = document.getElementById("languageSelect");
    languageSelect.innerHTML = ""; // Clear previous options

    voices.forEach((voice, index) => {
        var option = document.createElement("option");
        option.value = voice.lang;
        option.textContent = `${voice.name} (${voice.lang})`;
        languageSelect.appendChild(option);
    });
}

// Ensure voices are loaded properly
if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = loadVoices;
}

// Speak function
function speak() {
    var text = document.getElementById("textInput").value;
    var language = document.getElementById("languageSelect").value;

    speech.text = text;
    speech.lang = language;
    synth.speak(speech);
}

// Pause Speech
function pause() {
    synth.pause();
}

// Resume Speech
function resume() {
    synth.resume();
}

// Stop Speech
function stop() {
    synth.cancel();
}

// Load voices when the page loads
window.onload = () => {
    setTimeout(loadVoices, 500);
};
