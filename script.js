const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function palindrome() {
  const inputValue = textInput.value.trim();

  if (inputValue === '') {
    result.textContent = '';
    return;
  }

  const processedStr = inputValue.replace(/[\W_]/g, '').toLowerCase();

  let isPalindrome = true;
  for (let i = 0; i < Math.floor(processedStr.length / 2); i++) {
    if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    result.textContent = inputValue + ' is a palindrome';
  } else {
    result.textContent = inputValue + ' is not a palindrome';
  }
}

checkBtn.addEventListener('click', palindrome);
