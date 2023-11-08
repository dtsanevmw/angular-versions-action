import {fullWithTsickleJson} from './package-json-versions/full-with-tsickle';
import {
  packageJsonWithV16_DevDependencies,
  packageJsonWithV16_All,
  packageJsonWithV16_AllWithUnmatching,
  fullPackageJson,
  packageUnmatching,
  packageJsonWithoutNgPackagr
} from './package-json-versions';
import {overrideAngularVersions} from '../src/override-angular-versions';
import {getAngularVersions} from '../src/get-angular-versions';

describe(overrideAngularVersions.name, () => {
  describe('replaces versions existing in both sources', () => {
    test('replace ONLY Angular versions in devDependencies', () => {
      const v16 = getAngularVersions('16.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson as any,
        angularVersions: v16
      });

      expect(actualPackageJson).toEqual(packageJsonWithV16_DevDependencies);
    });

    test('replace Angular versions in devDependencies', () => {
      const v16 = getAngularVersions('16.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: fullPackageJson as any,
        angularVersions: v16
      });

      expect(actualPackageJson).toEqual(packageJsonWithV16_All);
    });

    test('no override package with unmatching versions', () => {
      const v16 = getAngularVersions('16.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: packageUnmatching as any,
        angularVersions: v16
      });

      expect(actualPackageJson).toEqual(packageJsonWithV16_AllWithUnmatching);
    });

    test('add ng-packagr dependency when it is not present in the package', () => {
      const v16 = getAngularVersions('16.0.x');

      const actualPackageJson = overrideAngularVersions({
        projectVersions: packageJsonWithoutNgPackagr as any,
        angularVersions: v16
      });

      expect(actualPackageJson).toEqual(packageJsonWithV16_All);
    });
  });
});
