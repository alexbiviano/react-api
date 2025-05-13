import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [actress, setActress] = useState([]);

  const fetchActress = () => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => setActress(resp.data))
  }

  useEffect(() => (fetchActress()), []);

  return (
    <>
      <div className="container">
        <div className="row">
          {actress.map((act) => (
            <div key={act.id} className="col-12 my-3">
              <div className="card d-flex flex-row">
                <div className="card-img">
                  <img src={act.image} alt="" />
                </div>
                <div className="card-body ">
                  <div className="name mb-3"><h2>{act.name}</h2></div>
                  <div className="data mb-3"><h4>{act.birth_year}</h4></div>
                  <div className="nation mb-3"><h4>{act.nationality}</h4></div>
                  <div className="bio mb-3">{act.biography}</div>
                  <div className="awards"><h5>{act.awards}</h5></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App 



