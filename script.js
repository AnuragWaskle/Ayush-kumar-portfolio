document.addEventListener("DOMContentLoaded", () => {
    const typingElement = document.querySelector(".typing");
    const words = ["UI/UX Designer", "Video Editor", "Creative Thinker"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        const displayedText = isDeleting
            ? currentWord.substring(0, charIndex--)
            : currentWord.substring(0, charIndex++);

        typingElement.textContent = displayedText;

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        } else {
            setTimeout(type, isDeleting ? 100 : 150);
        }
    }

    type();
});


document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', () => {
      box.style.transform = 'rotateY(360deg)';
      setTimeout(() => (box.style.transform = ''), 5000); 
    });
  });
  
document.querySelectorAll("form input, form textarea").forEach((input) => {
    input.addEventListener("focus", () => {
      input.style.boxShadow = "0 0 10px rgba(255, 255, 0, 0.8)";
    });
    input.addEventListener("blur", () => {
      input.style.boxShadow = "inset 0px 4px 8px rgba(0, 0, 0, 0.1)";
    });
  });
  