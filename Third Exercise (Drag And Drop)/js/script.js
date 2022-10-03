const dropZone = document.querySelectorAll('.zone');

// window means the browser and that you are selecting the browser window
window.draggedDOM = null;

Array.from(dropZone).forEach(function(element){

    element.addEventListener('dragstart', dragStart);
    element.addEventListener('dragenter', dragEnter);
    element.addEventListener('dragover', function(event){

        event.preventDefault();
    });

    element.addEventListener('drop', dragDropped);

    element.addEventListener('dragend', function(){

        draggedDOM.style.opacity = 1;
    });
});

function dragStart(event) {

    const element = event.target;
    draggedDOM = element;
    element.style.opacity = 0.7;
}

function dragEnter() {

    const dropZone = this;
    const dragedElement = dropZone.querySelector("#element");

    if (dragedElement) return false;

    dropZone.appendChild(draggedDOM);

}

function dragDropped(event) {

    event.preventDefault();

    dropZone.appendChild(draggedDOM);
}


