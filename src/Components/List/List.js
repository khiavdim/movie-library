import React from 'react';
import DisplayStar from './../Star/DisplayStar';
import { IoTrash } from "react-icons/io5";
import { BsCameraVideoOffFill } from "react-icons/bs";
import './List.css';
const Swal = require('sweetalert2');

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

	function handleDelete(movie) {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!'
		  }).then((result) => {
			if (result.isConfirmed) {
				props.deleteMovie(movie);
				Swal.fire(
					'Deleted!',
					'Your film has been deleted.',
					'success'
				)
			}
		  })
	}

	return (<div>
		{!props.movies.length ? (
			<div>
				<div className="no-data-container">
					<div><BsCameraVideoOffFill size={150} color="#dee2e6"/></div>
					<div>No Data</div>
				</div>
			</div>
		) : (
		<>
		{props.movies.map((movie) => {
			return (
				<div className="movie-list" key={movie.title} > 
					<div className="blue-icon">
						<div class="flip-card">
							<div class="flip-card-inner">
								<div class="flip-card-front">
									{getInitials(movie.title)}
								</div>
								<div class="flip-card-back" >
									<IoTrash size={35}
										onClick={handleDelete.bind(this, movie)}
									/>
								</div>
							</div>
						</div>	
					</div>
					<div className="movie-info">
						<div className="movie-title">{truncateTitle(movie.title, 20)}</div>
						<div className="cat-data">{movie.category}</div>
					</div>
					<div className="movie-rating"><DisplayStar rating={movie.rating}/></div>
				</div>
		)})}
		</>
		)}
	</div>
);}

export default List;
