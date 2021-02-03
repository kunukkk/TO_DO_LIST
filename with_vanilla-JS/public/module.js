function show() {
    let reg = document.getElementById("reg");
    reg.style.display = "inline-block";
}

function exit() {
    let reg = document.getElementById("reg");
    reg.style.display = "none";
}

function add() {
    let reg = document.getElementById("reg");
    let t1 = document.getElementById("t1");
    let newTd = document.createElement("td");
    let reg_t = document.getElementById("reg_t");
    let reg_d = document.getElementById("reg_d");
    let set_t = reg_t.value;
    if(set_t == ""){
        return;
    }
    let set_d = "";
    if (reg_d.value == ""){
        set_d = "기간없음"
    }
    else{
        set_d = reg_d.value;
    }
    newTd.innerHTML = set_t + " / " + set_d;
    newTd.addEventListener("click",
        function () {
            let t2 = document.getElementById("t2");
            t1.removeChild(this);
            t2.appendChild(this);
            newTd.addEventListener("click",
                function () {
                    let t3 = document.getElementById("t3");
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

function clearAll(){
    let check = confirm("you really want to clear all?")
    if(check == true){
         let tr = document.getElementsByTagName("tr");
        for(let i=0; i < tr.length; i++){
             tr[i].innerHTML = "";
        }
    }
    else{
        return;
    }
}