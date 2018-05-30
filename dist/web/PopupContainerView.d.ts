/// <reference types="react" />
import React = require('react');
import { PopupContainerViewBase, PopupContainerViewBaseProps, PopupContainerViewContext } from '../common/PopupContainerViewBase';
import Types = require('../common/Types');
export interface PopupContainerViewProps extends PopupContainerViewBaseProps {
    style: React.CSSProperties;
    onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
export declare class PopupContainerView extends PopupContainerViewBase<PopupContainerViewProps, Types.Stateless> {
    constructor(props: PopupContainerViewProps, context: PopupContainerViewContext);
    render(): JSX.Element;
}
export default PopupContainerView;
