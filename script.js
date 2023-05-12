let contextInput = null
let questionInput = null
    


function getInput() {
    contextInput = document.getElementById("contextInput").value
    questionInput = document.getElementById("questionInput").value
    console.log(questionInput)
    console.log(contextInput)
    setOutput()
}

function setOutput() {
    document.getElementById('output').value = (contextInput + '\n' + 
                                                     questionInput);
}

//button event listener
const button = document.querySelector('button');
button.addEventListener('click', convert())


//master function
function convert() {
    getInput()

}

