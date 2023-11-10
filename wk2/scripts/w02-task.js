/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'William Johnstone';
const d = new Date()
let currentYear = d.getFullYear();
let profilePicture = 'images/William_20230418_reduced.jpg'

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`)

/* Step 5 - Array */
const foods = ["French Toast", "BLT", "Hamburger"];
foodElement.innerHTML = foods;
let foodplus = 'Chicken Sandwhich';
foods.push(foodplus);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${foods}`;