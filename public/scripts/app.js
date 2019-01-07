//console.log('App.js is running!!!! boy this is fun');


// var template = <p>This is JSX from app.js</p>

template = React.createElement(
    "p",
    { id: "someid" },
    "This is JSX"
  );

var appRoot = document.getElementById('app');

ReactDOM.render(template,appRoot)