import React, { useState} from "react";
import "./App.css";

const ROWS = 10;
const COLS = 10;

const App = () => {
  const [data, setData] = useState(
  Array.from({ length: ROWS}, () => Array(COLS).fill("")));

  const handleChange = (row, col, value) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  const calculateSum = (col) => {
    return data.reduce((sum, row) => sum + (parseFloat(row[col]) || 0), 0)};

    return (
      <div className="spreadsheet">
        <h1>Google Sheets Clone</h1>
        <table>
          <thead>
          <tr>
              <th></th>
              {[...Array(COLS)].map((_, i) => (
                <th key={i} > {String.fromCharCode(65 + i)}</th>
              ))}
          </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key= {rowIndex} >
                <td className="row-header">{rowIndex + 1}</td>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>
                    <input type="text" value={cell} onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          </table>
          <div className="function">
            <p><strong>SUM Column A:</strong> {calculateSum(0)}</p>
          </div>
      </div>
    );
  };

  export default App;