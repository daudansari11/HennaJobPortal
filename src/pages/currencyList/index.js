import CurrencyList from "../../components/currency/currencyList/CurrencyList";
import PageBar from "../../components/dashboard/page-bar/PageBar";

function CurrencyListpage() {
  return (
    <>
      <div className="pageWrapper">
        <PageBar title="Currency" />
        <h3 className="page-title">
          Manage Currency <small>Currency</small>
        </h3>
        <CurrencyList />
      </div>
    </>
  );
}

export default CurrencyListpage;
