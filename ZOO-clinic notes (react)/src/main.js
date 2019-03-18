import React from "react";
import List from "./list";



class Main extends React.Component {
	constructor(){
		super();
		this.state = {
			arrData:[],
			PetName:"",
			PetOwner:"",
			Date:"",
			Time:"",
			AptNotes:"",
			
		};
		this.curData=[];
		this.getData = this.getData.bind(this);
		this.addInArr = this.addInArr.bind(this);
		this.revomeItem = this.revomeItem.bind(this);
		
	};
	getData(e){
		let userText = e.target.value;
		let inpName = e.target.id;
		this.curData[e.target.id]= e.target.value;
		this.setState({[e.target.id]: e.target.value});
	}
	addInArr(){
		let arrCopy = [...this.state.arrData];
		arrCopy.push(this.curData);
		this.curData = [];
		this.setState({
			arrData: arrCopy, 
			PetName:"",
			PetOwner:"",
			Date:"",
			Time:"",
			AptNotes:""
		});
	}
	revomeItem(index){
		let arrCopy = [...this.state.arrData];
		arrCopy.splice(index, 1);
		this.setState({arrData:arrCopy},()=> console.log(this.state.arrData));
		

	}
	
	render(){
		console.log(this.state.arrData);
		let lists = this.state.arrData.map( (item, index) =>(
			<List
				listDataFromMain={item}
				key={index}
				deleteItem={this.revomeItem}
				itemIndex={index}

			/> ));

		return(
			<div>
				<div className="card">
					<div className="add_ap"><span><span className="glyphicon glyphicon-plus"></span>Add Appointment</span></div>
						<div className="inputs">
						<div className="item"><p>Pet Name</p><input value = {this.state.PetName} onChange={this.getData} id="PetName" className="inp form-control" type="text" /></div>
						<div className="item"><p>Pet Owner</p><input value = {this.state.PetOwner} onChange={this.getData} id="PetOwner" className="inp form-control" type="text" /></div>
							<div className="data_time" >
								<div className="col-xs-12 col-md-6"><p>Date</p><input value = {this.state.Date} onChange={this.getData} id="Date" className="inp form-control" type="date" /></div>
								<div className="col-xs-12 col-md-6"><p>Time</p><input value = {this.state.Time} onChange={this.getData} id="Time" className="inp form-control" type="time" /></div>
							</div>
							<div className="clearfix"></div>
						<div className="item "><p className="textAreaItem">Apt. Notes</p><textarea value = {this.state.AptNotes} onChange={this.getData} id="AptNotes" className="inp form-control"></textarea></div>

						<div onClick={this.addInArr}  className="button">
							<span>Add Appointment</span>
						</div>
					</div>
				</div>
					<div className="list">
						{lists}
					</div>
			</div>
				
				
				
		)
		}
		
	
}


export default Main;



