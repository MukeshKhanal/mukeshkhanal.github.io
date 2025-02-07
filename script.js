const greetings = [
    "Bonjour, Je suis",  
    "¡Hola, soy",        
    "Hallo, Ich bin",    
    "नमस्ते, म"        
];

let index = 0;

function changeGreeting() {
    const greetingElement = document.getElementById("greetings");

    
    greetingElement.style.opacity = 0;

    setTimeout(() => {
        
        greetingElement.textContent = greetings[index];

        
        greetingElement.style.opacity = 1;
        greetingElement.style.fontSize = 20;

        
        index = (index + 1) % greetings.length;
    }, 500);
}


setInterval(changeGreeting, 3000);
