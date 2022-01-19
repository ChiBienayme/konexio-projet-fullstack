// Show names of all Countries
// $("#btnShowData").click(function getAllCountries() {
//     $.ajax({
//       url:"https://restcountries.com/v3.1/all",
//       success: function (data) {
        
//         data.forEach((country) => {
          
//           $("i").append(`<p> ${country.name.common}</p>` )

//         })
//       }
//     });
// });
async function getCountries() {
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await res.json();
  
    return data;
  }  

// Take infos of country
async function startProgram() {
    const countries = await getCountries();
  
    const countriesName = countries.map(function (country) {
      return `<li>
      <p>Country :  ${country.name.common}</p>
      <p>Capital : ${country.capital}</p>
      <p>Continent : ${country.continents}</p>
      <p>Currency : ${country.currencies}</p>
      </li>`;
      
      ;
    });
  
    const list = document.querySelector("#countries-list");
    list.innerHTML = countriesName.join("");
  }
  startProgram();
  
 
  // Click
  const button = document.querySelector("#btnShowData");
  
  button.addEventListener("click", () => {
    startSearchProgram();
  });
  
    //  Search by name's country
  async function getCountriesByName() {
    const userInput = document.querySelector("input").value;
    const res = await fetch(`https://restcountries.com/v3.1/${userInput}`);
    const data = await res.json();
  
    return data;
  }
  
  //  Search by capital
  async function getCountriesByCapital() {
    const userInput = document.querySelector("input").value;
    const res = await fetch(
      `https://restcountries.com/v3.1/capital/${userInput}`
    );
    const data = await res.json();
  
    return data;
  }
  
  //   Reset
  async function startSearchProgram() {
    const country = await getCountriesByName();
  
    const list = document.querySelector("#countries-list");
    list.innerHTML = `<li>
        <p>Country : ${country.name.common.toUpperCase()}</p>
        <p>Capital : ${country.capital}</p>
        <p>Continent : ${country.continents}</p>
        <p>Currency : ${country.currencies}</p>
        </li>`;
  
      const capital = await getCountriesByCapital();
    };
  
    
  





