
export const localStorageLoad = store => next => action => {
  const { type } = action;
  if (type === 'INIT') {
    const storedState = JSON.parse(
      localStorage.getItem('savedState')
    );
      console.log('saved state from init -----> ', localStorage.getItem('savedState'));
    if (storedState) {
      store.dispatch({
        type: 'RESET_STATE',
        payload: storedState 
      });
    }
    // return;
  }
  return next(action);
};
// export const localStorageMiddleware = ({getState}) => next => action => {
//   const result = next(action);
//   localStorage.setItem('savedState', JSON.stringify(getState()));
//   return result;
// };

// export const localStorageDump = store => next => action => {

// }
export const localStorageDump = store => next => action => {
  //save state to localStorage;
  // const result = next(action);
  const state = store.getState();
  let newState = {};
  // for (var key in state) {
  //   if (state.hasOwnProperty(key) {
  //     newState[key] = state[key]
  //   }
  // }
  localStorage.setItem('savedState', JSON.stringify(state));
  console.log('local storage dump run ----> ', localStorage.getItem('savedState'));
  // return result;
  next(action);
}

// // export default store => next => action => 
// // { next(action); 
// //   const state = store.getState(); 
// //   let newState = {}; 
// //   for (var key in state) 
// // { if( state.hasOwnProperty(key) )
// //    { if (state[key].toJS) { 
// //     newState[key] = state[key].toJS(); 
// //   } 
// // } 
// // } 
// //     sessionStorage.setItem("key", JSON.stringify(newState)); 