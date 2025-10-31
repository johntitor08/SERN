import React, { useState, useEffect } from "react";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    // Simulate fetching user data
    const userData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      joinDate: "2024-01-15",
    };
    setUser(userData);
    setFormData(userData);
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Here you would typically make an API call to update user data
    setUser(formData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  const handleCancel = () => {
    setFormData(user);
    setIsEditing(false);
  };

  if (!user) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>User Profile</h1>
        <p>Manage your account information</p>
      </div>

      <div className="profile-content">
        <div className="profile-card">
          <div className="profile-avatar">
            <div className="avatar-circle">
              {user.firstName.charAt(0)}
              {user.lastName.charAt(0)}
            </div>
          </div>

          {!isEditing ? (
            <div className="profile-info">
              <div className="info-group">
                <label>First Name</label>
                <p>{user.firstName}</p>
              </div>
              <div className="info-group">
                <label>Last Name</label>
                <p>{user.lastName}</p>
              </div>
              <div className="info-group">
                <label>Email</label>
                <p>{user.email}</p>
              </div>
              <div className="info-group">
                <label>Member Since</label>
                <p>{new Date(user.joinDate).toLocaleDateString()}</p>
              </div>

              <button className="edit-button" onClick={handleEditToggle}>
                Edit Profile
              </button>
            </div>
          ) : (
            <form className="profile-form" onSubmit={handleSave}>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="save-button">
                  Save Changes
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>

        <div className="profile-actions">
          <div className="action-card">
            <h3>Account Settings</h3>
            <button className="action-button">Change Password</button>
            <button className="action-button">Privacy Settings</button>
            <button className="action-button">Notification Preferences</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
