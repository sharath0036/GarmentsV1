let StartFunc = async ({ inFetchData }) => {
    let LocalinFetchData = await inFetchData.json();

    let jVarLocalLastRecord = LocalinFetchData;

    jFLocalToInputCustomerName({ inValue: jVarLocalLastRecord.CustomerName })
};

export { StartFunc }

let jFLocalToInputCustomerName = ({ inValue }) => {
    let jVarLocalHtmlId = 'CustomerName';
    let jVarLocalCustomerName = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalCustomerName === null === false) {
        jVarLocalCustomerName.value = inValue;
    };
};
