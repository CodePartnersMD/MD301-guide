'use strict';

function Image( item ) {
  this.image_url = item.image_url;
  this.title = item.title;
  this.description = item.description;
  this.keyword = item.keyword;
  this.horns = item.horns;
}

Image.all = [];

Image.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let templateClone = $('div[class="clone"]')
  templateClone.html($('#photo-template').html())
  templateClone.find('h2').text(this.title);
  templateClone.find('img').attr('src', this.image_url);
  templateClone.find('p').text(this.description);
  templateClone.attr('class', this.keyword);
  templateClone.removeClass('clone');
}

Image.readJson = () => {
  $.get('page-1.json').then( data => {

    data.forEach(item => {
      Image.all.push( new Image( item ));
    })

    Image.sortBy( Image.all, 'title' );

    Image.all.forEach( image => {
      $( 'main' ).append( image.render() );
    })

  }, 'json')
    .then( Image.populateFilter )
    .then( Image.handleFilter )
    .then( Image.handleSort );
}

Image.sortBy = ( array, property ) => {
  array.sort( ( a, b ) => {
    let firstComparison = a[property];
    let secondComparison = b[property];
    return ( firstComparison > secondComparison ) ? 1 : ( firstComparison < secondComparison ) ? -1 : 0;
  });
}

Image.handleSort = () => {
  $('input').on('change', function() {
    $('select').val('default');
    $('div').remove()
    Image.sortBy(Image.all, $(this).attr('id'))
    Image.all.forEach(image => {
      $( 'main' ).append( image.render() );
    })
  })
}

Image.populateFilter = () => {
  let filterKeywords = [];

  $('option').not(':first').remove();

  Image.all.forEach(image => {
    if ( !filterKeywords.includes( image.keyword ) ) filterKeywords.push( image.keyword );
  })

  filterKeywords.sort();

  filterKeywords.forEach( keyword => {
    let optionTag = `<option value="${keyword}">${keyword}</option>`;
    $( 'select' ).append( optionTag );
  })
}

Image.handleFilter = () => {
  $( 'select' ).on('change', function() {
    let selected = $(this).val();
    if( selected !== 'Filter By Keyword' ) {
      $( 'div' ).hide();

      Image.all.forEach(image => {
        if ( selected === image.keyword ) {
          $( `div[class="${selected}"` ).fadeIn();
        }
      })

      $( `option[value=${selected}]` ).fadeIn();
    }
  })
}

$(() => Image.readJson());
