import './Transactions.css'
export default function Transactions() {
  const data = [
    {
      type: "واریز",
      amount: "31,440,000",
      date: "1403/02/06 - 21:15",
      status: "موفق",
    },
    {
      type: "برداشت",
      amount: "39,110,000",
      date: "1403/02/06 - 15:13",
      status: "موفق",
    },
    {
      type: "برداشت",
      amount: "192,350,000",
      date: "1403/02/03 - 12:12",
      status: "ناموفق",
    },
  ];

  return (
    <div className="table">
      <div className="header-table">
        <h2>تراکنش‌های اخیر</h2>
        <a href="#">مشاهده بیشتر</a>
      </div>

      <div className="transaction">
        <table>
          <thead>
            <tr>
              <th>نوع تراکنش</th>
              <th>مبلغ</th>
              <th>تاریخ</th>
              <th>وضعیت</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr
                key={i}
                className=""
              >
                <td>{row.type}</td>
                <td>{row.amount} ریال</td>
                <td>{row.date}</td>
                <td>
                  {row.status === "موفق" ? (
                    <span className="true">
                      موفق
                    </span>
                  ) : (
                    <span className="false">
                      ناموفق
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}