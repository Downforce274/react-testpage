import React from 'react';
import {render} from 'react-dom';
import {
	DocumentCard,
	DocumentCardPreview,
	DocumentCardTitle,
	DocumentCardActivity,
	ImageFit
} from 'office-ui-fabric-react';


export class PodcastCard extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		var preview = null;

		if(this.props.preview){
			preview = <DocumentCardPreview {...this.props.preview}/>;
		}

		return (
		<DocumentCard onClickHref={this.props.onClickHref|| ""}>
				{preview}	
			<DocumentCardTitle
				title={this.props.cardTitle||this.props.title||"title"}
				shouldTruncate={this.props.shouldTruncate || false}/>
			<DocumentCardActivity
				activity={this.props.cardActivity||this.props.activity||null}
				people={
					this.props.people||null
				}
				/>
		</DocumentCard>);
	}
}

