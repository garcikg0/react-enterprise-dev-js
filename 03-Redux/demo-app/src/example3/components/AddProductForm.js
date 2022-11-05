import React from 'react'
import {useDispatch} from 'react-redux'
import './AddProductForm.css'
import {addProduct} from '../code/actions'

function AddProductForm() {

    // Get dispatch function from React Redux.
    const dispatch = useDispatch()

	let descrElem = React.useRef(null) 
	let priceElem = React.useRef(null)

    // Note how we dispatch actions to Redux via the dispatch() function.
    function onAddProduct(event) {
		event.preventDefault()
		if (descrElem.current && priceElem.current) {
			dispatch(addProduct(descrElem.current.value, Number(priceElem.current.value)) )
			descrElem.current.focus()
			descrElem.current.value = ''
			priceElem.current.value = ''
		}
    }

    return (
        <div>
			<h2>Add a new product</h2>
			<form className="addProduct" onSubmit={onAddProduct}>
				<div>
					<label>Description</label>
					<input type="text" required ref={descrElem} />
				</div>
				
				<div>
					<label>Price</label>
					<input type="number" required ref={priceElem} />
				</div>
				
				<div>
					<button>Add Product</button>
				</div>
			</form>
		</div>
    )

}
export default AddProductForm
