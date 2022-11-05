import React from 'react';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import stateData from '../data/initialState.json'
import {products, sort} from '../code/reducers'
import ProductList from './ProductList'

const store = createStore(
	combineReducers({products, sort}),
	stateData
)

function Main() {

    return (
        <div>
            <Provider store={store}>
                <ProductList />
            </Provider>
        </div>
    )
}
export default Main