import pg from '../dbconfig/dbconfig';

const Client = pg.connect();

interface Client {
    brand: string;
    color:string;
    size: number;
    price:number;
    in_stock: number;
};

interface ItemID extends Client{
    id: number;
};
//find all shoes in my Database
export const findAll = async ():Promise<Object> => {
    const result = (await Client).query('SELECT * FROM shoes WHERE in_stock > 0');
    return result ? result : [];
}

//find specific shoe brands in my Database
export const findBrand = async (brand:string):Promise<any> =>{
    try {
        const result = (await Client).query(`SELECT * from shoes WHERE brand = $1`,[brand]);
        return result ? result : [];
    } catch (error) {
        console.log('Here is the issue', error)
    }
}

//find specific color of shoes in my Database
export const findColor = async (color:string):Promise<any> =>{
    try {
        const result = (await Client).query(`SELECT * FROM shoes WHERE color = $1`, [color]);
        return result ? result : [];
    } catch (error) {
        console.log('Here is the issue', error);
    }
}
// find specific size of shoes in my Database
export const findSize = async (size:number):Promise<any> =>{
    try {
        const result = (await Client).query('SELECT * FROM shoes WHERE size = $1', [size]);
        return result ? result : [];  
    } catch (error) {
        console.log('Here is the issue', error);
    }
}
//insert new shoe brand
export const  insertBrand = async (brand:string, color: string, size:number, price:number):Promise<any> =>{
    try {
        const result = (await Client).query('INSERT INTO shoes (brand, color, size, price) VALUES ($1, $2, $3, $4)', [brand, color, size, price]);
    } catch (error) {
        console.log('Here is the issue', error);
    }
}






