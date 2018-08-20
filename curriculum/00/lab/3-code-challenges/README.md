# Code 301: Code Challenges

Part of growing as a programmer is to practice, practice, practice. Throughout this course, you will complete a set of daily code challenges.

The daily challenges will be posted at the end of lecture every day. Plan to focus on this task with your partner every day after class until 6 p.m., then complete the remainder of the challenges in the evening, as needed.

Read through this document so you know what to expect after class every day. Follow the set-up instructions so you are ready to tackle your first set of challenges at the end of class today.

## Working with Partners

You will be working on these code challenges with a new partner every day. This will also be your partner for the paired lab. Code challenges that are assigned when heading into the weekend should be completed independently.

After lecture, get together with your partner and read through the daily challenges. Read the MDN documentation for the topic of the day. Your instructor will also be sharing a YouTube playlist which contains tutorials on each topic. Each video is approximately ten minutes long and you are encouraged to integrate these videos into your workflow as you and your partner see fit.

## GitHub repository

As part of today's assignment, create a new repository on GitHub named `code-challenges` to track your solutions throughout 301. This repository should have a root README.md file with an overview of the purpose of the repository.

Work on a new branch for each challenge. For example, for today's challenge you can make a new branch with the command `git checkout -b forEach`. When you finish the assignment each day, make a new pull request from your daily challenge branch to your master branch and submit the URL in Canvas. You can submit a link to a pull request even if the pull request is closed.

Within your repository, you will create a separate folder for each challenge. Go ahead and make a folder named `forEach` for today's challenge.

At the end of lecture each day, your instructor will publish the challenges. Copy the contents of the file into your repository and work on the challenges for each day. Remember to add, commit, and push regularly. 

Submit a link to your repository in the corresponding Canvas assignment.

## Jest Configuration

Your code challenge files are divided into two sections: challenges and tests. You will need to add your own solutions to each challenge but should not modify the tests in any way. These tests will ensure that your solution is meeting the requirements of each challenge. Even though you may not modify the tests, you are encouraged to read them to see what is being evaluated.

As part of your prework for this course, you installed a testing platform called Jest globally so that it is available to all of your test files. In order to run the tests, Jest looks for a configuration file. Copy the `jest.config.js` file from this folder into the root level of your code challenges repository. As long as it is in the root level of the repository, you do not need to include this configuration file in any of the folders.
