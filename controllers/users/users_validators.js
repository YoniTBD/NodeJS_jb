const joi = require('joi');

const validator = joi.object({
    symbol: joi.string().required().min(3).max(5).alphanum().uppercase()
});

//a little test:
(async() => {
    const obj = {
        symbol: 'BTC'
    };

    const validated = await validator.validateAsync(obj);

    console.log(validated);
})();