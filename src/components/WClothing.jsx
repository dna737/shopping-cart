import PropTypes from "prop-types";
import { LoadItems } from "./LoadItems";

export default function WClothing({ handleAction }) {
    return (
        <LoadItems category={"women's clothing"} cartFunction={handleAction} />
    );
}

WClothing.propTypes = {
    handleAction: PropTypes.func,
};
