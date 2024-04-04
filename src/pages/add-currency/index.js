import React from "react";
import AddCurrency from "../../components/currency/add-currency/addCurrency";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function AddnewCurrencyPage() {
  return (
    <div className="pageWrapper">
      <PageBar title="Add Currency" />
      <AddCurrency />
    </div>
  );
}

export default AddnewCurrencyPage;
