javascript:(function(){

  function slugify(text) {

    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  try{
    id = document.getElementsByClassName('gh-header-number')[0].innerHTML.trim().replace('#','');
    ticket_title = document.getElementsByClassName('js-issue-title')[0].innerHTML.trim();
    slug = slugify(id + "-" + ticket_title);
    prompt("Here is your slugified title for your current Github Issue", slug);
  }

  catch(e){
    alert('You are not on a Github Issues page.');
  }
})();
