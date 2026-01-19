🎥 MovieFlix – Ultimate Movie Discovery App


This README is designed to make your GitHub repository look professional, high-quality, and modern. It highlights your technical skills and the modern Angular features you used.
🎥 MovieFlix: Ultimate Movie Discovery App
![alt text](https://img.shields.io/badge/Angular-18+-DD0031?style=for-the-badge&logo=angular&logoColor=white)

![alt text](https://img.shields.io/badge/RxJS-Latest-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)

![alt text](https://img.shields.io/badge/Sass-Professional-CC6699?style=for-the-badge&logo=sass&logoColor=white)

![alt text](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)



MovieFlix is a high-performance, responsive movie discovery web application built using Angular 18+ and the OMDb API.
It delivers real-time movie search, rich movie details, and a personalized watchlist — all wrapped in a sleek Netflix-inspired dark UI.

🌟 Key Features
🏠 Dynamic Home Page

Category-based movie rows (Action, Comedy, Drama, Thriller)

Smooth horizontal scrolling for a premium browsing experience

🔍 Real-Time Movie Search

Global search with RxJS debouncing

Optimized API calls using debounceTime, distinctUntilChanged, and switchMap

📄 Movie Details View

IMDb ratings

Full plot description

Cast & director information

Runtime and genre details

❤️ Personal Watchlist

Add / remove favorite movies

State managed with Angular Signals

Persistent storage using LocalStorage

⏳ Performance Optimized

Custom loading spinners

Lazy loading for routes and components

📱 Fully Responsive Design

Mobile-first layout

Optimized for desktop, tablet, and mobile devices

🛠️ Technical Highlights

Standalone Components (No NgModules)

Angular Signals (v18) for reactive state management

RxJS for efficient async data handling

Centralized API Service

Functional HTTP Interceptor for automatic API key injection

Zoneless Angular Configuration

Fetch API integration

🧩 Custom Utilities
🔧 Pipes

RuntimePipe → Converts minutes into Xh Ym format

🎨 Directives

HoverDirective → Smooth scaling animation on movie cards

🧭 Routing Strategy

Parameterized routing for movie details

Query-based routing for search results

Lazy-loaded pages for better performance

📂 Project Structure
src/app/
├── core/
│   ├── interceptors/   # API key injection logic
│   ├── services/       # Movie & favorites state management
│   └── models/         # TypeScript interfaces
│
├── shared/
│   ├── components/     # Loader, MovieCard, SearchBar
│   ├── pipes/          # RuntimePipe
│   └── directives/     # HoverDirective
│
├── pages/
│   ├── home/           # Category-based movie lists
│   ├── movie-details/  # Detailed movie view
│   ├── search-results/ # Search results with pagination
│   └── favorites/      # User watchlist
│
└── app.config.ts       # Global providers & interceptors

🚀 Getting Started
✅ Prerequisites

Node.js v18+

Angular CLI v18+

📦 Installation

Clone the repository:

git clone https://github.com/sonali131/movie-discovery-app.git
cd movie-discovery-app


Install dependencies:

npm install

🔑 Configure API Key

Create src/environments/environment.ts:

export const environment = {
  production: false,
  apiKey: 'YOUR_OMDB_API_KEY',
  apiUrl: 'https://www.omdbapi.com/'
};

▶️ Run the Application
ng serve -o


The app will open automatically at:
👉 http://localhost:4200

🎨 UI Preview
Home Page	Movie Details	Search Results

	
	
<img width="953" height="431" alt="UI Preview" src="https://github.com/user-attachments/assets/d0376741-d04c-49ae-8d12-19c252eaefe9" />
🛡️ API Information

This application uses the OMDb API.
Get your free API key from:
👉 https://www.omdbapi.com/

👨‍💻 Author

Sonali Mishra

GitHub: @sonali131

LinkedIn: Sonali Mishra

📝 License

This project is licensed under the MIT License.
