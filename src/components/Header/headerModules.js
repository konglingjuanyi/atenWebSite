// init hover container width

export const HOVER_WIDTH = 0;
export const HOVER_MENU = "HOVER_MENU";
// Action
// 


export const onHover = (width = 0, index = "/") => {
	return {
		type: HOVER_MENU,
		width: width,
		index: '/'
	}
}

export const actions = {
	onHover
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[HOVER_MENU]: (state, action, time) => {
		alert(1)
	}
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function hoverReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]

	return handler ? handler(state, action) : state
}