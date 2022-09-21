import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, getData] = useState([]);
  const URL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    fetch(URL).then((resp) => resp.json()).then((response) => {
      console.log('first', response);
      getData(response);
    })
  }

  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>s.no.</th>
            <th>userId</th>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
          {
            data.map((item, index) => (
              <tr >
                <td>{index+1}</td>
                <td>{item.userId}</td>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </>
  );
}

export default App;
