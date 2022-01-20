var countriesList = $("#countries");
{
  //***** SHOW DATA BUTTON *****//
  $("#btnShowData").click(search);

  //***** RESET BUTTON *****//
  $("#btnReset").click(function(){
    $("#results").empty();
  });

   
  //***** SEARCH *****//
  function search() {

    var searchBar = $("#search").val();

    var countries = $("input[value='pays']:checked").val();
    var capital = $("input[value='capitale']:checked").val();
    var region = $("input[value='region']:checked").val();

    var europe = $("option[value='Europe']:selected").val();
    var asia = $("option[value='Asia']:selected").val();
    var africa = $("option[value='Africa']:selected").val();

    // ***** SEARCH BY COUNTRIES *****//
    if (countries) {
      $.ajax({
        url: "https://restcountries.com/v3.1/name/" + searchBar,

        success: function (data) {
          countriesList.empty();
          data.forEach((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.name.common}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                  <p>Subregion : ${country.subregion}</p>
                </li>`
              )
          });
        },
      });
    }

    // ***** SEARCH BY CAPITALS *****//
    else if (capital) {
      $.ajax({
        url: "https://restcountries.com/v3.1/capital/" + searchBar,

        success: function (data) {
          countriesList.empty();
          data.forEach((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.name.common}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                  <p>Subregion : ${country.subregion}</p>
                </li>`
              )
  
          });
        },
      });
    }

    // ***** SEARCH BY REGION *****//
    else if (region) {
      $.ajax({
        url: "https://restcountries.com/v3.1/region/" + searchBar,

        success: function (data) {
          countriesList.empty();
          data.forEach((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.name.common}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                  <p>Subregion : ${country.subregion}</p>
                </li>`
              )
  
          });
        },
      });
    }

    // ***** SEARCH BY EUROPE *****//
    else if (europe) {
      $.ajax({
        url: "https://restcountries.com/v3.1/subregion/europe",

        success: function (data) {
          
          let searchCountryByRegion;

          searchCountryByRegion = data.map((country) => {

           return `<li>
                    <p>Country : ${country.name.common}</p>
                    <p>Capital : ${country.capital}</p>
                    <p>Subregion : ${country.subregion}</p>
                  </li>`;  
          });

          $("i").html(searchCountryByRegion)
        },  
      });     
    }

    // ***** SEARCH BY ASIA *****//
    else if (asia) {
      $.ajax({
        url: "https://restcountries.com/v3.1/subregion/asia",

        success: function (data) {
          
          let searchCountryByRegion;

          searchCountryByRegion = data.map((country) => {

           return `<li>
                    <p>Country : ${country.name.common}</p>
                    <p>Capital : ${country.capital}</p>
                    <p>Subregion : ${country.subregion}</p>
                  </li>`;  
          });

          $("i").html(searchCountryByRegion)
        },  
      });
    }

    // ***** SEARCH BY AFRICA *****//
    else if (africa) {
      $.ajax({
        url: "https://restcountries.com/v3.1/subregion/africa",

        success: function (data) {
          
          let searchCountryByRegion;

          searchCountryByRegion = data.map((country) => {

           return `<li>
                    <p>Country : ${country.name.common}</p>
                    <p>Capital : ${country.capital}</p>
                    <p>Subregion : ${country.subregion}</p>
                  </li>`;  
          });

          $("i").html(searchCountryByRegion)
        },  
      });
    }
  }

}

  // ***** LOADING BUTTON *****//
 


