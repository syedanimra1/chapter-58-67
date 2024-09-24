// Part i: Get element of id "main-content"
const mainContent = document.getElementById('main-content');
console.log("Main Content Element: ", mainContent);

// Part ii: Display all child elements of "main-content"
const children = mainContent.children;
console.log("All child elements of main-content:");
for (let i = 0; i < children.length; i++) {
    console.log(children[i]);
}

// Part iii: Get all elements of class "render" and show their innerHTML
const renderElements = document.getElementsByClassName('render');
console.log("Inner HTML of elements with class 'render':");
for (let i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}

// Part iv & v: Fill input values for "first-name", "last-name", and "email"
document.getElementById('first-name').value = 'Alex';
document.getElementById('last-name').value = 'Bank';
document.getElementById('email').value = 'alexbank@example.com';