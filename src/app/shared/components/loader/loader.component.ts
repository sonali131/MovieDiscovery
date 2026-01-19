import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-container" [class.full-screen]="fullScreen">
      <div class="spinner"></div>
      <p *ngIf="message">{{ message }}</p>
    </div>
  `,
  styles: [`
    .loader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px;
    }
    .full-screen {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(20, 20, 20, 0.8);
      z-index: 9999;
    }
    .spinner {
      width: 50px;
      height: 50px;
      border: 5px solid rgba(255, 255, 255, 0.1);
      border-top-color: #e50914; /* Netflix Red */
      border-radius: 50%;
      animation: spin 1s ease-in-out infinite;
    }
    p {
      margin-top: 15px;
      color: white;
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class LoaderComponent {
  @Input() message: string = ''; // लोडर के नीचे मैसेज दिखाने के लिए
  @Input() fullScreen: boolean = false; // क्या लोडर पूरे पेज पर दिखेगा?
}
