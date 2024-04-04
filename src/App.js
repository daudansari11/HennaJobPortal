import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/common/header/Header";
import AdminPage from "./pages/admin";
import HomePage from "./pages/home";

import AddLanguageLevelPage from "./pages/add-language-level";
import LangLevelsPage from "./pages/list-lang-levels";
import SortLanguageLevelsPage from "./pages/sort-language-levels-page";
import CareerLevelsPage from "./pages/career-levels";
import CreateCareerLevelPage from "./pages/create-career-level";
import SortCareerLevelsPage from "./pages/sort-career-levels";
import FunctionalAreasPage from "./pages/functional-areas";
import CreateFunctionAreaPage from "./pages/create-function-area";
import GendersPage from "./pages/genders";

import CreateGenderPage from "./pages/create-gender";
import SortGenderPage from "./pages/sort-genders";
import DegreeLevelsPage from "./pages/degree-levels";
import CreateDegreeLevelPage from "./pages/create-degree-level-page";
import DegreeTypesPage from "./pages/degree-types";
import CreateDegreeTypePage from "./pages/create-degree-type";
import MajorSubjectsPage from "./pages/major-subjects";
import CreateMajorSubjectsPage from "./pages/create-major-subject";
import SortMajorSubjectsPage from "./pages/sort-major-subjects";
import ResultTypesPage from "./pages/result-types";
import CreateResultTypePage from "./pages/create-result-type";
import SortResultTypesPage from "./pages/sort-result-types";
import MaritalStatusPage from "./pages/marital-status";
import CreateMaritalStatusPage from "./pages/create-marital-status";
import SortMaritalStatusPage from "./pages/sort-marital-status";
import OwnershipTypesPage from "./pages/list-ownership-types";
import CreateOwnershipTypePage from "./pages/create-ownership-type";
import SortOwnershipTypesPage from "./pages/sort-ownership-types";
import SalaryPeriodsPage from "./pages/salary-periods";
import CreateSalaryPeriodPage from "./pages/create-salary-period";
import SortSalaryPeriodsPage from "./pages/sort-salary-periods";
import EditLanguageLevelPage from "./pages/edit-language-level";
import EditCareerLevelPage from "./pages/edit-career-level";
import JobsPage from "./pages/list-jobs";
import CreateJobPage from "./pages/create-job";
import CompaniesPage from "./pages/list-companies";
import CreateCompanyPage from "./pages/create-company";
import ListPaymentHistoryPage from "./pages/list-payment-history";
import ListIndustriesPage from "./pages/list-industries";
import AddNewIndustryPage from "./pages/add-new-industries";
import SortIndustriesPage from "./pages/sortIndustries";
import ListJobExperiencesPage from "./pages/list-job-experiences";
import AddNewJobExperiencesPage from "./pages/add-new-jobExperiences";
import SortJobExperincesPage from "./pages/sort-jobExperiences";
import ListJobSkillsPage from "./pages/list-jobSkills";
import AddNewJobSkillsPage from "./pages/add-new-jobSkills";
import SortjobSkillsPage from "./pages/sort-jobSkills";
import ListJobTypesPage from "./pages/listJobType";
import AddNewJobTypesPage from "./pages/addNew-jobTypes";
import SortJobTypesPage from "./pages/sort-jobType";
import ListJobShiftsPage from "./pages/list-jobShifts";
import AddNewJobShiftsPage from "./pages/addNew-jobShift";
import SortJobShiftsPage from "./pages/sortJobShifts";
import ListLanguagePage from "./pages/list-languages";
import AddNewLanguagePage from "./pages/add-new-language";
import AddNewUserProfilePage from "./pages/add-new-UserProfile";
import ListUsersPage from "./pages/list-users";
import ListCMSPages from "./pages/list-CMS-Pages";
import AddNewCMSPages from "./pages/addNew-CMS-Pages";
import ListTranslatedPage from "./pages/listTranslated";
import AddNewTranslatePage from "./pages/addNew-translatePage";
import SiteSettingsPage from "./pages/site-settings";
import SeoListPage from "./pages/SEO-listPage";
import EditSeo from "./components/SEO/editSeo/EditSeo";
import ListFaqsPage from "./pages/listFaqs";
import AddNewFaqPage from "./pages/add-new-faq";
import SortFaqsPage from "./pages/sort-faqs";
import ListBlogsPage from "./pages/list-Blogs";
import AddBlogPage from "./pages/addBlog";
import BlogCategoriesPage from "./pages/blogCategories";
import ListVideoLanguagePage from "./pages/list-videoLanguage";
import AddNewVideoLanguagePage from "./pages/add-new-videoLanguage";
import ListTestimonialsPage from "./pages/list-testimonials";
import AddNewTestimonialPage from "./pages/add-new-testimonial";
import SortTestimonialPage from "./pages/sort-testimonial";
import ListSliderPage from "./pages/listSlider";
import AddNewSliderPage from "./pages/add-new-slider";
import SortSliderPage from "./pages/sort-slider";
import ListPackagespage from "./pages/list-packages";
import AddNewPackagePage from "./pages/add-new-package";
import ListCountriesPage from "./pages/listCountries";
import AddNewCountryPage from "./pages/add-new-country";
import CountryDetailsPage from "./pages/countryDetails";
import ListStatesPage from "./pages/listStates";
import AddNewStatePage from "./pages/add-newState";
import ListCitiesPage from "./pages/list-cities";
import AddNewCityPage from "./pages/add-new-city";
import AddAdminUserPage from "./pages/addAdmin-user";
import ListAllAdminUsersPage from "./pages/listAllAdminUsers";
import CandidateListPage from "./pages/candidate-list";
import AddCandidatePage from "./pages/add-candidate";
import CategoryListPage from "./pages/category-list";
import AddCategoryPage from "./pages/add-category";
import CandidateCvsPage from "./pages/candidateCvs";
import SelectedCandidatePage from "./pages/selectedCandidate";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import EditCandidatePage from "./pages/editCandidate";
import "react-toastify/dist/ReactToastify.css";
import LocationListPage from "./pages/location-list";
import AddLocationPage from "./pages/addLocation";
import SelectedCandidateListPage from "./pages/selectedCandidate-list";

