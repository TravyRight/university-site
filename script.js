var headerText = `
<div class="header">
    <div class="header-line">
        <a class="logo" href="index.html">
            <img class="logo-image" src="assets/logo.gif">
        </a>
        <div class="nav">
            <a class="nav-item" href="index.html">ГЛАВНАЯ</a>
            <a class="nav-item" href="woman_of_math.html">ЖЕНЩИНЫ-МАТЕМАТИКИ</a>
            <a class="nav-item" href="sources.html">ИСТОЧНИКИ</a>
            <a class="nav-item" href="frames.html">FRAME</a>
        </div>
        <div class="header-spacer"></div>
    </div>
</div>
`;

function setHeader() {
    var header = document.createElement("div");
    header.innerHTML = headerText;
    document.body.insertAdjacentElement('afterbegin', header);
}

function openPage() {
    const women = document.getElementById("womenSelect").value;

    switch (women) {
        case "Софья Ковалевская":
            window.location.href = "sofya_kovalevskaya.html";
            break;
        case "Софи Жермен":
            window.location.href = "sofi_zhermen.html";
            break;
        case "Августа Ада Кинг":
            window.location.href = "august_ada_king.html";
            break;
        case "Амалия Эмми Нётер":
            window.location.href = "amalia_emmi_neter.html";
            break;
        default:
            window.location.href = "index.html";
    }
}

function mark() {
    const number = parseFloat(document.getElementById("number").value) || 0;

    if (number < 1) {
        document.getElementById("markResult").innerHTML = "Оценка дожна быть >0";
    }

    else if (number >= 1 && number <= 5) {
        document.getElementById("markResult").innerHTML = "Так себе оценка бро...";
    }

    else if (number >= 6 && number <= 9) {
        document.getElementById("markResult").innerHTML = "ОК, спасибо";
    }

    else if (number >= 10) {
        document.getElementById("markResult").innerHTML = "Ай тигр. Спасибо за оценку!";
    }
}


setHeader();
