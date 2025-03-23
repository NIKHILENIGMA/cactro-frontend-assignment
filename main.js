let chatbotState = false; // Default state: hidden
let chatbot = document.getElementById("chatbot-banner");
let chatbotText = document.getElementById("chatbot-text"); 
if (chatbot) {
    chatbot.addEventListener("click", toggleChatbot);
}

function closeBanner() {
    document.getElementById("cookie-banner").style.display = "none";
}

function toggleChatbot() {
    if (chatbotText) {
        chatbotState = !chatbotState; // Toggle state
        chatbotText.style.display = chatbotState ? "block" : "none";
    }
}

function acceptCookies() {
    alert("Cookies accepted!");
    closeBanner();
}

function declineCookies() {
    alert("Cookies declined!");
    closeBanner();
}


