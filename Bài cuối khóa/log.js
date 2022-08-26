function checkInput(){
    if (document.getElementById("username").value == "") {
        alert("Tên đăng nhập không được để trống!!!");
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
            alert("Đăng nhập thành công");
            v += 1;
            break;
        }
    }
    if(v==0){
        alert("Tên đăng nhập hoặc mật khẩu sai")
    }
}