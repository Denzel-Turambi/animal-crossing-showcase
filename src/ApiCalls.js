export const getFishData = () => {
  return fetch(`https://api.nookipedia.com/nh/fish?&api_key=${process.env.REACT_APP_API_KEY}`)
  .then(res => res.json())
}

export const getSingleFish = (name) => {
  return fetch(`https://api.nookipedia.com/nh/fish/${name}?&api_key=${process.env.REACT_APP_API_KEY}`)
  .then(res => res.json())
}