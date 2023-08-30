const API_ENDPOINT = 'https://random-word-api.vercel.app/api?words=1';

const fetchWord = async () => {
  try {
    const res = await fetch(API_ENDPOINT);
    if (!res.ok) {
      throw new Error('Invalid Https request');
    }
    return res.json();
    
  } catch (err) {
    if (err.name === 'AbortError') {
      return;
    }
    console.err(err);
  };

};

export { fetchWord };