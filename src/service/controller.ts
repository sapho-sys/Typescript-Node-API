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
export const findAll = async ():Promise<any> => {
    const result = (await Client).query('SELECT * FROM shoes WHERE in_stock > 0');
    return result ? result : [];
}
//find all shoe brands in my Database
export const findBrand = async (brand:string) =>{
    const result = (await Client).query(`SELECT * FROM shoes WHERE
     brand = $1 AND in_stock > 0`, [brand]);
     return result ? result : [];
}



