export const COLUMS = [
    {
        Header: 'Profit',
        accessor:'profit'
    },
    {
        Header: 'Symbol',
        accessor:'symbol'
    },
    {
        Header: () => <div className={"text-end"}>Asks</div>,
        accessor: 'asks',
        Cell: ({cell: {value}}) => value.map(el => {
            return (<div className={"text-end"}>
                <strong>{el.exchange} </strong>
                {el.data.map(row => row[0]).join(', ')}
            </div>);
        })
    },
    {
        Header: 'Bids',
        accessor:'bids',
        Cell: ({cell: {value}}) => value.map(el => {
            return (<div className={"text-start"}>
                <strong>{el.exchange} </strong>
                {el.data.map(row => row[0]).join(', ')}
            </div>);
        })
    }
]