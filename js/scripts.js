const body = document.body;
const container = document.createElement('div');

container.className = 'container text-center';

console.log (body);

const row = document.createElement('main');
row.className = "row";

const content = document.createElement('div');
content.className = "col-md-6 col-md-offset-3 content";

 row.appendChild(content);
 container.appendChild(row);
 body.appendChild(container);


//  form tag > input:email - input:subject - textarea - button:submit

const form = document.createElement('form');
form.setAttribute('name', 'myForm');
form.setAttribute('method', 'GET');
form.setAttribute('action', 'js/form-submission.js');

const email = document.createElement('input');
email.setAttribute('name', 'email');
email.setAttribute('type', 'email');
email.setAttribute('placeholder', 'email');
email.setAttribute('class', 'form-control');
email.setAttribute('id', 'email');


const subject = document.createElement('input');
subject.setAttribute('name', 'subject');
subject.setAttribute('type', 'text');
subject.setAttribute('placeholder', 'subject');
subject.setAttribute('class', 'form-control');
subject.setAttribute('id', 'subject');

const textarea = document.createElement('textarea');
textarea.setAttribute('name', 'textarea');
textarea.setAttribute('type', 'text');
textarea.setAttribute('class', 'form-control');
textarea.setAttribute('id', 'textarea');

const formEmailLabel = document.createElement('label');
formEmailLabel.setAttribute('for', 'email');
formEmailLabel.innerText = 'email';

const textAreaLabel = document.createElement('label');
textAreaLabel.setAttribute('for', 'textarea');
textAreaLabel.innerText = 'text area yo';

const subjectLabel = document.createElement('label');
subjectLabel.setAttribute('for', 'email');
subjectLabel.innerText = 'Subject';

const button = document.createElement('button');
button.setAttribute('type', 'submit');
button.setAttribute('class', 'btn btn-success');
button.innerHTML='submit';

const formGroup = document.createElement('div');
formGroup.className = 'form-group';

formGroup.appendChild(subjectLabel);
formGroup.appendChild(subject);
formGroup.appendChild(textAreaLabel);
formGroup.appendChild(textarea);
formGroup.appendChild(formEmailLabel);
formGroup.appendChild(email);
formGroup.appendChild(button);

form.appendChild(formGroup)
content.appendChild(form);

console.log(form);


// function globalFormElements(element, elementType, elementName, elementClass, placeHolder){

//     // create elements

//     const newElement = document.createElement(element);
//     newElement.setAttribute('type', elementType);
//     newElement.className = elementClass;
//     newElement.setAttribute('name', elementName);
//     newElement.setAttribute('placeholder', placeHolder);
//     return newElement;
// };

// const textAreaElement = (name, placeholder, elementClass, elementId, cols = 4, rows = 2) => {
//     const element = document.createElement('textarea');
//     element.className = elementClass;
//     element.setAttribute('type', 'text');
//     element.setAttribute('name', name);
//     element.setAttribute('placeHolder', placeholder);
//     element.setAttribute('cols', cols);
//     element.setAttribute('rows', rows);
//     element.id = elementId;
//     return element;

// }

// console.log(globalFormElements('input', 'text', 'example', 'form-control bg-primary', 'type your example here' ));
// console.log(globalFormElements('textarea', 'text', 'message', 'form-control bg-danger', 'type your example here' ));