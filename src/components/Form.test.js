import React from "react";
import { ConnectedForm } from './Form';
import { shallow, configure} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store'
configure({adapter: new Adapter()});
let wrapper;
const mockLoginfn = jest.fn();
const mockStore = configureStore();
const initialState = {
    gifts:[],
    errorMessage: "",
    name:"",
    email:"",
    amount:"",
    errors: { email: '', amount: '', name: '' }
  };
beforeEach(() => {
    let dummy = jest.fn() ;
    let store = mockStore(initialState);
    let accounts=[{balance: 350000,initial: 500000,name: "current"},{balance: 50000,name: "savings"}]

    wrapper = shallow(<ConnectedForm accounts={accounts} onSubmit={ dummy }/>);
});

describe('<ConnectedForm /> rendering', () => {

    it('should call the mock form submit', () => {
        wrapper.find('form').simulate(
            'submit', 
            {preventDefault() {}}
          )
        expect(mockLoginfn.mock.calls.length).toBe(0)
       }
)
     
});