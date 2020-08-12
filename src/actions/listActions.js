import Dispatcher from '../dispatcher';
import ActionTypes from '../constants';

class ListActions {

	addNewItem(item) {
		// Note: This is usually a good place to do API calls.
		Dispatcher.dispatch({
			actionType: ActionTypes.ADD_NEW_ITEM,
			payload: item 
		});
	}

}

export default new ListActions();