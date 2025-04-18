
let x;
let y;
let z;


//let textbox1 = Number(textbox)
//let button = document.getElementById('generateNumber');
function generateNumber() {
    document.getElementById('generateNumber');
    x = Math.floor(Math.random() * 7) + 1;
    y = Math.floor(Math.random() * 5) + 1;
    z = Math.floor(Math.random() * 8) + 1;
    document.getElementById('textbox').innerHTML = x;
    document.getElementById('text').innerHTML = z
    document.getElementById('textline').innerHTML = y
}
function resetbutton() {
    let counter = null
    document.getElementById('textbox').innerHTML = counter;
    document.getElementById('text').innerHTML = counter;
    document.getElementById('textline').innerHTML = counter;
}

let myDate = new Date()

function createDate(){
   document.getElementById('check_date').innerHTML = `last updated  :${ myDate}`;
   myDate.getFullMonth
    
    document.getElementById('check_date').style.opacity = 1
    document.getElementById('check_date').style.color = ' rgb(24, 122, 233)'
    document.getElementById('check_date').style.fontSize= '35'
    return myDate
 
}


document.addEventListener('DOMContentLoaded',function(){
    setTimeout(() => {
        let date  = new Date
        document.body.onload=()=>{
            date.getSeconds()
           alert(date)
       } 
    }, 5000);
   
})

createDate()

let product ={
    name : 'number gen',
    likes : 155,
    rating : 4.5,
}
let productJson = JSON.stringify(product)
console.log(productJson)
/* function likesOfPage(productJson){
     document.getElementById('likes').innerHTML = productJson;

    return productJson
}
likesOfPage(productJson)
 */




