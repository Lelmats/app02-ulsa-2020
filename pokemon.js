const urlList = JSON.parse(sessionStorage.getItem('urlList'));
const sprite = sessionStorage.getItem('sprite');

const PokemonName = document.getElementById("pokemon-name");
const PokemonImage = document.getElementById("pokemon-image");
//console.log(sprite);
//console.log(urlList);

const GetPokemon = ()=>{
    const spriteName = sprite.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/', '');
    const spriteNumber = spriteName.replace('.png', '');
    //console.log(spriteNumber);
    urlList.forEach(element => {
        let pokemonNumber = element.replace('https://pokeapi.co/api/v2/pokemon/', '');
        pokemonNumber = pokemonNumber.replace('/', '');
        if(spriteNumber == pokemonNumber)
        {
            PokedexPoke(element);
            PokemonImage.innerHTML = "<img src=`Name: ${name}>"
        }
    });
}
const PokedexPoke = async url =>
{
    fetch(url).then(data => data.json()).then(json =>
        {
            const pokemonName = json.name;
            console.log(pokemonName);
            PokemonName.innerHTML = `Name: ${pokemonName}`;
        })
        
}


GetPokemon();