import PageHeader from "../components/common/pageHeader";

function About() {
  return (
    <div className="container py-4">
      <PageHeader title="About This App" description="Learn more about what this app does and how it works" />

      <div className="mt-4">
        <p>
          This digital business card application allows users to easily create, edit, and manage virtual business cards.
          It's designed for regular users, business owners, and administrators, with different permissions and tools for each type.
        </p>

        <h5 className="mt-4">Main Features</h5>
        <ul>
          <li>Create and update business cards</li>
          <li>Delete or favorite cards</li>
          <li>View a personalized list of cards</li>
          <li>Business users see only their cards</li>
          <li>Admins have access to all cards</li>
          <li>Search and filter cards dynamically</li>
          <li>Dark mode and mobile-responsive layout</li>
        </ul>

        <h5 className="mt-4">Technologies Used</h5>
        <ul>
          <li>React + Vite</li>
          <li>React Router</li>
          <li>Axios for HTTP requests</li>
          <li>Formik + Joi for validation</li>
          <li>Bootstrap 5 for layout</li>
          <li>JSON Server for backend simulation</li>
        </ul>

        <p className="mt-4">
          This project was built as part of a hands-on learning experience in modern frontend development.
        </p>
      </div>
    </div>
  );
}

export default About;
