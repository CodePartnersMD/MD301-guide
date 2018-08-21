'use strict';

function Image(item) {
  this.image_url = item.image_url;
  this.title = item.title;
  this.description = item.description;
  this.keywords = item.keywords;
}

Image.all = [];

Image.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let templateClone = $('div[class="clone"]')
  templateClone.html($('#photo-template').html())
  templateClone.find('h2').text(this.title);
  templateClone.find('img').attr('src', this.image_url);
  templateClone.find('p').text(this.description);
  templateClone.removeClass('clone');

  this.keywords.forEach(function(keyword) {
    templateClone.attr('class', keyword);
  })
}

Image.readJson = () => {
  $.get('page-1.json').then(data => {

    data.forEach(item => {
      Image.all.push(new Image(item));
    })

    Image.sortBy(Image.all, 'title');

    Image.all.forEach(image => {
      $('main').append(image.render());
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


Image.readJson();
