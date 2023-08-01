export const getFishData = () => {
  fetch('http://acnhapi.com/v1/fish')
  .then(res => res.json())
}