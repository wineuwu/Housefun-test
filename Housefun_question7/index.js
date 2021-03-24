document.addEventListener('DOMContentLoaded',() => {
 //fetch API
const getData = async () => {
const response = await fetch('http://www.json-generator.com/api/json/get/bTLZcsoUGG?indent=2');
const data = await response.json();
creatInfoCard(data);
}
// createElement
function creatInfoCard(data){
  const cardData = data.map(item => {
    const {CoverPic, Address, CaseName, Patterns, RegArea, OriginalPrice, Price} = item
    return`
    <a href="" target="_blank" class="item">
      <div class="card-item">
        <div class="card-pic">
          <img src=${CoverPic}>
        </div>
        <div class="card-txt">
          <span class="location">${Address}</span>
          <h3>${CaseName}</h3>
          <div class="size">
            <div class="patterns">
              <span>${Patterns}</span>
            </div>
            <div class="regArea">
              <span>${RegArea}坪</span>
            </div>
          </div>
          <div class="price">
            <div class="orginPrice">
              <span>${OriginalPrice} 萬</span>
            </div>
            <div class="unitPrice">
              <span><em>${Price}</em>萬</span>
            </div>  
          </div>
        </div>
      </div>
    </a>  
    `;
  }).join('') ;
  document.querySelector('#card-list').insertAdjacentHTML('afterbegin',cardData);

  // slide Card component
  const prevBtn = document.querySelector('.left-arrow');
  const nextBtn= document.querySelector('.right-arrow');
  const cardList = document.querySelector('.all-card-list');
  const cardItem = cardList.querySelectorAll('.item');
  let counter = 0;
  
  const lenght = cardItem[0].clientWidth;
  cardList.style.transform = 'translateX(' + (-lenght*counter)+'px)' 

  prevBtn.addEventListener('click',() => {
    if(counter > 0){
      cardList.style.transition="transform 0.4s ease-in-out";
      counter--;
      //console.log(counter);
      cardList.style.transform = 'translateX(' + (-lenght*counter)+'px)' 
    }

  })
  
  nextBtn.addEventListener('click',() => {
    if(counter < 4){
      cardList.style.transition="transform 0.4s ease-in-out";
      counter++;
      //console.log(counter);
      cardList.style.transform = 'translateX(' + (-lenght*counter)+'px)' 
    }
  })
}
getData();
})