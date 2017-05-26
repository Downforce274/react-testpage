import React from 'react';
import {render} from 'react-dom';
import {
	Dropdown,
	IDropdownOption,
	Spinner
} from "office-ui-fabric-react";
import { Page as Navigation} from "./components/page.jsx";
import { PodcastApp } from "./components/podcastapp.jsx";
import { MainApp } from "./components/mainapp.jsx";
//import styles from "./page.module.scss";

export default class MyElement extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
		this.state={
			selectedApp:"main"
		};
	}

	render(){
		console.log(this.state.selectedApp);
		console.log(<PodcastApp/>);
		var currentApp = this.getCurrentApp();
		console.log()
	return (<div className={"mainContainer"}>
	<Navigation onSelected={this._navigationSelected.bind(this)}/>
	{currentApp}
		<Spinner>
	</Spinner>
				</div>);

	}

	getCurrentApp(){
		switch(this.state.selectedApp){
			case "podcast":{
				return <PodcastApp/>
			} break;

			default:{
				return <MainApp/>
			}
		}
	}

	_navigationSelected(selectedKey){
		this.setState({selectedApp:selectedKey});
	}

}

render(<MyElement/>, document.querySelector("#app"))
