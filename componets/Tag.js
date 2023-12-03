import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY; 

const Tag = () => {
    const[tag,setTag] =useState('handstand');
  const[gif,setGif] = useState('');
  const[loading,setLoading] = useState(false);

 

    async function fetchData(){


const url = `https://api.giphy.com/v1/stickers/random?api_key=7LvxD48iAVGznnx8IQOD1WV9DF7mD3eF&tag=${tag}`;
        setLoading(true);
        const output = await axios.get(url);
        const data = output.data.data.images.downsized_large.url;
        setGif(data);
        setLoading(false);
        
    }

    useEffect(()=>{
       fetchData();
    },[])

  function clickHandler(){
fetchData();
  }

  return (
    <div className='random Tag'>
        <h2>A RANDOM GIF</h2>
        {
            loading? <Spinner/> :   <img src={gif}
            width={300}
            height={210} />
        }
      
      <input type="text"
       onChange={(event)=>{setTag(event.target.value)}}
       value={tag} />

        <button onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag