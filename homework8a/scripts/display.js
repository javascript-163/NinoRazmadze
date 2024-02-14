// 3. შექმენით ვებგვერდი რომელზეც იქნება მოცემული კონტენტის ჩვენებისა და დამალვის ღილაკი. მოცემულ ღილაკზე დაჭერისას უნდა მოხდეს კონტენტის გამოტანა ეკრანზე თუ კონტენტი დამალულია. ხოლო თუ კონტენტი ჩანს ეკრანზე ამ შემთხვევაში მისი დამალვა.



let p = document.querySelector('p')
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")

function show(){
   p.style.display = "block"
}

function hide(){
    p.style.display = "none"
}