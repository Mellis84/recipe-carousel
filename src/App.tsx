import Layout from '@components/layout/Layout';
import RecipeCarousel from '@components/modules/RecipeCarousel';
import Container from '@components/layout/Container';

function App() {
  return (
    <Layout>
      <Container>
        <RecipeCarousel />
      </Container>
    </Layout>
  );
}

export default App;
