import data from './../assets/data/products.json';

export default {
    getAll (cb) {
      setTimeout(() => cb(data.products), 100)
    },
    getLaptops(cb) {
        let laptops = [];
        data.products.forEach(product => {
            if(product.type === 'laptop') laptops.push(product);
        });
        setTimeout(() => cb(laptops), 100)
    },
    getPhones(cb) {
        let phones = [];
        data.products.forEach(product => {
            if(product.type === 'phone') phones.push(product);
        });
        setTimeout(() => cb(phones), 100)
    }
  }