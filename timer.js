const 시작_시간 = new Date();
let timer;

function setTime() {
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const 분 = 흐른_시간.getMinutes().toString();
  const 초 = 흐른_시간.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerHTML = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

timer = setInterval(setTime, 1000);

const gameover = () => {
  window.removeEventListener("keydown", handlekeydown);
  displayGameover();
  clearInterval(timer);
};
