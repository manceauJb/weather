import { map } from "lodash";
import React from "react";
import styled from "styled-components";

interface TypographyProps {
    className?: string;
    component?: string;
    align?: "inherit" | "left" | "center" | "right" | "justify";
    variant?: "h1" | "subtitle1" | "body1" | "body2" | "caption";
    children?: React.ReactNode;
}

const variantMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    subtitle1: "h6",
    subtitle2: "h6",
    body1: "p",
    body2: "p",
    caption: "span",
};

const root = "Typography";
const classes = {
    // Variants
    h1: `${root}-h1`,
    h2: `${root}-h2`,
    h3: `${root}-h3`,
    h4: `${root}-h4`,
    h5: `${root}-h5`,
    h6: `${root}-h6`,
    subtitle1: `${root}-subtitle1`,
    subtitle2: `${root}-subtitle2`,
    body1: `${root}-body1`,
    body2: `${root}-body2`,
    inherit: `${root}-inherit`,
    caption: `${root}-caption`,

    // Align
    alignCenter: `${root}-align-center`,
    alignLeft: `${root}-align-left`,
    alignRight: `${root}-align-right`,
    alignJustify: `${root}-align-justify`,
};
const useUtilityClasses = ({
    align,
    variant,
}: {
    align: string;
    variant: string;
}) => {
    const slots: string[] = ["root", variant, `align-${align}`];
    return map(slots, (slot) => `${root}-${slot}`).join(" ");
};

type KnownTags = keyof JSX.IntrinsicElements

const TypographyRoot = styled("span")({
    [`&.${classes.h1}`]: {
        lineHeight: 1.15,
        fontSize: "4rem",
    },
    [`&.${classes.h2}`]: {
        lineHeight: 1.2,
        fontSize: "3.75rem",
    },
    [`&.${classes.h3}`]: {
        fontSize: "2.25rem",
        fontWeight: 400,
        letterSpacing: 0.2,
        lineHeight: 1.23,
    },
    [`&.${classes.h4}`]: {
        fontSize: "1.75rem",
        fontWeight: 400,
        letterSpacing: 0.2,
        lineHeight: 1.5,
    },
    [`&.${classes.h5}`]: {
        ontSize: "1.5rem",
        fontWeight: 400,
        letterSpacing: 0.1,
        lineHeight: 1.5,
    },
    [`&.${classes.h6}`]: {
        fontSize: "1.25rem",
        fontWeight: 500,
        lineHeight: 1.5,
    },
    [`&.${classes.subtitle1}`]: {
        fontSize: "1.125rem",
        fontWeight: 500,
        letterSpacing: 0,
        lineHeight: 1.33,
    },
    [`&.${classes.subtitle2}`]: {
        fontSize: "0.875rem",
        fontWeight: 500,
        lineHeight: 1.57,
    },
    [`&.${classes.body1}`]: {
        fontSize: "1rem",
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 1.5,
    },
    [`&.${classes.body2}`]: {
        fontSize: "0.875rem",
        fontWeight: 400,
        letterSpacing: 0,
        lineHeight: 1.5,
    },
    [`&.${classes.caption}`]: {
        fontSize: "0.75rem",
        fontWeight: 700,
        letterSpacing: 0,
        lineHeight: 1.5,
    },
    [`&.${classes.alignCenter}`]: {
        textAlign: 'center',
    },
    [`&.${classes.alignLeft}`]: {
        textAlign: 'left',
    },
    [`&.${classes.alignRight}`]: {
        textAlign: 'right',
    },
    [`&.${classes.alignJustify}`]: {
        textAlign: 'justify',
    },
});

const Typography = (props: TypographyProps) => {
    const {
        variant = "body1",
        align = "inherit",
        className,
        component,
        ...rest
    } = props;

    const classNames = useUtilityClasses({ align, variant });

    const Component = component || variantMapping[variant] || "span";

    return <TypographyRoot as={Component as KnownTags} className={classNames} {...rest} />;
};

export default Typography;
