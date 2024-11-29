import React, { useState } from 'react';

function SendUserIdButton({ user }) {
  const [wifiName, setWifiName] = useState('');
  const [wifiPassword, setWifiPassword] = useState('');
  const [tankheight, setTankHeight] = useState(0);
  const [productid, setProductid] = useState(0);

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
      <h2>Send Data</h2>
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
      <div>
        <label>
          Tank Height:
          <input
            type="number"
            value={tankheight}
            onChange={(e) => setTankHeight(e.target.value)}
            placeholder="Enter tank height"
          />
        </label>
      </div>
      <div>
        <label>
          Product id:
          <input
            type="number"
            value={productid}
            onChange={(e) => setProductid(e.target.value)}
            placeholder="Enter product id"
          />
        </label>
      </div>
      <button onClick={sendData}>Send Data</button>
      
    </div>
    
    
  );
}

export default SendUserIdButton;