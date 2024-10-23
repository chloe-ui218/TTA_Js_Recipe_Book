let recipes = [];
const displayRecipes = () => {
    const recipeList = document.querySelector('#recipeList');
    recipeList.innerHTML = "";

    recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("bg-white", "p-4", "rounded", "shadow", "mb-4");

        recipeCard.innerHTML = `
            <h2 class="text-xl font-bold">${recipe.title}</h2>
            <p class="font-bold text-gray-600"><strong>Ingredients: &emsp;</strong>${recipe.ingredients}</p>
            <p class="text-sm"><strong>Steps: &emsp;</strong>${recipe.steps}</p>
            <button class="bg-blue-500 px-2 py-1 mt-4 rounded mt-2" onclick="editRecipe(${index})">Edit</button>
            <button class="bg-red-500 text-white px-2 py-1 rounded mt-2" onclick="deleteRecipe(${index})">
            Delete</button>
        `;
        recipeList.appendChild(recipeCard);
    })
}

const saveRecipeToLocalStorage = () => {
    localStorage.setItem("recipes", JSON.stringify(recipes))
}
const loadRecipesFromLocalStorage = () => {
    const storedRecipes = localStorage.getItem("recipes");

    if (storedRecipes) {
        recipes = JSON.parse(storedRecipes);
    }
}

const showError = (elementId, message) => {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.classList.remove("hidden");
}

const hideError = (elementId) => {
    const errorElement = document.getElementById(elementId);
    errorElement.classList.add("hidden");
}

const addRecipe = (event) => {
    event.preventDefault();

   const recipeTitle = document.getElementById("recipeTitle").value.trim();
   const recipeIngredients = document.getElementById("recipeIngredients").value.trim();
   const recipeSteps = document.getElementById("recipeSteps").value.trim();
}

 hideError("titleError");
 hideError("ingredientsError");
 hideError("stepsError");

 let isvalid = true;

 if(recipeTitle === "") {
    showError("titleError", "please enter the recipe title");
    isValid = false;

    if(recipeIngredients === "") {
        showError("ingredientsError", "Please enter the recipe ingredients");
        isValid = false;
    }

    if(recipeSteps === "") {
        showError("stepsError", "Please enter the recipe steps");
        isValid = false;
    }
    
 }
 if (isValid){
    const isDuplicate = recipes.some((recipe) => recipe.title.toLowerCase() === recipeTitle.toLowerCase());

    if (isDuplicate) {
        alert("Recipe already exists");
    } else {
        const newRecipe = {
            title: recipeTitle,
            ingredients: recipeIngredients,
            steps: recipeSteps
        }
        recipes.push(newRecipe);

        document.getElementById("recipeTitle").value = "";
        document.getElementById("recipeIngredients").value = "";
        document.getElementById("recipeSteps").value = "";
        
        saveRecipeToLocalStorage();
        displayRecipes();
        }
    }
const editRecipe = (index) => {
    const recipeTitle = prompt("Enter the new recipe title", recipes[index].title);
    const recipeIngredients = prompt("Enter the new recipe ingredients", recipes[index].ingredients);
    const recipeSteps = prompt("Enter the new recipe steps", recipes[index].steps);

    if(UpdatedRecipeTitle && UpdatedRecipeIngredients && UpdatedRecipeSteps) {
        recipes[index].title = UpdatedRecipeTitle;
        recipes[index].ingredients = UpdatedRecipeIngredients;
        recipes[index].steps = UpdatedRecipeSteps;
        
        saveRecipeToLocalStorage();
        displayRecipes();
            
    }
}

const deleteRecipe = (index) => {
    recipe.splice(index, 1);
    saveRecipeToLocalStorage();
    displayRecipes();
}
 
document.getElementById("addRecipe").addEventListener("click", addRecipe);

loadRecipesFromLocalStorage();
displayRecipes();
 