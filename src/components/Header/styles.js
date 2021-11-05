import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        height: 60,
        top: 0,

        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
    },

    header_right: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
    },

    header_avata: {
        width: 35,
        height: 35,
    },

    header_left: {
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(1),
    },

    header_comeback: {
        transform: "rotate(180deg)",
    },
}));
