Lab 03: Flexbox and templating

## Submission Instructions

- Complete your Feature Tasks for the day (below)
- Create a Pull Request (PR) back to the `master` branch of your repository
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. Add a comment in your Canvas assignment which includes the following:
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment

## Resources

- [Handlebars Docs](http://handlebarsjs.com/)
- [Flexbox Basics from MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

## User Stories and Feature Tasks

### Overview

Today you and your partner(s) will add pagination to your image gallery.

You will also be refactoring your photo gallery in two ways: you will use Handlebars for templating and you will use Flexbox for styling.

You will also be adding the ability for the user to sort the images, if you did not complete the stretch goal from lab 2.

### Feature 1: Pagination

#### Why are we implementing this feature?

- As a user, I want to have the ability to view additional images so that my view does not become cluttered. 

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user clicks on a button or link to another page  
Then the other set of images should be dynamically displayed  

#### How are we implementing it?

- Add navigation for the user to switch between two pages. Each page should render a unique set of images.
- Reset the filters, then repopulate them using only keywords from the images currently being displayed.

### Feature 2: Templating

#### Why are we implementing this feature?

- As a user, I want all of the images to be displayed in a consistent manner, so that it is easy to scan the collection of images.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the images are displayed on the screen  
Then each image should be rendered according to a template   

#### How are we implementing it?

- Create the appropriate Handlebars template in your HTML.
- Refactor the method that renders your images to use Handlebars instead of making a copy with jQuery.
- Hide the description, as it will be displayed when Feature #5 is implemented.

### Feature 3: Styling with Flexbox

#### Why are we implementing this feature?

- As a user, I want a simple, clean looking UI so that my photo gallery clearly displays the images.

#### What are we going to implement?

Given that a user opens the application in the browser  
When the user naviates to the home page  
Then the images should be displayed in columns, as screen width allows  

#### How are we implementing it?

- Refactor your CSS to use Flexbox instead of floats.

### Feature 4: Sort the images

#### Why are we implementing this feature?

- As a user, I want to be able to sort the images so that there is an order to their rendering.

#### What are we going to implement?

Given that a user is presented with sort options  
When the user clicks on one option  
Then the images should be sorted accordingly  

#### How are we implementing it?

- Add the ability for the user to sort the images by either title or by number of horns.
- Sort the images by one of the properties on page load. This should also apply to the second page of images. 

### Feature 5: Detail view

#### Why are we implementing this feature?

- As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

#### What are we going to implement?

Given that a user wants to view the details of the image  
When the user clicks on an individual image  
Then the image should render larger on the screen with the description displayed  

#### How are we implementing it?

- Add a detail view which will display the image in a larger size in the center of the screen with a grey background.
- The description should be shown now, as well.
- When the user clicks off of the image, return to the column view.

## Stretch Goal

*As a user, I want the detail view to include transitions so that I have a delightful experience.*

- Use a transition or animation to show and hide the detail view of an image.
