import Skeleton from "../../loader/Skeleton";

const GroupBlockInfoSkeleton = () => {
    return (
            <div className="prof-profile-info-bl" id="GroupBlockInfoSkeleton">
                <div className="prof-profile-group-info-bl">
                    <div className="gr-info-cnt-bl">
                        <div className="gr-inf-cnt-gr-num"><Skeleton width="100%" height="20px" rx={10} ry={10} /></div>
                    </div>
                    <div className="gr-info-cnt-bl">
                        <div className="gr-inf-cnt-gr-name"><Skeleton width="100%" height="20px" rx={10} ry={10} /></div>
                    </div>
                    <div className="gr-info-cnt-bl">
                        <div className="gr-inf-cnt-gr-title"><Skeleton width="100%" height="20px" rx={10} ry={10} /></div>
                    </div>
                    <div className="gr-info-cnt-bl">
                        <div className="gr-inf-cnt-gr-title"><Skeleton width="100%" height="20px" rx={10} ry={10} /></div>
                    </div>
                    <div className="gr-info-line-split"></div>
                    <div className="gr-info-stud-list-bl">

                        <div className="gr-info-stud-list-item">
                            <div className="info-stud-item-name-bl">
                                <a href="#" className="info-stud-item-name"><Skeleton width="100%" height="20px" rx={10} ry={10} /></a>
                            </div>
                            <p href="#" className="info-stud-item-ph"><Skeleton width="100%" height="20px" rx={10} ry={10} /></p>
                        </div>

                        <div className="gr-info-stud-list-item">
                            <div className="info-stud-item-name-bl">
                                <a href="#" className="info-stud-item-name"><Skeleton width="100%" height="20px" rx={10} ry={10} /></a>
                            </div>
                            <p href="#" className="info-stud-item-ph"><Skeleton width="100%" height="20px" rx={10} ry={10} /></p>
                        </div>

                        <div className="gr-info-stud-list-item">
                            <div className="info-stud-item-name-bl">
                                <a href="#" className="info-stud-item-name"><Skeleton width="100%" height="20px" rx={10} ry={10} /></a>
                            </div>
                            <p href="#" className="info-stud-item-ph"><Skeleton width="100%" height="20px" rx={10} ry={10} /></p>
                        </div>

                    </div>

                    <div className="gr-info-cnt-bl">
                        <a href="#" className="go-to-link"><Skeleton width="100%" height="20px" rx={10} ry={10} /></a>
                    </div>

                </div>
            </div>
    );
}

export default GroupBlockInfoSkeleton;