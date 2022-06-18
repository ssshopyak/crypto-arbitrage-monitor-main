/* eslint-disable no-unreachable */
import './App.css';
import React, {useState, useEffect} from 'react';
import {COLUMS} from './COLUMS';
import {useTable} from 'react-table';

var ccxt = require('ccxt');
const proxy = 'https://shevacryptoproxy.herokuapp.com/'
const binance = new ccxt.binance({enableRateLimit: false, proxy:proxy})
const ftx = new ccxt.ftx({enableRateLimit: false, proxy: proxy, timeout: 50000})
const mexc = new ccxt.mexc({enableRateLimit: false, proxy: proxy, timeout: 50000})
const gateio = new ccxt.gateio({enableRateLimit: false, proxy: proxy, timeout: 50000})
const okx = new ccxt.okx({enableRateLimit: false, proxy: proxy, timeout: 50000})
const bitget = new ccxt.bitget({enableRateLimit: false, proxy: proxy, timeout: 50000})
const huobi = new ccxt.huobi({enableRateLimit: false, proxy: proxy, timeout: 50000})



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
        'REEF/USDT': {profit:[] ,asks: [], bids: [], symbol: 'REEF/USDT'},
        'BTS/USDT': {profit:[] ,asks: [], bids: [], symbol: 'BTS/USDT'},
        'XEM/USDT': {profit:[] ,asks: [], bids: [], symbol: 'XEM/USDT'},
        'NKN/USDT': {profit:[] ,asks: [], bids: [], symbol: 'NKN/USDT'},
        'C98/USDT': {profit:[] ,asks: [], bids: [], symbol: 'C98/USDT'},
        'FIL/USDT': {profit:[] ,asks: [], bids: [], symbol: 'FIL/USDT'},
        'API3/USDT': {profit:[] ,asks: [], bids: [], symbol: 'API3/USDT'},
        'GRT/USDT': {profit:[] ,asks: [], bids: [], symbol: 'GRT/USDT'},
        'LRC/USDT': {profit:[] ,asks: [], bids: [], symbol: 'LRC/USDT'},
        'GMT/USDT': {profit:[] ,asks: [], bids: [], symbol: 'GMT/USDT'},
        'JASMY/USDT': {profit:[] ,asks: [], bids: [], symbol: 'JASMY/USDT'},
        'COTI/USDT': {profit:[] ,asks: [], bids: [], symbol: 'COTI/USDT'},
        'HBAR/USDT': {profit:[] ,asks: [], bids: [], symbol: 'HBAR/USDT'},
        'KSM/USDT': {profit:[] ,asks: [], bids: [], symbol: 'KSM/USDT'},
        'ICP/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ICP/USDT'},
        'DASH/USDT': {profit:[] ,asks: [], bids: [], symbol: 'DASH/USDT'},
        'XRP/USDT': {profit:[] ,asks: [], bids: [], symbol: 'XRP/USDT'},
        'BNB/USDT': {profit:[] ,asks: [], bids: [], symbol: 'BNB/USDT'},
        'IOST/USDT': {profit:[] ,asks: [], bids: [], symbol: 'IOST/USDT'},
        'NEO/USDT': {profit:[] ,asks: [], bids: [], symbol: 'NEO/USDT'},
        'SAND/USDT': {profit:[] ,asks: [], bids: [], symbol: 'SAND/USDT'},
        'SUSHI/USDT': {profit:[] ,asks: [], bids: [], symbol: 'SUSHI/USDT'},
        'KAVA/USDT': {profit:[] ,asks: [], bids: [], symbol: 'KAVA/USDT'},
        'VET/USDT': {profit:[] ,asks: [], bids: [], symbol: 'VET/USDT'},
        'LINK/USDT': {profit:[] ,asks: [], bids: [], symbol: 'LINK/USDT'},
        'CHR/USDT': {profit:[] ,asks: [], bids: [], symbol: 'CHR/USDT'},
        'MKR/USDT': {profit:[] ,asks: [], bids: [], symbol: 'MKR/USDT'},
        'YFII/USDT': {profit:[] ,asks: [], bids: [], symbol: 'YFII/USDT'},
        'IOTX/USDT': {profit:[] ,asks: [], bids: [], symbol: 'IOTX/USDT'},
        'BCH/USDT': {profit:[] ,asks: [], bids: [], symbol: 'BCH/USDT'},
        'OP/USDT': {profit:[] ,asks: [], bids: [], symbol: 'OP/USDT'},
        'IOTA/USDT': {profit:[] ,asks: [], bids: [], symbol: 'IOTA/USDT'},
        'BAL/USDT': {profit:[] ,asks: [], bids: [], symbol: 'BAL/USDT'},
        'ONE/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ONE/USDT'},
        'YFI/USDT': {profit:[] ,asks: [], bids: [], symbol: 'YFI/USDT'},
        'RSR/USDT': {profit:[] ,asks: [], bids: [], symbol: 'RSR/USDT'},
        'ONT/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ONT/USDT'},
        'DOT/USDT': {profit:[] ,asks: [], bids: [], symbol: 'DOT/USDT'},
        'THETA/USDT': {profit:[] ,asks: [], bids: [], symbol: 'THETA/USDT'},
        'IMX/USDT': {profit:[] ,asks: [], bids: [], symbol: 'IMX/USDT'},
        'SOL/USDT': {profit:[] ,asks: [], bids: [], symbol: 'SOL/USDT'},
        'EOS/USDT': {profit:[] ,asks: [], bids: [], symbol: 'EOS/USDT'},
        'UNFI/USDT': {profit:[] ,asks: [], bids: [], symbol: 'UNFI/USDT'},
        'RVN/USDT': {profit:[] ,asks: [], bids: [], symbol: 'RVN/USDT'},
        'SRM/USDT': {profit:[] ,asks: [], bids: [], symbol: 'SRM/USDT'},
        'CELO/USDT': {profit:[] ,asks: [], bids: [], symbol: 'CELO/USDT'},
        'AXS/USDT': {profit:[] ,asks: [], bids: [], symbol: 'AXS/USDT'},
        'CHZ/USDT': {profit:[] ,asks: [], bids: [], symbol: 'CHZ/USDT'},
        'DYDX/USDT': {profit:[] ,asks: [], bids: [], symbol: 'DYDX/USDT'},
        'ZEN/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ZEN/USDT'},
        'MANA/USDT': {profit:[] ,asks: [], bids: [], symbol: 'MANA/USDT'},
        'ADA/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ADA/USDT'},
        'PEOPLE/USDT': {profit:[] ,asks: [], bids: [], symbol: 'PEOPLE/USDT'},
        'LPT/USDT': {profit:[] ,asks: [], bids: [], symbol: 'LPT/USDT'},
        'BAT/USDT': {profit:[] ,asks: [], bids: [], symbol: 'BAT/USDT'},
        'ATOM/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ATOM/USDT'},
        'ENJ/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ENJ/USDT'},
        'WOO/USDT': {profit:[] ,asks: [], bids: [], symbol: 'WOO/USDT'},
        'SNX/USDT': {profit:[] ,asks: [], bids: [], symbol: 'SNX/USDT'},
        'XTZ/USDT': {profit:[] ,asks: [], bids: [], symbol: 'XTZ/USDT'},
        'AVAX/USDT': {profit:[] ,asks: [], bids: [], symbol: 'AVAX/USDT'},
        'APE/USDT': {profit:[] ,asks: [], bids: [], symbol: 'APE/USDT'},
        'DOGE/USDT': {profit:[] ,asks: [], bids: [], symbol: 'DOGE/USDT'},
        'CVC/USDT': {profit:[] ,asks: [], bids: [], symbol: 'CVC/USDT'},
        'ZIL/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ZIL/USDT'},
        'STORJ/USDT': {profit:[] ,asks: [], bids: [], symbol: 'STORJ/USDT'},
        'REN/USDT': {profit:[] ,asks: [], bids: [], symbol: 'REN/USDT'},
        'MASK/USDT': {profit:[] ,asks: [], bids: [], symbol: 'MASK/USDT'},
        'ZRX/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ZRX/USDT'},
        'ARPA/USDT': {profit:[] ,asks: [], bids: [], symbol: 'ARPA/USDT'},
        'NEAR/USDT': {profit:[] ,asks: [], bids: [], symbol: 'NEAR/USDT'},
        'GALA/USDT': {profit:[] ,asks: [], bids: [], symbol: 'GALA/USDT'},
    }
    const [resBinance, setResBinance] = useState([])
    const [resFTX, setResFTX] = useState([])
    const [resMEXC, setResMEXC] = useState([])
    const [resGateIo, setResGateIo] = useState([])
    const [resOkx, setResOkx] = useState([])
    const [resBitget, setResBitget] = useState([])
    const [resHuobi, setResHuobi] = useState([])
    const [data, setData] = useState([])
    const [loadingHuobi, setLoadingHuobi] = useState(true)
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
                binance.fetchOrderBook('REEF/USDT', 1),
                binance.fetchOrderBook('BTS/USDT', 1),
                binance.fetchOrderBook('XEM/USDT', 1),
                binance.fetchOrderBook('NKN/USDT', 1),
                binance.fetchOrderBook('C98/USDT', 1),
                binance.fetchOrderBook('FIL/USDT', 1),
                binance.fetchOrderBook('API3/USDT', 1),
                binance.fetchOrderBook('GRT/USDT', 1),
                binance.fetchOrderBook('LRC/USDT', 1),
                binance.fetchOrderBook('GMT/USDT', 1),
                binance.fetchOrderBook('JASMY/USDT', 1),
                binance.fetchOrderBook('COTI/USDT', 1),
                binance.fetchOrderBook('HBAR/USDT', 1),
                binance.fetchOrderBook('KSM/USDT', 1),
                binance.fetchOrderBook('ICP/USDT', 1),
                binance.fetchOrderBook('DASH/USDT', 1),
                binance.fetchOrderBook('XRP/USDT', 1),
                binance.fetchOrderBook('BNB/USDT', 1),
                binance.fetchOrderBook('IOST/USDT', 1),
                binance.fetchOrderBook('NEO/USDT', 1),
                binance.fetchOrderBook('SAND/USDT', 1),
                binance.fetchOrderBook('SUSHI/USDT', 1),
                binance.fetchOrderBook('KAVA/USDT', 1),
                binance.fetchOrderBook('LINK/USDT', 1),
                binance.fetchOrderBook('VET/USDT', 1),
                binance.fetchOrderBook('CHR/USDT', 1),
                binance.fetchOrderBook('MKR/USDT', 1),
                binance.fetchOrderBook('YFII/USDT', 1),
                binance.fetchOrderBook('IOTX/USDT', 1),
                binance.fetchOrderBook('BCH/USDT', 1),
                binance.fetchOrderBook('OP/USDT', 1),
                binance.fetchOrderBook('IOTA/USDT', 1),
                binance.fetchOrderBook('BAL/USDT', 1),
                binance.fetchOrderBook('ONE/USDT', 1),
                binance.fetchOrderBook('YFI/USDT', 1),
                binance.fetchOrderBook('RSR/USDT', 1),
                binance.fetchOrderBook('ONT/USDT', 1),
                binance.fetchOrderBook('DOT/USDT', 1),
                binance.fetchOrderBook('THETA/USDT', 1),
                binance.fetchOrderBook('IMX/USDT', 1),
                binance.fetchOrderBook('SOL/USDT', 1),
                binance.fetchOrderBook('EOS/USDT', 1),
                binance.fetchOrderBook('UNFI/USDT', 1),
                binance.fetchOrderBook('RVN/USDT', 1),
                binance.fetchOrderBook('SRM/USDT', 1),
                binance.fetchOrderBook('CELO/USDT', 1),
                binance.fetchOrderBook('AXS/USDT', 1),
                binance.fetchOrderBook('CHZ/USDT', 1),
                binance.fetchOrderBook('DYDX/USDT', 1),
                binance.fetchOrderBook('ZEN/USDT', 1),
                binance.fetchOrderBook('MANA/USDT', 1),
                binance.fetchOrderBook('ADA/USDT', 1),
                binance.fetchOrderBook('PEOPLE/USDT', 1),
                binance.fetchOrderBook('LPT/USDT', 1),
                binance.fetchOrderBook('BAT/USDT', 1),
                binance.fetchOrderBook('ATOM/USDT', 1),
                binance.fetchOrderBook('ENJ/USDT', 1),
                binance.fetchOrderBook('WOO/USDT', 1),
                binance.fetchOrderBook('SNX/USDT', 1),
                binance.fetchOrderBook('XTZ/USDT', 1),
                binance.fetchOrderBook('AVAX/USDT', 1),
                binance.fetchOrderBook('APE/USDT', 1),
                binance.fetchOrderBook('DOGE/USDT', 1),
                binance.fetchOrderBook('CVC/USDT', 1),
                binance.fetchOrderBook('ZIL/USDT', 1),
                binance.fetchOrderBook('STORJ/USDT', 1),
                binance.fetchOrderBook('REN/USDT', 1),
                binance.fetchOrderBook('MASK/USDT', 1),
                binance.fetchOrderBook('ZRX/USDT', 1),
                binance.fetchOrderBook('ARPA/USDT', 1),
                binance.fetchOrderBook('NEAR/USDT', 1),
                binance.fetchOrderBook('GALA/USDT', 1),
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
                ftx.fetchOrderBook('XRP/USDT', 1),
                ftx.fetchOrderBook('BNB/USDT', 1),
                
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
                mexc.fetchOrderBook('BTS/USDT', 1),
                mexc.fetchOrderBook('NKN/USDT', 1),
                mexc.fetchOrderBook('C98/USDT', 1),
                mexc.fetchOrderBook('FIL/USDT', 1),
                mexc.fetchOrderBook('API3/USDT', 1),
                mexc.fetchOrderBook('GRT/USDT', 1),
                mexc.fetchOrderBook('LRC/USDT', 1),
                mexc.fetchOrderBook('GMT/USDT', 1),
                mexc.fetchOrderBook('JASMY/USDT', 1),
                mexc.fetchOrderBook('HBAR/USDT', 1),
                mexc.fetchOrderBook('KSM/USDT', 1),
                mexc.fetchOrderBook('ICP/USDT', 1),
                mexc.fetchOrderBook('DASH/USDT', 1),
                mexc.fetchOrderBook('XRP/USDT', 1),
                mexc.fetchOrderBook('BNB/USDT', 1),
                mexc.fetchOrderBook('IOST/USDT', 1),
                mexc.fetchOrderBook('NEO/USDT', 1),
                mexc.fetchOrderBook('SAND/USDT', 1),
                mexc.fetchOrderBook('SUSHI/USDT', 1),
                mexc.fetchOrderBook('KAVA/USDT', 1),
                mexc.fetchOrderBook('LINK/USDT', 1),
                mexc.fetchOrderBook('VET/USDT', 1),
                mexc.fetchOrderBook('MKR/USDT', 1),
                mexc.fetchOrderBook('YFII/USDT', 1),
                mexc.fetchOrderBook('IOTX/USDT', 1),
                mexc.fetchOrderBook('BCH/USDT', 1),
                mexc.fetchOrderBook('OP/USDT', 1),
                mexc.fetchOrderBook('BAL/USDT', 1),
                mexc.fetchOrderBook('ONE/USDT', 1),
                mexc.fetchOrderBook('YFI/USDT', 1),
                mexc.fetchOrderBook('RSR/USDT', 1),
                mexc.fetchOrderBook('ONT/USDT', 1),
                mexc.fetchOrderBook('DOT/USDT', 1),
                mexc.fetchOrderBook('IMX/USDT', 1),
                mexc.fetchOrderBook('SOL/USDT', 1),
                mexc.fetchOrderBook('EOS/USDT', 1),
                mexc.fetchOrderBook('UNFI/USDT', 1),
                mexc.fetchOrderBook('RVN/USDT', 1),
                mexc.fetchOrderBook('SRM/USDT', 1),
                mexc.fetchOrderBook('CELO/USDT', 1),
                mexc.fetchOrderBook('AXS/USDT', 1),
                mexc.fetchOrderBook('CHZ/USDT', 1),
                mexc.fetchOrderBook('ADA/USDT', 1),
                mexc.fetchOrderBook('PEOPLE/USDT', 1),
                mexc.fetchOrderBook('LPT/USDT', 1),
                mexc.fetchOrderBook('BAT/USDT', 1),
                mexc.fetchOrderBook('ATOM/USDT', 1),
                mexc.fetchOrderBook('WOO/USDT', 1),
                mexc.fetchOrderBook('SNX/USDT', 1),
                mexc.fetchOrderBook('XTZ/USDT', 1),
                mexc.fetchOrderBook('AVAX/USDT', 1),
                mexc.fetchOrderBook('APE/USDT', 1),
                mexc.fetchOrderBook('DOGE/USDT', 1),
                mexc.fetchOrderBook('ZIL/USDT', 1),
                mexc.fetchOrderBook('STORJ/USDT', 1),
                mexc.fetchOrderBook('REN/USDT', 1),
                mexc.fetchOrderBook('MASK/USDT', 1),
                mexc.fetchOrderBook('ZRX/USDT', 1),
                mexc.fetchOrderBook('ARPA/USDT', 1),
                mexc.fetchOrderBook('NEAR/USDT', 1),
                mexc.fetchOrderBook('GALA/USDT', 1),


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
                gateio.fetchOrderBook('REEF/USDT', 1),
                gateio.fetchOrderBook('BTS/USDT', 1),
                gateio.fetchOrderBook('XEM/USDT', 1),
                gateio.fetchOrderBook('NKN/USDT', 1),
                gateio.fetchOrderBook('C98/USDT', 1),
                gateio.fetchOrderBook('FIL/USDT', 1),
                gateio.fetchOrderBook('API3/USDT', 1),
                gateio.fetchOrderBook('GRT/USDT', 1),
                gateio.fetchOrderBook('LRC/USDT', 1),
                gateio.fetchOrderBook('GMT/USDT', 1),
                gateio.fetchOrderBook('JASMY/USDT', 1),
                gateio.fetchOrderBook('COTI/USDT', 1),
                gateio.fetchOrderBook('HBAR/USDT', 1),
                gateio.fetchOrderBook('KSM/USDT', 1),
                gateio.fetchOrderBook('ICP/USDT', 1),
                gateio.fetchOrderBook('DASH/USDT', 1),
                gateio.fetchOrderBook('XRP/USDT', 1),
                gateio.fetchOrderBook('BNB/USDT', 1),
                gateio.fetchOrderBook('IOST/USDT', 1),
                gateio.fetchOrderBook('NEO/USDT', 1),
                gateio.fetchOrderBook('SAND/USDT', 1),
                gateio.fetchOrderBook('SUSHI/USDT', 1),
                gateio.fetchOrderBook('KAVA/USDT', 1),
                gateio.fetchOrderBook('LINK/USDT', 1),
                gateio.fetchOrderBook('VET/USDT', 1),
                gateio.fetchOrderBook('CHR/USDT', 1),
                gateio.fetchOrderBook('MKR/USDT', 1),
                gateio.fetchOrderBook('YFII/USDT', 1),
                gateio.fetchOrderBook('IOTX/USDT', 1),
                gateio.fetchOrderBook('BCH/USDT', 1),
                gateio.fetchOrderBook('OP/USDT', 1),
                gateio.fetchOrderBook('IOTA/USDT', 1),
                gateio.fetchOrderBook('BAL/USDT', 1),
                gateio.fetchOrderBook('ONE/USDT', 1),
                gateio.fetchOrderBook('YFI/USDT', 1),
                gateio.fetchOrderBook('RSR/USDT', 1),
                gateio.fetchOrderBook('ONT/USDT', 1),
                gateio.fetchOrderBook('DOT/USDT', 1),
                gateio.fetchOrderBook('THETA/USDT', 1),
                gateio.fetchOrderBook('IMX/USDT', 1),
                gateio.fetchOrderBook('SOL/USDT', 1),
                gateio.fetchOrderBook('EOS/USDT', 1),
                gateio.fetchOrderBook('UNFI/USDT', 1),
                gateio.fetchOrderBook('RVN/USDT', 1),
                gateio.fetchOrderBook('SRM/USDT', 1),
                gateio.fetchOrderBook('CELO/USDT', 1),
                gateio.fetchOrderBook('AXS/USDT', 1),
                gateio.fetchOrderBook('CHZ/USDT', 1),
                gateio.fetchOrderBook('DYDX/USDT', 1),
                gateio.fetchOrderBook('ZEN/USDT', 1),
                gateio.fetchOrderBook('ADA/USDT', 1),
                gateio.fetchOrderBook('PEOPLE/USDT', 1),
                gateio.fetchOrderBook('LPT/USDT', 1),
                gateio.fetchOrderBook('BAT/USDT', 1),
                gateio.fetchOrderBook('ATOM/USDT', 1),
                gateio.fetchOrderBook('ENJ/USDT', 1),
                gateio.fetchOrderBook('WOO/USDT', 1),
                gateio.fetchOrderBook('SNX/USDT', 1),
                gateio.fetchOrderBook('XTZ/USDT', 1),
                gateio.fetchOrderBook('AVAX/USDT', 1),
                gateio.fetchOrderBook('APE/USDT', 1),
                gateio.fetchOrderBook('DOGE/USDT', 1),
                gateio.fetchOrderBook('CVC/USDT', 1),
                gateio.fetchOrderBook('ZIL/USDT', 1),
                gateio.fetchOrderBook('STORJ/USDT', 1),
                gateio.fetchOrderBook('REN/USDT', 1),
                gateio.fetchOrderBook('MASK/USDT', 1),
                gateio.fetchOrderBook('ZRX/USDT', 1),
                gateio.fetchOrderBook('ARPA/USDT', 1),
                gateio.fetchOrderBook('NEAR/USDT', 1),
                gateio.fetchOrderBook('GALA/USDT', 1),

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
                bitget.fetchOrderBook('NKN/USDT', 1),
                bitget.fetchOrderBook('C98/USDT', 1),
                bitget.fetchOrderBook('FIL/USDT', 1),
                bitget.fetchOrderBook('GRT/USDT', 1),
                bitget.fetchOrderBook('LRC/USDT', 1),
                bitget.fetchOrderBook('GMT/USDT', 1),
                bitget.fetchOrderBook('JASMY/USDT', 1),
                bitget.fetchOrderBook('COTI/USDT', 1),
                bitget.fetchOrderBook('KSM/USDT', 1),
                bitget.fetchOrderBook('ICP/USDT', 1),
                bitget.fetchOrderBook('XRP/USDT', 1),
                bitget.fetchOrderBook('BNB/USDT', 1),
                bitget.fetchOrderBook('SAND/USDT', 1),
                bitget.fetchOrderBook('SUSHI/USDT', 1),
                bitget.fetchOrderBook('LINK/USDT', 1),
                bitget.fetchOrderBook('CHR/USDT', 1),
                bitget.fetchOrderBook('MKR/USDT', 1),
                bitget.fetchOrderBook('YFII/USDT', 1),
                bitget.fetchOrderBook('BCH/USDT', 1),
                bitget.fetchOrderBook('OP/USDT', 1),
                bitget.fetchOrderBook('BAL/USDT', 1),
                bitget.fetchOrderBook('YFI/USDT', 1),
                bitget.fetchOrderBook('RSR/USDT', 1),
                bitget.fetchOrderBook('DOT/USDT', 1),
                bitget.fetchOrderBook('IMX/USDT', 1),
                bitget.fetchOrderBook('SOL/USDT', 1),
                bitget.fetchOrderBook('EOS/USDT', 1),
                bitget.fetchOrderBook('SRM/USDT', 1),
                bitget.fetchOrderBook('CELO/USDT', 1),
                bitget.fetchOrderBook('AXS/USDT', 1),
                bitget.fetchOrderBook('CHZ/USDT', 1),
                bitget.fetchOrderBook('DYDX/USDT', 1),
                bitget.fetchOrderBook('MANA/USDT', 1),
                bitget.fetchOrderBook('ADA/USDT', 1),
                bitget.fetchOrderBook('PEOPLE/USDT', 1),
                bitget.fetchOrderBook('LPT/USDT', 1),
                bitget.fetchOrderBook('BAT/USDT', 1),
                bitget.fetchOrderBook('ATOM/USDT', 1),
                bitget.fetchOrderBook('ENJ/USDT', 1),
                bitget.fetchOrderBook('WOO/USDT', 1),
                bitget.fetchOrderBook('SNX/USDT', 1),
                bitget.fetchOrderBook('AVAX/USDT', 1),
                bitget.fetchOrderBook('APE/USDT', 1),
                bitget.fetchOrderBook('DOGE/USDT', 1),
                bitget.fetchOrderBook('ZIL/USDT', 1),
                bitget.fetchOrderBook('STORJ/USDT', 1),
                bitget.fetchOrderBook('REN/USDT', 1),
                bitget.fetchOrderBook('MASK/USDT', 1),
                bitget.fetchOrderBook('ZRX/USDT', 1),
                bitget.fetchOrderBook('ARPA/USDT', 1),
                bitget.fetchOrderBook('NEAR/USDT', 1),
                bitget.fetchOrderBook('GALA/USDT', 1),

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
        async function Huobiset() {
            const result = await Promise.all([
                huobi.fetchOrderBook('BTC/USDT',    5),
                huobi.fetchOrderBook('ETH/USDT',    5),
                huobi.fetchOrderBook('UNI/USDT',    5),
                huobi.fetchOrderBook('EGLD/USDT',   5),
                huobi.fetchOrderBook('MATIC/USDT',  5),
                huobi.fetchOrderBook('LTC/USDT',    5),
                huobi.fetchOrderBook('QTUM/USDT',   5),
                huobi.fetchOrderBook('NKN/USDT',    5),
                huobi.fetchOrderBook('C98/USDT',    5),
                huobi.fetchOrderBook('FIL/USDT',    5),
                huobi.fetchOrderBook('GRT/USDT',    5),
                huobi.fetchOrderBook('LRC/USDT',    5),
                huobi.fetchOrderBook('GMT/USDT',    5),
                huobi.fetchOrderBook('JASMY/USDT',  5),
                huobi.fetchOrderBook('COTI/USDT',   5),
                huobi.fetchOrderBook('KSM/USDT',    5),
                huobi.fetchOrderBook('ICP/USDT',    5),
                huobi.fetchOrderBook('XRP/USDT',    5),
                huobi.fetchOrderBook('BNB/USDT',    5),
                huobi.fetchOrderBook('SAND/USDT',   5),
                huobi.fetchOrderBook('SUSHI/USDT',  5),
                huobi.fetchOrderBook('LINK/USDT',   5),
                huobi.fetchOrderBook('CHR/USDT',    5),
                huobi.fetchOrderBook('MKR/USDT',    5),
                huobi.fetchOrderBook('YFII/USDT',   5),
                huobi.fetchOrderBook('BCH/USDT',    5),
                huobi.fetchOrderBook('OP/USDT',     5),
                huobi.fetchOrderBook('BAL/USDT',    5),
                huobi.fetchOrderBook('YFI/USDT',    5),
                huobi.fetchOrderBook('RSR/USDT',    5),
                huobi.fetchOrderBook('DOT/USDT',    5),
                huobi.fetchOrderBook('IMX/USDT',    5),
                huobi.fetchOrderBook('SOL/USDT',    5),
                huobi.fetchOrderBook('EOS/USDT',    5),
                huobi.fetchOrderBook('SRM/USDT',    5),
                huobi.fetchOrderBook('CELO/USDT',   5),
                huobi.fetchOrderBook('AXS/USDT',    5),
                huobi.fetchOrderBook('CHZ/USDT',    5),
                huobi.fetchOrderBook('DYDX/USDT',   5),
                huobi.fetchOrderBook('MANA/USDT',   5),
                huobi.fetchOrderBook('ADA/USDT', 5),
                huobi.fetchOrderBook('PEOPLE/USDT', 5),
                huobi.fetchOrderBook('LPT/USDT', 5),
                huobi.fetchOrderBook('BAT/USDT', 5),
                huobi.fetchOrderBook('ATOM/USDT', 5),
                huobi.fetchOrderBook('ENJ/USDT', 5),
                huobi.fetchOrderBook('WOO/USDT', 5),
                huobi.fetchOrderBook('SNX/USDT', 5),
                huobi.fetchOrderBook('XTZ/USDT', 5),
                huobi.fetchOrderBook('AVAX/USDT', 5),
                huobi.fetchOrderBook('APE/USDT', 5),
                huobi.fetchOrderBook('DOGE/USDT', 5),
                huobi.fetchOrderBook('CVC/USDT', 5),
                huobi.fetchOrderBook('ZIL/USDT', 5),
                huobi.fetchOrderBook('STORJ/USDT', 5),
                huobi.fetchOrderBook('REN/USDT', 5),
                huobi.fetchOrderBook('MASK/USDT', 5),
                huobi.fetchOrderBook('ZRX/USDT', 5),
                huobi.fetchOrderBook('ARPA/USDT', 5),
                huobi.fetchOrderBook('NEAR/USDT', 5),
                huobi.fetchOrderBook('GALA/USDT', 5),
            ])
            await new Promise(resolve => setTimeout(resolve, 3000))
            if (result !== undefined) {
                setResHuobi(result.map(el => {
                    el.asks.pop();
                    el.asks.pop();
                    el.asks.pop();
                    el.asks.pop();
                    el.bids.pop();
                    el.bids.pop();
                    el.bids.pop();
                    el.bids.pop();
                    return {...el, exchange: 'Huobi'}
                }));
                setLoadingHuobi(false);
            }
        }
        Huobiset();
    }, [])

    useEffect(() => {
        if (!loadingBinance && !loadingFTX && !loadingMEXC && !loadingGateIo && !loadingOkx && !loadingBitget && !loadingHuobi) {
            
            [...resBinance, ...resFTX, ...resMEXC, ...resGateIo, ...resOkx, ...resBitget, ...resHuobi].forEach(el => {
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
            stats['REEF/USDT'].profit.push((((Object.values(stats['REEF/USDT'].asks[0].data[0])[0] - Object.values(stats['REEF/USDT'].bids[0].data[0])[0])/Object.values(stats['REEF/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['BTS/USDT'].profit.push((((Object.values(stats['BTS/USDT'].asks[0].data[0])[0] - Object.values(stats['BTS/USDT'].bids[0].data[0])[0])/Object.values(stats['BTS/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['XEM/USDT'].profit.push((((Object.values(stats['XEM/USDT'].asks[0].data[0])[0] - Object.values(stats['XEM/USDT'].bids[0].data[0])[0])/Object.values(stats['XEM/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['NKN/USDT'].profit.push((((Object.values(stats['NKN/USDT'].asks[0].data[0])[0] - Object.values(stats['NKN/USDT'].bids[0].data[0])[0])/Object.values(stats['NKN/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['C98/USDT'].profit.push((((Object.values(stats['C98/USDT'].asks[0].data[0])[0] - Object.values(stats['C98/USDT'].bids[0].data[0])[0])/Object.values(stats['C98/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['FIL/USDT'].profit.push((((Object.values(stats['FIL/USDT'].asks[0].data[0])[0] - Object.values(stats['FIL/USDT'].bids[0].data[0])[0])/Object.values(stats['FIL/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['API3/USDT'].profit.push((((Object.values(stats['API3/USDT'].asks[0].data[0])[0] - Object.values(stats['API3/USDT'].bids[0].data[0])[0])/Object.values(stats['API3/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['GRT/USDT'].profit.push((((Object.values(stats['GRT/USDT'].asks[0].data[0])[0] - Object.values(stats['GRT/USDT'].bids[0].data[0])[0])/Object.values(stats['GRT/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['LRC/USDT'].profit.push((((Object.values(stats['LRC/USDT'].asks[0].data[0])[0] - Object.values(stats['LRC/USDT'].bids[0].data[0])[0])/Object.values(stats['LRC/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['GMT/USDT'].profit.push((((Object.values(stats['GMT/USDT'].asks[0].data[0])[0] - Object.values(stats['GMT/USDT'].bids[0].data[0])[0])/Object.values(stats['GMT/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['JASMY/USDT'].profit.push((((Object.values(stats['JASMY/USDT'].asks[0].data[0])[0] - Object.values(stats['JASMY/USDT'].bids[0].data[0])[0])/Object.values(stats['JASMY/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['COTI/USDT'].profit.push((((Object.values(stats['COTI/USDT'].asks[0].data[0])[0] - Object.values(stats['COTI/USDT'].bids[0].data[0])[0])/Object.values(stats['COTI/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['HBAR/USDT'].profit.push((((Object.values(stats['HBAR/USDT'].asks[0].data[0])[0] - Object.values(stats['HBAR/USDT'].bids[0].data[0])[0])/Object.values(stats['HBAR/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['KSM/USDT'].profit.push((((Object.values(stats['KSM/USDT'].asks[0].data[0])[0] - Object.values(stats['KSM/USDT'].bids[0].data[0])[0])/Object.values(stats['KSM/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ICP/USDT'].profit.push((((Object.values(stats['ICP/USDT'].asks[0].data[0])[0] - Object.values(stats['ICP/USDT'].bids[0].data[0])[0])/Object.values(stats['ICP/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['XRP/USDT'].profit.push((((Object.values(stats['XRP/USDT'].asks[0].data[0])[0] - Object.values(stats['XRP/USDT'].bids[0].data[0])[0])/Object.values(stats['XRP/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['BNB/USDT'].profit.push((((Object.values(stats['BNB/USDT'].asks[0].data[0])[0] - Object.values(stats['BNB/USDT'].bids[0].data[0])[0])/Object.values(stats['BNB/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['IOST/USDT'].profit.push((((Object.values(stats['IOST/USDT'].asks[0].data[0])[0] - Object.values(stats['IOST/USDT'].bids[0].data[0])[0])/Object.values(stats['IOST/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['NEO/USDT'].profit.push((((Object.values(stats['NEO/USDT'].asks[0].data[0])[0] - Object.values(stats['NEO/USDT'].bids[0].data[0])[0])/Object.values(stats['NEO/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['SAND/USDT'].profit.push((((Object.values(stats['SAND/USDT'].asks[0].data[0])[0] - Object.values(stats['SAND/USDT'].bids[0].data[0])[0])/Object.values(stats['SAND/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['SUSHI/USDT'].profit.push((((Object.values(stats['SUSHI/USDT'].asks[0].data[0])[0] - Object.values(stats['SUSHI/USDT'].bids[0].data[0])[0])/Object.values(stats['SUSHI/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['KAVA/USDT'].profit.push((((Object.values(stats['KAVA/USDT'].asks[0].data[0])[0] - Object.values(stats['KAVA/USDT'].bids[0].data[0])[0])/Object.values(stats['KAVA/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['VET/USDT'].profit.push((((Object.values(stats['VET/USDT'].asks[0].data[0])[0] - Object.values(stats['VET/USDT'].bids[0].data[0])[0])/Object.values(stats['VET/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['LINK/USDT'].profit.push((((Object.values(stats['LINK/USDT'].asks[0].data[0])[0] - Object.values(stats['LINK/USDT'].bids[0].data[0])[0])/Object.values(stats['LINK/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['CHR/USDT'].profit.push((((Object.values(stats['CHR/USDT'].asks[0].data[0])[0] - Object.values(stats['CHR/USDT'].bids[0].data[0])[0])/Object.values(stats['CHR/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['MKR/USDT'].profit.push((((Object.values(stats['MKR/USDT'].asks[0].data[0])[0] - Object.values(stats['MKR/USDT'].bids[0].data[0])[0])/Object.values(stats['MKR/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['YFII/USDT'].profit.push((((Object.values(stats['YFII/USDT'].asks[0].data[0])[0] - Object.values(stats['YFII/USDT'].bids[0].data[0])[0])/Object.values(stats['YFII/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['IOTX/USDT'].profit.push((((Object.values(stats['IOTX/USDT'].asks[0].data[0])[0] - Object.values(stats['IOTX/USDT'].bids[0].data[0])[0])/Object.values(stats['IOTX/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['BCH/USDT'].profit.push((((Object.values(stats['BCH/USDT'].asks[0].data[0])[0] - Object.values(stats['BCH/USDT'].bids[0].data[0])[0])/Object.values(stats['BCH/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['OP/USDT'].profit.push((((Object.values(stats['OP/USDT'].asks[0].data[0])[0] - Object.values(stats['OP/USDT'].bids[0].data[0])[0])/Object.values(stats['OP/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['IOTA/USDT'].profit.push((((Object.values(stats['IOTA/USDT'].asks[0].data[0])[0] - Object.values(stats['IOTA/USDT'].bids[0].data[0])[0])/Object.values(stats['IOTA/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['BAL/USDT'].profit.push((((Object.values(stats['BAL/USDT'].asks[0].data[0])[0] - Object.values(stats['BAL/USDT'].bids[0].data[0])[0])/Object.values(stats['BAL/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ONE/USDT'].profit.push((((Object.values(stats['ONE/USDT'].asks[0].data[0])[0] - Object.values(stats['ONE/USDT'].bids[0].data[0])[0])/Object.values(stats['ONE/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['YFI/USDT'].profit.push((((Object.values(stats['YFI/USDT'].asks[0].data[0])[0] - Object.values(stats['YFI/USDT'].bids[0].data[0])[0])/Object.values(stats['YFI/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['RSR/USDT'].profit.push((((Object.values(stats['RSR/USDT'].asks[0].data[0])[0] - Object.values(stats['RSR/USDT'].bids[0].data[0])[0])/Object.values(stats['RSR/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ONT/USDT'].profit.push((((Object.values(stats['ONT/USDT'].asks[0].data[0])[0] - Object.values(stats['ONT/USDT'].bids[0].data[0])[0])/Object.values(stats['ONT/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['DOT/USDT'].profit.push((((Object.values(stats['DOT/USDT'].asks[0].data[0])[0] - Object.values(stats['DOT/USDT'].bids[0].data[0])[0])/Object.values(stats['DOT/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['THETA/USDT'].profit.push((((Object.values(stats['THETA/USDT'].asks[0].data[0])[0] - Object.values(stats['THETA/USDT'].bids[0].data[0])[0])/Object.values(stats['THETA/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['IMX/USDT'].profit.push((((Object.values(stats['IMX/USDT'].asks[0].data[0])[0] - Object.values(stats['IMX/USDT'].bids[0].data[0])[0])/Object.values(stats['IMX/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['SOL/USDT'].profit.push((((Object.values(stats['SOL/USDT'].asks[0].data[0])[0] - Object.values(stats['SOL/USDT'].bids[0].data[0])[0])/Object.values(stats['SOL/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['EOS/USDT'].profit.push((((Object.values(stats['EOS/USDT'].asks[0].data[0])[0] - Object.values(stats['EOS/USDT'].bids[0].data[0])[0])/Object.values(stats['EOS/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['UNFI/USDT'].profit.push((((Object.values(stats['UNFI/USDT'].asks[0].data[0])[0] - Object.values(stats['UNFI/USDT'].bids[0].data[0])[0])/Object.values(stats['UNFI/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['RVN/USDT'].profit.push((((Object.values(stats['RVN/USDT'].asks[0].data[0])[0] - Object.values(stats['RVN/USDT'].bids[0].data[0])[0])/Object.values(stats['RVN/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['SRM/USDT'].profit.push((((Object.values(stats['SRM/USDT'].asks[0].data[0])[0] - Object.values(stats['SRM/USDT'].bids[0].data[0])[0])/Object.values(stats['SRM/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['CELO/USDT'].profit.push((((Object.values(stats['CELO/USDT'].asks[0].data[0])[0] - Object.values(stats['CELO/USDT'].bids[0].data[0])[0])/Object.values(stats['CELO/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['AXS/USDT'].profit.push((((Object.values(stats['AXS/USDT'].asks[0].data[0])[0] - Object.values(stats['AXS/USDT'].bids[0].data[0])[0])/Object.values(stats['AXS/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['CHZ/USDT'].profit.push((((Object.values(stats['CHZ/USDT'].asks[0].data[0])[0] - Object.values(stats['CHZ/USDT'].bids[0].data[0])[0])/Object.values(stats['CHZ/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['DYDX/USDT'].profit.push((((Object.values(stats['DYDX/USDT'].asks[0].data[0])[0] - Object.values(stats['DYDX/USDT'].bids[0].data[0])[0])/Object.values(stats['DYDX/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ZEN/USDT'].profit.push((((Object.values(stats['ZEN/USDT'].asks[0].data[0])[0] - Object.values(stats['ZEN/USDT'].bids[0].data[0])[0])/Object.values(stats['ZEN/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['MANA/USDT'].profit.push((((Object.values(stats['MANA/USDT'].asks[0].data[0])[0] - Object.values(stats['MANA/USDT'].bids[0].data[0])[0])/Object.values(stats['MANA/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['DASH/USDT'].profit.push((((Object.values(stats['DASH/USDT'].asks[0].data[0])[0] - Object.values(stats['DASH/USDT'].bids[0].data[0])[0])/Object.values(stats['DASH/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ADA/USDT'].profit.push((((Object.values(stats['ADA/USDT'].asks[0].data[0])[0] - Object.values(stats['ADA/USDT'].bids[0].data[0])[0])/Object.values(stats['ADA/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['PEOPLE/USDT'].profit.push((((Object.values(stats['PEOPLE/USDT'].asks[0].data[0])[0] - Object.values(stats['PEOPLE/USDT'].bids[0].data[0])[0])/Object.values(stats['PEOPLE/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['LPT/USDT'].profit.push((((Object.values(stats['LPT/USDT'].asks[0].data[0])[0] - Object.values(stats['LPT/USDT'].bids[0].data[0])[0])/Object.values(stats['LPT/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['BAT/USDT'].profit.push((((Object.values(stats['BAT/USDT'].asks[0].data[0])[0] - Object.values(stats['BAT/USDT'].bids[0].data[0])[0])/Object.values(stats['BAT/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ATOM/USDT'].profit.push((((Object.values(stats['ATOM/USDT'].asks[0].data[0])[0] - Object.values(stats['ATOM/USDT'].bids[0].data[0])[0])/Object.values(stats['ATOM/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ENJ/USDT'].profit.push((((Object.values(stats['ENJ/USDT'].asks[0].data[0])[0] - Object.values(stats['ENJ/USDT'].bids[0].data[0])[0])/Object.values(stats['ENJ/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['WOO/USDT'].profit.push((((Object.values(stats['WOO/USDT'].asks[0].data[0])[0] - Object.values(stats['WOO/USDT'].bids[0].data[0])[0])/Object.values(stats['WOO/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['SNX/USDT'].profit.push((((Object.values(stats['SNX/USDT'].asks[0].data[0])[0] - Object.values(stats['SNX/USDT'].bids[0].data[0])[0])/Object.values(stats['SNX/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['XTZ/USDT'].profit.push((((Object.values(stats['XTZ/USDT'].asks[0].data[0])[0] - Object.values(stats['XTZ/USDT'].bids[0].data[0])[0])/Object.values(stats['XTZ/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['AVAX/USDT'].profit.push((((Object.values(stats['AVAX/USDT'].asks[0].data[0])[0] - Object.values(stats['AVAX/USDT'].bids[0].data[0])[0])/Object.values(stats['AVAX/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['APE/USDT'].profit.push((((Object.values(stats['APE/USDT'].asks[0].data[0])[0] - Object.values(stats['APE/USDT'].bids[0].data[0])[0])/Object.values(stats['APE/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['DOGE/USDT'].profit.push((((Object.values(stats['DOGE/USDT'].asks[0].data[0])[0] - Object.values(stats['DOGE/USDT'].bids[0].data[0])[0])/Object.values(stats['DOGE/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['CVC/USDT'].profit.push((((Object.values(stats['CVC/USDT'].asks[0].data[0])[0] - Object.values(stats['CVC/USDT'].bids[0].data[0])[0])/Object.values(stats['CVC/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ZIL/USDT'].profit.push((((Object.values(stats['ZIL/USDT'].asks[0].data[0])[0] - Object.values(stats['ZIL/USDT'].bids[0].data[0])[0])/Object.values(stats['ZIL/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['STORJ/USDT'].profit.push((((Object.values(stats['STORJ/USDT'].asks[0].data[0])[0] - Object.values(stats['STORJ/USDT'].bids[0].data[0])[0])/Object.values(stats['STORJ/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['MASK/USDT'].profit.push((((Object.values(stats['REN/USDT'].asks[0].data[0])[0] - Object.values(stats['REN/USDT'].bids[0].data[0])[0])/Object.values(stats['REN/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ZRX/USDT'].profit.push((((Object.values(stats['ZRX/USDT'].asks[0].data[0])[0] - Object.values(stats['ZRX/USDT'].bids[0].data[0])[0])/Object.values(stats['ZRX/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['ARPA/USDT'].profit.push((((Object.values(stats['ARPA/USDT'].asks[0].data[0])[0] - Object.values(stats['ARPA/USDT'].bids[0].data[0])[0])/Object.values(stats['ARPA/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['NEAR/USDT'].profit.push((((Object.values(stats['NEAR/USDT'].asks[0].data[0])[0] - Object.values(stats['NEAR/USDT'].bids[0].data[0])[0])/Object.values(stats['NEAR/USDT'].bids[0].data[0])[0])*100).toFixed(3))
            stats['GALA/USDT'].profit.push((((Object.values(stats['GALA/USDT'].asks[0].data[0])[0] - Object.values(stats['GALA/USDT'].bids[0].data[0])[0])/Object.values(stats['GALA/USDT'].bids[0].data[0])[0])*100).toFixed(3))


            setData(Object.values(stats))
        }
    }, [loadingBinance, loadingFTX, loadingMEXC, loadingGateIo, loadingOkx])

    function refreshPage(){
        window.location.reload();
    } 

    return (
        <div className="container">
            <div className="table-card mt-5">
                <div className="table-card-body">
                    {loadingBinance || loadingFTX || loadingMEXC || loadingGateIo || loadingOkx ? 'Loading...' : (
                        <div>
                            <button onClick={refreshPage}>reload</button>
                            <Table data={data}/>
                        </div>
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
