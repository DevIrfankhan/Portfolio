import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import NewNav from "./components/NewNav";

function App() {
  return (
    <>
      <Navbar />
      {/* <NewNav /> */}
      <Hero/>
      

      <div className="h-screen flex justify-center items-center text-4xl">
        Welcome to My Portfolio

      </div>
    </>
  );
}

export default App;