/* @ds-bundle: {"format":3,"namespace":"SomatagDesignSystem_26c624","components":[{"name":"AccentLine","sourcePath":"components/core/AccentLine.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"StoneSwatch","sourcePath":"components/core/StoneSwatch.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"CueCard","sourcePath":"components/product/CueCard.jsx"},{"name":"SignalDot","sourcePath":"components/product/SignalDot.jsx"},{"name":"Badge","sourcePath":"components/surfaces/Badge.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/core/AccentLine.jsx":"29c94f9c086c","components/core/Button.jsx":"6ec201a14d9e","components/core/Eyebrow.jsx":"daafdfb25874","components/core/StoneSwatch.jsx":"7ff21e65054f","components/core/Tag.jsx":"01ac873d82f4","components/forms/Field.jsx":"b22d6076e276","components/forms/Input.jsx":"a83c972c84de","components/product/CueCard.jsx":"d3f58144eadb","components/product/SignalDot.jsx":"9a151f87791d","components/surfaces/Badge.jsx":"a13370b2033d","components/surfaces/Card.jsx":"a63ecbb29d02","ui_kits/marketing/App.jsx":"9e22f5edd828","ui_kits/marketing/Founder.jsx":"41b1ee606723","ui_kits/marketing/Hero.jsx":"f364436e1859","ui_kits/marketing/Loop.jsx":"41154ec5dfcc","ui_kits/marketing/Nav.jsx":"0bdf9e3fd120","ui_kits/marketing/Product.jsx":"4a3632b4dd9d","ui_kits/marketing/Waitlist.jsx":"c2c1047872ce"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SomatagDesignSystem_26c624 = window.SomatagDesignSystem_26c624 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/AccentLine.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AccentLine — the signature sage hairline. Horizontal or vertical,
 * solid sage or a faded gold rule for archival emphasis.
 */
function AccentLine({
  orientation = "horizontal",
  length = 40,
  tone = "sage",
  style,
  ...rest
}) {
  const isH = orientation === "horizontal";
  const bg = tone === "gold" ? "linear-gradient(90deg, transparent, var(--gold), transparent)" : "var(--sage)";
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "separator",
    style: {
      display: "block",
      background: bg,
      width: isH ? length : 1,
      height: isH ? 1 : length,
      flex: "none",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { AccentLine });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AccentLine.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — Somatag's primary action. Quiet, settled, never shouty.
 * Variants: solid (ink fill), outline (ink hairline), ghost (text only),
 * link (inline, ink → clay on hover). Labels are letter-spaced uppercase
 * by convention.
 */
function Button({
  children,
  variant = "solid",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  ...rest
}) {
  const pad = {
    sm: "8px 16px",
    md: "12px 22px",
    lg: "15px 30px"
  }[size];
  const fontSize = {
    sm: 12,
    md: 13,
    lg: 14
  }[size];
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: variant === "link" ? 0 : pad,
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize,
    letterSpacing: variant === "link" ? "0.01em" : "0.12em",
    textTransform: variant === "link" ? "none" : "uppercase",
    lineHeight: 1,
    borderRadius: variant === "link" ? 0 : "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--dur-base) var(--ease-quiet), color var(--dur-base) var(--ease-quiet), border-color var(--dur-base) var(--ease-quiet), box-shadow var(--dur-base) var(--ease-quiet)",
    border: "1px solid transparent",
    boxSizing: "border-box",
    textDecoration: "none",
    WebkitFontSmoothing: "antialiased"
  };
  const variants = {
    solid: {
      background: "var(--btn-fill)",
      color: "var(--btn-fill-text)"
    },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      borderColor: "var(--ink)"
    },
    ghost: {
      background: "transparent",
      color: "var(--ink)"
    },
    link: {
      background: "transparent",
      color: "var(--ink)",
      borderBottom: "1px solid var(--sage)",
      paddingBottom: 2,
      borderRadius: 0
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    solid: {
      background: "var(--btn-fill-hover)"
    },
    outline: {
      background: "var(--paper-sunk)"
    },
    ghost: {
      background: "var(--paper-sunk)"
    },
    link: {
      color: "var(--clay)",
      borderColor: "var(--clay)"
    }
  }[variant] : null;
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle
    },
    disabled: as === "button" ? disabled : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — a small uppercase, widely-tracked overline. Often paired
 * with an AccentLine above a headline. Optional leading sage tick.
 */
