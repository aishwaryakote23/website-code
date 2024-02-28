function fetchClasses() {
    fetch('data/classes.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayClasses(data);
            
        })
        .catch(error => console.error('Error fetching classes:', error));

}

function displayClasses(classes){
    const classesList=document.getElementById('classes-list');

    classesList.innerHTML='';

    classes.forEach(classItem => {
        const classCard=document.createElement('div');
        classCard.classList.add('col-md-4');
        classCard.innerHTML=
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${classItem.title}</h5>
                    <p class="card-text">${classItem.description}</p>
                    <p class="card-text">${classItem.instructor}</p>
                </div>
            </div>
    });
}

window.onload=fetchClasses;