'use strict';

function Image(item) {
  this.image_url = item.image_url;
  this.title = item.title;
  this.description = item.description;
  this.keywords = item.keywords;
}

Image.prototype.render = function() {
  let template = Handlebars.compile($('#photo-template').html());
  return template(this);
}

Image.readJson = (page) => {
  Image.all = [];

  $('main div').empty();

  $.get(`page-${page}.json`).then(data => {

    data.forEach(item => {
      Image.all.push(new Image(item));
    })

    Image.sortBy(Image.all, 'title');

    Image.all.forEach(image => {
      $('#image-container').append(image.render());
    })

  }, 'json')
    .then(Image.populateFilters);
}

Image.sortBy = function(array, property) {
  array.sort((a,b) => {
    let firstComparison = a[property];
    let secondComparison = b[property];
    if(firstComparison > secondComparison) return 1;
    if(firstComparison < secondComparison) return -1;
    return 0;
  });
}

$('input').on('change', function(event) {
  event.preventDefault();
  $('div').remove()
  Image.sortBy(Image.all, $(this).attr('id'))
  Image.all.forEach(image => {
    image.render();
  })
})

Image.populateFilters = function() {
  let filterKeywords = [];

  Image.all.forEach(image => {
    image.keywords.forEach(keyword => {
      if (!filterKeywords.includes(keyword)) filterKeywords.push(keyword);
    });
  })

  filterKeywords.forEach(keyword => {
    let optionTag = `<option value="${keyword}">${keyword}</option>`;
    $('select').append(optionTag);
  })
}

$('select').on('change', function() {
  $('div').hide();

  Image.all.forEach(image => {
    image.keywords.forEach(keyword => {
      if ($(this).val() === keyword) {
        $(`div[class="${$(this).val()}"`).fadeIn();
      }
    })
  })

  $(`option[value=${$(this).val()}]`).fadeIn();
})

$('footer ul').on('click', 'li', function() {
  Image.readJson($(this).attr('id'));
})

Image.readJson(1);
