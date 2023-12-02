function updateScript() {
    const scriptSelector = document.getElementById("scriptSelector");
    const sqlScriptTextarea = document.getElementById("sqlScript");

    // Get the selected script
    const selectedScript = scriptSelector.value;

    // Update textarea with the corresponding SQL script
    switch (selectedScript) {
        case "removeDuplicates":
            sqlScriptTextarea.value = "SELECT DISTINCT * FROM your_table;";
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
