import React, {Component} from 'react';
import {connect} from 'react-redux';

class CountryList extends Component{
	constructor(props){
		super(props);
		this.renderCountry = this.renderCountry.bind(this);
	}

	renderCountry(data){
		if(data){
			return (
				<tr key={data[0].alpha3Code}>
					<td><img width={50} src={data[0].flag} alt={data[0].alpha3Code} /></td>
					<td>{data[0].alpha3Code}</td>
					<td>{data[0].region}</td>
					<td>{data[0].area}</td>
					<td>{data[0].population}</td>
				</tr>
			);
		}
	}

	render(){
		console.log(this.props.country);
		return(
			<table className="table">
				<thead>
					<tr>
						<th>Flag</th>
						<th>Code</th>
						<th>Region</th>
						<th>Area</th>
						<th>Population</th>
					</tr>
				</thead>
				{this.props.country.map(this.renderCountry)}
			</table>
		);
	}
}

function mapStateToProps(state){
	return{
		country: state.country
	}
}

export default connect(mapStateToProps)(CountryList);