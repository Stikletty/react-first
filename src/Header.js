import React from "react";
import './Header.css'

function HeaderButtonClick(){    
    window.location.reload(false);
}

function Header() {
  return (
    <div className="headerBox">
      <h1>My React Tweets</h1>
      <button onClick={HeaderButtonClick}>Refresh</button>
    </div>
  );
}

export default Header;
