# Class 5: Deployment Workshop 

## Overview

Today's lecture includes a Heroku deployment workshop. Students should follow along, deploying the portfolio they built during lab 4. It does not matter how complete the portfolio is, as they will be adding features and redeploying the application in lab 5. 

For students enrolled in the daytime track, lab 5 will take place on Monday morning of class 6, with the assignments due before lecture.

Students will be provided a basic `server.js` file for deployment purposes, so discuss this file on a very high level. 

The `server.js` file is in the `workshop` folder for today. Students will need to install Express with the command `npm i express`. Ensure that their server is up and running locally and that they can view their portfolio with `nodemon`.

The main topic for lecture 6 is a discussion of servers and how to write a `server.js` file. Assure students that more detail is coming in the next lecture.

Work through the deployment process slowly and methodically, waiting at specific time points for students to complete a few steps and catch up. This way, students will not feel left behind and they will have an understanding of why each step is important.

Students will be deploying their applications in labs 6 through 9 and lab 11, plus their final projects. Encourage students to take notes because they will be expected to be able to run through these steps mostly on their own going forward.

## How do I prep for today?

- Prepare a 10-15 demonstration to introduce the topic of today's code challenges.
- Create a sample application or your own portfolio that you can deploy along with students. You can create your own version of the portfolio, or use the starter code.
- Add the workshop materials (`server.js`, `.eslintrc.json`, and `.gitignore` files) to the daily folder in the lecture repository. Students will pull their upstream remote, then move the files into their portfolio repository.

## What changed from the previous class?

## What might students struggle with today?

## What bugs, issues, or surprises have come up in the past for this class?

## General comments

- Plan to move slowly through the deployment process, discussing the steps and giving students time to follow along with each step. This workshop should take approximately 60-75 minutes and should be completed in the final hour of lecture.
- Students will need to add the `server.js`, `.gitignore`, and `.eslintrc.json` files to their project and move the rest of their files into a `public` folder prior to deployment. Add these to the course repository prior to lecture so students can follow along.
- During each break, denoted below with `BREAK`, pause the screen recording and circulate to assist students. Make sure everyone is caught up before moving on. Utilize the TAs during this time to help with the debugging process.

## Lecture

Prior to the workshop beginning:
- Ask students to merge their portfolio code to their master branch, no matter the state of their code. Although they can push a branch to Heroku with the command `git push heroku branch:master`, once their deployment is connected to the master branch of their repository, the changes will not be reflected on the deployed site until they merge their code to master.
- Ask students to log in to their Heroku dashboard.

Preparation for Deployment:
- From the command line, students should move the `server.js`, `.gitignore`, and `.eslintrc.json` files from the class repository into their portfolio repository.
- All of the other files for the portfolio should be in a `public` folder. Make sure there is not another folder within the `public` folder, but that the `public` folder contains the `index.html` file in its root.

BREAK

- Guide students through the process of running `npm init -y` to create a `package.json` file but do not go into a discussion of what this is doing, as this is a topic of lectures 6 and 7.
- Students should then run `npm i express` to install ExpressJS as a dependency. Again, keep this at a high level for now.
- Verify that these steps were successfully completed by testing locally with `nodemon`.

BREAK

- Students should add, commit, and push these changes to their portfolio repository.

Command Line:
- `git remote -v`
  - Reminds students that each repository has a remote named origin
- `heroku create [name]`
  - Creates an app on Heroku and a git remote
- Or, `heroku git:remote -a [appname]`
  - For an existing app created on Heroku
- `git remote -v`
  - Confirms that the Heroku remote was added

BREAK

- Copy URL to address bar in the browser
  - Confirms deployment
- `git push heroku master`
  - Pushes the instance to Heroku
- Or, `git push heroku [branch]:master`
  - Pushes the instance from a non-master branch to Heroku

BREAK

Heroku Dashboard:
- In the "Deploy" tab, connect to GitHub
- Search for the portfolio repository
- Enable automatic deployment from the master branch

## Whiteboard diagrams
