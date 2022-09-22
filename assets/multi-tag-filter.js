document.querySelectorAll('.multi-tag-filter__container input').forEach(item => {
  item.addEventListener('change', checkAllFilters);
});

function checkAllFilters(){
  const path = window.location.pathname.split('/');
  let url = '/collections/unsere-bunten-vogel/';
  let tags = [];

  if(path.length > 2){
    url = '/' + path[1] + '/' + path[2] + '/';
  }

  document.querySelectorAll('.multi-tag-filter__container input').forEach(item => {
    if(item.checked){
      tags.push(item.value);
    }
  });
  
  url += tags.join('+');
  
  window.location.href = url;
}

document.querySelectorAll('.tag-filter--title').forEach(item => {
  const parent = item.parentNode;
  const filterName = 'multiTagFilter-' + parent.getAttribute('data-filter-id');

  item.addEventListener('click', event => {
      parent.classList.toggle('active');
      
      sessionStorage.setItem(filterName, parent.classList.contains('active'));
  });

  if(sessionStorage.getItem(filterName) === 'true'){
      parent.classList.add('active');
  };

  if(parent.querySelectorAll('.tag-filter--content input').length < 1){
      parent.classList.add('hide');
  };
});