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

// UserInput section
numbersE1.forEach(function(number){
    number.addEventListener('click',function(e){
        disNum += e.target.innerText
        displayE1.value = disNum 
        // console.log(disNum)
    })   
})

//clearInput section
clearAllE1.addEventListener('click',function(e){
    displayE1.value = ''
    disNum = ''
    
})
clearLastE1.addEventListener('click',function(e){
    changedValue = document.getElementById('userInput').value.toString().slice(0, -1)
    displayE1.value = changedValue
    disNum = changedValue
})

// notify section
submitPin.addEventListener('click',function(e){
    let randomNumber = document.getElementById('random_code').value
    let displayValue = document.getElementById('userInput').value
    console.log(randomNumber)
    console.log(displayValue)
    

    // let compareNumber = randomNumber === displayValue
    // console.log(compareNumber)
    
    if(randomNumber == displayValue){
        document.getElementById('match').style.display = 'block'
        document.getElementById('doNotMatch').style.display = 'none'
    } 
    else{
        document.getElementById('doNotMatch').style.display = 'block'
        document.getElementById('match').style.display = 'none'
    }   
})



 



