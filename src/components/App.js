
import React, {useRef} from "react";
import './../styles/App.css';

const App = () => {
const dataChangRef = useRef(new Set())
  function handleChange(e){
    dataChangRef.current.add(e.target.dataset.row)
  }
  function handleSubmit(e){
    e.preventDefault()

    console.log(dataChangRef.current)
  }
  return (
    <div>
        <h1>Track edited cells to log updates for future</h1>
        <form onSubmit={handleSubmit}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><input data-row='1' type="text" onChange={handleChange} /></td>
                  <td><input data-row='1' type="number" onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><input data-row='2' type="text" onChange={handleChange} /></td>
                  <td><input data-row='2' type="number" onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><input data-row='3' type="text" onChange={handleChange} /></td>
                  <td><input data-row='3' type="number" onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><input data-row='4' type="text" onChange={handleChange} /></td>
                  <td><input data-row='4' type="number" onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><input data-row='5' type="text" onChange={handleChange} /></td>
                  <td><input data-row='5' type="number" onChange={handleChange} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><input data-row='6' type="text" onChange={handleChange} /></td>
                  <td><input data-row='6' type="number" onChange={handleChange} /></td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Save Changes</button>
        </form>
    </div>
  )
}

export default App
