function sum(arr) {
  return arr.reduce((curr, next) => curr + next);
}
function genTicket(n) {
  let newTicket = [];
  for (let i = 0; i < n; i++) {
    newTicket.push(Math.floor(Math.random() * 10));
  }
  return newTicket;
}
export { sum, genTicket };
