let tipo_de_cliente_background = document.querySelector('.select-menu .options');
let tipo_de_situacao_background = document.querySelector('.select-menu2 .options2');
let tipo_de_vocabulario_background = document.querySelector('.select-menu3 .options3');

// 1
const optionMenu1 = document.querySelector(".select-menu"),
    selectBtn1 = optionMenu1.querySelector(".select-btn"),
    options1 = optionMenu1.querySelectorAll(".option"),
    sBtnText1 = optionMenu1.querySelector(".sBtn-text");

selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));

options1.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").innerText;
        document.getElementById('1_tipo').innerText = 'Novo Tipo de Cliente: ' + selectedOption;
        tipo_de_cliente_background.style.backgroundColor = '#c9c8c8';
        sBtnText1.innerText = selectedOption;
        optionMenu1.classList.remove("active");
    });
});

// 2
const optionMenu2 = document.querySelector(".select-menu2"),
    selectBtn2 = optionMenu2.querySelector(".select-btn2"),
    options2 = optionMenu2.querySelectorAll(".option2"),
    sBtnText2 = optionMenu2.querySelector(".sBtn-text2");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));

options2.forEach(option2 => {
    option2.addEventListener("click", () => {
        let selectedOption2 = option2.querySelector(".option-text2").innerText;
        document.getElementById('2_siti').innerText = 'Situação: ' + selectedOption2;
        tipo_de_situacao_background.style.backgroundColor = '#c9c8c8';
        sBtnText2.innerText = selectedOption2;
        optionMenu2.classList.remove("active");
    });
});

// 3
const optionMenu3 = document.querySelector(".select-menu3"),
    selectBtn3 = optionMenu3.querySelector(".select-btn3"),
    options3 = optionMenu3.querySelectorAll(".option3"),
    sBtnText3 = optionMenu3.querySelector(".sBtn-text3");

selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));

options3.forEach(option3 => {
    option3.addEventListener("click", () => {
        let selectedOption3 = option3.querySelector(".option-text3").innerText;
        document.getElementById('3_rep').innerText = 'Repertório: ' + selectedOption3;
        tipo_de_vocabulario_background.style.backgroundColor = '#c9c8c8';
        sBtnText3.innerText = selectedOption3;
        optionMenu3.classList.remove("active");
    });
});