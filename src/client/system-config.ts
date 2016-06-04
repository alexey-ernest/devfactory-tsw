const barrels: string[] = [
  'app',
  'app/shared',
  'app/shared/tsw-header',
  'app/shared/tsw-back-to-top',
  'app/shared/tsw-footer',
  'app/+tsw-index',
  'app/tsw-carousel',
  'app/tsw-highlights',
  'app/tsw-services',
  'app/tsw-latest-news',
  'app/tsw-statistics',
  'app/tsw-clients'
  /** @cli-barrel */
];

function createPackageConfig(barrelList: string[]): any {
  return barrelList.reduce((barrelConfig: any, barrelName: string) => {
    barrelConfig[barrelName] = {
      format: 'register',
      defaultExtension: 'js',
      main: 'index'
    };
    return barrelConfig;
  }, {});
}


// Add your custom SystemJS configuration here.
export const config: any = {
  packages: Object.assign({
    // Add your custom SystemJS packages here.
  }, createPackageConfig(barrels))
};
