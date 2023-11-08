import {AngularVersion} from './types/angular-version';
import {PackageJson} from './types/package-json';

export const versions = new Map<AngularVersion, PackageJson>([
  [
    '16.0.x',
    {
      devDependencies: {
        '@angular/animations': '~16.0.0',
        '@angular/cdk': '~16.0.0',
        '@angular/common': '~16.0.0',
        '@angular/compiler': '~16.0.0',
        '@angular/core': '~16.0.0',
        '@angular/forms': '~16.0.0',
        '@angular/platform-browser': '~16.0.0',
        '@angular/platform-browser-dynamic': '~16.0.0',
        '@angular/router': '~16.0.0'
      }
    }
  ]
]);
