

const unseenChars = document.getElementById("new")
const seenChars = document.getElementById("seen")
const cursor = document.getElementById("cursor")
const trailingSpace = document.getElementById("trailingSpace")

trailingSpace.style.width = '0px'


const blanks = "<span>-----------------------------------------------------------------------------------------</span>" 
let futureWords = "confirm that the text color or other content inside the div is not the same or very"
let pastWords = ""
let wordList = futureWords.split(' ')
let count = 0
let currentWord = ''
let currentWordSave = currentWord
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
    if (event.key == 'Backspace' && currentWord.length > 0) {
        // if good attempt
        if (currentWord == wordList[count].slice(0, currentWord.length) && currentWord.length > 0){
            // put the letter back in the upcoming words
            futureWords = currentWord.slice(-1) + futureWords
        }
        // Change display
        currentWord = currentWord.slice(0, -1)
        if (currentWord.length == 0) {
            trailingSpace.style.width = '10px'
        }
        


    // If the key is space
    } else if (event.key == ' ' && currentWord.length > 0) { 
        if (currentWord == wordList[count]) {
            pastWords += currentWord + ' '
        }
        else {
            console.log("reach")
            pastWords += "<span>" + currentWord + "</span> "
        }
        
        // Move onto the next word
            count += 1
            currentWord = ''
            futureWords = wordList.slice(count).join(' ')
            trailingSpace.style.width = '10px'
        
        seenChars.innerHTML = pastWords + currentWord

    // If the key is a letter
    } else if ((/[a-zA-Z]/).test(event.key) && event.key.length == 1){
        trailingSpace.style.width = '0px'

        // Add the letter to the current word
        currentWord += event.key
        // If good attempt and right letter
        if (currentWord == wordList[count].slice(0, currentWord.length)) {
            // Clear the letter from the upcoming words
            futureWords = futureWords.slice(1)
        }
    }
    // update all the words
    unseenChars.innerHTML = futureWords


    // If the guess isnt good then cross it out, otherwise dont
    if (currentWord == wordList[count].slice(0, currentWord.length)) {
        seenChars.innerHTML = pastWords + currentWord
    } else {
        seenChars.innerHTML = pastWords + "<span>" + currentWord + "</span>"
    }
    
});
