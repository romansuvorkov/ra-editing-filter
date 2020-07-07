import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const { targetId } = useSelector(state => state.serviceEdit);	

	const dispatch = useDispatch();

	const handleChange = evt => {
		const {name, value} = evt.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = evt => {
		evt.preventDefault();
		dispatch(addService(item.name, item.price, targetId));
		dispatch(editService(null));
	}

	const handleCancel = evt => {
		item.name = '';
		item.price = '';
		dispatch(changeServiceField(item.name, item.price));
		dispatch(editService(null));
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
			{targetId && <button type='reset' onClick={handleCancel}>Cancel</button>}
		</form>
	);
}

export default ServiceAdd;
