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
const okx = new ccxt.okx({enableRateLimit: false, proxy: proxy, timeout: 30000})
const bitget = new ccxt.bitget({enableRateLimit: false, proxy: proxy, timeout: 30000})



const App = () => {
    const stats = {
        'BTC/USDT': {profit:[] ,asks: [], bids: [], symbol: 'BTC/USDT'},
        'ETH/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ETH/USDT'},
        'LINA/USDT': {profit:[] ,asks: [], bids: [], symbol: 'LINA/USDT'},
        'UNI/USDT': {profit:[] ,asks: [], bids: [], symbol: 'UNI/USDT'},
        'FLOW/USDT': {profit:[] ,asks: [], bids: [], symbol: 'FLOW/USDT'},
        'ALICE/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ALICE/USDT'},
        'XLM/USDT': {profit:[] ,asks: [], bids: [], symbol: 'XLM/USDT'},
        'EGLD/USDT': {profit:[] ,asks: [], bids: [], symbol: 'EGLD/USDT'},
        'MATIC/USDT': {profit:[] ,asks: [], bids: [], symbol: 'MATIC/USDT'},
        'GAL/USDT': {profit:[] ,asks: [], bids: [], symbol: 'GAL/USDT'},
        'LTC/USDT': {profit:[] ,asks: [], bids: [], symbol: 'LTC/USDT'},
        'QTUM/USDT': {profit:[] ,asks: [], bids: [], symbol: 'QTUM/USDT'},
        'XMR/USDT': {profit:[] ,asks: [], bids: [], symbol: 'XMR/USDT'},

    }
    const [resBinance, setResBinance] = useState([])
    const [resFTX, setResFTX] = useState([])
    const [resMEXC, setResMEXC] = useState([])
    const [resGateIo, setResGateIo] = useState([])
    const [resOkx, setResOkx] = useState([])
    const [resBitget, setResBitget] = useState([])
    const [data, setData] = useState([])
    const [loadingBitget, setLoadingBitget] = useState(true)
    const [loadingOkx, setLoadingOkx] = useState(true)
    const [loadingGateIo, setLoadingGateIo] = useState(true)
    const [loadingBinance, setLoadingBinance] = useState(true)
    const [loadingFTX, setLoadingFTX] = useState(true)
    const [loadingMEXC, setLoadingMEXC] = useState(true)

    useEffect(() => {
        async function binanceset() {
            const result = await Promise.all([
                binance.fetchOrderBook('BTC/USDT', 1),
                binance.fetchOrderBook('ETH/USDT', 1),
                binance.fetchOrderBook('LINA/USDT',1),
                binance.fetchOrderBook('UNI/USDT',1),
                binance.fetchOrderBook('FLOW/USDT',1),
                binance.fetchOrderBook('ALICE/USDT',1),
                binance.fetchOrderBook('XLM/USDT',1),
                binance.fetchOrderBook('EGLD/USDT',1),
                binance.fetchOrderBook('MATIC/USDT',1),
                binance.fetchOrderBook('GAL/USDT',1),
                binance.fetchOrderBook('LTC/USDT',1),
                binance.fetchOrderBook('QTUM/USDT',1),
                binance.fetchOrderBook('XMR/USDT',1),



            ])
            await new Promise(resolve => setTimeout(resolve, 3000))
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
                ftx.fetchOrderBook('UNI/USDT',1),
                ftx.fetchOrderBook('LTC/USDT',1),
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
                mexc.fetchOrderBook('LINA/USDT',1),
                mexc.fetchOrderBook('UNI/USDT',1),
                mexc.fetchOrderBook('FLOW/USDT',1),
                mexc.fetchOrderBook('ALICE/USDT',1),
                mexc.fetchOrderBook('XLM/USDT',1),
                mexc.fetchOrderBook('EGLD/USDT',1),
                mexc.fetchOrderBook('MATIC/USDT',1),
                mexc.fetchOrderBook('GAL/USDT',1),
                mexc.fetchOrderBook('LTC/USDT',1),
                mexc.fetchOrderBook('QTUM/USDT',1),
                mexc.fetchOrderBook('XMR/USDT',1),

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
                gateio.fetchOrderBook('LINA/USDT',1),
                gateio.fetchOrderBook('UNI/USDT',1),
                gateio.fetchOrderBook('FLOW/USDT',1),
                gateio.fetchOrderBook('ALICE/USDT',1),
                gateio.fetchOrderBook('XLM/USDT',1),
                gateio.fetchOrderBook('EGLD/USDT',1),
                gateio.fetchOrderBook('MATIC/USDT',1),
                gateio.fetchOrderBook('GAL/USDT',1),
                gateio.fetchOrderBook('LTC/USDT',1),
                gateio.fetchOrderBook('QTUM/USDT',1),
                gateio.fetchOrderBook('XMR/USDT',1),

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
        async function Okxset() {
            const result = await Promise.all([
                okx.fetchOrderBook('BTC/USDT', 1),
                okx.fetchOrderBook('ETH/USDT', 1),
                okx.fetchOrderBook('UNI/USDT',1),
                okx.fetchOrderBook('FLOW/USDT',1),
                okx.fetchOrderBook('XLM/USDT',1),
                okx.fetchOrderBook('EGLD/USDT',1),
                okx.fetchOrderBook('MATIC/USDT',1),
                okx.fetchOrderBook('LTC/USDT',1),
                okx.fetchOrderBook('QTUM/USDT',1),
                okx.fetchOrderBook('XMR/USDT',1),

            ])
            await new Promise(resolve => setTimeout(resolve, 3000))
            if (result !== undefined) {
                setResOkx(result.map(el => {
                    return {...el, exchange: 'OKX'}
                }));
                setLoadingOkx(false);
            }
        }
        Okxset();
        async function Bitgetset() {
            const result = await Promise.all([
                bitget.fetchOrderBook('BTC/USDT', 1),
                bitget.fetchOrderBook('ETH/USDT', 1),
                bitget.fetchOrderBook('UNI/USDT',1),
                bitget.fetchOrderBook('EGLD/USDT',1),
                bitget.fetchOrderBook('MATIC/USDT',1),
                bitget.fetchOrderBook('LTC/USDT',1),
                bitget.fetchOrderBook('QTUM/USDT',1),

            ])
            await new Promise(resolve => setTimeout(resolve, 3000))
            if (result !== undefined) {
                setResBitget(result.map(el => {
                    return {...el, exchange: 'Bitget'}
                }));
                setLoadingBitget(false);
            }
        }
        Bitgetset();
    }, [])

    useEffect(() => {
        if (!loadingBinance && !loadingFTX && !loadingMEXC && !loadingGateIo && !loadingOkx && !loadingBitget) {
            
            [...resBinance, ...resFTX, ...resMEXC, ...resGateIo, ...resOkx, ...resBitget].forEach(el => {
                stats[el.symbol].bids.push({data: el.bids, exchange: el.exchange});
                stats[el.symbol].asks.push({data: el.asks, exchange: el.exchange});
                stats[el.symbol].asks.sort((a, b) => (a.data[0] < b.data[0]) ? 1:-1);
                stats[el.symbol].bids.sort((a, b) => (a.data[0] > b.data[0]) ? 1:-1);
            });

            stats['BTC/USDT'].profit.push((((Object.values(stats['BTC/USDT'].asks[0].data[0])[0] - Object.values(stats['BTC/USDT'].bids[0].data[0])[0])/Object.values(stats['BTC/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ETH/USDT'].profit.push((((Object.values(stats['ETH/USDT'].asks[0].data[0])[0] - Object.values(stats['ETH/USDT'].bids[0].data[0])[0])/Object.values(stats['ETH/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['LINA/USDT'].profit.push((((Object.values(stats['LINA/USDT'].asks[0].data[0])[0] - Object.values(stats['LINA/USDT'].bids[0].data[0])[0])/Object.values(stats['LINA/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['UNI/USDT'].profit.push((((Object.values(stats['UNI/USDT'].asks[0].data[0])[0] - Object.values(stats['UNI/USDT'].bids[0].data[0])[0])/Object.values(stats['UNI/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['FLOW/USDT'].profit.push((((Object.values(stats['FLOW/USDT'].asks[0].data[0])[0] - Object.values(stats['FLOW/USDT'].bids[0].data[0])[0])/Object.values(stats['FLOW/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ALICE/USDT'].profit.push((((Object.values(stats['ALICE/USDT'].asks[0].data[0])[0] - Object.values(stats['ALICE/USDT'].bids[0].data[0])[0])/Object.values(stats['ALICE/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['XLM/USDT'].profit.push((((Object.values(stats['XLM/USDT'].asks[0].data[0])[0] - Object.values(stats['XLM/USDT'].bids[0].data[0])[0])/Object.values(stats['XLM/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['EGLD/USDT'].profit.push((((Object.values(stats['EGLD/USDT'].asks[0].data[0])[0] - Object.values(stats['EGLD/USDT'].bids[0].data[0])[0])/Object.values(stats['EGLD/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['MATIC/USDT'].profit.push((((Object.values(stats['MATIC/USDT'].asks[0].data[0])[0] - Object.values(stats['MATIC/USDT'].bids[0].data[0])[0])/Object.values(stats['MATIC/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['GAL/USDT'].profit.push((((Object.values(stats['GAL/USDT'].asks[0].data[0])[0] - Object.values(stats['GAL/USDT'].bids[0].data[0])[0])/Object.values(stats['GAL/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['LTC/USDT'].profit.push((((Object.values(stats['LTC/USDT'].asks[0].data[0])[0] - Object.values(stats['LTC/USDT'].bids[0].data[0])[0])/Object.values(stats['LTC/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['QTUM/USDT'].profit.push((((Object.values(stats['QTUM/USDT'].asks[0].data[0])[0] - Object.values(stats['QTUM/USDT'].bids[0].data[0])[0])/Object.values(stats['QTUM/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['XMR/USDT'].profit.push((((Object.values(stats['XMR/USDT'].asks[0].data[0])[0] - Object.values(stats['XMR/USDT'].bids[0].data[0])[0])/Object.values(stats['XMR/USDT'].bids[0].data[0])[0])*100).toFixed(3))

            setData(Object.values(stats))
        }
    }, [loadingBinance, loadingFTX, loadingMEXC, loadingGateIo, loadingOkx])



    return (
        <div className="container">
            <div className="table-card mt-5">
                <div className="table-card-body">
                    {loadingBinance || loadingFTX || loadingMEXC || loadingGateIo || loadingOkx ? 'Loading...' : (
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
