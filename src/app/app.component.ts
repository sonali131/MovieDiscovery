import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SearchBarComponent],
  templateUrl: './app.html',
  template: `
    <!-- Sticky Header -->
    <header class="main-header">
      <div class="logo-container" routerLink="/">
        <span class="logo">MOVIEFLIX</span>
      </div>

      <div class="search-container">
        <app-search-bar />
      </div>

      <nav class="nav-links">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a routerLink="/favorites" routerLinkActive="active">Watchlist</a>
      </nav>
    </header>

    <!-- Page Content -->
    <main class="content-area">
      <router-outlet />
    </main>

    <footer class="footer">
      <p>&copy; 2025 MovieFlix Discovery Application</p>
    </footer>
  `,
  styles: [`
    .main-header {
      position: fixed;
      top: 0;
      width: 100%;
      height: 70px;
      background: rgba(20, 20, 20, 0.95);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
      z-index: 1000;
      box-sizing: border-box;
    }

    .logo {
      color: #e50914;
      font-size: 1.8rem;
      font-weight: 900;
      letter-spacing: -1px;
      cursor: pointer;
    }

    .search-container {
      flex: 0 1 400px;
      margin: 0 20px;
    }

    .nav-links a {
      color: #e5e5e5;
      text-decoration: none;
      margin-left: 25px;
      font-weight: 500;
      transition: 0.3s;
      font-size: 0.9rem;
    }

    .nav-links a:hover, .nav-links a.active {
      color: #ffffff;
      font-weight: bold;
    }

    .content-area {
      padding-top: 0px; // Hero section in Home starts from top
      min-height: 90vh;
    }

    .footer {
      padding: 40px;
      text-align: center;
      color: #808080;
      font-size: 0.8rem;
      border-top: 1px solid #333;
    }

    @media (max-width: 768px) {
      .main-header { padding: 0 20px; }
      .nav-links { display: none; } // Hide links on mobile for simplicity
    }
  `]
})
export class AppComponent {}
