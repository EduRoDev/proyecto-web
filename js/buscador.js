document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const plantGrid = document.getElementById('plantas'); 
    const plantItems = plantGrid.querySelectorAll('.flex.flex-col');
    const searchResults = document.getElementById('searchResults');

    function searchPlants() {
        const searchTerm = searchInput.value.toLowerCase();
        let matchCount = 0;
        
        plantItems.forEach(item => {
            const plantName = item.querySelector('h3');
            const scientificName = item.querySelector('p');
            const plantNameText = plantName.textContent.toLowerCase();
            const scientificNameText = scientificName.textContent.toLowerCase();
            
            if (plantNameText.includes(searchTerm) || scientificNameText.includes(searchTerm)) {
                item.style.display = '';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                highlightText(plantName, searchTerm);
                highlightText(scientificName, searchTerm);
                matchCount++;
            } else {
                item.style.display = 'none';
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
            }
        });

        updateSearchResults(matchCount, searchTerm);
    }

    function highlightText(element, searchTerm) {
        const text = element.textContent;
        if (searchTerm === "") {
            element.innerHTML = text; 
            return;
        }
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        element.innerHTML = text.replace(regex, '<span class="bg-yellow-200">$1</span>');
    }

    function updateSearchResults(count, term) {
        if (term) {
            searchResults.textContent = `Se encontraron ${count} planta(s) para "${term}"`;
            searchResults.classList.remove('hidden');
        } else {
            searchResults.classList.add('hidden');
        }
    }

    searchButton.addEventListener('click', searchPlants);

    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchPlants();
        }
    });

    searchInput.addEventListener('input', searchPlants);

    
    plantItems.forEach(item => {
        item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    });
});