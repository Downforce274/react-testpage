import React from 'react';
import {render} from 'react-dom';
import {
	Button,
	Panel,
	IPanelProperties
} from "office-ui-fabric-react";
import {PodcastCard} from './podcastcard.jsx';

export class PodcastApp extends React.Component{
	constructor(props){
		super(props);
		console.log(PodcastCard);
		this.state = {PanelIsOpen :false};
		console.log(props);
	}
	render(){
		console.log("podcast");
		console.log(<PodcastCard/>);
		let cardPreview = {
					previewImages:[
                                                                {
                                                                        name:"First Test Img"
                                                                },
                                                                {
                                                                        name:"Second Test Img"
                                                                }
                                                        ]
					};
		var appClass = "podcastApp";
		return(
				<div className={appClass}>
					We could have some Podcasts here
				<Button onClick={this._onOpenPanelClick.bind(this)}>Open Panel</Button>
				<PodcastCard
					preview={cardPreview}
					cardTitle={"Some Test Title"}
				/>
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
