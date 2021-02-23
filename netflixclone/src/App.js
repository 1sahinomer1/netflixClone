import { useState } from "react";

import UserScreen from "./UserScreen/UserScreen";
import MainScreen from "./MainScreen/MainScreen";

import "./App.css";

function App() {
  const [screen, setScreen] = useState(false);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ömer",
      foto: "/img/user1foto.png",
    },
    {
      id: 2,
      name: "Serhat",
      foto: "/img/user2foto.png",
    },

    {
      id: 3,
      name: "Çocuk",
      foto: "/img/cocukfoto.png",
    },
  ]);
  const [selectedFoto, setSelectedFoto] = useState();
  const [selectedName, setSelectedName] = useState();
  return (
    <div>
      {screen === false ? (
        <UserScreen
          setSelectedFoto={setSelectedFoto}
          setSelectedName={setSelectedName}
          setScreen={setScreen}
          users={users}
        />
      ) : (
        <MainScreen selectedFoto={selectedFoto} selectedName={selectedName} />
      )}
    </div>
  );
}

export default App;
