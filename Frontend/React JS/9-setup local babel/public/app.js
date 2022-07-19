const root = ReactDOM.createRoot(document.querySelector(".root"));

function clock() {
  const element = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Clock"), /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString()));
  root.render(element);
}

setInterval(clock, 1000);