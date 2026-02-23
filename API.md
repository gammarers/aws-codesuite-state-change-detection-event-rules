# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodePipelinePipelineExecutionStateChangeDetectionEventRule <a name="CodePipelinePipelineExecutionStateChangeDetectionEventRule" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule"></a>

EventBridge rule that triggers on CodePipeline pipeline execution state change events.

Use this to react to pipeline-level state transitions (e.g. STARTED, SUCCEEDED, FAILED).

#### Initializers <a name="Initializers" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

new CodePipelinePipelineExecutionStateChangeDetectionEventRule(scope: Construct, id: string, props: CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - Construct scope (e.g. Stack). |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | - Construct id. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.props">props</a></code> | <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps">CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps</a></code> | - Rule properties; |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

Construct scope (e.g. Stack).

---

##### `id`<sup>Required</sup> <a name="id" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.id"></a>

- *Type:* string

Construct id.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps">CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps</a>

Rule properties;

do not set `eventPattern`.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addEventPattern"></a>

```typescript
public addEventPattern(eventPattern?: EventPattern): void
```

Adds an event pattern filter to this rule.

If a pattern was already specified,
these values are merged into the existing pattern.

For example, if the rule already contains the pattern:

   {
     "resources": [ "r1" ],
     "detail": {
       "hello": [ 1 ]
     }
   }

And `addEventPattern` is called with the pattern:

   {
     "resources": [ "r2" ],
     "detail": {
       "foo": [ "bar" ]
     }
   }

The resulting event pattern will be:

   {
     "resources": [ "r1", "r2" ],
     "detail": {
       "hello": [ 1 ],
       "foo": [ "bar" ]
     }
   }

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### `isConstruct` <a name="isConstruct" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isConstruct"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

CodePipelinePipelineExecutionStateChangeDetectionEventRule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isOwnedResource"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

CodePipelinePipelineExecutionStateChangeDetectionEventRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isResource"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

CodePipelinePipelineExecutionStateChangeDetectionEventRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### CodePipelineStageExecutionStateChangeDetectionEventRule <a name="CodePipelineStageExecutionStateChangeDetectionEventRule" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule"></a>

EventBridge rule that triggers on CodePipeline stage execution state change events.

Use this to react to stage-level state transitions (e.g. STARTED, SUCCEEDED, FAILED).

#### Initializers <a name="Initializers" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

new CodePipelineStageExecutionStateChangeDetectionEventRule(scope: Construct, id: string, props: CodePipelineStageExecutionStateChangeDetectionEventRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | - Construct scope (e.g. Stack). |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | - Construct id. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.props">props</a></code> | <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps">CodePipelineStageExecutionStateChangeDetectionEventRuleProps</a></code> | - Rule properties; |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

Construct scope (e.g. Stack).

---

##### `id`<sup>Required</sup> <a name="id" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.id"></a>

- *Type:* string

Construct id.

---

##### `props`<sup>Required</sup> <a name="props" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.props"></a>

- *Type:* <a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps">CodePipelineStageExecutionStateChangeDetectionEventRuleProps</a>

Rule properties;

do not set `eventPattern`.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addEventPattern"></a>

```typescript
public addEventPattern(eventPattern?: EventPattern): void
```

Adds an event pattern filter to this rule.

If a pattern was already specified,
these values are merged into the existing pattern.

For example, if the rule already contains the pattern:

   {
     "resources": [ "r1" ],
     "detail": {
       "hello": [ 1 ]
     }
   }

And `addEventPattern` is called with the pattern:

   {
     "resources": [ "r2" ],
     "detail": {
       "foo": [ "bar" ]
     }
   }

The resulting event pattern will be:

   {
     "resources": [ "r1", "r2" ],
     "detail": {
       "hello": [ 1 ],
       "foo": [ "bar" ]
     }
   }

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### `isConstruct` <a name="isConstruct" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isConstruct"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

CodePipelineStageExecutionStateChangeDetectionEventRule.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isOwnedResource"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

CodePipelineStageExecutionStateChangeDetectionEventRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isResource"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

CodePipelineStageExecutionStateChangeDetectionEventRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from 'aws-codepipeline-state-change-detection-event-rules'

CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


## Structs <a name="Structs" id="Structs"></a>

### CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps <a name="CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps"></a>

Properties for defining an EventBridge rule that detects CodePipeline pipeline execution state changes.

The event pattern is fixed to `aws.codepipeline` / "CodePipeline Pipeline Execution State Change";
do not pass `eventPattern` in props.

#### Initializer <a name="Initializer" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.Initializer"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps } from 'aws-codepipeline-state-change-detection-event-rules'

const codePipelinePipelineExecutionStateChangeDetectionEventRuleProps: CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.crossStackScope">crossStackScope</a></code> | <code>constructs.Construct</code> | The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region). |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | Additional restrictions for the event to route to the specified target. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule or rate (frequency) that determines when EventBridge runs the rule. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.targetStates">targetStates</a></code> | <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState">CodePipelinePipelineExecutionState</a>[]</code> | Optional list of pipeline execution states to filter on. |

---

##### `crossStackScope`<sup>Optional</sup> <a name="crossStackScope" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.crossStackScope"></a>

```typescript
public readonly crossStackScope: Construct;
```

- *Type:* constructs.Construct
- *Default:* none (the main scope will be used, even for cross-stack Events)

The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region).

This helps dealing with cycles that often arise in these situations.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A description of the rule's purpose.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.eventPattern"></a>

```typescript
public readonly eventPattern: EventPattern;
```

- *Type:* aws-cdk-lib.aws_events.EventPattern
- *Default:* No additional filtering based on an event pattern.

Additional restrictions for the event to route to the specified target.

The method that generates the rule probably imposes some type of event
filtering. The filtering implied by what you pass here is added
on top of that filtering.

> [https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html)

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID.

A name for the rule.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* None.

The schedule or rate (frequency) that determines when EventBridge runs the rule.

You must specify this property, the `eventPattern` property, or both.

For more information, see Schedule Expression Syntax for
Rules in the Amazon EventBridge User Guide.

> [https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html](https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html)

---

##### `targets`<sup>Optional</sup> <a name="targets" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

Input will be the full matched event. If you wish to specify custom
target input, use `addTarget(target[, inputOptions])`.

---

##### `targetStates`<sup>Optional</sup> <a name="targetStates" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.targetStates"></a>

```typescript
public readonly targetStates: CodePipelinePipelineExecutionState[];
```

- *Type:* <a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState">CodePipelinePipelineExecutionState</a>[]

Optional list of pipeline execution states to filter on.

If omitted, the rule matches all pipeline execution state changes.

---

### CodePipelineStageExecutionStateChangeDetectionEventRuleProps <a name="CodePipelineStageExecutionStateChangeDetectionEventRuleProps" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps"></a>

Properties for defining an EventBridge rule that detects CodePipeline stage execution state changes.

The event pattern is fixed to `aws.codepipeline` / "CodePipeline Stage Execution State Change";
do not pass `eventPattern` in props.

#### Initializer <a name="Initializer" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.Initializer"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRuleProps } from 'aws-codepipeline-state-change-detection-event-rules'

const codePipelineStageExecutionStateChangeDetectionEventRuleProps: CodePipelineStageExecutionStateChangeDetectionEventRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.crossStackScope">crossStackScope</a></code> | <code>constructs.Construct</code> | The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region). |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | Additional restrictions for the event to route to the specified target. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule or rate (frequency) that determines when EventBridge runs the rule. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.targetStates">targetStates</a></code> | <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState">CodePipelineStageExecutionState</a>[]</code> | Optional list of stage execution states to filter on. |

---

##### `crossStackScope`<sup>Optional</sup> <a name="crossStackScope" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.crossStackScope"></a>

```typescript
public readonly crossStackScope: Construct;
```

- *Type:* constructs.Construct
- *Default:* none (the main scope will be used, even for cross-stack Events)

The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region).

