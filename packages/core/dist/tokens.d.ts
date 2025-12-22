/**
 * @inclusive-design/core - Design Tokens (JavaScript)
 *
 * Import these tokens for Tailwind config extension or runtime access
 * Usage: const tokens = require('@inclusive-design/core/tokens')
 */
export declare const colors: {
    background: string;
    foreground: string;
    card: {
        DEFAULT: string;
        foreground: string;
    };
    popover: {
        DEFAULT: string;
        foreground: string;
    };
    primary: {
        DEFAULT: string;
        foreground: string;
    };
    secondary: {
        DEFAULT: string;
        foreground: string;
    };
    muted: {
        DEFAULT: string;
        foreground: string;
    };
    accent: {
        DEFAULT: string;
        foreground: string;
    };
    destructive: {
        DEFAULT: string;
        foreground: string;
    };
    border: string;
    input: string;
    ring: string;
    chart: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    fuchsia: {
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
        950: string;
    };
};
export declare const borderRadius: {
    lg: string;
    md: string;
    sm: string;
    xl: string;
    "2xl": string;
    full: string;
};
export declare const fontFamily: {
    sans: string[];
    mono: string[];
};
export declare const fontSize: {
    xs: (string | {
        lineHeight: string;
    })[];
    sm: (string | {
        lineHeight: string;
    })[];
    base: (string | {
        lineHeight: string;
    })[];
    lg: (string | {
        lineHeight: string;
    })[];
    xl: (string | {
        lineHeight: string;
    })[];
    "2xl": (string | {
        lineHeight: string;
    })[];
    "3xl": (string | {
        lineHeight: string;
    })[];
    "4xl": (string | {
        lineHeight: string;
    })[];
    "5xl": (string | {
        lineHeight: string;
    })[];
};
export declare const animation: {
    "accordion-down": string;
    "accordion-up": string;
    "fade-in": string;
    "fade-out": string;
    "slide-in-from-top": string;
    "slide-in-from-bottom": string;
    "slide-in-from-left": string;
    "slide-in-from-right": string;
};
export declare const keyframes: {
    "accordion-down": {
        from: {
            height: string;
        };
        to: {
            height: string;
        };
    };
    "accordion-up": {
        from: {
            height: string;
        };
        to: {
            height: string;
        };
    };
    "fade-in": {
        from: {
            opacity: string;
        };
        to: {
            opacity: string;
        };
    };
    "fade-out": {
        from: {
            opacity: string;
        };
        to: {
            opacity: string;
        };
    };
    "slide-in-from-top": {
        from: {
            transform: string;
        };
        to: {
            transform: string;
        };
    };
    "slide-in-from-bottom": {
        from: {
            transform: string;
        };
        to: {
            transform: string;
        };
    };
    "slide-in-from-left": {
        from: {
            transform: string;
        };
        to: {
            transform: string;
        };
    };
    "slide-in-from-right": {
        from: {
            transform: string;
        };
        to: {
            transform: string;
        };
    };
};
declare const _default: {
    colors: {
        background: string;
        foreground: string;
        card: {
            DEFAULT: string;
            foreground: string;
        };
        popover: {
            DEFAULT: string;
            foreground: string;
        };
        primary: {
            DEFAULT: string;
            foreground: string;
        };
        secondary: {
            DEFAULT: string;
            foreground: string;
        };
        muted: {
            DEFAULT: string;
            foreground: string;
        };
        accent: {
            DEFAULT: string;
            foreground: string;
        };
        destructive: {
            DEFAULT: string;
            foreground: string;
        };
        border: string;
        input: string;
        ring: string;
        chart: {
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
        fuchsia: {
            50: string;
            100: string;
            200: string;
            300: string;
            400: string;
            500: string;
            600: string;
            700: string;
            800: string;
            900: string;
            950: string;
        };
    };
    borderRadius: {
        lg: string;
        md: string;
        sm: string;
        xl: string;
        "2xl": string;
        full: string;
    };
    fontFamily: {
        sans: string[];
        mono: string[];
    };
    fontSize: {
        xs: (string | {
            lineHeight: string;
        })[];
        sm: (string | {
            lineHeight: string;
        })[];
        base: (string | {
            lineHeight: string;
        })[];
        lg: (string | {
            lineHeight: string;
        })[];
        xl: (string | {
            lineHeight: string;
        })[];
        "2xl": (string | {
            lineHeight: string;
        })[];
        "3xl": (string | {
            lineHeight: string;
        })[];
        "4xl": (string | {
            lineHeight: string;
        })[];
        "5xl": (string | {
            lineHeight: string;
        })[];
    };
    animation: {
        "accordion-down": string;
        "accordion-up": string;
        "fade-in": string;
        "fade-out": string;
        "slide-in-from-top": string;
        "slide-in-from-bottom": string;
        "slide-in-from-left": string;
        "slide-in-from-right": string;
    };
    keyframes: {
        "accordion-down": {
            from: {
                height: string;
            };
            to: {
                height: string;
            };
        };
        "accordion-up": {
            from: {
                height: string;
            };
            to: {
                height: string;
            };
        };
        "fade-in": {
            from: {
                opacity: string;
            };
            to: {
                opacity: string;
            };
        };
        "fade-out": {
            from: {
                opacity: string;
            };
            to: {
                opacity: string;
            };
        };
        "slide-in-from-top": {
            from: {
                transform: string;
            };
            to: {
                transform: string;
            };
        };
        "slide-in-from-bottom": {
            from: {
                transform: string;
            };
            to: {
                transform: string;
            };
        };
        "slide-in-from-left": {
            from: {
                transform: string;
            };
            to: {
                transform: string;
            };
        };
        "slide-in-from-right": {
            from: {
                transform: string;
            };
            to: {
                transform: string;
            };
        };
    };
};
export default _default;
//# sourceMappingURL=tokens.d.ts.map