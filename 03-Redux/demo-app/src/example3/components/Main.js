import React from 'react';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'

import stateData from '../data/initialState.json'
import {products, sort} from '../code/reducers'
import ProductList from './ProductList'
import AddProductForm from './AddProductForm'

const store = createStore(
	combineReducers({products, sort}),
	stateData
)

function Main() {

    return (
        <div>
            <Provider store={store}>
                <ProductList />
                <AddProductForm />
            </Provider>
        </div>
    )
}
export default Main