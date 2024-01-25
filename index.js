

const unseenChars = document.getElementById("new")
const seenChars = document.getElementById("seen")
const cursor = document.getElementById("cursor")


const blanks = "<span>-----------------------------------------------------------------------------------------</span>" 
let futureWords = "confirm that the text color or other content inside the div is not the same or very "
let pastWords = ""
let wordList = futureWords.split(' ')
let count = 0
let currentWord = ''
let correctWord = wordList[0]
let goodAttempt = true
unseenChars.innerHTML = futureWords
// Delay function
function Delay(duration) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    })
}



//When a key is pressed...
//_________________________________________________________________________________________//

document.addEventListener('keydown', (event) => {

    // If the key is backspace
    if (event.key == 'Backspace') {
        // if good attempt
        if (currentWord == wordList[count].slice(0, currentWord.length) && currentWord.length > 0){
            // put the letter back in the upcoming words
            futureWords = pastWords.slice(-1) + futureWords
        }
        // Change display
        currentWord = currentWord.slice(0, -1)
        pastWords = pastWords.slice(0, -1)
    // If the key is space
    } else if (event.key == ' ') { 
        


        // If the key is a letter
    } else if ((/[a-zA-Z]/).test(event.key) && event.key.length == 1){
        // Add the letter to the current word
        currentWord += event.key
        console.log(currentWord)

        // If good attempt and right letter
        if (currentWord == wordList[count].slice(0, currentWord.length) && event.key == futureWords[0]){
            //Clear the letter from the upcoming words
            futureWords = futureWords.slice(1)
        }

        // update all the words
        unseenChars.innerHTML = futureWords
        seenChars.innerHTML = currentWord + pastWords

        //cross out section
        if (currentWord != wordList[count].slice(0, currentWord.length)){
            seenChars.style.textdecoration = 'line-through'
        }
    }
});
