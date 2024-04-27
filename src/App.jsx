import { useEffect, useState } from 'react'
import './App.css'
import background from "./assets/background.png"
import star from "./assets/star.svg"

function App(props) {
  const [mode, setMode] = useState(0)
  const [postContent, setPostContent] = useState("")
  const [name, setName] = useState("")
  const [stars, setStar] = useState(1)
  const [data, setData] = useState(null)
  const [orderBy, setOrder] = useState("date_created")

  function activateInput(id) {
    const elem = document.getElementById('star-' + id)
    console.log(elem)
    elem.checked = true;
  }

  async function fetchPost() {
    const { data, error } = await props.supabase.from("Reviews").select().order(orderBy, { ascending: false });
    setData(data)
  }

  useEffect(() => {
    fetchPost()
  }, [])

  useEffect(() => {
    fetchPost()
  }, [orderBy])

  function renderReviews() {
    let elemList = []
    if (data != null) {
      for (let review of data) {
        if (review['star'] == 1) {
          elemList.push(
            <div key={review["id"]} className='review-elem' onClick={() => {window.location.href = "/review/" + review["id"]}}>
              <p>{`Name: ${review['name']}`}</p>
              <p>{`Comments: ${review['content']}`}</p>
              <img className="star-img" src={star}></img>
            </div>
          )
        }
        else if (review['star'] == 2) {
          elemList.push(
            <div key={review["id"]} className='review-elem' onClick={() => {window.location.href = "/review/" + review["id"]}}>
              <p>{`Name: ${review['name']}`}</p>
              <p>{`Comments: ${review['content']}`}</p>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
            </div>
          )
        }
        else if (review['star'] == 3) {
          elemList.push(
            <div key={review["id"]} className='review-elem' onClick={() => {window.location.href = "/review/" + review["id"]}}>
              <p>{`Name: ${review['name']}`}</p>
              <p>{`Comments: ${review['content']}`}</p>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
            </div>
          )
        }
        else if (review['star'] == 4) {
          elemList.push(
            <div key={review["id"]} className='review-elem' onClick={() => {window.location.href = "/review/" + review["id"]}}>
              <p>{`Name: ${review['name']}`}</p>
              <p>{`Comments: ${review['content']}`}</p>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
            </div>
          )
        }
        else if (review['star'] == 5) {
          elemList.push(
            <div key={review["id"]} className='review-elem' onClick={() => {window.location.href = "/review/" + review["id"]}}>
              <p>{`Name: ${review['name']}`}</p>
              <p>{`Comments: ${review['content']}`}</p>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
              <img className="star-img" src={star}></img>
            </div>
          )
        }
      }  
    }
    return elemList

}


  async function createReview() {
    const { e, error } = await props.supabase
    .from('Reviews')
    .insert({name: name, "content": postContent, "star": stars})
    console.log(error)
    window.location.href = "/";
  }

  function renderPostCreationForm() {
    return (
      <form className="postForm" encType="multipart/form-data">
        <label>
          <input className="title-input" placeholder='Name of Employee' onChange={(e) => {setName(e.target.value)}}></input>
        </label>
        <label>
            <ul onClick={(e) => {e.stopPropagation(); e.preventDefault()}}>
                <li className='star-selection-elem' onClick={() => {activateInput("1"); setStar(1)}}>
                  <input id="star-1" type="radio" name="star-select" value="1" />
                  <p>One Star</p>
                  <img className="star-img" src={star}></img>
                </li>
                <li className='star-selection-elem' onClick={() => {activateInput("2"); setStar(2)}}>
                  <input id="star-2" type="radio" name="star-select" value="2" />
                  <p>Two Star</p>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                </li>
                <li className='star-selection-elem' onClick={() => {activateInput("3"); setStar(3)}}>
                  <input id="star-3" type="radio" name="star-select" value="3" />
                  <p>Three Star </p>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                </li>
                <li className='star-selection-elem' onClick={() => {activateInput("4"); setStar(4)}}>
                  <input id="star-4" type="radio" name="star-select" value="4" />
                  <p>Four Star</p>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                </li>
                <li className='star-selection-elem' onClick={() => {activateInput("5"); setStar(5)}}>
                  <input id="star-5" type="radio" name="star-select" value="5" />
                  <p>Five Star</p>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                  <img className="star-img" src={star}></img>
                </li>
              </ul>
        </label>
        <label>
          <textarea
            className="content-input"
            placeholder="Enter your comments here"
            onChange={(e) => setPostContent(e.target.value)}
            rows={4}
            cols={50} 
          ></textarea>
        </label>
        <div className="post-button-container">
          <label>
            <button className="btn text-xl" onClick={() => createReview()}>Submit Post</button>
          </label>         
        </div>
      </form>
    );
  }

  return (
    <div className='App'>
      <img className="page-background" src={background}></img>
      {mode == 1? (<>{renderPostCreationForm()}</>) : 
      (<div className='review-container'>
      {renderReviews()}     
      <button onClick={()=> {setMode(1)}}>Create Review</button>
      <button className="btn text-xl" onClick={() => setOrder("date_created")}>Sort By Time Created</button>
      <button className="btn text-xl" onClick={() => setOrder("star")}>Sort By Stars</button>
      <button className="btn text-xl" onClick={() => setOrder("name")}>Sort By Name</button>
      </div>)}
    </div>
  )
}

export default App
