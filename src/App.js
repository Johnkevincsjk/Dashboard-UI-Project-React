import './App.css';
import Inputdata from './Componants/Inputs/Input';
import Searchbar from './Componants/Searchbar/Searchbar';
import Sidebar from './Componants/Sidebar/Sidebar';
import Tabledata from './Componants/Table/Table';


function App() {


  return <div class="container">
    <div class="row">
      <div class="col-2">
        < Sidebar />
      </div>
      <div class="col-10 p-5">
        <div class="row mb-5">
          <Searchbar />
        </div>
        <Inputdata />
        <div class="row px-2">
          <Tabledata />

        </div>

      </div>
    </div>
  </div>



}

export default App;
