import { FaUser } from "react-icons/fa"

function UserChart({indexs}) {
    return <div style={{ margin: "20px 0" }} className={indexs == 1 && 'extramarg'}>
        <div style={{ margin: "12px 0" }}>
            <div className="imgUss">
                <div className="imgsCharts"><FaUser />
                </div>
                <div style={{ margin: "0 8px", marginTop: "12px" }}>
                    <div style={{ fontFamily: "600px", fontSize: "18px" }}>Salman User 11:00 AM</div>
                    <div className="userMsg">Hi How Are Your Need To Do somthing ?</div>
                </div>
            </div>
        </div>
    </div>
}
export default UserChart