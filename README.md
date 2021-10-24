<!-- <p align="center">
  <a href="https://mpds.f3m.pt/" rel="noopener" target="_blank"><img width="350" src="https://i.imgur.com/OANOfLI.png" alt="MPDS logo"></a></p>
</p> -->

<h1 align="center">Aside-configuration</h1>

<div align="center">

[React](https://reactjs.org/) component for faster and simpler web development.

<!--
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/mui-org/material-ui/blob/master/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@material-ui/core/latest.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm next package](https://img.shields.io/npm/v/@material-ui/core/next.svg)](https://www.npmjs.com/package/@material-ui/core)
[![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)](https://www.npmjs.com/package/@material-ui/core)
[![CircleCI](https://img.shields.io/circleci/project/github/mui-org/material-ui/next.svg)](https://app.circleci.com/pipelines/github/mui-org/material-ui?branch=next)
[![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/next.svg)](https://codecov.io/gh/mui-org/material-ui/branch/next)
[![Follow on Twitter](https://img.shields.io/twitter/follow/MaterialUI.svg?label=follow+Material-UI)](https://twitter.com/MaterialUI)
[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=mui-org/material-ui)](https://dependabot.com)
[![Average time to resolve an issue](https://isitmaintained.com/badge/resolution/mui-org/material-ui.svg)](https://isitmaintained.com/project/mui-org/material-ui 'Average time to resolve an issue')
[![Crowdin](https://badges.crowdin.net/material-ui-docs/localized.svg)](https://translate.material-ui.com/project/material-ui-docs)
[![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/material-ui)](https://opencollective.com/material-ui) -->

</div>

## Installation

Aside-configuration is available as an [npm package](npm i mpds-side-menu).

```sh
// with npm
npm i aside-configuration

```

## Usage

Here is a quick example to get you started, **it's all you need**:

```tsx
import * as React from "react";
import MpDSSideMenu from "mpds-side-menu";

function App() {
  return <AsideConfiguration linkSelectedName="Link2"></AsideConfiguration>;
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

<h4>Props</h4>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span>title</span>
      </td>
      <td>
        <div>
          <span>Title at the top of the panel.</span>
        </div>
        <div>
          <div>
            <span>string</span>
          </div>
        </div>
      </td>
      <td>
        <span>"Configuration" 
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>tabOne</span>
      </td>
      <td>
        <div>
          <span>Content of the first tab.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>"I'm empty inside.",
        </span>
      </td>
    </tr>
    <tr>
      <td>
        <span>tabTwo</span>
      </td>
      <td>
        <div>
          <span>Content of the second tab.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>"I'm empty too."</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>tabThree</span>
      </td>
      <td>
        <div>
          <span>Content of the third tab.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span>"Another one."</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>clickToogleBar</span>
      </td>
      <td>
        <div>
          <span>Handle click to toogle bar.</span>
        </div>
        <div>
          <span>() => void<any></span>
        </div>
      </td>
      <td>
        <span>-</span>
      </td>
    </tr>
    <tr>
      <td>
        <span>tabs</span>
      </td>
      <td>
        <div>
          <span>Insert tabs element.</span>
        </div>
        <div>
          <div>
            <span>React.ReactNode</span>
          </div>
        </div>
      </td>
      <td>
        <span><> <Button id={'buttonTabAside1'} className={`${styleClass.w100} ${styleClass.textNowrap} ${styleClass.robotoCondensedButtons} ${styleClass.activeButton}`} onClick={clickTab}>{buttonOneTitle}</Button>
      <Button id={'buttonTabAside2'} className={`${styleClass.w100} ${styleClass.textNowrap} ${styleClass.robotoCondensedButtons}`} onClick={clickTab}>{buttonTwoTitle}</Button>
      <Button id={'buttonTabAside3'} className={`${styleClass.w100} ${styleClass.textNowrap} ${styleClass.robotoCondensedButtons}`} onClick={clickTab}>{buttonThreeTitle}</Button>
    </>
        </span>
      </td>
  </tr>
  <tr>
    <td>
      <span>closedBarContent</span>
    </td>
    <td>
      <div>
        <span>Insert elements to the closed bar element.</span>
      </div>
      <div>
        <div>
          <span>React.ReactNode</span>
        </div>
      </div>
    </td>
    <td>
      <span>
        <Button className={styleClass.closedBarButton}  variant="contained" color="primary" href="#contained-buttons">
            <AirplanemodeActiveIcon />
        </Button>
      </span>
    </td>
  </tr>
  <tr>
    <td>
      <span>openBarContent</span>
    </td>
    <td>
      <div>
        <span>Content inside of the bar.</span>
      </div>
      <div>
        <div>
          <span>React.ReactNode</span>
        </div>
      </div>
    </td>
    <td>
      <span>
        <Nav
  className={`${styleClass.navContainer} ${styleClass.heightAdjustment} ${styleClass.WidthOneHundred}`}
>
  <Typography className={`${styleClass.textLeft} ${styleClass.pl3} ${styleClass.py2} ${styleClass.fontWeightBold}`}>
    {title}
  </Typography>
  
  <div>
    <ButtonGroup className={`${styleClass.px3} ${styleClass.w100}`} color="primary" aria-label="outlined primary button group">
      {tabs}
    </ButtonGroup>
  </div>

  <div className={`${styleClass.overflowAuto} ${styleClass.h100}`}>
    {tabOne}
    {/* {tabTwo}
    {tabThree} */}
  </div>
</Nav>
      </span>
    </td>
  </tr>
  </tbody>
</table>
<br>
Yes, it's really all you need to get started! Try it in:
[CodeSandbox](https://codesandbox.io/)
<br>

## License

No License. "(...) nobody else can copy, distribute, or modify your work without being at risk of take-downs, shake-downs, or litigation."
