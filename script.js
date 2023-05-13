let contextInput = null
let questionInput = null
let multipleChoiceInput



function getInput() {
    
    contextInput = document.getElementById("contextInput").value
    questionInput = document.getElementById("questionInput").value
    multipleChoiceInput = document.getElementById("multipleChoiceInput").value
    console.log(questionInput)
    console.log(contextInput)
    if (multipleChoiceInput !== '') { //if multiple choice is empty no a) b) c)... will be displayed
        altermultipleChoiceInput()
    }
    
    setOutput()
    
   
}
// adds a) b) c) d) e)
function altermultipleChoiceInput() {
    multipleChoiceInput = multipleChoiceInput.split(/\r?\n/)
    if (multipleChoiceInput[1] === undefined) {
        multipleChoiceInput[1] = ''
        
    }
    if (multipleChoiceInput[2] === undefined) {
        multipleChoiceInput[2] = ''
        
    }
    if (multipleChoiceInput[3] === undefined) {
        multipleChoiceInput[3] = ''
    }
    if (multipleChoiceInput[4] === undefined) {
        multipleChoiceInput[4] = ''
    }
    multipleChoiceInput = 'a)' + multipleChoiceInput[0] + '\n'+ 'b)' + multipleChoiceInput[1] + '\n'+ 'c)'  +  multipleChoiceInput[2] + '\n'+ 'd)' + multipleChoiceInput[3] + '\n'+ 'e)' + multipleChoiceInput[4]
    multipleChoiceInput.toString()
    
    console.log(multipleChoiceInput)
}

function setOutput() {
    let textOutput = ('Wir befinden uns in der Statistik' + '\n' + '\n' +contextInput + '\n' + '\n' 
    + multipleChoiceInput + '\n' + '\n' +
     questionInput + '\n' + '\n' +'Bitte gebe mir keine Erklärung' + '\n' + '\n' 
     + 'Es müssen  alle Teile der Aussage oder Antwortmöglichkeit wahr sein, damit diese als wahr gilt.'
     + '\n' +  '\n' + 'Die Aussagen müssen nur um Allgemeinen Wahr sein, spezielle Sonderfälle sollen nicht berücksichtigt werden.');
     
    document.getElementById('output').value  = textOutput
    document.getElementById("contextInput").value = ""
    document.getElementById("questionInput").value = ""
    document.getElementById("multipleChoiceInput").value = ""
    document.getElementById("copyButton").innerHTML = 'Copy'
}


//copy button
function copy() {
    let copyText = document.getElementById("output")
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    document.getElementById("copyButton").innerHTML = 'Copied text';
}   


//button event listener
const button = document.querySelector('button');
button.addEventListener('click', convert())

function clear() {
    if (document.getElementById("contextInput").value === "") {
        document.getElementById("output").value = ""
    }
    }


 clear()
//master function
function convert() {
    getInput()

}

