import logo from './logo.svg';
import './App.css';
import React from "react";
import axios from "axios";

const baseURL = "http://localhost:8080/api";

function App() {

  const [users, setUsers] = React.useState(null);

  React.useEffect(() => {

    // API実行した体
    // const dummyUserList = [
    //   {
    //     "id": 1,
    //     "name": "testtest",
    //     "age": "11"
    //   },
    //   {
    //     "id": 2,
    //     "name": "test",
    //     "age": "2"
    //   },
    //   {
    //     "id": 3,
    //     "name": "testtest",
    //     "age": "3"
    //   },
    //   {
    //     "id": 4,
    //     "name": "test氏名",
    //     "age": "4"
    //   },
    //   {
    //     "id": 5,
    //     "name": "tobetch",
    //     "age": "5"
    //   },
    //   {
    //     "id": 6,
    //     "name": "tobetch",
    //     "age": "6"
    //   },
    //   {
    //     "id": 7,
    //     "name": "tobetch",
    //     "age": "7"
    //   }
    // ];

    // setUsers(dummyUserList);
    // console.info(dummyUserList);

    axios.get(baseURL + "/user").then((response) => {
      console.log(response);
      setUsers(response.data);

      console.log("test test");
    }).catch(error => {
      console.error(error);
    });
  }, []);

  // if (!users) return "No post!"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {users?.map(
          (user) =>
            <div>
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.age}</p>
            </div>
        )
        }
        {/* {error && <div>エラー発生</div>} */}
      </header>
    </div>
  );
}

export default App;
