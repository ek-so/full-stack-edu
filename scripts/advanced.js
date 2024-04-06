console.log(window); //global DOM variable that contains many objects, functions etc.
//alert() is the same as window.alert(), this is an exception
//DOM – Document Object Model. HTML code translated into structure of JS objects

console.log(window.document); //content that was loaded, on the page
//same console.log(document)

//drilling
//JS is executed BEFORE all the HTML is loaded, to avoid this – add DEFER to script link in HTML
console.dir(document); //shows real JS object, not HTML

let firstItem = document.body.firstChild; //access not only HTML children, but NODES, so the 1st node might be function
console.log(firstItem); //will be empty space like data: "\n"
let parentItem = firstItem.parentElement;
console.log(parentItem); //returns body element, coz we took a first child of body
let nextItem = document.body.firstChild.nextSibling;
console.log(nextItem);


document.body.children[0].children[7].children[1].innerHTML = "Get element in a long complex way (drilling child by child)";
document.querySelector("div > div > p").innerHTML = "Get element in a more simple way (with CSS selector)";
//CSS selector selects only FIRST matching element, if you want all, then: querySelectorAll
document.getElementById("drilling3").innerHTML = "Get element in a more simple way (with element ID)";