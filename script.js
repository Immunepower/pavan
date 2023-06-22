const searchInput = document.getElementById('food-search');
const searchButton = document.getElementById('search-button');
const resultsContainer = document.getElementById('results-container');

// Function to search and display food calories
function searchFood() {
  const searchTerm = searchInput.value.toLowerCase();

  // Clear previous results
  resultsContainer.innerHTML = '';

  // TODO: Send an API request to retrieve food data based on the search term
  // Replace the code below with your API request implementation

  // Mock data for demonstration purposes
  const foodData = [
    { name: 'Apple', calories: 52 },
    { name: 'Banana', calories: 96 },
    { name: 'Chicken Breast', calories: 165 },
    { name: 'Salmon', calories: 206 },
    // Add more food items as needed
  ];

  // Find matching food items
  const matchingItems = foodData.filter(item => item.name.toLowerCase().includes(searchTerm));

  // Display results
  if (matchingItems.length > 0) {
    matchingItems.forEach(item => {
      const resultElement = document.createElement('p');
      resultElement.innerText = `${item.name}: ${item.calories} calories`;
      resultsContainer.appendChild(resultElement);
    });
  } else {
    const noResultElement = document.createElement('p');
    noResultElement.innerText = 'No matching food items found.';
    resultsContainer.appendChild(noResultElement);
  }
}

// Attach event listener to search button
searchButton.addEventListener('click', searchFood);