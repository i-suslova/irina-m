import React from 'react';
import './Dropdown.css';

const Dropdown = (props) => {
    const {
        content,
        onItemClick,
        onMouseEnter,
        onMouseLeave,
    } = props;

    if (!content) {
        return null;
    }

    return (
        <div className="dropdown"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {content.map((section, index) => (
                <button
                    className="dropbtn"
                    key={index}
                    onClick={() => onItemClick(section.id, section.path)}
                >
                    {section.item}
                </button>
            ))}
        </div>


    );
};

export default Dropdown;



