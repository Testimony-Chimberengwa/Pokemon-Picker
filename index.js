

// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response => response.json())
// .then(data => console.log(data.name))

async function fetchData() {
    try{
        const pokemonName=document.getElementById("pokemonname").value.toLocaleLowerCase();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error('Network response was not ok')

         }
         const data=await response.json()
        const pokemonSprite=data.sprites.front_default;
        const imageElement=document.getElementById("Pokemonsprite")
        imageElement.src=pokemonSprite
        imageElement.style.display="block"
    }catch(error){
        console.error(error);
        
    }
}