function Eyebrow({
  children,
  tick = false,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "var(--fs-micro)",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: color || "var(--sage-deep)",
      ...style
    }
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 1,
      background: "var(--sage)",
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/StoneSwatch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STONES = {
  pearl: {
    fill: "#F3EFE6",
    label: "Pearl"
  },
  cream: {
    fill: "#E4DAC4",
    label: "Cream"
  },
  jade: {
    fill: "#8A9472",
    label: "Jade"
  },
  tigerseye: {
    fill: "#6E5238",
    label: "Tiger's-eye"
  }
};

/**
 * StoneSwatch — one of the four interchangeable pendant faces, as a small
 * rounded square set in a thin gold bezel. Optionally selectable.
 */
function StoneSwatch({
  stone = "pearl",
  size = 28,
  selected = false,
  onSelect,
  style,
  ...rest
}) {
  const s = STONES[stone] || STONES.pearl;
  const interactive = typeof onSelect === "function";
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: interactive ? () => onSelect(stone) : undefined,
    "aria-pressed": selected,
    title: s.label,
    style: {
      width: size + 6,
      height: size + 6,
      padding: 3,
      borderRadius: 7,
      background: "linear-gradient(150deg,#C2A878,#A8854E)",
      border: selected ? "1px solid var(--ink)" : "1px solid transparent",
      boxShadow: selected ? "var(--shadow-sm)" : "none",
      cursor: interactive ? "pointer" : "default",
      transition: "box-shadow var(--dur-base) var(--ease-quiet), border-color var(--dur-base) var(--ease-quiet)",
      display: "inline-flex",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: "100%",
      height: "100%",
      borderRadius: 4,
      background: s.fill,
      boxShadow: "inset 0 1px 3px rgba(37,35,33,0.18)"
    }
  }));
}
Object.assign(__ds_scope, { StoneSwatch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StoneSwatch.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — the pendant's chamfered-corner silhouette as a small container:
 * a logo bug, an avatar frame, or a status badge. Fill ink / gold / sage,
 * or an outline.
 */
function Tag({
  children,
  width = 40,
  height = 56,
  tone = "ink",
  outline = false,
  style,
  ...rest
}) {
  const fills = {
    ink: "var(--ink)",
    gold: "linear-gradient(150deg,#C2A878,#A8854E)",
    sage: "var(--sage)",
    paper: "var(--surface-card)"
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width,
      height,
      clipPath: "polygon(0 16%, 28% 0, 100% 0, 100% 100%, 0 100%)",
      background: outline ? "var(--surface-card)" : fills[tone],
      border: outline ? "1px solid var(--ink)" : "none",
      color: tone === "paper" || outline ? "var(--ink)" : "var(--paper)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Field — label + control + helper/error text, vertically stacked. Labels
 * are small, tracked uppercase; error text is clay.
 */
function Field({
  label,
  helper,
  error,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 7,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink-soft)"
    }
  }, label), children, (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.02em",
      color: error ? "var(--clay-deep)" : "var(--ink-faint)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — a sunk paper well with a hairline and an inset shadow. Sage
 * focus ring. Pairs with Field for label + helper text.
 */
function Input({
  invalid = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: "100%",
      boxSizing: "border-box",
      padding: "12px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--ink)",
      background: "var(--paper-raised)",
      border: `1px solid ${invalid ? "var(--clay)" : focus ? "var(--sage-deep)" : "var(--paper-edge)"}`,
      borderRadius: "var(--radius-md)",
      boxShadow: focus ? "0 0 0 3px rgba(122,123,94,0.18), var(--shadow-inset)" : "var(--shadow-inset)",
      outline: "none",
      transition: "border-color var(--dur-base) var(--ease-quiet), box-shadow var(--dur-base) var(--ease-quiet)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/product/CueCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STEPS = {
  detect: {
    n: "01",
    label: "Detect",
    color: "var(--sage)"
  },
  intervene: {
    n: "02",
    label: "Intervene",
    color: "var(--clay)"
  },
  measure: {
    n: "03",
    label: "Measure",
    color: "var(--gold)"
  }
};

/**
 * CueCard — a single step of the Detect → Intervene → Measure loop. A
 * numbered card with a colored step marker, serif title, and quiet body.
 */
function CueCard({
  step = "detect",
  title,
  children,
  style,
  ...rest
}) {
  const s = STEPS[step] || STEPS.detect;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--paper-edge)",
      borderRadius: "var(--radius-lg)",
      padding: 26,
      boxShadow: "var(--shadow-sm)",
      boxSizing: "border-box",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontVariantNumeric: "tabular-nums",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: "0.1em",
      color: "var(--ink-faint)"
    }
  }, s.n), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: s.color,
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: s.color
    }
  }, s.label)), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--fs-h3)",
      lineHeight: 1.2,
      margin: "0 0 8px",
      color: "var(--ink)"
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--ink-soft)",
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { CueCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/CueCard.jsx", error: String((e && e.message) || e) }); }

// components/product/SignalDot.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const STATES = {
  steady: {
    color: "var(--sage)",
    label: "Steady"
  },
  rising: {
    color: "var(--clay)",
    label: "Rising"
  },
  peak: {
    color: "var(--clay-deep)",
    label: "Peak"
  }
};

