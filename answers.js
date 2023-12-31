////////////////////////////////
// Easy Going
////////////////////////////////
for (let i = 1; i <= 20; i++) {
console.log(i)
}
////////////////////////////////
// Get Even
////////////////////////////////
for (let i = 0; i <= 200; i += 2) {
    console.log(i)
}

////////////////////////////////
// Fizz Buzz
////////////////////////////////
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}



////////////////////////////////
// Wild Wild Life
////////////////////////////////
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2] = plantee[2] + 1;

wolfy[3] = "Gotham City"

dart[3] = "Upside Down, Hawkins"

wolfy[1] = "Gameboy"

////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
const ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (const turtle of ninjaTurtles) {
    console.log(turtle.toUpperCase());
}


////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies[8])

//this put them in alphabetical order
favMovies.sort();

// adds Guardian of the galaxy to the array
favMovies.push('Guardians of the galaxy')

// reverses the array
favMovies.reverse()

favMovies.shift()

favMovies.unshift()

favMovies.splice('Django unchained', 'Avatar')
console.log(favMovies)

////////////////////////////////
// Where is Waldo
////////////////////////////////

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];


whereIsWaldo.splice(1,1);   

whereIsWaldo[2].splice(2, 2, 'No One');
console.log(whereIsWaldo)

////////////////////////////////
//  Excited Kitten
////////////////////////////////

for (let i = 0; i < 20; i++) {
    console.log("Love me, pet me! HSSSSSS!");
}

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) { // Check if the number is even
        // Array of phrases
        const phrases = [
            "...human...why you taking pictures of me?...",
            "...the catnip made me do it...",
            "...why does the red dot always get away..."
        ];

        // Select a random phrase
        const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
        console.log(randomPhrase);
    } else {
        console.log("Love me, pet me! HSSSSSS!");
    }
}

////////////////////////////////
//  Find the Median
////////////////////////////////

const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

// Sort the array
nums.sort(function(a, b) {
    return a - b;
});

// Find the middle index
const middleIndex = Math.floor(nums.length / 2);

// Find the median
let median;
if (nums.length % 2 === 0) {
    
    median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
} else {
   
    median = nums[middleIndex];
}

console.log(median);

