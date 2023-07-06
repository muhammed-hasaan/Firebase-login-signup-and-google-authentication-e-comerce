// product by api
// product by api
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        console.log(json)
        for (var i = 0; i < json.length; i++) {
            // json.map((item ) =>{ 
            document.getElementById('container2').innerHTML +=
                `
                    <center>
                    <div class="containers" style= " border-radius:20px; box-shadow:2px 2px 36px rgba(0.5,0.5,0.5,0.5); width:300px; height:370px; "  class="card" ">
  <img style= "border-radius:15px; " id="images" height="200px" src="${json[i].image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 id="titles" style= "font-size:18px;"  class="card-title">${json[i].title}</h5>
    <p id="prices"  class="card-text">${json[i].price}</p>
    <a style="background:linear-Gradient( to bottom right,#f88f16,#f88f16 ,red, red); border:none;" href="#" class="btn btn-primary"  onclick='ApiDetail("${json[i].image}" , "${json[i].title}" , "${json[i].price}")' >Go Detail</a>
  </div>
</div>
    </center>
                    
                    `
        }
    })

function ApiDetail(image, title, price) {
    // var arrr = [] 
    var obj2 = {
        image: image,
        title: title,
        price: price,
    }
    // arrr =  JSON.parse(localStorage.getItem("arrr"))?JSON.parse(localStorage.getItem("arrr")):[]
    // arrr.push(obj2)
    localStorage.setItem("obj2", JSON.stringify(obj2))
    window.location.href = './detail.html'
}

var input = document.getElementById('inp1');
var button = document.getElementById('btn1');
// var h5 = document.getElementById('titles');
// var classes = document.getElementsByClassName('containers')
var product = JSON.parse(localStorage.getItem("arr"))
button.addEventListener('click', () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                //  var num = json.reverse
                if (json[i].title.match(input.value)) {
                    // json.filter(element => {element.title.match(input.value)


                    var num = document.getElementById('container2');
                    //  num.innerHTML = "";
                    num.innerHTML =
                        `
                        <center>
                            <div  style= " border-radius:20px; box-shadow:2px 2px 36px rgba(0.5,0.5,0.5,0.5); width:300px; height:370px; ">
                              <img style="border-radius:20px; " id="images" height="200px" src="${json[i].image}" class="card-img-top" alt="...">
                              <div class="card-body">
                                <h5 id="titl style= "font-size:18px;"  class="card-title">${json[i].title}</h5>
                                <p id="prices"  class="card-text">${json[i].price}</p>
                                <a style="background:linear-Gradient( to bottom right,#f88f16,#f88f16 ,red, red); border:none;" href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                                </div>
                                </center>
                                
                                `

                }
                console.log(json[i])
            }
        })
})



// product by api
// product by api







// product by input
// product by input
var product = JSON.parse(localStorage.getItem("arr"))

product.map((math, index) => {
    document.getElementById("container2").innerHTML += `    
        
        <center>
                            <div  style= "border-radius:20px; box-shadow:2px 2px 36px rgba(0.5,0.5,0.5,0.5); width:300px; height:370px; "  class="card" style="width: 18rem;">
                                <img style="border-radius:20px;" id="images" height="200px" src="${math.imglink}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 id="titl style= "font-size:18px;"  class="card-title">${math.imgtext}</h5>
        <p id="prices"  class="card-text">${math.imgdesc}</p>
        <a style = "background:linear-Gradient( to bottom right,#f88f16,#f88f16 ,red, red); border:none;" onclick = "detail(${index})" style="background:linear-Gradient( to bottom right,#f88f16,#f88f16 ,red, red); border:none;" class="btn btn-primary"> Go Detail</a>
        </div>
    </div>
        </center>
            `
})
function detail(math) {
    var imglink = document.getElementById("post-img");
    var imgtext = document.getElementById("img-head");
    var imgdesc = document.getElementById("img-para");
    localStorage.setItem("imglink", product[math].imglink)
    localStorage.setItem("imgtext", product[math].imgtext)
    localStorage.setItem("imgdesc", product[math].imgdesc)
    window.location.href = "./detail2.html"
}
      // product by input
      // product by input











      //navbar
      //navbar
      $('.expandHome').mouseover(function() {
        $('.sub-home').css({
              'display': 'block'
          }); 
      });
      $('.subnavbtn').mouseover(function() {
        $('.sub-home').css({
              'display': 'none'
          }); 
      });
      
      $('#trapezoid').mouseleave(function() {
        $('#trapezoid').css({
              'margin-top': '13px'
          }); 
          $('.sub-home').css({
              'display': 'none'
          }); 
      }).mouseenter(function() {
        $('#trapezoid').css({
              'margin-top': '50px'
          }); 
      });


var use  =JSON.parse(localStorage.getItem("arr"));
use.map((text)=>{
    document.getElementById("users").innerHTML += text.name
})
      
      //navbar
      //navbar