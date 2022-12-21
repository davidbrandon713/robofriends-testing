import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import { thunkMiddleware } from "redux-thunk";
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";


const mockStore = configureMockStore([thunkMiddleware]);

it('should create an action to search robots', () => {
    const text = 'clem'
    const expectedAction = {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
    expect(actions.setSearchField(text)).toEqual(expectedAction)
})

// it('handles requesting robots API', () => {
//     const store = mockStore;
//     store.dispatch(actions.requestRobots())
//     const action = store.getActions();
//     const expectedAction = {
//         type: REQUEST_ROBOTS_PENDING
//     }
//     expect(action[0]).toEqual(expectedAction)
// })

// it('confirms successful robots API request', () => {
//     const mockData = {
//         id: 1,
//         name: 'John',
//         email: 'John@gmail.com'
//     }
//     const store = mockStore;
//     store.dispatch(actions.requestRobots())
//     const action = store.getActions();
//     console.log('action ', action)
//     const expectedAction = [{
//         type: REQUEST_ROBOTS_SUCCESS,
//         payload: mockData
//     }]
//     expect(action[0]).toEqual(expectedAction)
// })