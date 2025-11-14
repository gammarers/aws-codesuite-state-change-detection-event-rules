# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CodePipelineExecutionStateChangeDetectionEventRule <a name="CodePipelineExecutionStateChangeDetectionEventRule" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.Initializer"></a>

```typescript
import { CodePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

new CodePipelineExecutionStateChangeDetectionEventRule(scope: Construct, id: string, props: CodePipelineExecutionStateChangeDetectionEventRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps">CodePipelineExecutionStateChangeDetectionEventRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps">CodePipelineExecutionStateChangeDetectionEventRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### ~~`toString`~~ <a name="toString" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### ~~`applyRemovalPolicy`~~ <a name="applyRemovalPolicy" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### ~~`addEventPattern`~~ <a name="addEventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### ~~`addTarget`~~ <a name="addTarget" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isConstruct"></a>

```typescript
import { CodePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelineExecutionStateChangeDetectionEventRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### ~~`isOwnedResource`~~ <a name="isOwnedResource" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isOwnedResource"></a>

```typescript
import { CodePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelineExecutionStateChangeDetectionEventRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### ~~`isResource`~~ <a name="isResource" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isResource"></a>

```typescript
import { CodePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelineExecutionStateChangeDetectionEventRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### ~~`fromEventRuleArn`~~ <a name="fromEventRuleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn"></a>

```typescript
import { CodePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### ~~`node`~~<sup>Required</sup> <a name="node" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.node"></a>

- *Deprecated:* This class is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRule class instead.

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### ~~`env`~~<sup>Required</sup> <a name="env" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.env"></a>

- *Deprecated:* This class is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRule class instead.

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

##### ~~`stack`~~<sup>Required</sup> <a name="stack" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.stack"></a>

- *Deprecated:* This class is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRule class instead.

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### ~~`ruleArn`~~<sup>Required</sup> <a name="ruleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.ruleArn"></a>

- *Deprecated:* This class is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRule class instead.

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### ~~`ruleName`~~<sup>Required</sup> <a name="ruleName" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRule.property.ruleName"></a>

- *Deprecated:* This class is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRule class instead.

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### CodePipelinePipelineExecutionStateChangeDetectionEventRule <a name="CodePipelinePipelineExecutionStateChangeDetectionEventRule" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

new CodePipelinePipelineExecutionStateChangeDetectionEventRule(scope: Construct, id: string, props: CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps">CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps">CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### `isConstruct` <a name="isConstruct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isConstruct"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

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

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isOwnedResource"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelinePipelineExecutionStateChangeDetectionEventRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isResource"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelinePipelineExecutionStateChangeDetectionEventRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


### CodePipelineStageExecutionStateChangeDetectionEventRule <a name="CodePipelineStageExecutionStateChangeDetectionEventRule" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule"></a>

#### Initializers <a name="Initializers" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

new CodePipelineStageExecutionStateChangeDetectionEventRule(scope: Construct, id: string, props: CodePipelineStageExecutionStateChangeDetectionEventRuleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.props">props</a></code> | <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps">CodePipelineStageExecutionStateChangeDetectionEventRuleProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.Initializer.parameter.props"></a>

- *Type:* <a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps">CodePipelineStageExecutionStateChangeDetectionEventRuleProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addEventPattern">addEventPattern</a></code> | Adds an event pattern filter to this rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addTarget">addTarget</a></code> | Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets. |

---

##### `toString` <a name="toString" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.applyRemovalPolicy"></a>

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

###### `policy`<sup>Required</sup> <a name="policy" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `addEventPattern` <a name="addEventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addEventPattern"></a>

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

###### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addEventPattern.parameter.eventPattern"></a>

- *Type:* aws-cdk-lib.aws_events.EventPattern

---

##### `addTarget` <a name="addTarget" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addTarget"></a>

```typescript
public addTarget(target?: IRuleTarget): void
```

Adds a target to the rule. The abstract class RuleTarget can be extended to define new targets.

No-op if target is undefined.

###### `target`<sup>Optional</sup> <a name="target" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.addTarget.parameter.target"></a>

- *Type:* aws-cdk-lib.aws_events.IRuleTarget

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn">fromEventRuleArn</a></code> | Import an existing EventBridge Rule provided an ARN. |

---

##### `isConstruct` <a name="isConstruct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isConstruct"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

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

###### `x`<sup>Required</sup> <a name="x" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isOwnedResource"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelineStageExecutionStateChangeDetectionEventRule.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isResource"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelineStageExecutionStateChangeDetectionEventRule.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromEventRuleArn` <a name="fromEventRuleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRule } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn(scope: Construct, id: string, eventRuleArn: string)
```

Import an existing EventBridge Rule provided an ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.scope"></a>

- *Type:* constructs.Construct

The parent creating construct (usually `this`).

---

###### `id`<sup>Required</sup> <a name="id" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.id"></a>

- *Type:* string

The construct's name.

---

###### `eventRuleArn`<sup>Required</sup> <a name="eventRuleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.fromEventRuleArn.parameter.eventRuleArn"></a>

- *Type:* string

Event Rule ARN (i.e. arn:aws:events:<region>:<account-id>:rule/MyScheduledRule).

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.ruleArn">ruleArn</a></code> | <code>string</code> | The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.ruleName">ruleName</a></code> | <code>string</code> | The name event rule. |

---

##### `node`<sup>Required</sup> <a name="node" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.env"></a>

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

##### `stack`<sup>Required</sup> <a name="stack" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `ruleArn`<sup>Required</sup> <a name="ruleArn" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.ruleArn"></a>

```typescript
public readonly ruleArn: string;
```

- *Type:* string

The value of the event rule Amazon Resource Name (ARN), such as arn:aws:events:us-east-2:123456789012:rule/example.

---

##### `ruleName`<sup>Required</sup> <a name="ruleName" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRule.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string

The name event rule.

---


## Structs <a name="Structs" id="Structs"></a>

### CodePipelineExecutionStateChangeDetectionEventRuleProps <a name="CodePipelineExecutionStateChangeDetectionEventRuleProps" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.Initializer"></a>

```typescript
import { CodePipelineExecutionStateChangeDetectionEventRuleProps } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

const codePipelineExecutionStateChangeDetectionEventRuleProps: CodePipelineExecutionStateChangeDetectionEventRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.crossStackScope">crossStackScope</a></code> | <code>constructs.Construct</code> | The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region). |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | Additional restrictions for the event to route to the specified target. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule or rate (frequency) that determines when EventBridge runs the rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.targetStates">targetStates</a></code> | <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState">CodePipelineExecutionState</a>[]</code> | *No description.* |

---

##### ~~`crossStackScope`~~<sup>Optional</sup> <a name="crossStackScope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.crossStackScope"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

```typescript
public readonly crossStackScope: Construct;
```

- *Type:* constructs.Construct
- *Default:* none (the main scope will be used, even for cross-stack Events)

The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region).

This helps dealing with cycles that often arise in these situations.

---

##### ~~`description`~~<sup>Optional</sup> <a name="description" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.description"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A description of the rule's purpose.

---

##### ~~`eventPattern`~~<sup>Optional</sup> <a name="eventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.eventPattern"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

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

##### ~~`ruleName`~~<sup>Optional</sup> <a name="ruleName" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.ruleName"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID.

A name for the rule.

---

##### ~~`enabled`~~<sup>Optional</sup> <a name="enabled" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.enabled"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### ~~`eventBus`~~<sup>Optional</sup> <a name="eventBus" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.eventBus"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### ~~`schedule`~~<sup>Optional</sup> <a name="schedule" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.schedule"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

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

##### ~~`targets`~~<sup>Optional</sup> <a name="targets" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.targets"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

Input will be the full matched event. If you wish to specify custom
target input, use `addTarget(target[, inputOptions])`.

---

##### ~~`targetStates`~~<sup>Optional</sup> <a name="targetStates" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionStateChangeDetectionEventRuleProps.property.targetStates"></a>

- *Deprecated:* This interface  is deprecated. Use the CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps interface instead.

```typescript
public readonly targetStates: CodePipelineExecutionState[];
```

- *Type:* <a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState">CodePipelineExecutionState</a>[]

---

### CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps <a name="CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.Initializer"></a>

```typescript
import { CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

const codePipelinePipelineExecutionStateChangeDetectionEventRuleProps: CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.crossStackScope">crossStackScope</a></code> | <code>constructs.Construct</code> | The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region). |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | Additional restrictions for the event to route to the specified target. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule or rate (frequency) that determines when EventBridge runs the rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.targetStates">targetStates</a></code> | <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState">CodePipelinePipelineExecutionState</a>[]</code> | *No description.* |

---

##### `crossStackScope`<sup>Optional</sup> <a name="crossStackScope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.crossStackScope"></a>

```typescript
public readonly crossStackScope: Construct;
```

- *Type:* constructs.Construct
- *Default:* none (the main scope will be used, even for cross-stack Events)

The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region).

This helps dealing with cycles that often arise in these situations.

---

##### `description`<sup>Optional</sup> <a name="description" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A description of the rule's purpose.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.eventPattern"></a>

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

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID.

A name for the rule.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.schedule"></a>

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

##### `targets`<sup>Optional</sup> <a name="targets" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

Input will be the full matched event. If you wish to specify custom
target input, use `addTarget(target[, inputOptions])`.

---

##### `targetStates`<sup>Optional</sup> <a name="targetStates" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionStateChangeDetectionEventRuleProps.property.targetStates"></a>

```typescript
public readonly targetStates: CodePipelinePipelineExecutionState[];
```

- *Type:* <a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState">CodePipelinePipelineExecutionState</a>[]

---

### CodePipelineStageExecutionStateChangeDetectionEventRuleProps <a name="CodePipelineStageExecutionStateChangeDetectionEventRuleProps" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps"></a>

#### Initializer <a name="Initializer" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.Initializer"></a>

```typescript
import { CodePipelineStageExecutionStateChangeDetectionEventRuleProps } from '@gammarers/aws-codesuite-state-change-detection-event-rules'

const codePipelineStageExecutionStateChangeDetectionEventRuleProps: CodePipelineStageExecutionStateChangeDetectionEventRuleProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.crossStackScope">crossStackScope</a></code> | <code>constructs.Construct</code> | The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region). |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.description">description</a></code> | <code>string</code> | A description of the rule's purpose. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.eventPattern">eventPattern</a></code> | <code>aws-cdk-lib.aws_events.EventPattern</code> | Additional restrictions for the event to route to the specified target. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.ruleName">ruleName</a></code> | <code>string</code> | A name for the rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.enabled">enabled</a></code> | <code>boolean</code> | Indicates whether the rule is enabled. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.eventBus">eventBus</a></code> | <code>aws-cdk-lib.aws_events.IEventBus</code> | The event bus to associate with this rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.schedule">schedule</a></code> | <code>aws-cdk-lib.aws_events.Schedule</code> | The schedule or rate (frequency) that determines when EventBridge runs the rule. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.targets">targets</a></code> | <code>aws-cdk-lib.aws_events.IRuleTarget[]</code> | Targets to invoke when this rule matches an event. |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.targetStates">targetStates</a></code> | <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState">CodePipelineStageExecutionState</a>[]</code> | *No description.* |

---

##### `crossStackScope`<sup>Optional</sup> <a name="crossStackScope" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.crossStackScope"></a>

```typescript
public readonly crossStackScope: Construct;
```

- *Type:* constructs.Construct
- *Default:* none (the main scope will be used, even for cross-stack Events)

The scope to use if the source of the rule and its target are in different Stacks (but in the same account & region).

This helps dealing with cycles that often arise in these situations.

---

##### `description`<sup>Optional</sup> <a name="description" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

A description of the rule's purpose.

---

##### `eventPattern`<sup>Optional</sup> <a name="eventPattern" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.eventPattern"></a>

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

##### `ruleName`<sup>Optional</sup> <a name="ruleName" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.ruleName"></a>

```typescript
public readonly ruleName: string;
```

- *Type:* string
- *Default:* AWS CloudFormation generates a unique physical ID.

A name for the rule.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.enabled"></a>

```typescript
public readonly enabled: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates whether the rule is enabled.

---

##### `eventBus`<sup>Optional</sup> <a name="eventBus" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.eventBus"></a>

```typescript
public readonly eventBus: IEventBus;
```

- *Type:* aws-cdk-lib.aws_events.IEventBus
- *Default:* The default event bus.

The event bus to associate with this rule.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.schedule"></a>

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

##### `targets`<sup>Optional</sup> <a name="targets" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.targets"></a>

```typescript
public readonly targets: IRuleTarget[];
```

- *Type:* aws-cdk-lib.aws_events.IRuleTarget[]
- *Default:* No targets.

Targets to invoke when this rule matches an event.

Input will be the full matched event. If you wish to specify custom
target input, use `addTarget(target[, inputOptions])`.

---

##### `targetStates`<sup>Optional</sup> <a name="targetStates" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionStateChangeDetectionEventRuleProps.property.targetStates"></a>

```typescript
public readonly targetStates: CodePipelineStageExecutionState[];
```

- *Type:* <a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState">CodePipelineStageExecutionState</a>[]

---



## Enums <a name="Enums" id="Enums"></a>

### CodePipelineExecutionState <a name="CodePipelineExecutionState" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.CANCELED">CANCELED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.FAILED">FAILED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.RESUMED">RESUMED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.STARTED">STARTED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.STOPPED">STOPPED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.STOPPING">STOPPING</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.SUCCEEDED">SUCCEEDED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.SUPERSEDED">SUPERSEDED</a></code> | *No description.* |

---

##### ~~`CANCELED`~~ <a name="CANCELED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.CANCELED"></a>

- *Deprecated:* This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.

---


##### ~~`FAILED`~~ <a name="FAILED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.FAILED"></a>

- *Deprecated:* This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.

---


##### ~~`RESUMED`~~ <a name="RESUMED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.RESUMED"></a>

- *Deprecated:* This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.

---


##### ~~`STARTED`~~ <a name="STARTED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.STARTED"></a>

- *Deprecated:* This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.

---


##### ~~`STOPPED`~~ <a name="STOPPED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.STOPPED"></a>

- *Deprecated:* This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.

---


##### ~~`STOPPING`~~ <a name="STOPPING" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.STOPPING"></a>

- *Deprecated:* This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.

---


##### ~~`SUCCEEDED`~~ <a name="SUCCEEDED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.SUCCEEDED"></a>

- *Deprecated:* This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.

---


##### ~~`SUPERSEDED`~~ <a name="SUPERSEDED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineExecutionState.SUPERSEDED"></a>

- *Deprecated:* This enum is deprecated. Use the CodePipelinePipelineExecutionState enum instead.

---


### CodePipelinePipelineExecutionState <a name="CodePipelinePipelineExecutionState" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.CANCELED">CANCELED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.FAILED">FAILED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.RESUMED">RESUMED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STARTED">STARTED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STOPPED">STOPPED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STOPPING">STOPPING</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.SUCCEEDED">SUCCEEDED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.SUPERSEDED">SUPERSEDED</a></code> | *No description.* |

---

##### `CANCELED` <a name="CANCELED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.CANCELED"></a>

---


##### `FAILED` <a name="FAILED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.FAILED"></a>

---


##### `RESUMED` <a name="RESUMED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.RESUMED"></a>

---


##### `STARTED` <a name="STARTED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STARTED"></a>

---


##### `STOPPED` <a name="STOPPED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STOPPED"></a>

---


##### `STOPPING` <a name="STOPPING" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.STOPPING"></a>

---


##### `SUCCEEDED` <a name="SUCCEEDED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.SUCCEEDED"></a>

---


##### `SUPERSEDED` <a name="SUPERSEDED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelinePipelineExecutionState.SUPERSEDED"></a>

---


### CodePipelineStageExecutionState <a name="CodePipelineStageExecutionState" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.CANCELED">CANCELED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.FAILED">FAILED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.RESUMED">RESUMED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.STARTED">STARTED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.STOPPED">STOPPED</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.STOPPING">STOPPING</a></code> | *No description.* |
| <code><a href="#@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.SUCCEEDED">SUCCEEDED</a></code> | *No description.* |

---

##### `CANCELED` <a name="CANCELED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.CANCELED"></a>

---


##### `FAILED` <a name="FAILED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.FAILED"></a>

---


##### `RESUMED` <a name="RESUMED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.RESUMED"></a>

---


##### `STARTED` <a name="STARTED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.STARTED"></a>

---


##### `STOPPED` <a name="STOPPED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.STOPPED"></a>

---


##### `STOPPING` <a name="STOPPING" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.STOPPING"></a>

---


##### `SUCCEEDED` <a name="SUCCEEDED" id="@gammarers/aws-codesuite-state-change-detection-event-rules.CodePipelineStageExecutionState.SUCCEEDED"></a>

---

