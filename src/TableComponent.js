import react from 'react';


//function component to display data in table format
const TableComponent = ({ data }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <table> 
            <thead> {/* Table header defining the column names */}
                <tr>
                    <th style={{ width: '5px' }}>ID</th>
                    <th style={{ width: '10px' }}>Name</th>
                    <th style={{ width: '10px' }}>Age</th>
                    <th style={{ width: '5px' }}>Email</th>
                </tr>
            </thead>  {/* Table body where data rows are mapped */}
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td style={{ width: '10px' }}>{item.id}</td> {/* Display each item's properties in table cells */}
                        <td style={{ width: '10px' }}>{item.name}</td>
                        <td style={{ width: '10px' }}>{item.age}</td>
                        <td style={{ width: '5px' }}>{item.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};

export default TableComponent;