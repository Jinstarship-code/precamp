const StartWord = () => {
  let myword = document.getElementById("myword");
  let word = document.getElementById("word");
  let result = document.getElementById("result");
  let lastword = word[word.length - 1];
  let firstword = myword[0];

  if (firstword === lastword) {
    result.innerText = "정답입니다!";
    word.innerText = myword.value;
    myword.value = "";
  } else {
    result.innerText = "떙!";
  }
};
