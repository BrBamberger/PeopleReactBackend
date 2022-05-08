import React from 'react';

export default function PersonForm({ firstName, lastName, age, onTextChange, isAdding, onAddClick, onCancelClick, onUpdateClick, isEditing }){
    
        return <div className='row'>
            <div className='container'>
                <div className='row jumbotron'>
                    <div className='col-md-2'>
                        <input value={firstName} onChange={onTextChange} name='firstName' placeholder='First Name' className="form-control" />
                    </div>

                    <div className='col-md-2'>
                        <input value={lastName} onChange={onTextChange} name='lastName' placeholder='Last Name' className="form-control" />
                    </div>

                    <div className='col-md-2'>
                        <input value={age} onChange={onTextChange} name='age' placeholder='Age' className="form-control" />
                    </div>

                    <div className='col-md-2'>
                        <button className='btn btn-block btn-primary' onClick={onAddClick}>Add</button>
                    </div>

                </div>
            </div>
            </div>

}
    



