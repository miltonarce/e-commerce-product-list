import Header from "@/components/Common/Header";

interface ILayout {
  children: React.ReactElement;
}

function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <main className="bg-gray-100 min-h-screen min-h-[100vh] py-24">
        {children}
      </main>
    </>
  );
}

export default Layout;
