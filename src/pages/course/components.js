import { Button, List } from "@douyinfe/semi-ui";
import { IconDelete } from '@douyinfe/semi-icons';
import { useState } from "react";
export const BaseButton = ({ children, onDelete, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <Button
          {...props}  
          icon={
                isHovered ? (
                    <IconDelete
                        onClick={e => {
                            onDelete();
                            e,stopPropagrtion();
                        }}
                    />
                ) : null
            }
            onMouseEnter={() => setIsHovered(true)}
            onmouseleave={() => setIsHovered(false)}
        >
            {children}
        </Button>
    );
};