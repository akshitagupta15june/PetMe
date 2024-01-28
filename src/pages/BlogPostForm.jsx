import { useState } from 'react'
import React from 'react'
import Header from '../components/Header'
const BlogPostForm = () => {
    const [form, setForm] = useState({
        author: '',
        title: '',
        description: '',
        post: '',
        picture: null
    });

    const handleChange = (e) => {
        if (e.target.name === 'picture') {
            setForm({
                ...form,
                [e.target.name]: e.target.files[0]
            });
        } else {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '500px',
        margin: '0 auto'
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        fontSize: '16px',
        boxShadow: '0 0 5px #719ECE'
    };

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer'
    };

    const fieldStyle = {
        display: 'flex',
        flexDirection: 'column'
    };

    return (
        <>
        <Header />
        <form onSubmit={handleSubmit} style={formStyle}>
            <div style={fieldStyle}>
                <label>Name of the Author:</label>
                <input type="text" name="author" value={form.author} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
                <label>Title of the Blog:</label>
                <input type="text" name="title" value={form.title} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
                <label>Blog Description:</label>
                <textarea name="description" value={form.description} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
                <label>Post Link:</label>
                <input type="url" name="post" value={form.post} onChange={handleChange} style={inputStyle} />
            </div>
            <div style={fieldStyle}>
                <label>Blog Banner:</label>
                <input type="file" name="picture" onChange={handleChange} style={inputStyle} />
            </div>
            <button type="submit" className='text-white bg-indigo-500'style={buttonStyle}>Submit</button>
        </form></>
    );
}



export default BlogPostForm