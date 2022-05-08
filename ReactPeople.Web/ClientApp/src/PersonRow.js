import React from 'react';

export default function PersonRow({ person, onEditClick, onDeleteClick, selectedToDelete, checked }) {
    const { id, firstName, lastName, age } = person;
    return (
            
        <tr>
            <td> 
                <input checked={checked} onChange={selectedToDelete} className='form-control' type='checkbox'/>
            </td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{age}</td>
            <td>
                <input type='hidden' name='id' value={id}/>
                <button className='btn btn-block btn-warning' onClick={onEditClick}>Edit</button>
                <button className='btn btn-danger' onClick={onDeleteClick}>Delete</button>
            </td>
        </tr>
    )

}
        
