import React from 'react'

const DeleteItem = (props) => (
	<button onClick={props.deleteLastItem} disabled={props.noItemsFound()}>
		Delete Last Item
	</button>
)

export default DeleteItem;