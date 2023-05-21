# # Test task

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Technical task

According to the layout, you need to implement user cards.
When you click on the Follow button, the text changes to Following. The color of the button also changes. And yours is added to the number of followers. That is, the initial number is 100,500 followers. When you click on the button, it will be 100,501.
When the page is updated, the final result of the user's actions should be recorded. That is, if you click on the button and refresh the page, the button still remains in the Following state with the appropriate color, and the number of followers does NOT decrease to the initial value.
When you click the button again, its text and color change to their original state. The number of followers also changes. It decreases by 1 (100,500).
In the code, the number 100,500 must be written with one value (100500). In the UI, it is displayed with a comma (100,500).
Create your personal backend for development using the mockapi.io UI service. Create the users resource. Use the resource constructor and describe the user object as described below.

# User

Create a user in Mockapi with the following fields: id, user, tweets, followers, avatar (see screenshot below).
Avatar images must be specified with separate urls in the “avatar” property. You can choose them yourself.
There should be from 12 users with different values (at your discretion) in the database. Make pagination. One pagination page should display at least 3 tweets, the rest should be loaded when you click Load More
The rest of the requirements are similar to the technical task described above.

[maquette](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1)
