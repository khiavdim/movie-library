# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Clone the repo to your local machine and cd into the main folder. 
Run this command to install dependencies needed for the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## New Features Added

### `No Data`

The 'No Data' icon will appear if there are no entries in the list of movies.
Once an entry has been entered, it will disappear.
If all entries have been deleted, it will reappear.

### `Delete Functionality`

To delete a film, hover over the blue circle for the film.
Click the red circle with the trash can to delete the film from the array.
Confirm to delete.

### `Duplicate Functionality`

When adding a film, the application checks the existing list of movies if there are any duplicates.
It will notify you if there is a duplicate. Duplicate films cannot be added to the array.

### `Form Validation`

All inputs in the application are required to submit a rating.
It will notify you if there are any empty fields.

### `Notifications`

The application will notify you in these cases:
- Form errors (all inputs are required)
- Duplicate entry
- Delete confirmation
- Successfully added an entry