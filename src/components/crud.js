/*Basic data maintainence
It maintains 1 entity (articles)
A full system would have more than 1 file like this and they would all be smaller.
*/
import fb from "../data/dbConnect";
import {addDb} from "../actions/actions"
import store from "../store"


////////////
//INITIALIZE
////////////
export const initializeFbData = () => {
  let data={};
  fb.on('value', snapshot => {
    const data = snapshot.val();
    store.dispatch(addDb(data));
  return data;
  })
}
/////
//ADD
/////
export const insertFbGift= (values, balance) => {
  const {name, email, amount}=values;

  fb.child('gifts')
  .push({name,email,amount}, response => response)
  .then(data => { 
      fb.child(`accounts/0`).update({"balance":balance-amount}, response => response);
  })
  .then(data => { console.log("Data transactions complete"); return true;});
}

////////
//UPDATE
////////

////////
//DELETE
////////

