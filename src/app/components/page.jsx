import React from 'react';
import {render} from 'react-dom';
import {
	Nav,
	INavProps
} from 'office-ui-fabric-react';
import styles from './page.module.scss';

export class Page extends React.Component{
	render(){
		return <Nav groups={
			[
				{
					links:[
						{
							name:"this",
							url:window.location.href
						}
					],
					name:"Main"
				}
			]}
			isOnTop={false}
		/>
	}
}
