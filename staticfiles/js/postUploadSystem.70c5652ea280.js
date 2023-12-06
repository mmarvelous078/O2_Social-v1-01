document.getElementById('imageUploadIcon').addEventListener('click',()=>{
    document.getElementById('imageSelectorInput').click()
})

// image preview
function previewPost(event) {
    const input = event.target;
    const preview = document.getElementById('postPreview');
    const imgElement = preview.querySelector('img');
    
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imgElement.src = e.target.result;
        };

        reader.readAsDataURL(file);
        
    } else {
        imgElement.src = ''; // Clear the preview if no file is selected
    }
}

document.getElementById('contentUploadForm').addEventListener('submit', (event)=>{
    event.preventDefault()

    document.getElementById("postButton").disabled = true;

    let formName = document.querySelector('#contentUploadForm');

    let contentText = document.querySelector('input[name="content"]').value;
    let contentImage = document.querySelector('input[name="contentImage"]').files[0];

    if(!contentImage) {
        alert('Please provide a title and select an Image.');
        postButton.disabled = false;
        return;
    }

    let formData = new FormData(formName);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/createPost/' ,true)
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200) {
                console.log('Upload sucessful');
                window.location.href = "/"
            } else {
                console.log('Error:', xhr.status, xhr.statusText);
            }
        }
    };
    xhr.send(formData);
});