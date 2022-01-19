// // Ajax
// function getAllCountries () { 
//     $("#btnShowData").click(function () {
        
//         $.ajax({
//             url:"https://restcountries.com/v3.1/name/france",
//             success: function (data) {
    
//                 data.forEach((country) => {
                
//                 $("#country").html(`${country.name.common}`);
//                 $("#capital").html(`${country.capital}`);
//                 $("#continents").html(`${country.continents}`);
//                 $("#currencies").html(`${country.currencies}`);
    
//                 }) 
//             }
//             })
        
//       });
// }

// Show names of all Countries
$("#btnShowData").click(function getAllCountries() {
    $.ajax({
      url:"https://restcountries.com/v3.1/all",
      success: function (data) {
        
        data.forEach((country) => {
          
          $("i").append(
         `<p> ${country.name.common}</p>`
         )

        })
      }
    });
});
