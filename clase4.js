const fs = require('fs');

class Container{
    constructor(file){
        this.file = file
    }

    async save(product, price){
        try {

            const content = await fs.promises.readFile(this.file, 'utf-8')

            let products = JSON.parse(content);

            let id = products.length + 1;

            let producto = {
                id: id,
                product: product,
                price: price
            }

            console.log(id);
            
            products.push(producto)
            
            await fs.promises.writeFile(this.file , JSON.stringify(products))

        } catch (error) {
            console.log(error);
        }
    }

    async getById(id){        
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8')
            let products = JSON.parse(content);
            
            let element = products.find(element => element.id === id)

            console.log(element);

        } catch (error) {
            console.log(error);
        }
    }

    async getAll(){
    
        try {            
            const content = await fs.promises.readFile(this.file, 'utf-8')
            let products = JSON.parse(content);
            return products

        } catch (error) {
            console.log(error);
        }
    }

    async deleteById(id){    
        try {
            const content = await fs.promises.readFile(this.file, 'utf-8')
            let products = JSON.parse(content);
            
            let element = products.filter(element => element.id !== id)

            console.log(element);

            await fs.promises.writeFile(this.file , JSON.stringify(element))
            

        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll(){
        
        try {
            
            await fs.promises.writeFile(this.file, '[]')

        } catch (error) {
            console.log(error);
        }
    }

    async deleteAll(){
        
        try {
            
            await fs.promises.writeFile(this.file, '[]')

        } catch (error) {
            console.log(error);
        }
    }

    async random() {

        let products = await this.getAll()

        let rnd = (parseInt(Math.random() * (products.length)))

        return (products[rnd]);
    }


}

const archivo1 = new Container('./products.json')

const main = async () => {

    await archivo1.save('monitor', 2000);
    await archivo1.save('keyboard', 500);
    await archivo1.save('mouse', 200);
    await archivo1.save('altavoz', 100);
    await archivo1.save('box', 50);
    await archivo1.save('joystick', 300);

    await archivo1.getById(1);
    console.log(await archivo1.getAll());
}

module.exports = Container;