import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import MainContainer from "./MainContainer";
import UserList from "./UserList";
import { DrawerProvider } from "./context/DrawerProvider";

const App = () => {
  return (
    <DrawerProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<MainContainer />} />
            <Route path="home" element={<MainContainer />} />
            <Route path="userlist" element={<UserList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DrawerProvider>
  );
};

export default App;
