let StartFunc = async () => {
    let jVarLocalFetchUrl = `/binV4/BillsQrCode/Show/DataOnly`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };

