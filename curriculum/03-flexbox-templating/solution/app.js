'use strict';

function Image( item ) {
  this.image_url = item.image_url;
  this.title = item.title;
  this.description = item.description;
  this.keyword = item.keyword;
  this.horns = item.horns;
}

Image.prototype.render = function() {
  let template = Handlebars.compile( $( '#photo-template' ).html() );
  return template(this);
}

Image.readJson = ( page ) => {
  Image.all = [];

  $( 'main' ).empty();

  $.get( `page-${page}.json` ).then( data => {

    data.forEach( item => {
      Image.all.push( new Image( item ) );
    })

    Image.sortBy( Image.all, 'title' );

    Image.all.forEach( image => {
      $( '#image-container' ).append( image.render() );
    })

  }, 'json' )
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

Image.handleSort = () => {
  $( 'input' ).on('change', function() {
    $('select').val('default');
    $('div').remove()
    Image.sortBy( Image.all, $(this).attr('id') )
    Image.all.forEach( image => {
      $( '#image-container' ).append( image.render() );
    })
  })
}

Image.handleImageEvents = () => {
  $( 'main' ).on( 'click', 'div', function(event) {
    event.stopPropagation();
    let $clone = $(this).clone();
    let elements = $clone[0].children;

    $( 'section' ).addClass( 'active' ).html( elements );

    $( window ).scrollTop( 0 );
  });

  $('body').on('click', function() {
    $( 'section' ).empty();
    $( 'section' ).removeClass( 'active' );
  })
}

Image.handleNavEvents = () => {
  $( 'footer ul, header ul' ).on( 'click', 'li', function() {
    $( '#image-container' ).empty();
    Image.readJson( $(this).attr('id') );
  })
}

$(() => {
  Image.readJson( 1 );
  Image.handleImageEvents();
  Image.handleNavEvents();
})
