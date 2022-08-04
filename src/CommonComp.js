// this has the basicc components

function ClipSearch() {

      return (
            <div className='SearchClip'>
                  <h2>Search by clip name</h2>
                  <label>Clip Name: </label>
                  <input type='text' name='ClipeName'></input><br/><br/>
                  <button className='SubmitSearch'>Search clip</button>
            </div>
      );
}



function ClipAdd(props) {

      return (
            <div className="AddClip">
                  <h2>Add New Clip</h2>
                  <label>Clip Name: </label>
                  <input type='text' name='ClipName'></input><br/><br/>
                  <label>Clip Content: </label>
                  <input type='textarea' name='ClipContent'></input><br/><br/>
                  <button className="AddClip" onClick={props.submitHandler}>Add Clip</button>
            </div>
      );
}


function ClipEle(props) {

      return (
            <div className="ClipEle">
                  <span name="ClipName">{props.clip_name}</span><br/><br/>
                  <span name="ClipContent">{props.clip_content}</span>
            </div>
      );

}


export {ClipSearch, ClipAdd, ClipEle};