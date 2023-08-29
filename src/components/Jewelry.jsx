import { LoadItems } from "./LoadItems";
import PropTypes from "prop-types";
export default function Jewelry({ handleAction }) {
    return <LoadItems category={"jewelery"} handleAction={handleAction} />;
}

Jewelry.propTypes = {
    handleAction: PropTypes.func,
};
