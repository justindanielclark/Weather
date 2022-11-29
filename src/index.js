import './style.css';

const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
}

for(let key in elvenShieldRecipe){
  const p = document.createElement('p');
  p.innerText = `${key}: ${elvenShieldRecipe[key]}`
  document.body.append(p)
}