import { connect } from 'react-redux';
import Creator from 'src/components/Creator';
import { withRouter } from 'react-router-dom';
import { find } from 'src/selectors';

const mapStateToProps = (state, ownProps) => ({
  creator: find(state.creator.listCreator, ownProps.match.params.slug),
});

const mapDispatchToProps = {};

const container = connect(mapStateToProps, mapDispatchToProps)(Creator);
// on enrichi le conteneur avec des props liés à l'url
const containerWithRouter = withRouter(container);
// c'est le conteneur enrichi qu'on exporte
export default containerWithRouter;
