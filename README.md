# 🗳️ Accessible Election Assistant (AI-Powered)

An interactive, multilingual, and highly accessible web application designed to help users understand the Indian election process, timelines, and voting steps. Created for **Challenge 2** of the Virtual Prompt Wars.

## 🚀 Key Features

### 🤖 Intelligent Assistance
- **AI Chatbot**: A contextual assistant (using Claude-3.5-Sonnet logic) that answers questions about voting in Hindi and English.
- **ML Intent Classifier**: Automatically detects the topic of your question (Documents, EVM, NOTA, etc.).
- **Sentiment Analysis**: Adjusts the assistant's tone based on user emotions (e.g., providing simpler steps if the user feels confused).
- **Fake News Detector**: Heuristic-based detection to flag common election misinformation.

### ♿ Accessibility First
- **Multilingual Support**: Fully localized in English and Hindi.
- **Voice-Enabled**: Real-time Text-to-Speech (TTS) for all sections and AI responses.
- **A11y Panel**: Integrated controls for:
  - Font size adjustment.
  - High Contrast mode.
  - Dyslexia-friendly font (OpenDyslexic).
  - Reduced Motion for sensitive users.
- **Screen Reader Optimized**: Semantic HTML and ARIA labels throughout.

### 🗳️ Interactive Tools
- **Adaptive Quiz**: Uses Spaced Repetition to help users remember critical voting facts.
- **Candidate Matcher**: Uses **Cosine Similarity** to rank candidates based on issues you care about (Water, Jobs, Health, etc.).
- **Practice Ballot**: A safe, interactive simulator to practice casting a vote on an EVM.
- **Booth Locator**: Find polling stations and get directions via Google Maps.
- **Myth Buster**: Interactive swiping cards to debunk common voting myths.

### 📡 Technical Excellence
- **PWA Ready**: Works offline via Service Workers and a Web Manifest.
- **Dockerized**: Ready for deployment on Google Cloud Run or any containerized environment.
- **Clean Architecture**: Vanilla JavaScript logic with modular "ML Heuristic" engines for maximum performance.

## 🛠️ Tech Stack
- **Frontend**: HTML5, Vanilla CSS3 (Glassmorphism), JavaScript (ES6+).
- **Design**: Google Fonts (Outfit), CSS Variables for themes.
- **Intelligence**: Native JS ML modules + AI API Integration.
- **Deployment**: Nginx, Docker.

## 📥 Local Setup
1. Clone the repository.
2. Open `index.html` in any modern browser.
3. (Optional) Build the Docker container:
   ```bash
   docker build -t election-assistant .
   docker run -p 8080:8080 election-assistant
   ```

---
*Created with ❤️ for the Virtual Prompt Wars Challenge.*