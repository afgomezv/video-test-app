import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function Root() {
  const { pathname } = useLocation();

  if (pathname === "/") {
    return <Navigate to="/home" />;
  }

  return (
    <main className="bg-slate-50 h-screen">
      <Outlet />
    </main>
  );
}