/**
 * SignalDot — a small living dot that shows the felt state of a signal.
 * A slow breath ring radiates outward; speed nudges up with intensity.
 * Honors reduced-motion (ring held still).
 */
function SignalDot({
  state = "steady",
  size = 12,
  breathing = true,
  style,
  ...rest
}) {
  const s = STATES[state] || STATES.steady;
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || document.getElementById("somatag-signaldot-kf")) return;
    const el = document.createElement("style");
    el.id = "somatag-signaldot-kf";
    el.textContent = "@keyframes somatag-breath{0%{transform:scale(1);opacity:.5}70%{transform:scale(2.6);opacity:0}100%{transform:scale(2.6);opacity:0}}" + "@media (prefers-reduced-motion: reduce){.somatag-breath-ring{animation:none!important;opacity:.25!important}}";
    document.head.appendChild(el);
  }, []);
  const dur = {
    steady: "4.2s",
    rising: "2.8s",
    peak: "1.9s"
  }[state] || "4.2s";
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      position: "relative",
      display: "inline-flex",
      width: size,
      height: size,
      ...style
    },
    title: s.label
  }, rest), breathing && /*#__PURE__*/React.createElement("span", {
    className: "somatag-breath-ring",
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: s.color,
      animation: `somatag-breath ${dur} var(--ease-quiet) infinite`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: size,
      height: size,
      borderRadius: "50%",
      background: s.color
    }
  }));
}
Object.assign(__ds_scope, { SignalDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/SignalDot.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — a small status/label chip. Soft tones drawn from the palette;
 * "signal" tones map to the steady/rising/peak states. Optional leading dot.
 */
function Badge({
  children,
  tone = "neutral",
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      bg: "var(--paper-sunk)",
      fg: "var(--ink-soft)",
      dotc: "var(--stone)"
    },
    sage: {
      bg: "var(--sage-wash)",
      fg: "var(--sage-deep)",
      dotc: "var(--sage)"
    },
    clay: {
      bg: "var(--clay-wash)",
      fg: "var(--clay-deep)",
      dotc: "var(--clay)"
    },
    ink: {
      bg: "var(--ink)",
      fg: "var(--paper)",
      dotc: "var(--gold-soft)"
    },
    steady: {
      bg: "var(--sage-wash)",
      fg: "var(--sage-deep)",
      dotc: "var(--sage)"
    },
    rising: {
      bg: "var(--clay-wash)",
      fg: "var(--clay-deep)",
      dotc: "var(--clay)"
    },
    peak: {
      bg: "#E8D8CC",
      fg: "var(--clay-deep)",
      dotc: "var(--clay-deep)"
    }
  };
  const t = tones[tone] || tones.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      padding: "4px 11px",
      borderRadius: "var(--radius-pill)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      lineHeight: 1,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dotc,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Badge.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — a quiet surface that rests on the paper. Hairline border, soft
 * radius, low warm shadow. Optional eyebrow/title header and a top accent
 * line. Interactive cards lift one shadow step on hover (no scale).
 */
function Card({
  children,
  eyebrow,
  title,
  accent = false,
  padding = 28,
  interactive = false,
  tone = "card",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const bg = tone === "raised" ? "var(--paper-raised)" : "var(--surface-card)";
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: interactive ? () => setHover(true) : undefined,
    onMouseLeave: interactive ? () => setHover(false) : undefined,
    style: {
      background: bg,
      border: "1px solid var(--paper-edge)",
      borderRadius: "var(--radius-lg)",
      padding,
      boxShadow: hover ? "var(--shadow-md)" : "var(--shadow-sm)",
      transition: "box-shadow var(--dur-base) var(--ease-quiet)",
      cursor: interactive ? "pointer" : "default",
      boxSizing: "border-box",
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      width: 36,
      height: 1,
      background: "var(--sage)",
      marginBottom: 16
    }
  }), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "var(--fs-micro)",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "var(--sage-deep)",
      marginBottom: 10
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: "var(--fs-h3)",
      lineHeight: 1.2,
      margin: "0 0 10px",
      color: "var(--ink)"
    }
  }, title), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/App.jsx
