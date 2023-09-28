const 정답 = "APPLE";

let attepmts = 0;
let index = 0;
let timer;

function appStar() {
  const displayGameover = () => {
    const div = document.createElement("div");
    div.innerText = "게임이 종료됐습니다.";
    div.style =
      "padding-left:10px; display:flex; justify-contnet: center; align-items:center; position:absolute; top:40vh; background-color:white; width:200px; height:100px; left:40vw";
    document.body.appendChild(div);
  };
  const nextLine = () => {
    if (attepmts === 6) return gameover();
    attepmts += 1;
    index = 0;
  };

  const gameover = () => {
    window.removeEventListener("keydown", handlekeydown);
    displayGameover();
    clearInterval(timer);
  };
  const handleEnterKey = () => {
    let 맞은_갯수 = 0;
    for (let i = 0; i < 5; i++) {
      const block = document.querySelector(
        `.board-block[data-index="${attepmts}${i}"]`
      );

      const 입력한_글자 = block.innerText;
      const 정답_글자 = 정답[i];
      if (입력한_글자 === 정답_글자) {
        맞은_갯수 += 1;
        block.style.background = "green";
      } else if (정답.includes(입력한_글자)) block.style.background = "yellow";
      else block.style.background = "gray";
    }
    if (맞은_갯수 === 5) gameover();
    else nextLine();
  };

  const handleBackspace = () => {
    if (index > 0) {
      const preBlock = document.querySelector(
        `.board-block[data-index='${attepmts}${index - 1}']`
      );
      preBlock.innerText = "";
    }
    if (index !== 0) index -= 1;
  };

  const handlekeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
    const thisBlock = document.querySelector(
      `.board-block[data-index="${attepmts}${index}"]`
    );

    if (event.key === "Backspace") handleBackspace();
    else if (index === 5) {
      if (event.key === "Enter") handleEnterKey();
      else return;
    } else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index++;
    }

    //if (65 < keyCode && keyCode < 90)
  };
  const starttimer = () => {
    const 시작_시간 = new Date();

    function setTime() {
      const 현재_시간 = new Date();
      const 흐른_시간 = new Date(현재_시간 - 시작_시간);
      const 분 = 흐른_시간.getMinutes().toString();
      const 초 = 흐른_시간.getSeconds().toString();
      const timeH1 = document.querySelector(".time");
      timeH1.innerHTML = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
    }

    timer = setInterval(setTime, 1000);
  };
  starttimer();
  window.addEventListener("keydown", handlekeydown);
}

appStar();
