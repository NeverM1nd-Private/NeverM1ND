const passwordInput = document.getElementById("password");
const lengthInput = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

function generatePassword() {
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const numChars = "0123456789";
  const symChars = "!@#$%^&*()_+{}[]<>?/|";
  
  let allChars = "";
  if (uppercase.checked) allChars += upperChars;
  if (lowercase.checked) allChars += lowerChars;
  if (numbers.checked) allChars += numChars;
  if (symbols.checked) allChars += symChars;

  const length = parseInt(lengthInput.value);
  let password = "";

  if (allChars.length === 0) {
    alert("Please select at least one character type!");
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  passwordInput.value = password;
}

generateBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
  if (passwordInput.value) {
    navigator.clipboard.writeText(passwordInput.value);
    copyBtn.innerText = "Copied!";
    setTimeout(() => (copyBtn.innerText = "Copy"), 1000);
  }
});