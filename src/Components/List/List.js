import React from 'react';
import './List.css';
const List = props => (
	<div>
		<div className="movie-list">
			<div className="blue-icon">XYZ</div>
			<div className="movie-info">
				<div className="movie-title">Title</div>
				<div className="cat-data">Comedy</div>
			</div>
			<div className="movie-rating">Stars</div>
		</div>
	</div>
);

export default List;
