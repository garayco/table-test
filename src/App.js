import "antd/dist/antd.css";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/login";
import PrivateRoutes from "./routes/privateRoutes";
import Layout from "./layout";
function App() {
  let isLogin = window.sessionStorage.getItem("user");

  return (
    <Router>
      {!isLogin ? (
        <Login />
      ) : (
        <Layout>
          <PrivateRoutes />
        </Layout>
      )}
    </Router>
  );
}

export default App;
