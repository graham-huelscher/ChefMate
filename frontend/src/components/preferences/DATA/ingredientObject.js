import INGREDIENTS  from './INGREDIENTS'

const ingredientObject = {
    categoryHeader: 'Ingredient',
    pageType: 'ingredients',
    categoryTitles: ['Meats and Seafood', 'Fruits, Vegetables and Beans/Legumes', 'Dairy', 'Grains'],
    previous: '/preferences/meals-per-day/',
    next: '/preferences/cuisine-frequency/',
    searchOptions: INGREDIENTS.map(ingredient =>
        ({
            description: ingredient.description.toLowerCase(),
            searchValue: ingredient.searchValue,
            term: ingredient.term
        })),
}

export default ingredientObject