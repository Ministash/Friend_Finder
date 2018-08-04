let friendsData = [
    {
        "name": "Hunter",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5, 4, 5, 5, 5, 5, 4, 5, 3, 2
        ]
    },
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [
            5, 1, 4, 4, 5, 1, 2, 5, 4, 1
        ]
    }
      
];

// let newScore = [
//     1, 1, 1, 4, 5, 5, 4, 3, 1, 1];


// let resultsArr = [];

// for (let i = 0; i < friendsData.length; i++) {
//     let count = 0;
//     let compare = friendsData[i].scores;
//     for (let j = 0; j < compare.length; j++) {
//         count += Math.abs(compare[j] - newScore[j]);
//     }

//     let obj = {
//         name: "bob",
//         photo: "",
//         dif: count
//     };

//     resultsArr.push(obj);
// }

// console.log(resultsArr);
// let test = resultsArr.sort((a, b) => {
//     return a.dif - b.dif;
// })

// console.log(test);

module.exports = friendsData;