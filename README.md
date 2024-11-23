# React Parent-Child Communication Example

This project demonstrates how to establish communication between a parent and a child component in React using `props` and state management. The parent component (`App.js`) passes a function to the child component (`Childcom.js`), and the child uses this function to send data back to the parent.

---

## Project Structure


---

## How It Works

1. **Parent Component (`App.js`)**:
   - Maintains a state variable `childname` to store data received from the child.
   - Defines a function `receiveName` to update the state.
   - Passes the `receiveName` function to the child as a prop (`setfun`).

2. **Child Component (`Childcom.js`)**:
   - Receives the `setfun` function as a prop.
   - Calls the function to send the value `"My Name is Bob"` back to the parent.
   - Triggers the function when the component renders.

---

## Running the Project

1. Clone the repository or download the project files.
2. Open a terminal and navigate to the project directory.
3. Install dependencies:
   ```bash
   npm install
