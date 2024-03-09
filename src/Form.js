import React, { useState, useEffect } from 'react';
import axios from 'axios';
//State to store Form data this is either listed or being edit
const Form = () => {
    const [items, setItems] = useState([]);
    const [currentItem, setCurrentItem] = useState({ Fullname: '', Books: '', Videogames: '', Movies: '' });
    // Fetch data from mock API
    useEffect(() => {
        axios.get('https://65d559d03f1ab8c63436c31f.mockapi.io/Final/NerdStuff')
            .then(response => setItems(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    // Handle all input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setCurrentItem({ ...currentItem, [name]: value });
    };
    // Handle form data for both adding and update
    const handleSubmit = (event) => {
        event.preventDefault();
        if (currentItem.id) {
            axios.put(`https://65d559d03f1ab8c63436c31f.mockapi.io/Final/NerdStuff/${currentItem.id}`, currentItem)
                .then(response => {
                    setItems(items.map(item => item.id === currentItem.id ? response.data : item));
                    setCurrentItem({ Fullname: '', Books: '', Videogames: '', Movies: '' });
                })
                .catch(error => console.error('Error updating item:', error));
        } else {
            axios.post('https://65d559d03f1ab8c63436c31f.mockapi.io/Final/NerdStuff', currentItem) //Add new item
                .then(response => {
                    setItems([...items, response.data]);
                    setCurrentItem({ Fullname: '', Books: '', Videogames: '', Movies: '' });
                })
                .catch(error => console.error('Error adding item:', error));
        }
    };
    //Handle deletion of said item
    const handleDelete = (id) => {
        axios.delete(`https://65d559d03f1ab8c63436c31f.mockapi.io/Final/NerdStuff/${id}`)
            .then(() => {
                setItems(items.filter(item => item.id !== id));
            })
            .catch(error => console.error('Error deleting item:', error));
    };
    //Render form and list
    return (
        <div>
            <form onSubmit={handleSubmit}>  {/* Input fields for item props */}
                <input name="Fullname" value={currentItem.Fullname} onChange={handleChange} placeholder="Full Name" />
                <input name="Books" value={currentItem.Books} onChange={handleChange} placeholder="Books" />
                <input name="Videogames" value={currentItem.Videogames} onChange={handleChange} placeholder="Video Games" />
                <input name="Movies" value={currentItem.Movies} onChange={handleChange} placeholder="Movies" />
                <button type="submit">{currentItem.id ? 'Update' : 'Create'}</button>
            </form>
            {/* List each item with edit and delete options */}
            {items.map(item => (
                <div key={item.id}>
                    {item.Fullname} - {item.Books} - {item.Videogames} - {item.Movies}
                    <button onClick={() => setCurrentItem(item)}>Edit</button>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default Form;
