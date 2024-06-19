function getState(promise) {
  const pending = { state: "pending" };

  return Promise.race([promise, Promise.resolve(pending)]).then(
    (value) => {
      if (value === pending) {
        return "pending";
      } else {
        return "fulfilled";
      }
    }
  ).catch(()=>{
    return 'rejected'
  })
}

const p1 = Promise.resolve();
const state1 = getState(p1); // === "fulfilled"
console.log(state1);

const p2 = Promise.reject();
const state2 = getState(p2); // === "rejected"
console.log(state2);

const p3 = new Promise(() => {});
const state3 = getState(p3);
console.log(state3);
