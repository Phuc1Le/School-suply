var click = document.querySelector(".header .top .menu-bar")
click.addEventListener("mouseover",function(){
    document.querySelector(".header .menu").style.right = "350px"
})
click.addEventListener("click",function(){
    document.querySelector(".header .menu").style.right = "-100%"
})
var data2 = [
    {
        id: 1,
        picture: "./imge/vo.jpg",
        des: "Box 5 vở ô ly 48 trang",
        price: "40000",
        sprice: "35000",
    },
    {
        id: 2,
        picture: "./imge/vo2.jpg",
        des: "Box 5 vở ô ly 100 trang",
        price: "90000",
        sprice: "80000"
    },
    {
        id: 3,
        picture: "./imge/butbi.jpg",
        des: "Box 10 bút bi",
        price: "25000",
        sprice: "20000"
    },
    {
        id: 4,
        picture: "./imge/s9.jpg",
        des: "Bộ sách giáo khoa lớp 9",
        price: "500000",
        sprice: "480000"
    },
    {
        id: 5,
        picture: "./imge/ct.jpg",
        des: "Cờ tướng",
        price: "100000",
        sprice: "90000"
    },
    {
        id: 6,
        picture: "./imge/a2.jpg",
        des: "Sách giáo khoa Anh 9 tập 2",
        price: "50000",
        sprice: "45000"
    },
    {
        id: 7,
        picture: "./imge/cv.jpg",
        des: "Cờ vua",
        price: "100000",
        sprice: "90000"
    },
    {
        id: 8,
        picture: "./imge/ktra.jpg",
        des: "Bộ 25 giấy kiểm tra",
        price: "60000",
        sprice: "55000"
    },
];
var data = [
    {
        id: 1,
        picture: "./imge/vo.jpg",
        des: "Box 5 vở ô ly 48 trang",
        price: "40000"
    },
    {
        id: 2,
        picture: "./imge/vo2.jpg",
        des: "Box 5 vở ô ly 100 trang",
        price: "90000"
    },
    {
        id: 3,
        picture: "./imge/ktra.jpg",
        des: "Bộ 25 giấy kiểm tra",
        price: "60000"
    },
    {
        id: 4,
        picture: "./imge/s9.jpg",
        des: "Bộ sách giáo khoa lớp 9",
        price: "500000"
    },
    {
        id: 5,
        picture: "./imge/nc1.jpg",
        des: "Bộ sách Toán nâng cao thi chuyên vào lớp 10",
        price: "1000000"
    },
    {
        id: 6,
        picture: "./imge/bt.jpg",
        des: "Bài tây",
        price: "20000"
    },
    {
        id: 7,
        picture: "./imge/cv.jpg",
        des: "Cờ vua",
        price: "100000"
    },
    {
        id: 8,
        picture: "./imge/ru.jpg",
        des: "Rubik",
        price: "18000"
    },
];
for(let i =0; i < data.length; i++){
    addDiv(i)
}
function addDiv(i){
    var add = document.createElement("div")
    Pdes = data[i].des
    Pimg = data[i].picture
    Pprice = data[i].price
    var inside = '<div class = "bs"><h3>'+Pdes+'</h3><img src='+Pimg+' alt="" width="200px" height="200px"><td><p><span>'+Pprice+'</span><sup>đ</sup></p></td><button>Thêm vào giỏ hàng</button></div>'
    add.innerHTML = inside
    var Price = document.querySelector(".best .item")
    Price.append(add)
}
//<div class = "bs">
//<h3>XXX</h3>
//<img src='' alt="" width="200px" height="200px">
//<p><span>XXX</span><sup>đ</sup><div style="width: 40px; margin-left:0px; margin-top:-25px;height: 2px;background-color: black;"></div><span>XXX</span><sup>đ</sup></p>
//</img><button>Thêm vào giỏ hàng</button></div>
//</div>
for(let i =0; i < data2.length; i++){
    addDiv2(i)
}
function addDiv2(i){
    var add = document.createElement("div")
    Pdes = data2[i].des
    Pimg = data2[i].picture
    Pprice = data2[i].price
    Sprice = data2[i].sprice
    var inside = '<div class = "bs" style = "height: 370px"><h3>'+Pdes+'</h3><img src='+Pimg+' alt="" width="200px" height="200px"><div><p><span>'+Pprice+'</span><sup>đ</sup><hr style= "width: 60px; margin-top: -25px;"></p><b><span>'+Sprice+'</span><sup>đ</sup></b></div><button style = "margin-top: 5px;">Thêm vào giỏ hàng</button></div>'
    add.innerHTML = inside
    var Price = document.querySelector(".sale .item2")
    Price.append(add)
}