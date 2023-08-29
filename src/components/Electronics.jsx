import { LoadItems } from "./LoadItems";
import PropTypes from "prop-types";

export default function Electronics({ handleAction }) {
    return <LoadItems category={"electronics"} cartFunction={handleAction} />;
}

Electronics.propTypes = {
    handleAction: PropTypes.func,
};
