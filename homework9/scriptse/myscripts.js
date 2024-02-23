// შექმენით ერთგვარი ტექსტური ფაილის ანალიზატორი.
// 1. მომხმარებელს მოთხოვეთ აირჩიოს სასურველი ტექსტური ფაილი, read file-ზე დაჭერისას კი წაიკითხეთ ამ ფაილის კონტენტი.
// 2. დაადგინეთ ფაილში არსებული საერთო სიმბოლოოების რაოდენობა
// Total symbols: 150,
// 3. დაადგინეთ ფაილში არსებული საერთო სიტყვების ოდენობა
// Total Words: 78
// 4. დაადგინეთ ფაილში არსებული ყველაზე გრძელი და ყველაზე მოკლე სიტყვა
// Longest Word: beautiful
// Shortest Word: sad
// 5. დაადგინეთ ფაილში არსებული სიტყვების საშუალო არითმეტიკული ზომა (საშუალო ზომა გამოითვლება თითოეული სიტყვის ზომა გაყოფილი მათ საერთო რაოდენობაზე)


function LoadFile() {
  return new Promise((resolve, reject) => {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function (event) {
        document.getElementById("textInput").value = event.target.result;
        const textInput = document.getElementById("textInput");
        let text = textInput.value;
        let symbolCount = {};
        for (let i = 0; i < text.length; i++) {
          let symbol = text[i];
          if (symbolCount[symbol]) {
            symbolCount[symbol]++;
          } else {
            symbolCount[symbol] = 1;
          }
        }

        resolve(symbolCount);
        let totalSymbols = 0;
        for (let symbol in symbolCount) {
          totalSymbols += symbolCount[symbol];
        }
        let answer1 = document.getElementById("answer1");
        answer1.innerHTML = "Total Symols:" + totalSymbols;

        let words = text.split(" ");
        let totalWords = words.length;

        let answer2 = document.getElementById("answer2");
        answer2.innerHTML = "Total Words:" + totalWords;

        let longestWord = " ";
        for (let i = 0; i < words.length; i++) {
          if (words[i].length > longestWord.length) {
            longestWord = words[i];
          }
        }
        let answer3 = document.getElementById("answer3");
        answer3.innerHTML = 'Longest Word:' + longestWord

        let shortestWord = words[0]
        for(let i = 1; i < words.length; i++) {
          if (words[i].length <= shortestWord.length) {
            shortestWord = words[i]
          }
         
          let answer4 = document.getElementById('answer4');
          answer4.innerHTML = 'Shortest Word:' + shortestWord

        }
      
        let totalLenght = 0;
        for(let i = 0; i < words.length; i++){
          totalLenght += words[i].length
        }
        let arithmeticMean = totalLenght / words.length;

      let answer5 = document.getElementById('answer5')
      answer5.innerHTML = 'Arithmetical Mean:' + arithmeticMean

      };

      reader.onerror = function () {
        reject(new Error("Error reading file"));
      };
    } else {
      reject(new Error("No file selected"));
    }
  });
}
