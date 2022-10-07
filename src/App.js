import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
// APP name - Textutils
// We will implement functionality of manipulating text (capitalizing, word cound, remove space etc etc)
// 1.  we goona place bootstrap navbar here, replace all href = "#" with href = "/" and we append / in slef closing tags and change class to className
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About-TextUtils" />
      <div className="container">
        <Textbox heading="Enter your text to analyze below:"/>
      </div>
      
    </>
  );
}

export default App;


// ============= PROPS =============
// 1. Building First Component
// Props give dynamicity to web page for example
// we want to use a navbar  component for different website names
// we pass name of navbar as a prop

// ============ END-PROPS ==========

