import "./App.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/RenderRoutes";
import NavBar from "./components/NavBar/NavBar";
import { AuthProvider } from "./contexts/AuthContext";
import "src/styles/main-css-variables.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <header className="app__header">
            <NavBar />
          </header>
          <div className="app__body">
            <Routes />
          </div>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

// a good example of blog website in React
// https://www.youtube.com/watch?v=1qZE0HUclfA
// https://www.freecodecamp.org/news/fullstack-react-blog-app-with-express-and-psql/
// https://dev.to/kingdavid/learn-react-hook-by-building-a-simple-blog-app-22i2

// Top 15: Best Rich Text Editor Components (WYSIWYG) for ReactJS
// https://ourcodeworld.com/articles/read/1065/top-15-best-rich-text-editor-components-wysiwyg-for-reactjs

// firebase cloud example
// https://youtu.be/B-kxUMHBxNo?t=10582
// https://youtu.be/B-kxUMHBxNo?t=12276

// stop here
// https://firebase.google.com/codelabs/firestore-web#9
// https://firebase.google.com/docs/firestore/security/get-started
// https://firebase.google.com/docs/firestore/quickstart
// https://cloud.google.com/firestore/docs/client/get-firebase

// Basic examples of using Cloud Firestore Security Rules
// https://khreniak.medium.com/cloud-firestore-security-rules-basics-fac6b6bea18e
