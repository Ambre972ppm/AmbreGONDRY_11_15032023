import '../../styles/HousingItem.css'

function HousingItem({ id, title, cover, location }) {
	return (
		<li key={id} className='kaza-list-item'>
			<img className='kaza-list-item-cover' src={cover} alt={`${title} cover`} />
			{title}
			{location}
		</li>
	)
}

export default HousingItem