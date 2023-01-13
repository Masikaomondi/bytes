const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2084cfc5d4mshbc2547b873e1f4ep17fd64jsn7c62bf700df8',
		'X-RapidAPI-Host': 'nutrition-by-api-ninjas.p.rapidapi.com'
	}
};


//fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=1lb%20brisket%20with%20fries', options)
	//.then(response => response.json())
	//.then(response => console.log(response))
	//.catch(err => console.error(err));


let nutrition = {


    fetchDetails: function(query)
    {
        fetch('https://nutrition-by-api-ninjas.p.rapidapi.com/v1/nutrition?query=' + query, options)
        .then(response => response.json())
        //.then(response => console.log(response))
        .then(response => this.displayDetails(response[0]))
        .catch(err => console.error(err));
        //document.querySelector(".query").innerText = "Nutrition Details of " + query;

    },

    displayDetails: function(response)
    {
        const { name } = response;
        const { calories } = response;
        const { serving_size_g } = response;
        const { fat_total_g } = response;
        const { fat_saturated_g } = response;
        const { protein_g } = response;
        const { sodium_mg } = response;
        const { potassium_mg } = response;
        const { cholesterol_mg } = response;
        const { carbohydrates_total_g } = response;
        const { fiber_g } = response;
        const { sugar_g } = response;
        //console.log(name,calories,serving_size_g,fat_total_g,fat_saturated_g,protein_g,sodium_mg,potassium_mg,
           // cholesterol_mg,carbohydrates_total_g,fiber_g,sugar_g)
        document.querySelector(".name").innerText = "name: " + name;
        document.querySelector(".calories").innerText = "calories: " + calories;
        document.querySelector(".serving_size_g").innerText = "serving_size_g: " + serving_size_g;
        document.querySelector(".fat_total_g").innerText = "fat_total_g: " + fat_total_g;
        document.querySelector(".fat_saturated_g").innerText = "fat_saturated_g: " + fat_saturated_g;
        document.querySelector(".protein_g").innerText = "protein_g: " + protein_g;
        document.querySelector(".sodium_mg").innerText = "sodium_mg: " + sodium_mg;
        document.querySelector(".potassium_mg").innerText = "potassium_mg " + potassium_mg;
        document.querySelector(".cholesterol_mg").innerText = "cholesterol_mg: " + cholesterol_mg;
        document.querySelector(".carbohydrates_total_g").innerText = "carbohydrates_total_g: " + carbohydrates_total_g;
        document.querySelector(".fiber_g").innerText = "fiber_g: " + fiber_g;
        document.querySelector(".sugar_g").innerText = "sugar_g: " + sugar_g;
        document.querySelector(".nutrition").classList.remove("loading");

    },
    search: function (){
        this.fetchDetails(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function (){
    nutrition.search();

});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        nutrition.search();
    }
});

nutrition.fetchDetails("brisket");
