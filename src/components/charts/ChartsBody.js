import { FcCallback } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { FcRefresh } from "react-icons/fc";

import { FcVideoCall } from "react-icons/fc";
import UserChart from "./UserChart";
import AdminReply from "./AdminReply";

function ChartsBody() {
    return <div style={{ margin: "8px", height: "600px", overflow: "auto" }}>
        <div className="d-flex justify-content-between maincalland" style={{ borderBottom: "1px solid gray", padding: "8px 0" }}>
            <div className="imgUs">
                <div className="imgsChart"><FaUser />
                </div>
                <h5 style={{ margin: "0 8px" }}>Salman User</h5>
            </div>
            <div className="callicon">
                <FcRefresh />
                <FcCallback style={{ margin: "0 20px" }} />
                <FcVideoCall />
            </div>
        </div>
        <UserChart indexs={1} />
        <AdminReply />
        <UserChart />
        <AdminReply />
        <UserChart />
        <AdminReply />
        <UserChart />
        <AdminReply />
        <UserChart />
        <AdminReply />
    </div>
}
export default ChartsBody