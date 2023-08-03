export const getFishData = () => {
  console.log('env', process.env)
  return fetch(`https://api.nookipedia.com/nh/fish?&api_key=${process.env.REACT_APP_API_KEY}`)
  .then(res => res.json())
}