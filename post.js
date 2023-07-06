function Add() {
    var imglink = document.getElementById("post-img").value;
    var imgtext = document.getElementById("img-head").value;
    var imgdesc = document.getElementById("img-para").value;

    var arr = []
    var obj = {
        imglink: imglink,
        imgtext: imgtext,
        imgdesc: imgdesc
    }

    arr = JSON.parse(localStorage.getItem("arr")) ? JSON.parse(localStorage.getItem("arr")) : []
    arr.push(obj)
    localStorage.setItem("arr", JSON.stringify(arr))
    window.location.href = "./index.html"
}