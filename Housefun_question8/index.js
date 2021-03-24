document.addEventListener('DOMContentLoaded',() => {
  //fetch API

 const getData = async () => {
 const response = await fetch('https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json');
 const data = await response.json();
//  console.log(data);
 createSuggestionlist(data);
 }
 //create  SuggestionList
 function createSuggestionlist(data){
  // const listData = data.map(item => {
    
  //   const districts = item.districts
  //   const city = item.name; 
  //    const li =districts.map(districtItem =>{
  //      return`
  //      <li class="suggestion-item">${city}${districtItem.name}</li> 
  //      `;
  //    }).join("");
  //    document.querySelector('.suggestion-content').insertAdjacentHTML('afterbegin',li);
  // });

  //filter city 

  const searchInput = document.querySelector("#search-input");      
  const locations = data.map(({name})=>name);
  const arrayDistrict = data.map(({districts})=>districts);
 
  searchInput.addEventListener("input",() => {
    const input = searchInput.value;
    const suggestions = locations.filter(function (city) {
      console.log(city);
      return city.startsWith(input);
    })
    console.log('suggest:',suggestions);
      data.forEach(function(suggested) {
      console.log(suggested +"");
      const li = document.createElement('li');
    })

  });
 }
getData();
});

