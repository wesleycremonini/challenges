import React, { useState, useEffect } from "react";

function Challenge13() {
    const [dollar, setDollar] = useState();
    const [cents, setCents] = useState();


    const [quarter, setQuarter] = useState(0);
    const [dime, setDime] = useState(0);
    const [nickel, setNickel] = useState(0);
    const [pennie, setPennie] = useState(0);

    function convert() {
        setCents((dollar * 100).toFixed(0));    
    };
    
    useEffect(() => {
        setQuarter(~~(cents/25));

        setDime(~~((cents%25)/10));

        setNickel(~~(((cents%25)%10)/5));

        setPennie((((cents%25)%10)%5)/1);
    }, [cents]);



    return (
        <>
        <label>Dollars:</label>
        <input id='dollarInput' onChange={(e) => setDollar(e.target.value)} type='number' min="0.00" max="10000.00" step="any"/>
        <button onClick={convert}>Convert.</button>
        <br/>
        <label>Cents:</label>
        <input readOnly value={cents}/>
        <p>Quarters:{quarter} Dimes:{dime} Nickels:{nickel} Pennies:{pennie}  </p>
        </>
    );
};

export default Challenge13;