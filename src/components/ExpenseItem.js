import "../assets/scss/ExpenseItem.scss";

function ExpenseItem() {
    const expenseDate = new Date(2023, 5, 5);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 100;

    const formattedDate = expenseDate.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

    return (
        <div className="expense-item">
            <div>{formattedDate}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;