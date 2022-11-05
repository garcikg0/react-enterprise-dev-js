import {ActionType, SortedBy} from './types'

export function products(state=[], action) {			
	switch (action.type) {
		case ActionType.ADD_PRODUCT:
			return [...state, {...action.payload}]
	
		case ActionType.LIKE_PRODUCT:
			return state.map(p => 
				(p.id === action.payload.id)
					? {...p, likes: p.likes+1, mostRecentLike: new Date()}
					: p
			)

		case ActionType.REMOVE_PRODUCT:
			return state.filter(
				p => p.id !== action.payload.id
			)

		default:
			return state
	}
}

export function sort(state=SortedBy.DESCRIPTION, action) {
	switch (action.type) {
		case ActionType.SORT_PRODUCTS:
			return action.payload.sortBy
		default :
			return state
	}
}
