function leer(){
    const pelicula = document.getElementById('input').value;
    const key = '6227ea59';
    const api_url = `http://www.omdbapi.com/?s=${pelicula}&apikey=${key}`;
    buscar1(api_url);
}

function buscar1(api_url){
    fetch(api_url)
        .then(data => {
            return data.json()
        }).then(resultado => {
            console.log("Listado XORIZO:" + resultado);
            const {Search=[]} = resultado;

            console.log(Search);
            document.getElementById("lista").innerHTML='';

            Search.map((p) => {
                document.getElementById("lista").innerHTML+=
                `<div class="thumbnail">
                    <div class="img_movie">
                        <img src=${p.Poster} alt="No hay imágen"></img>
                    </div>
                    <div class="details_movie">
                        <h3>${p.Title}</h3>
                        <h4>Año: ${p.Year}</4>
                        <p>Precio: $10,000</p>
                        <div class="buttons">
                        <button class="btn_add">Add</button>
                        <button class="btn_remove">Remove</button>
                        </div>
                    </div>
                </div>`;
            })
        });
}

