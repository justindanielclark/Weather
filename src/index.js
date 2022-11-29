import './Stylesheets/style.css';
import classes from './Stylesheets/classes';
document.body.className = classes.body;

const elvenShieldRecipe = {
  leatherStrips: 6,
  ironIngot: 3,
  refinedMoonstone: 4,
}

for(let key in elvenShieldRecipe){
  const p = document.createElement('p');
  p.className = 'text-red-500'
  p.innerText = `${key}: ${elvenShieldRecipe[key]}`
  document.body.append(p)
}