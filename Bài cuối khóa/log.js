function checkInput(){
    if (document.getElementById("username").value == "") {
        return false;
    }
    if (document.getElementById("pwd").value.length < 6) {
        alert("Mật khẩu phải từ 6 kí tự!!!");
        return false;
    }
    
    checkInfo()
}
let data = JSON.parse(localStorage.userList);
function checkInfo(){
    let v = 0
    for(let i =0;i<data.length;i++){
        let u = data[i].username
        let p = data[i].pwd
        if(u == document.getElementById("username").value && p == document.getElementById("pwd").value){
            window.location.href = "http://127.0.0.1:5500/B%C3%A0i%20cu%E1%BB%91i%20kh%C3%B3a/index.html";
            v += 1;
            break;
        }
    }
    if(v==0){
        alert("Tên đăng nhập hoặc mật khẩu sai")
    }
}