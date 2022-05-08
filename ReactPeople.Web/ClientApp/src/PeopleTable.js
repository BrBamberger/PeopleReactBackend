import React from 'react';
import AddPersonForm from './AddPersonForm';
import PersonRow from './PersonRow'
import axios from 'axios';

class PeopleTable extends React.Component {
    state = {
        person: {
            id: '',
            firstName: '',
            lastName: '',
            age: ''
        },
        people: [],
        toDelete: [],
        isEditing: false
    }

    componentDidMount() {
        this.getAllPeople();
    }
    getAllPeople = () => {
        axios.get('/api/people/getpeople').then(obj => {
            this.setState({
                people: obj.data,
                person: {
                    firstName: '',
                    lastName: '',
                    age: ''
                }
            })
        });
    }

    onAddClick = () => {
        axios.post('api/people/addperson', this.state.person).then(() => {
            this.getAllPeople();
        })
    }

    onTextChange = e => {
        const copy = { ...this.state.person };
        copy[e.target.name] = e.target.value;
        this.setState({ person: copy });
    }

    onEditClick = p => {
        this.setState({ person: p });
        this.setState({ isEditing: true });
    }

    onDeleteClick = p => {
        axios.post('/api/people/deleteperson', p).then(() => {
            this.getAllPeople();
        })
    }

    

    generateTable = () => {
        const { people } = this.state;
            return (
                <table className='table table-striped table-bordered'>
                    <thead>
                        <tr>
                            <th>
                                <button className='btn btn-danger'>Delete All</button>
                                <button className='btn btn-success'>Check All</button>
                                <button className='btn btn-primary'>Uncheck All</button>
                                    </th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Edit/Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {people.map((p =>
                            <PersonRow person={p}
                                key={k}
                                onEditClick={() => this.onEditClick(p)}
                                onDeleteClick={() => this.onDeleteClick(p)}
                                selectedToDelete={() => this.selectedToDelete(p)}
                                checked={toDelete.includes(p)} />)
                            }
                    </tbody>
                </table>)
        }
    
  


    render() {
        const { person, isEditing } = this.state;
        const { firstName, lastName, age } = person;
        return (
            <div className='container'>
                <AddPersonForm
                    firstName={firstName}
                    lastName={lastName}
                    age={age}
                    onTextChange={this.onTextChange}
                    onAddClick={this.onAddClick}
                    onUpdateClick={() => this.onUpdateClick(person)}
                    onCancelClick={this.onCancelClick}
                    isEditing={isEditing} />
                {this.generateTable()}

            </div>
        );

    }
}

    export default PeopleTable;