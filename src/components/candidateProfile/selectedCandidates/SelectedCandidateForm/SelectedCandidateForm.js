
function SelectedCandidateForm() {
  return (
    <>
      <div className="pageTable">
        <form>
          <div className="row mb-3">
            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Name</strong>
              </label>
              <input className="form-control" placeholder="Name" type="text" />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="lang" className="mb-1">
                <strong>Category</strong>
              </label>
              <select className="form-select">
                <option value="Adobe Illustrator">Category</option>
                <option value="Cold Calling">Advertising</option>
              </select>
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Company Name</strong>
              </label>
              <input
                className="form-control"
                placeholder="Company Name"
                type="text"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Mobile 1</strong>
              </label>
              <input
                className="form-control"
                placeholder="+91 8294 787277"
                type="number"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Mobile 2</strong>
              </label>
              <input
                className="form-control"
                placeholder="+91 9294 787252"
                type="number"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Mofa No</strong>
              </label>
              <input className="form-control" placeholder="" type="text" />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Visa No</strong>
              </label>
              <input
                className="form-control"
                placeholder="Visa No"
                type="Number"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Passport No</strong>
              </label>
              <input
                className="form-control"
                placeholder="Passport Number"
                type="text"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Flight Date</strong>
              </label>
              <input
                className="form-control"
                placeholder="Flight Date"
                type="date"
              />
            </div>
            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Madical Status</strong>
              </label>
              <input
                className="form-control"
                placeholder="Madical Status"
                type="text"
              />
            </div>
            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Employee Name</strong>
              </label>
              <input
                className="form-control"
                placeholder="Employee Name"
                type="text"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Service Charge</strong>
              </label>
              <input
                className="form-control"
                placeholder="Service Charge"
                type="text"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Upload Passport Photo</strong>
              </label>
              <input
                className="form-control"
                placeholder="No File Chosen"
                type="file"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Upload Agreement</strong>
              </label>
              <input
                className="form-control"
                placeholder="No File Chosen"
                type="file"
              />
            </div>

            <div className="form-group mb-3 col-xl-3 col-lg-3 col-md-6">
              <label htmlFor="language_level" className="mb-1">
                <strong>Upload Video</strong>
              </label>
              <input
                className="form-control"
                placeholder="No File Chosen"
                type="file"
              />
            </div>

            {/* <div className="form-group mb-3 ">
              <label htmlFor="is_default">
                <strong>Is Active?</strong>
              </label>

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  defaultChecked
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  Yes
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  No
                </label>
              </div>
            </div> */}
          </div>
        </form>
      </div>
    </>
  );
}
export default SelectedCandidateForm;