try { (() => {
// App — composes the Somatag marketing surface into one scroll.
function App() {
  const waitRef = React.useRef(null);
  const toWaitlist = () => {
    if (waitRef.current) {
      const y = waitRef.current.getBoundingClientRect().top + window.scrollY - 8;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--paper)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    onWaitlist: toWaitlist
  }), /*#__PURE__*/React.createElement(Hero, {
    onWaitlist: toWaitlist
  }), /*#__PURE__*/React.createElement(Loop, null), /*#__PURE__*/React.createElement(Product, null), /*#__PURE__*/React.createElement(Founder, null), /*#__PURE__*/React.createElement(Waitlist, {
    anchorRef: waitRef
  }));
}
window.App = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Founder.jsx
try { (() => {
// Founder — "The Practice". Christine headshot + a quiet, lab-rooted note.
const DS = window.SomatagDesignSystem_26c624;
function Founder() {
  const {
    Eyebrow
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "the-practice",
    style: {
      background: "var(--paper-raised)",
      borderTop: "1px solid var(--paper-edge)",
      borderBottom: "1px solid var(--paper-edge)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "84px 40px",
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      aspectRatio: "4 / 5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/christine-headshot.png",
    alt: "Christine, founder, at her botanical-archive desk",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tick: true
  }, "The practice"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 32,
      lineHeight: 1.28,
      color: "var(--ink)",
      margin: "22px 0 0",
      textWrap: "pretty"
    }
  }, "\u201CWe didn't want another thing to check. We wanted something that checks on you \u2014 and then steps back.\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      lineHeight: 1.7,
      color: "var(--ink-soft)",
      margin: "24px 0 0",
      maxWidth: "52ch"
    }
  }, "Somatag began as a small design-research practice: notebooks, calipers, heart-rate plots, pressed botanicals. We study the felt sense of overwhelm \u2014 and design objects that soothe rather than stimulate."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--ink-faint)"
    }
  }, "Christine \u2014 Founder & lead researcher"))));
}
window.Founder = Founder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Founder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
// Hero — editorial split. Serif headline on paper, soft portrait at right.
const DS = window.SomatagDesignSystem_26c624;
function Hero({
  onWaitlist
}) {
  const {
    Button,
    Eyebrow
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "84px 40px 72px",
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tick: true
  }, "Detect \u2192 Intervene \u2192 Measure"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 66,
      lineHeight: 1.04,
      letterSpacing: "-0.01em",
      margin: "22px 0 0",
      color: "var(--ink)",
      textWrap: "balance"
    }
  }, "Your body spoke first."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 19,
      lineHeight: 1.7,
      color: "var(--ink-soft)",
      margin: "24px 0 0",
      maxWidth: "44ch"
    }
  }, "Somatag is a quiet pendant that listens for the moment before the moment. It notices a rising cue \u2014 and offers a way back to baseline. No screen. No score. No buzz that shames."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginTop: 34,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onWaitlist
  }, "Request an invitation"), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    as: "a",
    href: "#the-loop"
  }, "See how the loop works"))), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      aspectRatio: "4 / 5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/vertical-touching-neck.png",
    alt: "A woman's hand resting at her neck, a quiet moment of noticing",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      position: "absolute",
      bottom: 18,
      left: 18,
      background: "rgba(244,240,232,0.9)",
      backdropFilter: "blur(4px)",
      padding: "8px 13px",
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: "0.08em",
      color: "var(--ink-soft)"
    }
  }, "Field note \u2014 the hand knows before the mind")));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Loop.jsx
