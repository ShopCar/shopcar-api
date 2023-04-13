import { IAddressUpdate } from "../../interfaces/addresses";
import { addressRepository } from "../../repositories";
import { Address } from "../../entities";

const updateAddressService = async (
    data: IAddressUpdate,
    addressId: string
): Promise<Address> => {

    const getAddress = await addressRepository.findOneBy({id: addressId})
    
    if(data.zipCode){
        getAddress!.zipCode = data.zipCode
    }
    if(data.state){
        getAddress!.state = data.state
    }
    if(data.city){
        getAddress!.city = data.city
    }
    if(data.district){
        getAddress!.district = data.district
    }
    if(data.street){
        getAddress!.street = data.street
    }
    if(data.number){
        getAddress!.number = data.number
    }
    if(data.complement){
        getAddress!.complement = data.complement
    }

    const address = await addressRepository.save(getAddress!);

    return address;
};

export default updateAddressService;

