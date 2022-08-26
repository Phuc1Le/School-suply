var data = [
    {
        id: 1,
        cate: "sgk",
        picture: "./imge/vo.jpg",
        des: "Sách giáo khoa Ngữ Văn tập 1",
        price: "50000"
    },
    {
        id: 2,
        cate: "sgk",
        picture: "./imge/butchi.jpg",
        des: "Sách giáo khoa Ngữ Văn 9 tập 2",
        price: "50000"
    },
    {
        id: 3,
        cate: "sgk",
        picture: "./imge/butbi.jpg",
        des: "Sách giáo khoa Toán 9 tập 1",
        price: "50000"
    },
    {
        id: 4,
        cate: "sgk",
        picture: "./imge/vo2.jpg",
        des: "Sách giáo khoa toán 9 tập 2",
        price: "50000"
    },
    {
        id: 5,
        cate: "sgk",
        picture: "./imge/thuoc.jpg",
        des: "Sách giáo khoa Anh 9 tập 1",
        price: "50000"
    },
    {
        id: 6,
        cate: "sgk",
        picture: "./imge/compa.jpg",
        des: "Sách giáo khoa Anh 9 tập 2",
        price: "50000"
    },
    {
        id: 7,
        cate: "sgk",
        picture: "./imge/eke.jpg",
        des: "Bộ sách giáo khoa lớp 6",
        price: "400000"
    },
    {
        id: 8,
        cate: "sgk",
        picture: "./imge/ktra.jpg",
        des: "Bộ sách giáo khoa lớp 7",
        price: "400000"
    },
    {
        id: 9,
        cate: "sgk",
        picture: "./imge/tay.jpg",
        des: "Bộ sách giáo khoa lớp 8",
        price: "500000"
    },
    {
        id: 10,
        cate: "sgk",
        picture: "./imge/got.jpg",
        des: "Bộ sách giáo khoa lớp 9",
        price: "500000"
    },
    {
        id: 11,
        cate: "sgk",
        picture: "./imge/xoa1.jpg",
        des: "Bộ sách Toán nâng cao thi chuyên vào lớp 10",
        price: "1000000"
    },
    {
        id: 12,
        cate: "sgk",
        picture: "./imge/xoa2.jpg",
        des: "Bộ sách Anh, Ngữ Văn nâng cao thi chuyên vào lớp 10",
        price: "1800000"
    },

];
var a = document.getElementsByClassName("price");
for(let i =0; i < data.length; i++){
    if(data[i].cate == "sgk"){
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
