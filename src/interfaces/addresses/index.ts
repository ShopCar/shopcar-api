import { z } from "zod";
import {
    addressRequestSchema,
    addressUpdateSchema,
} from "../../schemas/addresses/";

export { IAddressRequest, IAddressUpdate };

type IAddressRequest = z.infer<typeof addressRequestSchema>;

type IAddressUpdate = z.infer<typeof addressUpdateSchema>;
