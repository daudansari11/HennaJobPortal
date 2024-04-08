import { FaUser } from "react-icons/fa"

function AdminReply() {
    return <div className="adminChart">
        <div style={{ margin: "12px 0" }}>
            <div className="imgUss">

                <div style={{ margin: "0 8px", marginTop: "12px" }}>
                    <div style={{ fontFamily: "600px", fontSize: "18px", display: "flex", justifyContent: "end" }}>Admin 11:23 AM</div>
                    <div className="userMsg">Hi How Are you?</div>
                </div>
                <div className="imgsCharts"><FaUser />
                </div>
            </div>
        </div>
    </div>
}
export default AdminReply