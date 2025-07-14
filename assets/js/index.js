function clearInput() {
  document.getElementById("inputString").value = "";
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "";
  resultElement.className = "result"; // Reset classes
}

function checkPalindrome() {
  let inputString = document.getElementById("inputString").value.toLowerCase().trim();
  let resultElement = document.getElementById("result");

  // Remove previous classes
  resultElement.className = "result";

  // Remove non-alphanumeric characters
  inputString = inputString.replace(/[^a-z0-9]/gi, '');

  if (inputString === "") {
    resultElement.innerHTML = "⚠️ Invalid input!";
    resultElement.classList.add("show", "empty");
    return;
  }

  let reversed = inputString.split("").reverse().join("");

  if (reversed === inputString) {
    resultElement.innerHTML = "✅ It is a Palindrome!";
    resultElement.classList.add("show", "palindrome");
  } else {
    resultElement.innerHTML = "❌ It is Not a Palindrome!";
    resultElement.classList.add("show", "not-palindrome");
  }
}
