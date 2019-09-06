import fb from "../data/dbConnect";
import {addDb} from "../actions/actions";
import store from "../store";

////////////
//INITIALIZE
////////////
export const getFbData = async () => {
  const snapshot = await fb.once('value');
  store.dispatch(addDb(snapshot.val()));
}
/////
//ADD
/////
export const insertFbGift= (values, balance) => {
  const {name, email, amount}=values;

  fb.child('gifts')
  .push({name,email,amount}, response => response)
  .then(() => { 
      fb.child(`accounts/0`).update({"balance":balance-amount}, response => response);
  })
  .then(() => { 
    console.log("Data transactions complete"); 
    return true
  })
}

////////
//UPDATE
////////

////////
//DELETE
////////

