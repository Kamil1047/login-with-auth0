import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  // const { loginWithPopup, loginWithRedirect, logout, user, isAuthenticated } =
  //   useAuth0();

  const { isAuthenticated, loginWithPopup, loginWithRedirect, logout, user } =
    useAuth0();

  return (
    <div className="App">
      <h1>Auth0 authentication</h1>
      <ul>
        <li>
          <button onClick={loginWithPopup}>Login With Popup</button>
        </li>
        <li>
          <button onClick={loginWithRedirect}>Login With Redirect</button>
        </li>
        <li>
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
      <h3>User is {isAuthenticated ? "Logged in" : "Not Logged in"}</h3>
      {isAuthenticated && (
        <pre style={{ textAlign: "start" }}>
          {JSON.stringify(user, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default App;
