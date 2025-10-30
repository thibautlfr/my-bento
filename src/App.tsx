import CrossLayout from './components/CrossLayout';
import SplitLayout from './components/SplitLayout';
import ProfileSidebar from './components/ProfileSidebar';
import Home from './pages/Home';

function App() {
  return (
    <CrossLayout>
      <SplitLayout leftContent={<ProfileSidebar />} rightContent={<Home />} />
    </CrossLayout>
  );
}

export default App;
