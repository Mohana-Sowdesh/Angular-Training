import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeConfigService {
  public isDarkThemeSelected: boolean = false;

  constructor() { }

  toggleTheme() {
    this.isDarkThemeSelected = !this.isDarkThemeSelected;
    const root = document.documentElement;
    root.style.setProperty('--background-color', this.isDarkThemeSelected ? '#0a1c2d' : '#fff');
    root.style.setProperty('--text-color', this.isDarkThemeSelected ? '#fff' : '#000');
    root.style.setProperty('--logo-book-color', this.isDarkThemeSelected ? '#fff' : '#b26ebc');
  }
}
