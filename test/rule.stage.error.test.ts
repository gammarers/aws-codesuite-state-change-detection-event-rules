import { InvalidInternalDefinitionParameterError } from '@gammarers/aws-cdk-errors';
import { App, Stack } from 'aws-cdk-lib';
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from '../src';

describe('Error Rule Check', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  it('Should Error', () => {
    expect(() => {
      new CodePipelineStageExecutionStateChangeDetectionEventRule(stack, 'CodePipelineStageExecutionStateChangeDetectionEventRule', {
        ruleName: 'codepipeline-state-change-detection-event-rule',
        eventPattern: {
          source: ['aws.codepipeline'],
          detailType: ['CodePipeline Stage Execution State Change'],
        },
      });
    }).toThrow(InvalidInternalDefinitionParameterError);
  });

});
