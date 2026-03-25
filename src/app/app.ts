import { Component, signal } from '@angular/core';
import { HlmButtonImports } from '@spartan-ng/helm/button';
import { HlmInputImports } from '@spartan-ng/helm/input';

@Component({
  selector: 'app-root',
  imports: [HlmButtonImports, HlmInputImports],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('testSpartans');
}
