console.log( 'hello world' );
//string
let instructor = 'chris black'
//number
let students = 13;
//boolean
let taaffeite = true;

//Array - store a collection of things
//best practice is to store things of the same data type
let colors = ['orange', 'teal', 'green'];

//.pop removes an item from the end
colors.pop();
console.table( colors );

//.push adds an item to the end
colors.push('blue', 'pink');
console.table( colors );

//.shift removes an item from the beginning
colors.unshift('purple');
console.table( colors );

//.unshift adds an item to the beginning
// you can also assign it to a variable
let firstColorRemoved = colors.shift();
console.log(firstColorRemoved);

//access first color without removing it
let firstColor = colors[0];
console.log(firstColor);
console.table(colors);

//loops
//for of loop 99% of your code
let colorList = document.querySelector('#color-list');
for( let item of colors ){
    //repeated for each item in the array of colors
    console.log( 'color: ', item );
    colorList.innerHTML += '<div>' + item + '</div>';
}

// traditional for loop
let temperatureValues = ['72', '84', '93', '102', '76'];
//start, end, increment

//loop temp values
for( let i = 0; i < temperatureValues.length; i += 1 ){
    let temp = temperatureValues[i];
    console.log( 'the temperature is ', temp );
}

for( let temp of temperatureValues){
    console.log( temp );
}

//wjhile loop (least common)
let start = 0;
//end
while (start < 10 ){
    console.log( start );
    start +=1;
}


