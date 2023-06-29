const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Cannot find the element ${selector}`);
};

const form = selectElement("form");
const input = selectElement("input");
const result = selectElement(".result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = input.value;
    
    shortenUrl(url);
});
async function shortenUrl(url) {
    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
        const data = await res.json();
      const newUrl = document.getElementById("para");
      
      newUrl.innerHTML = `${data.result.short_link}`;
    //   result.prepend(newUrl);
    const copyBtn = result.querySelector(".btn");
    copyBtn.addEventListener("click", () => {
        // alert("Copied the text: " + copyBtn.textContent);
        if (copyBtn.textContent === "Copy") {
                navigator.clipboard.writeText(copyBtn.previousElementSibling.textContent);
                
              button.textContent = "Copied!";
              setTimeout(function() {
                button.textContent = "Copy";
              }, 1000);
            } else {
                
              button.textContent = "Copy";
            }
          
    });
    input.value = "";
} catch (err) {
    console.log(err);
}
}

const button = document.getElementById("btn");

// Get the viewport height
let vh = window.innerHeight * 0.01;
// Set the value of the --vh custom property to the calculated viewport height
document.documentElement.style.setProperty('--vh', `${vh}px`);

// On resize or orientation change, recalculate the viewport height and update the --vh custom property
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
