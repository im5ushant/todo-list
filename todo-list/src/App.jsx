import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Todo from "./components/Todo";

import './App.css';

export const AuthContext = React.createContext({
  isAuthorized: null,
  toggleAuthorization: () => {},
});

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const toggleAuthorization = () => setIsAuthorized((prevState) => !prevState);

  let routes;

  if (isAuthorized) {
    routes = (
      <>
        <Route path="/todo" element={<Todo />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Login />} />
      </>
    );
  }

  return (
    <div className="App-container">
      <AuthContext.Provider
        value={{
          isAuthorized: isAuthorized,
          toggleAuthorization: toggleAuthorization,
        }}
      >
        <BrowserRouter>
          <Routes>
            {routes}
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 Not Found!</p>
                </main>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
