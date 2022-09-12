import React from 'react'
import './TagItem.css'

function TagItem({ tag, onClick, onClickDelete }) {

	return (
		<>
			<div key={tag.id} id={tag.id} className="tag-container" onClick={onClick}>
				<div className="tag-text">{tag.name}</div>
				<svg className='iconButton-invisible' onClick={() => onClickDelete} viewBox='0 0 24 24' width='16' height='16'><path d="M12 22Q9.925 22 8.1 21.212Q6.275 20.425 4.925 19.075Q3.575 17.725 2.788 15.9Q2 14.075 2 12Q2 9.925 2.788 8.1Q3.575 6.275 4.925 4.925Q6.275 3.575 8.1 2.787Q9.925 2 12 2Q14.075 2 15.9 2.787Q17.725 3.575 19.075 4.925Q20.425 6.275 21.212 8.1Q22 9.925 22 12Q22 14.075 21.212 15.9Q20.425 17.725 19.075 19.075Q17.725 20.425 15.9 21.212Q14.075 22 12 22ZM8.4 17 12 13.4 15.6 17 17 15.6 13.4 12 17 8.4 15.6 7 12 10.6 8.4 7 7 8.4 10.6 12 7 15.6Z" /></svg>
			</div>

		</>
	)
}

function TagItemCompact({ tag, onClick }) {
	return (
		<>
			<div key={tag.id} id={tag.id} className={`tag-container-compact`} onClick={onClick}>
				<div className='tag-text'>{tag.name}</div>
				<div className={`tag-circle ${tag.color}`}></div>
			</div>
		</>
	)
}
function TagItemTiny({ tag, onClick }) {
	return (
		<>
			<div key={tag.id} id={tag.id} className={`tag-container-tiny ${tag.color}`} onClick={onClick}>
				<div className='tag-text-tiny'>{tag.name}</div>
				<div className={`tag-circle-tiny ${tag.color}`}></div>
			</div>
		</>
	)
}

export { TagItem, TagItemCompact, TagItemTiny }