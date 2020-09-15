console.log("fruits");
var fruits = ["Banana", "Orange", "Apple", "Mango"];

function myFunction() {
  
  fruits.push("Kiwi");
  
  //console.log(fruits);
  //console.log(fruits.length);

  let outputArray = [];

  for(var i = 0; i< fruits.length; i = i + 2){
    let row = [];
    let firstItem;
    let secondItem;
    let pairArray = [];
    if ( i < fruits.length - 2 ) {
      firstItem = fruits[i];
      secondItem = fruits[i+1];
      pairArray = [firstItem, secondItem]
    } else {
      firstItem = fruits[i];
      pairArray = [firstItem]
    }
    
    row.push(pairArray);
    outputArray.push(row);

    console.log(outputArray);
  }
}

myFunction();