# Milestone Project 2 
## with Code Institue 

### Description
---
The following project is my second Milestone project in the "Full stack Software Developer" course with
 Code Institue. I would like to make big thank you to the the tutor Support at CI for helping and guiding me 
 to be able to develop a MVP of my small quiz game called WishQuiz.com. 

 My goal is to create a mobile responsive website containing a small quiz game, using what we have learn so far
 in HTML, CSS, Bootstrap, .js, jQuery and so on. We got different scopes to choose from and again I chose one of
 my own. The site does not support any backend functionality so you will not need an account to test WishQuiz. 

 The project is a Quiz game and since it's a MVP it has minimal styleing and it's possible to play the game without
 choosing a username, but the user if they like can choose a username and the username will be stored in 
 localStorage in the users browser. The game a small entertaining game where you in the future will be able to
 challenge friends and family, using WishQuiz database question's or they can add their own questions.   

 Link to the project: 

 ### UX
 ---
 I want the user to have easy access to the game, so I have chosen to have minimal content on my landing page.
 In the menu you will find 3 links: Home - How to Play - Contact. Home is naturally taking you back to the landing 
 page, while "How to Play" is a help page to help you get started playing WishQuiz. Contact is a contact 
 form that is active and the user will be able to contact us with inquiries or feedback on the game, if they 
 have any.

 On the landing page you will find a box in the middle of the page where the user get welcomed to WishQuiz and 
 the possibility to choose a username. Either if they choose a username or not before hitting play they will 
 be taken to the game board. The username is stored in localStorage. 

 In the Quiz page the user will find a game board with stats like username, score and wins. The username
 will display "null" if the user not choosing a username. If the user picks the correct answer they will be 
 rewarded with 100 points. The game provides 10 questions with 4 alternative answers and the goal is to get as 
 many correct answers as possible.

The "How to Play" provides a site with a 6 point bulletlist on how to play WishQuiz. 

The contact form is for feedback and inquiries that the user might have. Its a simple form where the user provides
their name, their e-mail id and subject and a message. 

The footer provides some basic information about the game as well as links to sosical media and GitHub. 

### Images of how the page should look like. 


### Features
---
#### Current Features
---
```sh 
* Index - The user will find a username box and a play button that directs them to the game.
* Quiz - The gameboard where the user get to answer 10 questions. 
* How to Play - A static page with information on how to play the game.
* Contact - A standard contact form for the users to reach out to the game. 


#### Future features 
---
```sh 
* Both norwegain and english language
* User account with login 
* App for the user to download
* Network game where it will be possible to challenge friends and family.
* Possible for the user to add questions to the database.


### Technologies / Support used. 
--- 
Below is a list of technologies I've used to build my website and quiz game.
* HTML - HTML5 Provided the content and the structure of my website and quiz game. 
* CSS - CSS were used to style my site and game. 
* [Bootstrap](https://getbootstrap.com/) - I've used Bootstrap for framework, forms and section-spacing.
* [Gitpod](https://www.gitpod.io/) I've used Gitpod as my text editor. It offer everything I need to do from one enviroment. 
* [Git](https://git-scm.com) - Git was used for version control and pushing the code to GitHub
* [GitHub](https://github.com/) - This is where my repository is held externally.
* [Javascript/JQuery](https://jquery.com/) - This was imported via the Bootstrap framework to enable me to create a responsive collapsible nav bar at smaller screen sizes JavaScript has also been used to develop the game.
* [Font Awesome](https://fontawesome.com/) - I used Font Awesome for the icons in my navbar and the buttons on my index page. .


### Testing
---
I have tested the site both manually and automatically throughout the development of the project. I've used the web developer tools to see that my site at all time was responsive. I target first the mobile devices, and then testing to scale the site for tablets to larger desktops. I tested the site on different devices to see that it scaled properly on all devices. 
The automatic checks of my HTML and CSS structure were done in [W3C Validator](https://validator.w3.org/#validate_by_input) to ensure there isn't any errors in the code and that the structure is correct. I have tested the site on Firefox, Internet explorer and Chrome to see that the site scales properly, as well as all features and framework is correct in it's positions. Everything scales properly on all devices beside the Google scrips when the Internet Explorer is used in the Salmonsuite/Catches page, here the scripts don't show and you can read more about this in the bugs section futher down in the README.md file.  

### Bugs
---
One of the bugs is that you get is an error respons code of 501, when trying to use the contact form. 
During the development and testing of the code there have been constantly done improvments to the code to get it up and running, though I have even just started to scratch the surface of Javascript jQuery with more,
it's been a real eye opener on what you can acomplish using .js and more. The learning curve have been raising rapidly in the end of 
the project and I have received a lot of help from tutor support at CI. They have been brilliant guiding me and helping me throuhout the project together with my mentor.

### Deployment
---
My website and game was created using GitPod, they provide me with free credits as a student and their platform have 
buildt in Terminal that allows me to push my code the GitHub. GitPod allows you to store your username and password and
thus makes the experience pushing your code to GitHub easier. 

* Create your project in GitHub and open it with GitPod directly from GitHub. 
* Created all my folder and files.
* Use "git add ." into the bash terminal
* Use "git commit" into the bash terminal and create "initial commit"
* Use "git push" into the bash terminal and push your code to GitHub
* Follow the below steps to deploy the site to GitHub pages. 
  
##### To deploy the website to GitHub pages follow the below steps:
* Select the "Quizgames" from my GitHub dashboard.
* Select "Settings" from the menu bar. 
* From the GitHub pages section, I chose "master branch" from the dropdown menu. 
* Once selected, the page refreshes and a link will be displayed in the GitHub section to my website.
* Link to the project: <a href="https://weekend79.github.io/quizgames/">Click here</a>  

### To run this project locally
---
* Follow this link to the [GitHub Repositiry](https://github.com/weekend79/quizgames)
* Click on the 'Clone or Download' button.
* Copy the URL provided.
* Open a bash terminal, move to your desired directory.
* Type 'git clone' and paste in the URL.

### Contributing
---
* To my mentor [Reuben Ferrante](https://github.com/arex18), for giving my exellent guidens thru the project and assisted me in some important issue's.
* [HTML Color Code](https://www.htmlcolor-picker.com/color/) - Used this website in order to obtain hex codes to styling my pages.
* [W3C Validator](https://validator.w3.org/#validate_by_input) - A validator used to check my HTML and CSS structure and format periodically throughout the build.
* [W3Schools](https://www.w3schools.com/) - I used this to ensure I was entering all the information required correctly in my HTML and CSS.
* [Tutor Support](https://codeinstitute.net/) - I used turtor support a lot durring this project and they have been excellent support.
* [Slack community](https://slack.com/) - For a some of my issues I have turn to the Slack community for help and they have been a very good help. 

### Author

* **Morten Viken** - *Initial work* - [weekend79](https//github.com/weekend79)