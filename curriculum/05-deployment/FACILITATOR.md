Class 5: Deployment Workshop 

## Overview

Today's lecture includes a Heroku deployment workshop. Students should follow along, deploying the portfolio they built during lab 4. It does not matter how complete the portfolio is, as they will be adding features and redeploying the application in lab 5. 

For students enrolled in the daytime track, this lab will take place on Monday morning of class 6, with the assignments due before lecture.

Students will be provided a basic `server.js` file for deployment purposes, so discuss this file on a very high level. 

The `server.js` file is in the `workshop` folder for today. Students will need to install Express with the command `npm i express`. Ensure that their server is up and running locally and that they can view their portfolio with `nodemon`.

The main topic for lecture 6 is a discussion of servers and how to write a `server.js` file. Assure students that more detail is coming in the next lecture.

## How do I prep for today?

- Create a sample application or your own portfolio that you can deploy along with students. 

## What changed from the previous class?

## What might students struggle with today?

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

- Plan to move slowly through the deployment process, discussing the steps and giving students time to follow along with each step. 
- Students will need to add the `server.js` file to their project and move the rest of their files into a `public` folder prior to deployment.

## Lecture

Command Line:
- heroku create [name]
  - *Creates an app on heroku.com and a git remote*
- heroku git:remote -a [appname]
  - (for an existing app)
- git remote -v
- git push heroku master
- git push heroku [branch]:master (for a branch)

Heroku Dashboard:
- In the "Deploy" tab, connect to GitHub
- Search for the portfolio repository
- Enable automatic deployment from the master branch

## Whiteboard diagrams
