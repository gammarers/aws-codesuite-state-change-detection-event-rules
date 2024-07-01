import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as events from 'aws-cdk-lib/aws-events';
import { CodePipelineStateChangeDetectionEventRule } from '../src';

describe('Default Rule Check', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const rule = new CodePipelineStateChangeDetectionEventRule(stack, 'CodePipelineStateChangeDetectionEventRule', {
    ruleName: 'codepipeline-state-change-detection-event-rule',
  });

  it('Is Rule', () => {
    expect(rule).toBeInstanceOf(events.Rule);
  });

  const template = Template.fromStack(stack);

  it('Should match snapshot.', () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});
