/// <reference types="react" />
import React = require('react');
import RN = require('react-native');
import SyncTasks = require('synctasks');
import RX = require('../common/Interfaces');
import Types = require('../common/Types');
export declare class UserInterface extends RX.UserInterface {
    private _touchLatencyThresholhdMs;
    private _isNavigatingWithKeyboard;
    private _rootViewUsingPropsFactory;
    constructor();
    measureLayoutRelativeToWindow(component: React.Component<any, any>): SyncTasks.Promise<Types.LayoutInfo>;
    measureLayoutRelativeToAncestor(component: React.Component<any, any>, ancestor: React.Component<any, any>): SyncTasks.Promise<Types.LayoutInfo>;
    measureWindow(): Types.LayoutInfo;
    getContentSizeMultiplier(): SyncTasks.Promise<number>;
    getMaxContentSizeMultiplier(): SyncTasks.Promise<number>;
    setMaxContentSizeMultiplier(maxContentSizeMultiplier: number): void;
    useCustomScrollbars(enable?: boolean): void;
    dismissKeyboard(): void;
    isHighPixelDensityScreen(): boolean;
    getPixelRatio(): number;
    setMainView(element: React.ReactElement<any>): void;
    registerRootViewUsingPropsFactory(factory: RN.ComponentProvider): void;
    registerRootView(viewKey: string, getComponentFunc: Function): void;
    renderMainView(): void;
    enableTouchLatencyEvents(latencyThresholdMs: number): void;
    evaluateTouchLatency(e: Types.SyntheticEvent): void;
    isNavigatingWithKeyboard(): boolean;
    private _keyboardNavigationStateChanged;
}
declare const _default: UserInterface;
export default _default;
