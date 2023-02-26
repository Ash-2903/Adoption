// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (() => {
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     const forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.from(forms).forEach(form => {
//       form.addEventListener('submit', event => {
//         if (!form.checkValidity()) {
//           event.preventDefault()
//           event.stopPropagation()
//         }
  
//         form.classList.add('was-validated')
//       }, false)
//     })
//   })()


// $(document).click(function () {
//     var AnimalName = this.id;
//     $('h2').text="You Chose "+AnimalName;
//     console.log(this.id);
// })


var array = [];

window.onload = function() {

    $(".btn").click(function() {
        localStorage.setItem("animalName", $(this).attr('id'));
    });
}


var name = localStorage.getItem('name');









