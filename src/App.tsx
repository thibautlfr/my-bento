import { BentoLayout } from './layouts/BentoLayout.tsx';
import BentoGrid from './features/bento-grid/BentoGrid.tsx';
import Sidebar from './features/sidebar/Sidebar.tsx';
import Footer from './features/footer/Footer.tsx';

function App() {
  return (
    <>
      <BentoLayout.Root>
        <BentoLayout.Sidebar>
          <Sidebar />
        </BentoLayout.Sidebar>
        <BentoLayout.Content>
          <BentoGrid />
        </BentoLayout.Content>
      </BentoLayout.Root>
      <BentoLayout.Footer>
        <Footer />
      </BentoLayout.Footer>
    </>
  );
}

export default App;
