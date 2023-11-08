export const fullWithTsickleJson = {
  name: 'lumberjack',
  version: '0.0.0',
  scripts: {
    ng: 'ng',
    start: 'ng serve lumberjack-app',
    build: 'ng build lumberjack-app --prod',
    test: 'ng test lumberjack-app',
    'test:ci': 'yarn test --configuration=ci',
    lint: 'ng lint',
    e2e: 'ng e2e lumberjack-app-e2e',
    'contributors:add': 'all-contributors add',
    'hooks:pre-commit': 'node hooks/pre-commit.js',
    commit: 'git-cz',
    'release:first': 'yarn release -- --first-release',
    'build:lib':
      'ng build ngworker-lumberjack --prod && npx copy README.md ./dist/ngworker/lumberjack',
    'test:lib': 'ng test ngworker-lumberjack',
    'test:lib:ci': 'yarn test:lib --configuration=ci',
    'test:internal':
      'ng test internal-test-util && ng test internal-console-driver-test-util',
    'test:internal:ci':
      'ng test internal-test-util --configuration=ci && ng test internal-console-driver-test-util --configuration=ci',
    release:
      'cd libs/ngworker/lumberjack && standard-version --infile ../../../CHANGELOG.md',
    publish: 'cd dist/ngworker/lumberjack && npm publish',
    ci: 'yarn install && yarn lint && yarn build:lib && yarn test:internal:ci && yarn test:lib:ci && yarn build && yarn test:ci && yarn e2e',
    format:
      'npx prettier --config prettier.config.js --write "**/*.*" "!dist/**" "!yarn.lock"',
    'delete-path-alias': 'node tools/delete-path-alias.js'
  },
  private: true,
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
  },
  config: {
    commitizen: {
      path: 'cz-conventional-changelog'
    }
  },
  'lint-staged': {
    '*.{js,json,css,scss,ts,html,component.html}': [
      'prettier --write',
      'git add'
    ]
  },
  husky: {
    hooks: {
      'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS',
      'pre-commit': 'yarn hooks:pre-commit && lint-staged && yarn lint',
      'pre-push': 'yarn test:lib:ci'
    }
  }
};
