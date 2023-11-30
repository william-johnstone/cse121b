/* W05: Programming Tasks */

/* #3 Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* #4 async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        temple.createElement('article');
        temple.createElement('h3');
        temple.setAttribute('h3', temple.templeName);
        temple.createElement('img');
        temple.setAttribute('src', temple.imageUrl);
        temple.setAttribute('alt', temple.location);

        temple.appendChild('h3');
        temple.appendChild('img');

        templesElement.appendChild(article);
    });
};

/* #5 async getTemples Function using fetch()*/
const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeData = await response.json();
        doStuff(templeData);
    }
    
    displayTemples(templeList);
}

/* #6 reset Function */
const reset = () => {
    templesElement.innerHTML = '';
  };

/* #7 sortBy Function */
const sortBy = (temples) => {
    // Call the reset function to clear the output
    reset();
    const filter = document.getElementById('sortBy').value;

    // Use a switch statement
    switch (filter) {
      case 'utah':
        displayTemples(temples.filter(temple => temple.location.includes('Utah')));
        break;
      case 'nonutah':
        displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
        break;
      case 'older':
        const olderTemples = temples.filter(temple => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
        displayTemples(olderTemples);
        break;
      case 'all':
      default:
        displayTemples(temples);
        break;
    }
  };

/* #8 Event Listener */
document.querySelector("#sortBy").addEventListener('change', () => {
    sortBy(templeList);
  });

  //getTemples();