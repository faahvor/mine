import Data from "./assets/mockData"
import  Cover  from "./components/Cover"
import Side from "./components/Side"

function App() {
  

  return (
    <div className="grid sm:grid-cols-[1fr,30rem]  md:ml-[9rem] mx-6 md:mx-0 ">
      <div>
      <h1 className="font-bold text-5xl px-4 pt-9 mb-7">Desserts</h1>
    <Cover data={Data}/>
    </div>
    <Side check={Data}/>
        
    </div>
  )
}

export default App
