import React from 'react';

class Table extends React.Component {


    constructor(props) {
        super(props)
        this.state = {                                          // Initialise the state for later use in conditions.
            loading: true,
            dataPopulated: false,
            accidents: [],
        }
    }

    async componentDidMount() {

        const url = `https://api.tfl.gov.uk/AccidentStats/2018` // The url for the API data of 2018 (the data I want to display and manipulate, if I can figure that out).
        const response = await fetch(url);                      // GET the data we are after using the url provided above.
        const data = await response.json();                     // convert the response into a JSON file.
        const result = data.slice(0, 30);                       // To take the first 100 entries of the data retrieved from the API
        this.setState({ loading: false, dataPopulated: true, accidents: result });
        console.log(result);                                    // For debugging to ensure result is being filled with the 30 results.  

        
    }

    renderTableHeader = () => {                                 // Generates the headers for each row.
        return Object.keys(this.state.accidents[0]).map(attr => <th key={attr}>
            {attr.toUpperCase()}
        </th>
        )
    }

    renderTableRows = () => {                                   // Used to generate each row from the provided array.
        return this.state.accidents.map(accidents => {
            return (
                <tr key={accidents.id}>
                    <td>{accidents.$type}</td>
                    <td>{accidents.id}</td>
                    <td>{accidents.lat}</td>
                    <td>{accidents.lon}</td>
                    <td>{accidents.location}</td>
                    <td>{accidents.date}</td>
                    <td>{accidents.severity}</td>
                    <td>{accidents.borough}</td>
                    <td>{`${accidents.casualties[0].age}, 
                          ${accidents.casualties[0].class}, 
                          ${accidents.casualties[0].severity}, 
                          ${accidents.casualties[0].mode}, 
                          ${accidents.casualties[0].ageBand}`}</td>         
                    <td>{`${accidents.vehicles[0].type}`}</td>
                </tr>
            ) // Above the final two attributes of the data are stored in arrays, so the result needs to be concatenated.
        })
    }

    render() {
        const { loading, dataPopulated, accidents } = this.state
        if (loading) {
            return <div>Loading Data...</div>
        }

        if (!dataPopulated) {
            return <div>The data failed to load.</div>
        }
        return accidents.length > 0 ?
            (
                <table>
                    <thead>
                        <tr>
                            {this.renderTableHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableRows()}
                    </tbody>
                </table>
            ) :
            (
                <div>No data has been loaded</div >
            )
    }
}
export default Table