try { (() => {
// Loop — the Detect → Intervene → Measure spine, on an inverse ink panel.
const DS = window.SomatagDesignSystem_26c624;
function Loop() {
  const {
    CueCard,
    Eyebrow
  } = DS;
  return /*#__PURE__*/React.createElement("section", {
    id: "the-loop",
    style: {
      background: "var(--ink)",
      padding: "88px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "0 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "60ch"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tick: true,
    color: "var(--gold-soft)"
  }, "The loop"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 42,
      lineHeight: 1.12,
      margin: "20px 0 0",
      color: "var(--paper)",
      textWrap: "balance"
    }
  }, "One small return, gently measured."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      lineHeight: 1.7,
      color: "rgba(244,240,232,0.72)",
      margin: "18px 0 0",
      maxWidth: "52ch"
    }
  }, "The whole product is a single, patient loop. It runs below noticing \u2014 until you need it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(CueCard, {
    step: "detect",
    title: "Your body spoke first."
  }, "A cue gathers beneath awareness \u2014 heart rhythm, the skin's quiet weather. Somatag simply listens."), /*#__PURE__*/React.createElement(CueCard, {
    step: "intervene",
    title: "A way back."
  }, "One breath. A familiar scent at the stone. A felt nudge \u2014 never a buzz that shames, never a number."), /*#__PURE__*/React.createElement(CueCard, {
    step: "measure",
    title: "Did the return happen?"
  }, "Not a score. A gentle record of whether you came home to baseline \u2014 kept for you, never sold."))));
}
window.Loop = Loop;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Loop.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Nav.jsx
try { (() => {
// Nav — quiet top bar on paper, hairline bottom rule. No heavy bar.
const DS = window.SomatagDesignSystem_26c624;
function Nav({
  onWaitlist
}) {
  const {
    Button,
    Tag
  } = DS;
  const links = ["The Loop", "The Object", "The Practice"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(244,240,232,0.86)",
      backdropFilter: "saturate(120%) blur(8px)",
      WebkitBackdropFilter: "saturate(120%) blur(8px)",
      borderBottom: "1px solid var(--paper-edge)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "16px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold",
    width: 20,
    height: 28
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      letterSpacing: "0.01em"
    }
  }, "Somatag")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 34
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + l.toLowerCase().replace(/\s/g, "-"),
    className: "soma-navlink",
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 12.5,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ink)",
      textDecoration: "none"
    }
  }, l)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onWaitlist
  }, "Request access"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Product.jsx
