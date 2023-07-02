const { default: mongoose } = require('mongoose');
const axios = require('axios');
const cheerio = require('cheerio');
const { SymbolValue } = require('./models/mongo/symbol-value');

mogoose = require('mongoose');

const scrape = async(symbol) => {
    const html = await axios.get(`https://www.google.com/finance/quote/${symbol}-USD`);
    const $ = cheerio.load(html.data);
    const value = $('.YMlKec.fxKbKc').text().replace(',','');

    const symbolValue = new SymbolValue({
        symbol,
        timestamp: new Date(),
        value
    });
    await symbolValue.save();    
};

async () =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mymongo');

        // Get the symbols

        setInterval(() => {scrape('BTC')}, 1000);

    }catch(err){
        console.log(err);
    }
    
}
