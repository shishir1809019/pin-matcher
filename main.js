//PinGenerate section
document.getElementById('pin_creat').addEventListener('click', function(){
    const randomNum = Math.random()
    const OTP = Math.round(randomNum * 10000)
    document.getElementById('code').value = OTP
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
        console.log(disNum)
    })
   
})
clearAllE1.addEventListener('click',function(e){
    displayE1.value = ''
    disNum = ''
    
})

submitPin.addEventListener('click',function(e){
    if(disNum == OTP){
        document.getElementsByClassName('not-1').style.display = 'block'
    } 
    else{document.getElementsByClassName('not-2').style.display= ''}
})



