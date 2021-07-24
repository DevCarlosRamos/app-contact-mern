import React from 'react';

const Formulario = (Props) =>{
    return(
        <form>
        <div className="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Nombre"/>
            <small id="emailHelp" className="form-text text-muted">Igresa tu nombre</small>
        </div>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">Ingresa tu email</small>
        </div>
        <div className="form-group">
            <label for="exampleInputPassword1">Numero de telefono</label>
        <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Ingresa tu numero"/>
        </div>
        <div className="form-check">
        <input type="checkbox" className="form-check-input" id="Profesional"/>
        <input type="checkbox" className="form-check-input" id="Personal"/>
        <label className="form-check-label" for="exampleCheck1">Escoge uno</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default Formulario;