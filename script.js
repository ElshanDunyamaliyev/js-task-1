let randomNumber = Math.ceil(Math.random() * 100)
let userGuess = parseInt(prompt('1 ile 100 arasinda eded daxil edin: '))
let count = 1
while(userGuess !== randomNumber){
    if(userGuess<randomNumber){
        userGuess = parseInt(prompt('Daha boyuk eded daxil edin: '))
        count++;
    }else if(userGuess>randomNumber){
        userGuess = parseInt(prompt('Daha kicik eded daxil edin: '))
        count++;
    } 
}
   
alert(`Tebrik edirik duz texmin ettiniz, Duzgun reqem ${randomNumber} , Cehd sayiniz ${count} `)

