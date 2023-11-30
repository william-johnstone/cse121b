/* W05: Programming Tasks */

/* #3 Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* #4 async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        let templeArticle = document.createElement('article');
        let templeNameElement = document.createElement('h3');
        templeNameElement.textContent = temple.templeName;
        
        let templeImageElement = document.createElement('img');
        templeImageElement.src = temple.imageUrl;
        templeImageElement.alt = temple.location;

        templeArticle.appendChild(templeNameElement);
        templeArticle.appendChild(templeImageElement);

        templesElement.appendChild(templeArticle);
    });
};

/* #5 async getTemples Function using fetch()*/
let getTemples = async() => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    //check response
    if (!response.ok) {
      throw new Error('Failed to fetch temple data');
    }
    let templeData = await response.json();
    templeList = templeData;

    displayTemples(templeList);
  }  catch (error) {
    console.log('An error occurred:', error);
  }
  
};

/* #6 reset Function */
const reset = () => {
  const templesElement = document.getElementById('temples');
  templesElement.innerHTML = '';
  };

/* #7 sortBy Function */
let sortBy = (temples) => {
    // Call the reset function to clear the output
    reset();
    const filter = document.getElementById('sortBy').value;

    // Use a switch statement
    switch (filter) {
      case 'utah':
        let utahTemples = temples.filter((temple) => temple.location.includes('Utah'));
        displayTemples(utahTemples);
        break;
      case 'nonutah':
        let nonUtahTemples = temples.filter((temple) => !temple.location.includes('Utah'));
        displayTemples(nonUtahTemples);
        break;
      case 'older':
        //get temples by date of year before 1950
        let olderTemples = temples.filter((temple) => new Date(temple.dedicatedDate) < new Date(1950, 0, 1));
        displayTemples(olderTemples);
        break;
      case 'all':
        //no filter
        displayTemples(temples);
        break;
      default:
        console.log('Invalid filter selected');
        break;
    }
  };

/* #8 Event Listener */
document.getElementById("sortBy").addEventListener('change', () => {
    sortBy(templeList);
  });

getTemples();