const input=document.getElementById("search-input");
const searchBtn=document.getElementById("search-button");
const pName=document.getElementById("pokemon-name");
const pId=document.getElementById("pokemon-id");
const height=document.getElementById("height");
const weight=document.getElementById("weight");
const types=document.getElementById("types");
const image=document.getElementById("sprite");
const hp=document.getElementById("hp");
const attack=document.getElementById("attack");
const defense=document.getElementById("defense");
const specialAttack=document.getElementById("special-attack");
const specialDefense=document.getElementById("special-defense");
const speed=document.getElementById("speed");
const searchForm=document.getElementById("form");
const getPokemon=async ()=>{
  try{
    const searchedName=input.value.toLowerCase();
   const response=await fetch(`
   https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchedName}`);
   const data= await response.json();
   //setting in top-container
   pName.textContent=data.name.toUpperCase();
   pId.textContent=`#${data.id}`;
   //setting in middle-container
   height.textContent=`Height: ${data.height}`;
   weight.textContent=`Weight: ${data.weight}`;
   types.innerHTML=data.types
      .map(obj => `<span>${obj.type.name}</span>`)
      .join('');
   image.src=data.sprites.front_default;
  //setting bottom container
  
  hp.textContent=data.stats[0].base_stat;
  attack.textContent=data.stats[1].base_stat;
  defense.textContent=data.stats[2].base_stat;
  specialAttack.textContent=data.stats[3].base_stat;
  specialDefense.textContent=data.stats[4].base_stat;
  speed.textContent=data.stats[5].base_stat;
  }
  catch(error){
    resetDisplay();
    alert("Pokémon not found");
    return;
  }
}

const resetDisplay=()=>{
  pName.textContent="";
  pId.textContent="";
  height.textContent="";
  weight.textContent="";
  types.textContent="";
  image.src="";
  hp.textContent="";
  attack.textContent="";
  defense.textContent="";
  specialAttack.textContent="";
  specialDefense.textContent="";
  speed.textContent="";
}
searchForm.addEventListener('submit', e => {
  e.preventDefault();
  getPokemon();
});