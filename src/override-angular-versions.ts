import {PackageJson, PackageJsonDevDependencies} from './types/package-json';

function removeNullDependencies<
  TDependencies extends PackageJsonDevDependencies
>(dependencies: TDependencies): TDependencies {
  return Object.fromEntries(
    Object.entries(dependencies).filter(
      ([, maybeVersion]) => maybeVersion !== null
    )
    // Issues with generic typing of Object methods
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) as any;
}

export function overrideAngularVersions({
  angularVersions,
  projectVersions
}: {
  angularVersions: PackageJson;
  projectVersions: PackageJson;
}): PackageJson {
  return {
    ...projectVersions,
    devDependencies: removeNullDependencies({
      ...projectVersions.devDependencies,
      ...angularVersions.devDependencies
    })
  };
}
