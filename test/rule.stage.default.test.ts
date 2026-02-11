import { App, Stack } from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as events from 'aws-cdk-lib/aws-events';
import { CodePipelineStageExecutionState, CodePipelineStageExecutionStateChangeDetectionEventRule } from '../src';

describe('CodePipelineStageExecutionStateChangeDetectionEventRule Tests', () => {
  describe('Default Rule Tests', () => {

    const app = new App();
    const stack = new Stack(app, 'TestingStack');

    const rule = new CodePipelineStageExecutionStateChangeDetectionEventRule(stack, 'CodePipelineStageExecutionStateChangeDetectionEventRule', {
      //ruleName: 'codepipeline-stage-exec-state-change-detection-event-rule',
    });

    it('Is Rule', async () => {
      expect(rule).toBeInstanceOf(events.Rule);
    });

    const template = Template.fromStack(stack);

    it('Should match event rule.', async () => {
      template.hasResourceProperties('AWS::Events::Rule', Match.objectEquals({
        //Name: 'codepipeline-state-change-detection-event-rule',
        State: 'ENABLED',
        EventPattern: Match.objectEquals({
          'source': [
            'aws.codepipeline',
          ],
          'detail-type': [
            'CodePipeline Stage Execution State Change',
          ],
        }),
      }));
    });

    it('Should match snapshot.', async () => {
      expect(template.toJSON()).toMatchSnapshot();
    });

  });

  describe('Specific Rule Tests', () => {

    const app = new App();
    const stack = new Stack(app, 'TestingStack');

    const rule = new CodePipelineStageExecutionStateChangeDetectionEventRule(stack, 'CodePipelineStageExecutionStateChangeDetectionEventRule', {
      ruleName: 'codepipeline-stage-exec-state-change-detection-event-rule',
      targetStates: [
        CodePipelineStageExecutionState.FAILED,
        CodePipelineStageExecutionState.CANCELED,
      ],
    });

    it('Is Rule', async () => {
      expect(rule).toBeInstanceOf(events.Rule);
    });

    const template = Template.fromStack(stack);

    it('Should match event rule.', async () => {
      template.hasResourceProperties('AWS::Events::Rule', Match.objectEquals({
        Name: 'codepipeline-stage-exec-state-change-detection-event-rule',
        State: 'ENABLED',
        EventPattern: Match.objectEquals({
          'source': [
            'aws.codepipeline',
          ],
          'detail-type': [
            'CodePipeline Stage Execution State Change',
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
});
