import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

/**
 * @TODO: Not yet supported
 * https://github.com/aws/jsii/issues/4468
 * type omitKeys = 'eventPattern';
 * export interface CodePipelineStateChangeDetectionEventRuleProps extends Omit<events.RuleProps, 'eventPattern'> {}
 */

export interface CodePipelineExecutionStateChangeDetectionEventRuleProps extends events.RuleProps {}

export class CodePipelineExecutionStateChangeDetectionEventRule extends events.Rule {
  constructor(scope: Construct, id: string, props: CodePipelineExecutionStateChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: (() => {
        if (props.eventPattern) {
          throw new Error('InvalidArgumentException: The specified argument eventPattern is predefined and should not be changed.');
        }
        return {
          source: ['aws.codepipeline'],
          detailType: ['CodePipeline Pipeline Execution State Change'],
        };
      })(),
    });
  }
}