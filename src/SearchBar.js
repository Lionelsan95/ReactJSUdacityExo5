import React, {Component} from 'react'

class SearchBar extends Component {
  
  state = {
    article: ''
  }
  
  updateArticle = (event) => {
    this.setState({article: event.target.value})
  }
  
  inputIsEmpty = () => {
  	return this.state.article.trim() === '' 
  }
  
  render(){
    const {article} = this.state
    return (
        <form onSubmit={(event) => this.props.addItem(event, article)}>
          <input
            type="text"
            placeholder="Enter New Item"
            value={article}
            onChange={this.updateArticle}
          />
          <button disabled={this.inputIsEmpty()}>Add</button>
        </form>
    )
  }
}

export default SearchBar;