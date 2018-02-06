# react-native-background-progress

Let your background handle the progress report

[![NPM Version](https://img.shields.io/npm/v/react-native-background-progress.svg?style=flat)](https://www.npmjs.com/package/react-native-background-progress)
[![NPM Downloads](https://img.shields.io/npm/dm/react-native-background-progress.svg?style=flat)](https://www.npmjs.com/package/react-native-background-progress)

<a name='top'/>

## Quick Access
* <a href='#install'>Installation</a>
* <a href='#preview'>Preview</a>
* <a href='#expo'>Expo</a>
* <a href='#usage'>Usage</a>
* <a href='#properties'>Properties</a>
* <a href='#contributing'>Contributing</a>

## <a name='install'>Installation</a>
Install the module with:


```
npm install react-native-background-progress --save
```

## <a name='preview'>Preview</a>

![](https://github.com/Johan-dutoit/react-native-background-progress/blob/master/preview.gif)

## <a name='expo'>Expo</a>

You can find the Expo snack here: <a href='https://snack.expo.io/@johan-dev/background-progress'>https://snack.expo.io/@johan-dev/background-progress</a>

## <a name='usage'>Usage</a>
Simply import the component 

```js
import BackgroundProgress from 'react-native-background-progress';
```

Then use as follows
```js
<BackgroundProgress
  ref={(ref) => this.bp = ref}
  total={5}
  backgroundColor="#A0D468"
  stepColor="#8CC152"
  friction={7}
  tension={140}
  onAnimationStart={this.onAnimationStart}
  onAnimationFinish={this.onAnimationFinish}>
    <View style={styles.container}>
        <Text style={styles.paragraph}>
            {this.renderCurrentStep(this.state.currnetStep)}
        </Text>
        <Button title="next step" onPress={this.nextStep} />
        <Button title="prev step" onPress={this.prevStep} />
    </View>
</BackgroundProgress>

nextStep = () => {
    this.bp.nextStep();
};

prevStep = () => {
    this.bp.previousStep();
};

```


###### <a href='#top'>Top</a>

## <a name='properties'>Properties</a>

| Prop | Description | Default |
|---|---|---|
|**`duration`**|The duration each view takes to load in|`300`|
|**`staggerDelay`**|The delay between each animation|`200`|
|**`useNativeDriver`**|Use the native drive for the animations|`true`|

###### <a href='#top'>Top</a>

## <a name='#Contributing'>Contributing</a>
Feel free to do pull requests if a certain feature you want is missing.  We accept all PR's that are enhancements to the project.

###### <a href='#top'>Top</a>