 import React from "react";
 import ReactDOM from "react-dom/client";
 
const Header = () => {
  return(
    <div className = "header">
      <div className ="logo-comtainer">
        <img className= "logo" src="https://www.freepnglogos.com/uploads/pubg-png/pubg-png-playerunknown-battlegrounds-windows-central-0.png"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

const RestaurantCard = (props) => {
  return(
    <div className = "restaurant-card">
      <img className = "restaurant-logo" src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,e_grayscale,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/6/dbd91d15-5a52-475c-8365-04ec271e0acd_ddff3434-36b2-4176-b6b3-ccaf723ac764.jpg" alt ="food"/>
      <h3>{props.resName}</h3>
      <h4>{props.resCusine}</h4>
      <h4>4.4 Stars</h4>
      <h4>38 Minutes</h4>
    </div>
  )
};

const RestaruantFooter =() => {
  return(
    <div className = "footer">
      <footer>
        <h3> Copyright to Shusank. 2025</h3>
      </footer>
    </div> 
  )
};

const Body =() => {
  return(
    <div className= "body">
      <div className= "Serach-box">
       <h3>Search</h3>
      </div>
      <div className = "restaurant-container">
       
        <RestaurantCard 
         resName="Meghna Foods"
         resCusine="Briyani, Indian, Asian"
         />
        <RestaurantCard
          resName ="KFC"
          resCusine ="fast food, American"
         />
        
      </div>

    </div>
  )
};





const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body />
      <RestaruantFooter/>

    </div>
  )
};

 const root = ReactDOM.createRoot(document.getElementById("root"));
 root.render(<AppLayout />); 