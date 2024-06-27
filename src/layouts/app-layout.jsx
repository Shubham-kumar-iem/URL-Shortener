import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="container min-h-screen">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 mt-10 text-center bg-gray-800">
        Made with 💗 by <a href="https://shubhamweb.vercel.app/" target="_blank">Shubham</a>
      </div>
    </div>
  );
};

export default AppLayout;
