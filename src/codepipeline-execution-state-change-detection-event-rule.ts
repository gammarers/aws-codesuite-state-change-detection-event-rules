import { InvalidInternalDefinitionParameterError } from '@gammarers/aws-cdk-errors';
import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

/**
 * @TODO: Not yet supported Omit
 * https://github.com/aws/jsii/issues/4468
 * type omitKeys = 'eventPattern';
 * export interface CodePipelineStateChangeDetectionEventRuleProps extends Omit<events.RuleProps, 'eventPattern'> {}
 */

/**
 * @deprecated This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.
 */
export enum CodePipelineExecutionState {
  CANCELED = 'CANCELED',
  FAILED = 'FAILED',
  RESUMED = 'RESUMED',
  STARTED = 'STARTED',
  STOPPED = 'STOPPED',
  STOPPING = 'STOPPING',
  SUCCEEDED = 'SUCCEEDED',
  SUPERSEDED = 'SUPERSEDED',
}

/**
 * @deprecated This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.
 */
export interface CodePipelineExecutionStateChangeDetectionEventRuleProps extends events.RuleProps {
  readonly targetStates?: CodePipelineExecutionState[];
}

/**
 * @deprecated This class is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRule class instead.
 */
export class CodePipelineExecutionStateChangeDetectionEventRule extends events.Rule {
  constructor(scope: Construct, id: string, props: CodePipelineExecutionStateChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: ((): events.EventPattern => {
        if (props.eventPattern) {
          throw new InvalidInternalDefinitionParameterError('eventPattern');
        }
        return {
          source: ['aws.codepipeline'],
          detailType: ['CodePipeline Pipeline Execution State Change'],
          //          detail: {
          //            state: props.targetStates,
          //          },
          detail: (() => {
            if (props.targetStates) {
              return {
                state: props.targetStates,
              };
            }
            return undefined;
          })(),
        };
      })(),
    });
  }
}