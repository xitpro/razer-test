import React, {Component} from 'react';
import '../../assets/css/profile.css';

class Tools extends Component {
  constructor(props) {
    super(props);
  }
  render() { 
    var isDefault = this.props.defaultProfiles[this.props.selected].isDefault;
    
  return (
    <div className="toolbar flex">
      <div className="toolbar flex">
        <div className="icon add" id="profileAdd" 
              onClick={this.props.addProfile} />
        <div
          className={isDefault === true ? 'icon edit' : 'icon edit show'}
          id="profileRename"
          onClick={this.props.showEdit}
        />

        <div
          className={isDefault === true ? 'icon delete' : 'icon delete show'}
          id="profileDelete"
          onClick={this.props.showDelete}
        />
        {this.props.defaultProfiles && this.props.defaultProfiles.length > 0 ? (
          <div
            id="profileDelCfm"
            className={
              this.props.showDeleteCfm
                ? 'profile-del alert flex show'
                : 'profile-del alert flex'
            }
          >
            <div className="title" id="deletediv">
              Delete EQ
            </div>
            <div className="body-text t-center" id="delName">
              {this.props.defaultProfiles[this.props.selected].name}
            </div>
            <div
              className="thx-btn"
              id="cfmDelete"
              onClick={this.props.deleteProfile}
            >
              delete
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          className={
            parseInt(this.props.selected) === this.props.defaultProfiles.length - 1
              ? 'icon down disabled'
              : 'icon down'
          }
          id="profileDown"
          onClick={this.props.moveDown}
        />
        <div
          className={
            parseInt(this.props.selected) === 0 ? 'icon up disabled' : 'icon up'
          }
          id="profileUp"
          onClick={this.props.moveUp}
        />
        
      </div>
    </div>
    
  );
  }
}

export default Tools;