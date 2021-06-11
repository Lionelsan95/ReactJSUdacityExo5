import React from 'react'

const ItemsList = (props) => (
	<ol className="item-list">
		{props.items.map((item, index) => <li key={index}>{item}</li>)}
	</ol>
)

export default ItemsList