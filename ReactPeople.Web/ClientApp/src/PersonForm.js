import React from 'react';

class PersonForm extends React.Component {
    render() {
        const { first, last, age, onTextFirstChange, onTextLastChange, onTextAgeChange,
            onAddClick, onClearClick } = this.props;
        return (
            <div className='container'>
                <div className='row jumbotron'>
                    <div className='col-md-2'>
                        <input value={first} onChange={onTextFirstChange} placeholder='First Name' className="form-control" />
                    </div>

                    <div className='col-md-2'>
                        <input value={last} onChange={onTextLastChange} placeholder='Last Name' className="form-control" />
                    </div>

                    <div className='col-md-2'>
                        <input value={age} onChange={onTextAgeChange} placeholder='Age' className="form-control" />
                    </div>

                    <div className='col-md-2'>
                        <button className='btn btn-block btn-primary' onClick={onAddClick}>Add</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-block btn-warning' onClick={onClearClick}>Clear All</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default PersonForm;