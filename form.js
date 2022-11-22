var prevBtn = document.getElementById("prev"),
    nextBtn = document.getElementById("next"),
    progressBar = document.getElementById("progressBar"),
    step_two = document.getElementById("step_two"),
    step_three = document.getElementById("step_three"),
    step_four = document.getElementById("step_four"),
    buttonsContainer = document.getElementById("buttonsCTN"),
    formStepOne = document.getElementById("formStepOne"),
    formStepTwo = document.getElementById("formStepTwo"),
    formStepFour = document.getElementById("formStepFour"),
    formStepThree = document.getElementById("formStepThree"),
    fName = document.getElementById("fname"),
    lName = document.getElementById("lname"),
    username = document.getElementById("username"),
    email = document.getElementById("email"),
    birthDay = document.getElementById("birthDay"),
    country = document.getElementById("country"),
    phone = document.getElementById("phone"),
    adress = document.getElementById("adress"),
    city = document.getElementById("city"),
    state = document.getElementById("state"),
    
    nameText = document.getElementById("nameText"),
    emailText = document.getElementById("emailText"),
    userText = document.getElementById("userText"),
    dateText = document.getElementById("dateText"),
    countryText = document.getElementById("countryText"),
    cityText = document.getElementById("cityText"),
    stateText = document.getElementById("stateText"),
    phoneText = document.getElementById("phoneText")

var step = 1
// document.getElementById("nextBtn").required = true;
function myFunction(){
document.getElementById("next").required = true;

}
nextBtn.addEventListener("click",()=>{

    if(step === 1){
        progressBar.style.width = "40%"
        setTimeout(()=>{
            step_two.setAttribute("style","background-color: rgb(99,179,152);color: white;")
        },100)
        buttonsContainer.style.justifyContent = "space-between"
        prevBtn.style.display = "block"
        formStepOne.style.display = "none"
        formStepTwo.style.display = "block"
        nextBtn.innerText = "Next"
        step++;
    }
    else if(step === 2){
        progressBar.style.width = "75%"
        setTimeout(()=>{
            step_three.setAttribute("style","background-color: rgb(99,179,152);color: white;")
        },100)
        formStepTwo.style.display = "none"
        formStepThree.style.display = "block"
        nextBtn.innerText = "Done"
        step++
    }
    else if(step === 3){
        progressBar.style.width = "75%"
        setTimeout(()=>{
            step_four.setAttribute("style","background-color: rgb(99,179,152);color: white;")
        },100)
        nameText.innerText = fName.value+" "+lName.value
        userText.innerText = username.value
        emailText.innerText = email.value
        dateText.innerText = birthDay.value
        countryText.innerText = country.value
        cityText.innerText = city.value
        stateText.innerText = state.value
        phoneText.innerText = phone.value
        formStepThree.style.display = "none"

    }
    
})

prevBtn.addEventListener("click",()=>{

    if(step === 2){
        progressBar.style.width = "0%"
        step_two.setAttribute("style","background-color: transparent;color: black;")
        buttonsContainer.style.justifyContent = "right"
        prevBtn.style.display = "none"
        formStepTwo.style.display = "none"
        formStepOne.style.display = "block"
        nextBtn.innerText = "Next"
        step--
    }
    else if(step === 3){
        progressBar.style.width = "40%"
        step_three.setAttribute("style","background-color: transparent;color: black;")
        formStepThree.style.display = "none"
        formStepTwo.style.display = "block"
        nextBtn.innerText = "Next"
        step--
    }
    // else if(step === 4){
    //     progressBar.style.width = "50%"
    //     step_four.setAttribute("style","background-color: transparent;color: black;")
    //     formStepFour.style.display = "none"
    //     formStepThree.style.display = "block"
    //     nextBtn.innerText = "Next"
    //     step--
    // }
    
})















































// const multiStepForm = document.querySelector("[data-multi-step]")
// const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
// let currentStep = formSteps.findIndex(step => {
//   return step.classList.contains("active")
// })

// if (currentStep < 0) {
//   currentStep = 0
//   showCurrentStep()
// }


// multiStepForm.addEventListener("click", e => {
//   let incrementor
//   if (e.target.matches("[data-next]")) {
//     incrementor = 1
//   } else if (e.target.matches("[data-previous]")) {
//     incrementor = -1
//   }

//   if (incrementor == null) return

//   const inputs = [...formSteps[currentStep].querySelectorAll("input")]
//   const allValid = inputs.every(input => input.reportValidity())
//   if (allValid) {
//     currentStep += incrementor
//     showCurrentStep()
//   }
// })

// formSteps.forEach(step => {
//   step.addEventListener("animationend", e => {
//     formSteps[currentStep].classList.remove("hide")
//     e.target.classList.toggle("hide", !e.target.classList.contains("active"))
//   })
// })

// function showCurrentStep() {
//   formSteps.forEach((step, index) => {
//     step.classList.toggle("active", index === currentStep)
//   })
// }