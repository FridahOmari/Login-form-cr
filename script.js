// Get the elements
let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#confirm-password')
let submitBtn = document.querySelector("#submit-btn")
let form = document.querySelector('form')

let body = document.querySelector('body')

// Add event on submit
//element.addEventListener(action, function)

submitBtn.addEventListener('click', () => {
// conditional statments

//if(condition){to do}
    if(name.value.length === 0 || email.value.length === 0 || password.value.length === 0 || confirmPassword.value.length === 0){
        alert("Ooops Check your inputs")
    }else{
        if(password.value != confirmPassword.value){
            alert("Your password doesn't match")
        }
        else{
            
            // 1. CREATE
            let paragraphDiv = document.createElement('div')
            let paragraph = document.createElement('p')

            // 2. place in the html
            body.appendChild(paragraphDiv)
            paragraphDiv.appendChild(paragraph)

            paragraphDiv.style.height = "100vh"
            paragraphDiv.style.width = "100vw"
            paragraphDiv.style.display = "flex"
            paragraphDiv.style.justifyContent = "center"
            paragraphDiv.style.alignItems = "center"
            paragraphDiv.style.backgroundColor = "black"

            paragraph.innerText = 'LOGGED IN'
            paragraph.style.color = '#fff'

            // 3. Hide form
            form.style.display = 'none'

        }
    }

} )

