function previewFile() {
    var preview = document.querySelector('.img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    console.log('file is = ', file)
    if (file) {
        console.log('file = ', file)
        reader.readAsDataURL(file);
    } else {
        preview.src = '';
    }
}

let dragged;

document.addEventListener("drag", function(event) {
    dragged = event.target;
});

document.addEventListener("dragover", function(event) {
    event.preventDefault();
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    let offsetX = event.clientX - dragged.clientWidth / 2;
    let offsetY = event.clientY - dragged.clientHeight / 2;
    dragged.style.left = offsetX + "px";
    dragged.style.top = offsetY + "px";
});