// javascript console API
    // console.log("hello world", 4 + 4 ," my name is vkr");
    // alert("me");
    // document.write("this is document write");
    // console.warn("this is warnind");
    // console.error("this is an error")
    
// var number1 = 34;
// var number2 = 36;
// // console.log(number1+number2);

// var marks={
//     ravi:34,
//     jj : 55,
//     vk : 45
// }
// // console.log(marks);
// var a=true;
// var b= false;
// // console.log(a,b)

// var arr=[1,2,3,4,5];
// var a=100;
// var b=10;
// console.log("the value of a+b is",a+b);
// console.log("the value of a-b is",a-b);
// console.log("the value of a*b is",a*b);
// console.log("the value of a/b is",a/b);
// var c=b;

// c+=2;
// console.log(c)
function avg(a,b)
{
    return(a+b)/2;
}
c2=avg(14,16);
c1=avg(4,6);
// console.log(c1,c2);
var arr=[1,2,3,4,5,6,7];
arr.forEach(function(element){
    // console.log(element);
})
let myarr =["fan","camera",35,null,true];
// array methods
// cosnsole.log(myarr.length);
// myarr.pop();
// myarr.push("vineet");
myarr.shift();
myarr.unshift("brijesh");
// console.log(myarr);
tn = document.getElementsByTagName('div');
console.log(tn)
createdElement=document.createElement('p');
createdElement.innerText = "this is a created para";
tn[0].appendChild(createdElement);
createdElement2=document.createElement('b');
createdElement2.innerText="this is a bold";
tn[0].replaceChild(createdElement2,createdElement);
sel = document.querySelector('.container')
console.log(sel)
sel = document.querySelectorAll('.container')
console.log(sel)

function clicked(){
    console.log('the button was clicked')
}

window.onload=function(){
    console.log('the document was loaded')

}
firstcontainer.addEventListener('click',function(){
console.log("clicked on container")
})
firstcontainer.addEventListener('mouseover', function(){
    console.log('mouse on contsiner')
})
let PrevHTML = document.querySelectorAll('.container')[0].innerHTML;
firstcontainer.addEventListener('mouseup', function(){
    document.querySelectorAll('.container')[0].innerHTML=PrevHTML;
    console.log('mouse up when clicked on container')
})
firstcontainer.addEventListener('mousedown', function(){
    document.querySelectorAll('.container')[0].innerHTML="<b> we have clicked</b>";
    console.log('mouse down when clicked on container')
})

logkaro = ()=>{
    console.log("i am your log")
}
setTimeout(logkaro,2000);

a=34;
console.log(`this is my ${a}`)