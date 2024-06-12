const Meta = ({ title, keywords, description }) => {
  return (
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </head>
  );
};

Meta.defaultProps = {
  title: "HD Paprika",
  keywords: "HD Paprika, Supplier",
  description: "Supplier Paprika Pasirlangu",
};

export default Meta;
