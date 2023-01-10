import { useEffect, useState } from "react";
import { Result } from "../../Models/RickAndMorty";
import "./MyTable.css";
interface MyTableProps {
    locations: Result[]
}
function MyTable(props: MyTableProps): JSX.Element {

    const [selected, setSelected] = useState<string>('');
    const [locations, setLocations] = useState<Result[]>(props.locations);


    const filtered = locations
        .filter(loc => (selected === '') ? true : loc.type === selected);


    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value;
        setSelected(selected);
    }

    return (
        <div className="MyTable">
            <div>
                <h2>Filters</h2>
                <select onChange={onChange} value={selected}>
                    <option value={''}>All</option>
                    <option value={'Planet'}>Planet</option>
                    <option value={'Cluster'}>Cluster</option>
                    <option value={'Space station'}>Space station</option>
                    <option value={'Microverse'}>Microverse</option>
                    <option value={'TV'}>TV</option>
                    <option value={'Resort'}>Resort</option>
                    <option value={'Fantasy town'}>Fantasy town</option>
                    <option value={'Dream'}>Dream</option>
                </select>
                <p></p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>type</th>
                        <th>created</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filtered.map(loc =>
                            <tr key={loc.id}>
                                <td>{loc.id}</td>
                                <td>{loc.name}</td>
                                <td>{loc.type}</td>
                                <td>{loc.created.toString()}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div >
    );
}

export default MyTable;
