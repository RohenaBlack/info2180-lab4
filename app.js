onload = () => {
    var Btn = document.getElementById('searchBtn');
    var result = document.getElementById('result');
    var heroName= document.getElementById('searchBox');
    Btn.onclick = event => {
        /* A fetch request to the server. */
        fetch(`superheroes.php?query=${heroName.value}`, {
        method: 'GET'})
            //fetch(`superheroes.php?query=${heroName.value}`)
            .then(response =>{
                return response.text(); // return the response as text
            })
            .then(data =>{
                result.innerHTML= data;
            });
    }
    }