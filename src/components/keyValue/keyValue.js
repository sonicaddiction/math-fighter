import React from 'react';
import './keyValue.css';

type KeyValueProps = {
    description: string;
    value: string;
};

function KeyValue(props: KeyValueProps) {
    return (
        <div className="keyValue">
            <span className="description">{ props.description + ': '}</span>
            <span className="value">{ props.value }</span>
        </div>
    );
}

export default KeyValue;
