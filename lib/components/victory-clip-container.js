import React from "react";
import { G } from "react-native-svg";
import { NativeHelpers, ClipPath } from "../index";
import { VictoryClipContainer } from "victory-core";

export default class extends VictoryClipContainer {

  renderClippedGroup(props, clipId) {
    const { style, events, transform, children } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    const clipComponent = this.renderClipComponent(props, clipId);
    return (
      <G {...nativeStyle} {...events} transform={transform}>
        {clipComponent}
        <G clipPath={`url(#${clipId})`}>
          {children}
        </G>
      </G>
    );
  }

  renderClipComponent(props, clipId) {
    const { padding, translateX, clipHeight, clipWidth } = props;
    return (
      <ClipPath
        padding={padding}
        translateX={translateX}
        clipWidth={clipWidth}
        clipHeight={clipHeight}
        clipId={+clipId}
      />
    );
  }

  renderGroup(props) {
    const { style, events, children, transform } = props;
    const nativeStyle = NativeHelpers.getStyle(style);
    return (
      <G {...nativeStyle} {...events} transform={transform}>
        {children}
      </G>
    );
  }
}
