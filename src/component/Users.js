import { useEffect, useState } from 'react'
import logo from '../logo.jpg'

function Users() {

    const [users, setusers] = useState([])
    const [values, setvalues] = useState({
        name: "",
        age: "",
        email: "",
        password: ""
    })

    useEffect(() => {
        onload()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    function onload() {
        return fetch('http://localhost:8080/api/users', {
            method: "GET"
        })
            .then((res) => {
                if (res.ok)
                    return res.json()
            })
            .then((data) => {
                setusers(data)
            })
            .catch((err) => {
                alert("Error while fetching user " + err)
            })
    }



    function handledelete(id) {
        fetch(`http://localhost:8080/api/users/${id}`, {
            method: "DELETE",
        })
            .then(() => {
                onload()
                alert("User deleted !! Successfully !!")
            })
            .catch((err) => {
                alert("Error while deleting user " + err)
            })
    }

    function handleedit(user){
        setvalues(user)
    }

    function handleeditchange(e) {
        const { name, value } = e.target
        setvalues({ ...values, [name]: value })

    }

    function handleedits(id) {
        fetch(`http://localhost:8080/api/users/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
        })
        .then(()=>{
            alert("User updated !! Successfully !!")
            onload()
        })
        .catch((err)=>{
            alert("Error while update the user "+err)
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="Bootstrap" width="40" height="30"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                            <a className="nav-link active" href="/users">Users</a>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container mt-5" style={{ overflowX: "auto" }}>
                <table className="table table-dark table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Email</th>
                            <th scope="col">Password</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <div className="d-flex flex-row">
                                        <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleedit(user)}>
                                            Edit
                                        </button>
                                        <button type="button" className="btn btn-danger mx-2" onClick={() => handledelete(user.id)}>Delete</button>
                                    </div>
                                </td>
                            </tr>)}
                    </tbody>
                </table>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-5">
                                <div className="col-md-12">
                                    <label htmlFor="inputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="inputName" name='name' value={values.name} onChange={handleeditchange}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputAge" className="form-label">Age</label>
                                    <input type="text" className="form-control" id="inputAge" name='age' value={values.age} onChange={handleeditchange}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" name='email' value={values.email} onChange={handleeditchange}/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" name='password' value={values.password} onChange={handleeditchange}/>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => handleedits(values.id)}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Users