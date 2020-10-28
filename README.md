#Table of contents
Contents Of This File
---------------------

 * Objectives
 * Installation
 * Configuration
 * Components
 
#Objectives
The objective of this project is to express the group’s understanding of the:
    • Strategies to build a React project.
    • Setting state in components.
    • Make API calls and display the results in React components.
    • Create a wireframe of my app design and integrate a library react-bootstrap to style my app.
    • Set up basic routing using react-router.
The wireframe was set up to provide us with the design template needed for the project and the available tools in the React version of Bootstrap to style the app.
#Installation
We set up this project by creating a project directory in the wyncode folder and cloning the mid-term project into it using the following command:
$ git clone <https://github.com/wyncode/c39_midterm_farah_daniel_hugo_love>
The following was obtained from the clone:
    • /client - contains all our client-side code, including React and create-react-app.
    • server.js – contains Code related to our Express server -including all the server-side or NodeJS development.
    • package.json - contains packages and scripts related to our server
    • /client/package.json - contains packages and scrtips related to the create-react-app
#The development environment
The following commands was also used to install and build the React-app development environment:
$ yarn
$ yarn dev – This runs BOTH your Express and React developer environment locally at the same time. Any logs coming from Express will be prefaced with [0], any logs from create-react-app will be prefaced with [1].
The React app was viewed on the browser by opening local host:
 http://localhost:3000  
In our client directory, we added the yarn bootstrap along with a library that has React components working with bootstrap using axios as follows:
$ yarn add react-bootstrap bootstrap
$ yarn add axios
The following link was added to our index.html:
<link
	rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
/>


#Components
For this project, we created a components directory within our /src directory and within the components, we created the following:
    • MainPage.jsx
    • AlbumCard.jsx
    • AlbumDescription.jsx
    • ArtistPage.jsx
    • ContextDemo.jsx
    • MostLoved.jsx
    • NavBar.jsx


#Configuration
The url structure for our React app was set up such that the root(/) goes to a search bar.

#Creating dynamic API calls
    • The input by the users will be used to update the state of the search
    • Our API endpoint was updated using a JS template literal so that the user can search for whatever music album they want, which are saved in the search state.
To display a box that has an image of each artiste’s album that is searched for as well as displaying the title of the album.
First, we wrote a map method in our ArtistPage.jsx, so that we know that we can successfully display our API response.

#Navigation Bar (NavBar)
To obtained the navigation bar, we first installed he react-router using the following:
$ yarn add react-router-dom
From the React Bootstrap library, we obtained a <Nav /> component that suits our needs for the project and we used that to create a separate component, called <NavBar />.
To display specific artiste when the user clicks on its image/title from their search results. This is done by making a call to the endpoint that allows access to information about a specific artiste by its id.


| Rubric Criterion                                                                         | Points |
| ---------------------------------------------------------------------------------------- | ------ |
| Ability to search or filter, use of React Router                                         | 10     |
| Code formatting and quality: indentation, variable and file naming conventions, etc.     | 10     |
| No unused variables or imports, compiler errors                                          | 10     |
| Proper use of environment variables for API keys or CORS proxy if needed                 | 10     |
| Overall look and feel of application, well organized CSS files                           | 10     |
| Well written documentation                                                               | 10     |
| Use of GitHub issues, branches and commit messages                                       | 10     |
| Look and feel of demo slide deck                                                         | 10     |
| Ability to explain code decisions in demo                                                | 10     |
| Ability to defend code decisions in response to panel questions                          | 10     |

## Bonus

- Fanciful animations and transitions
- Incorporate multiple APIs into a single app

## Demo Requirements

Create a slide deck for the technical panel. (Here's an [example](https://docs.google.com/presentation/d/15rfR-S5qAlzx4rHwBp_kJOlu0nQ7hcZOruTwbH6zRvQ/edit?usp=sharing).)

- It should focus on _how_ you built the app.
- Include code snippets with brief explanations. Or, specific references to the location of the code in your GitHub repo.
- It should emphasize your technical setbacks and solutions.
- Get straight to the point.
- Be prepared to answer questions.
