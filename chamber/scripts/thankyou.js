const currentUrl = window.location.href;


//Divide the url into two halves
const everything=currentUrl.split('?')
console.log(everything)
console.log('hello')

//Grab just the second half
let formData = everything[1].split('&')
console.log(formData)