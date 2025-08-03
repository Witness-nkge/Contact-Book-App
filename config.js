
//contains global variables that we will need

//url of the server
let rootPath = "https://mysite.itvarsity.org/api/ContactBook/";

//apikey for access to the api (for security purposes) 
let apiKey = checkApiKey();

//checks if the api key has been sent otherwise open the enter-api-key html document
function checkApiKey() {
    if (!localStorage.getItem("apiKey")) {
        window.open("enter-api-key.html", "_self");
    }
    return localStorage.getItem("apiKey");
}


/*
localStorage is a built-in object in web browsers (like Chrome, Firefox, Edge).

It lets websites store data in the browser.

This data doesn’t get deleted when the page is refreshed or the browser is closed (unless manually cleared).

It stores data as key-value pairs, both as strings.


Imagine you did this earlier in your JavaScript:

javascript
Copy code
localStorage.setItem("apiKey", "12345ABC");
Later, when you run:

javascript
Copy code
let key = localStorage.getItem("apiKey");
console.log(key);  // Output: "12345ABC"
*/






/*
In a browser, window is the global object that represents the browser window or tab where your webpage is running.

It contains everything related to that browser context, such as:

The document (the webpage),

The location (URL),

Functions like alert(), setTimeout(), localStorage, etc.

📌 In this line:
javascript
Copy code
window.open("enter-api-key.html", "_self");
You're calling the open() method of the window object.

🔍 What does window.open(...) do?
It opens a new browser window or tab, or navigates the current window to a new page, depending on the second argument.

Breakdown:
"enter-api-key.html" — the URL of the page you want to open.

"_self" — means open the page in the same window/tab (replaces current page).

✅ So this line navigates the current page to enter-api-key.html.

🔁 Compare with:
javascript
Copy code
window.open("enter-api-key.html", "_blank");
This would open the new page in a new tab or window.



*/