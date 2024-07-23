import { useState } from 'react';
import logo from '../logo.jpg'
import { useNavigate } from 'react-router-dom';


function Home() {

    const [user, setuser] = useState({
        name: "",
        age: "",
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    function handlechange(e) {
        const { name, value } = e.target
        setuser({ ...user, [name]: value })
    }

    function handlesubmit(e) {
        e.preventDefault()
        fetch('http://localhost:8080/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
        .then(()=>{
            alert("User added !! successfully !!")
        })
            .catch((err) => {
                alert("Error while adding user " + err)
            })
        navigate("/users")
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><img src={logo} alt="Bootstrap" width="40" height="40"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/users">Users</a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container w-75">
                <form className="row g-5 mt-5" onSubmit={handlesubmit}>
                    <div className="col-md-12">
                        <label htmlFor="inputName" className="form-label">Name</label>
                        <input type="text" className="form-control" id="inputName" name='name' onChange={handlechange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputAge" className="form-label">Age</label>
                        <input type="text" className="form-control" id="inputAge" name='age' onChange={handlechange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" name='email' onChange={handlechange} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Password</label>
                        <input type="password" className="form-control" id="inputPassword4" name='password' onChange={handlechange} />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Add User</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Home;
