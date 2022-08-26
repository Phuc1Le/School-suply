var data = [
    {
        id: 1,
        cate: "DHDT",
        picture: "./imge/vo.jpg",
        des: "Box 5 vở ô ly 48 trang",
        price: "40000"
    },
    {
        id: 2,
        cate: "DHDT",
        picture: "./imge/butchi.jpg",
        des: "Box 10 bút chì",
        price: "20000"
    },
    {
        id: 3,
        cate: "DHDT",
        picture: "./imge/butbi.jpg",
        des: "Box 10 bút bi",
        price: "25000"
    },
    {
        id: 4,
        cate: "DHDT",
        picture: "./imge/vo2.jpg",
        des: "Box 5 vở ô ly 100 trang",
        price: "90000"
    },
    {
        id: 5,
        cate: "DHDT",
        picture: "./imge/thuoc.jpg",
        des: "Thước thẳng",
        price: "9000"
    },
    {
        id: 6,
        cate: "DHDT",
        picture: "./imge/compa.jpg",
        des: "Compa",
        price: "12000"
    },
    {
        id: 7,
        cate: "DHDT",
        picture: "./imge/eke.jpg",
        des: "Ê ke",
        price: "11000"
    },
    {
        id: 8,
        cate: "DHDT",
        picture: "./imge/ktra.jpg",
        des: "Bộ 25 giấy kiểm tra",
        price: "60000"
    },
    {
        id: 9,
        cate: "DHDT",
        picture: "./imge/tay.jpg",
        des: "Tẩy",
        price: "8000"
    },
    {
        id: 10,
        cate: "DHDT",
        picture: "./imge/got.jpg",
        des: "Gọt bút chì",
        price: "30000"
    },
    {
        id: 11,
        cate: "DHDT",
        picture: "./imge/xoa1.jpg",
        des: "Bút xóa nước",
        price: "18000"
    },
    {
        id: 12,
        cate: "DHDT",
        picture: "./imge/xoa2.jpg",
        des: "Bút xóa băng",
        price: "22000"
    },

];
var a = document.getElementsByClassName("price");
for(let i =0; i < data.length; i++){
    if(data[i].cate == "DHDT"){
        addDiv(i)
    }
}
function addDiv(i){
    var add = document.createElement("div")
    Pdes = data[i].des
    Pimg = data[i].picture
    Pprice = data[i].price
    var inside = '<div class = "vo"><h3>'+Pdes+'</h3><img src='+Pimg+' alt="" width="200px" height="200px"><td><p><span>'+Pprice+'</span><sup>đ</sup></p></td><button>Thêm vào giỏ hàng</button></div>'
    add.innerHTML = inside
    var Price = document.querySelector(".right .prices")
    Price.append(add)
}

var btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnitem = event.target
        var product = btnitem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("H3").innerText
        var productPrice = product.querySelector("span").innerText
        addCart(productPrice, productImg, productName)
    })
})
function addCart(productPrice, productImg, productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var productT = document.querySelectorAll(".tiTle")
        if(productT[i].innerHTML == productName){
            alert("You have already bought this item")
            return 
        }
    }
    var content = '<tr><td><img src="'+productImg+'" alt="Vở" srcset="" width="100px" height="100px"><span class = "tiTle">'+productName+'</span></td><td><p><span class = "Price">'+productPrice+'</span><sup>đ</sup></p></td><td><input type="number" value="1" min="1" style = "width: 30px; outline: none;" ></td><td style="cursor: pointer;"><span class = "del">Xóa</span></td></tr>'  
    addtr.innerHTML = content
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
    cartTotal()
    deleteCart()
}
function cartTotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    for(var i =0; i < cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        var productPrice = cartItem[i].querySelector(".Price").innerHTML
        totalA = inputValue*productPrice
        totalC = totalC + totalA
    }
    var totalmoney = document.querySelector(".total span")
    totalmoney.innerHTML = totalC
    inputchange()
}
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i = 0; i < cartItem.length; i++){
        var deleteT = document.querySelectorAll(".del")
        deleteT[i].addEventListener("click",function(event){
            var cartDelete = event.target.parentElement.parentElement
            var itemD = cartDelete.remove()
            cartTotal()
        })
    }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for(var i =0; i < cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){
            cartTotal()
        })
    }
}
var click = document.querySelector(".home-menu h2")
click.addEventListener("click",function(){
    document.querySelector(".Cart").style.right = "0"
})
var close = document.querySelector(".Cart .close")
close.addEventListener("click",function(){
    document.querySelector(".Cart").style.right = "-100%"
})
function myFunction(){
    var input = document.getElementById("Input").value
    var filter = input.toUpperCase()
    var vo = document.getElementsByTagName("h3")
    for(let x = 0; x < vo.length; x++){
        var a = vo[x].innerText
        var i = vo[x].parentElement
        if(a.toUpperCase().indexOf(filter) > -1){
            i.style.display = "";
        }
        else{
            i.style.display = "none";
        }
    }
}
var cart = document.querySelector(".Cart")