This helps dealing with cycles that often arise in these situations.

---

##### `description`<sup>Optional</sup> <a name="description" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A description of the rule's purpose.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.eventPattern"></a>

```typescript
public readonly eventPattern: EventPattern;
```

- *Type:* aws-cdk-lib.aws_events.EventPattern
- *Default:* No additional filtering based on an event pattern.

Additional restrictions for the event to route to the specified target.

The method that generates the rule probably imposes some type of event
filtering. The filtering implied by what you pass here is added
on top of that filtering.

> [https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html)

---

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID.

A name for the rule.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.schedule"></a>

```typescript
public readonly schedule: Schedule;
```

- *Type:* aws-cdk-lib.aws_events.Schedule
- *Default:* None.

The schedule or rate (frequency) that determines when EventBridge runs the rule.

You must specify this property, the `eventPattern` property, or both.

For more information, see Schedule Expression Syntax for
Rules in the Amazon EventBridge User Guide.

> [https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html](https://docs.aws.amazon.com/eventbridge/latest/userguide/scheduled-events.html)

---

##### `targets`<sup>Optional</sup> <a name="targets" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

Input will be the full matched event. If you wish to specify custom
target input, use `addTarget(target[, inputOptions])`.

---

##### `targetStates`<sup>Optional</sup> <a name="targetStates" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.targetStates"></a>

```typescript
public readonly targetStates: CodePipelineStageExecutionState[];
```

- *Type:* <a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState">CodePipelineStageExecutionState</a>[]

Optional list of stage execution states to filter on.

If omitted, the rule matches all stage execution state changes.

---



## Enums <a name="Enums" id="Enums"></a>

### CodePipelinePipelineExecutionState <a name="CodePipelinePipelineExecutionState" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState"></a>

Execution states for a CodePipeline pipeline.

> [https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html](https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.CANCELED">CANCELED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.FAILED">FAILED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.RESUMED">RESUMED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STARTED">STARTED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STOPPED">STOPPED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STOPPING">STOPPING</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.SUCCEEDED">SUCCEEDED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.SUPERSEDED">SUPERSEDED</a></code> | *No description.* |

---

##### `CANCELED` <a name="CANCELED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.CANCELED"></a>

---


##### `FAILED` <a name="FAILED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.FAILED"></a>

---


##### `RESUMED` <a name="RESUMED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.RESUMED"></a>

---


##### `STARTED` <a name="STARTED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STARTED"></a>

---


##### `STOPPED` <a name="STOPPED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STOPPED"></a>

---


##### `STOPPING` <a name="STOPPING" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STOPPING"></a>

---


##### `SUCCEEDED` <a name="SUCCEEDED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.SUCCEEDED"></a>

---


##### `SUPERSEDED` <a name="SUPERSEDED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelinePipelineExecutionState.SUPERSEDED"></a>

---


### CodePipelineStageExecutionState <a name="CodePipelineStageExecutionState" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState"></a>

Execution states for a CodePipeline stage.

> [https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html](https://docs.aws.amazon.com/codepipeline/latest/userguide/detect-state-changes-cloudwatch-events.html)

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.CANCELED">CANCELED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.FAILED">FAILED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.RESUMED">RESUMED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.STARTED">STARTED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.STOPPED">STOPPED</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.STOPPING">STOPPING</a></code> | *No description.* |
| <code><a href="#aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.SUCCEEDED">SUCCEEDED</a></code> | *No description.* |

---

##### `CANCELED` <a name="CANCELED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.CANCELED"></a>

---


##### `FAILED` <a name="FAILED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.FAILED"></a>

---


##### `RESUMED` <a name="RESUMED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.RESUMED"></a>

---


##### `STARTED` <a name="STARTED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.STARTED"></a>

---


##### `STOPPED` <a name="STOPPED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.STOPPED"></a>

---


##### `STOPPING` <a name="STOPPING" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.STOPPING"></a>

---


##### `SUCCEEDED` <a name="SUCCEEDED" id="aws-codepipeline-state-change-detection-event-rules.CodePipelineStageExecutionState.SUCCEEDED"></a>

---

