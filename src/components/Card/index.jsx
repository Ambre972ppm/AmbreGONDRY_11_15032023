import './Card.css'
import { Link } from 'react-router-dom'

function Card({ id, title, cover }) {
	return (
		<Link className="kasa-housing-list-item-link" to={`/housing-page/${id}`}>
			<div 
			 className='kasa-housing-list-item'>
				<img className='kasa-housing-list-item-cover' src={cover} alt={`${title} cover`} />
				<h2 className='kasa-housing-list-item-title'>{title}</h2>
			</div>
		</Link>
	)
}

export default Card