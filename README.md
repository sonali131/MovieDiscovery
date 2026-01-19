# MovieDiscovery
Teach Stack:Angular+API
🎥 MovieFlix: Ultimate Movie Discovery App
![alt text](https://img.shields.io/badge/Angular-18+-DD0031?style=for-the-badge&logo=angular&logoColor=white)

![alt text](https://img.shields.io/badge/RxJS-Latest-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

![alt text](https://img.shields.io/badge/Sass-Professional-CC6699?style=for-the-badge&logo=sass&logoColor=white)

![alt text](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)
MovieFlix is a high-performance, responsive movie discovery application built with Angular 18+. It leverages the OMDb API to provide users with real-time movie data, deep-dive details, and a personalized watchlist experience, all wrapped in a sleek, Netflix-inspired dark theme.
🌟 Key Features
🏠 Dynamic Home Page: Categorized movie rows (Action, Comedy, Drama, Thriller) with smooth horizontal scrolling.
🔍 Real-time Global Search: Powerful search functionality with RxJS debouncing and switchMap to optimize API calls.
📄 Deep Details View: Comprehensive movie information including IMDb ratings, full plot, cast, and director details.
❤️ Personal Watchlist: State-managed "Add to Favorites" feature using Angular Signals and persistent LocalStorage.
⏳ Optimized Loading: Custom-built loading spinners and lazy-loading transitions for a premium UX.
📱 Mobile-First Design: Fully responsive UI that looks stunning on desktops, tablets, and smartphones.
🛠️ Technical Implementation
This project demonstrates proficiency in modern Angular concepts:
Standalone Components: Architecture without NgModules for a lighter, faster application.
State Management: Used Angular Signals (v18) for reactive, high-performance state handling.
RxJS Operators: Implemented debounceTime, distinctUntilChanged, and switchMap for efficient search logic.
API Integration: Centralized HTTP service with a Functional Interceptor to automatically attach API keys to requests.
Custom Pipes & Directives:
RuntimePipe: Formats minutes into Xh Ym format.
HoverDirective: Adds smooth scaling effects to movie cards.
Routing: Complex routing with parameters for movie details and query parameters for search results.
📂 Project Structure
code
Text
src/app/
├── core/
│   ├── interceptors/  # API Key injection logic
│   ├── services/      # Movie & Favorite state logic
│   └── models/        # TypeScript interfaces for API responses
├── shared/
│   ├── components/    # Reusable Loader, MovieCard, SearchBar
│   ├── pipes/         # Custom data formatting (RuntimePipe)
│   └── directives/    # Custom UI behaviors
├── pages/
│   ├── home/          # Featured categories
│   ├── movie-details/ # Detailed movie information
│   ├── search-results/# Grid view with pagination
│   └── favorites/     # User watchlist
└── app.config.ts      # Global providers (Zoneless, Fetch, Interceptors)
🚀 Getting Started
Prerequisites
Node.js (v18.x or higher)
Angular CLI (v18.x or higher)
Installation
Clone the repository:
code
Bash
git clone https://github.com/your-username/movie-discovery-app.git
cd movie-discovery-app
Install dependencies:
code
Bash
npm install
Configure API Key:
Create a file src/environments/environment.ts and add your OMDb API key:
code
TypeScript
export const environment = {
  production: false,
  apiKey: 'YOUR_OMDB_API_KEY',
  apiUrl: 'https://www.omdbapi.com/'
};
Run the application:
code
Bash
ng serve -o
🎨 UI Preview
Home Page	Movie Details	Search Results
![alt text](https://via.placeholder.com/300x180?text=Netflix+Style+Home)
![alt text](https://via.placeholder.com/300x180?text=Detailed+Info)
![alt text](https://via.placeholder.com/300x180?text=Grid+Results)
<img width="953" height="431" alt="image" src="https://github.com/user-attachments/assets/d0376741-d04c-49ae-8d12-19c252eaefe9" />

🛡️ API Information
This app uses the OMDb API. You can get your free API key at omdbapi.com.
👨‍💻 Author
Your Name : Sonali Mishra
GitHub: @sonali131
LinkedIn: https://www.linkedin.com/in/sonali-mishra-4239aa250/
📝 License
This project is MIT licensed.
