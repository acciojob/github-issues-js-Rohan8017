//your code here
const OrderListElement=document.querySelector('.pagination');
const previousPage=document.getElementById('load_prev');
const nextPage=document.getElementById('load_next');
const pageHeading=document.getElementById('heading');
let pageSize=5;
let currentPage=1;
let resultArr=[];
window.onload=()=>renderPage();
function renderPage(){
  fetch('https://api.github.com/repositories/1296269/issues?page=${pageNumberHere}&per_page=5.')
    .then((data)=>data.json())
    .then((result)=>{
      console.log(result);
      resultArr=result;
      console.log(resultArr)
      resultArr.filter((ele,index)=>{
        let start=(currentPage-1) * pageSize;
        let end=currentPage * pageSize;
        if(index >= start && index < end) return true;
      }).forEach((data)=>{
        let li=document.createElement('li');
        console.log(data);
        li.innerText=data.body;
        OrderListElement.appendChild(li);
      })
    })
}
nextPage.addEventListener('click',()=>{
  if((currentPage * pageSize) < resultArr.length ){
    currentPage++;
    pageHeading.innerText=`Page number ${currentPage}`;
    OrderListElement.innerHTML="";
    renderPage();
  }
})
previousPage.addEventListener('click',()=>{
  if(currentPage > 1){
    currentPage--;
    pageHeading.innerText=`Page number ${currentPage}`;
    OrderListElement.innerHTML="";
    renderPage();
  }
})