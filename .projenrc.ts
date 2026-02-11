import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.189.1',
  defaultReleaseBranch: 'main',
  typescriptVersion: '5.9.x',
  jsiiVersion: '5.9.x',
  name: 'aws-codepipeline-state-change-detection-event-rules',
  description: 'This is an AWS CodePipeline execution state change detection event catch rule.',
  majorVersion: 2,
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers-aws-cdk-resources/aws-codepipeline-state-change-detection-event-rules.git',
  deps: [
    '@gammarers/aws-cdk-errors@^0.2.0',
  ],
  npmAccess: javascript.NpmAccess.PUBLIC,
  releaseToNpm: true,
  depsUpgrade: true,
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['5 18 * * 4']), // every thursday 18:00
    },
  },
  minNodeVersion: '20.0.0',
  workflowNodeVersion: '22.x',
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();