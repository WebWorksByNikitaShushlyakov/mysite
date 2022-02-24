const allForms = document.forms;
// console.log(allForms);
// console.log(allForms[0]);

const form1 = document.forms.form1;
console.log(form1.elements);
console.log(form1.elements.name_input);

const form1_inputText = form1.elements.name_input;
console.log(form1_inputText);//Получаем text_input
console.log(form1_inputText.form);//Получаем родительскую форму

const form1_textArea = form1.name_textarea;
form1_textArea.value = "Привет, я textarea"; //замена значения текста
