import React, { FC } from 'react';

interface TabSelectorButtonProps {
    title: string;
    onClick: () => void;
}

export const TabSelectorButton: FC<TabSelectorButtonProps> = (props) => {

    return <button onClick={props.onClick}>{props.title}</button>
};
