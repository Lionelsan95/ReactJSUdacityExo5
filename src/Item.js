import React from 'react'

const Item = (props) => (
	<li key={props.index}>{props.item}</li>
)

export default Item;