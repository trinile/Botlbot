import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../public/client/actions/Login';
import * as types from '../public/client/constants';
import nock from 'nock';
import authStatus from '../public/client/reducers/Auth';

 // You can use any testing library
import { expect } from 'chai';
import deepFreeze from 'deep-freeze';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

it('creates a LOGIN_SUCCESS when fetching for authentication is done', () => {
  nock('http://127.0.0.1:1337')
    .get('/authUser')
    .reply(200, { userID: '1234567'})

  const expectedActions = [
  { type: types.LOGIN_REQUEST, isAuthenticated: false, isFetching: true },
  { type: types.LOGIN_SUCCESS, isAuthenticated: true, isFetching: false }
  ]
  const store = mockStore({ isAuthenticated: false, isFetching: false });

  return store.dispatch(actions.authUser())
    .then(() => { //return async action
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})







