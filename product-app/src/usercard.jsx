import { useState } from 'react';

export default function UserCard({ user }) {
  const [isFollowing, setIsFollowing] = useState(false);

  // Generate a unique aesthetic image for each fetched artist/user
  const bannerImage = `https://picsum.photos/seed/${user.id * 7}/400/300`;

  return (
    <div style={cardStyle}>
      {/* Card Media Header */}
      <div style={imageWrapperStyle}>
        <img src={bannerImage} alt={user.name} style={imageStyle} />
        
        {/* Pinterest Red Action Button */}
        <button 
          onClick={() => setIsFollowing(!isFollowing)} 
          style={{
            ...followButtonStyle,
            backgroundColor: isFollowing ? '#111111' : '#e60023',
          }}
        >
          {isFollowing ? 'Following ✓' : 'Follow'}
        </button>
      </div>

      {/* Card Content */}
      <div style={contentStyle}>
        <span style={boardTagStyle}>🏢 {user.company?.name || 'Independent Creator'}</span>
        <h3 style={titleStyle}>{user.name}</h3>
        <p style={usernameStyle}>@{user.username.toLowerCase()}</p>
        
        <div style={detailsBoxStyle}>
          <p style={detailTextStyle}>📧 {user.email}</p>
          <p style={detailTextStyle}>🌐 {user.website}</p>
        </div>
      </div>
    </div>
  );
}

// Inline Styles for Pinterest Aesthetic
const cardStyle = {
  backgroundColor: '#ffffff',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 14px rgba(0,0,0,0.08)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
};

const imageWrapperStyle = {
  position: 'relative',
  width: '100%',
  height: '180px',
  backgroundColor: '#eee',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
};

const followButtonStyle = {
  position: 'absolute',
  top: '12px',
  right: '12px',
  color: '#ffffff',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '24px',
  fontWeight: 'bold',
  fontSize: '0.85rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
};

const contentStyle = {
  padding: '16px',
  textAlign: 'left',
};

const boardTagStyle = {
  fontSize: '0.75rem',
  fontWeight: 'bold',
  color: '#767676',
  textTransform: 'uppercase',
  letterSpacing: '0.5px',
};

const titleStyle = {
  fontSize: '1.1rem',
  fontWeight: 'bold',
  margin: '4px 0 2px 0',
  color: '#111',
};

const usernameStyle = {
  fontSize: '0.85rem',
  color: '#e60023',
  fontWeight: '600',
  margin: '0 0 12px 0',
};

const detailsBoxStyle = {
  borderTop: '1px solid #f0f0f0',
  paddingTop: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
};

const detailTextStyle = {
  fontSize: '0.82rem',
  color: '#555',
  margin: 0,
};