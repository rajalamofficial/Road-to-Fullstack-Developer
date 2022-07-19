const root = ReactDOM.createRoot(document.querySelector(".root"));

const clock = () => {
  const element = /*#__PURE__*/React.createElement("div", {
    className: "clock"
  }, /*#__PURE__*/React.createElement("h1", null, "Clock"), /*#__PURE__*/React.createElement("p", null, new Date().toLocaleTimeString()));
  root.render(element);
};

setInterval(clock, 1000);