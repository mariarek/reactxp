/// <reference types="react" />
import RN = require('react-native');
import { FocusManagerFocusableComponent } from '../native-desktop/utils/FocusManager';
import { Link as LinkCommon } from '../native-common/Link';
export declare class Link extends LinkCommon implements FocusManagerFocusableComponent {
    protected _render(internalProps: RN.TextProps): JSX.Element;
    private _renderLinkAsFocusableText(internalProps);
    private _focusableElement;
    private _onFocusableRef;
    private _createFocusableTextProps(internalProps);
    private _nativeHyperlinkElement;
    private _onNativeHyperlinkRef;
    private _renderLinkAsNativeHyperlink(internalProps);
    focus(): void;
    blur(): void;
    setNativeProps(nativeProps: RN.TextProps): void;
    private _onKeyDown;
    private _onKeyUp;
    private _onFocus;
    onFocus(): void;
    getTabIndex(): number | undefined;
    updateNativeTabIndex(): void;
}
export default Link;
