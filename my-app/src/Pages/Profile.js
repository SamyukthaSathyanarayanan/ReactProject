import "./ProfileStyle.css"
export function Profile(){
  return(
    <>
      
    <div className="profilemaincontainer">
      <div className="profilecontainer">
        <div className="profiletab">
          <h2>Profile</h2>
          <h3 className="ProfileDetails"> Profile Details </h3>
          <h4>Full Name</h4>
          <h4>Email</h4>
          <h4> Account Settings</h4>
          <button> Log Out </button>
        </div>
        <div className="addresstab">
          <h2> Addresses</h2>
          <h3 className="MyAddress">My Addresses</h3>
          <button> Add new Address</button>
        </div>
      </div>
    </div>
    
    </>
  
  )
}