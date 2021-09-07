import React, { useState , useEffect} from 'react';
import Result from './components/Result';
import './App.css'
import logo from './images/logo.gif'
import buttonimg from './images/buttonimg.gif'


function App() {


  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState(``);
  const [query, setQuery] = useState(`javascript`)

  useEffect(() => {
    getRequest();
  }, [query]);

  const getRequest = async () => {
    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`)
    const data = await response.json()
    setGifs(data.data)
    console.log(gifs)
  }

  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  

  const getResult = (e)=> {
    e.preventDefault();
    setQuery(search);
    setSearch(``)
  }

  // getRequest();

  return (
    <div className="App">
      <div className="heading">
        <h1>Search GIF</h1>
        <img className="logo" src={logo} alt="Powered By GIPHY" />
      </div>
      <form onSubmit={getResult} className="search-form">
        <input className="search-box" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button">Search<img src={buttonimg} alt="" /></button>
      </form>
      <div className="container">
        {gifs.map(gifMap => (
          <Result url={gifMap.images.downsized_large.url}/>
        ))}
      </div>
    </div>
  );
}

export default App;