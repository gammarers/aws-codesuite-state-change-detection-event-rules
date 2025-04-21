import { App, Stack } from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as events from 'aws-cdk-lib/aws-events';
import { CodePipelineExecutionState, CodePipelineExecutionStateChangeDetectionEventRule } from '../src';

describe('Default Rule Check', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack', {
    env: {
      account: '123456789012',
      region: 'us-east-1',
    },
  });

  const rule = new CodePipelineExecutionStateChangeDetectionEventRule(stack, 'CodePipelineExecutionStateChangeDetectionEventRule', {
    ruleName: 'codepipeline-state-change-detection-event-rule',
    targetStates: [
      CodePipelineExecutionState.FAILED,
      CodePipelineExecutionState.CANCELED,
    ],
  });

  it('Is Rule', async () => {
    expect(rule).toBeInstanceOf(events.Rule);
  });

  const template = Template.fromStack(stack);

  it('Should match event rule.', async () => {
    template.hasResourceProperties('AWS::Events::Rule', Match.objectEquals({
      Name: 'codepipeline-state-change-detection-event-rule',
      State: 'ENABLED',
      EventPattern: Match.objectEquals({
        'source': [
          'aws.codepipeline',
        ],
        'detail-type': [
          'CodePipeline Pipeline Execution State Change',
        ],
        'detail': {
          state: Match.arrayEquals(['FAILED', 'CANCELED']),
        },
      }),
    }));
  });

  it('Should match snapshot.', async () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});
