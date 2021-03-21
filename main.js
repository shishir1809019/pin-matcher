//PinGenerate section
document.getElementById('pin_creat').addEventListener('click', function(){
    const randomNum = Math.random()
    var OTP = Math.round(1000 + randomNum * 9000)
    document.getElementById('random_code').value = OTP
    
})


//**************
const displayE1 = document.querySelector('.display')
const numbersE1 = document.querySelectorAll('.number')
const clearAllE1 = document.querySelector('.all-clear')
const clearLastE1 = document.querySelector('.lastNumClear')
const submitPin = document.querySelector('.submit-btn')


let disNum = ''
numbersE1.forEach(function(number){
    number.addEventListener('click',function(e){
        disNum += e.target.innerText
        displayE1.value = disNum 
        // console.log(disNum)
    })
   
})
clearAllE1.addEventListener('click',function(e){
    displayE1.value = ''
    disNum = ''
    
})



submitPin.addEventListener('click',function(e){
    let randomNumber = document.getElementById('random_code').value
    let displayValue = document.getElementById('userInput').value
    console.log(randomNumber)
    console.log(displayValue)
    


    let compareNumber = notifyNotMatch === notifyMatch
    // console.log(compareNumber)
    
    if(compareNumber == true){
        const notifyMatch = document.getElementsByClassName('match')
        notifyMatch.style.display = 'block'
        // notifyNotMatch.style.display = 'none'
    } 
    else{
        const notifyNotMatch = document.getElementsByClassName('doNotMatch')
        notifyNotMatch.style.display = 'block'
        // notifyMatch.style.display = 'none'
    }
    
})



 



