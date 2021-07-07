# 0. INTRODUCTION:
 - This is a MERN social media app that allows users to share real places they've been on the internet.
 - There are 3 main folders in our workflow: frontend, backend and webdesign. 

# 1. FRONT-END:
 - The front-end of our app is built with React.js and the organisation of the files is as follows:
      * In the src folder, there are 3 main subfolders: places, shared and user.
      * The places folder contains the files allowing users to CRUD places they've been.
      * The shared folder contains public files that needn't security, like UI Elements.
      * The user folder contains everything related to creating new accounts and showing the list of users.
        __P.S.:__ Both places and user folders have 2 subfolders - components (which is React's main work method) and pages (self-explanatory).
  
  - Routing and redirectioning is handled with `react-router-dom` and the "to" props.
  - Used the GoogleMaps API for the 'View on map' functionality in 'My Places'.
  - Added a 'util' subfolder in the 'shared' directory containing a `validators.js` file that helps us validate for example the user's input in the add new place form and the update place form.
  - Created a 'hooks' subfolder in the 'shared' directory containing our custom hooks.
  - Created a 'context' subfolder in the 'shared' directory containing our custom contexts (auth).
  - Adjusted the authentication logic (dummy accounts) to make sure, for example, the user only sees 'add place' if he's "logged in".

# 2. BACK-END:
 - Installed 3 packages: express, body-parser and nodemon (check out `package.json`'s dependencies).
 - The 'routes' subfolder in the main 'backend' directory contains the files with the middleware responsible for handling routes related to places and users.
 - Created a new 'models' subfolder in the main 'backend' directory. For now, we have added an 'http-error.js' model.
 - Created a new 'controllers' subfolder in the main 'backend' directory. For now, we have added a 'places-controller.js' and a 'users-controllers.js' files.