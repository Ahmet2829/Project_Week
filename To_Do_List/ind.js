let addToDoButton = document.getElementById('Listeye_Ekle');
let Eklenecek = document.getElementById('Eklenecek_Yer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('Listeyi_Temizle');




addToDoButton.addEventListener('click', function () { 
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    Eklenecek.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    

    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    });


 
    paragraph.addEventListener('dblclick', function () {
        Eklenecek.removeChild(paragraph);
    });



    clearToDo.addEventListener('click', function () {
        paragraph.remove();
    })

})