# React / Redux e-commerce Website

An e-commerce website build using React and Redux.
All this site does, is display a list of products from a database on the server, that the user can choose from and view independently on a separate page. The user can add an item to his/her cart, and checkout.

## Go Ahead And Run This On Your Computer

You must be on a Node version greater than 6 to use this.
On your terminal, cd to the directory where you have saved this project, cd in the project directory, and `npm install`.

Once you've npm installed, there are only two commands:

* `npm run start` - Runs the development server (Specify port with PORT, default 3000)
* `npm run build` - Builds the production version, which goes into `dist`

## Additional Information

* The backend server and API client were provided by William O'Beirne.
* [repository](https://github.com/wbobeirne/nycda-ecommerce-server).

## Project Structure

```
server/       		     # Backend source code
├── index.js   			 ### Server entry point
├── middleware 			 ### Reusable middleware
├── models     			 ### Sequelize data models
│
├── routes               ### Where all routing happens
│   ├── admin.js         ##### Admin pages, render using views
│   ├── api.js           ##### Endpoints that deal only in JSON
│   └── react.js         ##### Handle rendering the React template, dev server
│
├── util                 ### Shared utility functions
│   ├── sequelize.js     ##### Sequelize instance w/ config
│   └── uploadToImgur.js ##### Imgur uploading relegated to this nasty file
│
└── views                ### Admin views only
    ├── pages            ##### Pages that are included by template.ejs
    └── template.ejs     ##### Shared template for admin pages


src/       		         # Backend source code
├── App.jsx        		 ### The top-level component for React
├── App.scss             ### Any general, non-component styling done here
├── index.ejs            ### HTML template for the app
├── index.js             ### Webpack entry point / component mounting
├── util/               ### Project API
├── components/          ### Any shared components
├── pages/               ### Any shared pages
├── actions/             ### Any shared actions
├── reducers/            ### Any shared reducers
├── assets               ### Static assets
│     ├── fonts          ##### Fonts(eot|otf|ttf|woff|woff2)
│     └── images         ##### Images (gif|png|jpe?g|svg|ico)
dist                     # Any built files are here, not checked in
webpack.config.js        # Webpack configuration for dev _and_ production

```
## Take A Look
You can access this website [Here](https://arcane-cliffs-37106.herokuapp.com/).
