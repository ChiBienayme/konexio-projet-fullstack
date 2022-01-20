var countriesList = $("#countries");
{
  //***** SHOW DATA BUTTON *****//
  $("#btnShowData").click(search);

  //***** RESET BUTTON *****//
  $("#btnReset").click(function(){
    $("#results").empty();
  });
  
  function search() {

    var countryName = $("#country-name").val();

    var countries = $("input[name='pays']:checked").val();
    var capital = $("input[name='capitale']:checked").val();
    var region = $("input[name='région']:checked").val();

    var europe = $("option[value='Europe']:selected").val();
    var asia = $("option[value='Asia']:selected").val();
    var africa = $("option[value='Africa']:selected").val();

    // ***** SEARCH BY COUNTRIES *****//
    if (countries) {
      $.ajax({
        url: "https://restcountries.com/v3.1/name/" + countryName,

        success: function (data) {
          countriesList.empty();
          data.forEach((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.name.common}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                </li>`
              )
              .appendTo(countriesList);
          });
        },
      });
    }

    // ***** SEARCH BY CAPITALS *****//
    else if (capital) {
      $.ajax({
        url: "https://restcountries.com/v3.1/capital/" + countryName,

        success: function (data) {
          countriesList.empty();
          data.forEach((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.name.common}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                </li>`
              )
              .appendTo(countriesList);
          });
        },
      });
    }

    // ***** SEARCH BY REGIONS *****//
    else if (region) {
      $.ajax({
        url: "https://restcountries.com/v3.1/region/" + countryName,

        success: function (data) {
          countriesList.empty();
          data.forEach((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.name.common}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                </li>`
              )
              .appendTo(countriesList);
          });
        },
      });
    }

    //('<b> Countries: </b>' + JSON.stringify(data[0]))
    // ***** SEARCH BY EUROPE *****//
    else if (europe) {
      $.ajax({
        url: "https://restcountries.com/v3.1/region/europe",

        success: function (res) {
          countriesList.empty();

          res.data.map((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.region}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                </li>`
              )
              .appendTo(countriesList);
          });
        },
      });
    }

    // ***** SEARCH BY ASIA *****//
    else if (asia) {
      $.ajax({
        url: "https://restcountries.com/v3.1/region/asia",

        success: function (data) {
          countriesList.empty();

          data.forEach((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.name.common}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                </li>`
              )
              .appendTo(countriesList);
          });
          
        },
      });
    }

    // ***** SEARCH BY AFRICA *****//
    else if (africa) {
      $.ajax({
        url: "https://restcountries.com/v3.1/region/africa",

        success: function (data) {
          countriesList.empty();

          data.map((country) => {
            $("i")
              .html(
                `<li>
                  <p>Country : ${country.name.common}</p>
                  <p>Capital : ${country.capital}</p>
                  <p>Continent : ${country.continents}</p>
                </li>`
              )
              .appendTo(countriesList);
          });
        },
      });
    }
  }

}

