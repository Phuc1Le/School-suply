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