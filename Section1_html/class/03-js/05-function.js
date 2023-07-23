function auth() {
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  document.getElementById("target").innerText = token;
}

const auth2 = () => {
  let target = document.getElementById("target");
  const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  target.innerText = token;
  target.style.color = `#${token}`;
};
