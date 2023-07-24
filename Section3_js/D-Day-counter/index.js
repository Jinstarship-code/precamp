const dataFromMaker = () => {
  const inputYear = document.querySelector("#target-year-input").value;
  const inputMonth = document.querySelector("#target-month-input").value;
  const inputDate = document.querySelector("#target-date-input").value;

  return `${inputYear}-${inputMonth}-${inputDate}`;
};

const counterMaker = () => {
  const messageContainer = document.querySelector("#d-day-message");
  messageContainer.textContent = "D-Day를 입력해 주세요.";
  const targetDateInput = dataFromMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;

  if (remaining <= 0) {
    console.log("타이머가 종료되었습니다.");
  } else if (isNaN(remaining)) {
    console.log("잘못 입력하셨습니다.");
  }

  const remainingDate = Math.floor(remaining / 3600 / 24);
  const remainingHours = Math.floor(remaining / 3600) % 24;
  const remainingMin = Math.floor(remaining / 60) % 60;
  const remainingSec = Math.floor(remaining) % 60;
  console.log(remainingDate, remainingHours, remainingMin, remainingSec);
};
