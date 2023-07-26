import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getItems } from '../../utilities/items-service';
import ItemsList from '../ItemsList/ItemsList'
import { getUser } from "../../utilities/users-service";

import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../../components/AuthPage/AuthPage";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [items, setItems] = useState([]);

  const getItem = async () => {
    const response = await getItems();
    setItems(response)
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<ItemsList user={user} items={items} />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
