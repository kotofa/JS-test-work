import React from "react";

export default class List extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			listData:this.props.listDataFromMain
			
		};
		
	}

	

	render(){
		return(
			<div className="list_item">
				<span onClick={()=> this.props.deleteItem(this.props.itemIndex)} className="remove_btn glyphicon glyphicon-remove"></span>
				<div className="content">
					<h3 className="PetName">{this.props.listDataFromMain.PetName}</h3>
					<p><b>Owner: </b><span className="OwnerName">{this.props.listDataFromMain.PetOwner}</span></p>
					<p className="Apt">{this.props.listDataFromMain.AptNotes}</p>
				</div>
				<span className="date_time">{this.props.listDataFromMain.Date}  {this.props.listDataFromMain.Time}</span>
			</div>
			)
		
	}
}