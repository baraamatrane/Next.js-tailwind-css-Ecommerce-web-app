import Sidebar from "./Sidebar";

export default function RootLayout({ children }) {
  return (
    <div className="w-full mt-8 md:p-5">
      <div className="w-full flex md:flex-row flex-col items-start justify-start gap-10">
        <Sidebar />
        {children}
      </div>
    </div>
  );
}
