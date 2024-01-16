import React, { ReactNode } from 'react';

interface LeftRightComponentProps {
    reversed?: boolean;
    title: string;
    para: string;
    button: ReactNode;
    photo: string;
}

const LeftRightComponent: React.FC<LeftRightComponentProps> = ({ reversed, title, para, button, photo }) => {
    return (
        <div className={`flex  flex-col-reverse items-center ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="md:w-1/2 px-6 md:px-16 space-y-6">
                <h2 className="text-black text-start text-2xl md:text-4xl font-bold">
                    {title}
                </h2>
                <p className="text-black text-start md:text-xl">{para}</p>
                <div className="mt-4">{button}</div>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <img src={photo} alt="Your Photo" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default LeftRightComponent;
