import React from 'react';
import { forEach, isArray } from 'lodash';

const findByType = (children: JSX.Element[] | JSX.Element, component: React.FC<any>): JSX.Element[] => {
    const result: Array<JSX.Element> = [];

    React.Children.forEach(children, (child) => {
        if (child?.type === React.Fragment && isArray(child?.props?.children)) {
            forEach(child.props.children, (c) => result.push(...findByType(c, component)));
            return;
        }

        if (component?.name === child?.type?.name) {
            result.push(child);
        }
    });

    return result;
};

export default findByType;
