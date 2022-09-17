import React, { Component } from 'react'
import './ProjectItem.css'

class ProjectItem extends Component {
	constructor(project) {
		super()
		this.state = {
			name: project.name,
			editMode: false
		}
	}
	onClick = () => {
		
	}

	render() {
		if (this.state.editMode) {
			return (<input id={this.state.id} className='project-name' defaultValue={this.state.name} autoFocus/>);
		} else {
			return (<div id={this.state.id} className='project-name' onClick={() => {this.onClick()}}>
			{this.state.name}
		</div>);
		}
	}
}

export default ProjectItem