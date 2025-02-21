import React, { useState } from "react";

export default function App() {
  const [apps, setApps] = useState([
    { name: "Example App", developer: "John Doe", url: "https://example.com/app.apk" }
  ]);
  const [newApp, setNewApp] = useState({ name: "", developer: "", url: "" });

  const handleAddApp = () => {
    if (newApp.name && newApp.developer && newApp.url) {
      setApps([...apps, newApp]);
      setNewApp({ name: "", developer: "", url: "" });
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "auto" }}>
      <h1>APK & File Downloader</h1>
      <table border="1" cellPadding="5" style={{ width: "100%", marginBottom: 20 }}>
        <thead>
          <tr>
            <th>App Name</th>
            <th>Developer</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((app, index) => (
            <tr key={index}>
              <td>{app.name}</td>
              <td>{app.developer}</td>
              <td><a href={app.url} target="_blank" rel="noopener noreferrer">Download</a></td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add Your App</h2>
      <input placeholder="App Name" value={newApp.name} onChange={(e) => setNewApp({ ...newApp, name: e.target.value })} style={{ display: "block", marginBottom: 10, width: "100%" }} />
      <input placeholder="Developer Name" value={newApp.developer} onChange={(e) => setNewApp({ ...newApp, developer: e.target.value })} style={{ display: "block", marginBottom: 10, width: "100%" }} />
      <input placeholder="Download URL" value={newApp.url} onChange={(e) => setNewApp({ ...newApp, url: e.target.value })} style={{ display: "block", marginBottom: 10, width: "100%" }} />
      <button onClick={handleAddApp} style={{ display: "block", marginTop: 10, width: "100%", padding: 10, backgroundColor: "blue", color: "white", border: "none", cursor: "pointer" }}>Add App</button>
    </div>
  );
  }
                    
