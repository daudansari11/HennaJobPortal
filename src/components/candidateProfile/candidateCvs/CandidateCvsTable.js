function CandidateCvsTable() {
  return (
    <>
      <div className="pageTable">
        <form>
          <div className="row mb-3">
            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="lang" className="mb-1">
                <strong>Category</strong>
              </label>
              <select className="form-select">
                <option value="Adobe Illustrator">Category</option>
                <option value="Cold Calling">Advertising</option>
              </select>
            </div>

            <div className="form-group mb-3 col-xl-6 col-lg-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Chose File</strong>
              </label>
              <input
                className="form-control"
                placeholder="No File Chosen"
                type="file"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default CandidateCvsTable;
