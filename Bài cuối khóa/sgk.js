var data = [
    {
        id: 1,
        cate: "sgk",
        picture: "./imge/nv1.jpg",
        des: "Sách giáo khoa Ngữ Văn 9 tập 1",
        price: "50000"
    },
    {
        id: 2,
        cate: "sgk",
        picture: "./imge/nv2.jpg",
        des: "Sách giáo khoa Ngữ Văn 9 tập 2",
        price: "50000"
    },
    {
        id: 3,
        cate: "sgk",
        picture: "./imge/t1.jpg",
        des: "Sách giáo khoa Toán 9 tập 1",
        price: "50000"
    },
    {
        id: 4,
        cate: "sgk",
        picture: "./imge/t2.jpg",
        des: "Sách giáo khoa toán 9 tập 2",
        price: "50000"
    },
    {
        id: 5,
        cate: "sgk",
        picture: "./imge/a1.jpg",
        des: "Sách giáo khoa Anh 9 tập 1",
        price: "50000"
    },
    {
        id: 6,
        cate: "sgk",
        picture: "./imge/a2.jpg",
        des: "Sách giáo khoa Anh 9 tập 2",
        price: "50000"
    },
    {
        id: 7,
        cate: "sgk",
        picture: "./imge/s6.jpg",
        des: "Bộ sách giáo khoa lớp 6",
        price: "400000"
    },
    {
        id: 8,
        cate: "sgk",
        picture: "./imge/s7.jpg",
        des: "Bộ sách giáo khoa lớp 7",
        price: "400000"
    },
    {
        id: 9,
        cate: "sgk",
        picture: "./imge/s8.jpg",
        des: "Bộ sách giáo khoa lớp 8",
        price: "500000"
    },
    {
        id: 10,
        cate: "sgk",
        picture: "./imge/s9.jpg",
        des: "Bộ sách giáo khoa lớp 9",
        price: "500000"
    },
    {
        id: 11,
        cate: "sgk",
        picture: "./imge/nc1.jpg",
        des: "Sách Toán nâng cao thi chuyên vào lớp 10",
        price: "1000000"
    },
    {
        id: 12,
        cate: "sgk",
        picture: "./imge/nc2.jpg",
        des: "Sách Anh nâng cao thi chuyên vào lớp 10",
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

