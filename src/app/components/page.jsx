import React from 'react';
import {render} from 'react-dom';
import {
	Nav,
	INavProps
} from 'office-ui-fabric-react';
//import styles from './page.module.scss';

export class Page extends React.Component{
	constructor(props){
		super(props);
		console.log(props);
	}

	render(){
		return (<Nav groups={
			[
				{
					links:[
						{
							name:"Home",
							url:window.location.href
						},{
							name:"Podcast",
							key:"podcast"
						}
					],
					name:"Main"
				}
			]}
			isOnTop={false}
			onLinkClick={this._onLinkClicked.bind(this)}
		/>)

	}

	_onLinkClicked(ev, item){
		console.log(ev, item);
		console.log(this.props);
		if(this.props.onSelected){
			this.props.onSelected(item.key);
		}
	}
}
