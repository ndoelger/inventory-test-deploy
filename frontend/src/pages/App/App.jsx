import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "../../components/NavBar/NavBar";
import AuthPage from "../../components/AuthPage/AuthPage";

import "./App.css";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
