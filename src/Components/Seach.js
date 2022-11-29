import classes from "../Stylesheets/classes";
const Search = (root) => {
  const _Elements = {
    searchContainer: document.createElement('div'),
    searchInput: document.createElement('input'),
  }

  _init(root)

  function _init(root){
    _Elements.searchInput.type = 'text';
    for(let element in _Elements){
      _Elements[element].className = classes[element];
    }
    _Elements.searchContainer.append(_Elements.searchInput);
    root.append(_Elements.searchContainer);
  }
}

export default Search;