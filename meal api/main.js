const search = document.querySelector('.search');
const searchBtn = document.querySelector('button');



searchBtn.addEventListener('click', getMeal);

function getMeal(meal) {
    const searchItem = search.value;
    fetch('https://api.spoonacular.com/food/products/search?query=`${searchItem}`&apiKey=20cf2731cfd84be5b4c1bc56420f079b')
        .then(res => res.json())
        .then(res => {
        console.log(res);
        })
}













    // fetch("https://yummly2.p.rapidapi.com/feeds/search?FAT_KCALMax=1000&maxTotalTimeInSeconds=7200&allowedAttribute=diet-lacto-vegetarian%252Cdiet-low-fodmap&q=chicken%20soup&start=0&maxResult=18", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "yummly2.p.rapidapi.com",
    //         "x-rapidapi-key": "e933a5dec9msha111c6876545256p132973jsn435f54196d91"
    //     }
    // })
    // .then(response => {
    //     console.log(response.json());
    // })
    // .catch(err => {
    //     console.log(err);
    // });







    // fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res);
    //     })