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