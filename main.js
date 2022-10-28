    const btn = document.querySelector("button");
    const advice = document.querySelector(".advice");
    const adviceNum = document.getElementById("advice_num");
    const countDown = document.querySelector(".countdown");

    function getAdvice() {
        fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            advice.textContent = data.slip.advice,
            adviceNum.textContent = data.slip.id
        });
        // Needed to get actual width of main box beause of width for timer 
        const box = document.getElementById("box");
        const timerWidth = `${box.offsetWidth/16-1}rem`;
            countDown.animate(
                [
                  {width: timerWidth},
                  {
                    opacity: "1"
                  },
                  {
                    width: "0"
                  }
                ],
                { duration: 1400, iterations: 1 }
              );
                console.log(timerWidth)
        }

btn.addEventListener("click", getAdvice);
  