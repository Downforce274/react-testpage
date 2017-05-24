import React from 'react';
import {render} from 'react-dom';
import {
	Button,
	Panel,
	IPanelProperties
} from "office-ui-fabric-react";

export class PodcastApp extends React.Component{
	constructor(props){
		super(props);
		this.state = {PanelIsOpen :false};
		console.log(props);
	}
	render(){
		console.log("podcast");
		var appClass = "podcastApp";
		return(
				<div className={appClass}>
					We could have some Podcasts here
				<Button onClick={this._onOpenPanelClick.bind(this)}>Open Panel</Button>
				<Panel
				headerText={"some Panel"}
				isBlocking={true}
				isOpen={this.state.PanelIsOpen}
				hasCloseButton={true}
				onDismiss={this._onOpenPanelClick.bind(this)}> <div>Things</div></Panel>
				</div>
			);


	}

	_onOpenPanelClick(){
		console.log(this.state);
		this.setState({PanelIsOpen:!this.state.PanelIsOpen});
	}
}
