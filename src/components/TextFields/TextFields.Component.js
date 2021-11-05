import { withStyles } from "@material-ui/core";
import TextFields from "@material-ui/core/TextField";

import React from "react";
import theme from "../../theme/default";

const ValidationTextField = withStyles({
    root: {
        width: 350,

        "& label.Mui-focused": {
            color: theme.palette.primary.main,
        },

        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#fff",
            },
            "&:hover fieldset": {
                borderColor: theme.palette.primary.main,
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
            },
            "& input:focus + fieldset": {
                borderLeftWidth: 6,
                padding: "4px !important",
            },
        },
    },
})(TextFields);

export function TextFieldDefault({ type, placeholder, value }) {
    return (
        <ValidationTextField
            fullWidth
            variant="outlined"
            type={type}
            placeholder={placeholder}
            value={value}
            //onChange={(e) => setUserEmail(e.target.value)}
        />
    );
}
