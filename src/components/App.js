
import React, {useRef} from "react";
import './../styles/App.css';

const App = () => {
const dataChangRef = useRef(new Set())
  function handleChange(e){
    dataChangRef.current.add(Number(e.target.dataset.row))
  }
  function handleSubmit(e){
    e.preventDefault()

    console.log('Edited rows:', [...dataChangRef.current])
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
                  <td><input data-row='1' type="text" onChange={handleChange} defaultValue={'Ram'} /></td>
                  <td><input data-row='1' type="number" onChange={handleChange} defaultValue={25} /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td><input data-row='2' type="text" onChange={handleChange} defaultValue={'Shyam'} /></td>
                  <td><input data-row='2' type="number" onChange={handleChange} defaultValue={30} /></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td><input data-row='3' type="text" onChange={handleChange} defaultValue={'Ali'} /></td>
                  <td><input data-row='3' type="number" onChange={handleChange} defaultValue={35} /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td><input data-row='4' type="text" onChange={handleChange} defaultValue={'Shaw'} /></td>
                  <td><input data-row='4' type="number" onChange={handleChange} defaultValue={20} /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td><input data-row='5' type="text" onChange={handleChange} defaultValue={'Tavneet'} /></td>
                  <td><input data-row='5' type="number" onChange={handleChange} defaultValue={50} /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td><input data-row='6' type="text" onChange={handleChange} defaultValue={'Lakshmi'} /></td>
                  <td><input data-row='6' type="number" onChange={handleChange} defaultValue={40} /></td>
                </tr>
              </tbody>
            </table>
            <button type="submit">Save Changes</button>
        </form>
    </div>
  )
}

export default App
