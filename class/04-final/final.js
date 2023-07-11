const ChangeFocus1 = () => {
  let p1 = document.getElementById("p1").value;
  if (p1.length == 3) {
    document.getElementById("p2").focus();
  }
};

const ChangeFocus2 = () => {
  let p2 = document.getElementById("p2").value;
  if (p2.length == 4) {
    document.getElementById("p3").focus();
  }
};

const TurnOnGetNumber = () => {
  let p1 = document.getElementById("p1").value;
  let p2 = document.getElementById("p2").value;
  let p3 = document.getElementById("p3").value;

  if (p1.length === 3 && p2.length === 4 && p3.length === 4) {
    document.getElementById("getNumber_button").disabled = false;
  } else {
    document.getElementById("getNumber_button").disabled = true;
  }
};

let isStarted = false;
let checked = false;

const GetNumber = () => {
  if (!isStarted) {
    document.getElementById("finish").disabled = false;
    let number = document.getElementById("number");
    number.innerText = String(Math.floor(Math.random() * 1000000)).padStart(
      6,
      "0"
    );

    let time = 5;
    let timer;
    timer = setInterval(() => {
      if (time >= 0 && !checked) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerText = min + ":" + sec;
        time -= 1;
      } else if (checked) {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        document.getElementById("timer").innerText = "3:00";
        document.getElementById("getNumber_button").disabled = true;
        document.getElementById("getNumber_button").innerText = "인증완료!";
        document.getElementById("submit_button").disabled = false;
        clearInterval(timer);
      } else {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        number.innerText = "000000";
        document.getElementById("timer").innerText = "3:00";
        clearInterval(timer);
      }
    }, 1000);
  } else {
  }
};

const CheckUser = () => {
  alert("인증이 완료되었습니다.");
  checked = true;
};

const SignUp = () => {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  const pw1 = document.getElementById("pw1").value;
  const pw2 = document.getElementById("pw2").value;
  const location = document.getElementById("location").value;
  const gender_woman = document.getElementById("gender_woman").checked;
  const gender_man = document.getElementById("gender_man").checked;

  let isValid = true;
  if (email.includes("@") === false) {
    document.getElementById("error_email").innerText =
      "이메일이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.getElementById("error_email").innerText = "";
  }

  if (name === "") {
    document.getElementById("error_name").innerText =
      "이름이 올바르지 않습니다.";
    isValid = false;
  } else {
    document.getElementById("error_email").innerText = "";
  }

  if (pw1 === "") {
    document.getElementById("error_pw1").innerText =
      "비밀번호를 입력해 주세요.";
    isValid = false;
  } else {
    document.getElementById("error_pw1").innerText = "";
  }

  if (pw2 === "") {
    document.getElementById("error_pw2").innerText = "비밀번호를 입력해 주세요";
    isValid = false;
  } else {
    document.getElementById("error_pw2").innerText = "";
  }

  if (pw1 !== pw2) {
    document.getElementById("error_pw1").innerText =
      "비밀번호가 일치하지 않습니다.";
    document.getElementById("error_pw2").innerText =
      "비밀번호가 일치하지 않습니다.";
    isValid = false;
  }

  if (location !== "서울" && location !== "경기" && location !== "인천") {
    document.getElementById("error_location").innerText =
      "지역을 선택해 주세요.";
    isValid = false;
  } else {
    document.getElementById("error_location").innerText = "";
  }

  if (gender_woman === false && gender_man === false) {
    document.getElementById("error_gender").innerText = "성별을 선택해 주세요";
    isValid = false;
  } else {
    document.getElementById("error_gender").innerText = "";
  }

  if (isValid === true) {
    alert("코드캠프 가입을 축하합니다.");
  }
};
