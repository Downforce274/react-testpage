import React from 'react';
import {render} from 'react-dom';
import {
	Dropdown,
	IDropdownOption,
	Spinner
} from "office-ui-fabric-react";
import {Page} from "./components/page.jsx";

export default class MyElement extends React.Component{
	constructor(){
		super();
		this.state={
			selectedText:null
		};
	}

	render(){
		console.log(this.state.selectedText);
	return <div className="mainContainer">
					<Page/> 
					{this.state.selectedText}
					<Dropdown
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
					onChanged={this._changeDropdownSelection.bind(this)}
					/>

					<Spinner>

					</Spinner>
				</div>;
	}

	_changeDropdownSelection(option){
		console.log(option.text);
		this.setState({selectedText:option.text});
	}
}

render(<MyElement/>, document.querySelector("#app"))
