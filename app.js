 const parent = React.createElement("div", {id:"parent"}, 
 [React.createElement("div", {id:"child"},),
 [React.createElement("h1" , {} , "I'm H1 tag"), React.createElement("h2", {}, "I'm tag h2")],
 React.createElement("div", {id:"child2"},),
 [React.createElement("h1" , {} , "I'm H1 tag"), React.createElement("h2", {}, "I'm tag h2")]]


);

  const root = ReactDOM.createRoot(document.getElementById("root"));
  console.log(parent);
  
  root.render(parent);