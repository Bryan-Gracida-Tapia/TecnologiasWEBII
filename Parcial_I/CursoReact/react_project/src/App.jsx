import { Button } from "./components/button/Button";
import Profile from "./components/profile/Profile";
import AdminPanel from "./components/admin/AdminPanel";
import ShoppingList from "./components/shopping/ShoppingList";

export default function MyApp() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <AdminPanel />
      <Profile />
      <ShoppingList />
      <Button />
    </div>
  );
}
