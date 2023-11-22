/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "William Johnstone"
    ,photo: 'images/William_20230418_reduced.jpg'
    ,favoriteFoods: [
        'Hamburger', 
        'Pizza', 
        'Salmon', 
        'French Toast'
    ]
    ,hobbies: [
        'Reading', 
        'Video Games', 
        'Movies', 
        'Sports'
    ]
    ,placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'San Jose',
    length: '11 years'
});
myProfile.placesLived.push({
    place: 'Tracy',
    length: '5 years'
});
myProfile.placesLived.push({
    place: 'Provo',
    length: '4 years'
});
myProfile.placesLived.push({
    place: 'Spokane',
    length: '2 years'
});
myProfile.placesLived.push({
    place: 'Orem',
    length: '10 years'
});
myProfile.placesLived.push({
    place: 'Lehi',
    length: '9 years'
});
myProfile.placesLived.push({
    place: 'Blue Springs',
    length: '3 years'
});

/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").textContent = myProfile.name;

/* Photo with attributes */
document.getElementById("photo").src = myProfile.photo;
document.getElementById("photo").alt = myProfile.name;
/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let newLi = document.createElement('li');
    newLi.textContent = food;
    document.getElementById("favorite-foods").appendChild(newLi);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let newLi2 = document.createElement('li');
    newLi2.textContent = hobby;
    document.getElementById("hobbies").appendChild(newLi2);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let newDt = document.createElement("dt");
    newDt.textContent = place.place;
    let newDd = document.createElement("dd");
    newDd.textContent = place.length;

    document.getElementById("places-lived").appendChild(newDt);
    document.getElementById("places-lived").appendChild(newDd);
})
