import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import App from "../../../App";
import Home from "../../Pages/Home/Home";
import RMCard from "../../Pages/RMCard/RMCard";
import RMTable from "../../Pages/RMTable/RMTable";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
		<Routes>
    <Route path="/" element={<App/>}/> 
   <Route path="home" element={<Home />}/> 
   <Route index element={<Home />}/>
    <Route path="cards" element={<RMCard/>}/> 
   <Route path="table" element={<RMTable/>}/>
   
</Routes> 
	
        </div>
    );
}

export default Routing;
