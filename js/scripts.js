const container = document.createElement('main');
container.classList.add('container');

document.body.appendChild(container);

function showQuote() {
    alert('Cool, Cool, Cool');
    console.log('hi');
}
let timer

function callQuote() {
    timer = setInterval(showQuote, 3000);
}

function stopFromRunning() {
    clearInterval(timer, 1000);
}

const button = document.createElement('button');
button.innerText = "Click for a quote";
button.setAttribute('onClick', 'callQuote()');
button.className= 'btn btn-primary btn-lg';
container.appendChild(button);

const stopButton = document.createElement('button');
stopButton.innerText = 'Stop';
stopButton.setAttribute('onClick', 'stopFromRunning()');
stopButton.className = 'btn btn-danger btn-lg';
// container.appendChild(stopButton);


// Session storage
button.addEventListener('click', ()=> {
    container.appendChild(stopButton);
    sessionStorage.setItem('TEMPORARY', 'Every problem is temporary');
    sessionStorage.getItem('TEMPORARY');
    
    // Local Storage
    localStorage.setItem('DEATH', 'Except for death - grace');
    localStorage.getItem('DEATH');   
});

const example = function(param){
    return test(param);

}

function test(testParam){
    alert(testParam);
}