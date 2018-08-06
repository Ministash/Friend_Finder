let friendsData = [
    {
        "name": "Hunter",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            "5", "4", "5", "5", "5", "5", "4", "5", "3", "2"
        ]
    },
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            "5", "1", "4", "4", "5", "1", "2", "5", "4", "1"
        ]
    },
    {
        "name": "Bob",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            "1", "1", "2", "2", "2", "2", "2", "2", "5", "5"
        ]
    },
    {
        "name": "Rachel",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            "1", "1", "2", "2", "2", "2", "2", "2", "5", "5"
        ]
    }
      
];

//This is where we decide who the newest person is
let newPerson = friendsData[friendsData.length - 1];

//This is where I take the score of that individual and turn the array into integers
let newScore = newPerson.scores.map(function (x){
    return parseInt(x);
});

//This is where all of the scores are stored
let resultsArr = [];

//This is my for loop that iterates over all of my friends data.
for (let i = 0; i < friendsData.length; i++) {

    /* Here we define the variable that will decide what the difference is between my newest person's count and and the current 
    person in the friendsData object's count. */
    let count = 0;

    //defining my compare variable
    let compare = friendsData[i].scores;

    //iterating over each person's score and comparing to the newest person's score
    for (let j = 0; j < compare.length; j++) {
        count = count + Math.abs(compare[j] - newScore[j]);

    }
        //Here I store that information from above in an object
            let obj = {
                name: friendsData[i].name,
                photo: friendsData[i].photo,
                dif: count
            };
    
            //finally, I push the information in the object into my results array.
            resultsArr.push(obj);


}

// console.log(resultsArr);
//sorting my entire results array.
let sortingFunction = resultsArr.sort((a, b) => {
    return a.dif - b.dif;
})

console.log(sortingFunction);

//Choosing who is the most compatible. If I chose the first index of the array, I would return the newest person, because they are the most compatible with themselves.
let theChoosenOne = sortingFunction[1];

console.log(theChoosenOne);

module.exports = friendsData, theChoosenOne;