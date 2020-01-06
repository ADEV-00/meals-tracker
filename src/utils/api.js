// const API_ID = process.env.REACT_APP_API_ID;
// const APP_KEY = process.env.REACT_APP_APP_KEY;
// I left my API ID and APP KEY and that is why comment this two lines of code
export function fetchRecipes(food = "") {
  food = food.trim();

  return fetch(
    `https://api.edamam.com/search?q=${food}&app_id=cf472974&app_key=1d197d2eb03ab05cae41ac330e939391`
  )
    .then(res => res.json())
    .then(({ hits }) => hits.map(({ recipe }) => recipe));
}
