var data = [
    {
        id: 1,
        cate: "toy",
        picture: "./imge/bt.jpg",
        des: "Bài tây",
        price: "20000"
    },
    {
        id: 2,
        cate: "toy",
        picture: "./imge/bu.jpg",
        des: "Bài UNO",
        price: "30000"
    },
    {
        id: 3,
        cate: "toy",
        picture: "./imge/bm.jpg",
        des: "Bài Exploding kittens",
        price: "30000"
    },
    {
        id: 4,
        cate: "toy",
        picture: "./imge/cv.jpg",
        des: "Cờ vua",
        price: "100000"
    },
    {
        id: 5,
        cate: "toy",
        picture: "./imge/ct.jpg",
        des: "Cờ tướng",
        price: "100000"
    },
    {
        id: 6,
        cate: "toy",
        picture: "./imge/cc.jpg",
        des: "Cờ cá ngựa",
        price: "30000"
    },
    {
        id: 7,
        cate: "toy",
        picture: "./imge/tb.jpg",
        des: "Thú bông",
        price: "40000"
    },
    {
        id: 8,
        cate: "toy",
        picture: "./imge/ga.jpg",
        des: "Gà",
        price: "20000"
    },
    {
        id: 9,
        cate: "toy",
        picture: "./imge/ro.jpg",
        des: "Robot",
        price: "200000"
    },
    {
        id: 10,
        cate: "toy",
        picture: "./imge/xe.jpg",
        des: "Bộ 5 xe mô hình",
        price: "400000"
    },
    {
        id: 11,
        cate: "toy",
        picture: "./imge/ru.jpg",
        des: "Rubik",
        price: "18000"
    },
    {
        id: 12,
        cate: "toy",
        picture: "./imge/ki.png",
        des: "Kiếm ánh sáng",
        price: "22000"
    },
];
var a = document.getElementsByClassName("price");
for(let i =0; i < data.length; i++){
    addDiv(i)
}
function addDiv(i){
    var add = document.createElement("div")
    Pdes = data[i].des
    Pimg = data[i].picture
    Pprice = data[i].price
    var inside = '<div class = "vo"><h3>'+Pdes+'</h3><img src='+Pimg+' alt="" width="200px" height="200px"><td><p><span>'+Pprice+'</span><sup>đ</sup><span>/item</span></p></td><button>Thêm vào giỏ hàng</button></div>'
    add.innerHTML = inside
    var Price = document.querySelector(".right .prices")
    Price.append(add)
}

