// შექმენით საიტი სადაც მომხმარებელს შეეძლება აირჩიოს მისთვის სასურველი სურათი, შემდეგში კი გამოიტანეთ ეს სურათი ეკრანზე.

function LoadFile(){
    return new Promise((resolve,reject) => {
        let fileInput = document.getElementById('fileInput')
        let file = fileInput.files[0];
        if(file) {
            let reader = new FileReader();
            reader.onload = function(event){
              let img = document.createElement('img')
              img.style.width = "500px"
              img.style.height = "300px"
                img.src = event.target.result
                let imgarea = document.getElementsByClassName("imgarea")[0]
                imgarea.innerHTML= ''
                imgarea.appendChild(img)
            }
            reader.readAsDataURL(file)
        }
    }
    
    
    
    )
}