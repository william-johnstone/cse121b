function updateScript() {
    const scriptSelector = document.getElementById("scriptSelector");
    const sqlScriptTextarea = document.getElementById("sqlScript");

    // Get the selected script
    const selectedScript = scriptSelector.value;

    // Update textarea with the corresponding SQL script
    switch (selectedScript) {
        case "nothing":
            break;
        case "findDuplicates":
            sqlScriptTextarea.value = "SELECT ColumnA, COUNT(ColumnA) as cntA FROM your_table GROUP BY (ColumnA) HAVING COUNT(ColumnA) > 1;";
            break;
        case "fixGuarantors":
            sqlScriptTextarea.value = "UPDATE your_table SET guarantor = 'fixed_value' WHERE condition;";
            break;
        case "trimExtraSpace":
            sqlScriptTextarea.value = "UPDATE your_table SET column_name = TRIM(column_name);";
            break;
        default:
            sqlScriptTextarea.value = ""; // Clear textarea if no script is selected
    }
}

function copyToClipboard() {
    const sqlScriptTextarea = document.getElementById("sqlScript");

    // Select the text in the textarea
    sqlScriptTextarea.select();
    sqlScriptTextarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    alert("Script copied to clipboard!");
}

const sqlSites = [
    { name: 'W3Schools', url: 'https://www.w3schools.com/sql/' },
    { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/SQL' },
    { name: 'SQLCourse', url: 'https://www.sqlcourse.com/' },
    { name: 'SQLZoo', url: 'https://sqlzoo.net/' },
    // Add more sites as needed
];

let insertSQLSites = () => {
    const sqlSitesList = document.getElementById('sql-sites-list');

    sqlSites.forEach(site => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = site.name;
        link.href = site.url;
        link.target = '_blank'; // Open link in a new tab

        listItem.appendChild(link);
        sqlSitesList.appendChild(listItem);
    });
}

let fetchRandomAnimeQuote = async () => {
    try {
        const response = await fetch('https://animechan.xyz/api/random');
        const quote = await response.json();
        displayQuote(quote);
    } catch (error) {
        console.log('An error occurred: ', error);
    }
}

let displayQuote = (quote) => {
    const quoteTextElement = document.getElementById('quote-text');
    quoteTextElement.textContent = `"${quote.quote}" - ${quote.character} from ${quote.anime}`;
}

// Initial call to fetch and display a random anime quote
fetchRandomAnimeQuote();
// Call the function to insert the list of SQL sites
insertSQLSites();