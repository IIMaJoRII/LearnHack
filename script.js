document.getElementById("button").onclick = function () {
    alert ("Вы нажали кнопку.");
}

    function randomString(i) {
        var rnd = '';
        while (rnd.length < i) 
            rnd += Math.random().toString(36).substring(2);
        return rnd.substring(0, i);
    };

let button1 = document.getElementById('button1').onclick = function () {
    let p = document.getElementById("p1");
    p.innerText = randomString(25);
}


