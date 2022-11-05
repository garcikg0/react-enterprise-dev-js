import React from "react";
import Product from './Product'

// Import the useSelector() function from React Redux.
import {useSelector} from 'react-redux'

function ProductList({store}) {

    // Call React Redux useSelector() function, to get access to "store" object in Redux Store.
    const {products} = useSelector(store => store)

    return (
        <div>
			<h1>Totally Awesome Products [Example 1]</h1>
            {(products.length === 0) ?
                <div>No products</div> :
                products.map(p => {
                    console.log(p)
                    return <Product {...p} />
                } 
            )}
        </div>
    )
}
export default ProductList
