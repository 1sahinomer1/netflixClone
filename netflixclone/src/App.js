import "./App.css";
import { useState } from "react";
import FirstScreen from "./FirstScreen/FirstScreen";
import MainScreen from "./MainScreen/MainScreen";
function App() {
  const [screen, changeScreen] = useState(false);
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "ömer",
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
        <FirstScreen
          setSelectedFoto={setSelectedFoto}
          setSelectedName={setSelectedName}
          changeScreen={changeScreen}
          userList={userList}
        />
      ) : (
        <MainScreen selectedFoto={selectedFoto} selectedName={selectedName} />
      )}
    </div>
  );
}

export default App;
