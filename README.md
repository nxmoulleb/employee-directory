# employee-directory

Written by Nicholas Moulle-Berteaux on 2/26/2025

### How to use
1. `cd react-directory`
2. `npm run dev`

### Features
Each card represents one employee. The cards include a profile picture, name, role, department, and email. The border of the card is determined by the years spent at the company:
- \<=1 years: Red border
- 1-5 years: Gray border
- \>=5 years: Gold border

There is also a search bar at the top that allows you to filter employees by name or department. Simply start typing and if a match is found in the name or department that employee will stay on the screen. 

When you hover over the employee cards, there is a small animation that plays, raising the selected card up.

There are a small number of unit tests for the card grid, ensuring it acts correctly. They test the search functionality, as well as the border colors.

### Structure

This webpage is built using JavaScript React using the MUI (Materials UI) library. The code can be found inside the `react-directory/src/directory` folder. 

- `directory.jsx` is where `App.jsx` points to. It contains the parent element `Directory`. This is where the grid of employee cards is displayed and the search bar lives.

- `card-grid.jsx` exports the `CardGrid` component. This component structures a grid of cards to display the employees information. The logic for deciding the borders based on years lives here, in the `pickOutline` function.

- `database/data.json` is where the data from the takehome assignment lives. I converted it to a JSON so it did not take up space in the `CardGrid` component and can be decoupled easier.

- `add-modal.jsx` is something I added just for fun. It contains the `AddModalBody` component which could be used to add new employees to the directory, if it were hooked up to a database. It is moved to this file so it doesnt cloud the main purpose of the take home assessment. 

### Testing

The `__tests__` cirectory contains tests for the `CardGrid`. These test cases like no employees passed in, searching for something with no matches, as well as normal functionality like the border color and searching for a known name or department.

Tests can be run with the following command: `npm test`

![Test results](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)