try { (() => {
// Product — "The Object". Pendant image + interchangeable stone selector.
const DS = window.SomatagDesignSystem_26c624;
const STONE_NOTES = {
  pearl: "Mother-of-pearl — for clear mornings and a clean slate.",
  cream: "Warm cream — the everyday face, quiet and unhurried.",
  jade: "Jade — cool and grounding, worn on the harder days.",
  tigerseye: "Tiger's-eye — depth and steadiness when the load is heavy."
};
function Product() {
  const {
    Eyebrow,
    StoneSwatch,
    AccentLine,
    Badge
  } = DS;
  const [stone, setStone] = React.useState("cream");
  return /*#__PURE__*/React.createElement("section", {
    id: "the-object",
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "92px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      borderRadius: "var(--radius-xl)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
      aspectRatio: "4 / 5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img/somatag-interchangeable.png",
    alt: "The Somatag pendant with its interchangeable stone faces on linen",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    tick: true
  }, "The object"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 42,
      lineHeight: 1.1,
      margin: "20px 0 0",
      color: "var(--ink)"
    }
  }, "A sensing object,", /*#__PURE__*/React.createElement("br", null), "worn as fine jewelry."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      lineHeight: 1.7,
      color: "var(--ink-soft)",
      margin: "18px 0 0",
      maxWidth: "46ch"
    }
  }, "Brushed gold. A chamfered tag. One swappable stone face \u2014 because a sensing object should still feel like yours. Change the face the way you change your mind."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "30px 0 14px"
    }
  }, /*#__PURE__*/React.createElement(AccentLine, {
    length: 44
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, ["pearl", "cream", "jade", "tigerseye"].map(s => /*#__PURE__*/React.createElement(StoneSwatch, {
    key: s,
    stone: s,
    size: 30,
    selected: stone === s,
    onSelect: setStone
  })), /*#__PURE__*/React.createElement(Badge, {
    tone: "sage",
    style: {
      marginLeft: 4
    }
  }, "4 faces")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--ink-faint)",
      margin: "16px 0 0",
      minHeight: 22
    }
  }, STONE_NOTES[stone]))));
}
window.Product = Product;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Waitlist.jsx
try { (() => {
// Waitlist — request-access form + quiet footer. Interactive (fake submit).
const DS = window.SomatagDesignSystem_26c624;
function Waitlist({
  anchorRef
}) {
  const {
    Eyebrow,
    Field,
    Input,
    Button,
    AccentLine,
    Tag
  } = DS;
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  const valid = /\S+@\S+\.\S+/.test(email);
  return /*#__PURE__*/React.createElement("section", {
    ref: anchorRef,
    id: "request",
    style: {
      background: "var(--ink)",
      color: "var(--paper)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      padding: "92px 40px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "60ch"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tick: true,
    color: "var(--gold-soft)"
  }, "By invitation"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 400,
      fontSize: 46,
      lineHeight: 1.08,
      margin: "20px 0 0",
      color: "var(--paper)",
      textWrap: "balance"
    }
  }, "Come home to baseline."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      lineHeight: 1.7,
      color: "rgba(244,240,232,0.72)",
      margin: "18px 0 0",
      maxWidth: "46ch"
    }
  }, "We open the practice slowly, in small cohorts. Leave a note and we'll write when a place is ready.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      maxWidth: 460
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold",
    width: 22,
    height: 30
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      margin: 0,
      color: "var(--paper)"
    }
  }, "Noted. We'll write soon.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (valid) setSent(true);
    },
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    htmlFor: "wl",
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "wl",
    type: "email",
    placeholder: "you@quietmail.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    style: {
      background: "rgba(244,240,232,0.06)",
      color: "var(--paper)",
      borderColor: "rgba(244,240,232,0.18)"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    disabled: !valid
  }, "Request"))), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "64px 0 0"
    }
  }, /*#__PURE__*/React.createElement(AccentLine, {
    length: "100%",
    tone: "gold",
    style: {
      opacity: 0.5
    }
  })), /*#__PURE__*/React.createElement("footer", {
    style: {
      marginTop: 26,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    tone: "gold",
    width: 18,
    height: 26
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22
    }
  }, "Somatag")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "rgba(244,240,232,0.5)"
    }
  }, "Detect \u2192 Intervene \u2192 Measure \xA0\xB7\xA0 A practice, not a platform"))));
}
window.Waitlist = Waitlist;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Waitlist.jsx", error: String((e && e.message) || e) }); }

__ds_ns.AccentLine = __ds_scope.AccentLine;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StoneSwatch = __ds_scope.StoneSwatch;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.CueCard = __ds_scope.CueCard;

__ds_ns.SignalDot = __ds_scope.SignalDot;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

})();
