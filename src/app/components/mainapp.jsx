import React from 'react';
import {render} from 'react-dom';
import {
	Dropdown,
	IDropdownOption
} from "office-ui-fabric-react";

export class MainApp extends React.Component{
	constructor(){
		super();
		this.state = {selectedText:null};
	}

	render(){
		return <Dropdown
			label="My First Own Dropdown"
			id="firstDrop"
			ariaLabel="First Dropdown"
			options={
				[
					{key: 'nice', text:'nice'},
					{key: 'awesome', text:'awesome'},
					{key: 'great', text:'great'}
				]
			}
			onChanged={this._changeDropdownSelection.bind(this)}/>
		}

		_changeDropdownSelection(option){
			console.log(option.text);
			this.setState({selectedText:option.text});
		}
}
