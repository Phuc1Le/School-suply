function checkInput() {
    if (document.getElementById("user").value == "") {
      alert("Tên đăng nhập không được để trống!!!");
      return false;
    }
    if (document.getElementById("pwd").value.length < 6) {
      alert("Mật khẩu phải từ 6 kí tự!!!");
      return false;
    }
    if (document.getElementById("rpwd").value != document.getElementById("pwd").value) {
      alert("Mật khẩu không khớp!!!");
      return false;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(document.getElementById("email").value)) {
      alert("Email không hợp lệ!!!");
      return false;
    }
    if (document.getElementById("sdt").value == "") {
      alert("Số điện thoại không được để trống!!!");
      return false;
    }
    alert("Thông tin hợp lệ.");
    if(!localStorage.userList){
      localStorage.userList = JSON.stringify([])
    }
    addInfo()
}
function addInfo(){
  let userList = JSON.parse(localStorage.userList);
  userList.push({
    username: document.getElementById("user").value,
    pwd: document.getElementById("pwd").value
  });
  localStorage.userList = JSON.stringify(userList);
}