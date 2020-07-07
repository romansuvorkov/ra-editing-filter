import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService, editService, filterService} from '../actions/actionCreators';

function ServiceFilter() {
	const { filter } = useSelector(state => state.serviceFilter);	

	const dispatch = useDispatch();

	const handleChange = evt => {
		const {value} = evt.target;
        dispatch(filterService(value));
        console.log(value);
	}

	return (
        <div>
			<input className="filter" onChange={handleChange} value={filter} />
            <span>Filter</span>            
        </div>

	);
}

export default ServiceFilter;