import React from "react";
import { Provider } from 'react-redux';
import ConnectedForm from './Form';
import { shallow, configure, mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import { create } from "react-test-renderer";
configure({adapter: new Adapter()});

const mockStore = configureStore();
let store,container,dummy,accounts,wrapper,tree;

const initialState = {
    gifts:[],
    errorMessage: "",
    name:"",
    email:"",
    amount:"",
    errors: { email: '', amount: '', name: '' }
  };

  beforeEach(()=>{
    dummy = jest.fn() ;
    accounts=[{balance: 350000,initial: 500000,name: "current"},{balance: 50000,name: "savings"}]
    store = mockStore(initialState)
    container = shallow(<ConnectedForm store={store}  accounts={accounts} onSubmit={ dummy }/> )  
  })
  it('+++ render the connected Redux component', () => {
        expect(container.length).toEqual(1);
  });

describe('>>>FORM --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    

    beforeEach(()=>{        
        dummy = jest.fn() ;
        accounts=[{balance: 350000,initial: 500000,name: "current"},{balance: 50000,name: "savings"}]
        store = mockStore(initialState)
        wrapper = mount( <Provider store={store}><ConnectedForm /></Provider> )
        //tree=create(<Provider store={store}><ConnectedForm /></Provider>).toJSON();
        //console.log("TREE*",JSON.stringify(tree));
    })

   //test('+++ contains header - h2', () => {
       //console.log("wrapper*",wrapper.matchesElement(<input required={true} type="text" id="name" placeholder="Name..." value="" onChange={[Function]} />))
   //     expect(wrapper.matchesElement(<input required={true} type="text" id="name" placeholder="Name..." value="" onChange={[Function]} />)).toBeTruthy()
   //});
   
   test("COMPONENT: Form (Structure tests)",()=>{
    tree=create(<Provider store={store}><ConnectedForm /></Provider>).toJSON();
    //console.log("tree",JSON.stringify(tree));
    //console.log("tree.children[0]",JSON.stringify(tree.children[0]));
    expect(tree.type).toBe('div');
    expect(tree.props.className).toBe("item tall");
    expect(tree.children[1].type).toBe('form');
   });

});

