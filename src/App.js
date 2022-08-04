import {ClipSearch, ClipAdd, ClipEle} from './CommonComp.js'
import DataGrid2 from './tagGrid.js';

function App() {

  function addSubmitHandler(props) {
    console.log('module click handler')
  }

  return (
    <div>
      <div>Hello Apurv</div>
      <ClipSearch />
      <br/><br/><br/>
      <ClipAdd submitHandler={addSubmitHandler}/>
      <br/><br/><br/>
      <ClipEle clip_name="Clip 1" clip_content="This is the first clip" />
      <DataGrid2 />
      
    </div>
  );
}

export default App;
