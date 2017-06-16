import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchCountry} from '../actions/search_country';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			country: "Hong Kong"
		};
		this.changeText = this.changeText.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	changeText(event){
		this.setState({
			country: event.target.value
		});
	}

	submitForm(event){
		event.preventDefault();
		this.props.searchCountry(this.state.country);

		this.setState({
			country: ''
		});
		//alert("Country: "+this.state.country);
	}

	render(){
		return (
			<form className="input-group" onSubmit={this.submitForm}>
				<input type="text" className="form-control" onChange={this.changeText} value={this.state.country} />
				<span className="input-group-btn">
					<button className="btn btn-secondary" type="submit" >Submit</button>
				</span>
			</form>
		);
	}
}

//Map actions to props
function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchCountry}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);