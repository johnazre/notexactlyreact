let ReactDOM = {};

ReactDOM.render = function(htmlString, location) {
  location.innerHTML = htmlString;
};
