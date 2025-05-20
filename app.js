// Change heading text content dynamically
function changeText() {
    const heading = document.getElementById("main-title");
    heading.textContent = "Text Changed! JavaScript in Action";
}

// Modify CSS styles via JavaScript
function changeStyle() {
    const box = document.getElementById("dynamic-box");
    box.style.backgroundColor = "#ffcccb";
    box.style.border = "2px solid red";
    box.style.borderRadius = "10px";
}

// Add a new message element
function addMessage() {
    const messages = document.getElementById("messages");
    const newMessage = document.createElement("p");
    newMessage.textContent = "New message added at " + new Date().toLocaleTimeString();
    messages.appendChild(newMessage);
}

// Remove all message elements
function removeMessages() {
    const messages = document.getElementById("messages");
    messages.innerHTML = ""; // Clear all child elements
}
