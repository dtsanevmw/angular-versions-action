export interface PackageJsonDevDependencies {
  '@angular/animations': string;
  '@angular/cdk': string;
  '@angular/common': string;
  '@angular/compiler': string;
  '@angular/core': string;
  '@angular/forms': string;
  '@angular/platform-browser': string;
  '@angular/platform-browser-dynamic': string;
  '@angular/router': string;
}

export interface PackageJson {
  devDependencies: PackageJsonDevDependencies;
}
