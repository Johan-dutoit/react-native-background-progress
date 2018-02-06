import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

import propTypes from 'prop-types';

import styles from './styles';

class BackgroundProgress extends Component {
  state = {
    animation: new Animated.Value(1),
    currentStep: 1,
  };

  render() {
    let { backgroundColor, stepColor, total, containerStyle } = this.props;

    let progressWidthInterpolate = this.state.animation.interpolate({
      inputRange: [-1, 1, total],
      outputRange: ['0%', '0%', '100%'],
    });

    let backgroundStyle = {
      backgroundColor: backgroundColor,
    };

    let progressBackgroundStyle = {
      backgroundColor: stepColor,
      width: progressWidthInterpolate,
    };

    return (
      <View style={[styles.container, containerStyle]}>
        <View style={[StyleSheet.absoluteFill, backgroundStyle]} />
        <Animated.View
          style={[StyleSheet.absoluteFill, progressBackgroundStyle]}
        />
        {this.props.children}
      </View>
    );
  }

  nextStep = () => {
    let nextStep = this.state.currentStep + 1;
    if (nextStep > this.props.total) {
      nextStep = this.props.total;
    }

    this.animateToValue(nextStep);
  };

  previousStep = () => {
    let previousStep = this.state.currentStep - 1;
    if (previousStep < 1) {
      previousStep = 1;
    }

    this.animateToValue(previousStep);
  };

  animateToValue = function (toValue) {
    let { friction, tension, onAnimationStart, onAnimationFinish } = this.props;

    onAnimationStart && onAnimationStart(toValue);

    this.springAnimation = Animated.spring(this.state.animation, {
      toValue: toValue,
      friction: friction,
      tension: tension,
    });

    this.springAnimation.start(() => {
      // this is breaking the spring animation
      this.setState({
        currentStep: toValue,
      });

      onAnimationFinish && onAnimationFinish(toValue);
    });
  };
}

BackgroundProgress.propTypes = {
  backgroundColor: propTypes.string.isRequired,
  stepColor: propTypes.string.isRequired,
  // containerStyle: View.propTypes.style,
  stepDuration: propTypes.number,
  friction: propTypes.number,
  tension: propTypes.number,
};

BackgroundProgress.defaultProps = {
  friction: 15,
  tension: 140,
};

export default BackgroundProgress;
