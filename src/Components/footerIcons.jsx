function Icons( {links,image,description} ){
  return (
    <a className="links" href={links} target='_blank' rel="noreferrer">
      <img src={require(`../Images/${image}.png`)} alt={description} />
    </a>
  );
}

export default Icons;