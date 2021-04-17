import NavBar from "../NavBar";

const Layout = ({ children }) => (
  <div className="bg-gray-100">
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="self-center w-full mt-4 max-w-7xl">{children}</div>
    </div>
  </div>
);

export default Layout;
