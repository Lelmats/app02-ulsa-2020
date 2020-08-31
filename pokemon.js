const urlList = JSON.parse(sessionStorage.getItem('urlList'));
const sprite = sessionStorage.getItem('sprite');

const PokemonName = document.getElementById('pokemon-name');
const PokemonImage = document.getElementById('pokemon-images');
const PokemonAbility = document.getElementById('pokemon-abilities');
const PokemonType = document.getElementById('pokemon-types');
//console.log(sprite);
//console.log(urlList);

const GetPokemon = ()=>{
    const spriteName = sprite.replace('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/', '');
    const spriteNumber = spriteName.replace('.png', '');
    
    urlList.forEach(element => {
        let pokemonNumber = element.replace('https://pokeapi.co/api/v2/pokemon/', '');
        pokemonNumber = pokemonNumber.replace('/', '');
        console.log(sprite);
        if( pokemonNumber== spriteNumber)
        {
            PokedexPoke(element);
            PokemonImage.innerHTML = `<img src="${sprite}" alt="Pokemon"class="nigs"> `;
        }
    });
}
const PokedexPoke = async url =>
{
    fetch(url).then(data => data.json()).then(json =>
        {
            const pokemonName = json.name;
            PokemonName.innerHTML = `${pokemonName}`;
            
            Poketype = json.types;
            Poketype.forEach(type=>{
            const pokemonType = type.type.name;
            PokemonType.innerHTML = `<li>${pokemonType}</li>`
        })

        json.abilities.forEach(ability => {
            const pokemonAbility = ability.ability.name;
            PokemonAbility.innerHTML = `<li>${pokemonAbility}</li>`
        })
    })
}


GetPokemon();