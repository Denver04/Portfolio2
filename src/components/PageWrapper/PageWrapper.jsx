import { Helmet } from "react-helmet";

export const PageWrapper = (props) => {
    const { title, description, children } = props;
  return (
    <div style={{ width: "100%", height: "auto", backgroundColor: "#4a978b" }}>
      <Helmet>
        <title>{title}</title>
        <meta name={description} content="Nested component" />
      </Helmet>
      {children}
    </div>
  );
};
