window.onload = event =>{
    var Btn = document.getElementById('searchBtn');
    
    Btn.onclick = event => {
        //fetch('superheroes.php' ,{method: 'get'})
        fetch('superheroes.php')
        .then(response =>{
            return response.text(); // return the response as text
        })
        .then(data =>{
            alert(data);
        });
    }
}