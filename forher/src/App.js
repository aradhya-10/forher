import {AddPost, Footer, Form, Navbar} from "./components"
import sheBuilds from "./images/sheBuilds.png" 

function App() {
  return (
		<div className="min-h-screen w-full overflow-x-hidden">
		<div className="w-full overflow-hidden absolute h-screen top-0">
		<img src={sheBuilds} className="w-screen overflow-hidden object-fill"/>
		</div>
		{/* <AddPost/> */}
		<div className="">
		<Navbar />
		<Form />
		<Footer/>
		</div>
		</div>
  );
}

export default App;
