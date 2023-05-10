import "./RMTable.css";
import { Result,Root } from "../../../Models/RickMortyModel";
import { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../Shared/Table/Table";


const statusOptions = [
    { value: 'All', label: 'All' },
    { value: 'Alive', label: 'Alive' },
    { value: 'Dead', label: 'Dead' },
    { value: 'unknown', label: 'Unknown' },
  ];
  
  const speciesOptions = [
    { value: 'All', label: 'All' },
    { value: 'Human', label: 'Human' },
    { value: 'Alien', label: 'Alien' },
  ];
  
function RMTable(): JSX.Element {
    const [table, setTable] = useState<Result[]>([]);
    const [selectStatus, setSelectStatus] = useState<string>('All');
const [selectSpecies, setSelectSpecies] = useState<string>('All');


    useEffect(() => {
        axios.get<Root>('https://rickandmortyapi.com/api/character')
            .then(res => {
                setTable(res.data.results);
                console.log('Data load successfully');
            })
            .catch(err => {console.log('Data did not load');})
        }, []);

    return (
        <div className="RMTable">
			
            <div className="CardsHeader centerColumn">
<h2>Rick and Morty characters</h2>
<div className="centerRow select">
<div>
<select placeholder="Select status" value={selectStatus} onChange={(e) => setSelectStatus(e.target.value)} className="border">
               <option value="All">All</option>
               <option value="Alive">Alive</option>
               <option value="Dead">Dead</option>
               <option value="unknown">Unknown</option>
               </select>

               </div>
               <div>
               <select placeholder="Select specie" value={selectSpecies} onChange={(e) => setSelectSpecies(e.target.value)} className="border">
               <option value="All">All</option>
               <option value="Human">Human</option>
               <option value="Alien">Alien</option>
               </select>
               </div>
               </div>
            </div>
{

<Table
  table={
    table.filter((t) => (
      (selectStatus === 'All' || t.status.toLowerCase() === selectStatus.toLowerCase()) &&
      (selectSpecies === 'All' || t.species.toLowerCase() === selectSpecies.toLowerCase())
    ))
  }
/>
            }

        </div>
    );
}

export default RMTable;
