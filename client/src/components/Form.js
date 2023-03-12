function Form({username, setUsername, password, setPassword, submitHandler, type}){
    return(
        <form onSubmit={submitHandler}>
            <h1>{type}</h1>   
            <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input type = "text" id="username" value = {username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className = "form-group">
                <label htmlFor="password">Password</label>
                <input type = "password" id="password" value = {password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type ="submit">{type}</button>
        </form>
    )
}

export default Form;