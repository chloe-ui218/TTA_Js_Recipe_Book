const recipes = [
    {
        title: "Spaghetti Bolognese",
        ingredients: "spaghetti, Ground Beef, Tomato Sauce, Onions, Garlic, Olive Oil",
        steps: "1. Boil Pasta. 2. Cook Ground Beef. 3. Add Sauce and garlic, Onion, and Garlic. 4. Mix with pasta."
    },

    {
        title: "Chicken Curry",
        ingredients: "chicken, Curry powder, coconut milk, Onions, Garlic, Ginger",
        steps: "1. Cook chicken. 2. Add onions, garlic, ginger. 3. Add coconut milk and curry powder. 4. simmer."
    },

    {
        title: "Vegetable Stir-fry",
        ingredients: "Broccoli, Carrots, Bell peppers, Soy sauce, Garlic, Olive Oil",
        steps: "1. Stir-fry vegetables on olive oil. 2. Add garlic and soy sauce. 3. serve with rice."
    },
];

const displayRecipes = () => {
    const recipeList = document.querySelector('#recipeList');
    recipeList.innerHTML = "";

    recipes.forEach((recipe) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("bg-white", "p-4", "rounded", "shadow", "mb-4");
        recipeCard.innerHTML = `
            <h2 class="text-xl font-bold">${recipe.title}</h2>
            <p class="font-bold text-gray-600"><strong>Ingredients: &emsp;</strong>${recipe.ingredients}</p>
            <p class="text-sm"><strong>Steps: &emsp;</strong>${recipe.steps}</p>}
        `;
        recipeList.appendChild(recipeCard);
    })
}

const addRecipe = (event) => {
    event.preventDefault();

   const recipeTitle = document.getElementById("recipeTitle").value.trim();
   const recipeIngredients = document.getElementById("recipeIngredients").value.trim();
   const recipeSteps = document.getElementById("recipeSteps").value.trim();

 if(recipeTitle !== "" && recipeIngredients !== "" && recipeSteps.trim() !== "") {

    const isDuplicate = recipes.some((recipe) => recipe.title.toLowerCase() === recipeTitle.toLowerCase());

    if (isDuplicate) {
        alert("Recipe already exists");
    } else {

    }

    const newRecipe = {
        title: recipeTitle,
        ingredients: recipeIngredients,
        steps: recipeSteps
    }
    recipes.push(newRecipe);

   document.getElementById("recipeTitle").value = "";
   document.getElementById("recipeIngredients").value = "";
   document.getElementById("recipeSteps").value = "";

    displayRecipes();

} else{
    alert("Please fill out all fields");
  }
}

// const recipeForm = document.getElementById("recipeForm");
// recipeForm.addEventListener("submit", addRecipe);

document.getElementById("addRecipe").addEventListener("click", addRecipe);

displayRecipes();


