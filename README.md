# Course Registration

## Project Features

- This project fetches data from json file and shows them in the cards.
- Pressing select button on the card will add the course name of that card to the cart's selected course list.
- In this project we can not add same course multiple times in the cart. Selecting course multiple times will show toast.
- Selecting a course will add its credit and price with the previously added courses' credits and prices and show them in the cart. It will also show remaining credits as given credits are 20.
- We can not add courses when total credit exceeds 20. Selecting course that exceeds total credit 20 will show a toast.

## State Management

In this project **useState** and **useEffect** hooks are used to manage state of the project effectively. How the state of the project is managed is described below.
Several state variables are declared using the **useState** hook.

- **courses**: This state variable holds an empty array initially, but it gets populated with course data fetched from a JSON file using the **useEffect** hook.
- **selectedCourses**: This array stores the courses that the user selects. It starts empty and gets updated as the user selects courses.
- **totalCredit**: This variable keeps track of the total number of credits for the selected courses.
- **totalPrice**: Similar to totalCredit, this variable tracks the total price of the selected courses.

## [ Live Link: Course Registration](https://venerable-croquembouche-bd1971.netlify.app/)
