const priNum = document.getElementById("priNum")
const segNum = document.getElementById("segNum")
const btnSoma = document.getElementById("btnSoma")
const resNum = document.getElementById("resNum")

btnSoma.addEventListener("click", function () {
    const numberOne = +priNum.value
    const numbertwo = +segNum.value
    const somaGeral = numberOne + numbertwo
    resNum.textContent = somaGeral;
  });

