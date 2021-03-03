document.addEventListener('DOMContentLoaded',() => {
  //fetch API
 const getData = async () => {
 const response = await fetch('https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json');
 const data = await response.json();
 createSuggestionlist(data);
 }
 function createSuggestionlist(data){
  //get all element
  const searchBox = document.querySelector(".search");
  const InputBox = searchBox.querySelector("#search-input");
  const suggestBox  = document.querySelector(".suggestion-content"); 
    InputBox.addEventListener("keyup",(e) => {
      const inputData = InputBox.value;
      suggestBox.innerHTML = '';
      
      const listData = data.map(item => {
        const districts = item.districts
        const city = item.name; 
        const districtData =districts.map(districtItem =>{
          const cityArray = city+" "+districtItem.name
          return cityArray
          // console.log(emptyArray);
          })

          //filter keywords
          const suggestions = districtData.filter(city =>{
            return city.startsWith(inputData);
          })
           //console.log(suggestions);
          suggestions.forEach(function(districtItem) {
            const li = document.createElement('li');
            li.innerHTML = districtItem;
            suggestBox.appendChild(li);
          });
          
          if (inputData===""){
            suggestBox.innerHTML = '';
          }
       });
    })   
 }
 getData();
});
