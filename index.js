

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });
require('typeface-roboto-condensed')
require('bootstrap/dist/css/bootstrap.css');
var React = require('react');
var core = require('@material-ui/core');
var reactBootstrap = require('react-bootstrap');
var ButtonGroup = require('@material-ui/core/ButtonGroup');
var Button = require('@material-ui/core/Button');
var AirplanemodeActiveIcon = require('@mui/icons-material/AirplanemodeActive');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ButtonGroup__default = /*#__PURE__*/_interopDefaultLegacy(ButtonGroup);
var Button__default = /*#__PURE__*/_interopDefaultLegacy(Button);
var AirplanemodeActiveIcon__default = /*#__PURE__*/_interopDefaultLegacy(AirplanemodeActiveIcon);

var AsideConfiguration = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Configuration" : _b, _c = _a.buttonOneTitle, buttonOneTitle = _c === void 0 ? 'One' : _c, _d = _a.buttonTwoTitle, buttonTwoTitle = _d === void 0 ? 'Two' : _d, _e = _a.buttonThreeTitle, buttonThreeTitle = _e === void 0 ? 'Three' : _e, _f = _a.tabOne, tabOne = _f === void 0 ? "I'm inside." : _f, _g = _a.tabTwo, tabTwo = _g === void 0 ? "" : _g, _h = _a.tabThree, tabThree = _h === void 0 ? "" : _h, clickToogleBar = _a.clickToogleBar, clickTab = _a.clickTab, _j = _a.isBarExtendedProp, isBarExtendedProp = _j === void 0 ? React.useState(true) : _j, _k = _a.tabs, tabs = _k === void 0 ? React__namespace.createElement(React__namespace.Fragment, null,
        " ",
        React__namespace.createElement(Button__default["default"], { id: 'buttonTabAside1', style: { width: '100%', whiteSpace: "nowrap", fontFamily: 'Roboto Condensed', fontSize: 13, color: "#ffffff", backgroundColor: '#4CB3BA' }, onClick: clickTab }, buttonOneTitle),
        React__namespace.createElement(Button__default["default"], { id: 'buttonTabAside2', style: { width: '100%', whiteSpace: "nowrap", fontFamily: 'Roboto Condensed', fontSize: 13 }, onClick: clickTab }, buttonTwoTitle),
        React__namespace.createElement(Button__default["default"], { id: 'buttonTabAside3', style: { width: '100%', fontFamily: 'Roboto Condensed', fontSize: 13, whiteSpace: 'nowrap' }, onClick: clickTab }, buttonThreeTitle)) : _k, _l = _a.closedBarContent, closedBarContent = _l === void 0 ? React__namespace.createElement(Button__default["default"], { style: { minWidth: 34, minHeight: 34, width: 34, height: 34, marginTop: 4 }, variant: "contained", color: "primary", href: "#contained-buttons" },
        React__namespace.createElement(AirplanemodeActiveIcon__default["default"], null)) : _l, _m = _a.openBarContent, openBarContent = _m === void 0 ? React__namespace.createElement(reactBootstrap.Nav, { style: { flexDirection: "column", display: "flex", paddingLeft: 0, listStyle: "none", position: "relative", height: 'calc(100% - 51px)', width: '100%' } },
        React__namespace.createElement(core.Typography, { style: { textAlign: "left", paddingLeft: 10, paddingTop: 5, paddingBottom: 5, fontWeight: 700 } }, title),
        React__namespace.createElement("div", null,
            React__namespace.createElement(ButtonGroup__default["default"], { style: { paddingLeft: 15, paddingRight: 15, width: "100%" }, color: "primary", "aria-label": "outlined primary button group" }, tabs)),
        React__namespace.createElement("div", { style: { overflow: 'auto', height: '100%' } },
            tabOne,
            tabTwo,
            tabThree)) : _m;
    var useStyles = core.makeStyles(function (theme) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return ({
            root: {
                "&.MuiButton-root": {
                    width: 16,
                },
                "&.MuiList-root": (_a = {
                        position: "absolute",
                        right: 0,
                        left: 0,
                        top: 120
                    },
                    _a[theme.breakpoints.up("sm")] = {
                        top: 130,
                    },
                    _a),
            },
            positionFixed: {
                position: "fixed",
            },
            HeightOneHundred: {
                height: "100%",
            },
            WidthOneHundred: {
                width: "100%",
            },
            PositionFixed: {
                position: "fixed",
            },
            PositionAbsolute: {
                position: "absolute",
            },
            MenuContainer: {
                zIndex: 2,
                right: 0,
                width: "75%",
                overflowY: "scroll",
            },
            Menu: {
                zIndex: 2,
                width: "75%",
                background: "#FCFCFC",
                position: "fixed",
                right: 0,
            },
            BottomZero: {
                bottom: 0,
            },
            buttonLink: {
                color: "#3f51b5",
                width: 170,
                textAlign: "left",
                height: 40,
                lineHeight: 3,
            },
            textUppercase: {
                textTransform: "uppercase",
            },
            pl3: {
                paddingLeft: 10,
            },
            floatRight: {
                float: "right",
            },
            BackgroundSideBar: {
                background: "#FCFCFC",
            },
            HeightController: (_b = {},
                _b[theme.breakpoints.between(0, 350)] = {
                    maxHeight: 510,
                    overflow: "scroll",
                },
                _b[theme.breakpoints.between(351, 400)] = {
                    maxHeight: 580,
                    overflow: "scroll",
                },
                _b[theme.breakpoints.between(401, 600)] = {
                    maxHeight: 650,
                    overflow: "scroll",
                },
                _b),
            PaperElevation: {
                boxShadow: "none",
                background: "unset",
                //color: mainText,
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
            },
            DisplayLgNone: (_c = {},
                _c[theme.breakpoints.up("lg")] = {
                    display: "none",
                },
                _c),
            borderExpandMenu: {
                borderStyle: "solid",
                borderColor: "#4949492a",
                borderBottom: 1,
            },
            py3: {
                paddingTop: 10,
                paddingBottom: 10,
            },
            mx4: {
                marginRight: 15,
                marginLeft: 15,
            },
            textLeft: {
                textAlign: "left",
            },
            mt4: {
                marginTop: 15,
            },
            ml4: {
                marginLeft: 15,
            },
            mr3: {
                marginRight: 10,
            },
            mtMd4: (_d = {},
                _d[theme.breakpoints.up("md")] = {
                    marginTop: 15,
                },
                _d),
            mrMd4: (_e = {},
                _e[theme.breakpoints.up("md")] = {
                    marginRight: 15,
                },
                _e),
            p3: {
                padding: 15,
            },
            px3: {
                paddingLeft: 15,
                paddingRight: 15
            },
            py2: {
                paddingTop: 5,
                paddingBottom: 5
            },
            p4: {
                padding: 20,
            },
            pb4: {
                paddingBottom: 15,
            },
            pl5: {
                paddingLeft: 20,
            },
            mb5: {
                marginBottom: 20,
            },
            ml5: {
                marginLeft: 20,
            },
            mr4: {
                marginRight: 15,
            },
            dBlock: {
                display: "block",
            },
            breakText: {
                wordBreak: "break-all",
            },
            instDropdown: {
                color: "#4CB3BA",
            },
            cursorPointer: {
                cursor: "pointer",
            },
            flexColumn: {
                flexDirection: "column",
            },
            institutionItem: {
                fontSize: 16,
                color: "#494949",
            },
            fontWeightBold: {
                fontWeight: 700,
            },
            noPaddingY: {
                paddingTop: 0,
                paddingBottom: 0,
            },
            m0: {
                margin: 0,
            },
            dLgNone: (_f = {},
                _f[theme.breakpoints.up("lg")] = {
                    display: "none",
                },
                _f),
            mr1: {
                marginRight: 2.5,
            },
            idDropdown: {
                lineHeight: 1.2,
                color: "#494949",
            },
            idDropdownParent: {
                "&:hover": {
                    color: "#4CB3BA",
                },
            },
            fitPhoto: {
                objectFit: "cover",
            },
            paddingVerticalNav: (_g = {},
                _g[theme.breakpoints.up("lg")] = {
                    paddingLeft: 60,
                },
                _g),
            centerNavbar: {
                textAlign: "center",
                zIndex: 104
            },
            verticalNav: {
                "&.navbar": {
                    paddingLeft: 0,
                    paddingRight: 0,
                    flexDirection: "column",
                    width: 60,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    zIndex: 100001,
                    background: "#fcfcfc",
                },
            },
            floatLeft: {
                float: "left",
            },
            dNone: {
                display: "none",
            },
            dLgFlex: (_h = {},
                _h[theme.breakpoints.up("lg")] = {
                    display: "flex",
                },
                _h),
            navContainer: {
                flexDirection: "column",
                display: "flex",
                paddingLeft: 0,
                listStyle: "none",
                position: "relative",
                "&.navbar-nav": {
                    flexDirection: "column",
                }
            },
            dFlex: {
                display: "flex",
            },
            navLinkSize: {
                padding: 10,
                boxSizing: "border-box",
                textDecoration: "none",
                color: "#3f51b5",
            },
            selectedNavTab: {
                borderLeft: 3,
                borderTop: 0,
                borderBottom: 0,
                borderRight: 0,
                borderStyle: "solid"
            },
            extendedMenu: {
                "&.navbar": {
                    padding: 0,
                    flexDirection: "column",
                    width: 310,
                    zIndex: 100001,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 8,
                    alignItems: "flex-start",
                    backgroundColor: "#ffffff",
                },
            },
            fontSizeLarge: {
                fontSize: 30,
            },
            sizeSmall: {
                fontSize: 18,
            },
            toggleIcon: {
                height: 36,
                width: 36,
                "&:hover": {
                    color: "#4CB3BA",
                },
            },
            centerMargin: {
                marginLeft: "auto",
                marginRight: "auto"
            },
            robotoCondensedButtons: {
                fontFamily: 'Roboto Condensed',
                fontSize: 13,
                whiteSpace: 'nowrap'
            },
            activeButton: {
                color: "#ffffff",
                backgroundColor: '#4CB3BA',
                "&:hover": {
                    backgroundColor: '#019ea9'
                }
            },
            heightAdjustment: {
                height: 'calc(100% - 51px)',
            },
            sidenavLeft: {
                whiteSpace: 'nowrap',
                borderRadius: '8px 0px 0px 8px',
                left: 0,
                zIndex: 1,
                overflowX: 'hidden',
                padding: '10px 12px',
                fontFamily: 'Open Sans',
                cursor: 'default',
            },
            toggleButton: {
                display: 'block',
                width: '100%',
                textAlign: 'right',
                color: "#4CB3BA",
                cursor: 'pointer',
                marginBottom: 8,
                "&:hover": {
                    color: "#4CB3BA",
                }
            },
            marginIcon: {
                margin: '0 -8px',
            },
            w100: {
                width: '100%'
            },
            textNowrap: {
                whiteSpace: "nowrap"
            },
            closedBarButton: {
                minWidth: 34,
                minHeight: 34,
                width: 34,
                height: 34,
                marginTop: 4,
            },
            h100: {
                height: '100%'
            },
            overflowAuto: {
                overflow: 'auto'
            }
        });
    });
    var styleClass = useStyles();
    var isBarExtended = React.useState({ isBarExtendedProp: isBarExtendedProp })[0];
    return (React__namespace.createElement(React__namespace.Fragment, null,
        React__namespace.createElement("div", { className: styleClass.centerNavbar + " \n          " + styleClass.floatRight + "\n          " + styleClass.HeightOneHundred },
            React__namespace.createElement(reactBootstrap.Navbar, { collapseOnSelect: true, expand: "lg", className: styleClass.dLgFlex + " " + styleClass.HeightOneHundred + "\n            " + (isBarExtended
                    ? "" + styleClass.extendedMenu
                    : "" + styleClass.verticalNav) + " " },
                React__namespace.createElement("div", null,
                    React__namespace.createElement(core.IconButton, { color: "primary", onClick: clickToogleBar, className: styleClass.sidenavLeft + " " + styleClass.toggleButton + " " + styleClass.toggleIcon + " " + styleClass.sizeSmall + " " + styleClass.mt4 + " " + (isBarExtended ? styleClass.mt4 + " " + styleClass.ml4 : "" + styleClass.centerMargin), size: "small", "aria-label": "f3m" }, isBarExtended ? (React__namespace.createElement(React__namespace.Fragment, null)) : (React__namespace.createElement(React__namespace.Fragment, null)))),
                isBarExtended ?
                    openBarContent
                    : React__namespace.createElement(React__namespace.Fragment, null, closedBarContent)))));
};

exports["default"] = AsideConfiguration;
//# sourceMappingURL=index.js.map