function App() {
  const [sidebarActive, setSidebarActive] = useState(true);

  return (
    <>
      <Header data={{ sidebarActive, setSidebarActive }} />

      <Routes>
        {/* <Route path="/register" element={<RegisterPage />} /> */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="/admin"
          element={<AdminPage sidebarActive={sidebarActive} setSidebarActive={setSidebarActive} />}
        >
          <Route path="" element={<HomePage />}></Route>

          {/* ---admin-users-- */}
          {/* ---admin-users-- */}
          {/* ---admin-users-- */}
          <Route
            path="list-admin-users"
            element={<ListAllAdminUsersPage />}
          ></Route>
          <Route
            path="create-admin-user"
            element={<AddAdminUserPage />}
          ></Route>
          <Route
            path="list-admin-users/edit/:id"
            element={<AddAdminUserPage />}
          ></Route>

          {/* module */}
          {/* Jobs */}
          <Route path="list-jobs" element={<JobsPage />}></Route>
          <Route path="create-job" element={<CreateJobPage />}></Route>
          <Route path="create-job/:id" element={<CreateJobPage />}></Route>

          {/* Companies */}
          <Route path="list-companies" element={<CompaniesPage />}></Route>
          <Route path="create-company" element={<CreateCompanyPage />}></Route>
          <Route
            path="list-payment-history"
            element={<ListPaymentHistoryPage />}
          ></Route>

          {/*--------Candidates---------  */}
          {/*--------Candidates---------  */}
          {/*--------Candidates---------  */}
          <Route path="candidate-list" element={<CandidateListPage />} />
          <Route path="add-candidate" element={<AddCandidatePage />} />
          <Route
            path="candidate-list/edit/:id"
            element={<EditCandidatePage />}
          />

          <Route path="candidate-CVS" element={<CandidateCvsPage />} />

          {/* ---selected--candidate--- */}
          {/* ---selected--candidate--- */}
          <Route
            path="selected-candidate-list"
            element={<SelectedCandidateListPage />}
          />
          <Route
            path="selected-candidate"
            element={<SelectedCandidatePage />}
          />

          {/* -----category---- */}
          {/* -----category---- */}
          {/* -----category---- */}
          <Route path="category-list" element={<CategoryListPage />} />
          <Route path="add-category" element={<AddCategoryPage />} />
          <Route path="edit-category/:id" element={<AddCategoryPage />} />

          {/* -----location--- */}
          <Route path="location-list" element={<LocationListPage />} />
          <Route path="add-location" element={<AddLocationPage />} />
          <Route path="edit-location/:id" element={<AddLocationPage />} />

          {/* Users-profile*/}
          {/* <Route path="list-users" element={<ListUsersPage />}></Route>
          <Route path="create-user" element={<AddNewUserProfilePage />}></Route> */}

          {/* --C.M.S-- */}
          <Route path="list-cms" element={<ListCMSPages />}></Route>
          <Route path="create-cms" element={<AddNewCMSPages />}></Route>
          <Route
            path="list-cmsContent"
            element={<ListTranslatedPage />}
          ></Route>
          <Route
            path="create-cmsContent"
            element={<AddNewTranslatePage />}
          ></Route>

          {/* ----Manage-Blogs */}
          <Route path="blog-list" element={<ListBlogsPage />}></Route>
          <Route path="add-new-blog" element={<AddBlogPage />}></Route>
          <Route path="blog_category" element={<BlogCategoriesPage />}></Route>

          {/* --S.E.O--- */}
          <Route path="list-seo" element={<SeoListPage />}></Route>
          <Route path="edit-seo/6" element={<EditSeo />}></Route>

          {/* ---FAQS */}
          <Route path="list-faqs" element={<ListFaqsPage />}></Route>
          <Route path="create-faq" element={<AddNewFaqPage />}></Route>
          <Route path="sort-faq" element={<SortFaqsPage />}></Route>

          {/* --Home Page video--- */}
          <Route path="list-videos" element={<ListVideoLanguagePage />}></Route>
          <Route
            path="create-video"
            element={<AddNewVideoLanguagePage />}
          ></Route>

          {/* ---Testimonial-- */}
          <Route
            path="list-testimonials"
            element={<ListTestimonialsPage />}
          ></Route>
          <Route
            path="create-testimonial"
            element={<AddNewTestimonialPage />}
          ></Route>
          <Route
            path="sort-testimonials"
            element={<SortTestimonialPage />}
          ></Route>

          {/* ---Slider--- */}
          <Route path="list-sliders" element={<ListSliderPage />}></Route>
          <Route path="create-slider" element={<AddNewSliderPage />}></Route>
          <Route path="sort-sliders" element={<SortSliderPage />}></Route>

          {/* translate */}
          {/* translate */}
          {/* translate */}
          <Route path="list-languages" element={<ListLanguagePage />}></Route>
          <Route
            path="create-language"
            element={<AddNewLanguagePage />}
          ></Route>

          <Route path="edit-language/:id" element={<AddNewLanguagePage />} />

          {/* MANAGE LOCATION */}
          {/* MANAGE LOCATION */}
          {/* MANAGE LOCATION */}
          {/* Countries */}
          {/* Countries */}
          {/* Countries */}
          <Route path="list-countries" element={<ListCountriesPage />}></Route>
          <Route path="create-country" element={<AddNewCountryPage />}></Route>
          <Route path="edit-country/:id" element={<AddNewCountryPage />} />

          {/* --Country--Details-- */}
          <Route
            path="list-country-details"
            element={<CountryDetailsPage />}
          ></Route>

          {/* ---states--- */}
          {/* ---states--- */}
          {/* ---states--- */}
          <Route path="list-states" element={<ListStatesPage />}></Route>
          <Route path="create-state" element={<AddNewStatePage />}></Route>

          {/* ---cities--- */}
          {/* ---cities--- */}
          {/* ---cities--- */}
          <Route path="list-cities" element={<ListCitiesPage />}></Route>
          <Route path="create-city" element={<AddNewCityPage />}></Route>

          {/* ----user-packages */}
          <Route path="list-packages" element={<ListPackagespage />}></Route>
          <Route path="create-package" element={<AddNewPackagePage />}></Route>
          {/* job--attributes */}

          {/* Language */}
          {/* Language */}
          {/* Language */}
          <Route
            path="list-language-levels"
            element={<LangLevelsPage />}
          ></Route>

          <Route
            path="create-language-level"
            element={<AddLanguageLevelPage />}
          ></Route>

          <Route
            path="sort-language-levels"
            element={<SortLanguageLevelsPage />}
          ></Route>

          <Route
            path="edit-language-level"
            element={<EditLanguageLevelPage />}
          ></Route>

          {/* Career */}
          {/* Career */}
          {/* Career */}
          <Route
            path="list-career-levels"
            element={<CareerLevelsPage />}
          ></Route>

          <Route
            path="create-career-level"
            element={<CreateCareerLevelPage />}
          ></Route>

          <Route
            path="edit-career-level/:id"
            element={<CreateCareerLevelPage />}
          />

          <Route
            path="sort-career-levels"
            element={<SortCareerLevelsPage />}
          ></Route>
          <Route
            path="edit-career-level"
            element={<EditCareerLevelPage />}
          ></Route>

          {/* Functional */}
          <Route
            path="list-functional-areas"
            element={<FunctionalAreasPage />}
          ></Route>
          <Route
            path="create-functional-area"
            element={<CreateFunctionAreaPage />}
          ></Route>
          <Route
            path="create-functional-area/:id"
            element={<CreateFunctionAreaPage />}
          ></Route>

          {/* Genders */}
          <Route path="list-genders" element={<GendersPage />}></Route>
          <Route path="create-gender" element={<CreateGenderPage />}></Route>
          <Route path="sort-genders" element={<SortGenderPage />}></Route>

          {/* Degree Levels */}
          <Route
            path="list-degree-levels"
            element={<DegreeLevelsPage />}
          ></Route>
          <Route
            path="create-degree-level"
            element={<CreateDegreeLevelPage />}
          ></Route>
          <Route
            path="create-degree-level/:id"
            element={<CreateDegreeLevelPage />}
          ></Route>

          {/* Degree Types */}
          <Route path="list-degree-types" element={<DegreeTypesPage />}></Route>
          <Route
            path="create-degree-type"
            element={<CreateDegreeTypePage />}
          ></Route>
          <Route
            path="create-degree-type/:id"
            element={<CreateDegreeTypePage />}
          ></Route>

          {/* Major Subjects */}
          <Route
            path="list-major-subjects"
            element={<MajorSubjectsPage />}
          ></Route>
          <Route
            path="create-major-subject"
            element={<CreateMajorSubjectsPage />}
          ></Route>
          <Route
            path="create-major-subject/:id"
            element={<CreateMajorSubjectsPage />}
          ></Route>
          <Route
            path="sort-major-subjects"
            element={<SortMajorSubjectsPage />}
          ></Route>

          {/* Result Types */}
          <Route path="list-result-types" element={<ResultTypesPage />}></Route>
          <Route
            path="create-result-type"
            element={<CreateResultTypePage />}
          ></Route>
          <Route
            path="sort-result-types"
            element={<SortResultTypesPage />}
          ></Route>

          {/* Result Types */}
          <Route
            path="list-marital-status"
            element={<MaritalStatusPage />}
          ></Route>
          <Route
            path="create-marital-status"
            element={<CreateMaritalStatusPage />}
          ></Route>
          <Route
            path="create-marital-status/:id"
            element={<CreateMaritalStatusPage />}
          ></Route>
          <Route
            path="sort-marital-status"
            element={<SortMaritalStatusPage />}
          ></Route>

          {/* Ownership Types */}
          <Route
            path="list-ownership-types"
            element={<OwnershipTypesPage />}
          ></Route>
          <Route
            path="create-ownership-type"
            element={<CreateOwnershipTypePage />}
          ></Route>
          <Route
            path="create-ownership-type/:id"
            element={<CreateOwnershipTypePage />}
          ></Route>
          <Route
            path="sort-ownership-types"
            element={<SortOwnershipTypesPage />}
          ></Route>

          {/* Salary Periods */}
          <Route
            path="list-salary-periods"
            element={<SalaryPeriodsPage />}
          ></Route>
          <Route
            path="create-salary-period"
            element={<CreateSalaryPeriodPage />}
          ></Route>
          <Route
            path="create-salary-period/:id"
            element={<CreateSalaryPeriodPage />}
          ></Route>
          <Route
            path="sort-salary-periods"
            element={<SortSalaryPeriodsPage />}
          ></Route>

          {/* Industries */}
          <Route
            path="list-industries"
            element={<ListIndustriesPage />}
          ></Route>
          <Route
            path="create-industry"
            element={<AddNewIndustryPage />}
          ></Route>
          <Route
            path="sort-industries"
            element={<SortIndustriesPage />}
          ></Route>

          {/* job Experiences */}
          <Route
            path="list-job-experiences"
            element={<ListJobExperiencesPage />}
          ></Route>
          <Route
            path="create-job-experience"
            element={<AddNewJobExperiencesPage />}
          ></Route>
          <Route
            path="create-job-experience/:id"
            element={<AddNewJobExperiencesPage />}
          ></Route>
          <Route
            path="sort-job-experiences"
            element={<SortJobExperincesPage />}
          ></Route>

          {/* job Skills */}
          <Route path="list-job-skills" element={<ListJobSkillsPage />}></Route>
          <Route
            path="create-job-skill"
            element={<AddNewJobSkillsPage />}
          ></Route>
          <Route
            path="create-job-skill/:id"
            element={<AddNewJobSkillsPage />}
          ></Route>
          <Route path="sort-job-skills" element={<SortjobSkillsPage />}></Route>

          {/* job Types */}
          <Route path="list-job-types" element={<ListJobTypesPage />}></Route>
          <Route
            path="create-job-type/:id"
            element={<AddNewJobTypesPage />}
          ></Route>
          <Route
            path="create-job-type"
            element={<AddNewJobTypesPage />}
          ></Route>
          <Route
            path="create-job-type/:id"
            element={<AddNewJobTypesPage />}
          ></Route>
          <Route path="sort-job-types" element={<SortJobTypesPage />}></Route>

          {/* job shifts */}
          <Route path="list-job-shifts" element={<ListJobShiftsPage />}></Route>
          <Route
            path="create-job-shift"
            element={<AddNewJobShiftsPage />}
          ></Route>
          <Route
            path="create-job-shift/:id"
            element={<AddNewJobShiftsPage />}
          ></Route>
          <Route path="sort-job-shifts" element={<SortJobShiftsPage />}></Route>

          {/* ----site--settigs */}
          <Route
            path="edit-site-setting"
            element={<SiteSettingsPage />}
          ></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
