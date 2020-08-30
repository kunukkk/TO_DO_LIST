function show() {
    var reg = document.getElementById("reg");
    reg.style.display = "inline-block";
}

function exit() {
    var reg = document.getElementById("reg");
    reg.style.display = "none";
}

function clear() {

}

function add() {
    var reg = document.getElementById("reg");
    var t1 = document.getElementById("t1");
    var newTd = document.createElement("td");
    var reg_t = document.getElementById("reg_t");
    var reg_d = document.getElementById("reg_d");
    var set_t = reg_t.value;
    var set_d = reg_d.value;
    newTd.innerHTML = set_t + ", " + set_d;
    newTd.setAttribute("id", "t");
    newTd.style.backgroundColor = "green";
    newTd.addEventListener("click",
        function () {
            var t2 = document.getElementById("t2");
            t1.removeChild(this);
            t2.appendChild(this);
            newTd.addEventListener("click",
                function () {
                    var t3 = document.getElementById("t3");
                    t2.removeChild(this);
                    t3.appendChild(this);
                    newTd.addEventListener("click",
                        function () {
                            t3.removeChild(this);
                        })
                })
        });
    t1.appendChild(newTd);
    reg.style.display = "none";
}
