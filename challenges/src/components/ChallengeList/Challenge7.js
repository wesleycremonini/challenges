import React, { useState } from "react";

import Challenge7component from './Challenge7.component'


function Challenge7() {
    return (
        <>
            <Challenge7component icon="👉" label="Points" number={3000} />
            <Challenge7component icon="⚡" label="Lightnings" number={6540} />
            <Challenge7component icon="🤙" label="Shakas" number={337010} />
            <Challenge7component icon="💎" label="Diamonds" number={98661} />
        </>
    );
};

export default Challenge7;