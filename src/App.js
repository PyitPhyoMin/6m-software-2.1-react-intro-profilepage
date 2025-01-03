import "./App.css";
/*Use CSS module for styling this app.[PhyoMin]*/
import styles from "./MyApp.module.css";

const Picture1 = require("./assets/Profile_Picture_1.jpg");

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Picture1} alt="A Man on an ice mountain."></img>
        <h1>Phyo Min</h1>
        <h2>Software Engineer</h2>
        <div className={styles.componentSection}>
          <h3>About me</h3>
          <hr></hr>
          <p>
            I am inspired by the individuals who overcome challenges with
            determination and want to support those creating positive change
            around the world.
          </p>
        </div>
        <div className={styles.componentSection}>
          <h3>Contact me</h3>
          <hr></hr>
          <p>
            Email: pyitphyo.min@mail.com | LinkedIn: https://www.linkedin.com/
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
