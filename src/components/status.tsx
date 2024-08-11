import React, { useEffect, useState } from 'react';

const StatusCircle: React.FC = () => {
  const [status, setStatus] = useState<string>('offline'); // Default status
  const [isHovered, setIsHovered] = useState<boolean>(false); // State to manage tooltip visibility

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch('https://api.lanyard.rest/v1/users/804660273444159518'); // Replace with your user ID
        const data = await response.json();
        const userStatus = data.data ? data.data.discord_status : 'offline';
        setStatus(userStatus);
        console.log('Fetched status:', userStatus); // Log the fetched status
      } catch (error) {
        console.error('Failed to fetch status:', error);
      }
    };

    const setupWebSocket = () => {
      const ws = new WebSocket('wss://api.lanyard.rest/socket'); // WebSocket URL for LanyardPresence

      ws.onopen = () => {
        console.log('WebSocket connected');
        ws.send(JSON.stringify({
          op: 2,
          d: {
            subscribe_to: 'user',
            user_id: '804660273444159518', // Replace with your user ID
          }
        }));
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.d && data.d.discord_status) {
          setStatus(data.d.discord_status);
          console.log('WebSocket status update:', data.d.discord_status); // Log WebSocket status update
        }
      };

      ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      ws.onclose = () => {
        console.log('WebSocket disconnected');
        // Optionally, you can re-establish the connection here
      };

      return ws;
    };

    fetchStatus(); // Initial fetch
    const ws = setupWebSocket(); // Setup WebSocket connection

    // Clean up the WebSocket connection on component unmount
    return () => {
      ws.close();
    };
  }, []);

  // Map status to color and text
  const statusDetails: Record<string, { color: string, text: string }> = {
    online: { color: 'green', text: 'Online' },
    idle: { color: 'yellow', text: 'Idle' },
    dnd: { color: 'red', text: 'Do Not Disturb' },
    invisible: { color: 'gray', text: 'Invisible' },
    offline: { color: 'gray', text: 'Offline' },
  };

  // Apply status color and text
  const { color, text } = statusDetails[status] || { color: 'gray', text: 'Offline' };

  // Status circle styles
  const statusCircleStyles: React.CSSProperties = {
    width: '1.0rem',
    height: '1.0rem',
    borderRadius: '50%',
    backgroundColor: color,
    border: '2px solid white',
    position: 'relative',
    marginLeft: '1rem',
    transition: 'background-color 0.3s ease',
    cursor: 'pointer', // Change cursor to pointer to indicate interactivity
  };

  // Tooltip styles
  const tooltipStyles: React.CSSProperties = {
    position: 'absolute',
    top: '100%', // Position below the circle
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '0.5rem', // Space between circle and tooltip
    padding: '0.5rem',
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: '0.3rem',
    whiteSpace: 'nowrap',
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
    fontSize: '0.9rem',
    zIndex: 10,
  };

  return (
    <div 
      style={{ position: 'relative' }} 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={statusCircleStyles}></div>
      <div style={tooltipStyles}>{text}</div>
    </div>
  );
};

export default StatusCircle;
