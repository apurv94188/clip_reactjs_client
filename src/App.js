import {ClipSearch, ClipAdd, ClipEle} from './CommonComp.js'

function App() {
  return (
    <div>
      <div>Hello Apurv</div>
      <ClipSearch />
      <br/><br/><br/>
      <ClipAdd />
      <br/><br/><br/>
      <ClipEle clip_name="Clip 1" clip_content="This is the first clip" />
    </div>
  );
}

export default App;
