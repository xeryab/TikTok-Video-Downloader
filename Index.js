<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>𝐙𝐀𝐑𝐘𝐀𝐁 𝐓𝐈𝐊𝐓𝐎𝐊 𝐕𝐈𝐃 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑</title>
  <style>
    :root {
      --bg-dark: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      --bg-light: #f5f5f5;
      --text-light: #fff;
      --text-dark: #111;
      --primary: #00c6ff;
    }body {
  margin: 0;
  font-family: 'Segoe UI', sans-serif;
  background: var(--bg-dark);
  color: var(--text-light);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

body::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/0/09/TikTok_logo.svg');
  background-repeat: repeat;
  background-size: 100px;
  opacity: 0.02;
  animation: floatLogos 20s linear infinite;
  z-index: 0;
}

@keyframes floatLogos {
  0% { background-position: 0 0; }
  100% { background-position: 1000px 1000px; }
}

.container {
  position: relative;
  text-align: center;
  background: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 25px;
  max-width: 500px;
  width: 100%;
  z-index: 1;
}

.title {
  font-size: 2rem;
  margin-bottom: 10px;
}

.tagline {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input[type="text"] {
  padding: 12px;
  font-size: 1rem;
  border-radius: 25px;
  border: none;
  width: 100%;
  outline: none;
  box-shadow: 0 0 10px #00c6ff90;
}

button {
  padding: 12px;
  font-size: 1rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to right, #ff416c, #ff4b2b);
  color: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px #ff4b2b70;
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #ff4b2b;
}

#video-section {
  margin-top: 2rem;
}

video {
  max-width: 100%;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  justify-content: center;
}

.author-info img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid var(--primary);
}

.author-info span {
  font-size: 1rem;
  font-weight: bold;
}

.description {
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.hidden {
  display: none;
}

#status-message {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #ffcc00;
}

#loader {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--primary);
}

#theme-toggle {
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 6px 12px;
  border: none;
  border-radius: 25px;
  background-color: #fff;
  color: #111;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 0 10px #00000030;
}

#whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 15px #25D366aa;
  cursor: pointer;
  animation: pulse 2s infinite;
  z-index: 2;
}

#whatsapp-button img {
  width: 35px;
  height: 35px;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

  </style>
</head>
<body>
  <button id="theme-toggle">🌙</button>
  <a href="https://whatsapp.com/channel/0029Vb6YHYNFSAt4222Nl51I" target="_blank" id="whatsapp-button">
    <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Channel">
  </a>
  <div class="container">
    <h1 class="title">𝐙𝐀𝐑𝐘𝐀𝐁 𝐓𝐈𝐊𝐓𝐎𝐊 𝐕𝐈𝐃 𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑</h1>
    <p class="tagline">© 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐙𝐀𝐑𝐘𝐀𝐁</p>
    <div class="input-group">
      <input type="text" id="tiktok-url" placeholder="Paste your TikTok link here...">
      <button id="fetch-btn" onclick="fetchVideo()">Get Your Video</button>
    </div>
    <div id="loader" class="hidden">⏳ Loading...</div>
    <p id="status-message"></p>
    <div id="video-section" class="hidden">
      <div class="author-info">
        <img id="author-avatar" src="" alt="Author Avatar">
        <span id="author-name"></span>
      </div>
      <video id="video-preview" controls></video>
      <p id="video-desc" class="description"></p>
      <button id="download-btn">Download Video</button>
    </div>
  </div>
  <script>
    const themeBtn = document.getElementById("theme-toggle");
    const body = document.body;if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeBtn.textContent = "🌙";
}

themeBtn.onclick = () => {
  body.classList.toggle("light-mode");
  const theme = body.classList.contains("light-mode") ? "light" : "dark";
  themeBtn.textContent = theme === "light" ? "🌙" : "🔆";
  localStorage.setItem("theme", theme);
};

async function fetchVideo() {
  const input = document.getElementById("tiktok-url");
  const url = input.value.trim();
  const statusMessage = document.getElementById("status-message");
  const loader = document.getElementById("loader");
  const button = document.getElementById("fetch-btn");

  if (!url || !url.includes("tiktok.com")) {
    statusMessage.textContent = "Please enter a valid TikTok URL.";
    return;
  }

  statusMessage.textContent = "";
  loader.classList.remove("hidden");
  button.disabled = true;
  button.textContent = "Fetching...";

  try {
    const response = await fetch(`https://apis.davidcyriltech.my.id/download/tiktok?url=${encodeURIComponent(url)}`);
    const data = await response.json();

    if (data.success) {
      const videoUrl = data.result?.video;
      const avatar = data.result?.author?.avatar || "https://via.placeholder.com/50";
      const nickname = data.result?.author?.nickname || "Unknown";
      const desc = data.result?.desc || "No description provided.";

      document.getElementById("video-preview").src = videoUrl;
      document.getElementById("author-avatar").src = avatar;
      document.getElementById("author-name").textContent = nickname;
      document.getElementById("video-desc").textContent = desc;
      document.getElementById("video-section").classList.remove("hidden");

      document.getElementById("download-btn").onclick = async () => {
        try {
          const videoRes = await fetch(videoUrl);
          const blob = await videoRes.blob();
          const blobUrl = URL.createObjectURL(blob);

          const a = document.createElement("a");
          a.href = blobUrl;
          a.download = "tiktok-video.mp4";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(blobUrl);
        } catch {
          alert("Failed to download video.");
        }
      };

      statusMessage.textContent = "";
    } else {
      statusMessage.textContent = "Failed to fetch video. Please check the link.";
    }
  } catch (error) {
    console.error("Error:", error);
    statusMessage.textContent = "An error occurred while fetching the video.";
  } finally {
    loader.classList.add("hidden");
    button.disabled = false;
    button.textContent = "Get Your Video";
  }
}

  </script>
</body>
</html>
