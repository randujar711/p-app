function Profile({user}){
    return(
        <div className="user-info">
            {!user && (
                <> Please Login</>
                )} 
            {user &&
                <div className="user-info-main">
                    <h3>Username: {user.username}</h3>
                    <h3>id: {user.id}</h3>
                    <h4> balance: {user.balance}</h4>
                </div>
            }
        </div>
    )
}
export default Profile 