/* eslint-disable no-unreachable */
import './App.css';
import React, {useState, useEffect} from 'react';
import {COLUMS} from './COLUMS';
import {useTable} from 'react-table';

var ccxt = require('ccxt');
const proxy = 'https://cors-anywhere.herokuapp.com/'
const binance = new ccxt.binance({enableRateLimit: false})
const ftx = new ccxt.ftx({enableRateLimit: false, proxy: proxy, timeout: 30000})
const mexc = new ccxt.mexc({enableRateLimit: false, proxy: proxy, timeout: 30000})
const gateio = new ccxt.gateio({enableRateLimit: false, proxy: proxy, timeout: 30000})


const App = () => {
    const stats = {
        'BTC/USDT': {asks: [], bids: [], symbol: 'BTC/USDT'},
        'ETH/USDT': {asks: [], bids: [], symbol: 'ETH/USDT'},
    };
    const [resBinance, setResBinance] = useState([]);
    const [resFTX, setResFTX] = useState([]);
    const [resMEXC, setResMEXC] = useState([]);
    const [resGateIo, setResGateIo] = useState([]);
    const [data, setData] = useState([]);
    const [loadingGateIo, setLoadingGateIo] = useState(true);
    const [loadingBinance, setLoadingBinance] = useState(true);
    const [loadingFTX, setLoadingFTX] = useState(true);
    const [loadingMEXC, setLoadingMEXC] = useState(true);

    useEffect(() => {
        async function binanceset() {
            const result = await Promise.all([
                binance.fetchOrderBook('BTC/USDT', 1),
                binance.fetchOrderBook('ETH/USDT', 1),
            ])
            await new Promise(resolve => setTimeout(resolve, 3000))
            Object.values(result).sort();
            if (result !== undefined) {
                setResBinance(result.map(el => {
                    return {...el, exchange: 'Binance'}
                }));
                setLoadingBinance(false);
            }
        }
        binanceset();

        async function FTXset() {
            const result = await Promise.all([
                ftx.fetchOrderBook('BTC/USDT', 1),
                ftx.fetchOrderBook('ETH/USDT', 1),
            ])
            await new Promise(resolve => setTimeout(resolve, 3000))
            if (result !== undefined) {
                setResFTX(result.map(el => {
                    return {...el, exchange: 'FTX'}
                }));
                setLoadingFTX(false);
            }
        }
        FTXset();

        async function MEXCset() {
            const result = await Promise.all([
                mexc.fetchOrderBook('BTC/USDT', 1),
                mexc.fetchOrderBook('ETH/USDT', 1),

            ])
            await new Promise(resolve => setTimeout(resolve, 3000))
            if (result !== undefined) {
                setResMEXC(result.map(el => {
                    return {...el, exchange: 'MEXC'}
                }));
                setLoadingMEXC(false);
            }
        }
        MEXCset();

        async function GateIoset() {
            const result = await Promise.all([
                gateio.fetchOrderBook('BTC/USDT', 1),
                gateio.fetchOrderBook('ETH/USDT', 1),

            ])
            await new Promise(resolve => setTimeout(resolve, 3000))
            if (result !== undefined) {
                setResGateIo(result.map(el => {
                    return {...el, exchange: 'GateIO'}
                }));
                setLoadingGateIo(false);
            }
        }
        GateIoset();
    }, [])

    useEffect(() => {
        if (!loadingBinance && !loadingFTX && !loadingMEXC && !loadingGateIo) {
            [...resBinance, ...resFTX, ...resMEXC, ...resGateIo].forEach(el => {
                stats[el.symbol].bids.push({data: el.bids, exchange: el.exchange});
                stats[el.symbol].asks.push({data: el.asks, exchange: el.exchange});
            });

            console.log(Object.values(stats['BTC/USDT'].asks.sort((a, b) => (a.data[0] < b.data[0]) ? 1: -1)))
            console.log(Object.values(stats['BTC/USDT'].bids.sort((a, b) => (a.data[0] > b.data[0]) ? 1: -1)))
            console.log(Object.values(stats['ETH/USDT'].asks.sort((a, b) => (a.data[0] < b.data[0]) ? 1: -1)))
            console.log(Object.values(stats['ETH/USDT'].bids.sort((a, b) => (a.data[0] > b.data[0]) ? 1: -1)))

            setData(Object.values(stats).sort())
        }
    }, [loadingBinance, loadingFTX, loadingMEXC, loadingGateIo])



    return (
        <div className="container">
            <div className="table-card mt-5">
                <div className="table-card-body">
                    {loadingBinance || loadingFTX || loadingMEXC || loadingGateIo ? 'Loading...' : (
                        <Table data={data}/>
                    )}
                </div>
            </div>
        </div>
    );
}

const Table = ({data}) => {
    const tableInstance = useTable({
        columns: COLUMS,
        data,
    });
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = tableInstance;
    return (
        <table className={"arbitrage-table"} {...getTableProps()}>
            <thead className={"arbitrage-table-header"}>
            {
                headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getFooterGroupProps()}>
                        {
                            headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))
                        }
                    </tr>
                ))
            }
            </thead>
            <tbody {...getTableBodyProps()}>
            {
                rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr className={"arbitrage-table-row"} {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    )
}

export default App;
