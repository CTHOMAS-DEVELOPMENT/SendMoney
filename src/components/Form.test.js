import React from "react";
import ConnectedForm, { Form } from './Form';
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
    container = shallow(<Form store={store}  accounts={accounts} onSubmit={ dummy }/> )  
  })
  it('+++ render the connected Redux component', () => {
        expect(container.length).toEqual(1);
  });

describe('>>>FORM --- REACT-REDUX (Mount + wrapping in <Provider>)',()=>{
    
    beforeEach(()=>{        
        dummy = jest.fn() ;
        accounts=[{balance: 350000,initial: 500000,name: "current"},{balance: 50000,name: "savings"}]
        store = mockStore(initialState)
        wrapper = mount( <Form  store={store} accounts={accounts} onSubmit={ dummy }/> )
        tree=create(<Form  store={store} accounts={accounts} onSubmit={ dummy }/>).toJSON();

    })

   test('Check Prop were passed', () => {
      expect(wrapper.props().accounts).toBe(accounts);
    });
   test("COMPONENT: Form (Structure tests)",()=>{
    expect(tree.type).toBe('div');
    expect(tree.props.className).toBe("item tall");
    expect(tree.children[1].type).toBe('form');
    expect(tree.children[1].children[2].props.id).toBe('name');
    expect(tree.children[1].children[5].props.id).toBe('email');
    expect(tree.children[1].children[8].props.id).toBe('amount');
   });

});

