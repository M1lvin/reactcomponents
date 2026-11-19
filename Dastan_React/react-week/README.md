# React self-study week
**Дастан Эгембергенов**

This single-page app contains ten short lessons and a checklist. Mark a topic complete to update the progress counter. Use the form to add a topic of your own. Refreshing starts a new session.

## Run locally
Install Node.js 22 with npm, extract the archive and open a terminal in the folder containing package.json.

    npm install
    npm run dev

Open the local address printed by Vite. To build the app, run npm run build.

## Study notes

### 1. What is React?

React is a JavaScript library for building interfaces from reusable components. In a single-page app, the page can change without loading a new HTML document. Here the progress counter depends on state: mark a topic and its value changes.

### 2. Ecosystem and prerequisites

The DOM is the browser’s tree of page elements. React DOM connects React components to that tree. React Native uses native mobile views. Next.js adds features like routing. This project uses JavaScript modules, arrow functions, array methods and destructuring.

### 3. Project setup

Install Node.js with npm. To start a fresh Vite project, run npm create vite@latest my-app -- --template react. For this project, run npm install and npm run dev. Vite serves index.html, which loads src/main.jsx. That file mounts App into the root element.

### 4. JSX

JSX lets us describe markup inside JavaScript. A component can return one enclosing element or a fragment. Braces insert expressions, as in {title}. Use className for a CSS class and htmlFor to connect a label to its input.

### 5. Function components

Topic is a JavaScript function that returns JSX. Its capital letter tells React to treat <Topic> as a component. A default export lets App import it from another file.

### 6. Props and children

App gives each Topic its own title and completion status through props. The explanation between the opening and closing Topic tags becomes children. The same component displays every topic.

### 7. State and updates

useState stores the checked topic IDs between renders. Clicking a button calls the setter with a new array. React runs App again and updates the parts of the DOM that changed.

### 8. Lists, keys and conditions

App uses map to turn topics into list items. Each key uses a unique ID so React can match the same item after changes. The button label depends on done. A completion message appears when all topics are complete.

### 9. Events and forms

onChange copies typed text into state and value reads it back into the input. onSubmit prevents the browser from reloading the page and adds the topic. onClick toggles its completion.

### 10. File organization

main.jsx starts the app, App.jsx manages the study list, and topics.js holds lesson data. The components folder contains Topic.jsx. Keeping each component focused makes it easier to find and change one part of the page.
