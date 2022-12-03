// Write your code here!
//access the element
const element = document.getElementById("main")

//Delete the element
element.remove()

// //Add a newHeader variable that points to a h1 node
const newHeader = document.createElement("h1")
newHeader.id = 'victory'
newHeader.textContent = 'Jamila is the champion';
document.body.append(newHeader)