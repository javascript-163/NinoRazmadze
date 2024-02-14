// 1.DOM-ის მეშვეობით გააკეთეთ ისე, რომ ფოტოს ზომის გაზრდისა და ზომის შემცირების ღილაკებზე დაჭერით არსებული სურათის ზომა (width) შეიცვალოს.

let button1 = document.getElementById("button1")
let img = document.getElementById("image")
function increase(){
    
    return img.width = 350;
}
let button2 = document.getElementById("button2")
function reduce(){
    if(img.with = 350) {
        img.width = 300
    }
}

