import '../../assets/fonts/roboto.css';
import '../../assets/fonts/razerf5.css';

import '../../assets/css/main.css';
import '../../assets/css/profile.css';
import '../../assets/css/tooltip.css';
import React, {Component} from 'react';

class ProfileList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const getProfiles = () => {
      const profiles = this.props.defaultProfiles;
      const listProfiles = profiles.map((profile, index) => (
        <div
          id={
            profile.isDefault === true
              ? 'default-' + profile.id
              : 'custom-' + profile.id
          }
          className={
            profile.isDefault === true
              ? 'profile-item ' + profile.class + ' no-edit ' + profile.choose
              : 'profile-item ' + profile.class + ' ' + profile.choose
          }
          onClick={this.props.setCurrentProfile}
        >
          {profile.name}
        </div>
      ));
      return (
        <div id="profileList" className="scrollable">
          {listProfiles}
          <input
            id="profileRename"
            type="text" ref={(ip) => this.myInput = ip}
            placeholder="enter new profile"
            className={this.props.showFormEdit ? 'profile-item show' : 'profile-item'}
            defaultValue={this.props.nameProfileSelected}
            maxLength="25"
            style={{ top: 30 * this.props.selected }}
            onChange={this.props.handleInputChange}
            // value={props.nameSelected}
            onKeyDown={this.props.keyPress}
            onFocus={this.props.handleFocus}
            onBlur={this.props.renameProfile}
          />
        </div>
      );
  }; 
    
  return getProfiles();
  }
}

export default ProfileList;
