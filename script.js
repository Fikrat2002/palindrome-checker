const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

function palindrome() {
  if (textInput.value === '') {
    console.warn('Please input a value');
    result.innerHTML = '';
    return;
  }

  const processedStr = textInput.value.replace(/[\W_]/g, '').toLowerCase();
  let isPalindrome = true;

  for (let i = 0; i < Math.floor(processedStr.length / 2); i += 1) {
    if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    result.innerHTML = textInput.value + ' is a palindrome'; 
  } else {
    result.innerHTML = textInput.value + ' is not a palindrome';
  }
}

checkBtn.addEventListener('click', palindrome);
