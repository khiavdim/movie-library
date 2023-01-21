import React from 'react';
import './Form.css'

const Form = props => (
	<div className="form-container">
		<form>
			<div className="form-fields">
				<div className="label">Name</div>
				<input className="input-selections" type="text" placeholder='Name of the movie'/>
			</div>
			<div className='form-fields'>
				<div className="label">Category</div>
					<select className="input-selections">
						<option value="" disabled selected hidden>Select a category</option>
						<option value="action-adventure">Action/Adventure</option>
						<option value="comedy">Comedy</option>
						<option value="documentary">Documentary</option>
						<option value="drama">Drama</option>
						<option value="horror">Horror</option>
						<option value="romance">Romance</option>
						<option value="sci-fi">Science Fiction</option>
					</select>
			</div>
			<div className='form-fields'>
				<div className="label">Rating</div>
				<div>stars</div>
			</div>
			<div className='form-fields'><input type="submit" value="Add Movie"/></div>
		</form>
	</div>
);

export default Form;
