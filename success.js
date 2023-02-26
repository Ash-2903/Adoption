var animalName = localStorage.getItem('animalName');

$(".customText").text("The adoption procedure was successful. Please visit the animal shelter with required documents. Visiting hours are from 9 AM to 6 PM. You can interact with your pet "+animalName+ " and take them home 3 days later");

$(".petName").text("Pet Chosen : " +animalName);

var imgname = animalName.toLowerCase();

document.querySelector("img").setAttribute("src","animal-images/"+imgname+".jpg");