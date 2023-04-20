import { Address } from "../../entities";
import { addressRepository } from "../../repositories";

const retrieveAddressService = async (id: string): Promise<Address> => {
    const address = await addressRepository.findOne({
        where: { id }
    });

    return address!;
};

export default retrieveAddressService;
