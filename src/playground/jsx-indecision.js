// console.log('App.js is running!');

// // JSX - JavaScript XML
// var app = {
//     title: 'Indecision App',
//     subtitle: 'Put your life in the hands of a computer!',
//     options: []
// }

// var template = (
// <div>
//     <h1>{app.title}</h1> 
//     {app.subtitle && <p>{app.subtitle}</p>}
//     {app.options.length > 0 ? <p>Here are your options!</p> : <p>Nothing here</p>}
//     <ol>
//         <li>Item one</li>
//         <li>Item two</li>
//     </ol>
// </div>
// );

// var user = {
//     name: 'Spencer',
//     age: 31,
//     location: 'Spokane'
// };

// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>
//     }
// }

// var username = 'Spencer';
// var age = 31;
// var userLocation = 'Spokane'

// var templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//          {getLocation(user.location)}
//     </div>
// );

// var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot);
console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();

