$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});
$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
         theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

});

// THIS IS THE API PART
// THIS IS THE API YOU COULD CHECK THE DOCUMENTATION "https://rickandmortyapi.com/""

let plate_container = document.getElementById("plates");

// function createNode(element)
// {
//   return document.createElement(element);
// }
//
// function append(parent, el)
// {
//     return parent.appendChild(el);
// }
// function (plates-container)
//   {
//       let div = createNode("div");
//       div.setAttribute("class", "col-sm-2");
//       div.setAttribute("id", "plates");
//       append(plates-container, div);
//   };



let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://rickandmortyapi.com/api/character/?page=2");
myRequest.onload = function ()
{
    let myData = JSON.parse(myRequest.responseText);
    // console.log(myData);
    plate_container.innerHTML = myData;
};
myRequest.send();

// let row = document.getElementById("plates");
// let url = "https://rickandmortyapi.com/api/character/";
//
// fetch(url)
// .then ((resp)=> resp.json())
// .then(function (data)
// {
//   let plates-container ;
//   return authors.map(function (plates-container)
//   {
//       let div = createNode("div");
//       div.setAttribute("class", "col-sm-2");
//       div.setAttribute("id", "plates");
//       append(plates-container, div);
//   });
//   function createNode(element)
//   {
//     return document.createElement(element);
//   }
//
//   function append(parent, el)
//   {
//       return parent.appendChild(el);
//   }
// })
// .catch(function (error)
// {
//   console.log(error);
// });
