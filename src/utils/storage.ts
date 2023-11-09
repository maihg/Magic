export const getPlayers = () => {
  let list = window.sessionStorage.getItem("players");
  if (list !== null) return JSON.parse(list)
  else return null
}