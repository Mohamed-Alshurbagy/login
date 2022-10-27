let btn = document.getElementById("btn");
let back = document.getElementById("back");
let login = document.getElementById("login");
let h = document.getElementById("h")
let uname = document.getElementById('uname');




login.onclick = function(){
    if (uname.value ==''){
        h.innerHTML = 'User Name Can\'t Be Empty';
        setTimeout(function s (){ h.innerHTML = ''}, 4000)
    }
    else{
    h.innerHTML = `Welcome Mr: ${uname.value}`
    setTimeout(function s (){ h.innerHTML = ''}, 2000)
    }

}

let card = document.getElementById("main-card");
btn.onclick = function(){
    card.style.transform = "rotateY(180deg)"
}

back.onclick = function(){
    card.style.transform = "rotateY(0)"

}



