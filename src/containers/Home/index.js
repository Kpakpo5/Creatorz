//  La logique de branchements au store sera isolée dans des
// composants que l’on va appeler des Containers.
// HOC (High Order Component) : il s’agit d’une fonction qui retourne un composant.

import { connect } from 'react-redux';
import Home from 'src/components/Home';

const mapStateToProps = (state) => ({
  listCreator: state.creator.listCreator,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
