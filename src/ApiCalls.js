export const getFishData = () => {
  return fetch('https://api.nookipedia.com/nh/fish?&api_key=046bc4fc-dbb4-408b-9a12-81377a53adac')
  .then(res => res.json())
}