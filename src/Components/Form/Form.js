import React, { useState, useEffect } from 'react';
import './Form.css'
import StarRating from "./../Star/StarRating";
import { set } from 'react-hook-form';
const Swal = require('sweetalert2')

const categories = [
    {
      id: 1,
      type: "Action/Adventure",
    },
    {
      id: 2,
      type: "Comedy",
    },
    {
      id: 3,
      type: "Documentary",
    },
    {
      id: 4,
      type: "Drama",
    },
    {
      id: 5,
      type: "Horror",
    },
    {
      id: 6,
      type: "Romance",
    },
    {
      id: 7,
      type: "Science Fiction",
    },
  ];

function Form(props) {
	const [movie, setMovie] = useState({
		title: '',
		category: '',
		rating: '',
	});
	const [reset, setReset] = useState(false);

	const handleChange = (event) => {
		setMovie({ ...movie, [event.target.name]: event.target.value });
	};

	function logRating(value) {
		setMovie({ ...movie, rating : value });
	}

	useEffect(()=>{
		setReset(true)
	}, [movie])
	
	const handleSubmit = (event) => {
		if (movie.title === "") {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Name cannot be blank',
			})
		}
		else if (movie.category === "") {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Category cannot be blank',
			})
		}
		else if (movie.rating === "") {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Rating cannot be blank',
				})
		}
		else 
		{
			event.preventDefault();
			let duplicate = props.movies.filter( obj => (obj.title === movie.title));
			if (duplicate.length > 0) {
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Duplicate film in the database',
					})
				duplicate = [];
			} else {
				setReset(true);
				props.addMovie(movie);
				setMovie({ title: "", category: "", rating: "" });
				document.getElementById("movie-form").reset();
				setReset(false);
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: 'Film Rating has been documented',
					showConfirmButton: false,
					timer: 2000
				});
			}
		}
	};

	return (
	<div className="form-container">
		<form onSubmit={handleSubmit} id="movie-form">
			<div className="form-fields">
				<div className="label">Name</div>
				<input className="input-selections" type="text" name="title" value={movie.title} placeholder='Name of the movie' onChange={handleChange}/>
			</div>
			<div className='form-fields'>
				<div className="label">Category</div>
					<select className="input-selections" name="category" onChange={handleChange}>
						<option key="" value="" >Select a category</option>
						{categories.map((category) => {
          					return <option key={category.id} value={category.type}>{category.type}</option>;
        				})}
					</select>
			</div>
			<div className='form-fields'>
				<div className="label">Rating</div>
				<div><StarRating onChange={logRating} reset={reset}/></div>
			</div>
			<div className='form-fields'><input type="submit" value="Add Movie"/></div>
			
		</form>
		
	</div>
);}

export default Form;
