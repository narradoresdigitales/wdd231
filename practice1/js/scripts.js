import {temples} from '../data/temples.js'
//console.log(temples)


import {url} from '../data/temples.js'
//console.log(url)

//---reference to <div> to display items
const showHere = document. querySelector("#showHere")
//---reference html dialog elements
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myinfo = document.querySelector('#mydialog p')
const myclose = document.querySelector('#mydialog button')
myclose.addEventListener("click", () => mydialog.close())

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
    console.log(x)
    const photo = document.createElement('img')
    photo.src=`${url}${x.path}`
    photo.alt=x.name
    // Add an event listener to each division on the page.
    photo.addEventListener('click', () => showStuff(x));
    showHere.appendChild(photo)

    }) //end loop

} // end function 

// start displaying all items in the json file
displayItems(temples)

// populate the dialog with information when image is clicked

function showStuff(x) {
    mytitle.innerHTML = x.name
    mydialog.showModal() 
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}`;
    
}
