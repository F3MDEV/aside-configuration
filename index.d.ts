import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import { FunctionComponent } from "react";
interface AsideConfigurationProps {
    /**
     * Title at the top of the panel.
     */
    title?: string;
    /**
     * Content of the first tab.
     */
    tabOne?: React.ReactNode;
    /**
     * Content of the second tab.
     */
    tabTwo?: React.ReactNode;
    /**
     * Content of the third tab.
     */
    tabThree?: React.ReactNode;
    /**
     * handle click of each tab button.
     */
    clickTab?: () => void;
    /**
     * Title of the first button.
     */
    buttonOneTitle?: string;
    /**
     * Title of the second button.
     */
    buttonTwoTitle?: string;
    /**
     * Title of the third button.
     */
    buttonThreeTitle?: string;
    /**
     * Insert elements to the closed bar element.
     */
    closedBarContent?: React.ReactNode;
    /**
     * Handle click to toogle bar.
     */
    clickToogleBar?: () => void;
    /**
     * Insert tabs element.
     */
    tabs?: React.ReactNode;
    /**
     * Content inside of the bar.
     */
    openBarContent?: React.ReactNode;
    /**
     * Define the value of the prop to extend or close the bar.
     */
    isBarExtendedProp?: boolean;
}
declare const AsideConfiguration: FunctionComponent<AsideConfigurationProps>;
export default AsideConfiguration;
