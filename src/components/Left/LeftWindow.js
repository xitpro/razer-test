import '../../assets/fonts/roboto.css';
import '../../assets/fonts/razerf5.css';

import '../../assets/css/profile.css';
import '../../assets/css/main.css';
import '../../assets/css/tooltip.css';

import React, {Component} from 'react';
import ProfileList from './ProfileList';
import Tools from './Tools';

class LeftWindow extends Component {
    constructor(props){
        super(props);
    }
    focusInput = () => {
        this.myView.myInput.focus()
    }
    render() { 
        return ( 
            <div className="thx-drawer flex">
            <div className="main-title">Profile List</div>
            <div id="profileWrapper" className="drawer-select flex">
                <ProfileList
                ref={(view) => {this.myView = view}}
                defaultProfiles ={this.props.defaultProfiles}
                setCurrentProfile={this.props.setCurrentProfile}
                showFormEdit={this.props.showFormEdit}
                selected={this.props.selected}
                handleInputChange={this.props.handleInputChange}
                nameSelected={this.props.nameSelected}
                handleFocus={this.props.handleFocus}
                keyPress={this.props.keyPress}
                renameProfile={this.props.renameProfile}
                />

                <Tools
                focusInput={this.focusInput}
                defaultProfiles={this.props.defaultProfiles}          
                addProfile={this.props.addProfile}
                showEdit={this.props.showEdit}
                showDelete={this.props.showDelete}
                moveDown={this.props.moveDown}
                moveUp={this.props.moveUp}
                selected={this.props.selected}
                showDeleteCfm={this.props.showDeleteCfm}
                deleteProfile={this.props.deleteProfile} 
                />  
            </div>
        </div>
         );
    }
}

export default LeftWindow;