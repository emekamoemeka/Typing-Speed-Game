

const unseenChars = document.getElementById("new");
const seenChars = document.getElementById("seen");
const cursor = document.getElementById("cursor");
const trailingSpace = document.getElementById("trailingSpace");
const stopWatch = document.getElementById("stopWatch");

//score counters
const wordCounter = document.getElementById("wordCounter")
const accuracyCounter = document.getElementById("accuracyCounter")
const CPMCounter = document.getElementById("CPMCounter")
const WPMCounter = document.getElementById("WPMCounter")

let wordCount = 0
let accuracy = 0
let chars = 0

trailingSpace.style.width = '0px';
trailingSpace.style.visibility = 'visible';

const allLegalWords = ['a', 'ability', 'able', 'about', 'above', 'accept', 'according', 'account', 'across', 'act', 'action', 'activity', 'actually', 'add', 'address', 'administration', 'admit', 'adult', 'affect', 'after', 'again', 'against', 'age', 'agency', 'agent', 'ago', 'agree', 'agreement', 'ahead', 'air', 'all', 'allow', 'almost', 'alone', 'along', 'already', 'also', 'although', 'always', 'American', 'among', 'amount', 'analysis', 'and', 'animal', 'another', 'answer', 'any', 'anyone', 'anything', 'appear', 'apply', 'approach', 'area', 'argue', 'arm', 'around', 'arrive', 'art', 'article', 'artist', 'as', 'ask', 'assume', 'at', 'attack', 'attention', 'attorney', 'audience', 'author', 'authority', 'available', 'avoid', 'away', 'baby', 'back', 'bad', 'bag', 'ball', 'bank', 'bar', 'base', 'be', 'beat', 'beautiful', 'because', 'become', 'bed', 'before', 'begin', 'behavior', 'behind', 'believe', 'benefit', 'best', 'better', 'between', 'beyond', 'big', 'bill', 'billion', 'bit', 'black', 'blood', 'blue', 'board', 'body', 'book', 'born', 'both', 'box', 'boy', 'break', 'bring', 'brother', 'budget', 'build', 'building', 'business', 'but', 'buy', 'by', 'call', 'camera', 'campaign', 'can', 'cancer', 'candidate', 'capital', 'car', 'card', 'care', 'career', 'carry', 'case', 'catch', 'cause', 'cell', 'center', 'central', 'century', 'certain', 'certainly', 'chair', 'challenge', 'chance', 'change', 'character', 'charge', 'check', 'child', 'choice', 'choose', 'church', 'citizen', 'city', 'civil', 'claim', 'class', 'clear', 'clearly', 'close', 'coach', 'cold', 'collection', 'college', 'color', 'come', 'commercial', 'common', 'community', 'company', 'compare', 'computer', 'concern', 'condition', 'conference', 'Congress', 'consider', 'consumer', 'contain', 'continue', 'control', 'cost', 'could', 'country', 'couple', 'course', 'court', 'cover', 'create', 'crime', 'cultural', 'culture', 'cup', 'current', 'customer', 'cut', 'dark', 'data', 'daughter', 'day', 'dead', 'deal', 'death', 'debate', 'decade', 'decide', 'decision', 'deep', 'defense', 'degree', 'Democrat', 'democratic', 'describe', 'design', 'despite', 'detail', 'determine', 'develop', 'development', 'die', 'difference', 'different', 'difficult', 'dinner', 'direction', 'director', 'discover', 'discuss', 'discussion', 'disease', 'do', 'doctor', 'dog', 'door', 'down', 'draw', 'dream', 'drive', 'drop', 'drug', 'during', 'each', 'early', 'east', 'easy', 'eat', 'economic', 'economy', 'edge', 'education', 'effect', 'effort', 'eight', 'either', 'election', 'else', 'employee', 'end', 'energy', 'enjoy', 'enough', 'enter', 'entire', 'environment', 'environmental', 'especially', 'establish', 'even', 'evening', 'event', 'ever', 'every', 'everybody', 'everyone', 'everything', 'evidence', 'exactly', 'example', 'executive', 'exist', 'expect', 'experience', 'expert', 'explain', 'eye', 'face', 'fact', 'factor', 'fail', 'fall', 'family', 'far', 'fast', 'father', 'fear', 'federal', 'feel', 'feeling', 'few', 'field', 'fight', 'figure', 'fill', 'film', 'final', 'finally', 'financial', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fish', 'five', 'floor', 'fly', 'focus', 'follow', 'food', 'foot', 'for', 'force', 'foreign', 'forget', 'form', 'former', 'forward', 'four', 'free', 'friend', 'from', 'front', 'full', 'fund', 'future', 'game', 'garden', 'gas', 'general', 'generation', 'get', 'girl', 'give', 'glass', 'go', 'goal', 'good', 'government', 'great', 'green', 'ground', 'group', 'grow', 'growth', 'guess', 'gun', 'guy', 'hair', 'half', 'hand', 'hang', 'happen', 'happy', 'hard', 'have', 'he', 'head', 'health', 'hear', 'heart', 'heat', 'heavy', 'help', 'her', 'here', 'herself', 'high', 'him', 'himself', 'his', 'history', 'hit', 'hold', 'home', 'hope', 'hospital', 'hot', 'hotel', 'hour', 'house', 'how', 'however', 'huge', 'human', 'hundred', 'husband', 'I', 'idea', 'identify', 'if', 'image', 'imagine', 'impact', 'important', 'improve', 'in', 'include', 'including', 'increase', 'indeed', 'indicate', 'individual', 'industry', 'information', 'inside', 'instead', 'institution', 'interest', 'interesting', 'international', 'interview', 'into', 'investment', 'involve', 'issue', 'it', 'item', 'its', 'itself', 'job', 'join', 'just', 'keep', 'key', 'kid', 'kill', 'kind', 'kitchen', 'know', 'knowledge', 'land', 'language', 'large', 'last', 'late', 'later', 'laugh', 'law', 'lawyer', 'lay', 'lead', 'leader', 'learn', 'least', 'leave', 'left', 'leg', 'legal', 'less', 'let', 'letter', 'level', 'lie', 'life', 'light', 'like', 'likely', 'line', 'list', 'listen', 'little', 'live', 'local', 'long', 'look', 'lose', 'loss', 'lot', 'love', 'low', 'machine', 'magazine', 'main', 'maintain', 'major', 'majority', 'make', 'man', 'manage', 'management', 'manager', 'many', 'market', 'marriage', 'material', 'matter', 'may', 'maybe', 'me', 'mean', 'measure', 'media', 'medical', 'meet', 'meeting', 'member', 'memory', 'mention', 'message', 'method', 'middle', 'might', 'military', 'million', 'mind', 'minute', 'miss', 'mission', 'model', 'modern', 'moment', 'money', 'month', 'more', 'morning', 'most', 'mother', 'mouth', 'move', 'movement', 'movie', 'Mr', 'Mrs', 'much', 'music', 'must', 'my', 'myself', 'name', 'nation', 'national', 'natural', 'nature', 'near', 'nearly', 'necessary', 'need', 'network', 'never', 'new', 'news', 'newspaper', 'next', 'nice', 'night', 'no', 'none', 'nor', 'north', 'not', 'note', 'nothing', 'notice', 'now', "n't", 'number', 'occur', 'of', 'off', 'offer', 'office', 'officer', 'official', 'often', 'oh', 'oil', 'ok', 'old', 'on', 'once', 'one', 'only', 'onto', 'open', 'operation', 'opportunity', 'option', 'or', 'order', 'organization', 'other', 'others', 'our', 'out', 'outside', 'over', 'own', 'owner', 'page', 'pain', 'painting', 'paper', 'parent', 'part', 'participant', 'particular', 'particularly', 'partner', 'party', 'pass', 'past', 'patient', 'pattern', 'pay', 'peace', 'people', 'per', 'perform', 'performance', 'perhaps', 'period', 'person', 'personal', 'phone', 'physical', 'pick', 'picture', 'piece', 'place', 'plan', 'plant', 'play', 'player', 'PM', 'point', 'police', 'policy', 'political', 'politics', 'poor', 'popular', 'population', 'position', 'positive', 'possible', 'power', 'practice', 'prepare', 'present', 'president', 'pressure', 'pretty', 'prevent', 'price', 'private', 'probably', 'problem', 'process', 'produce', 'product', 'production', 'professional', 'professor', 'program', 'project', 'property', 'protect', 'prove', 'provide', 'public', 'pull', 'purpose', 'push', 'put', 'quality', 'question', 'quickly', 'quite', 'race', 'radio', 'raise', 'range', 'rate', 'rather', 'reach', 'read', 'ready', 'real', 'reality', 'realize', 'really', 'reason', 'receive', 'recent', 'recently', 'recognize', 'record', 'red', 'reduce', 'reflect', 'region', 'relate', 'relationship', 'religious', 'remain', 'remember', 'remove', 'report', 'represent', 'Republican', 'require', 'research', 'resource', 'respond', 'response', 'responsibility', 'rest', 'result', 'return', 'reveal', 'rich', 'right', 'rise', 'risk', 'road', 'rock', 'role', 'room', 'rule', 'run', 'safe', 'same', 'save', 'say', 'scene', 'school', 'science', 'scientist', 'score', 'sea', 'season', 'seat', 'second', 'section', 'security', 'see', 'seek', 'seem', 'sell', 'send', 'senior', 'sense', 'series', 'serious', 'serve', 'service', 'set', 'seven', 'several', 'sex', 'sexual', 'shake', 'share', 'she', 'shoot', 'short', 'shot', 'should', 'shoulder', 'show', 'side', 'sign', 'significant', 'similar', 'simple', 'simply', 'since', 'sing', 'single', 'sister', 'sit', 'site', 'situation', 'six', 'size', 'skill', 'skin', 'small', 'smile', 'so', 'social', 'society', 'soldier', 'some', 'somebody', 'someone', 'something', 'sometimes', 'son', 'song', 'soon', 'sort', 'sound', 'source', 'south', 'southern', 'space', 'speak', 'special', 'specific', 'speech', 'spend', 'sport', 'spring', 'staff', 'stage', 'stand', 'standard', 'star', 'start', 'state', 'statement', 'station', 'stay', 'step', 'still', 'stock', 'stop', 'store', 'story', 'strategy', 'street', 'strong', 'structure', 'student', 'study', 'stuff', 'style', 'subject', 'success', 'successful', 'such', 'suddenly', 'suffer', 'suggest', 'summer', 'support', 'sure', 'surface', 'system', 'table', 'take', 'talk', 'task', 'tax', 'teach', 'teacher', 'team', 'technology', 'television', 'tell', 'ten', 'tend', 'term', 'test', 'than', 'thank', 'that', 'the', 'their', 'them', 'themselves', 'then', 'theory', 'there', 'these', 'they', 'thing', 'think', 'third', 'this', 'those', 'though', 'thought', 'thousand', 'threat', 'three', 'through', 'throughout', 'throw', 'thus', 'time', 'to', 'today', 'together', 'tonight', 'too', 'top', 'total', 'tough', 'toward', 'town', 'trade', 'traditional', 'training', 'travel', 'treat', 'treatment', 'tree', 'trial', 'trip', 'trouble', 'true', 'truth', 'try', 'turn', 'TV', 'two', 'type', 'under', 'understand', 'unit', 'until', 'up', 'upon', 'us', 'use', 'usually', 'value', 'various', 'very', 'victim', 'view', 'violence', 'visit', 'voice', 'vote', 'wait', 'walk', 'wall', 'want', 'war', 'watch', 'water', 'way', 'we', 'weapon', 'wear', 'week', 'weight', 'well', 'west', 'western', 'what', 'whatever', 'when', 'where', 'whether', 'which', 'while', 'white', 'who', 'whole', 'whom', 'whose', 'why', 'wide', 'wife', 'will', 'win', 'wind', 'window', 'wish', 'with', 'within', 'without', 'woman', 'wonder', 'word', 'work', 'worker', 'world', 'worry', 'would', 'write', 'writer', 'wrong', 'yard', 'yeah', 'year', 'yes', 'yet', 'you', 'young', 'your', 'yourself'];
let pastWords = "";
let count = 0;
let currentWord = '';
let currentWordSave = currentWord;
let goodAttempt = true;
let futureWords = "";
let gameStart = false;
let globalTime = 60;


for (i = 0; i < 60; i++) {
    futureWords +=  allLegalWords[Math.floor(Math.random() * allLegalWords.length)] + " ";
}

let wordList = futureWords.split(' ');
unseenChars.innerHTML = futureWords;

blinkIntervalID = setInterval(blinkCursor, 500);
let globalTimeID;

// Stopwacth function
function decrementStopwatch() {
    globalTime--;
    stopWatch.innerHTML = globalTime;
    console.log(globalTime)
    if (globalTime == 0) {
        clearInterval(globalTimeID)
    }
}

// Blink cursor function 
function blinkCursor() {

    if (cursor.style.backgroundColor == 'transparent') {
        cursor.style.backgroundColor = 'black';
    }
    else {
        cursor.style.backgroundColor = 'transparent';
    }
}

//When a key is pressed...
//_________________________________________________________________________________________//

document.addEventListener('keydown', (event) => {
    if (gameStart == false) {
        globalTimeID = setInterval(decrementStopwatch,1000);
        gameStart = true
    }
    cursor.style.backgroundColor = 'black'
    clearInterval(blinkIntervalID)
    blinkIntervalID = setInterval(blinkCursor, 500)


    // If the key is backspace
    if (event.key == 'Backspace' && currentWord.length > 0) {
        // if good attempt
        if (currentWord == wordList[count].slice(0, currentWord.length) && currentWord.length > 0) {
            // put the letter back in the upcoming words
            futureWords = currentWord.slice(-1) + futureWords;
        }
        // Change display
        currentWord = currentWord.slice(0, -1);
        if (currentWord.length == 0) {
            trailingSpace.style.width = '10px';
        }
        


    // If the key is space
    } else if (event.key == ' ' && currentWord.length > 0) {

        //right guess
        if (currentWord == wordList[count]) {
            pastWords += "<span class='disable'>" + currentWord + "</span> ";
            chars += currentWord.length;
            wordCount++

        }
        //wrong guess
        else {
            pastWords += "<span class='disable cross'>" + currentWord + "</span> ";
        }
        
        // Move onto the next word
        count += 1;
        currentWord = '';
        futureWords = wordList.slice(count).join(' ');
        
        trailingSpace.style.width = '10px';
        
        seenChars.innerHTML = pastWords + currentWord;

    // If the key is a letter
    } else if ((/[a-zA-Z]/).test(event.key) && event.key.length == 1){
        trailingSpace.style.width = '0px';

        // Add the letter to the current word
        currentWord += event.key;
        // If good attempt and right letter
        if (currentWord == wordList[count].slice(0, currentWord.length)) {
            // Clear the letter from the upcoming words
            futureWords = futureWords.slice(1);
        }
    }
    // update all the words
    unseenChars.innerHTML = futureWords;


    // If the guess isnt good then cross it out, otherwise dont
    if (currentWord == wordList[count].slice(0, currentWord.length)) {
        seenChars.innerHTML = pastWords + currentWord;
    } else {
        seenChars.innerHTML = pastWords + "<span class='cross'>" + currentWord + "</span>";
    }

    // Update trackers
    wordCounter.innerHTML = wordCount
    if (Math.ceil((wordCount/count) * 100)) {
        accuracyCounter.innerHTML = Math.ceil((wordCount/count) * 100)
    }
    if (Math.ceil((wordCount/count) * 100)) {
        CPMCounter.innerHTML = Math.ceil(chars / ((60 - globalTime) /(60)))
    }
});
