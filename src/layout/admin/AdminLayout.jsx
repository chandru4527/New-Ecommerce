import { Outlet } from "react-router-dom";
import AdminNavbar from './adminLayout components/AdminNavbar'

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <aside className="w-65 border-r p-4">
        Admin Sidebar
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <AdminNavbar/>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;