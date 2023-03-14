import { useState, useEffect } from 'react';
import './Meme.css';

const Meme = () => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allmemeImages, setAllMemeImages] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, [])

  const getMemeImage = () => {
    const memesArray = allmemeImages;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };
  
  return (
    <main>
      <div className='form'>
        <input
          className='form--input'
          placeholder='Top text'
          type='text'
          name='topText'
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className='form--input'
          placeholder='Bottom text'
          type='text'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className='form--button' onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className='meme-box'>
        <img src={meme.randomImage} alt='meme' className='meme--image' />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Meme;
