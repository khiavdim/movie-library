import React from 'react';
import DisplayStar from './../Star/DisplayStar';
import './List.css';

function List(props) {

	function getInitials(title) {
		var parts = title.split(' ');
		var initials = ''
			for (var i = 0; i < parts.length; i++) {
				if (parts[i].length > 0 && parts[i] !== '') {
					initials += parts[i][0]
				}
			}
		return initials.substring(0, 3).toUpperCase();
	}

	function truncateTitle (title, num) {
		if (title.length > num) {
			return title.slice(0, num) + "...";
		  } else {
			return title;
		  }
	}

	return (<div>
		{props.movies.map((movie) => {
			return (
				<div className="movie-list" key={movie.title}>
					<div className="blue-icon">{getInitials(movie.title)}</div>
					<div className="movie-info">
						<div className="movie-title">{truncateTitle(movie.title, 20)}</div>
						<div className="cat-data">{movie.category}</div>
					</div>
					<div className="movie-rating"><DisplayStar rating={movie.rating}/></div>
				</div>
		)})}
	</div>
);}

export default List;
