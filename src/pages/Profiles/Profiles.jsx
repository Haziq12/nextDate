import { Link } from 'react-router-dom'
import React from 'react'
import "./profile.scss"


const Profiles = (props) => {
  const allProfiles = props.profiles.map((profile, idx) => {
    return (
      <React.Fragment key={profile._id}>

      <Link to={`/profiles/${profile._id}`}  >
      <div className='profile-card'>
      <img src={profile.photo ? profile.photo : 'No Image'} alt={'Person'} className="prof-img"/>
        <div onClick={() => props.handleClick(idx)} >
          <div className='prof-info'>
          <div><h1 className='prof-text prof-name'>{profile.name}</h1></div>
          <div><h1 className='prof-text'>Status: {profile.relationshipStatus}</h1></div>
          <div><h1 className='prof-text'>Location: {profile.address}</h1></div>
          </div>
        </div>
      </div>
      </Link>

      </React.Fragment>
    );
  });

  return (

    <div >
      {props.profiles.length ?
        <div className='allProfile'>
          <h1 className='title-profile'>Find Your Date</h1>
          <div>{allProfiles}</div>
        </div>
        :
        <p>No profiles yet</p>
      }
    </div>
  )
}


export default Profiles;
