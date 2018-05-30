/// <reference types="react" />
/**
* Link.tsx
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* RN-specific implementation of the cross-platform Link abstraction.
*/
import PropTypes = require('prop-types');
import React = require('react');
import RN = require('react-native');
import { FocusArbitratorProvider } from '../common/utils/AutoFocusHelper';
import RX = require('../common/Interfaces');
import Types = require('../common/Types');
export interface LinkContext {
    focusArbitrator?: FocusArbitratorProvider;
    isRxParentAText?: boolean;
}
export declare class Link extends React.Component<Types.LinkProps, {}> {
    static contextTypes: {
        focusArbitrator: PropTypes.Requireable<any> & PropTypes.Validator<any>;
        isRxParentAText: PropTypes.Requireable<any> & PropTypes.Validator<any>;
    };
    context: LinkContext;
    protected _mountedComponent: RN.ReactNativeBaseComponent<any, any> | null;
    setNativeProps(nativeProps: RN.TextProps): void;
    render(): JSX.Element;
    componentDidMount(): void;
    protected _render(internalProps: RN.TextProps): JSX.Element;
    protected _onMount: (component: RN.ReactNativeBaseComponent<any, any> | null) => void;
    protected _onPress: (e: RX.Types.SyntheticEvent) => void;
    protected _onLongPress: (e: RX.Types.SyntheticEvent) => void;
    requestFocus(): void;
    focus(): void;
    blur(): void;
}
export default Link;
