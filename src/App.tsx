import { BrowserRouter, Route, Routes } from "react-router-dom";

import RequireAuth from "@/modules/auth/RequireAuth";
import LoginScreen from "@/modules/login/LoginScreen";
import AddOrderScreen from "@/modules/orders/AddOrderScreen";
import OrdersScreen from "@/modules/orders/OrdersScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <OrdersScreen />
            </RequireAuth>
          }
        />
        <Route
          path="/orders/add"
          element={
            <RequireAuth>
              <AddOrderScreen />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
