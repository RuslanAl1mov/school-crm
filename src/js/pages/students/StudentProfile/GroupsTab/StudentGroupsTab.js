import icons from "./../../../../../img/icons/icons.svg";
import StudentGroupCard from "./StudentGroupCard/StudentGroupCard";
import StudentNoGroupCard from "./StudentGroupCard/StudentNoGroupCard";

const StudentGroupsTab = ({ studentData }) => {
    return (
        <div>
            {/* Список групп студента */}
            <div className="student-groups-list">

                { studentData?.groups?.length > 0 ?
                studentData?.groups?.map((groupData) => (
                    <StudentGroupCard groupData={groupData} />
                )) : (
                    <StudentNoGroupCard />
                 )
                }
                
            </div >

            {/* Заголовок месячного баланса*/}
            < h1 className="title-text" > Статус баланса за месяц</h1 >

            {/* Блок статуса баланса за месяц */}
            < div className="month-balance" >
                <div className="month-balance-content">

                    <div className="balance-block positive-balance">
                        <div className="month-balance-date">2024 M10 1</div>
                        <div className="month-balance-sum">105,000</div>
                    </div>

                    <div className="balance-block negative-balance">
                        <div className="month-balance-date">2024 M09 1</div>
                        <div className="month-balance-sum">-135,000</div>
                    </div>

                </div>
            </div >

            {/* Заголовок истории оплаты*/}
            < h1 className="title-text" > Платежи</h1 >


            {/* Блок "Платежи" */}
            < div className="student-payments" >
                <div className="student-payments-content">
                    <table className="payments-table">
                        <tbody>
                            <tr>
                                <th className="payments-table-th" aria-colindex={1}>Дата</th>
                                <th className="payments-table-th" aria-colindex={2}>Тип</th>
                                <th className="payments-table-th" aria-colindex={3}>Сумма</th>
                                <th className="payments-table-th" aria-colindex={4}>Комментарии</th>
                                <th className="payments-table-th" aria-colindex={5}>Сотрудник</th>
                                <th className="payments-table-th" aria-colindex={6}></th>
                            </tr>

                            <tr className="payment-table-tr--grey">
                                <td className="payment-table-td"><div className="td-payment-date">05.10.2024</div></td>
                                <td className="payment-table-td"><div className="td-payment-staus-block"><div className="td-payment-staus td-payment-staus--positive">оплата</div></div></td>
                                <td className="payment-table-td"><div><span className="td-payment-sum td-payment-sum--positive">+690 000</span> UZS</div></td>
                                <td className="payment-table-td">
                                    <div className="group-name-block"><p className="group-name-gray-bg group-name-darkgray-bg">IELTS05</p>&nbsp;3 ур.</div>
                                    <div className="td-payment-comment-grey">24.09.2024—31.10.2024</div>
                                </td>
                                <td className="payment-table-td">
                                    <div className="td-payment-comment">admin</div>
                                    <div className="td-payment-comment-grey">05.10.2024 16:59:47</div>
                                </td>
                                <td className="payment-table-td">
                                    <div className="multibutton-block-flex multibutton-blue payment-multibutton-table-td">
                                        <div className="multibutton">
                                            <div className="multibutton-block">
                                                <svg>
                                                    <use href={`${icons}#printer`}></use>
                                                </svg>
                                                <p className="multibutton-block-text">
                                                    Распечатать
                                                </p>
                                            </div>
                                            <div className="triangle-block">
                                                <div className="multibutton-triangle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="">
                                <td className="payment-table-td"><div className="td-payment-date">05.10.2024</div></td>
                                <td className="payment-table-td"><div className="td-payment-staus-block"><div className="td-payment-staus">система</div></div></td>
                                <td className="payment-table-td"><div><span className="td-payment-sum">-125 000</span> UZS</div></td>
                                <td className="payment-table-td">
                                    <div className="group-name-block"><p className="group-name-gray-bg group-name-darkgray-bg">IELTS05</p>&nbsp;3 ур.</div>
                                    <div className="td-payment-comment-grey">24.09.2024—31.10.2024</div>
                                </td>
                                <td className="payment-table-td">
                                    <div className="td-payment-comment">admin</div>
                                    <div className="td-payment-comment-grey">05.10.2024 16:59:47</div>
                                </td>
                                <td className="payment-table-td">
                                    <div className="multibutton-block-flex multibutton-blue payment-multibutton-table-td">
                                        <div className="multibutton">
                                            <div className="multibutton-block">
                                                <svg>
                                                    <use href={`${icons}#printer`}></use>
                                                </svg>
                                                <p className="multibutton-block-text">
                                                    Распечатать
                                                </p>
                                            </div>
                                            <div className="triangle-block">
                                                <div className="multibutton-triangle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>

                            <tr className="payment-table-tr--grey">
                                <td className="payment-table-td"><div className="td-payment-date">05.10.2024</div></td>
                                <td className="payment-table-td"><div className="td-payment-staus-block"><div className="td-payment-staus">система</div></div></td>
                                <td className="payment-table-td"><div><span className="td-payment-sum">-60 000</span> UZS</div></td>
                                <td className="payment-table-td">
                                    <div className="group-name-block"><p className="group-name-gray-bg group-name-darkgray-bg">IELTS05</p>&nbsp;3 ур.</div>
                                    <div className="td-payment-comment-grey">24.09.2024—31.10.2024</div>
                                </td>
                                <td className="payment-table-td">
                                    <div className="td-payment-comment">admin</div>
                                    <div className="td-payment-comment-grey">05.10.2024 16:59:47</div>
                                </td>
                                <td className="payment-table-td">
                                    <div className="multibutton-block-flex multibutton-blue payment-multibutton-table-td">
                                        <div className="multibutton">
                                            <div className="multibutton-block">
                                                <svg>
                                                    <use href={`${icons}#printer`}></use>
                                                </svg>
                                                <p className="multibutton-block-text">
                                                    Распечатать
                                                </p>
                                            </div>
                                            <div className="triangle-block">
                                                <div className="multibutton-triangle"></div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default StudentGroupsTab;