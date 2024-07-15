import React, { useState } from 'react';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [university, setUniversity] = useState('');
    const [location, setLocation] = useState('');
    const [hostelName, setHostelName] = useState('');
    const [roomType, setRoomType] = useState('');
    const [rentRange, setRentRange] = useState('');
    const [amenities, setAmenities] = useState('');
    const [telephone, setTelephone] = useState('');
    const [hostelImages, setHostelImages] = useState([]);
    const [hostelVideos, setHostelVideos] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const images = files.filter(file => file.type.startsWith('image'));
        const videos = files.filter(file => file.type.startsWith('video'));
        
        setHostelImages(images);
        setHostelVideos(videos);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            email,
            password,
            name,
            location,
            hostelName,
            roomType,
            rentRange,
            amenities,
            telephone,
            hostelImages,
            hostelVideos
        });
    };

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    id="name"
                    name="name"
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    id="password"
                    name="password"
                    required
                />
                
        
                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Hostel Location"
                    id="location"
                    name="location"
                    required
                />
                <label htmlFor="hostelName">Hostel Name</label>
                <input
                    type="text"
                    value={hostelName}
                    onChange={(e) => setHostelName(e.target.value)}
                    placeholder="Hostel Name"
                    id="hostelName"
                    name="hostelName"
                    required
                />
                <label htmlFor="roomType">Type of Rooms Available</label>
                <input
                    type="text"
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    placeholder="Room Types"
                    id="roomType"
                    name="roomType"
                    required
                />
                <label htmlFor="rentRange">Rent Range</label>
                <input
                    type="text"
                    value={rentRange}
                    onChange={(e) => setRentRange(e.target.value)}
                    placeholder="Rent Range"
                    id="rentRange"
                    name="rentRange"
                    required
                />
                <label htmlFor="amenities">Amenities Available</label>
                <input
                    type="text"
                    value={amenities}
                    onChange={(e) => setAmenities(e.target.value)}
                    placeholder="Amenities"
                    id="amenities"
                    name="amenities"
                    required
                />
                <label htmlFor="telephone">Telephone Number</label>
                <input
                    type="tel"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="Your Telephone Number"
                    id="telephone"
                    name="telephone"
                    required
                />
                <label htmlFor="hostelImages">Upload Hostel Images</label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    id="hostelImages"
                    name="hostelImages"
                    multiple
                    accept="image/*"
                />
                <label htmlFor="hostelVideos">Upload Hostel Videos</label>
                <input
                    type="file"
                    onChange={handleFileChange}
                    id="hostelVideos"
                    name="hostelVideos"
                    multiple
                    accept="video/*"
                />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>
                Already have an account? Login here
            </button>
        </div>
    );
};

