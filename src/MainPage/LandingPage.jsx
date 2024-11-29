import React, { useState } from 'react';

function SendUserIdButton({ user }) {
  const [wifiName, setWifiName] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [esp32Ip, setEsp32Ip] = useState('192.168.4.1'); // Default AP IP

  console.log(user.uid);
  const sendData = async () => {
    // Create form data
    const formData = new URLSearchParams();
    formData.append('userId', user.uid);
    formData.append('wifiName', wifiName);
    formData.append('wifiPass', wifiPassword);

    try {
      const response = await fetch(`http://${esp32Ip}/send-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
      });

      if (response.ok) {
        const responseText = await response.text();
        console.log('Data sent to ESP32 successfully:', responseText);
      } else {
        console.error('Failed to send data to ESP32');
      }
    } catch (error) {
      console.error('Error sending data to ESP32:', error);
    }
  };

  return (
    <div>
      <h2>Send Data to Your ESP32</h2>
      <div>
        <label>
          Wi-Fi Name:
          <input
            type="text"
            value={wifiName}
            onChange={(e) => setWifiName(e.target.value)}
            placeholder="Enter Wi-Fi Name"
          />
        </label>
      </div>
      <div>
        <label>
          Wi-Fi Password:
          <input
            type="password"
            value={wifiPassword}
            onChange={(e) => setWifiPassword(e.target.value)}
            placeholder="Enter Wi-Fi Password"
          />
        </label>
      </div>
      <button onClick={sendData}>Send Data</button>
    </div>
  );
}

export default SendUserIdButton;