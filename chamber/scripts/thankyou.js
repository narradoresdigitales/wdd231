const currentUrl = window.location.href;


//Divide the url into two halves
const everything=currentUrl.split('?')
console.log(everything)

//Grab just the second half
let formData = everything[1].split('&')
console.log(formData)

function show(cup) {
    console.log(cup)
    formData.forEach((element) => {

        if (element.startsWith(cup)) {
            result= decodeURIComponent(element.split('=')[1].replace(/\+/g, ' '));
        
        } //end if
    })
    return(result)
        

} //end show

const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>Name: ${show("first")} ${show("last")}<p>
<p>Your Phone: ${show("phone")}</p>
<p>Business Name: ${show("business")}</p>
<p>Time Stamp: ${show("timestamp")} </p>
<p>Email: <a href=mailto:${show("email")}">${show('email')}</a></p>
`;