/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Emilie Gorder',
    photo: 'images/profile.png',
    favoriteFoods: [
        'macaroni and cheese',
        'pulled pork',
        'sliders',
        'salmon',
        'ravaoli',
        'ritz chicken',
        'garlic bread'
    ],
    hobbies: [
        'reading',
        'swing dancing',
        'fencing',
        'singing',
        'crochet',
        'sewing',
        'video games'
    ],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: ['Rexburg, Idaho', 'Syracuse, Utah'],
    lived: ['7 years', '15 years'],
})

/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});
/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(location =>{
    
})

