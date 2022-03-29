import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import * as profileService from '../../services/profileService'
import DatePlanList from '../DatePlanList/DatePlanList'

const ShowProfile = (props) => {
  
  const [profileDetail, setProfileDetail] = useState({})
  const { id } = useParams()
  
  const filteredProfile = props.profiles.filter((profile,idx)=>{
    return(
      idx===props.proIdx
    )
  })
  
  useEffect(()=> {
    profileService.getProfileDetails(id)
    .then(profileDetail => setProfileDetail(profileDetail))
  },[])

  return ( 
    <div>
        <h1>{profileDetail.name}</h1>
        <h2>{profileDetail.address}</h2>
        <h3>{profileDetail.relationshipStatus}</h3>
        <h3>{profileDetail.contactInfo}</h3>
        <h3>{profileDetail.aboutMe}</h3>
        <DatePlanList owner={filteredProfile} datePlans={props.datePlans} profiles={props.profiles}  proIdx={props.proIdx} user={props.user} handleDeleteDatePlan={props.handleDeleteDatePlan}/>
    </div>

   );
}
 
export default ShowProfile;