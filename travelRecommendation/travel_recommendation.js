const fetchData = async () => {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const searchContent = document.getElementById('search_content');

    try {
        const response = await fetch('travel_recommendation.json');
        const data = await response.json();

        if (input.includes('beach') || input.includes('beaches')) {
            // Clear previous content
            searchContent.innerHTML = '';

            // Create HTML elements for each beach and append to searchContent
            data.beaches.forEach((beach) => {
                // Create HTML string for beach information
                const beachHTML = `
                    <div class="search_div">
                        <img src="${beach.imageUrl}" alt="${beach.name}"/>
                        <div class="search_texts">
                            <h2>${beach.name}</h2>
                            <p>Location: ${beach.location}</p>
                            <p>Description: ${beach.description}</p>
                            <button>Visit</button>
                        </div>
                    </div>
                `;

                // Append beachHTML to searchContent
                searchContent.innerHTML += beachHTML;
            });
        }
        if (input.includes('temple') || input.includes('temples')) {
            // Clear previous content
            searchContent.innerHTML = '';

            // Create HTML elements for each beach and append to searchContent
            data.temples.forEach((temple) => {
                // Create HTML string for beach information
                const templeHTML = `
                    <div class="search_div">
                        <img src="${temple.imageUrl}" alt="${temple.name} "/>
                        <div class="search_texts">
                            <h2>${temple.name}</h2>
                            <p>Location: ${temple.location}</p>
                            <p>Description: ${temple.description}</p>
                            <button>Visit</button>
                        </div>
                    </div>
                `;

                // Append beachHTML to searchContent
                searchContent.innerHTML += templeHTML;
            });
        }
        if (input.includes('country') || input.includes('countries')) {
            // Clear previous content
            searchContent.innerHTML = '';
        
            // Create HTML elements for each country and append to searchContent
            data.countries.forEach((country) => {
                // Create HTML string for country information
                let citiesHTML = country.cities.map(({ name, imageUrl, description }) => `
                    <div class="search_texts">
                        <img src="${imageUrl}" alt="${name}" />
                        <p>Name: ${name}</p>
                        <p>Description: ${description}</p>
                        <button>Visit</button>
                    </div>
                `).join(''); // Join the array of city HTML strings into a single string
        
                const countryHTML = `
                    <div class="search_div">
                        <h2>${country.name}</h2>
                        ${citiesHTML} <!-- Include the concatenated city HTML here -->
                    </div>
                `;
        
                // Append countryHTML to searchContent
                searchContent.innerHTML += countryHTML;
            });
        } else if(input === ''){
            searchContent.innerHTML = '';
        }       
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

fetchData();
