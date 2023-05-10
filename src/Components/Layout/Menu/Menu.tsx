import { Link } from "react-router-dom";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu menuList ">
            <ul>
			<li> <Link to="home">Home</Link></li> 
            <li> <Link to="cards">Rick and Morty in Cards</Link> </li> 
            <li> <Link to="table">Rick and Morty in Table</Link> </li>
</ul>
        </div>
    );
}

export default Menu;
