import { makeStyles } from "@material-ui/styles";

export default makeStyles((theme) => ({
    header: {
        display: "flex",
        justifyContent: "space-between",
        height: 60,
        top: 0,

        paddingLeft: theme.spacing(4),
        paddingRight: theme.spacing(4),
        backgroundColor: "rgba(0,0,0,0)",
    },

    header_right: {
        display: "flex",
        flex: 1,
        justifyContent: "right",
        alignItems: "center",
        gap: theme.spacing(1),
    },

    header_avata: {
        width: 35,
        height: 35,
    },

    header_center: {
        display: "flex",
        flex: 1,

        justifyContent: "center",
        alignItems: "center",
    },

    header_search: {
        display: "flex",
        flex: 1,

        backgroundColor: "white",
        padding: 10,
        borderRadius: 30,
        color: "gray",

        "& input": {
            border: "none",
            width: "100%",
        },
    },

    header_left: {
        display: "flex",
        flex: 1,
        justifyContent: "left",
        alignItems: "center",
        gap: theme.spacing(1),
    },

    header_comeback: {
        transform: "rotate(180deg)",
    },
}));
