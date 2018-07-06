'use strict';

var app = app || {};

(function(module) {

  $('.icon-menu').on('click', () => {
    $('.nav-menu').slideToggle(350);
  });

  const bookView = {};

  bookView.initIndexPage = (ctx) => {
    $('#book-list').empty();
    app.showOnly('.book-view');
    module.Book.all.map(book => $('#book-list').append(book.toHtml()));
  };

  bookView.initDetailPage = (ctx) => {
    $('.book-detail').empty();
    app.showOnly('.detail-view');
    $('.book-detail').append( app.render('book-detail-template', ctx) );
  };

  bookView.initCreateFormPage = () => {
    app.showOnly('.create-view');
    $('#create-form').on('submit', (event) => {
      event.preventDefault();

      let book = {
        title: event.target.title.value,
        author: event.target.author.value,
        isbn: event.target.isbn.value,
        image_url: event.target.image_url.value,
        description: event.target.description.value,
      };

      module.Book.create(book);
    })
  };

  module.bookView = bookView;
})(app);
