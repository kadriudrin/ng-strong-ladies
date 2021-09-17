import ProductInfo from '../product/product_info.model';
import AddressInfo from './address_info.model';
import ContactInfo from './contact_info.model';

export default class Order {
    public id = -1;
    public products: ProductInfo[] = [];
    public ship_method = -1;
    public address_info: AddressInfo = {
        zip: '',
        city: '',
        state: '',
        country: '',
        street1: '',
        street2: '',
    };
    public contact_info: ContactInfo = {
        name: '',
        email: '',
        phone: '',
    };
}
