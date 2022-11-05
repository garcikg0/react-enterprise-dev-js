import { ActionType, SortedBy } from './types'

let nextId = 100  // Simplified

export function addProduct(description, price) {
	console.log(`Product ${description}, ${price} addProduct action`)
	return {
		type: ActionType.ADD_PRODUCT,
		payload: {
			id: nextId++,
			description: description,
			price: price,
			likes: 0,
			mostRecentLike: undefined
		}
	}
}

export function likeProduct(id) {
	console.log(`Product ${id} likeProduct action`)
	return {
		type: ActionType.LIKE_PRODUCT,
		payload: {
			id: id
		}
	}
}

export function removeProduct(id) {
	console.log(`Product ${id} removeProduct action`)
	return {
		type: ActionType.REMOVE_PRODUCT,
		payload: {
			id: id
		}
	}
}

export function sortProducts(sortByField) {
	console.log(`Sort-by-${sortByField} sortProducts action`)
	let sortBy =""
	if (sortByField === "description")
		sortBy = SortedBy.DESCRIPTION
	else if (sortByField === "price")
		sortBy = SortedBy.PRICE
	else 
		sortBy = SortedBy.LIKES

	return {
		type: ActionType.SORT_PRODUCTS,
		payload: {
			sortBy: sortBy
		}
	}
}
