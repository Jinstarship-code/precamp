let isStarted = false;

const auth = () => {
  if (!isStarted) {
    //타이머가 작동중이 아닐떄
    isStarted = true;
    document.getElementById("finish").disabled = false;
    let target = document.getElementById("target");

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    target.innerText = token;
    target.style.color = `#${token}`;

    let time = 10;
    let timer;
    timer = setInterval(() => {
      if (time >= 0) {
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        document.getElementById("timer").innerText = min + ":" + sec;
        time -= 1;
      } else {
        document.getElementById("finish").disabled = true;
        isStarted = false;
        console.log("타이머 작동중");
        clearInterval(timer);
      }
    }, 1000);
  } else {
  }
};
