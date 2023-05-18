import { useState } from "react";
import "./Home.css";

function Home(): JSX.Element {
	// const [selectedValue, setSelectedValue] = useState(0);
  // const items = [
  //   { label: "Default", value: selectedValue },
  //   { label: "2 Rows", value: 2 },
  //   { label: "4 Rows", value: 4 },
  //   { label: "6 Rows", value: 6 }
  // ];

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  //   setSelectedValue(e.target.value);
  // };
    return (
        <div className="Home centerColumn">
			<h2>Hi! Welcome to the Rick and Morty app.</h2>
<h2> We are so glad you've decided to join us.</h2>
	<iframe 
	src="https://giphy.com/embed/cOKjNdJDbqNCm4n0Jm" 
	width="480" 
	height="480" 
	frameBorder="0" 
	className="giphy-embed" 
	allowFullScreen
title="Rick and Morty GIF">
	</iframe>

	{/* <h1>Simple Dropdown List</h1> 
      { <><form>
          <select className="form-select" onChange={handleChange}>
            {items.map((item) => (
              <option key={item.label} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
        </form><p>You have selected: {selectedValue}</p></> */}

            {/* } */}
            </div>
    );
}

export default Home;
