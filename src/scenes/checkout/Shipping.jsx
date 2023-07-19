import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import AddressForm from "./AddressForm";

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    setFieldValue,
}) => {
    return (
        <Box m="30px auto">
            {/* BILLING FORM */}
            <Typography sx={{ mb: "15px" }} fontSize="18px">
                Billing Information
            </Typography>
            <AddressForm
                type="billingAddress"
                values={values.billingAddress} // address from schema
                errors={errors} // error text in validation schema "required"
                touched={touched} // check whether someone has clicked on the field
                handleBlur={handleBlur} // function for onclick
                handleChange={handleChange} // value change function
            />

            <Box mb="20px">
                <FormControlLabel
                    label="Same for Shipping Address"
                    control={
                    <Checkbox
                        defaultChecked
                        values={values.shippingAddress.isSameAddress}
                        onChange={() =>
                            setFieldValue(
                                "shippingAddress.isSameAddress",
                                !values.shippingAddress.isSameAddress
                            )
                        }
                    />
                    }   
                />
            </Box>

            {/* SHIPPING FORM */}
            {!values.shippingAddress.isSameAddress && (
                <Box>
                    <Typography>
                        Shipping Information
                    </Typography>
                    <AddressForm
                        type="shippingAddress"
                        values={values.shippingAddress} // address from schema
                        errors={errors} // error text in validation schema "required"
                        touched={touched} // check whether someone has clicked on the field
                        handleBlur={handleBlur} // function for onclick
                        handleChange={handleChange} // value change function
                    />
                </Box>
                
            )}
        </Box>
    )
};

export default Shipping;