export default function(state = [], action){

	switch(action.type){
		case 'FETCH_COUNTRY':
			return [action.payload.data, ...state]
	}
	
	return state;
}