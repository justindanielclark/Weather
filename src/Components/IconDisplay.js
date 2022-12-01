import IconMap from '../Assets/IconMap';
const IconDisplay = (root) => {
  const _El = {
    container: document.createElement('div'),
  }
  _El.container.className = 'flex flex-row flex-wrap gap-4'
  for(let icon in IconMap){
    const itemContainer = document.createElement('div');
    itemContainer.className = 'flex flex-col'
    const itemImg = document.createElement('img');
    itemImg.src = IconMap[icon];
    itemImg.className = 'w-28 h-28'
    const itemDescription = document.createElement('p');
    itemDescription.innerText = icon;
    itemDescription.className = 'text-neutral-100'
    itemContainer.append(itemImg, itemDescription)
    _El.container.append(itemContainer);
  }
  root.append(_El.container);
}
export default IconDisplay;