'use strict';

function Image(item) {
  this.image_url = item.image_url;
  this.title = item.title;
  this.description = item.description;
  this.keyword = item.keyword;
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
    .then(Image.populateFilter)
    .then(Image.handleFilter)
    .then(Image.handleSort)
    .then(Image.detailView);
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

// $('input').on('change', Image.handleSort)

// Image.handleSort = function() {
//   $('div').remove()
//   Image.sortBy(Image.all, $(this).attr('id'))
//   Image.all.forEach(image => {
//     $('#image-container').append(image.render());
//   })
// }

Image.handleSort = function() {
  $('input').on('change', function() {
    $('div').remove()
    Image.sortBy(Image.all, $(this).attr('id'))
    Image.all.forEach(image => {
      $('#image-container').append(image.render());
    })
  })
}


Image.populateFilter = function() {
  let filterKeywords = [];

  $('option').not(':first').remove();

  Image.all.forEach(image => {
    if (!filterKeywords.includes(image.keyword)) filterKeywords.push(image.keyword);
  })

  filterKeywords.forEach(keyword => {
    let optionTag = `<option value="${keyword}">${keyword}</option>`;
    $('select').append(optionTag);
  })
}

// $('select').on('change', Image.handleFilter);

Image.handleFilter = function () {
  $('select').on('change', function() {
    console.log($(this).val())
    if($(this).val() !== 'Filter By Keyword') {
      $('div').hide();


      Image.all.forEach(image => {
  
        if ($(this).val() === image.keyword) {
          $(`div[class="${$(this).val()}"`).fadeIn();
        }
  
      })
      $(`option[value=${$(this).val()}]`).fadeIn();
    }



  })
}

$('footer ul, header ul').on('click', 'li', function() {
  Image.readJson($(this).attr('id'));
})

Image.detailView = function() {
  $('div').on('click', function() {
    $('div:first-child').empty();
    let $clone = $(this).clone();
    $clone.toggleClass('active');
    $('div:first-child').html($clone);
    $(window).scrollTop(0);
  });
}


Image.readJson(1);
// Image.handleFilter();
