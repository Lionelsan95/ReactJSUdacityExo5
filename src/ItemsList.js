import React from 'react'
import Item from './Item.js'

const ItemsList = (props) => (
  <div>
    <p className="items">Items</p>
  
	<ol className="item-list">
		{props.items.map((item, index) => <Item index={index} key={index} item={item} />)}
	</ol>
 </div>
)

export default ItemsList