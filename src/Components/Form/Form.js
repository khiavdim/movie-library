import React from 'react';
import { useState} from "react";
import './Form.css'
import StarRating from "./../Star/StarRating";
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
	
	  const handleSubmit = (event) => {
		if (movie.title === "") {
			event.preventDefault();
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Name cannot be blank',
			})
		}
		else if (movie.category === "") {
			event.preventDefault();
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Category cannot be blank',
			})
		}
		else if (movie.rating === "") {
			event.preventDefault();
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Rating cannot be blank',
				})
		}
		else {
			event.preventDefault();
			setReset(true);
			console.log('movie', movie);
			props.addMovie(movie);
			setMovie({ title: "", category: "", rating: "" });
			document.getElementById("movie-form").reset();
			setReset(false);
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Your film has been added',
				showConfirmButton: false,
				timer: 2000
			  });
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
